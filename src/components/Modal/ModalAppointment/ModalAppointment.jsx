import { Formik, useFormik, Form, ErrorMessage } from "formik";
import {
  Btn,
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownList,
  ErrorText,
  FormWrapper,
  Input,
  InputWrapper,
  ModalTextArea,
  ModalWrapper,
  ProfileImg,
  ProfileInfo,
  ProfileWrap,
  Text,
  TextDrop,
  Title,
  Wrapper,
} from "./ModalAppointment.styled";
import { useState } from "react";
import clockIcon from "../../../assets/img/clock.svg";
import "react-toastify/dist/ReactToastify.css";
import Notiflix from "notiflix";
import { AppointmentSchema } from "./ModalAppointmentSchema";

const options = [
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "1:00",
  "1:30",
  "2:00",
  "2:30",
];

const ModalAppointment = ({ handleModalToggle, nanny }) => {
  const [isTimeMeeting, setIsTimeMeeting] = useState("");

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [option, setOption] = useState(options[0]);

  const handleOptionSelect = (selectedOption) => {
    console.log(selectedOption);
    setOption(selectedOption);
    setDropdownOpen(false);
    setIsTimeMeeting(selectedOption);
  };

  const formik = useFormik({
    initialValues: {
      address: "",
      phone: "",
      age: "",

      email: "",
      parentName: "",
      comment: "",
    },
    validationSchema: AppointmentSchema,
    onSubmit: (values) => {
      console.log("form would have submitted here.", values);
      Notiflix.Notify.success(
        `Appointment scheduled successfully with ${nanny.name} !`
      );
      formik.resetForm();
      handleModalToggle();
    },
  });

  return (
    <ModalWrapper>
      <Title>Make an appointment with a babysitter</Title>
      <Text>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </Text>
      <ProfileWrap>
        <ProfileImg>
          <img src={nanny.avatar_url} alt="User_profile" />
        </ProfileImg>
        <ProfileInfo>
          <p>Your nanny</p>
          <h1>{nanny.name}</h1>
        </ProfileInfo>
      </ProfileWrap>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <FormWrapper>
            <Wrapper>
              <InputWrapper>
                <Input
                  id="address"
                  name="address"
                  placeholder="Address"
                  type="text"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                />
                {formik.errors.address && formik.touched.address ? (
                  <ErrorText>{formik.errors.address}</ErrorText>
                ) : null}
                <ErrorMessage name="address" />
              </InputWrapper>

              <InputWrapper>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="+380"
                  type="text"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                />
                {formik.errors.phone && formik.touched.phone ? (
                  <ErrorText>{formik.errors.phone}</ErrorText>
                ) : null}
                <ErrorMessage name="phone" />
              </InputWrapper>
            </Wrapper>
            <Wrapper>
              <InputWrapper>
                <Input
                  id="age"
                  name="age"
                  placeholder="Child's age"
                  type="number"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  value={formik.values.age}
                />
                {formik.errors.age && formik.touched.age ? (
                  <ErrorText>{formik.errors.age}</ErrorText>
                ) : null}
                <ErrorMessage name="address" />
              </InputWrapper>

              <DropdownContainer>
                <DropdownButton
                  type="button"
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                >
                  {option} <img src={clockIcon} alt="clock" />
                </DropdownButton>
                <DropdownList $isOpen={isDropdownOpen}>
                  {" "}
                  <TextDrop>Meeting time</TextDrop>
                  {options.map((option, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </DropdownItem>
                  ))}
                </DropdownList>
              </DropdownContainer>
            </Wrapper>
            <InputWrapper>
              <Input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <ErrorText>{formik.errors.email}</ErrorText>
              ) : null}
              <ErrorMessage name="email" />
            </InputWrapper>
            <InputWrapper>
              <Input
                id="parentName"
                name="parentName"
                placeholder="Father's or mother's name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.parentName}
              />
              {formik.errors.parentName && formik.touched.parentName ? (
                <ErrorText>{formik.errors.parentName}</ErrorText>
              ) : null}
              <ErrorMessage name="parentName" />
            </InputWrapper>

            <ModalTextArea
              id="comment"
              name="comment"
              type="text"
              placeholder="Comment"
              value={formik.values.comment}
              onChange={formik.handleChange}
            />
            {formik.errors.comment && formik.touched.comment ? (
              <ErrorText>{formik.errors.comment}</ErrorText>
            ) : null}
            <ErrorMessage name="comment" />
            <Btn type="submit">Send</Btn>
          </FormWrapper>
        </Form>
      </Formik>
    </ModalWrapper>
  );
};
export default ModalAppointment;
