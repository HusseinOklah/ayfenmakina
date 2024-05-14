import { FaPhoneVolume, FaEnvelope, FaXTwitter, FaTelegram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import Search from "./Search";


export default function HeaderTop() {
    return (
        <div className='container mx-auto text-sm border-b flex flex-row justify-between'>
            <div className="flex flex-row py-1">
                <div className='mx-3 first:ml-0 last:mr-0 flex flex-row justify-between items-center gap-1'>
                    {/* <FaPhoneVolume /> */}
                    <span className="h-4 w-4">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 10V8C19 5.17157 19 3.75736 18.1213 2.87868C17.2426 2 15.8284 2 13 2H11C8.17157 2 6.75736 2 5.87868 2.87868C5 3.75736 5 5.17157 5 8V16C5 18.8284 5 20.2426 5.87868 21.1213C6.75736 22 8.17157 22 11 22H13C15.8284 22 17.2426 22 18.1213 21.1213C19 20.2426 19 18.8284 19 16V14" stroke="#a3b9ff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14.5 19H9.5" stroke="#a3b9ff" stroke-width="1.5" stroke-linecap="round"></path> <path d="M21.9999 6L21.2235 7.55279C21.0827 7.83431 21.0827 8.16569 21.2235 8.44721L21.7763 9.55279C21.917 9.83431 21.917 10.1657 21.7763 10.4472L21.2235 11.5528C21.0827 11.8343 21.0827 12.1657 21.2235 12.4472L21.7763 13.5528C21.917 13.8343 21.917 14.1657 21.7763 14.4472L21.2235 15.5528C21.0827 15.8343 21.0827 16.1657 21.2235 16.4472L21.9999 18" stroke="#a3b9ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 6L2.77639 7.55279C2.91716 7.83431 2.91716 8.16569 2.77639 8.44721L2.22361 9.55279C2.08284 9.83431 2.08284 10.1657 2.22361 10.4472L2.77639 11.5528C2.91716 11.8343 2.91716 12.1657 2.77639 12.4472L2.22361 13.5528C2.08284 13.8343 2.08284 14.1657 2.22361 14.4472L2.77639 15.5528C2.91716 15.8343 2.91716 16.1657 2.77639 16.4472L2 18" stroke="#a3b9ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </span>
                    <span>+90 535 635 6533</span>
                </div>
                <div className='mx-3 first:ml-0 last:mr-0 flex flex-row justify-between items-center gap-1'>
                    {/* <FaEnvelope /> */}
                    <span className="h-4 w-4">
                        <svg fill="#a3b9ff" viewBox="0 0 100.354 100.354" id="Layer_1" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#a3b9ff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M93.09,76.224c0.047-0.145,0.079-0.298,0.079-0.459V22.638c0-0.162-0.032-0.316-0.08-0.462 c-0.007-0.02-0.011-0.04-0.019-0.06c-0.064-0.171-0.158-0.325-0.276-0.46c-0.008-0.009-0.009-0.02-0.017-0.029 c-0.005-0.005-0.011-0.007-0.016-0.012c-0.126-0.134-0.275-0.242-0.442-0.323c-0.013-0.006-0.023-0.014-0.036-0.02 c-0.158-0.071-0.33-0.111-0.511-0.123c-0.018-0.001-0.035-0.005-0.053-0.005c-0.017-0.001-0.032-0.005-0.049-0.005H8.465 c-0.017,0-0.033,0.004-0.05,0.005c-0.016,0.001-0.032,0.004-0.048,0.005c-0.183,0.012-0.358,0.053-0.518,0.125 c-0.01,0.004-0.018,0.011-0.028,0.015c-0.17,0.081-0.321,0.191-0.448,0.327c-0.005,0.005-0.011,0.006-0.016,0.011 c-0.008,0.008-0.009,0.019-0.017,0.028c-0.118,0.135-0.213,0.29-0.277,0.461c-0.008,0.02-0.012,0.04-0.019,0.061 c-0.048,0.146-0.08,0.3-0.08,0.462v53.128c0,0.164,0.033,0.32,0.082,0.468c0.007,0.02,0.011,0.039,0.018,0.059 c0.065,0.172,0.161,0.327,0.28,0.462c0.007,0.008,0.009,0.018,0.016,0.026c0.006,0.007,0.014,0.011,0.021,0.018 c0.049,0.051,0.103,0.096,0.159,0.14c0.025,0.019,0.047,0.042,0.073,0.06c0.066,0.046,0.137,0.083,0.21,0.117 c0.018,0.008,0.034,0.021,0.052,0.028c0.181,0.077,0.38,0.121,0.589,0.121h83.204c0.209,0,0.408-0.043,0.589-0.121 c0.028-0.012,0.054-0.03,0.081-0.044c0.062-0.031,0.124-0.063,0.181-0.102c0.03-0.021,0.057-0.048,0.086-0.071 c0.051-0.041,0.101-0.082,0.145-0.129c0.008-0.008,0.017-0.014,0.025-0.022c0.008-0.009,0.01-0.021,0.018-0.03 c0.117-0.134,0.211-0.288,0.275-0.458C93.078,76.267,93.083,76.246,93.09,76.224z M9.965,26.04l25.247,23.061L9.965,72.346V26.04z M61.711,47.971c-0.104,0.068-0.214,0.125-0.301,0.221c-0.033,0.036-0.044,0.083-0.073,0.121l-11.27,10.294L12.331,24.138h75.472 L61.711,47.971z M37.436,51.132l11.619,10.613c0.287,0.262,0.649,0.393,1.012,0.393s0.725-0.131,1.011-0.393l11.475-10.481 l25.243,23.002H12.309L37.436,51.132z M64.778,49.232L90.169,26.04v46.33L64.778,49.232z"></path></g></svg>                    </span>
                    <span>eng.hio1978@gmail.com</span>
                </div>
            </div>
            <div className="flex flex-row py-1">
                <div className='mx-3 first:ml-0 last:mr-0'>
                    <Search />
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