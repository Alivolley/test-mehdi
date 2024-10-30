// Next
import Image from 'next/image';

// Icons
import { SiStarlingbank } from 'react-icons/si';
import { PiBellSimpleFill } from 'react-icons/pi';
import { HiMiniAdjustmentsVertical } from 'react-icons/hi2';
import { RiSearch2Line, RiArrowLeftSLine } from 'react-icons/ri';
import { HiSortAscending, HiOutlineLocationMarker } from 'react-icons/hi';
import { LuBookmarkMinus } from 'react-icons/lu';
import { GrGroup } from 'react-icons/gr';
import { TbCategory2 } from 'react-icons/tb';

// Components
import Categories from '@/components/categories';
import Footer from '@/components/footer';

export default function Home() {
   return (
      <div className="mx-auto max-w-[370px]">
         <header className="bg-customBlue pt-8">
            <div className="flex items-center justify-between px-5">
               <div className="flex items-center gap-3 text-white">
                  <SiStarlingbank className="text-[42px]" />
                  <div className="space-y-1 text-sm">
                     <p className="font-medium">اینستار</p>
                     <p className="font-thin">پلتفرم اینفلوئنسر مارکتینگ</p>
                  </div>
               </div>

               <button
                  type="button"
                  className="flex size-[42px] items-center justify-center rounded-full border border-white text-white"
               >
                  <p className="relative">
                     <PiBellSimpleFill className="text-[22px]" />
                     <span className="absolute right-[2px] top-[2px] size-1.5 rounded-full border border-customBlue bg-red-500" />
                  </p>
               </button>
            </div>

            <div className="mt-8 flex items-center justify-between gap-2 px-5">
               <div className="relative grow">
                  <input
                     type="text"
                     className="h-12 w-full rounded-[10px] border-none bg-white pe-3 ps-11 outline-none placeholder:text-[13px] placeholder:text-[#AFAFAF]"
                     placeholder="نام، آیدی، موضوع و ... را جستجو کنید ..."
                  />

                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2">
                     <RiSearch2Line className="text-2xl text-[#AFAFAF]" />
                  </button>
               </div>
               <button type="button" className="flex size-12 items-center justify-center rounded-[10px] bg-white">
                  <HiMiniAdjustmentsVertical className="text-2xl text-customBlue" />
               </button>
            </div>

            <div className="mb-3 mt-10 flex items-center justify-between px-5 text-sm text-white">
               <p className="font-medium">دسته بندی اینفلوئنسر ها</p>
               <p className="flex items-center gap-1 font-thin">
                  مشاهده همه <RiArrowLeftSLine />
               </p>
            </div>

            <Categories />

            <div className="mt-5 rounded-t-2xl bg-[#FDFDFD] px-5 pb-14 pt-6">
               <div className="flex items-center justify-between text-sm">
                  <p className="font-bold">اینفلوئنسر های اینستار</p>
                  <button
                     type="button"
                     className="flex items-center gap-1 rounded-md bg-[#F4F5F7] px-2 py-0.5 font-thin"
                  >
                     مناسب ترین <HiSortAscending />
                  </button>
               </div>
               <p className="mt-3 text-sm font-light text-[#9E9E9E]">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافینک است
               </p>

               <div className="mt-5 space-y-4">
                  <div
                     className="rounded-xl bg-white p-4"
                     style={{
                        boxShadow: '0px 0px 15px -3px rgba(0,0,0,0.15)',
                     }}
                  >
                     <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-3">
                           <Image src="/images/pic1.jpg" width={60} height={60} alt="pic" className="rounded-full" />
                           <div className="space-y-2 text-sm">
                              <p className="font-bold">هومن ایران منش</p>
                              <p className="font-thin tracking-[1px] text-[#9E9E9E]" dir="ltr">
                                 @hmn.iranmanesh
                              </p>
                           </div>
                        </div>
                        <LuBookmarkMinus className="text-2xl text-[#9E9E9E]" />
                     </div>

                     <p className="mt-3 text-sm font-light text-[#9E9E9E]">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافینک است
                     </p>

                     <div className="mt-3 flex items-center gap-2 text-[13px]">
                        <p className="rounded bg-[#F4F5F7] px-2.5 py-0.5">پست ویدئویی</p>
                        <p className="rounded bg-[#F4F5F7] px-2.5 py-0.5">ریلز</p>
                     </div>

                     <div className="mt-6 flex items-center justify-between border-b border-[#afafaf2c] pb-2.5 text-sm text-[#AFAFAF]">
                        <div className="flex items-center gap-1.5">
                           <GrGroup className="text-lg" /> ۶M دنبال کننده
                        </div>
                        <div className="flex items-center gap-1.5">
                           <TbCategory2 className="text-lg" /> سرگرمی
                        </div>
                        <div className="flex items-center gap-1.5">
                           <HiOutlineLocationMarker className="text-lg" /> تهران
                        </div>
                     </div>

                     <div className="mt-4 flex items-center justify-between">
                        <div>
                           <p>قیمت از :</p>
                           <p className="font-bold text-customBlue">
                              {(6000000).toLocaleString('fa-IR')} <span className="font-normal">تومان</span>
                           </p>
                        </div>

                        <button type="button" className="rounded-[10px] bg-customBlue px-5 py-2 text-white">
                           مشاهده جزییات
                        </button>
                     </div>
                  </div>

                  <div
                     className="rounded-xl bg-white p-4"
                     style={{
                        boxShadow: '0px 0px 15px -3px rgba(0,0,0,0.15)',
                     }}
                  >
                     <div className="flex items-center justify-between ">
                        <div className="flex items-center gap-3">
                           <Image src="/images/pic2.jpg" width={60} height={60} alt="pic" className="rounded-full" />
                           <div className="space-y-2 text-sm">
                              <p className="font-bold">شیخ حسین</p>
                              <p className="font-thin tracking-[1px] text-[#9E9E9E]" dir="ltr">
                                 @shikh_hosein
                              </p>
                           </div>
                        </div>
                        <LuBookmarkMinus className="text-2xl text-[#9E9E9E]" />
                     </div>

                     <p className="mt-3 text-sm font-light text-[#9E9E9E]">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافینک است
                     </p>

                     <div className="mt-3 flex items-center gap-2 text-[13px]">
                        <p className="rounded bg-[#F4F5F7] px-2.5 py-0.5">پست ویدئویی</p>
                        <p className="rounded bg-[#F4F5F7] px-2.5 py-0.5">ریلز</p>
                        <p className="rounded bg-[#F4F5F7] px-2.5 py-0.5">استوری</p>
                        <p className="rounded bg-[#F4F5F7] px-2.5 py-0.5">تولید محتوا</p>
                     </div>

                     <div className="mt-6 flex items-center justify-between border-b border-[#afafaf2c] pb-2.5 text-sm text-[#AFAFAF]">
                        <div className="flex items-center gap-1.5">
                           <GrGroup className="text-lg" /> ۳M دنبال کننده
                        </div>
                        <div className="flex items-center gap-1.5">
                           <TbCategory2 className="text-lg" /> سرگرمی
                        </div>
                        <div className="flex items-center gap-1.5">
                           <HiOutlineLocationMarker className="text-lg" /> تهران
                        </div>
                     </div>

                     <div className="mt-4 flex items-center justify-between">
                        <div>
                           <p>قیمت از :</p>
                           <p className="font-bold text-customBlue">
                              {(80000000).toLocaleString('fa-IR')} <span className="font-normal">تومان</span>
                           </p>
                        </div>

                        <button type="button" className="rounded-[10px] bg-customBlue px-5 py-2 text-white">
                           مشاهده جزییات
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Footer />
      </div>
   );
}
