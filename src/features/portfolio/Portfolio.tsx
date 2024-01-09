import { Link } from "@mui/material";
import ProjectItem from "./component/ProjectItem";
import projects from "./component/Projects";

function Portfolio() {
  return (
    <div id="projects" className={`w-full  borders`}>
      <div className={`relative px-2 py-16`}>
        <div className={``}>
          <p className={`heading1 text-left `}>
            Portfolio
          </p>
          <h2 className="text-center py-4">What we&apos;ve Builts</h2>
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
            <a className=" text-yellow-800 font-semibold text-2xl ">
              Github Page
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
