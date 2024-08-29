interface IVaildate {
  name: string;
  phone: string;
}

interface IVaildatePhone {
  phone: string;
}

export const validate = (values: IVaildate) => {
  const errors = {} as IVaildate;

  if (!values.name) {
    errors.name = "Обязательное поле";
  }

  if (values.phone.length <= 11) {
    errors.phone = "Длина номера должна быть 11 символов";
  }

  return errors;
};

export const validatePhone = (values: IVaildatePhone) => {
  const errors = {} as IVaildatePhone;

  if (values.phone.length <= 11) {
    errors.phone = "Длина номера должна быть 11 символов";
  }

  return errors;
};
