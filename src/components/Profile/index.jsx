import style from "./style.module.scss";
import cn from "classnames";
// componets
import MainProfile from "../MainProfile";
import MeBlock from "../MeBlock";

function Profile() {
  return (
    <div className={cn(style.ProfilePage)}>
      <MeBlock />
      <MainProfile />
    </div>
  );
}

export default Profile;
