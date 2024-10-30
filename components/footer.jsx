'use client';

// React
import { useState } from 'react';

// Icons
import { MdOutlineInsertChart } from 'react-icons/md';
import { FaCompass } from 'react-icons/fa';
import { TbNotes, TbMessage2 } from 'react-icons/tb';
import { FaRegUser } from 'react-icons/fa6';

const items = [
   { id: 1, title: 'میزکار', icon: <MdOutlineInsertChart /> },
   { id: 2, title: 'جستجو', icon: <FaCompass /> },
   { id: 3, title: 'کمپین ها', icon: <TbNotes /> },
   { id: 4, title: 'پیام ها', icon: <TbMessage2 /> },
   { id: 5, title: 'پروفایل', icon: <FaRegUser /> },
];

function Footer() {
   const [chosenItem, setChosenItem] = useState(1);

   return (
      <footer
         className="sticky inset-x-0 bottom-0 flex h-20 items-center bg-white text-sm"
         style={{
            boxShadow: '0px 0px 15px -3px rgba(0,0,0,0.15)',
         }}
      >
         {items?.map(item => (
            <button
               type="button"
               className={`flex flex-1 flex-col items-center gap-2 transition-all duration-200 ${
                  chosenItem === item?.id ? 'text-customBlue' : 'text-[#9e9e9ec0]'
               }`}
               key={item?.id}
               onClick={() => setChosenItem(item?.id)}
            >
               <p className="text-2xl">{item?.icon}</p>
               <p>{item?.title}</p>
            </button>
         ))}
      </footer>
   );
}

export default Footer;
