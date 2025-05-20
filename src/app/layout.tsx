import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

// import Footer from "@/components/shared/footer";
import { ProgressBar } from "@/providers/progress-bar-provider";
import { ReactNode } from "react";
import {
  ClerkProvider,
} from '@clerk/nextjs'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Public Resume",
    absolute: "Public Resume"
  },
  description: "This is an resume builder, provides free resources to get you hired.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-lvh`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <ProgressBar className="h-[2px] bg-primary">
              {children}
            </ProgressBar>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}



export const Div: React.FC<{ children?: ReactNode, className?: string }> = ({ children, className }) => {
  return (
    <div
      className={`px-4 md:px-16 ${className}`}
    >
      {children}
    </div>
  );
}
