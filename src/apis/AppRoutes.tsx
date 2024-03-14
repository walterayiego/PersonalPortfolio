import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../features/main/App";
import NoPageFound from "../features/errors/NoPageFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
