import { About, Contact, Footer, Hero, Navbar, Services } from "@/components";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <section>
        <Hero />
      </section>
      <About />
      <section className="section w-full">
        <Services />
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
