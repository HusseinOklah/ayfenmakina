import { FaPhoneVolume, FaEnvelope, FaXTwitter, FaTelegram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";


export default function HeaderTop() {
  return (
    <div className='container mx-auto text-sm border-b flex flex-row justify-between'>
                <div className="flex flex-row py-1">
                    <div className='mx-3 first:ml-0 last:mr-0 flex flex-row justify-between items-center gap-1'>
                        <FaPhoneVolume />
                        <span>+90 535 635 6533</span>
                    </div>
                    <div className='mx-3 first:ml-0 last:mr-0 flex flex-row justify-between items-center gap-1'>
                        <FaEnvelope />
                        <span>eng.hio1978@gmail.com</span>
                    </div>
                </div>
                <div className="flex flex-row py-1">
                    <div className='mx-3 first:ml-0 last:mr-0 hidden'>
                        Search Area
                    </div>
                    <div className='mx-3 first:ml-0 last:mr-0 flex flex-row justify-between items-center gap-2'>
                        <Link className='hover:outline' href={'https://www.facebook.com/hussein.oklah'} target='_blank'><FaFacebookSquare /></Link>
                        <Link className='hover:outline' href={'/'}><FaXTwitter /></Link>
                        <Link className='hover:outline' href={'/'}><FaTelegram /></Link>
                    </div>
                    <div className='mx-3 first:ml-0 last:mr-0 '><LocaleSwitcher /></div>
                </div>
            </div>
  );
}