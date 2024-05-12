import { FaPhoneVolume, FaEnvelope, FaGlobe, FaEllipsisVertical, FaXTwitter, FaTelegram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


export default function HeaderTop() {
  return (
    <div className='w-full bg-[#9f2323] text-white text-base'>
      <div className='container mx-auto '>
        <ul className='flex flex-row justify-between items-center text-center'>
          <li className='flex-shrink float-left flex flex-row justify-between items-center px-2 gap-2'>
            <FaEnvelope />
            <p>eng.hio1978@gmail.com</p>
          </li>
          <li className='text-blue-300'><FaEllipsisVertical /></li>
          <li className='flex-shrink float-left flex flex-row justify-between items-center px-2 gap-2'>
            <FaPhoneVolume />
            <p>+90 535 635 65303</p>
          </li>
          <li className='flex-grow'></li>
          <li className='flex-shrink float-right mx-1'>Search</li>
          <li className='text-blue-300'><FaEllipsisVertical /></li>
          <li className='flex-shrink float-right mx-1'><FaFacebookSquare /></li>
          <li className='flex-shrink float-right mx-1'><FaXTwitter /></li>
          <li className='flex-shrink float-right mx-1'><FaTelegram /></li>
          <li className='text-blue-300'><FaEllipsisVertical /></li>
          <li className='flex-shrink float-right mx-1 relative'>
            <FaGlobe />
            <div className='absolute hidden bg-blue-400 left-0 pt-2 w-12'>
              <label className=''>
                <option value="en">En</option>
                <option value="tr">TR</option>
              </label>
            </div>

          </li>
        </ul>
      </div>
    </div>
  );
}