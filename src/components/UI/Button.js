import classes from "./Button.Module.css";

const Button = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;
