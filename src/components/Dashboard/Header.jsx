/* eslint-disable react/prop-types */
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../contexts/authContext/authContext";

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
    </HeaderContainer>
  );
};

export default Header;
