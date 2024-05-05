import React from "react";
import Header from "../../components/Header/Header";
import { FaChevronLeft , FaChevronRight } from "react-icons/fa";



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
      <body className="bg-white text-base text-[#253342] font-medium tracking-[0.5px] m-0">
        <Header locale={locale} />
        {children}
      </body>
    </html>
  );
};

export default LocaleLayout;
