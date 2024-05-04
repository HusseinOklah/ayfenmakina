// Header.tsx
import React from 'react';
import HeaderLink from './HeaderLink';

interface Props {
    lang: string;
  }

const Header: React.FC<Props> = (params) => {

  return (
    <header>
      <nav>
        <ul className='flex gap-6'>
          <HeaderLink lang={params.lang} translationKey="home" linkedPage="/" />
          <HeaderLink lang={params.lang} translationKey="products" linkedPage="/products" />
          <HeaderLink lang={params.lang} translationKey="services" linkedPage="/services" />
          <HeaderLink lang={params.lang} translationKey="contact" linkedPage="/contact" />
          <HeaderLink lang={params.lang} translationKey="about" linkedPage="/about" />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
