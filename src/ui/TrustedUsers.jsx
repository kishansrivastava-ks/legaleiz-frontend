import styled from "styled-components";

const Heading = styled.h2`
  font-size: 1.1em;
  margin-bottom: 1em;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1.5px;
  color: #5e5c5c;
`;

const LogoList = styled.ul`
  /* background-color: red; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 1rem;
  /* padding-bottom: 2rem; */
  border-bottom: 1px solid #ccc;
  /* margin-bottom: 5rem; */
  width: 80%;
  height: auto;
`;

const Logo = styled.img`
  width: 150px;
  height: 100%;
  /* filter: grayscale(100%); */
`;

const LogoItem = styled.li`
  width: 15%;
  height: auto;
  /* margin-right: 2rem; */

  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
  filter: grayscale(100%);

  &:hover {
    transform: scale(1.1);
    filter: grayscale(0);
    cursor: pointer;
  }

  &:last-child {
    margin-right: 0;
  }
`;

function TrustedUsers() {
  return (
    <>
      <Heading>Trusted by over millions of users</Heading>
      <LogoList>
        <LogoItem>
          <Logo src="logo1.png" alt="Logo 1" />
        </LogoItem>
        <LogoItem>
          <Logo src="logo2.png" alt="Logo 2" />
        </LogoItem>
        <LogoItem>
          <Logo src="logo3.png" alt="Logo 3" />
        </LogoItem>
        <LogoItem>
          <Logo src="logo4.png" alt="Logo 4" />
        </LogoItem>
        <LogoItem>
          <Logo src="logo5.png" alt="Logo 5" />
        </LogoItem>
        <LogoItem>
          <Logo src="logo6.png" alt="Logo 6" />
        </LogoItem>
      </LogoList>
    </>
  );
}

export default TrustedUsers;
