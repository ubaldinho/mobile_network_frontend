import Image from "next/image";
import Link from "next/link";

const HeaderTop = () => {
  return (
    <div className="bg-[var(--bg-1)] border-b lg:border-b-0">
      <div className="container mx-auto flex justify-between py-3 lg:py-5 gap-1">
        <Link href="/" className="flex items-center">
          <Image
            src="/img/logo.png"
            className="self-center hidden xl:block"
            width={172}
            height={48}
            alt="logo"
            priority
          />
          <Image
            src="/img/favicon.png"
            className="self-center xl:hidden w-[40px] h-[40px] ml-3"
            width={56}
            height={40}
            alt="logo"
            priority
          />
        </Link>
        <div className="flex divide-x-[1px]">
          <div className="flex items-center gap-5 px-2 xl:px-4">
          <Image
            src="/img/whatsapp-logo.png"
            className="self-center  w-[40px] h-[40px] ml-3"
            width={56}
            height={40}
            alt="logo"
            priority
          />
            <div className="flex-col hidden lg:flex">
              <span className="text-xs"> Whatsapp Messenger</span>
              <Link href="tel:+237 653251792" className="text-base">
                (+237) 653251792
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-5 px-2 xl:px-4">
            <i className="las la-envelope-open bg-[var(--secondary)] text-[var(--neutral-700)] text-2xl p-2 rounded-full"></i>
            <div className="flex-col hidden lg:flex">
              <span className="text-xs">Our Mail</span>
              <Link href="mailto:debra.holt@example.com" className="text-base">
                ubaldi.leo@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-5 px-2 xl:px-4">
            <i className="las la-map-marker-alt bg-[var(--tertiary)] text-[var(--neutral-700)] text-2xl p-2 rounded-full"></i>
            <div className="flex-col hidden lg:flex">
              <span className="text-xs">Our Location</span>
              <span className="text-base">Rue Melen , Pharmacie Emia</span>
            </div>
          </div>
        </div>
        <Link href="/pricing-plan" className="btn-primary-lg hidden md:block">
          Subscribe
        </Link>
      </div>
    </div>
  );
};

export default HeaderTop;
