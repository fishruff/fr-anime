import style from "./style.module.scss";
import cn from "classnames";

function Footer() {
  return (
    <div className={cn(style.Footer)}>
      <h4>Watch anime :3</h4>
      <div className={cn(style.LinksSoc)}>
        <p>Telegram</p>
        <p>Github</p>
      </div>
    </div>
  );
}
export default Footer;
