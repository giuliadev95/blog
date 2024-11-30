/*
import type { Metadata } from "next";
import '../globals.css'
import { Header } from "@/components/Header";



export const metadata: Metadata = {
  title: "Layer Caker",
  description: "A blog about cake recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen">
        <Header/>
        {children}
      </body>
    </html>
  );
}
*/

import { Header } from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="bg-white min-h-screen">
      <Header />
      {children}
      <SanityLive />
    </section>
  );
}