import {
  About,
  CustomButton,
  Footer,
  Hero,
  Services,
  Navbar,
} from "@/components";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
