import React from "react";
import HeaderCss from "./Header.module.css"

const Header = () => {
  return (
    <header className={HeaderCss.header}>
      <img  className={HeaderCss.header__img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHXPluq6GtTRPDIHRv5kJPy86uFjp5sO7hg&usqp=CAU"></img>
    </header>
  );
};

export default Header;
