/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FaHeadset, FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../contexts/authContext/authContext";
import { NavLink } from "react-router-dom";

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
              src={currentUser.photoURL}
              alt="user photo"
              style={{
                width: "50px",
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
