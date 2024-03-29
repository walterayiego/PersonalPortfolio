import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ContextData } from "../../apis/ContextProvider";
import FormDialog from "./components/FormDialog";
import Img from "../../assets/iot.png";

function Contacts() {
  const { ref, inView }: any = useInView({ threshold: 0.9 });
  const { setFragment }: any = ContextData();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    inView && setFragment("contactme");
  }, [inView]);

  return (
    <>
      <FormDialog open={open} setOpen={setOpen} />
      <div
        ref={ref}
        id="contactme"
        className="w-screen h-[50vh] bg-brown grid sm:grid-cols-2"
      >
        <div className="colCenter h-[50vh] w-full">
          <div className="w-3/4 h-3/4 col justify-center space-y-[2vh]">
            <span className="text-white aladin text-4xl">
              Discuss for a cool project!
            </span>
            <span className="text-white libre text-xs ">
              You can request any design and innovation you want , I will
              recommend or build the best software solution for your business
            </span>

            <div className="rowCenter w-fit gap-2 ">
              <span
                onClick={() => setOpen(true)}
                className="text-brown text-center p-3 w-fit bg-white cursor-pointer"
              >
                Get Started
              </span>

              <a
                href="https://drive.google.com/file/d/1WqsY1pOwkh6z-Vm11Jzpku6rDgIYYbM6/view?usp=sharing"
                className="text-white/40 underline"
              >
                More About Me
              </a>
            </div>
          </div>
        </div>
        <div className="h-[50vh] w-full sm:flex sm:flex-col hidden overflow-clip">
          <img src={Img} alt="img" className="object-cover flex-1 bg-black" />
        </div>
      </div>
    </>
  );
}

export default Contacts;
