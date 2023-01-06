import WoltLogo from "../icons/woltLogo";
const Footer = () => {
  return (
    <footer className="bg-footer-gray p-[6.5rem]">
      <div className="flex flex-col max-w-[1140px] m-auto">
        <div className="flex-1 flex justify-between gap-2 mb-[6.5rem]">
          <div className="flex flex-col flex-[2_1_0%]">
            <WoltLogo
              height={26}
              width={72}
              viewBox="0 0 64 24"
              className="fill-white mb-[1.75rem]"
            />
            <div className="flex flex-wrap gap-[0.75rem]">
              <a
                href="https://apps.apple.com/fi/app/wolt/id943905271?af_adset=wolt&af_keywords=wolt&af_sub1=https%3A%2F%2Fwww.google.com%2F&af_sub2=%2Fen%2Fdeu%2Fberlin&c=DEU_Web_FTU_Search_Brand_Berlin_EN&pid=google"
                target="_blank"
              ></a>
              <a></a>
            </div>
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
