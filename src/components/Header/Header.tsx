// Header.tsx
import React from 'react';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

interface HeaderProps {
  locale: string;
}

export default function Headers( params:HeaderProps ) {
  

  return (
    <header className='w-full'>
      <HeaderTop />
      <HeaderBottom lang={params.locale} />
    </header>
  );
}

