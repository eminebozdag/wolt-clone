/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xs: {min: "1px", max: "639px"},
			sm: {min: "1px", max: "767px"},
			csm: {min: "640px", max: "767px"},
			mobile: {min: "640px"},
			mobileM: {min: "700px"},
			tablet: {min: "767px"},
			tabletM: {min: "901px"},
			tabletL: {min: "962px"},
			desktop: {min: "1025px"},
			desktopM: {min: "1200px"},
			desktopL: {min: "1535px"},
			// => @media (min-width: 640px and max-width: 767px) { ... }

			md: {min: "768px", max: "1023px"},
			cmd: {min: "0px", max: "1023px"},
			// => @media (min-width: 768px and max-width: 1023px) { ... }

			lg: {min: "1024px", max: "1279px"},
			clg: {min: "1024px", max: "1535px"},
			// => @media (min-width: 1024px and max-width: 1279px) { ... }

			xl: {min: "1280px", max: "1535px"},
			// => @media (min-width: 1280px and max-width: 1535px) { ... }

			"2xl": {min: "1536px"},
			// => @media (min-width: 1536px) { ... }
		},

		fontSize: {
			cxs: "10.5px",
			xxs: "12px",
			xs: "14px",
			sm: "16px",
			base: "18px",
			md: "20px",
			normal: "24px",
			lg: "30px",
			clg: "32px",
			xl: "40px",
			xxl: "46px",
		},

		fontFamily: {
			header: ["Omnes", "sans-serif"],
		},

		borderWidth: {
			1: "1px",
			0.2: "0.2px",
		},
		borderRadius: {4: "4px"},

		boxShadow: {
			"c-sm": "0 2px 10px -5px rgba(0, 0, 0, 0.2)",
			"c-md": "0 2px 80px -15px rgba(0, 0, 0, 0.1)",
		},

		extend: {
			colors: {
				"c-white": "#FFFFFF",
				"c-blue": "#119EE0",
				"c-fblue": "#3975ea",
				"c-light-yellow": "#F7F0CC",
				"c-green": "#D0E6C2",
				"c-purple": "#F0ECF4",
				"c-pink": "#ECBAAD",
				"c-lavender": "#EBEAF1",
				"c-yellow": "#F6EFC6",
				"c-lime": "#CBE2AE",
				"c-gray-light": "#EEEEEE",
				"c-gray-medium": "#616060",
				"c-section-gray": "#F2F3F5",
				"c-gray": "#E4E4E4",
				"c-font-gray": "#202125",
				"c-footer-gray": "#141414",
				"c-black": "#000000",
			},
			backgroundColor: (theme) => theme("colors"),
			textColor: (theme) => theme("colors"),

			gridTemplateColumns: {
				auto: "repeat(auto-fill,minmax(220px,1fr))",
			},

			transitionProperty: {
				height: "height",
			},
			variants: {
				height: ["responsive", "hover", "focus"],
			},
		},
	},
	plugins: [],
};
