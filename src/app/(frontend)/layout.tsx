import Footer from "@/components/frontend/footer/Footer";
import Header from "@/components/frontend/Header";
import { SanityLive } from "@/sanity/lib/live";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="min-h-screen">
      <header>
        <Header />
      </header>
      {children}
      <footer>
        <Footer/>
      </footer>
      <SanityLive />
    </section>
  );
} 