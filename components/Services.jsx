import { services } from "@/constants";

function Services() {
  return (
    <div className="bg-primary-rgb" id="services">
      <div className="px-4 py-28 max-w-[1200px] w-full m-auto">
        <div className="text-center">
          <h1 className="font-bold text-[rgba(236,184,7,1)] text-lg">
            SERVICES
          </h1>
          <p className="font-bold text-5xl text-white">What We Offer</p>
        </div>
        <div className="flex flex-wrap gap-8 mt-10">
          {services.map((service) => (
            <div
              className="flex flex-col items-center flex-1"
              key={service.title}>
              <span className="flex items-center justify-center w-[150px] h-[150px] rounded-full shadow bg-white">
                <i
                  className={`${service.icon} text-primary-rgb text-4xl font-bold `}></i>
              </span>
              <div className="mt-4 text-center">
                <h4 className="text-white text-2xl font-bold">
                  {service.title}
                </h4>
                <p className="text-gray-300">{service.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
