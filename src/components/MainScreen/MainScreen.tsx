// react-international-phone
import { PhoneInput } from "react-international-phone";

// hooks
import useCallbackFormPhone from "../../hooks/useCallbackFormPhone";
import useSuccessForm from "../../hooks/useSuccessForm";

// entities
import BtnSubmit from "../../entities/BtnSubmit/BtnSubmit";
import Header from "../../entities/Header/Header";

// styles
import "./MainScreen.css";

export default function MainScreen() {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    isSubmitting,
    setSubmitting,
    isValid,
  } = useCallbackFormPhone();

  const isSubmit = useSuccessForm({ isSubmitting, setSubmitting, isValid });

  return (
    <div className="mainScreen" id="main">
      <div className="mainScreen__wrap generalMargin widthStop">
        <Header />
        <div className="mainScreen__content">
          <div className="mainScreen__contentWrap">
            <form className="mainCallback" onSubmit={handleSubmit}>
              <h2 className="mainCallback__title">Получить обратную связь</h2>
              <section className="mainCallback__inputSection">
                <label htmlFor="phone" className="mainCallback__inputLabel">
                  Телефон
                </label>
                <div className="mainCallback__inputs">
                  <PhoneInput
                    name="phone"
                    defaultCountry="ru"
                    value={values.phone}
                    className="mainCallback__input"
                    onChange={(phone) => handleChange("phone")(phone)}
                    onBlur={handleBlur}
                  />
                  {touched.phone && errors.phone ? (
                    <p className="inputErrorText">{errors.phone}</p>
                  ) : null}
                  {isSubmit && (
                    <p className="inputSuccessText">
                      Форма успешнно отправлена
                    </p>
                  )}
                </div>
              </section>
              <div className="mainCallback__submitSection">
                <BtnSubmit />
                <p className="mainCallback__submitDescrip">
                  Нажимаю на кнопку «Отправить» вы соглашаетесь на обработку
                  персональных данных
                </p>
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
                <li className="mainAdvantages__item">
                  1 км до Азовского моря, 15 мин от Черного моря
                </li>
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
