// formik
import { useFormik } from "formik";

// services
import { validate } from "../services/validate";

// api
import { sendMail } from "../api/sendMail";

export default function useCallbackForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
    },
    validate,
    onSubmit: (formValues) => {
      sendMail(formValues);

      formik.resetForm();
    },
  });

  return formik;
}
