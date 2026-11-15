import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import csv from 'csv-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PERSONAL_DOMAINS = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com'];
const COUNTRY_MAPPING = {
  'IN': 'India', 'Ind.': 'India', 'india': 'India',
  'JP': 'Japan', 'Japan': 'Japan', 'SG': 'Singapore', 'singapore': 'Singapore', 'singapore ': 'Singapore',
  'MY': 'Malaysia', 'malaysia': 'Malaysia', 'Australia': 'Australia', 'Aus': 'Australia', 'AU': 'Australia', 'ID': 'Indonesia'
};

function tagIndustry(company = '') {
  const l = company.toLowerCase();
  if (l.includes('cloud') || l.includes('peak')) return 'Cloud Infrastructure';
  if (l.includes('byte') || l.includes('harbor')) return 'SaaS Platform';
  if (l.includes('fin') || l.includes('lytic') || l.includes('quantica')) return 'FinTech';
  if (l.includes('data') || l.includes('nest')) return 'Data Analytics';
  return 'Enterprise IT';
}

function normalizeName(name = '') {
  return name.trim().toLowerCase().split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function normalizeCountry(c = '') {
  const t = c.trim();
  return COUNTRY_MAPPING[t] || COUNTRY_MAPPING[t.toLowerCase()] || (t ? t.charAt(0).toUpperCase() + t.slice(1).toLowerCase() : 'Unknown');
}

async function cleanLeads() {
  const results = [];
  await new Promise((res, rej) => {
    fs.createReadStream(path.join(__dirname, 'leads_sample.csv'))
      .pipe(csv())
      .on('data', d => results.push(d))
      .on('end', res)
      .on('error', rej);
  });

  results.sort((a, b) => new Date(a.submitted_at) - new Date(b.submitted_at));
  const emailMap = new Map();
  const cleaned = [];
  let dup = 0, inv = 0, pers = 0, test = 0;
  const countries = {}, sources = {}, industries = {};

  for (const r of results) {
    const email = (r.email || '').trim().toLowerCase();
    const name = (r.full_name || '').trim();
    const comp = (r.company || '').trim();

    if (name.toLowerCase().includes('test') || email.includes('test') || comp.toLowerCase().includes('test')) { test++; continue; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { inv++; continue; }
    if (PERSONAL_DOMAINS.includes(email.split('@')[1])) { pers++; continue; }
    if (emailMap.has(email)) { dup++; continue; }

    emailMap.set(email, true);
    const row = {
      submitted_at: r.submitted_at,
      full_name: normalizeName(r.full_name),
      email,
      company: comp,
      country: normalizeCountry(r.country),
      company_size: r.company_size || 'Not Specified',
      utm_source: (r.utm_source || 'direct').trim().toLowerCase(),
      industry_tag: tagIndustry(comp)
    };
    cleaned.push(row);
    countries[row.country] = (countries[row.country] || 0) + 1;
    sources[row.utm_source] = (sources[row.utm_source] || 0) + 1;
    industries[row.industry_tag] = (industries[row.industry_tag] || 0) + 1;
  }

  // Manual CSV stringify
  const headers = ['submitted_at', 'full_name', 'email', 'company', 'country', 'company_size', 'utm_source', 'industry_tag'];
  const csvRows = [headers.join(',')];
  for (const c of cleaned) {
    csvRows.push([c.submitted_at, `"${c.full_name}"`, c.email, `"${c.company}"`, `"${c.country}"`, `"${c.company_size}"`, c.utm_source, `"${c.industry_tag}"`].join(','));
  }
  fs.writeFileSync(path.join(__dirname, 'cleaned-leads.csv'), csvRows.join('\n'));

  // Summary Report
  const report = `LIONREACH MEDIA - LEAD CLEANING REPORT
Total Processed: ${results.length}
Cleaned Leads: ${cleaned.length}
Removed: ${dup + inv + pers + test} (Duplicates: ${dup}, Personal: ${pers}, Invalid: ${inv}, Test: ${test})

Countries:
${Object.entries(countries).map(([k,v]) => ` - ${k}: ${v}`).join('\n')}

Sources:
${Object.entries(sources).map(([k,v]) => ` - ${k}: ${v}`).join('\n')}

Industries:
${Object.entries(industries).map(([k,v]) => ` - ${k}: ${v}`).join('\n')}
`;
  fs.writeFileSync(path.join(__dirname, 'summary-report.txt'), report);

  // Email Summary
  const email = `Subject: Weekly Lead Cleaning Summary

Hi Sales Team,
${cleaned.length} qualified leads are ready for outreach. ${dup + inv + pers + test} entries were removed.
Attached: cleaned-leads.csv
`;
  fs.writeFileSync(path.join(__dirname, 'email-summary.txt'), email);

  console.log('✅ Node.js Lead Cleaning Automation Completed Successfully!');
}

cleanLeads();
