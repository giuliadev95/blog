import About from "@/components/frontend/(main)/About";
import Hero from "@/components/frontend/(main)/Hero";
import Latest from "@/components/frontend/(main)/Latest";

export default async function Page() {
  return (
    <section className="">
      <main>
        <Hero/>
        <About/>
        <Latest/>
      </main>
    </section>
  )
}