import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name should be at least 3 characters long!")
    .max(20, "Name should be max 20 characters!")
    .required("Name is required"),
  email: Yup.string()
    .email("Please, enter valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6)

    .required("Password is required"),
});
export default RegisterSchema;
