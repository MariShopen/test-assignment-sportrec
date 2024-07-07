import "./styles/styles.scss";
import banner from "./img/banner_.svg";
import { Header } from "./components/header/Header";
import { Filters } from "./components/Filters/Filters";
import { ContentPost } from "./components/ContentPost/ContentPost";

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
            <ContentPost
              info_title="Спортивная Борьба"
              info_date="12 марта, 2024 в 16:03"
              title="Илья Бессонов дал интервью для телеканала Россия-1"
              description="Илья Бессонов дал интервью после большого перерыва, где поделился
          секретом своего успеха и рассказал о методиках своих тренировок.
          Спортсмен сделал заявление, что возвращается в спорт и ..."
              views={4.1}
              commentCount={4}
            />
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
