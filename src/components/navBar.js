import { createContext, useState } from "react";
import { createStore } from "redux";
import Music from "./Music";
export const SearchContext = createContext();

function NavBar() {
  return (
    <nav
      style={{
        height: 40 + "px",
        lineHeight: 37.5 + "px",
        backgroundColor: "transparent",
        display: "flex",
        justifyContent: "space-around",
        width: 83 + "%",
        margin: " 0 auto",
      }}
    >
      <span className="text-light font-weight-bold text-center">
        Music for Healing
      </span>
    </nav>
  );
}

export default NavBar;
