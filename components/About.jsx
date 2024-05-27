import React from "react";
import { SectionTitle } from ".";
import { aboutContent } from "@/constants";

function About() {
  return (
    <section id="about-section" className="section-container">
      <SectionTitle title="about" description="little information" />
      <div className="grid gap-7 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-4">
        {aboutContent.map((item) => (
          <div className="flex justify-between group" key={item.icon}>
            <div className="flex items-center justify-center w-10 h-10 bg-grayish rotate-45 group-hover:rotate-0 transition">
              <div className="w-9 h-9 border-2 flex items-center justify-center">
                <span className="text-white -rotate-45 group-hover:rotate-0">
                  <i className={`${item.icon}`}></i>
                </span>
              </div>
            </div>
            <div className="w-[calc(100%-70px)] text-grayish">
              <h3 className="font-normal text-[24px]">{item.title}</h3>
              <p className="text-sm mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
