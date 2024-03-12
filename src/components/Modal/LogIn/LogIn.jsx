import { Form, Formik, useFormik, ErrorMessage } from "formik";
import {
  ModalWrapper,
  Title,
  Text,
  InputWrapper,
  Input,
  FormWrapper,
  Btn,
  EyeNotVisible,
  EyeVisible,
  ErrorText,
} from "./LogIn.styled";
import { useState } from "react";
import { logIn } from "../../../redux/Auth/authOperation";
import { useDispatch } from "react-redux";
import LoginSchema from "./LogInSchema";

const LogIn = () => {
  const dispatch = useDispatch();
  const [isVisiblePassword, setIsvisiblePassword] = useState(false);

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setIsvisiblePassword((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      dispatch(logIn(values));
    },
  });

  return (
    <ModalWrapper>
      <Title>Log In</Title>
      <Text>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </Text>
      <Formik>
        <Form>
          <FormWrapper>
            <InputWrapper>
              <Input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                autoComplete="off"
              />
              {formik.errors.email && formik.touched.email ? (
                <ErrorText>{formik.errors.email}</ErrorText>
              ) : null}
              <ErrorMessage name="email" />
            </InputWrapper>

            <InputWrapper>
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type={isVisiblePassword ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password ? (
                <ErrorText>{formik.errors.password}</ErrorText>
              ) : null}
              <ErrorMessage name="password" />
              {isVisiblePassword ? (
                <EyeNotVisible onClick={handleTogglePassword} />
              ) : (
                <EyeVisible onClick={handleTogglePassword} />
              )}
            </InputWrapper>
            <Btn type="submit" onClick={formik.handleSubmit}>
              Log In
            </Btn>
          </FormWrapper>
        </Form>
      </Formik>
    </ModalWrapper>
  );
};
export default LogIn;
