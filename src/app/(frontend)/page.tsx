import About from "@/components/frontend/(main)/About";
import Hero from "@/components/frontend/(main)/Hero";

export default async function Page() {
  return (
    <section className="">
      <main>
        <Hero/>
        <About/>
      </main>
    </section>
  )
}