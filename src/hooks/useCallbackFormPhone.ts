// formik
import { useFormik } from "formik";

// services
import { validatePhone } from "../services/validate";

// api
import { sendMail } from "../api/sendMail";

export default function useCallbackFormPhone() {
  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validate: validatePhone,
    onSubmit: (formValues) => {
      sendMail(formValues);
      formik.resetForm();
    },
  });

  return formik;
}
