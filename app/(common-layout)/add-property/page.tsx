"use client";
import Accordion from "@/components/Accordion";
import CheckboxCustom from "@/components/Checkbox";
import CustomRangeSlider from "@/components/RangeSlider";
import { propertyAmenities } from "@/public/data/addpropertyAmenities";
import {
  ChevronDownIcon,
  CloudArrowUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const page = () => {
  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container">
        <div className="w-full xl:w-[83.33%] xxl:w-[66.66%] mx-auto">
          {/* Item 1 */}
          <div className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between items-center">
                  <h3 className="h3">Add Properties </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              initialOpen={true}>
              <div className="pt-4">
                <div className="border-t pt-4">
                  <p className="mb-4 text-xl font-medium">
                    Select Property Type :
                  </p>
                  <ul className="flex gap-6 flex-wrap">
                    <li>
                      <div className="flex items-center gap-2">
                        <input
                          className="accent-[var(--primary)] scale-125"
                          type="radio"
                          name="property-type"
                          id="general-settings"
                        />
                        <label
                          className="inline-block text-lg font-medium cursor-pointer"
                          htmlFor="general-settings">
                          General
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-center gap-2">
                        <input
                          className="accent-[var(--primary)] scale-125"
                          type="radio"
                          name="property-type"
                          id="featured-settings"
                        />
                        <label
                          className="inline-block text-lg font-medium cursor-pointer"
                          htmlFor="featured-settings">
                          Featured
                        </label>
                      </div>
                    </li>
                  </ul>
                  <p className="mt-6 mb-4 text-xl font-medium">Title:</p>
                  <input
                    type="text"
                    className="w-full border p-2 focus:outline-none rounded-md text-base"
                    placeholder="Write Title"
                  />
                  <p className="mt-6 mb-4 text-xl font-medium">Sale Price:</p>
                  <CustomRangeSlider />
                  <p className="mt-6 mb-4 text-xl font-medium">Description :</p>
                  <textarea
                    rows={5}
                    className="w-full border p-2 focus:outline-none rounded-md "
                    placeholder="Description.."></textarea>
                  <p className="mt-6 mb-4 text-xl font-medium">Tagline :</p>
                  <input
                    type="text"
                    className="w-full border p-2 focus:outline-none rounded-md  text-base"
                    placeholder="Your tag line"
                  />
                  <p className="mt-6 mb-4 text-xl font-medium"> Tag </p>
                  <select className="w-full bg-transparent px-5 py-3 focus:outline-none border rounded-md text-base pr-3">
                    <option>Choice</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </Accordion>
          </div>
          {/* Item 2 */}
          <div className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between items-center">
                  <h3 className="h3">Images & Video with Map </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              initialOpen={true}>
              <div className="pt-6">
                <div className="flex items-center justify-center border-dashed rounded-2xl w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full cursor-pointer bg-[var(--bg-2)] rounded-2xl border border-dashed">
                    <span className="flex flex-col items-center justify-center py-12">
                      <CloudArrowUpIcon className="w-[60px] h-[60px]" />
                      <span className="h3 clr-neutral-500 text-center mt-4 mb-3">
                        Drag & Drop
                      </span>
                      <span className="block text-center mb-6 clr-neutral-500">
                        OR
                      </span>
                      <span className="inline-block py-3 px-6 rounded-full bg-[#354764] text-white mb-10">
                        Select Files
                      </span>
                      <span className="flex items-center justify-center flex-wrap gap-5">
                        <span className="flex items-center gap-2">
                          <InformationCircleIcon className="w-5 h-5" />
                          <span className="block mb-0 clr-neutral-500">
                            Maximum allowed file size is 9.00 MB
                          </span>
                        </span>
                        <span className="flex items-center gap-2">
                          <InformationCircleIcon className="w-5 h-5" />
                          <span className="block mb-0 clr-neutral-500">
                            Maximum 10 files are allowed
                          </span>
                        </span>
                      </span>
                    </span>
                    <input type="file" id="dropzone-file" className="hidden" />
                  </label>
                </div>
                <p className="mt-6 mb-4 text-xl font-medium">Video Link :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="Any type video link"
                />
                <div className="mt-6">
                  <div className="h-[400px]">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2233.5934788396344!2d89.78232001463437!3d23.836268639364576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1688381345276!5m2!1sen!2sbd"></iframe>
                  </div>
                </div>
                <p className="mt-6 mb-4 text-xl font-medium">Address :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="Enter Address"
                />
              </div>
            </Accordion>
          </div>

          {/* Item 3 */}
          <div className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between items-center">
                  <h3 className="h3">Property Details </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              initialOpen={true}>
              <div className="pt-6">
                <p className="mb-4 text-xl font-medium"> Beds : </p>
                <select className="w-full bg-transparent p-3 focus:outline-none border rounded-md text-base">
                  <option>4</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <p className="mt-6 mb-4 text-xl font-medium">Bathrooms :</p>
                <select className="w-full bg-transparent p-3 focus:outline-none border rounded-md text-base">
                  <option>3</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <p className="mt-6 mb-4 text-xl font-medium">Garages :</p>
                <select className="w-full bg-transparent p-3 focus:outline-none border rounded-md text-base">
                  <option>1</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <p className="mt-6 mb-4 text-xl font-medium">Person :</p>
                <select className="w-full bg-transparent p-3 focus:outline-none border rounded-md text-base">
                  <option>8</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="3">4</option>
                  <option value="3">5</option>
                  <option value="3">6</option>
                  <option value="3">7</option>
                  <option value="3">8</option>
                </select>
                <p className="mt-6 mb-4 text-xl font-medium">Area (sq ft) :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="0"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Property ID :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="Enter ID"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Type :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="Enter type"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Area :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="Enter area"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Bedrooms :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="06"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Parking :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="3"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Dimensions :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="0"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Year Build :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="2023"
                />
              </div>
            </Accordion>
          </div>
          {/* Item 4 */}
          <div className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between items-center">
                  <h3 className="h3">Amenities</h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              initialOpen={true}>
              <div className="pt-6">
                <p className="text-xl font-medium"> Features : </p>
                <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
                  {propertyAmenities.map((item) => (
                    <li key={item} className="py-2">
                      <CheckboxCustom label={item} />
                    </li>
                  ))}
                </ul>
              </div>
            </Accordion>
          </div>
          {/* Item 5 */}
          <div className="bg-white p-4 sm:p-6 md:p-10 rounded-2xl">
            <Accordion
              buttonContent={(open) => (
                <div className="rounded-2xl flex justify-between items-center">
                  <h3 className="h3">Contact Information </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </div>
              )}
              initialOpen={true}>
              <div className="pt-6">
                <p className="mb-4 text-xl font-medium">Zip/Post Code :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="4"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Phone :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="Enter Number"
                />
                <p className="mt-6 mb-4 text-xl font-medium"> Fax : </p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="Enter Fax number"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Email :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="Enter Email"
                />
                <p className="mt-6 mb-4 text-xl font-medium">Website :</p>
                <input
                  type="text"
                  className="w-full border p-2 focus:outline-none rounded-md text-base"
                  placeholder="Enter website"
                />
                <Link
                  href="#"
                  className="link inline-flex items-center gap-2 py-3 px-6 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold mt-6">
                  <span className="inline-block"> Add New </span>
                </Link>
              </div>
            </Accordion>
          </div>

          <div className="py-6 md:py-10">
            <ul className="flex flex-col gap-4">
              <li>
                <CheckboxCustom label=" I agree to the privacy & policy" />
              </li>
              <li>
                <CheckboxCustom label="I agree with all terms & conditions" />
              </li>
            </ul>
          </div>

          <Link href="#" className="btn-primary font-semibold">
            <span className="inline-block"> Save & Preview </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
