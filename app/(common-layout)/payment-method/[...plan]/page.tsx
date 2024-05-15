"use client";
import _features from "@/datas/features";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Page = ({ params }: { params: { plan: string[] } }) => {
  const choice = params.plan[0];
  const months = parseInt(params.plan[1]);

  const myfeatures = _features[choice].description;
  const transaction_id = "20p524";
  const date = new Date(Date.now());
  const subscription_date = date.toLocaleString();
  const tax = 4;
  const subtotal = _features[choice].prix * months;
  const service_charge = 10;
  const promo_discount = 20;
  const expiryDate = new Date();

  expiryDate.setMonth(date.getMonth() + months);

  const [isActive, setIsActive] = useState(0);

  let total_payable_amount =
    subtotal *
    (1 - tax / 100) *
    (1 + service_charge / 100) *
    (1 - promo_discount / 100);
total_payable_amount= parseFloat(total_payable_amount.toFixed(3))
  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          <div className="col-span-12 lg:col-span-6">
            <div className="pb-lg-0">
              <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6 mb-6">
                <h3 className="mb-0 h3"> Plan full-description </h3>
                <div className="border border-dashed my-6"></div>
                <div className="grid grid-cols-12 gap-4 md:gap-3 mb-8">
                  <div className="col-span-12 md:col-span-12">
                    <h4 className="m-4 px-4 mb-3 text-2xl font-semibold">
                      {" "}
                      Your plan Name :  {choice}  for {months} month{months>1 ? "s" : "" } 
                    </h4>
                    <div className="border border-dashed my-6"></div>
                  </div>

                  {myfeatures.map((valeur: string, index: number) => (
                    <div key={index} className="col-span-12 md:col-span-6">
                      <div className="border border-neutral-40 rounded-2xl bg-[var(--bg-1)] py-4 px-4 px-xxl-8">
                        <div className="flex items-center justify-between gap-3 mb-1">
                          <span className="clr-neutral-400 inline-block text-sm">
                            {valeur}
                          </span>
                          <i className="text-2xl las la-edit text-blue-500"></i>
                        </div>
                      </div>
                    </div>
                  ))}

                  {}
                </div>
                <div className="flex flex-wrap  items-center rounded-2xl">
                  <div className="rounded-2xl p-2"></div>

                  
                  <Link
                href="#"
                className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-medium w-full justify-center"
              >
                <span className="inline-block"> Payment </span>
              </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6 mb-6">
                <h4 className="mb-3 text-2xl font-semibold">
                  {" "}
                  Billing address{" "}
                </h4>
                <div className="flex flex-wrap gap-4 justify-between items-center">
                  <p className="mb-0">
                    Transaction ID:
                    <span className="text-primary">{transaction_id}</span>
                  </p>
                  <p className="mb-0">
                    Total Payable Amount:
                    <span className="text-primary">{total_payable_amount}</span>
                  </p>
                </div>
                <div className="border border-dashed my-6"></div>
                <div className="grid grid-cols-12 gap-4 lg:gap-6">
                  <div className="col-span-12 md:col-span-6">
                    <input
                      type="text"
                      className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-full py-3 px-5"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <input
                      type="email"
                      className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-full py-3 px-5"
                      placeholder="Enter Email"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <input
                      type="text"
                      className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-full py-3 px-5"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <div className="rounded-full border bg-[var(--bg-1)] pr-4">
                      <select
                        className="w-full bg-transparent px-5 py-3 focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option>USA</option>
                        <option value="1">New York</option>
                        <option value="2">Chicago</option>
                        <option value="3">Atlanta</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <textarea
                      rows={5}
                      className="w-full bg-[var(--bg-1)] border border-neutral-40 rounded-3xl focus:outline-none py-3 px-6"
                      placeholder="Enter Address"
                    ></textarea>
                  </div>
                 
                </div>
                <Link
                href="#"
                className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-medium w-full justify-center"
              >
                <span className="inline-block"> Payment </span>
              </Link>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6 mb-6">
              <h4 className="mb-6 text-2xl font-semibold">
                {" "}
                Enter Promo Code{" "}
              </h4>
              <div className="p-2 rounded-full border border-neutral-40 bg-[var(--bg-2)] mb-4">
                <form action="#" className="flex items-center">
                  <input
                    type="text"
                    placeholder="Promo Code"
                    className="w-full border-0 bg-transparent text-[var(--neutral-700)] px-3 py-2 ::placeholder-neutral-600 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="grid place-content-center px-6 py-3 rounded-full bg-primary text-white border-0 text-sm"
                  >
                    Apply
                  </button>
                </form>
              </div>
              <span className="block text-[var(--neutral-700)]">
                {promo_discount} % Off Discount
              </span>
            </div>

            <div className="bg-white rounded-2xl p-3 mb-6 sm:p-4 lg:p-6 border">
              <h4 className="mb-0 text-2xl font-semibold">Order Summary</h4>
              <div className="border border-dashed my-8"></div>
              <ul className="gap-4">
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Subscription date</p>
                  <p className="mb-0 font-medium">{subscription_date}</p>
                </li>

                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Renewal date</p>
                  <p className="mb-0 font-medium">
                    {expiryDate.toLocaleString()}
                  </p>
                </li>
                <div className="border border-dashed my-6"></div>

                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Subtotal</p>
                  <p className="mb-0 font-medium">{subtotal} FCFA</p>
                </li>
                <div className="border border-dashed my-6"></div>

                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Service charge</p>
                  <p className="mb-0 font-medium">{service_charge} %</p>
                </li>

                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Tax</p>
                  <p className="mb-0 font-medium">{tax} %</p>
                </li>
                <li className="flex items-center justify-between flex-wrap">
                  <p className="mb-0">Promo Code</p>
                  <p className="mb-0 font-medium">{promo_discount} %</p>
                </li>
              </ul>
              <div className="border border-dashed my-8"></div>
              <div className="flex items-center justify-between flex-wrap mb-6">
                <p className="mb-0">Payable Now</p>
                <p className="mb-0 font-medium">{total_payable_amount} FCFA</p>
              </div>
              <Link
                href="#"
                className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-medium w-full justify-center"
              >
                <span className="inline-block"> Payment </span>
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-3 sm:p-4 lg:p-6">
              <h4 className="mb-6 text-2xl font-semibold"> Payment methods </h4>
              <ul className="flex flex-wrap items-center gap-6">
                <li>
                  <div className="flex items-center gap-2">
                    <button
                      className={`flex items-center gap-2 h-14 p-4 rounded-lg hover:bg-blue-700 hover:text-white border-2 border-gray-500 hover:border-blue-700 p-4 ${isActive == 0 ? "bg-blue-700 text-white": '' } `}
                      onClick={() => {
                        setIsActive(0);
                      }}
                    >
                      <Image
                        src={"/img/credit-card.png"}
                        alt="Icone"
                        width={50}
                        height={50}
                      />
                      <label
                        className="inline-block text-lg font-medium cursor-pointer"
                        htmlFor="credit-card"
                      >
                        Credit card
                      </label>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <button
                      className={`flex items-center gap-2 h-14 p-4 rounded-lg hover:bg-blue-700 hover:text-white border-2 border-gray-500 hover:border-blue-700 p-4 ${isActive == 1 ? "bg-blue-700 text-white": '' } `}
                      onClick={() => {
                        setIsActive(1);
                      }}
                    >
                      <Image
                        src={"/img/debit-card.png"}
                        alt="Icone"
                        width={50}
                        height={50}
                      />
                      <label
                        className="inline-block text-lg font-medium cursor-pointer"
                        htmlFor="debit-card"
                      >
                        debit card
                      </label>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <button
                      className={`flex items-center gap-2 h-14 p-4 rounded-lg hover:bg-blue-700 hover:text-white border-2 border-gray-500 hover:border-blue-700 p-4 ${isActive == 2 ? "bg-blue-700 text-white": '' } `}
                      onClick={() => {
                        setIsActive(2);
                      }}
                    >
                      <Image
                        src={"/img/paypal-transparent.png"}
                        alt="Icone"
                        width={50}
                        height={50}
                      />
                      <label
                        className="inline-block text-lg font-medium cursor-pointer"
                        htmlFor="paypal"
                      >
                        Paypal
                      </label>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <button
                      className={`flex items-center gap-2 h-14 p-4 rounded-lg hover:bg-blue-700 hover:text-white border-2 border-gray-500 hover:border-blue-700 p-4 ${isActive == 3 ? "bg-blue-700 text-white": '' } `}
                      onClick={() => {
                        setIsActive(3);
                      }}
                    >
                      <Image
                        src={"/img/mobile--money.png"}
                        alt="Icone"
                        width={50}
                        height={50}
                      />
                      <label
                        className="inline-block text-lg font-medium cursor-pointer"
                        htmlFor="Mobile-Money"
                      >
                        Mobile Money
                      </label>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <button
                      className={`flex items-center gap-2 h-14 p-4 rounded-lg hover:bg-blue-700 hover:text-white border-2 border-gray-500 hover:border-blue-700 p-4 ${isActive == 4 ? "bg-blue-700 text-white": '' } `}
                      onClick={() => {
                        setIsActive(4);
                      }}
                    >
                      <Image
                        src={"/img/orange-money.png"}
                        alt="Icone"
                        width={50}
                        height={50}
                      />
                      <label
                        className="inline-block text-lg font-medium cursor-pointer"
                        htmlFor="Orange-Money"
                      >
                        Orange Money
                      </label>
                    </button>
                  </div>
                </li>
              </ul>
              <div className="border border-dashed my-6"></div>
              
                {isActive <= 2 ? (
                  <>
                  <div className="grid grid-cols-12 gap-4 lg:gap-6">
                    <div className="col-span-12">
                      <label
                        htmlFor="card-number"
                        className="text-xl font-medium block mb-3"
                      >
                        Card number
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-full py-3 px-5"
                        placeholder="2456 1665 5155 5151"
                        id="card-number"
                      />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <label
                        htmlFor="expiry-date"
                        className="text-xl font-medium block mb-3"
                      >
                        Expiry date
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-full py-3 px-5"
                        placeholder="DD/MM/YY"
                        id="expiry-date"
                      />
                    </div>
                    <div className="col-span-12 md:col-span-6">
                      <label
                        htmlFor="cvc"
                        className="text-xl font-medium block mb-3"
                      >
                        CVC / CVV
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-full py-3 px-5"
                        placeholder="3 digits"
                        id="cvc"
                      />
                    </div>
                    <div className="col-span-12">
                      <label
                        htmlFor="card-name"
                        className="text-xl font-medium block mb-3"
                      >
                        Name on card
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-full py-3 px-5"
                        placeholder="Jab Archur"
                        id="card-name"
                      />
                    </div>
                    </div>

                  </>
                ) : (
                  <div className="grid grid-cols-12 gap-2 lg:gap-1 " >
                    
                      <div className="col-span-6 m-6">
                        <label htmlFor=""> first name </label>

                        <input
                          type="text"
                          className="h-70 bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-lg py-3 px-5"
                          placeholder="first name"
                        />
                      </div>
                      <div className="col-span-6 m-6">
                        <label htmlFor=""> last name </label>
                        <input
                          type="text"
                          className="h-70 bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-lg py-3 px-5"
                          placeholder="last name"
                        />
                      </div>
                    
                    <div className="col-span-12 flex gap-3 h-70 bg-[var(--bg-1)] focus:outline-none border border-neutral-40 rounded-lg py-3 px-5"

                    >
                      <img src="/img/cameroon-flag.png" alt="Cameroon" />
                      <input
                      type="text"
                      placeholder="+237 699 71 87 51"
                    />
                    </div>

                    
                    
                  </div>
                )}
                <Link
                href="#"
                className="mt-4 link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-medium w-full justify-center"
              >
                <span className="inline-block"> Payment </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
