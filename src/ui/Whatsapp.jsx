import styled from "styled-components";

const Box = styled.div`
  position: absolute;
  height: 8rem;
  width: 8rem;
  background: transparent;
  top: 100%;
  left: 100%;
  transform: translate(-130%, -130%);
  /* padding: 10rem; */
  background-color: #fff;
  border-radius: 50%;
`;

const Image = styled.img`
  height: 100%;
  border-radius: 50%;
  width: 100%;
  aspect-ratio: 1/1;
`;

function Whatsapp() {
  return (
    <Box>
      <Image src="https://img.icons8.com/?size=100&id=iHyuCoDsohLG&format=png&color=40C057" />
    </Box>
  );
}

export default Whatsapp;
