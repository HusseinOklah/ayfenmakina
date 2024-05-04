import React from "react";
import Header from "../../components/Header/Header";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {locale: string};
}

const LocaleLayout: React.FC<LocaleLayoutProps> = ({ children, params: {locale} }) => {
  return (
    <html lang={locale}>
      <body>
        <Header lang={locale}/>
        {children}
      </body>
    </html>
  );
}

export default LocaleLayout;
