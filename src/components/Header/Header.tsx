import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';
import Image from 'next/image';
import ProductsDropMenu from './ProductsDropMenu';
import { FaEnvelope, FaPhoneVolume, FaTelegram, FaXTwitter } from 'react-icons/fa6';
import { FaFacebookSquare } from 'react-icons/fa';
import Link from 'next/link';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

export default function Navigation(locale: string) {
  const t = useTranslations('Navigation');

  return (
    <header className="text-primary-200 sticky top-0 bg-primary-800 border-b-4 border-b-secondry-600 z-50">
      <HeaderTop />
      <HeaderBottom lang={locale} />
    </header>
  );
}

