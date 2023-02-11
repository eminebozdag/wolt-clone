import clsx from "clsx";
import React, { useState } from "react";
import Button from "../../../../../button/button";

const Form = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <form className="flex flex-col mt-4">
      <div>
        <div className="relative w-full">
          <input
            className="pt-5 pb-1 px-4 z-50 text-base border-2 border-gray bg-transparent rounded-lg w-full hover:border-blue focus:outline-none focus:border-[3px] focus:border-blue transition active:border-blue duration-300 ease-out"
            type="email"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <label
            className={clsx(
              "absolute left-4 right-4 top-[0.8rem] text-gray/70 w-0 transition duration-120 ease-out",
              isFocused ? "translate-y-[-0.5rem] text-xs" : "text-base"
            )}
          >
            Email
          </label>
        </div>
      </div>
      <Button className="bg-blue mt-4 rounded-lg py-4 font-semibold text-white hover:bg-blue/90">
        Next
      </Button>
    </form>
  );
};

export default Form;
