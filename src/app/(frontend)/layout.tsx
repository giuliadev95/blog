// import Footer from "@/components/frontend/footer/Footer";
// import Header from "@/components/frontend/Header";
// import { SanityLive } from "@/sanity/lib/live";

// export default function FrontendLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <section className="min-h-screen">
//       <header>
//         <Header />
//       </header>
//       {children}
//       <footer>
//         <Footer/>
//       </footer>
//       <SanityLive />
//     </section>
//   );
// } 

// Metadata + RootLayout for the frontend of the blog only (not the studio)
import type { Metadata } from "next";
import Footer from "@/components/frontend/footer/Footer";
import Header from "@/components/frontend/Header";

export const metadata: Metadata = {
  title: "Tutor Life",
  description: "Scopri come insegnare online con successo. Consigli, risorse e strumenti per tutor e insegnanti freelance.",
  keywords: [
    "insegnare online",
    "lezioni private",
    "tutor freelance",
    "insegnamento a distanza",
    "piattaforme di insegnamento",
  ],
  authors: [{ name: "Giulia Moukouyou", url: "https://giuliamoukouyou.com" }],
  creator: "Giulia Moukouyou",
  openGraph: {
    title: "Tutor Life",
    description:
      "Scopri come insegnare online con successo. Consigli pratici, risorse e strumenti per tutor e insegnanti freelance.",
    url: "/og-image.jpg",
    siteName: "Tutor Life",
    images: [
      {
        url: "https://www.tutorlife.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tutor Life - Scopri come insegnare online",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tutor Life | Impara a insegnare online",
    description:
      "Scopri come insegnare online con successo. Consigli, risorse e strumenti per tutor freelance.",
    creator: "@giuliamoukouyou",
    images: ["https://www.tutorlife.com/og-image.jpg"],
  },
};


// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo-pen.png" sizes="32x32" type="image/png" />
        <link rel="canonical" href="https://www.tutorlife.com" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <header>
          <Header/>
        </header>
        {children}
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}