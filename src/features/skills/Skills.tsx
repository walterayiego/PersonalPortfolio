import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ContextData } from "../../apis/ContextProvider";

const skills = [
  {
    skill: "JavaScript",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    skill: "Python",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg",
    link: "https://www.python.org/",
  },
  {
    skill: "React",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
    link: "https://reactjs.org/",
  },
  {
    skill: "NextJs",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg",
    link: "https://nextjs.org/docs",
  },
  {
    skill: "TailwindCSS",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
    link: "https://tailwindcss.com/",
  },
  {
    skill: "NodeJS",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
    link: "https://nodejs.org/en/",
  },
  {
    skill: "Express",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg",
    link: "https://expressjs.com/",
  },
  {
    skill: "PostgreSQL",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg",
    link: "https://www.postgresql.org/",
  },
  {
    skill: "Firebase",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg",
    link: "https://firebase.google.com/",
  },
  {
    skill: "Figma",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
    link: "https://www.figma.com/",
  },
  {
    skill: "MetaMask",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/metamask-colored.svg",
    link: "https://metamask.io/",
  },
  {
    skill: "Ethereum",
    icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ethereum-colored.svg",
    link: "https://ethereum.org/en/",
  },
];

export default function Skills() {
  const { ref, inView }: any = useInView({ threshold: 0.5 });
  const { fragment, setFragment }: any = ContextData();

  useEffect(() => {
    inView && setFragment("skills");
  }, [inView]);

  return (
    <div ref={ref} className="bg-black min-h-screen w-screen col items-center ">
      <div className="sections min-h-[90vh] col">
        <h1 className="heading1 text-white text-center">Skills</h1>

        <div
          className={`flex-1 grid grid-cols-2 sm:grid-cols-4 w-full h-full flex-wrap  p-4 gap-2 place-items-center`}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="colCenter w-[7vw] aspect-square rounded-md cursor-pointer space-y-2 
            backdrop-blur-sm border-primary border shadow-primary shadow-md
               hover:wobble-hor-top
              "
            >
              <img
                src={skill.icon}
                alt={skill.skill}
                className="w-full h-full blur-sm object-cover object-center filter invert"
              />
              <p className="text-left text-white">{skill.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
