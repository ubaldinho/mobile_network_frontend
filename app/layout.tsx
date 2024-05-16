import "@/public/styles/line-awesome.min.css";
import "@/public/styles/styles.scss";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Placewise - Online Booking NextJS Template",
  description: "A nextjs template for online booking system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <link
                        href="https://rsms.me/inter/inter.css"
                        rel="stylesheet"
                    />
      </head>
      <body
        className={`${inter.className} bg-[var(--bg-1)] text-[var(--neutral-700)]`}>
        {children}
      </body>
    </html>
  );
}
