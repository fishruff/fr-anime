import style from "./style.module.scss";
import cn from "classnames";


function AnimePage(props) {
  return (
    <div className={cn(style.AnimePage)}>
        <div className={cn(style.ma)}>
            <img src={props.img || "https://cdn.myanimelist.net/images/anime/1764/126627.jpg"} alt="" />
            <div className={cn(style.title)}>
            <h1>props.title</h1>
            <h3>props.title_japanese</h3>
            <div className={cn(style.firstInfo)}>
                <p>props.age</p>
                <p>props.year</p>
                <p>props.type</p>
            </div>
                    <div className={cn(style.animeDesk)}>
          <h4>About Serial</h4>
          <div className={cn(style.desk)}>
              <p>ed: {props.ep || 24} / {props.ep || 24}</p>
              <p>genre: {props.ganre || "shounen"}</p>
              <p>status: {props.status || "Finished"}</p>
              <p>duration: {props.duration || "24 mpe"} </p>
              <p>aired: {props.aired || "2010 year"} </p>
              <p>duration: {props.duration || "24 mpe"} </p>
              <p>studious: {props.studious || "A-1 Picture"} </p>
          </div>
        </div>
            </div>
        </div>

    </div>
  );
}
export default AnimePage;
