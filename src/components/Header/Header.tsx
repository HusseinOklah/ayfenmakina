import { useTranslations } from 'next-intl';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

export default function Navigation() {
  return (
    <header className="text-primary-200 hidden md:block sticky top-0 bg-primary-800 border-b-4 border-secondry-600 z-50">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
}