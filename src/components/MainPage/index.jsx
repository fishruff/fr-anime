import style from "./style.module.scss";
import cn from "classnames";
import TopAnimeBlock from "../TopAnimeBlock";

function MainPage({ topAnime, animeList }) {
  return (
    <div className={cn(style.MainPage)}>
      <TopAnimeBlock topAnime={topAnime} />
    </div>
  );
}
export default MainPage;
