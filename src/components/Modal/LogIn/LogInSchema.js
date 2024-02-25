import * as Yup from "yup";
const regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please, enter valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6)
    .matches(regEx, {
      message: "Password should be of minimum 6 characters length",
    })
    .required("Password  is required"),
});
export default LoginSchema;
