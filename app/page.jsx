import {
  About,
  CustomButton,
  Footer,
  Hero,
  Services,
  Navbar,
  FunFacts,
  OurTeam,
} from "@/components";
import { ourSkillsContent } from "@/constants";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <section className="section-container">
        <h2 className="capitalize text-grayish text-2xl text-center font-semibold">
          our skills
        </h2>
        <div className="grid gap-7 md:grid-cols-2 grid-cols-1 mt-14">
          {ourSkillsContent.map((skill) => (
            <div
              className="flex flex-col items-start gap-2"
              key={skill.skillTitle}>
              <h4 className="text-grayish font-medium text-base">
                {skill.skillTitle}
              </h4>
              <div className="border-4 border-grayish h-5 w-full">
                <div
                  className="bg-gray-600 h-full"
                  style={{ width: `${skill.skillPercent}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-gray-100">
        <section className="section-container">
          <div className="py-14 flex flex-col justify-between items-start xl:flex-row xl:items-center">
            <div>
              <h2 className="text-grayish text-2xl font-bold">
                Download Our Pdf
              </h2>
              <p className="text-sm mt-2 max-w-[800px] w-full">
                Inspired by nature, follow technology, appreciate the classics.
                You can build modern & professional websites with Unika. The
                possibilities are just endless.
              </p>
            </div>
            <div>
              <a
                href=""
                className="inline-block bg-grayish py-2 px-8 text-white mt-6 hover:bg-slate-500 transition duration-500">
                Download
              </a>
            </div>
          </div>
        </section>
      </div>
      <Services />
      <FunFacts />
      <OurTeam />
    </main>
  );
}
