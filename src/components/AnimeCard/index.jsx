import style from "./style.module.scss";
import cn from "classnames";
// import Pht from "../../img/bleach.jpeg";

function AnimeCard(props) {
  return (
    <div className={cn(style.AnimeCardEl)}>
      <img src={props.img} alt="AnimeImage" className={cn(style.Pht)} />
      <div className={cn(style.desk)}>
        <a href={props.url} target="_blank" rel="noreferrer">
          <h3>{props.title}</h3>
        </a>
        <p>
          {props.ep} / {props.ep}
        </p>
        <div className={cn(style.status)}>
          <p>{props.type}</p>
          <p>realised</p>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  );
}
export default AnimeCard;
