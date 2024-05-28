import {
  About,
  CustomButton,
  Footer,
  Hero,
  Services,
  Navbar,
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
        <div className="grid gap-7 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-14">
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
    </main>
  );
}
