import SectionTitle from "@/components/SectionTitle";
import { servicesContent } from "@/constants";

const Services = () => {
  return (
    <section id="services-section" className="section-container">
      <SectionTitle title="Services" description="what we really know how" />
      <div className="grid gap-7 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-4">
        {servicesContent.map((item) => (
          <div
            className="flex flex-col justify-between items-center group"
            key={item.icon}>
            <div className="flex items-center justify-center w-14 h-14 bg-grayish rotate-45 group-hover:rotate-0 transition">
              <div className="w-12 h-12 border-2 flex items-center justify-center">
                <span className="text-white text-2xl -rotate-45 group-hover:rotate-0">
                  <i className={`${item.icon}`}></i>
                </span>
              </div>
            </div>
            <div className="w-full text-grayish text-center mt-4">
              <h3 className="font-normal text-[24px]">{item.title}</h3>
              <p className="text-sm mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <a
          href=""
          className="inline-block bg-grayish py-2 px-16 text-white text-lg mt-16 hover:bg-slate-500 transition duration-500 font-medium">
          Large Button
        </a>
      </div>
    </section>
  );
};

export default Services;
