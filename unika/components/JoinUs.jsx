import { joinUsContent } from "@/constants";
import SectionTitle from "./SectionTitle";

function JoinUs() {
  return (
    <section className="bg-gray-100">
      <section className="section-container py-16">
        <SectionTitle
          title="join us"
          description="Follow us on social networks"
        />
        <div className="w-full flex justify-center items-center flex-wrap gap-8">
          {joinUsContent.map((i) => (
            <a href="" className="group">
              <div className="flex items-center justify-center w-10 h-10 bg-grayish rotate-45 group-hover:rotate-0 transition">
                <div className="w-9 h-9 border-2 flex items-center justify-center">
                  <span className="text-white text-2xl -rotate-45 group-hover:rotate-0">
                    <i className={i}></i>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </section>
  );
}

export default JoinUs;
