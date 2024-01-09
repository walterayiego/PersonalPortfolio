import React from "react";
import { useInView } from "react-intersection-observer";

const ProjectItem = ({
  title,
  backgroundImage,
  tech,
  projectUrl,
  animeStyle,
}: any) => {
  const { ref, inView } = useInView({ threshold: 0.7 });
  return (
    <div ref={ref}>
      <div
        className={`relative grid items-center justify-center h-full w-full shadow-xl shadow-white
            rounded-xl group hover:bg-gradient-to-r from-brown to-secondary ${
              inView ? animeStyle : "opacity-0"
            }`}
      >
        <div className={`flex w-full h-full`}>
          <img
            className="rounded-xl group-hover:opacity-10  object-cover "
            src={backgroundImage}
            alt="/"
          />
        </div>
        <div
          className={`hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]`}
        >
          <h3 className="text-2xl text-white tracking-wider text-center">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">{tech}</p>
          <a href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
