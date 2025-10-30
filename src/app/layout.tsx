// This is the Sanity CMS editor's layout only

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tutor Life",
  description: "Blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        {children}
      </body>
    </html>
  );
}
