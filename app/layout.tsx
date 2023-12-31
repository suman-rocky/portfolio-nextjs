import "./globals.css";
import { Inter } from "next/font/google";

import Headers from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ToggleTheme from "@/components/toggleTheme";
import ThemeContextProvider from "@/context/themeContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "CodeJourneySuman",
	description:
		"Embark on a journey through the digital landscape with Suman, a seasoned web developer renowned for crafting responsive and visually stunning websites. With a profound expertise in HTML, CSS, JavaScript, TypeScript, Next.js, React, and C# ASP.NET, each project in my portfolio reflects a dedication to delivering high-performance and user-friendly web solutions. Dive into a showcase of innovative coding, creative design, and seamless functionality that leverages cutting-edge technologies. Elevate your online presence with a web developer who seamlessly blends technical prowess with artistic flair. Discover Suman's portfolio today for a glimpse into the future of web development!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className="!scroll-smooth">
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
				<div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
				<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<Headers />
						{children}
						<SpeedInsights />
						<Analytics />
						<Toaster position="top-center" />
						<Footer />
						<ToggleTheme />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
