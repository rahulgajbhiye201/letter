import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
import { UrlProvider } from "@/context/UrlContext";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";

export const metadata: Metadata = {
  title: "Letter",
  description: "Letter",
  icons: {
    icon: "/letter.svg", // /public path
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} relative h-full antialiased`}>
          <UrlProvider>
            <main className="relative flex flex-col min-h-screen">
              <Image
                src={`/background.svg`}
                alt="Valentine background"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
                className="size-auto -z-10"
              />
              <div className="flex-grow flex-1 flex justify-between flex-col">
                {user !== null ? <Navbar /> : <></>}
                {children}
                {user !== null ? <Footer /> : <></>}
              </div>
            </main>
          </UrlProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
