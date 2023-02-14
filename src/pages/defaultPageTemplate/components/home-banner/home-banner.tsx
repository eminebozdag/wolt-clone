import clsx from "clsx";
import React, { useState } from "react";
import FilledLocationIcon from "../../../../components/icons/filledLocationIcon";
import LocationIcon from "../../../../components/icons/locationIcon";
import TextAnimation from "./animation/text-animation";

interface Props {
  color: string;
  image: string;
}

const HomeBanner = ({ color, image }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [address, setAddress] = useState("");

  const handleChange = (e: any) => {
    setAddress(e.target.value);
    console.log(color);
  };

  return (
    <div
      className={clsx(
        "flex justify-center items-end h-[40rem] sm:h-[36rem] overflow-hidden",
        color
      )}
    >
      <div className="relative max-w-[75rem] w-full h-full flex justify-start items-end">
        <img
          src={`/assets/banner-images/${image}.jpg`}
          loading="lazy"
          alt="daily_banner"
          className="absolute top-0 right-[-30%] w-100px min-h-full min-w-[60rem] object-cover opacity-100"
        />
        <div className="hidden xs:block absolute top-0 w-full h-full z-10 bg-c-gray/40"></div>
        <div className="relative flex flex-col justify-center h-full px-7 z-20">
          <TextAnimation />

          <label className="font-header font-[600] text-lg xs:text-c-white xs:text-base mb-4">
            Delivery address
          </label>

          <div className="relative flex">
            <div className="relative w-full">
              <input
                className="pt-5 pb-1 px-4 pl-14 text-base border-2 border-c-gray bg-c-white rounded-lg w-full hover:border-c-blue focus:outline-none focus:border-[2px] focus:border-c-blue active:border-c-blue transition duration-300 ease-out"
                type="text"
                value={address}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={handleChange}
              />
              <label
                className={clsx(
                  "absolute w-60 left-14 right-4 top-[0.8rem] text-c-gray-medium transition duration-120 ease-out",
                  isFocused || address
                    ? "translate-y-[-0.5rem] text-xs"
                    : "text-base"
                )}
              >
                Choose a delivery address
              </label>
              <div className="absolute cursor-text w-6 h-6 top-4 left-5 right-auto">
                {address ? (
                  <FilledLocationIcon height={20} width={20} />
                ) : (
                  <LocationIcon height={20} width={20} />
                )}
              </div>
            </div>
          </div>
          <div className="mt-10"></div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
