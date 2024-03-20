import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPageFound from "../features/errors/NoPageFound";
import { Suspense, lazy } from "react";

const Loader = lazy(() => import("../features/main/App"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="w-screen h-screen ease-out duration-75">
                  Loading
                </div>
              }
            >
              <Loader />
            </Suspense>
          }
        />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
