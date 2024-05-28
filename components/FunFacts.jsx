import { funFactsContent } from "@/constants";
import SectionTitle from "@/components/SectionTitle";
import AnimatedCounter from "@/components/AnimatedCounter";
// import { AnimatedCounter, SectionTitle } from ".";

function FunFacts() {
  return (
    <section className="masthead2 ">
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
        <div className="section-container py-16">
          <SectionTitle
            title="SOME FUN FACTS"
            description="Before anyone is not told"
            textColor="text-white"
          />
          <div className="grid gap-7 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-4">
            {funFactsContent.map((item) => (
              <div
                className="flex flex-col justify-between items-center text-white"
                key={item.icon}>
                <div>
                  <i className={`${item.icon}`}></i>
                </div>
                <div className="w-full text-center mt-6">
                  <h4 className="text-3xl font-medium">
                    <AnimatedCounter amount={item.amount} />
                  </h4>
                  <h4 className="text-lg font-medium">{item.text}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FunFacts;
