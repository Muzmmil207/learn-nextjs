import { Hero, Navbar } from "@/components";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <section>
        <Hero />
      </section>
    </main>
  );
}
