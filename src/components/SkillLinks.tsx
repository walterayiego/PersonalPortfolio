import { Companies } from "../constants/Constants";

const SkillLinks = () => (
  <div className="row items-center justify-evenly w-full h-fit bg-brow flex-wrap ">
    {Companies.map((company, index) => (
      <div
        key={index}
        className="rowCenter space-x-2 opacity-50 mx-3 w-fit h-[5vh] cursor-pointer "
        onClick={() => window.open(company.link)}
      >
        <img
          src={company.logo}
          className="w-[5vw]  h-[5vh] object-contain rounded-xl filter blur-[1px]"
        />
        <p className=" uppercase font-bold flex-1">{company.name}</p>
      </div>
    ))}
  </div>
);

export default SkillLinks;