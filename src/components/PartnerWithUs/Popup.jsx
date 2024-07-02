/* eslint-disable react/prop-types */
import styled from "styled-components";
import SpinnerMini from "../../ui/SpinnerMini";

const Overlay = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PopupContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  /* background-color: blue; */
  color: #fff;
  padding: 2rem;
  border-radius: 8px;
  z-index: 150;
  width: 50rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const PopupMessage = styled.p`
  font-size: 1.8rem;
  text-align: center;
`;

const Popup = ({ message }) => {
  return (
    <Overlay>
      <PopupContainer>
        <PopupMessage>{message}</PopupMessage>
        <SpinnerMini />
      </PopupContainer>
    </Overlay>
  );
};

export default Popup;
