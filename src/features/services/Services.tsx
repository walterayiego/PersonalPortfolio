import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ContextData } from "../../apis/ContextProvider";
import { servicesData } from "../../constants/Constants";

function Services() {
  const { ref, inView }: any = useInView({ threshold: 0.1 });
  const { setFragment }: any = ContextData();

  useEffect(() => {
    inView && setFragment("services");
  }, [inView]);

  const slideIn = inView ? "slide_left" : "-translate-x-[200vw]";
  const fadeIn = inView ? "fade_in" : "opacity-0";
  return (
    <div
      ref={ref}
      className="w-screen self-center min-h-screen slide_left bg-black col items-center justify-center"
    >
      <div className="sections">
        <div className={slideIn}>
          <p className="text-white heading1 text-center">Services</p>
          <p className="text-white text-center"> Unleash Your Potential </p>
        </div>
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
            {servicesData.map((service) => (
              <div
                key={service.name}
                className={`shadow-lg rounded-lg p-5 bg-slate-900 ${fadeIn}`}
              >
                <div className="flex items-center gap-x-4 mb-3">
                  <div className="inline-flex justify-center items-center rounded-full border-2 border-main/60 p-2 bg-main/40">
                    {service.icon}
                  </div>
                  <h3 className="block text-lg font-semibold text-white">
                    {service.name}
                  </h3>
                </div>
                <p className="text-gray-400">{service.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
