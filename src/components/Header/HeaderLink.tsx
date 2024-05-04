// HeaderLink.tsx
import React from 'react';
import { useTranslations } from 'next-intl';

export default function HeaderLink(params: { lang: string; translationKey: string;  linkedPage:string }) {
  const  t  = useTranslations('header');

  return (
    <li>
      <a href={`${params.lang}/${params.linkedPage}`}>{t(`${params.translationKey}`)}</a>
    </li>
  );
}


