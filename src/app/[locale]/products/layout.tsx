import React from "react";
import Navigation from "../../../components/Header/Navigation";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const LocaleLayout: React.FC<LocaleLayoutProps> = ({
  children,
  params: { locale },
}) => {
  return (<>

    {children}
  </>

  );
};

export default LocaleLayout;
