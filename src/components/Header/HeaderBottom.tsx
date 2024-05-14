import HeaderLink from './HeaderLink';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import NavigationLink from './NavigationLink';
import ProductsDropMenu from './ProductsDropMenu';
import Logo from './Logo';


export default function HeaderBottom() {
	const t = useTranslations('Navigation')
	return (
		<nav className="relative container mx-auto flex justify-between items-center">
			<div className='h-4 flex'>
				<Logo />
			</div>

			<div className='float-start grow'>
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
			</div>
		</nav>
	);
}