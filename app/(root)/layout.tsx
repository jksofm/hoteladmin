import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import { ClerkProvider } from "@clerk/nextjs";
import "react-toastify/dist/ReactToastify.css";
import { mergeOpenGraph } from "@/utils/mergeOpenGraph";

// const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ["400", "700", "300", "900", "500", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hoteladmin-nine.vercel.app"),
  openGraph: mergeOpenGraph(),
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
          <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        </head>
        <body className={roboto.className}>
          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-8xl">{children}</div>
            </section>
          </main>
          <MobileNav />
        </body>
      </html>
    </ClerkProvider>
  );
}
