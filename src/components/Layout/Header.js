import React from "react";
import classes from "./Header.Module.css";
import banthaExpress from "../../assets/banthaExpress.jpg";
import TallyCounter from "../UI/TallyCounter";

const Header = (props) => {
  return (
      <header className={classes.header}>
        <img src={banthaExpress} alt="bantha express"></img>
        <h1>Otopia Wars: The Ryes of Matza</h1>
        <TallyCounter />
      </header>
  );
};

export default Header;
