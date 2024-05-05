// HeaderLink.tsx
import React from 'react';
import { useTranslations } from 'next-intl';

export default function HeaderLink(params: { lang: string; translationKey: string;  }) {
  const  t  = useTranslations('HeaderLinks');

  return (
    <li className='py-5'>
      <a href={t(`${params.translationKey}.linkedpage`)}>{t(`${params.translationKey}.name`)}</a>
    </li>
  );
}
// 

