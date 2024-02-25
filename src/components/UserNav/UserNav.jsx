import { Button, UserContainer, UserData } from "./UserNav.styled";
import userImg from "../../assets/img/image.svg";

const UserNav = () => {
  return (
    <UserContainer>
      <UserData>
        <img src={userImg} alt="userImg" />
        <p>User Name</p>
      </UserData>
      <Button>Log Out</Button>
    </UserContainer>
  );
};
export default UserNav;
