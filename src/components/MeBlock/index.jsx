import style from "./style.module.scss";
import cn from "classnames";
import ImgProfile from "../../img/bleach.jpeg";

function MeBlock() {
  return (
    <div className={cn(style.meBlock)}>
      <img src={ImgProfile} alt="" className={cn(style.Pht)} />
      <h2>Fish_ruff</h2>
      <div className={cn(style.MeDesk)}>
        <div className={cn(style.MeDeskEl)}>
          <h3>0</h3>
          <h5>Friend</h5>
        </div>
        <div className={cn(style.MeDeskEl)}>
          <h3>0</h3>
          <h5>Anime</h5>
        </div>
      </div>
    </div>
  );
}

export default MeBlock;
