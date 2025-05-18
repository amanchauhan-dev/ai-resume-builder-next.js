import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { ProgressBar } from "@/providers/progress-bar-provider";

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
    template: "%s - Resume Craft",
    absolute: "Resume Craft"
  },
  description: "This is an resume builder, provides free resources to get you hired.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
            <Header />
            <div className="px-4 md:px-16">
              {children}
            </div>
            <Footer />
          </ProgressBar>
        </ThemeProvider>
      </body>
    </html>
  );
}
