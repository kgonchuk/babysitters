import { Button, UserContainer, UserData, UserWrap } from "./UserNav.styled";
import userImg from "../../assets/img/image.svg";
import { useState } from "react";
import Notiflix from "notiflix";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserNav = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        Notiflix.Notify.success("You have successfully logged out");
      })
      .catch((error) => {
        Notiflix.Notify.error(`Logout failed: ${error.message}`);
      });
  };

  return (
    <UserContainer>
      {authUser ? (
        <UserWrap>
          <UserData>
            <img src={userImg} alt="userImg" />
            <p>{authUser.displayName}</p>
          </UserData>
          <Button type="button" onClick={logOut}>
            Log Out
          </Button>
        </UserWrap>
      ) : (
        <p>Sing Out</p>
      )}
    </UserContainer>
  );
};
export default UserNav;
