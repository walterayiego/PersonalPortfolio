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

interface HomeProps {
  children: React.ReactNode;
}

function Home({ children }: HomeProps) {
  return (
    <div className="relative col w-[95vw] h-[95vh]  p-[3vw] mx-[2vw]">
      <img
        src={topStar}
        className=" self-center h-[5vh] w-[5vh] object-contain"
        alt="start"
      />
      <div className="grid grid-cols-3 flex-1">
        <div className="col col-span-2 ">
          <p className="text-[4em] font-bold ">WALTER AYIEGO</p>
          <p className=" text-2xl uppercase">Full Stack-Software Developer</p>

          <div className="grid grid-cols-3 h-full space-x-2 m-2">
            <div className="col-span-2 ">

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
                {/* <div className="rowCenter">
                  <Avatar
                    alt="Remy Sharp"
                    src={star}
                    className="bg-black filter"
                  />
                  <div className="col borders">
                    <p className="text-sm font-light"></p>
                    <p className="text-sm font-light">Delivery</p>
                  </div>
                </div> */}
              </div>
              <span className="text-sm font-light my-2">
                Many clients are satisfied and happy with the results I provide.
                With over 4+ years of experience in the field, I have the skills
                and knowledge to help you achieve your goals.
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

        <div className="hidden sm:flex col justify-between items-center h-full ">
          <img className="flex-1 object-cover blur-[2px]" src={Me} alt="" />
          <p className="self-end w-[60vw] z-50 text-sm my-2 opacity-60">
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
