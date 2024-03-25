import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import { ClerkProvider } from "@clerk/nextjs";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Administration",
  description: "A front-end web-app dashboard for Hotel Administration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/img/favicon.png" sizes="32x32" />
          <link rel="icon" href="/img/favicon.png" type="image/svg+xml" />
        </head>
        <body className={inter.className}>
          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-8xl">{children}</div>
            </section>
          </main>
          <MobileNav />
          {/* <Footer /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
