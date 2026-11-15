import React, { createContext, useContext, useState, useEffect } from 'react';

const UTMContext = createContext();

export const UTMProvider = ({ children }) => {
  const [utmParams, setUtmParams] = useState({
    utm_source: 'direct',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: ''
  });

  useEffect(() => {
    // Extract parameters from URL query string
    const urlParams = new URLSearchParams(window.location.search);
    const params = {};

    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
      const val = urlParams.get(param);
      if (val) {
        params[param] = val;
      }
    });

    if (Object.keys(params).length > 0) {
      setUtmParams(prev => ({ ...prev, ...params }));
      // Store in sessionStorage to persist across route navigation
      sessionStorage.setItem('lionreach_utm', JSON.stringify({ ...utmParams, ...params }));
    } else {
      const stored = sessionStorage.getItem('lionreach_utm');
      if (stored) {
        try {
          setUtmParams(JSON.parse(stored));
        } catch (e) {
          // Fallback to default
        }
      }
    }
  }, []);

  return (
    <UTMContext.Provider value={utmParams}>
      {children}
    </UTMContext.Provider>
  );
};

export const useUTM = () => useContext(UTMContext);
