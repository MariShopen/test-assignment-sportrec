import "./contentPost.scss";
import eye from "../../img/eye.svg";
import message from "../../img/message-square-02.svg";
import dot from "../../img/Ellipse 6.svg";

type ContentPostProps = {
  info_title: string;
  info_date: string;
  title: string;
  description: string;
  views: number;
  commentCount: number;
};

export const ContentPost = ({
  info_title,
  info_date,
  title,
  description,
  views,
  commentCount,
}: ContentPostProps) => {
  return (
    <div className="content__post post">
      <div className="post__body">
        <div className="post__info">
          <div>{info_title}</div>
          <img src={dot} alt="" />
          <div>{info_date}</div>
        </div>
        <div className="post__header">
          <div>{title}</div>
        </div>
        <div className="description__container">
          <div className="description__text">{description}</div>
          <span className="description__more">Читать больше</span>
        </div>
        <div className="post__galery">фотки</div>
        <div className="post__icons">
          <div className="post__icons-views">
            <img src={eye} alt="" />
            <p>{views}K</p>
          </div>
          <div className="post__icons-com">
            <img src={message} alt="" />
            <p>{commentCount}</p>
          </div>
        </div>
      </div>
      <div className="post__comments">коменты</div>
    </div>
  );
};
