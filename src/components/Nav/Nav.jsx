import React from "react";
import NavCss from "./Nav.module.css"


const Nav = () => {
  return (
    <nav className={NavCss.nav}>
      <ul className={NavCss.list}>
        <li className={NavCss.item}>
          <a  href="#" className={NavCss.link}>Profile</a>
        </li>
        <li className={NavCss.item}>
          <a href="#" className={NavCss.link}>Message</a>
        </li>
        <li className={NavCss.item}>
          <a href="#" className={NavCss.link}>News</a>
        </li>
        <li className={NavCss.item}>
          <a href="#" className={NavCss.link}>Music</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
