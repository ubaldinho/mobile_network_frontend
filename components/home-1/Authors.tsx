"use client";
import Link from "next/link";
import SubHeadingBtn from "../SubHeadingBtn";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules

const Authors = () => {
  return (
    <section className="bg-white pt-[20px] lg:pt-[20px] px-3 xl:px-0 py-5">
       <div className="mx-5 p-8 mb-5 bg-[var(--primary-light)]" >
          <h1 className="text-center text-4xl text-[var(--neutral-700)] font-bold leading-tight tracking-tight font-inter">
            SUBBSCRITON SERVICE HOME
          </h1>
        </div>
      
          <div className="xl:pl-[90px] px-3 ">
            <SubHeadingBtn text="Call To Action" classes="bg-white" />
            <h2 className="h2 mt-4 mb-8 max-w-[600px] leading-snug">
              Find a suitable profile with a perfect plan
            </h2>
            <div className="max-w-max">
              <Link href="/pricing-plan" className="btn-primary flex items-center gap-2">
                view profiles
                <i className="las la-long-arrow-alt-right text-xl"></i>
              </Link>
            </div>
          </div>
        
      
    </section>
  );
};

export default Authors;
