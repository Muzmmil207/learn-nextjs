import { pricesContent } from "@/constants";
import SectionTitle from "./SectionTitle";

function Prices() {
  return (
    <section id="about-section" className="section-container">
      <SectionTitle title={"PRICES"} description="That how much" />
      <div className="grid gap-7 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-4">
        {pricesContent.map((item) => (
          <div
            className="border-t-4 border-grayish text-grayish text-center"
            key={item.icon}>
            <div className="bg-gray-100 py-4">
              <i className={item.icon}></i>
              <h5 className="text-2xl font-medium leading-none">
                {item.title}
              </h5>
            </div>
            <div className="bg-gray-200 py-6">
              <span className="text-4xl font-bold leading-none">
                ${item.price}
              </span>
            </div>
            <ul className="py-2 space-y-2">
              {item.data.map((d) => (
                <li className="text-sm">{d}</li>
              ))}
            </ul>
            <div className="bg-gray-200 py-6">
              <a
                href=""
                className="bg-grayish text-white py-2 px-3 text-sm hover:bg-slate-500 transition duration-500">
                Order Now!
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Prices;
