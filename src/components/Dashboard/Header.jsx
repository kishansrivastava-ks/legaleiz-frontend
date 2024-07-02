/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FaHeadset, FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../contexts/authContext/authContext";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchUserData } from "../../utils/library";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: white; */
  padding: 0.8rem 4rem;
`;

const WelcomeText = styled.div`
  font-size: 3rem;
  letter-spacing: 4px;
  font-weight: 600;
`;

const UserProfileIcon = styled.div`
  font-size: 4rem;
  /* background-color: yellow; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledNavLink = styled(NavLink)`
  font-size: 2rem;
  background-color: #f4f2f2;
  padding: 1rem;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Header = () => {
  const { userLoggedIn, currentUser } = useAuth();
  // console.log(currentUser);
  const { email } = currentUser;

  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await fetchUserData(email);
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData();
  }, [email]);

  const getImageSrc = (photo) => {
    if (photo && photo.data && photo.contentType) {
      const base64String = btoa(
        new Uint8Array(photo.data.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      return `data:${photo.contentType};base64,${base64String}`;
    }
    return null;
  };

  return (
    <HeaderContainer>
      {userLoggedIn && currentUser ? (
        <WelcomeText>
          Welcome, {currentUser.displayName.split(" ")[0]}
        </WelcomeText>
      ) : (
        <WelcomeText>Welcome</WelcomeText>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          // backgroundColor: "red",
        }}
      >
        <StyledNavLink to="/dashboard/help-and-support">
          <FaHeadset />
        </StyledNavLink>
        <StyledNavLink to="/dashboard/faqs">
          <FaQuestionCircle />
        </StyledNavLink>
        <UserProfileIcon>
          {userLoggedIn && currentUser ? (
            <img
              src={(user && getImageSrc(user.photo)) || currentUser.photoURL}
              alt="user photo"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "10px",
                fontSize: "1rem",
              }}
            />
          ) : (
            <FaUserCircle />
          )}
        </UserProfileIcon>
      </div>
    </HeaderContainer>
  );
};

export default Header;
