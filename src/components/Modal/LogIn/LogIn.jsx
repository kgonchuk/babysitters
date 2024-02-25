import { ErrorMessage, Form, Formik } from "formik";
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
} from "./LogIn.styled";
import { useState } from "react";
import LoginSchema from "./LogInSchema";

const LogIn = () => {
  const [isVisiblePassword, setIsvisiblePassword] = useState(false);
  const handleTogglePassword = (e) => {
    e.preventDefault();
    setIsvisiblePassword((prevState) => !prevState);
  };
  return (
    <ModalWrapper>
      <Title>Log In</Title>
      <Text>
        Welcome back! Please enter your credentials to access your account and
        continue your babysitter search.
      </Text>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        // validationSchema={LoginSchema}
      >
        <Form>
          <FormWrapper>
            <InputWrapper>
              <Input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                autoComplete="off"
              />
              <ErrorMessage name="email" component="div" />
            </InputWrapper>

            <InputWrapper>
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type={isVisiblePassword ? "text" : "password"}
              />
              {isVisiblePassword ? (
                <EyeNotVisible onClick={handleTogglePassword} />
              ) : (
                <EyeVisible onClick={handleTogglePassword} />
              )}
              <ErrorMessage name="password" component="div" />
            </InputWrapper>
            <Btn type="submit">Log In</Btn>
          </FormWrapper>
        </Form>
      </Formik>
    </ModalWrapper>
  );
};
export default LogIn;
