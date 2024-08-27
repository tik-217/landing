// react
import { useRef } from "react";

// entities
import BtnSubmit from "../../entities/BtnSubmit/BtnSubmit";
import Header from "../../entities/Header/Header";

// hooks
import usePhoneInput from "../../hooks/usePhoneInput";

// styles
import "./MainScreen.css";

export default function MainScreen() {
  const phone = useRef(null);

  usePhoneInput(phone);

  return (
    <div className="mainScreen" id="main">
      <div className="mainScreen__wrap generalMargin widthStop">
        <Header />
        <div className="mainScreen__content">
          <div className="mainScreen__contentWrap">
            <form className="mainCallback">
              <div className="mainCallback__wrap">
                <h2 className="mainCallback__title">Получить обратную связь</h2>
                <section className="mainCallback__inputSection">
                  <label htmlFor="phone" className="mainCallback__inputLabel">
                    Телефон
                  </label>
                  <div className="mainCallback__inputs">
                    <input type="tel" ref={phone} />
                  </div>
                </section>
                <div className="mainCallback__submitSection">
                  <BtnSubmit />
                  <p className="mainCallback__submitDescrip">
                    Нажимаю на кнопку «Отправить» вы соглашаетесь на обработку
                    персональных данных
                  </p>
                </div>
              </div>
            </form>
            <section className="mainAdvantages">
              <h2 className="mainAdvantages__title">
                Жилой комплекс{" "}
                <mark className="mainAdvantages__title_mark">
                  «Центральный»
                </mark>
              </h2>
              <ul className="mainAdvantages__list">
                <li className="mainAdvantages__item">1 км до моря</li>
                <li className="mainAdvantages__item">
                  200 метров до центра станицы
                </li>
                <li className="mainAdvantages__item">
                  Единый архитектурный стиль
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
