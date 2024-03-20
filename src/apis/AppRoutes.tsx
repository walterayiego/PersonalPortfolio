import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPageFound from "../features/errors/NoPageFound";
import { Suspense, lazy } from "react";

const Loader = lazy(() => import("../features/main/App"));

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen ease-out duration-75 colCenter">
          <p>Loading</p>
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loader />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRoutes;
