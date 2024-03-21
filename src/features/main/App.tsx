import NavBar from "../sections/NavBar";
import React, { useEffect, useState } from "react";
import { LinkNames, width } from "../../constants/Constants";
import NavLinks from "../../components/NavLinks";
import Footer from "../sections/Footer";
import Contacts from "../contacts/Contacts";

function App() {
  return (
    <div className="relative colCenter w-full overflow-x-hidden">
      <NavBar>
        <ul className="row justify-between items-center space-x-[2vw]">
          {NavLinks()}
        </ul>
      </NavBar>
      {LinkNames.map((link, index) => (
        <div id={link.to} key={index} className="">
          {link.component()}
        </div>
      ))}
      <div id="contactme" className="">
        <Contacts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
