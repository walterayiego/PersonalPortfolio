import { useEffect } from "react";
import { Avatar, AvatarGroup } from "@mui/material";

import Call from "../../assets/Call.png";
import Me from "../../assets/Me.png";
import Untitled from "../../assets/Untitled.png";
import topStar from "../../assets/topStar.png";
import { Companies } from "../../constants/Constants";
import SkillLinks from "../../components/SkillLinks";
import { useInView } from "react-intersection-observer";
import { ContextData } from "../../apis/ContextProvider";
import Socials from "../../components/Socials";

interface HomeProps {
  children: React.ReactNode;
}

function Home({ children }: HomeProps) {
  const { setFragment }: any = ContextData();
  const { ref, inView }: any = useInView({ threshold: 0.6 });

  useEffect(() => {
    inView && setFragment("home");
  }, [inView]);

  return (
    <div
      ref={ref}
      className="relative col h-[95vh] sm:h-screen justify-around sections"
    >
      <img
        src={topStar}
        className="flex self-center mt-[2vh] h-[2em] w-[2em] object-contain"
        alt="start"
      />
      <div className={`row flex-1 sm:my-[2vh]`}>
        <div className="sm:w-2/3 flex-1 col self-center sm:self-start scale-in-bl">
          <div className="">
            <p className="text-[2em] md:text-[3em] lg:text-[4em] font-bold sm:text-left truncate overflow-ellipsis">
              WALTER AYIEGO
            </p>
            <p className="text-xl md:text-2xl uppercase ">
              Code Alchemist | Full-Stack Developer
            </p>
            <span className="text-sm font-light hidden sm:block">
              Crafting innovative web and mobile experiences from idea to
              deployment
            </span>
          </div>

          <div className="flex-1 row w-full justify-between">
            <div className="sm:w-2/3 col h-fit justify-between ">
              <div id="client_div" className="my-[2vh]">
                <div className="row justify-between">
                  <AvatarGroup
                    className="w-fit items-start justify-end opacity-70 py-2"
                    total={26}
                  >
                    {Companies.map((item, index) => (
                      <Avatar
                        key={index}
                        alt="Remy Sharp"
                        src={item.logo}
                        className="bg-black filter blur-[1px] grayscale"
                      />
                    ))}
                  </AvatarGroup>
                </div>
                <span className="text-sm sm:text-base md:text-base py-2 opacity-70 font-light my-2">
                  Expect nothing short of satisfaction and delight from the
                  results I deliver. Backed by extensive expertise in software
                  development
                </span>
                <Socials styles="" iconColor="text" />
              </div>

              <div className="row h-[30vh] sm:h-fit w-full overflow-clip">
                {children}
                <a href="#contactme" className=" flex-1 col overflow-clip">
                  <img
                    src={Untitled}
                    className="w-full h-full sm:hidden object-contain jello-vertica"
                  />
                </a>
              </div>
            </div>
            <a
              href="#contactme"
              className="hidden sm:flex sm:flex-col sm:flex-1 justify-end pb-[2vh] "
            >
              <img
                src={Call}
                className="w-full h-1/3 object-contain z-40 jello-vertical"
              />
            </a>
          </div>
        </div>
        {/*End of first col-span-2  */}

        <div className="hidden sm:flex sm:flex-col sm:w-1/3 justify-between   ">
          <div className="flex-1 hidden sm:flex sm:h-full tilt-in-fwd-tr">
            <img
              className="flex-1 object-top object-cover rounded-3xl blur-[1px]"
              src={Me}
              alt=""
            />
          </div>
          <p className="self-end w-[60vw] text-xs md:text-sm my-2 text-focus-in">
            I have a passion for coding and technology, and I'm eager to learn
            and grow in the field of software development. I enjoy working on
            various projects, experimenting with new technologies, and
            collaborating with others to create innovative solutions.
          </p>
        </div>
      </div>

      <SkillLinks />
    </div>
  );
}

export default Home;
