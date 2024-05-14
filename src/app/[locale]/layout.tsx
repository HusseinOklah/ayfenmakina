import React from "react";
import Footer from "../../components/Footer/Footer";
import PageWrapper from "../../components/Wrappers/PageWrapper";
import MainWrapper from "../../components/Wrappers/MainWrapper";
import Header from "../../components/Header/Header";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  return (
    <html lang={locale}>
      <PageWrapper>
        <Header />
        {/* <Header lang={locale} /> */}
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </PageWrapper>
    </html>
  )
}