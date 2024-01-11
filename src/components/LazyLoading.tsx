import React from "react";
import { useInView } from "react-intersection-observer";

const LazyLoading = ({ children }: any) => {
  const { ref, inView }: any = useInView({ threshold: 0.5 });
  // console.log("inView:", inView);
  return (
    <div
      onLoadStart={() => {
        console.log("OnLoadStart");
      }}
      ref={ref}
      className=" p-10"
    >
      <div className={`${inView ? "bg-red-700 fade_in" : "bg-slate-800"}`}>
        {children}
      </div>
    </div>
  );
};

export default LazyLoading;
