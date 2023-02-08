import AppleIcon from "../../../../icons/socials/appleIcon";
import FacebookIcon from "../../../../icons/socials/facebookIcon";
import GoogleIcon from "../../../../icons/socials/googleIcon";
const social_logins = [
  {
    title: "Google",
    Component: GoogleIcon,
    text: "Continue with Apple",
    style:
      "flex items-center p-4 border-2 border-gray bg-white rounded-lg transition duration-120 ease-out hover:ease-in hover:bg-font-gray/10 hover:border-font-gray/10",
  },
  {
    title: "Apple",
    Component: AppleIcon,
    text: "Continue with Apple",
    style:
      "flex items-center p-4 text-white border-2 bg-black border-black rounded-lg transition duration-120 ease-out hover:ease-in hover:bg-black/90 hover:border-black/90",
  },
  {
    title: "Facebook",
    Component: FacebookIcon,
    text: "Continue with Facebook",
    style:
      "flex items-center p-4 text-white border-2 bg-fblue border-fblue rounded-lg transition duration-120 ease-out hover:ease-in hover:bg-fblue/90 hover:border-fblue/90",
  },
];

export default social_logins;
