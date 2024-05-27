import { About, CustomButton, Footer, Hero, Services } from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <section className="masthead2 h-[90vh] flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-gray-900 text-6xl font-bold ">
            Welcome to <span className="italic">your</span> <br /> next website!
          </h2>
          <CustomButton
            title="download now!"
            containerStyles="bg-primary-rgb text-white mt-10 inline-block"
            url="#"
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
