import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					"50": "#e1f5fe",
					"100": "#b3e5fc",
					"200": "#81d4fa",
					"300": "#4fc3f7",
					"400": "#29b6f6",
					"500": "#03a9f4",
					"600": "#039be5",
					"700": "#0288d1",
					"800": "#0277bd",
					"900": "#01579b",
				},
			},
		},
		fontFamily: {
			body: [
				"Open Sans",
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"system-ui",
				"Segoe UI",
				"Roboto",
				"Helvetica Neue",
				"Arial",
				"Noto Sans",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			],
			sans: [
				"Open Sans",
				"ui-sans-serif",
				"system-ui",
				"-apple-system",
				"system-ui",
				"Segoe UI",
				"Roboto",
				"Helvetica Neue",
				"Arial",
				"Noto Sans",
				"sans-serif",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"Noto Color Emoji",
			],
		},
	},
	plugins: [],
};

export default config;
