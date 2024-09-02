import React from "react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/context/ThemeContext";
import config from "@/config.json";
import "@/styles/global.scss";

const inter = Open_Sans({
	subsets: ["latin", "vietnamese", "latin-ext"],
	display: "auto",
});

export const metadata: Metadata = {
	title: config.title,
	description: config.description,
	authors: [
		{
			name: config.author.name,
			url: config.author.contact.website,
		},
	],
	icons: [
		{ rel: "icon", type: "image/x-icon", url: "/favicon.ico" },
		{ rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
		{ rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
		{ rel: "icon", type: "image/png", sizes: "192x192", url: "/android-chrome-192x192.png" },
		{ rel: "icon", type: "image/png", sizes: "512x512", url: "/android-chrome-512x512.png" },
		{ rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
		{ rel: "mask-icon", color: "#5bbad5", url: "/safari-pinned-tab.svg" },
	],
	manifest: "/site.webmanifest",
	openGraph: {
		title: config.title,
		description: config.description,
	},
};

const RootLayout = async ({ children }: React.PropsWithChildren) => {
	return (
		<ThemeProvider>
			<html className={inter.className} lang="vi">
				<body className="bg-gray-0 overflow-x-hidden">{children}</body>
			</html>
		</ThemeProvider>
	);
};

export default RootLayout;
