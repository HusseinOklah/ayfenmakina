import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function NotFound() {
  // const t = useTranslations('NotFound')
  return (
    <html lang='en'>
      <body className='min-h-screen flex flex-col justify-center items-center'>
        <div className='flex flex-col gap-[12px] container mx-auto justify-center items-center w-[400 px] h-[400px] bg-secondry-800 text-secondry-50'>
          <h2 className='text-[50px]/[100px]'>'title'</h2>
          <p className='text-[24px]/[48px]'>'description'</p>
          <Link className='border font-bold border-primary-300 p-4 rounded-xl hover:bg-primary-300 hover:text-secondry-800' href="/">
            'button'
          </Link>

        </div>
      </body>
    </html>
  )
}
