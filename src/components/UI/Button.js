import classes from "./Button.Module.css";

const Button = (props) => {
  const classProps = classes.button + " " + classes[props.className];
  console.log(classProps);
  return (
    <button className={classProps} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;
