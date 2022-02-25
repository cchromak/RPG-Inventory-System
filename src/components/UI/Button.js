import classes from "./Button.Module.css";

const Button = (props) => {
  const classProps = classes.button + " " + classes[props.className];
  return (
    <button className={classProps} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;
