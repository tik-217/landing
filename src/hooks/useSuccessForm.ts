// react
import { useEffect, useState } from "react";

export default function useSuccessForm({
  isSubmitting,
  isValid,
  setSubmitting,
}: {
  isSubmitting: boolean;
  isValid: boolean;
  setSubmitting: (value: boolean) => void;
}) {
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (!isSubmitting || !isValid) return;

    setIsSubmit(true);

    setTimeout(() => {
      setIsSubmit(false);
      setSubmitting(false);
    }, 2000);
    // eslint-disable-next-line
  }, [isSubmitting, isValid]);

  return isSubmit;
}
