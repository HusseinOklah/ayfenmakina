import React from "react";
import Navigation from "../../components/Navigation";



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
      <body className="bg-red-800/80 text-base text-[#253342] font-medium tracking-[0.5px] m-0">
        <Navigation />
        <main className="container mx-auto min-h-screen pt-10">{children}</main>
      </body>
    </html>
  );
};

export default LocaleLayout;
