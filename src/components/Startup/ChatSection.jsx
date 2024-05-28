import styled from "styled-components";

const StyledChatSection = styled.div`
  background-color: #fff;
  padding: 3rem 10vw;
  border-top: 1px solid lightgray;
`;

const ChatBox = styled.div`
  width: 100%;
  height: 20vmax;
  background-color: #101484;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
`;

const Box1 = styled.div`
  flex: 1 1;
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* background-color: red; */
  padding: 2vmax 4vmax;

  & > h1 {
    font-weight: 600;
    font-size: 5vmax;
    color: #fff;

    & > span {
      color: #30fd30;
    }
  }

  & > h3 {
    font-size: 1%.5;
    color: #fff;
  }
`;
const ChatBtn = styled.button`
  padding: 1vmax 3vmax;
  border: none;
  background-color: var(--color-main);
  color: #fff;
  margin: 1vmax 0;
  border-radius: 5px;
  cursor: pointer;
  letter-spacing: 2px;
  &:hover {
    background-color: #2c32e4;
    transition: all 0.5s ease-in-out;
  }
  transition: all 0.5s ease-in-out;
  //
`;
const Box2 = styled.div`
  flex: 1 1;
  flex-basis: 40%;
  background-color: yellow;
  overflow: hidden;
  border-radius: inherit;
  clip-path: ellipse(69% 90% at 69% 52%);
  background-image: url("images/chat.jpg");
  background-position: center;
  background-size: cover;
`;
// const Image = styled.img``;

function ChatSection() {
  return (
    <StyledChatSection>
      <ChatBox>
        <Box1>
          <h1>
            Chat <span>with us</span>
          </h1>
          <h3>Chat for all your startup needs</h3>
          <ChatBtn>Chat Now</ChatBtn>
        </Box1>
        <Box2>image</Box2>
      </ChatBox>
    </StyledChatSection>
  );
}

export default ChatSection;
