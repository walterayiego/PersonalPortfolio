import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/Logo.png";
import Socials from "./Socials";
import { fullLinks } from "../constants/Constants";
import { ContextData } from "../apis/ContextProvider";

function DrawerContent({ toggleDrawer }: any) {
  const { fragment }: any = ContextData();

  const generateListItems = () => {
    return fullLinks?.map((section) => (
      <a
        href={`/#${section.to}`}
        key={section.to}
        className={
          fragment === section.to
            ? "scale-105 text-primary font-semibold"
            : "cursor-pointer font-mono text-lg text-slate-500 uppercase"
        }
      >
        <li
          onClick={toggleDrawer(false)}
          className="py-4 text-sm nav-list cursor-pointer"
        >
          {section.name}
        </li>
      </a>
    ));
  };

  return (
    <div className="drawer ">
      <div className="col justify-between py-[5vh] h-full relative">
        <div
          onClick={toggleDrawer(false)}
          className=" absolute -top-0 right-0 rounded-full shadow-lg text-white shadow-gray-400 p-3 cursor-pointer mr-1"
        >
          <AiOutlineClose />
        </div>
        <div className="">
          <div className="flex w-full items-center justify-between">
            <a href="/">
              <img src={logo} width="87" height="35" alt="/" />
            </a>
            <div className="flex-1 mx-2 truncate overflow-ellipsis">
              <p>WALTER AYIEGO</p>
              <p> Full-Stack Developer</p>
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%]">Let&#39;s build!</p>
          </div>
          <div className="py-4 col">
            <ol className="uppercase">{generateListItems()}</ol>
          </div>
        </div>
        <div className="p-4">
          <p className="uppercase tracking-widest text-[#5651e5]">
            Let&#39;s Connect
          </p>
          <Socials styles="justify-center gap-2" />
        </div>
      </div>
    </div>
  );
}

export default DrawerContent;
