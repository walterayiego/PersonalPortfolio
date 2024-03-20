import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPageFound from "../features/errors/NoPageFound";
import { Suspense, lazy } from "react";
import Loading from "../components/Loading";

const Loader = lazy(() => import("../features/main/App"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
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
