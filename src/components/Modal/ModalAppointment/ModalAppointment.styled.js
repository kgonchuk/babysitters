import styled from "styled-components";
import { baseTheme } from "../../../styles/theme";
import { Field } from "formik";

export const Title = styled.h1`
  font-size: 20px;
  color: ${baseTheme.colors.primaryText};
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 40px;
    margin-bottom: 20px;
    line-height: 48px;
    margin-bottom: 10px;
  }
`;
export const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 16px;

    margin-bottom: 40px;
  }
`;
export const ModalWrapper = styled.div``;
export const FormWrapper = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;
export const InputWrapper = styled.div`
  margin-bottom: 12px;
  position: relative;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`;
export const Input = styled(Field)`
  width: 100%;
  padding: 10px 12px;
  font-size: 12px;
  color: ${baseTheme.colors.primaryText};
  font-weight: 400;
  line-height: 1.375;
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.3s;
  background-color: ${baseTheme.background.white};
  &:focus {
    border-color: ${baseTheme.background.main};
  }
  &::placeholder {
    color: ${baseTheme.colors.primaryText};
  }
  @media screen and (min-width: 768px) {
    padding: 16px 18px;
    font-size: 16px;
  }
`;
export const Btn = styled.button`
  box-sizing: border-box;
  align-self: flex-end;
  padding: 16px 100px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 11px;
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
  @media screen and (min-width: 768px) {
    /* padding: 16px 180px; */
    width: 100%;
    margin-top: 22px;
  }
  @media screen and (min-width: 1440px) {
    /* padding: 16px 189px; */
    width: 100%;
  }
`;
export const ProfileWrap = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;
export const ProfileImg = styled.div`
  img {
    width: 44px;
    height: 44px;
    border-radius: 15px;
  }
`;
export const ProfileInfo = styled.div`
  p {
    font-size: 14px;
    margin-bottom: 4px;
    color: ${baseTheme.colors.grayText};
    line-height: 16px;
  }
  h1 {
    font-size: 16px;
    color: ${baseTheme.colors.primaryText};
    line-height: 24px;
    font-weight: 500;
  }
`;

export const ModalTextArea = styled.textarea`
  /* width: 246px; */
  width: 100%;
  height: 60px;
  padding: 16px 18px;
  font-size: 12px;
  color: ${baseTheme.colors.primaryText};
  font-weight: 400;
  line-height: 1.375;
  border: 1px solid rgba(18, 20, 23, 0.1);
  border-radius: 12px;
  box-sizing: border-box;
  outline: none;
  transition: border-color 0.3s;
  background-color: ${baseTheme.background.white};
  &:focus {
    border-color: ${baseTheme.background.main};
  }
  &::placeholder {
    color: ${baseTheme.colors.primaryText};
  }
  @media screen and (min-width: 768px) {
    /* width: 373px; */
    width: 100%;
  }
  @media screen and (min-width: 1440px) {
    width: 472px;
    height: 116px;
    font-size: 16px;
    /* width: 100%; */
  }
`;
export const ErrorText = styled.div`
  color: red;
  margin-top: 4px;
`;
// ======================================

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  color: ${baseTheme.colors.primaryText};
  justify-content: space-between;
  display: flex;
  padding: 16px 18px;
  font-weight: 400;
  font-size: 14px;
  align-items: center;
  border-radius: 12px;
  background-color: ${baseTheme.background.white};
  cursor: pointer;
  width: 118px;
  height: 38px;
  border: 1px solid rgba(18, 20, 23, 0.1);

  @media screen and (min-width: 768px) {
    width: 180px;
  }
  @media screen and (min-width: 1440px) {
    width: 232px;
    width: 120px;
    height: 55px;
  }
`;
export const DropdownList = styled.ul`
  z-index: 100;
  list-style: none;
  border-radius: 14px;
  color: rgba(25, 26, 21, 0.3);
  box-shadow: 0px 20px 69px 0px rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
  text-align: center;
  padding: 16px;
  position: absolute;
  top: 90%;
  left: 80px;
  width: 151px;
  height: 180px;
  overflow-y: auto;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  font-size: 16px;
`;

export const TextDrop = styled.p`
  color: ${baseTheme.colors.primaryText};
  margin-bottom: 16px;
`;
export const DropdownItem = styled.li`
  margin-bottom: 8px;
  color: rgba(25, 26, 21, 0.3);
  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: rgb(25, 26, 21);
  }
`;
