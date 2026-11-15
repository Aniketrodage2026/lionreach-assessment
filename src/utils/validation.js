// Blacklisted personal email provider domains
export const PERSONAL_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'yahoo.co.in',
  'outlook.com',
  'hotmail.com',
  'icloud.com',
  'aol.com',
  'mail.com',
  'zoho.com',
  'yandex.com',
  'protonmail.com',
  'gmx.com'
];

/**
 * Validates whether an email string is a valid business email.
 * Rejects empty emails, malformed syntax, and free/personal domains.
 */
export const validateBusinessEmail = (email) => {
  if (!email || typeof email !== 'string') {
    return { isValid: false, error: 'Email address is required.' };
  }

  const trimmed = email.trim().toLowerCase();

  // RFC 5322 standard regex for email syntax
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return { isValid: false, error: 'Please enter a valid email address.' };
  }

  const domain = trimmed.split('@')[1];
  if (PERSONAL_DOMAINS.includes(domain)) {
    return {
      isValid: false,
      error: 'Please enter your work email. Personal accounts (Gmail, Yahoo, Outlook) are not accepted.'
    };
  }

  return { isValid: true, error: '' };
};

/**
 * Validates all standard form fields
 */
export const validateLeadForm = (formData) => {
  const errors = {};

  if (!formData.fullName || formData.fullName.trim().length < 2) {
    errors.fullName = 'Full Name must be at least 2 characters.';
  }

  const emailCheck = validateBusinessEmail(formData.email);
  if (!emailCheck.isValid) {
    errors.email = emailCheck.error;
  }

  if (!formData.company || formData.company.trim().length < 2) {
    errors.company = 'Company name is required.';
  }

  if (!formData.country) {
    errors.country = 'Please select your target APAC country.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
