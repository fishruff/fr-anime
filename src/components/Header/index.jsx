import style from "./style.module.scss";
import cn from "classnames";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className={cn(style.Header)}>
      <Link to="/">
        <img className={cn(style.logo)} src={logo} alt="" />
      </Link>
      <div className={cn(style.RightHeader)}>
        <form className={cn(style.Search)} onSubmit={props.HandleSearch}>
          <input
            type="search"
            placeholder="Search"
            required
            value={props.search}
            onChange={(e) => props.SetSearch(e.target.value)}
          />
        </form>

        <Link className={cn(style.linkHeader)} to="/topanime">
          Top Anime
        </Link>
        <Link className={cn(style.linkHeader)} to="/random">
          Random
        </Link>
        <Link className={cn(style.linkHeader)} to="/profile">
          Me
        </Link>
      </div>
    </div>
  );
}

export default Header;
