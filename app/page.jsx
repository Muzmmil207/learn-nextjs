import { About, Hero, Navbar } from "@/components";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <section>
        <Hero />
      </section>
      <About />
    </main>
  );
}
