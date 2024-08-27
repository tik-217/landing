// react
import { useContext, useRef } from "react";

// formik
import { useFormik } from "formik";

// components
import { ModalOpenContext } from "../../components/App/App";

// entities
import BtnSubmit from "../../entities/BtnSubmit/BtnSubmit";

// hooks
import usePhoneInput from "../../hooks/usePhoneInput";

// styles
import "./CallbackModal.css";

export default function CallbackModal() {
  const modalContext = useContext(ModalOpenContext);

  const phone = useRef(null);

  usePhoneInput(phone);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    onSubmit: () => {},
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
        <form className="callbackModal__form" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="name"
            className="callbackModal__input"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Имя"
          />
          <div className="callbackModal__inputTel">
            <input type="tel" ref={phone} className="callbackModal__input " />
          </div>
          <BtnSubmit />
        </form>
      </div>
    </div>
  );
}
