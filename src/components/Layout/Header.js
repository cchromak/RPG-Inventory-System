import React from "react";
import classes from "./Header.Module.css";
import banthaExpress from "../../assets/banthaExpress.jpg";
import TallyCounter from "../UI/TallyCounter";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <img src={banthaExpress} alt="bantha express"></img>
        <h2>Otopia Wars: The Ryes of Matza</h2>
      </div>
      <TallyCounter />
    </header>
  );
};

export default Header;
