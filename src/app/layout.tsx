import React from "react";
import "../styles/main.css"
import {unstable_setRequestLocale} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'fr', 'ar', 'tr'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({children, params: {locale}}) {
    unstable_setRequestLocale(locale);
    return (
      <html><body>
      {children}  
      </body></html>
      
    );
}
