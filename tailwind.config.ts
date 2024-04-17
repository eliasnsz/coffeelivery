import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				background: "#F3F3F3",
			},
			boxShadow: {
				primary: "0px 4px 0px black",
			},
			dropShadow: {
				primary: "0px 4px 0px black",
				secondary: "0px 4px 0px #0000002a",
			},
			fontFamily: {
				title: "var(--font-title)",
				body: "var(--font-body)",
			},
		},
	},
	plugins: [],
};
export default config;
