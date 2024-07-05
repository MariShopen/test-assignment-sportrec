import "./styles/styles.scss";
import banner from "./img/banner_.svg";
import Header from "./components/header/Header";
import Filters from "./components/Filters/Filters";

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
            <div className="content__post post">
              <div className="post__body">
                <div className="post__info">
                  <div>Спортивная Борьба</div>
                  <div>12 марта, 2024 в 16:03</div>
                </div>
                <div className="post__header">
                  <h3>Илья Бессонов дал интервью для телеканала Россия-1</h3>
                </div>
                <div className="post__description">
                  Илья Бессонов дал интервью после большого перерыва, где
                  поделился секретом своего успеха и рассказал о методиках своих
                  тренировок. Спортсмен сделал заявление, что возвращается в
                  спорт и ...Читать больше
                </div>
                <div className="post__galery">фотки</div>
                <div className="post__icons">лайки</div>
              </div>
              <div className="post__comments">коменты</div>
            </div>
            <div className="content__post post">post2</div>
          </section>
          <section className="content sidebar">
            <Filters />
            <div className="content__post ad">реклама</div>
          </section>
        </div>
      </main>
    </body>
  );
}
