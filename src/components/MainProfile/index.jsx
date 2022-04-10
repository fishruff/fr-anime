import style from "./style.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";

function MainProfile() {
  return (
    <div className={cn(style.MainProfile)}>
      <div className={cn(style.navBut)}>
        <Link className={cn(style.navButEl)} to="/">
          Planned
        </Link>
        <Link className={cn(style.navButEl, style.navButEl__active)} to="/">
          Watching
        </Link>
        <Link className={cn(style.navButEl)} to="/">
          Completed
        </Link>
        <Link className={cn(style.navButEl)} to="/">
          Dropped
        </Link>
      </div>
    </div>
  );
}

export default MainProfile;
