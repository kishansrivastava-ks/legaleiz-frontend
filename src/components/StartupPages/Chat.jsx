import styled from "styled-components";

const ChatBox = styled.div`
  width: 100%;
  height: max-content;
  background-color: #101484;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  /* border: 2px solid red; */
`;

const Box1 = styled.div`
  flex: 1 1;
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* background-color: red; */
  padding: 1vmax;
  padding-left: 2vmax;

  & > h1 {
    font-weight: 600;
    font-size: 4vmax;
    color: #fff;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    & > span {
      color: #30fd30;
    }
  }

  & > h3 {
    font-size: 1.5;
    color: #fff;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  /* border: 3px solid red; */
`;
const ChatBtn = styled.button`
  padding: 0.8vmax 2vmax;
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

  @media (max-width: 768px) {
    transform: scale(0.6);
    margin: 0;
    /* border: 2px solid red; */
    margin-left: -2.5rem;
  }
  //
`;
const Box2 = styled.div`
  flex: 1 1;
  flex-basis: 45%;
  /* background-color: yellow; */
  overflow: hidden;
  border-radius: inherit;
  clip-path: ellipse(69% 90% at 69% 52%);
  background-image: url("/images/chat.jpg");
  background-position: center;
  background-size: cover;
`;
// const Image = styled.img``;

function Chat() {
  return (
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
  );
}

export default Chat;
