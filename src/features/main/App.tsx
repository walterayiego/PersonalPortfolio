import NavBar from "../sections/NavBar";
import React, { useEffect, useState } from "react";
import { LinkNames, width } from "../../constants/Constants";
import NavLinks from "../../components/NavLinks";
import Footer from "../sections/Footer";
import Contacts from "../contacts/Contacts";

function App() {

  return (
    <div className="relative colCenter">
      <NavBar>
        <ul className="row justify-between items-center space-x-[2vw]">
          {NavLinks()}
        </ul>
      </NavBar>

      {/* SECTIONS */}

      {LinkNames.map((link, index) => {
        return (
          <div id={link.to} key={index} className="">
            {link.component()}
          </div>
        );
      })}
      <Contacts />

      <Footer />
    </div>
  );
}

export default App;
