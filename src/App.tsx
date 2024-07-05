import "./styles/styles.scss";
import logo from "./img/logo.svg";
export function App() {
  return (
    <body className="body">
      <header className="header">
        <div className="header__content">
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
          <div className="header__menu">
            <div className="header__menu-left">
              <div>Лента</div>
              <div>Маркетплейс</div>
              <div>Рейтинги</div>
              <div>Соревнования</div>
              <div>Организации</div>
              <div>Live</div>
            </div>
            <div className="header__menu-right">
              <div>язык</div>
              <div>акк</div>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="main__banner"></section>
        <div className="main__lenta">
          <section className="posts">
            <div className="posts__post1">post1</div>
            <div className="posts__post2">post2</div>
          </section>
          <section className="sidebar">
            <div className="filtres"> фильтры</div>
            <div className="ad">реклама</div>
          </section>
        </div>
      </main>
    </body>
  );
}
