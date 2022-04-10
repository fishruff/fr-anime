import style from "./style.module.scss";
import cn from "classnames";

import AnimeCard from "../AnimeCard";

function SearchPage(props) {
  return (
    <div className={cn(style.SearchPage)}>
      <h2>
        Search results: <strong>{props.search.toUpperCase()}</strong>
      </h2>
      <div className={cn(style.SearchPageResults)}>
        {props.animeList.map((anime) => (
          <div className={cn(style.SearchEl)}>
            <AnimeCard
              title={anime.title}
              key={anime.mal_id}
              ep={anime.episodes}
              date={anime.year}
              type={anime.type}
              img={anime.images.jpg.image_url}
              url={anime.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
