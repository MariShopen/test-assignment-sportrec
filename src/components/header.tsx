import lenta from "../img/lenta.svg";
import live from "../img/live.svg";
import market from "../img/marketplace.svg";
import org from "../img/organizacii.svg";
import top from "../img/top.svg";
import trophy from "../img/trophy.svg";
import logo from "../img/logo.svg";
import lang from "../img/lang.svg";
import user from "../img/user.svg";
import buttonDown from "../img/chevron-down.svg";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <img src={logo} alt="" />
        </div>
        <div className="header__menu">
          <div className="header__menu-left">
            <button className="menu__button-active menu__button">
              <img src={lenta} alt="" />
              <p className="button__text">Лента</p>
            </button>
            <button className="menu__button">
              <img src={market} alt="" />
              <p className="button__text">Маркетплейс</p>
            </button>
            <button className="menu__button">
              <img src={top} alt="" />
              <p className="button__text">Рейтинги</p>
            </button>
            <button className="menu__button">
              <img src={trophy} alt="" />
              <p className="button__text">Соревнования</p>
            </button>
            <button className="menu__button">
              <img src={org} alt="" />
              <p className="button__text">Организации</p>
            </button>
            <button className="menu__button">
              <img src={live} alt="" />
              <p className="button__text">Live</p>
            </button>
          </div>
          <div className="header__menu-right">
            <button className="menu__button menu__button-active">
              <img src={lang} alt="russian" />
              <p className="button__text">RU</p>
              <img src={buttonDown} alt="" />
            </button>
            <button className="menu__button">
              <img src={user} alt="" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
