'use client';

// React
import { useState } from 'react';

// Icons
import { BiSolidCategoryAlt } from 'react-icons/bi';

const items = [
   { id: 1, title: 'همه' },
   { id: 2, title: 'سرگرمی' },
   { id: 3, title: 'خوراکی و غذا' },
   { id: 4, title: 'ورزشی' },
   { id: 5, title: 'اجتماعی' },
   { id: 6, title: 'اقتصادی' },
];

function Categories() {
   const [chosenItem, setChosenItem] = useState(1);

   return (
      <div
         className="flex flex-nowrap items-center gap-3 overflow-auto px-5"
         style={{
            scrollbarWidth: 'none',
            '&::WebkitScrollbar': {
               display: 'none',
            },
         }}
      >
         {items?.map(item => (
            <button
               type="button"
               key={item?.id}
               className={`whitespace-nowrap flex items-center gap-1 rounded-[6px] border border-white px-3 py-1 text-sm transition-all duration-200
                 ${chosenItem === item?.id ? 'bg-white text-customBlue' : ' text-white'}`}
               onClick={() => setChosenItem(item?.id)}
            >
               <BiSolidCategoryAlt />
               {item?.title}
            </button>
         ))}
      </div>
   );
}

export default Categories;
