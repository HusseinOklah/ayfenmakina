import HeaderLink from './HeaderLink';

import { useTranslations } from 'next-intl';
interface HeaderProps {
    lang: string;
  }

export default function HeaderBottom(params:HeaderProps){
	const t = useTranslations('HeaderLinks')
    return(
        <div className='w-full bg-[#ac2828] text-white text-base'>
            <div className='container mx-auto '>
							<nav>
								<ul className='flex gap-6'>
									<HeaderLink lang={params.lang} translationKey='home'/>
									<HeaderLink lang={params.lang} translationKey='products' />
									<HeaderLink lang={params.lang} translationKey='services' />
									<HeaderLink lang={params.lang} translationKey='contact' />
									<HeaderLink lang={params.lang} translationKey='about'  />
								</ul>
							</nav>
          </div>
        </div>
    );
}