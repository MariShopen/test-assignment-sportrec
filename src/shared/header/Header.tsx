import lenta from "../../img/lenta.svg";
import live from "../../img/live.svg";
import market from "../../img/marketplace.svg";
import org from "../../img/organizacii.svg";
import top from "../../img/top.svg";
import trophy from "../../img/trophy.svg";
import logo from "../../img/logo.svg";
import lang from "../../img/lang.svg";
import user from "../../img/user.svg";
import buttonDown from "../../img/chevron-down.svg";
import sandwich from "../../img/menu-05.svg";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__additional"></div>
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <div className="header__sandwichBar">
          <img src={sandwich} alt="" />
        </div>
        <div className="header__menu">
          <div className="header__menu-left">
            <button className="menu__button-active menu__button button">
              <img src={lenta} alt="" />
              <p>Лента</p>
            </button>
            <button className="menu__button button">
              <img src={market} alt="" />
              <p>Маркетплейс</p>
            </button>
            <button className="menu__button button">
              <img src={top} alt="" />
              <p>Рейтинги</p>
            </button>
            <button className="menu__button button">
              <img src={trophy} alt="" />
              <p>Соревнования</p>
            </button>
            <button className="menu__button button">
              <img src={org} alt="" />
              <p>Организации</p>
            </button>
            <button className="menu__button button">
              <img src={live} alt="" />
              <p>Live</p>
            </button>
          </div>
          <div className="header__menu-right">
            <button className="menu__button menu__button-active button">
              <img src={lang} alt="russian" />
              <p>RU</p>
              <img src={buttonDown} alt="" />
            </button>
            <button className="menu__button button">
              <img src={user} alt="" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
