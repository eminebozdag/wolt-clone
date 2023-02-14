import AppleIcon from "../../../../../icons/socials/appleIcon";
import FacebookIcon from "../../../../../icons/socials/facebookIcon";
import GoogleIcon from "../../../../../icons/socials/googleIcon";
const social_logins = [
  {
    title: "Google",
    Component: GoogleIcon,
    text: "Continue with Google",
    style:
      "flex items-center font-semibold p-4 border-2 border-c-gray bg-c-white rounded-lg transition duration-120 ease-out hover:ease-in hover:bg-c-font-gray/10 hover:border-c-font-gray/10",
  },
  {
    title: "Apple",
    Component: AppleIcon,
    text: "Continue with Apple",
    style:
      "flex items-center font-normal p-4 text-c-white border-2 bg-c-black border-c-black rounded-lg transition duration-120 ease-out hover:ease-in hover:bg-c-black/90 hover:border-c-black/90",
  },
  {
    title: "Facebook",
    Component: FacebookIcon,
    text: "Continue with Facebook",
    style:
      "flex items-center font-normal p-4 text-c-white border-2 bg-c-fblue border-c-fblue rounded-lg transition duration-120 ease-out hover:ease-in hover:bg-c-fblue/90 hover:border-c-fblue/90",
  },
];

export default social_logins;
