import { useEffect } from "react";
import { Avatar, AvatarGroup } from "@mui/material";

import Call from "../../assets/Call.png";
import Me from "../../assets/Me.png";
import topStar from "../../assets/topStar.png";
import { Companies } from "../../constants/Constants";
import SkillLinks from "../../components/SkillLinks";
import { useInView } from "react-intersection-observer";
import { ContextData } from "../../apis/ContextProvider";

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
    <div ref={ref} className="relative col h-screen justify-between sections">
      {/* <div className="absolute w-full h-full">
        <div className="background-container" />
      </div> */}
      <img
        src={topStar}
        className="hidden sm:flex self-center mt-[2vh] h-[2em] w-[2em] object-contain"
        alt="start"
      />
      <img
        src={Me}
        className="sm:hidden self-center h-[20vh] w-full object-contain"
        alt="start"
      />
      <div className={`row flex-1 sm:my-[2vh]`}>
        <div className="sm:w-2/3 flex-1 col space-x-2 scale-in-bl ">
          <div className="">
            <p className="heading1 text-center sm:text-left ">WALTER AYIEGO</p>
            <p className=" text-2xl uppercase ">
              Code Alchemist | Full-Stack Solutions
            </p>
            <span className="text-sm font-light ">
              Crafting innovative web and mobile experiences from idea to
              deployment
            </span>
          </div>

          <div className="flex-1 row w-full justify-around">
            <div className="sm:w-2/3 col  ">
              <div id="client_div" className="my-[2vh]">
                <div className="row justify-between">
                  <AvatarGroup
                    className="w-fit items-start justify-end opacity-70"
                    total={24}
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
                <span className="text-sm opacity-70 font-light my-2">
                  Many clients are satisfied and happy with the results I
                  provide. With over 4+ years of experience in the field, I have
                  the skills and knowledge to help you achieve your goals.
                </span>
              </div>

              <div
                id="links-div"
                className="col justify-center flex-1 p-2 w-fit"
              >
                {children}
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:flex-1 justify-center ">
              <img src={Call} className="w-full h-1/3 object-contain z-40 jello-vertical" />
            </div>
          </div>

          {/* Call Image */}
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
          <p className="self-end w-[60vw] text-sm my-2 text-focus-in">
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
