import * as Yup from "yup";

const phoneRegExp = /^[0-9+()-\s]*$/;

export const AppointmentSchema = Yup.object().shape({
  address: Yup.string().required("Address is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
  age: Yup.string().required("Age is required"),
  email: Yup.string().email().required("Email is required"),
  parentName: Yup.string().required("Father's or mother's name is required"),
  comment: Yup.string().required("Comment is required"),
});
