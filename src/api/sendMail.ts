// axios
import axios from "axios";

interface ISendMail {
  name?: string;
  phone: string;
}

export async function sendMail(formValues: ISendMail) {
  const sendForm = await axios({
    method: "GET",
    url: "https://jkcentralni.store/index.php",
    params: {
      name: formValues.name,
      phone: formValues.phone,
    },
    headers: {
      "Content-type": "application/json",
    },
  });

  return sendForm.status === 200 ? true : false;
}
