import style from "./style.module.scss";
import cn from "classnames";
import AnimeCard from "../AnimeCard";

function TopAnimeBlock({ topAnime }) {
  return (
    <div className={cn(style.TopAnimeBlock)}>
      <h2>Top anime *year*</h2>
      <div className={cn(style.TopAnimeBlocksEls)}>
        {(topAnime || []).map((anime) => (
          <AnimeCard
            title={anime.title}
            key={anime.mal_id}
            ep={anime.episodes}
            date={anime.year}
            type={anime.type}
            img={anime.images.jpg.image_url}
            url={anime.url}
          />
        ))}
      </div>
    </div>
  );
}
export default TopAnimeBlock;
