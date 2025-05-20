import React from 'react'
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
