import "./styles/styles.scss";
import banner from "./img/banner_.svg";
import Header from "./components/header";

export function App() {
  return (
    <body className="body">
      <Header />
      <main className="main">
        <section className="main__banner">
          <img src={banner} alt="" />
        </section>
        <div className="main__lenta">
          <section className="content posts">
            <div className="content__post post">post1</div>
            <div className="content__post post">post2</div>
          </section>
          <section className="content sidebar">
            <div className="content__post filtres"> фильтры</div>
            <div className="content__post ad">реклама</div>
          </section>
        </div>
      </main>
    </body>
  );
}
