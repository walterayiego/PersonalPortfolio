import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ContextData } from "../../apis/ContextProvider";

function Aboutme() {
  const { ref, inView }: any = useInView({ threshold: 0.5 });
  const { fragment, setFragment }: any = ContextData();

  useEffect(() => {
    inView && setFragment("aboutme");
  }, [inView]);
  return (
    <div
      ref={ref}
      className="w-full h-screen slide_left "
    >
      <p>About Me</p>
      <div className="bg-brown">
        <p>Helllo world</p>
      </div>
    </div>
  );
}

export default Aboutme;
