import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';
import Image from 'next/image';
import ProductsDropMenu from './ProductsDropMenu';

export default function Navigation() {
    const t = useTranslations('Navigation');

    return (
        <div className="bg-blue-800 text-blue-50">
            <div className='container mx-auto text-sm border-b flex flex-row justify-between'>
                <div className="flex flex-row">
                    <div className='mx-3 first:ml-0 last:mr-0 '>+90 535 635 6533</div>
                    <div className='mx-3 first:ml-0 last:mr-0 '>eng.hio1978@gmail.com</div>
                </div>
                <div className="flex flex-row">
                    <div className='mx-3 first:ml-0 last:mr-0 '>Search</div>
                    <div className='mx-3 first:ml-0 last:mr-0 '>Social</div>
                    <div className='mx-3 first:ml-0 last:mr-0 '><LocaleSwitcher /></div>
                </div>
            </div>
            <nav className="container mx-auto flex justify-between items-center ">
                <div className='float-start shrink m-2 '>
                    <Image src={'/logo.jpg'} alt={'logo'} width={180} height={80} />
                </div>
                <div className='float-start grow relative'>
                    <ul className='flex flex-row'>
                        <li><NavigationLink href="/">{t('home.name')}</NavigationLink></li>
                        <li className='group'>
                            <NavigationLink href="/products">{t('products.name')}</NavigationLink>
                            <ProductsDropMenu />
                        </li>
                        <li><NavigationLink href="/solutions">{t('solutions.name')}</NavigationLink></li>
                        <li><NavigationLink href="/projects">{t('projects.name')}</NavigationLink></li>
                        <li><NavigationLink href="/contact_us">{t('contact_us.name')}</NavigationLink></li>
                        <li><NavigationLink href="/about_us">{t('about_us.name')}</NavigationLink></li>
                    </ul>
                </div>
                <div className='flex justify-center items-center mr-4'>
                    {/* {en.Navigation.map((e) => e.about_us)} */}
                </div>
            </nav>
        </div>
    );
}