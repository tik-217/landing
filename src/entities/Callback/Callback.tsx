import usePhoneInput from "../../hooks/usePhoneInput";
import { useRef } from "react";
import BtnSubmit from "../../entities/BtnSubmit/BtnSubmit";
import "./Callback.css";
import { useFormik } from "formik";

export default function Callback({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const phone = useRef(null);

  usePhoneInput(phone);

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: () => {
      console.log("submit");
    },
  });

  return (
    <div className="callback borders">
      <section className="callback__info">
        <h4 className="callback__title">{title}</h4>
        <p className="callback__descrip">{description}</p>
      </section>
      <form className="callback__form" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="name"
          className="callback__input"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Имя"
        />
        <div className="callback__inputTel">
          <input type="tel" ref={phone} className="callback__input " />
        </div>
        <BtnSubmit />
      </form>
    </div>
  );
}
