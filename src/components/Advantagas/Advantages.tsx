// entities
import Callback from "../../entities/Callback/Callback";

// images
import image1 from "../../assets/images/1_56 - Фото.c2798ea2a7238ea23321_8_8.webp";
import image2 from "../../assets/images/1_57 - Фото.147ae6da0fa161342859_9_9.webp";

// styles
import "./Advantages.css";

export default function Advantages() {
  return (
    <div className="advantages widthStop marginTop">
      <div className="advantages__wrap generalMargin">
        <h2 className="advantages__title">Выбирая нас вы получаете</h2>
        <div className="advantages__content">
          <ol className="advantages__list">
            <li className="advantages__item">200 метров до центра станицы</li>
            <li className="advantages__item">1 км до моря</li>
            <li className="advantages__item">
              Школа, детский сад, торговый центр
            </li>
            <li className="advantages__item">Доступная цена</li>
            <li className="advantages__item">Закрытая территория</li>
            <li className="advantages__item">Центральные коммуникации</li>
          </ol>
          <div className="advantages__photos">
            <div className="advantages__photo borders">
              <img src={image1} alt="image1" className="advantages__images" />
            </div>
            <div className="advantages__photo borders">
              <img src={image2} alt="image2" className="advantages__images" />
            </div>
          </div>
        </div>
        <Callback
          title={"Получить все примущества"}
          description={
            "Наши консультанты помогут вам с возникшими вопросами, чтобы вы могли совершить покупку мечты."
          }
        />
      </div>
    </div>
  );
}
