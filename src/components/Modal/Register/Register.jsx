import { ErrorMessage, Form, Formik, useFormik } from "formik";
import {
  ModalWrapper,
  Title,
  Text,
  FormWrapper,
  InputWrapper,
  Input,
  Btn,
  EyeVisible,
  EyeNotVisible,
  ErrorText,
} from "./Register.styled";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { register } from "../../../redux/Auth/authOperation";
import RegisterSchema from "./RegisterSchema";

const Register = () => {
  const dispatch = useDispatch();

  const [isVisiblePassword, setIsvisiblePassword] = useState(false);

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setIsvisiblePassword((prevState) => !prevState);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      console.log("form would have submitted here.", values);
      dispatch(register(values));
    },
  });
  return (
    <ModalWrapper>
      <Title>Registration</Title>
      <Text>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </Text>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <FormWrapper>
            <InputWrapper>
              <Input
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                autoComplete="off"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && formik.touched.name ? (
                <ErrorText>{formik.errors.name}</ErrorText>
              ) : null}
              <ErrorMessage name="name" />
            </InputWrapper>

            <InputWrapper>
              <Input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                autoComplete="off"
                value={formik.values.email}
                onChange={formik.handleChange}
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
              <ErrorMessage name="password" component="div" />
            </InputWrapper>
            <Btn type="submit">Sign Up</Btn>
          </FormWrapper>
        </Form>
      </Formik>
    </ModalWrapper>
  );
};
export default Register;
