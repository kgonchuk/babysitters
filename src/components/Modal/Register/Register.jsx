import { ErrorMessage, Form, Formik } from "formik";
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
} from "./Register.styled";
import { useState } from "react";
import RegisterSchema from "./RegisterSchema";

const Register = () => {
  const [isVisiblePassword, setIsvisiblePassword] = useState(false);

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setIsvisiblePassword((prevState) => !prevState);
  };
  return (
    <ModalWrapper>
      <Title>Registration</Title>
      <Text>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </Text>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        // validationSchema={RegisterSchema}
      >
        <Form>
          <FormWrapper>
            <InputWrapper>
              <Input
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                autoComplete="off"
              />
              <ErrorMessage name="name" component="div" />
            </InputWrapper>

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
            <Btn type="submit">Sign Up</Btn>
          </FormWrapper>
        </Form>
      </Formik>
    </ModalWrapper>
  );
};
export default Register;
