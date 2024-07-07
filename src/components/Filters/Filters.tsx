import "./filters.scss";
import grid from "../../img/grid-01.svg";
import award from "../../img/award-05.svg";
import cert from "../../img/certificate-01.svg";
import video from "../../img/video-recorder.svg";

export const Filters = () => {
  return (
    <div className="content__post filters">
      <h3 className="filter_title">Фильтр ленты</h3>
      <div className="button-group">
        <button className="filter__button-active filter__button button">
          <img src={grid} alt="" />
          <p>Все</p>
        </button>
        <button className="filter__button button">
          <img src={cert} alt="" />
          <p>Результаты соревнований</p>
        </button>
        <button className="filter__button button">
          <img src={video} alt="" />
          <p>Видео</p>
        </button>
        <button className="filter__button button">
          <img src={award} alt="" />
          <p>Достижения</p>
        </button>
      </div>
    </div>
  );
};
