import React from "react";
import Navigation from "../../components/Header/Navigation";
import Footer from "../../components/Footer/Footer";



interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const LocaleLayout: React.FC<LocaleLayoutProps> = ({
  children,
  params: { locale },
}) => {
  return (
    <html lang={locale}>
      <body className="bg-primary-50 min-h-screen text-base text-primary-800 font-medium m-0">
        <Navigation />
        <main className="container mx-auto pt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default LocaleLayout;
