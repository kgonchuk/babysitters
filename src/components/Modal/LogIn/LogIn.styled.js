import styled from "styled-components";
import { baseTheme } from "../../../styles/theme";
import { Field, ErrorMessage } from "formik";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export const Title = styled.h1`
  font-size: 40px;
  color: ${baseTheme.colors.primaryText};
  margin-bottom: 20px;
`;
export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 40px;
`;
export const ModalWrapper = styled.div``;
export const FormWrapper = styled.div`
  margin-bottom: 40px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 18px;
  max-width: 438px;
  position: relative;
  width: 100%;
`;
export const Input = styled(Field)`
  width: 100%;
  padding: 16px 18px;
  font-size: 16px;
  color: ${baseTheme.colors.primaryText};
  font-weight: 400;
  line-height: 1.375;
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${baseTheme.background.main};
  }
  &::placeholder {
    color: rgb(25, 26, 21);
    font-size: 16px;
  }
`;

export const Btn = styled.button`
  box-sizing: border-box;
  align-self: flex-end;
  padding: 16px 189px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 22px;
  letter-spacing: -0.01em;
  text-decoration: none;
  border-radius: 30px;
  display: flex;
  height: 52px;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: ${baseTheme.background.main};
  transition: box-shadow 0.3s ease;
  color: ${baseTheme.background.white};
  cursor: pointer;
  gap: 18px;
  letter-spacing: -0.02em;
  &:hover {
    background-color: ${baseTheme.background.secondaryMain};
  }
`;
export const EyeVisible = styled(IoEyeOffOutline)`
  position: absolute;
  top: 27px;
  right: 18px;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
`;

export const EyeNotVisible = styled(IoEyeOutline)`
  position: absolute;
  top: 27px;
  right: 18px;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
`;
export const ErrorText = styled.div`
  color: red;
  margin-top: 4px;
`;
