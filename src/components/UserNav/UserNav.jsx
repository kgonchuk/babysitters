import { Button, UserContainer, UserData, UserWrap } from "./UserNav.styled";
import userImg from "../../assets/img/image.svg";
import { useState } from "react";
import Notiflix from "notiflix";
import { useSelector } from "react-redux";
import { selectUserName } from "../../redux/selectors";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useEffect } from "react";

const UserNav = () => {
  const [authUser, setAuthUser] = useState(null);
  const name = useSelector(selectUserName);

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
        console.log("GoodBuy");
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
            <p>{name}</p>
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
