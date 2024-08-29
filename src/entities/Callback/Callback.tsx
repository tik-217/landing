// react-international-phone
import { PhoneInput } from "react-international-phone";

// hooks
import useCallbackForm from "../../hooks/useCallbackForm";
import useSuccessForm from "../../hooks/useSuccessForm";

// entities
import BtnSubmit from "../../entities/BtnSubmit/BtnSubmit";

// styles
import "./Callback.css";
import "react-international-phone/style.css";

export default function Callback({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const {
    isSubmitting,
    setSubmitting,
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isValid,
  } = useCallbackForm();

  const isSubmit = useSuccessForm({ isSubmitting, setSubmitting, isValid });

  return (
    <div className="callback borders">
      <section className="callback__info">
        <h4 className="callback__title">{title}</h4>
        <p className="callback__descrip">{description}</p>
      </section>
      <form className="callback__form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="callback__input"
          value={values.name}
          onChange={handleChange}
          placeholder="Имя"
        />
        {touched.name && errors.name ? (
          <p className="inputErrorText">{errors.name}</p>
        ) : null}
        <div className="callback__inputTel">
          <PhoneInput
            name="phone"
            defaultCountry="ru"
            value={values.phone}
            className="callback__input"
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
  );
}
