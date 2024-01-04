import { Avatar, AvatarGroup } from "@mui/material";
import Call from "../../assets/Call.png";
import Me from "../../assets/Me.png";
import kladz from "../../assets/kladz.png";
import dishi from "../../assets/dishi.png";
import ryze from "../../assets/ryze.png";
import wavu from "../../assets/wavu.png";
import topStar from "../../assets/topStar.png";
import star from "../../assets/Star.png";

import { width } from "../../constants/Constants";
import { useState } from "react";

interface HomeProps {
  children: React.ReactNode;
}

function Home({ children }: HomeProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useState(() => {
    if (window.innerWidth > 640) {
      setIsDesktop(true);
      console.log("desktop");
    } else {
      setIsDesktop(false);
      console.log("mobile");
    }
  }, [width]);

  return (
    <div className="relative col w-[95vw] min-h-[98vh]  p-[3vw] mx-[2vw]">
      <img
        src={topStar}
        className=" self-center mt-4 h-[2em] w-[2em] object-contain"
        alt="start"
      />
      <div className=" sm:h-[5vh] h-[3vh]" />
      <div className={`row flex-1 `}>
        <div className={`${isDesktop ? "" : ""} sm:w-2/3 flex-1 col `}>
          <p className="sm:text-5xl text-2xl font-bold ">WALTER AYIEGO</p>
          <p className=" text-2xl uppercase">Full Stack-Software Developer</p>

          <div className="row h-full space-x-2 m-2">
            <div className="sm:w-2/3 col justify-end">
              <div>
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
                        className="bg-black filter blur-[1px]"
                      />
                    ))}
                  </AvatarGroup>
                </div>
                <span className="text-sm font-light my-2">
                  Many clients are satisfied and happy with the results I
                  provide. With over 4+ years of experience in the field, I have
                  the skills and knowledge to help you achieve your goals.
                </span>
              </div>
              <div className="w-fit">{children}</div>
            </div>
            {/* Call Image */}

            <div className="hidden sm:flex sm:flex-1 ">
              <img src={Call} className="w-full h-1/2 object-contain z-40" />
            </div>
          </div>
        </div>
        {/*End of first col-span-2  */}

        <div className="hidden sm:flex sm:flex-col sm:w-1/3 justify-between   ">
          <div className="flex-1 hidden sm:flex sm:h-full">
            <img
              className="flex-1 object-top object-cover rounded-3xl blur-[1px]"
              src={Me}
              alt=""
            />
          </div>
          <p className="self-end w-[60vw] text-sm my-2 opacity-60">
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

const Companies = [
  { name: "WavuLabs", logo: wavu, link: "https://wavulabs.org/" },
  {
    name: "Dishi",
    logo: dishi,
    link: "https://play.google.com/store/apps/details?id=com.dishi.app&pli=1",
  },
  { name: "Kladz", logo: kladz, link: "https://kladz.vercel.app/" },
  { name: "RYZE", logo: ryze, link: "https://www.theryze.net/" },
];

const SkillLinks = () => (
  <div className="grid grid-cols-4 w-full h-[5vh] my-[3vh]">
    {Companies.map((company, index) => (
      <div
        key={index}
        className="rowCenter space-x-2 opacity-50 mx-3 w-[20vw] cursor-pointer "
        onClick={() => window.open(company.link)}
      >
        <img
          src={company.logo}
          className="w-[5vw] bg-black h-full object-contain rounded-xl filter blur-[1px]"
        />
        <p className=" uppercase font-bold flex-1">{company.name}</p>
      </div>
    ))}
  </div>
);
