import clsx from "clsx";
import React, {useEffect, useMemo, useState} from "react";
import ReactTextTransition from "react-text-transition";
import TEXTS from "./text.config";
const TextAnimation = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => setIndex((index) => index + 1), 6000);
		return () => clearInterval(intervalId);
	}, [index]);

	return useMemo(() => {
		return (
			<div
				className={clsx(
					"relative font-header mb-[44px]",
					"text-[3rem] tabletL:text-[4rem]",
					"w-full",
					"h-40 tablet:h-[16rem]",
					"text-c-white mobile:text-c-font-gray",
				)}
				data-testid="text-animation-component">
				<div className="absolute bottom-0 leading-[70px]">
					{`${TEXTS[index % TEXTS.length]}`.split(" ").map((n, i) => (
						<ReactTextTransition key={i} children={<span>{n}&nbsp;</span>} delay={i * 50} inline />
					))}
				</div>
			</div>
		);
	}, [index]);
};

export default TextAnimation;
