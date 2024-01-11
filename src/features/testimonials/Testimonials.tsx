import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ContextData } from "../../apis/ContextProvider";

function Testimonials() {
  const { ref, inView }: any = useInView({ threshold: 0.3 });
  const { fragment, setFragment }: any = ContextData();

  useEffect(() => {
    inView && setFragment("testimonials");
  }, [inView]);
  return (
    <div ref={ref}>
      <div className="relative px-2 py-16 h-screen">
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="w-3/4">
            <p className="heading1 text-center">Testimonials</p>
            <h2 className="text-center py-4">What they say about us</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
