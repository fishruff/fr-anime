import style from "./style.module.scss";
import cn from "classnames";

const Button = (props) => {
  return (
    <button
      className={cn(
        style.button,
        style.asdasd,
        style.asdasd,
        props.isLarge && style.button__large
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
