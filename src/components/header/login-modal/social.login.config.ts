import AppleIcon from "../../icons/socials/appleIcon";
import FacebookIcon from "../../icons/socials/facebookIcon";
import GoogleIcon from "../../icons/socials/googleIcon";

const SOCIAL_LOGIN = [
	{
		title: "Google",
		Component: GoogleIcon,
		text: "Continue with Google",
		style: "text-c-footer-gray font-bold bg-c-white border-c-gray hover:bg-c-font-gray/10 hover:border-c-font-gray/10",
	},
	{
		title: "Apple",
		Component: AppleIcon,
		text: "Continue with Apple",
		style: "text-c-white bg-c-footer-gray border-c-footer-gray hover:bg-c-footer-gray/90 hover:border-c-footer-gray/0",
	},
	{
		title: "Facebook",
		Component: FacebookIcon,
		text: "Continue with Facebook",
		style: "text-c-white bg-c-fblue border-c-fblue hover:bg-c-fblue/90 hover:border-c-fblue/10",
	},
];

export default SOCIAL_LOGIN;
