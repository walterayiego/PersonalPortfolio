import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../features/main/App";
import Skills from "../features/skills/Skills";
import Contacts from "../features/contacts/Contacts";
import NoPageFound from "../features/errors/NoPageFound";
import Aboutme from "../features/aboutme/Aboutme";
import Portfolio from "../features/portfolio/Portfolio";
import Testimonials from "../features/testimonials/Testimonials";
import Home from "../features/home/Home";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="skills" element={<Skills />} />
        <Route path="aboutme" element={<Aboutme />} />
        <Route path="contactme" element={<Contacts />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="*" element={<NoPageFound />} />
      </Route>
      <Route path="*" element={<NoPageFound />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
