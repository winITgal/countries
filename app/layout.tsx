import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Title } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries",
  description: "Surf countries all over the world!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} bg-gray-100 dark:bg-[#202C36]`}>
        <Providers>
          <Title />
          <main className="w-full max-w-12xl p-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}