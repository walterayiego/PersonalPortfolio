import { Avatar, AvatarGroup } from "@mui/material";
import Call from "../../assets/Call.png";
import Me from "../../assets/Me.png";
import kladz from "../../assets/kladz.png";
import dishi from "../../assets/dishi.png";
import ryze from "../../assets/ryze.png";
import wavu from "../../assets/wavu.png";

import { width } from "../../constants/Constants";

interface HomeProps {
  children: React.ReactNode;
}

function Home({ children }: HomeProps) {
  return (
    <div className="relative col w-[95vw] h-[95vh]  p-[3vw] m-[2vw]">
      <div className="grid grid-cols-3 h-2/3">
        <div className="col col-span-2 ">
          <p className="text-[4em] font-bold ">WALTER</p>
          <p className=" text-2xl uppercase">Full Stack-Software Developer</p>

          <div className="grid grid-cols-3 h-full space-x-2 m-2">
            <div className="col-span-2">
              <AvatarGroup
                className="w-full items-start justify-end"
                total={24}
              >
                <Avatar alt="Remy Sharp" src={Me} />
                <Avatar alt="Travis Howard" src={Me} />
                <Avatar alt="Agnes Walker" src={Me} />
                <Avatar alt="Trevor Henderson" src={Me} />
              </AvatarGroup>
              <span className="text-base font-light">
                Many clients are satisfied and happy with the results I provide.
              </span>
              {children}
            </div>
            {/* Call Image */}

            <div className="hidden sm:flex">
              <img src={Call} className="w-full h-1/2 object-contain z-40" />
            </div>
          </div>
        </div>
        {/*End of first col-span-2  */}

        <div className="hidden sm:flex justify-between items-center h-[50vh] ">
          <img
            className="w-full h-full object-cover blur-[2px]"
            src={Me}
            alt=""
          />
        </div>
      </div>

      <p className=" self-end w-[60vw]">
        I have a passion for coding and technology, and I'm eager to learn and
        grow in the field of software development. I enjoy working on various
        projects, experimenting with new technologies, and collaborating with
        others to create innovative solutions.
      </p>

      <SkillLinks />
    </div>
  );
}

export default Home;

const Companies = [
  { name: "WavuLabs", logo: wavu, link: "https://wavulabs.org/" },
  { name: "Dishi", logo: dishi, link: "https://play.google.com/store/apps/details?id=com.dishi.app&pli=1" },
  { name: "Kladz", logo: kladz, link: "https://kladz.vercel.app/" },
  { name: "RYZE", logo: ryze, link: "https://www.theryze.net/" },
];

const SkillLinks = () => (
  <div className="grid grid-flow-col w-full h-[5vh] justify-around my-[3vh]">
    {Companies.map((company, index) => (
      <div
        className="rowCenter space-x-2 opacity-50 mx-3 w-[10vw] h-[5vh] cursor-pointer "
        key={index}
        onClick={() => window.open(company.link)}
      >
        <img src={company.logo} className="object-contain rounded-full" />
        <p className="text-center uppercase font-bold">{company.name}</p>
      </div>
    ))}
  </div>
);
