"use client";
import CommonHeader from "@/components/CommonHeader";
import Footer from "@/components/Footer";
import HeaderTop from "@/components/HeaderTop";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderTop />
      <CommonHeader />
      {children}
      <Footer />
    </>
  );
}
