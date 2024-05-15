/* eslint-disable react/no-unescaped-entities */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import PaySwitch from "@/components/PaySwitch";
import SubHeadingBtn from "@/components/SubHeadingBtn";
import brand1 from "@/public/img/brand-1.png";
import brand2 from "@/public/img/brand-2.png";
import brand3 from "@/public/img/brand-3.png";
import branh2 from "@/public/img/brand-4.png";
import brand5 from "@/public/img/brand-5.png";
import brand6 from "@/public/img/brand-6.png";
import brand7 from "@/public/img/brand-7.png";
import brand8 from "@/public/img/brand-8.png";
import brand9 from "@/public/img/brand-9.png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Page = ({params}: {params : {nature : string} }) => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  const handleButtonActiveChange = (index: number) => {
    if (index === activeButton) {
      setActiveButton(-1);
    } else {
      setActiveButton(index);
    }
  };

const terms = params.nature.replaceAll('_', ' ')
  return (
    <main>
      <div className="py-[5px] lg:py-[20px] bg-[var(--bg-2)] overflow-hidden px-3">
        <div className="mx-5 p-8 mb-5 bg-[var(--primary-light)]" >
          <h1 className="text-center text-4xl text-[var(--neutral-700)] font-bold leading-tight tracking-tight font-inter">
            GENERIC PLANS FOR {terms.toLocaleUpperCase()}
          </h1>
        </div>
        <div className="max-w-[570px] mx-auto flex flex-col items-center text-center">
          <SubHeadingBtn
            text="Pricing Plan"
            classes="bg-[var(--primary-light)]"
          />
          <h2 className="h2 mt-3">Choose Our Pricing Plan</h2>
          <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
            Here you have our differents pricing plan
            choose the option that fits you the most... 
            Feel free and explore the terms
          </p>
        </div>
        <div className="mb-10">
          <div className="container">
            <div className="row">
              <div className="col-span-12">
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <div className="flex items-center gap-4">
                    {/* <span className="inline-block text-xl font-medium clr-neutral-500">
                      Monthly
                    </span>
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className={`${enabled ? "bg-primary" : "bg-[#EBEBFD]"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}>
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className={`${
                          enabled
                            ? "translate-x-9 bg-white"
                            : "bg-primary translate-x-0"
                        }
            pointer-events-none inline-block h-[34px] w-[34px]  transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
                      />
                    </Switch> */ }
      <div className="flex bg-[var(--primary-light)] rounded">
      <PaySwitch
        label='monthly'
        onClick={() => handleButtonClick(1)}
        isActive={activeButton === 1}
      />
      <PaySwitch
        label="Quarterly"
        onClick={() => handleButtonClick(3)}
        isActive={activeButton === 3}
      />
      <PaySwitch
        label="semiannually"
        onClick={() => handleButtonClick(6)}
        isActive={activeButton === 6}
      />
      <PaySwitch
        label="annually"
        onClick={() => handleButtonClick(12)}
        isActive={activeButton === 12}
      />
       </div>

                  {//<PaySwitch></PaySwitch>
                  }
                 

                  </div> 
                  {/*<span className="block font-medium">
                    Yearly <span className="clr-primary-400">(Save 30%)</span>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-12 g-3 md:gap-0 overflow-hidden">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 m-3">
              <div className="bg-white p-6">
                <div className="text-center">
                  <div className="grid place-content-center w-20 h-20 rounded-full bg-[var(--bg-2)] mb-3 mx-auto">
                    <Image
                      width={56}
                      height={56}
                      src="/img/pricing-icon-1.png"
                      alt="image"
                      className=""
                    />
                  </div>
                  <p className="mb-0 text-2xl font-medium text-primary">
                    Basic
                  </p>
                  <div className="border border-dashed mt-8 mb-4"></div>
                  <h1 className="h2 clr-primary-400 mb-2 text-xl"> { 2500*activeButton} FCFA / {activeButton} month </h1>
                  <p className="m-1" >
                  Essential offer to start your driver business. Benefit from platform access and basic customer support.                  </p>
                  
                  <div className="border border-dashed mt-4 mb-8"></div>
                  <ul className="flex flex-col gap-4 max-text-30 mx-auto mb-8">
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var--primary)]"></i>
                      <p className="mb-0 text-lg text-start">
                      A One-Star-class vehicle is made available to you.
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var--primary)]"></i>
                      <p className="mb-0 text-lg text-start"> Access to 5 hours of work per day upon your initial login.
These working hours are flexible and can be accumulated. </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var--primary)]"></i>
                      <p className="mb-0 text-lg text-start">
                        Minimum Technology support
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var--primary)]"></i>
                      <p className="mb-0 text-lg text-start">
                      A personalized profile with a photo and vehicle information is provided.
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-times-circle text-[#ED5050]"></i>
                      <p className="mb-0 text-lg text-start">
                        Marketing support
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-times-circle text-[#ED5050]"></i>
                      <p className="mb-0 text-lg text-start">
                        Hotline support 24/7
                      </p>
                    </li>
                  </ul>
                  <Link href={"/payment-method/basic/" + activeButton} className="btn-outline  font-semibold">
                    Choose Plan
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 m-3">
              <div className="bg-primary p-6 ">
                <div className="text-center">
                  <div className="grid place-content-center w-20 h-20 rounded-full bg-[var(--tertiary)] mb-3 mx-auto">
                    <Image
                      width={56}
                      height={56}
                      src="/img/pricing-icon-2.png"
                      alt="image"
                      className=""
                    />
                  </div>
                  <p className="mb-0 text-2xl font-medium text-[var(--tertiary)]">
                    Standard
                  </p>
                  <div className="border border-dashed mt-8 mb-4"></div>
                  <h1 className="h2 text-[var(--tertiary)] mb-2 text-xl">{ 5000*activeButton} FCFA / {activeButton} month </h1>
                  <p className="m-1 text-white">
                  Ideal for increasing your earnings. Enjoy priority in ride requests and enhanced visibility among clients.                    </p>
                  <div className="border border-dashed mt-4 mb-8"></div>
                  <ul className="flex flex-col gap-4 max-text-30 mx-auto mb-8">
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var(--tertiary)]"></i>
                      <p className="mb-0 text-lg text-white text-start">
                      All the benefits of the basic package are included.                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var(--tertiary)]"></i>
                      <p className="mb-0 text-lg text-white text-start">
                        Legal support increasing as earning fidelity points
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var(--tertiary)]"></i>
                      <p className="mb-0 text-lg text-white text-start">
                      Work hours on the platform are set at a duration of 12 hours.
                                            </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var(--tertiary)]"></i>
                      <p className="mb-0 text-lg text-white text-start">
                      Profile with increased visibility in customer searches.                                            </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var(--tertiary)]"></i>
                      <p className="mb-0 text-lg text-white text-start">
                      You have the possibility to have a two-star car and receive increased assistance with maintenance.
                       </p>
                    </li>
                    

                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var(--tertiary)]"></i>
                      <p className="mb-0 text-lg text-white text-start">
                        Marketing support
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-times-circle text-[#ED5050]"></i>
                      <p className="mb-0 text-lg text-white text-start">
                        Hotline support 24/7
                      </p>
                    </li>
                  </ul>
                  <Link href={"/payment-method/premium/" + activeButton} className="btn-outline  bg-[var(--tertiary)]">
                    Choose Plan
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 m-3">
              <div className="bg-[var(--dark)] p-6 text-yellow-500" >
                <div className="text-center">
                  <div className="grid place-content-center w-20 h-20 rounded-full bg-[var(--tertiary)] mb-3 mx-auto">
                    <Image
                      width={56}
                      height={56}
                      src="/img/pricing-icon-3.png"
                      alt="image"
                      className=""
                    />
                  </div>
                  <p className="mb-0 text-2xl font-medium text-yellow-500">
                    Premium
                  </p>
                  <div className="border border-dashed mt-8 mb-4"></div>
                  <h1 className="h2 text-[var(--tertiary)] mb-2 text-xl"> { 10000*activeButton} FCFA / {activeButton} month </h1>
                  <p className="m-1">
                  The best choice to maximize your earnings. Access exclusive rides and clients, as well as a VIP vehicle.
                  </p>
                  <div className="border border-dashed mt-4 mb-8"></div>
                  <ul className="flex flex-col gap-4 max-text-30 mx-auto mb-8">
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var--primary)]"></i>
                      <p className="mb-0 text-lg text-start">
                      All the benefits of both the basic and standard packages are included.                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var--primary)]"></i>
                      <p className="mb-0 text-lg text-start">
                      A high-quality VIP service vehicle is made available to you.
                       </p>
                                          </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var--primary)]"></i>
                      <p className="mb-0 text-lg text-start">
                      Unlimited and flexible work hours on the platform without any restrictions or limitations. 
                                           </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var--primary)]"></i>
                      <p className="mb-0 text-lg text-start"> Legal support </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var--primary)]"></i>
                      <p className="mb-0 text-lg text-start">
                        Technology support at it's best
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var--primary)]"></i>
                      <p className="mb-0 text-lg text-start">
                        Marketing support
                      </p>
                    </li>
                    <li className="flex items-center text-2xl gap-2">
                      <i className="las la-check-circle text-[var--primary)]"></i>
                      <p className="mb-0 text-lg text-start">
                        Hotline support 24/7
                      </p>
                    </li>
                  </ul>
                  <Link href={"/payment-method/premium/" + activeButton} className="btn-outline  font-semibold text-[var(--tertiary)]">
                    Choose Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[60px] lg:pt-[120px]">
          <div className="container">
            <div className="grid grid-cols-1">
              <div className="col-span-1">
                <div className="xl:flex xl:items-center gap-xl-6">
                  <h5 className="mb-0 flex items-center gap-3 shrink-0">
                    Meet Our Valued Partner
                    <ArrowRightIcon className="w-5 h-5" />
                  </h5>
                  <Swiper
                    loop={true}
                    slidesPerView="auto"
                    spaceBetween={20}
                    breakpoints={{
                      375: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      992: {
                        slidesPerView: 4,
                      },
                      1200: {
                        slidesPerView: 6,
                        centeredSlides: true,
                        centeredSlidesBounds: true,
                      },
                      1920: {
                        slidesPerView: 7,
                        centeredSlides: true,
                        centeredSlidesBounds: true,
                      },
                    }}
                    className="min-[1900px]:!mr-[-400px]">
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand1} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand2} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand3} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={branh2} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand5} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand6} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand7} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand8} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand9} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand1} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand5} alt="image" className="" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <Image src={brand6} alt="image" className="" />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Pricing Plan --> */}
      {/* <!-- Service --> */}
      
      {/* <!-- /Service --> */}
      {/* <!-- Explore Property --> */}
      
      {/* Faq */}
    </main>
  );
};

export default Page;
