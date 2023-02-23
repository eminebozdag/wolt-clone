import clsx from "clsx";
import React, { useState } from "react";
import FilledLocationIcon from "../../../../components/icons/filled-location-icon";
import LocationIcon from "../../../../components/icons/location-icon";
import Input from "../../../../components/input";
import ShadowBackground from "../../../../components/shadow-background";
import TextAnimation from "./animation/text-animation";
interface Props {
  color: string;
  image: string;
}

const HomeBanner = ({ color, image }: Props) => {
  const [val, setVal] = useState("");

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
        <ShadowBackground type="default" className="xs:block" />

        <div className="relative flex flex-col justify-center h-full px-7 z-20 xs:px-2 min-w-[16rem]">
          <TextAnimation />

          <label className="font-header font-[600] text-lg xs:text-c-white xs:text-base mb-4">
            Delivery address
          </label>

          <div className="relative flex flex-col ">
            <Input
              label="Choose a delivery address"
              type="text"
              value={val}
              onChange={(e: any) => setVal(e.target.value)}
              start={{
                before: <LocationIcon height={20} width={20} />,
                after: <FilledLocationIcon height={20} width={20} />,
              }}
            ></Input>
          </div>
          <div className="mt-10"></div>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
