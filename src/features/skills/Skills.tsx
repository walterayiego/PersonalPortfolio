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
    <div ref={ref} className="bg-[#EBEBEB] ">
      <div className="sections">
        <h1 className="heading1">Skills</h1>

        <div className="grid grid-cols-4  h-fit flex-wrap  p-4 gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="colCenter w-[20vw] h-[20vh] rounded-md border-[0.5px] border-black cursor-pointer space-y-2"
            >
              <img
                src={skill.icon}
                className="w-1/4 aspect-square object-scale-down bg-primary/20 filter "
                alt={skill.skill}
              />
              <p className="text-center">{skill.skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
