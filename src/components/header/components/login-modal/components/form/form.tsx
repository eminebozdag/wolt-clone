import clsx from "clsx";
import React, { useState } from "react";
import Button from "../../../../../button/button";

const Form = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function isValidEmail(email: any) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (e: any) => {
    if (!isValidEmail(e.target.value)) {
      setError("Please enter a valid email.");
    } else {
      setError("");
    }

    setEmail(e.target.value);
  };

  const handleSubmit = (e: any) => {
    isValidEmail(email) ? console.log("success status") : setIsFocused(true);
    e.preventDefault();
  };

  return (
    <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
      <div>
        <div className="relative w-full">
          <input
            className="pt-5 pb-1 px-4 z-50 text-base border-2 border-gray bg-transparent rounded-lg w-full hover:border-blue focus:outline-none focus:border-[2px] focus:border-blue active:border-blue transition duration-300 ease-out"
            type="email"
            value={email}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleChange}
          />
          <label
            className={clsx(
              "absolute left-4 right-4 top-[0.8rem] text-gray/70 w-0 transition duration-120 ease-out",
              isFocused || email ? "translate-y-[-0.5rem] text-xs" : "text-base"
            )}
          >
            Email
          </label>
        </div>
        {error && (
          <span className="text-red-500 px-4 text-xs transition duration-500 ease-in-out">
            {error}
          </span>
        )}
      </div>
      <Button
        type="submit"
        className="bg-blue mt-4 rounded-lg py-4 font-semibold text-white hover:bg-blue/90"
      >
        Next
      </Button>
    </form>
  );
};

export default Form;
