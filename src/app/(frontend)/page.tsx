import About from "@/components/frontend/(main)/About";
import Contact from "@/components/frontend/(main)/Contact";
import Hero from "@/components/frontend/(main)/Hero";
import InEvidenza from "@/components/frontend/(main)/InEvidenza";

export default async function Page() {
  return (
    <section className="">
      <main>
        <Hero/>
        <About/>
        <InEvidenza/>
        <Contact/>
      </main>
    </section>
  )
}