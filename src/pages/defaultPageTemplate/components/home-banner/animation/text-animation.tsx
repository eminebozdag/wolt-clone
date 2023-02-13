import React, { useEffect, useState } from "react";
import ReactTextTransition from "react-text-transition";
import texts from "./text.config";
const TextAnimation = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 6000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="relative h-72 w-[32rem] text-font-gray text-[4rem] xs:text-white sm:text-[3rem] sm:w-[24rem] sm:h-40 font-text leading-[80px] ">
      <div className="absolute bottom-0">
        {`${texts[index % texts.length]}`.split(" ").map((n, i) => (
          <ReactTextTransition
            key={i}
            children={<span>{n}&nbsp;</span>}
            delay={i * 50}
            inline
          />
        ))}
      </div>
    </div>
  );
};

export default TextAnimation;
