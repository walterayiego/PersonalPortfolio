import { useEffect } from "react";
import { Link } from "@mui/material";
import ProjectItem from "./component/ProjectItem";
import projects from "./component/Projects";
import { useInView } from "react-intersection-observer";
import { ContextData } from "../../apis/ContextProvider";

function Portfolio() {
  const { ref, inView }: any = useInView({ threshold: 0.2 });
  const { setFragment }: any = ContextData();

  useEffect(() => {
    inView && setFragment("portfolio");
  }, [inView]);

  return (
    <div ref={ref} className={`w-full`}>
      <div className={`relative px-2 py-16`}>
        <div className={``}>
          <p className={`heading1 text-left `}>Portfolio</p>
          <h2 className="text-center py-4">What I&apos;ve Built</h2>
        </div>
        <div className="grid md:grid-cols-2 w-full px-[2vw] gap-8">
          {projects.map((project, index) => {
            const { title, backgroundImage, tech, projectUrl, animeStyle } =
              project;
            return (
              <ProjectItem
                key={index}
                title={title}
                backgroundImage={backgroundImage}
                tech={tech}
                projectUrl={projectUrl}
                animeStyle={animeStyle}
              />
            );
          })}
        </div>
      </div>
      <div className=" flex flex-col text-center py-3 mb-4 font-semibold text-2xl">
        <p>
          For more visit our
          <Link href="">
            <span className=" text-yellow-800 font-semibold text-2xl ">
              Github Page
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
