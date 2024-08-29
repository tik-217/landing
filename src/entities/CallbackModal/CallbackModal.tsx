// react
import { useContext } from "react";

// react-international-phone
import { PhoneInput } from "react-international-phone";

// hooks
import useCallbackForm from "../../hooks/useCallbackForm";
import useSuccessForm from "../../hooks/useSuccessForm";

// components
import { ModalOpenContext } from "../../components/App/App";

// entities
import BtnSubmit from "../../entities/BtnSubmit/BtnSubmit";

// styles
import "./CallbackModal.css";

export default function CallbackModal() {
  const modalContext = useContext(ModalOpenContext);

  const {
    handleSubmit,
    values,
    handleChange,
    isSubmitting,
    setSubmitting,
    touched,
    errors,
    isValid,
  } = useCallbackForm();

  const isSubmit = useSuccessForm({
    isSubmitting,
    setSubmitting,
    isValid,
  });

  return (
    <div
      className={`callbackModal ${
        !modalContext.isOpenModal ? "callbackModal_close" : ""
      }`}
    >
      <div className="callbackModal__wrap">
        <div
          className={`toggle-menu active`}
          onClick={() => modalContext.handleChangeModal()}
        >
          <i></i>
          <i></i>
          <i></i>
        </div>
        <section className="callbackModal__info">
          <h4 className="callbackModal__title">Получить все примущества</h4>
          <p className="callbackModal__descrip">
            Наши консультанты помогут вам с возникшими вопросами, чтобы вы могли
            совершить покупку мечты
          </p>
        </section>
        <form className="callbackModal__form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="name"
            className="callbackModal__input"
            value={values.name}
            onChange={handleChange}
            placeholder="Имя"
          />
          {touched.name && errors.name ? (
            <p className="inputErrorText">{errors.name}</p>
          ) : null}
          <div className="callbackModal__inputTel">
            <PhoneInput
              name="phone"
              defaultCountry="ru"
              value={values.phone}
              className="callbackModal__input"
              onChange={(phone) => handleChange("phone")(phone)}
            />
            {touched.phone && errors.phone ? (
              <p className="inputErrorText">{errors.phone}</p>
            ) : null}
          </div>
          {isSubmit && (
            <p className="inputSuccessText">Форма успешнно отправлена</p>
          )}
          <BtnSubmit />
        </form>
      </div>
    </div>
  );
}
