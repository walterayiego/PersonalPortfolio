import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import App from "../features/main/App";
import Skills from "../features/skills/Skills";
import Contacts from "../features/contacts/Contacts";
import NoPageFound from "../features/errors/NoPageFound";
import Aboutme from "../features/aboutme/Aboutme";
import Portfolio from "../features/portfolio/Portfolio";
import Testimonials from "../features/testimonials/Testimonials";
import Home from "../features/home/Home";
import { useEffect } from "react";

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
