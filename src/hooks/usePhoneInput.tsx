import intlTelInput from "intl-tel-input";
import { MutableRefObject, useEffect } from "react";

type IUsePhoneInputProps = MutableRefObject<HTMLInputElement | null>;

export default function usePhoneInput(phone: IUsePhoneInputProps) {
  useEffect(() => {
    if (!phone.current) return;

    intlTelInput(phone.current, {
      initialCountry: "ru",
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@24.2.1/build/js/utils.js",
    });
    // eslint-disable-next-line
  }, []);
}
