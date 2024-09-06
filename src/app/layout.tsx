import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";

import { AuthProvider } from "@/context/AuthContext";
import { classMerge } from "@/helpers/functions";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Anthony Brown - Motorola Technical Test",
    description: "Hire Anthony Brown for excellent Front End Development",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={classMerge(
                    geistSans.variable,
                    geistMono.variable,
                    "flex w-full flex-col items-center justify-center antialiased",
                )}
            >
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}
