import styled from "styled-components";

const StyledSection = styled.div`
  background-color: #fff;
  padding: 3rem 10vw;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  place-content: center;
  gap: 1rem;
  grid-template-rows: auto;
  border: 0;

  & > div {
    /* background-color: #e79c9c; */
    text-align: center;
    padding: 1vmax 0;

    & > img {
      filter: grayscale(100%);

      &:hover {
        transform: scale(1.2);
        transition: all 0.4s ease-in-out;
        filter: grayscale(0%);
      }
      transition: all 0.4s ease-in-out;
    }
  }
`;

const Title = styled.h2`
  letter-spacing: 4px;
  font-weight: 550;
  font-size: 2.5vmax;
  text-align: center;
  line-height: 3vmax;
`;

function Clients() {
  return (
    <StyledSection>
      <Title>Our Clients</Title>
      <Container>
        <div>
          <img
            src="https://www.legalkart.com/frontend/client_base_web/layout-optim/legal-for-startup/ola-logo.webp"
            alt="icon1"
          />
        </div>
        <div>
          <img
            src="https://www.legalkart.com/frontend/client_base_web/layout-optim/legal-for-startup/shadowfax-logo.webp"
            alt="icon1"
          />
        </div>
        <div>
          <img
            src="https://www.legalkart.com/frontend/client_base_web/layout-optim/legal-for-startup/rivogo-logo.webp"
            alt="icon1"
          />
        </div>
        <div>
          <img
            src="https://www.legalkart.com/frontend/client_base_web/layout-optim/legal-for-startup/zoomcar-logo.webp"
            alt="icon1"
          />
        </div>
        <div>
          <img
            src="https://www.legalkart.com/frontend/client_base_web/layout-optim/legal-for-startup/module-logo.webp"
            alt="icon1"
          />
        </div>
        <div>
          <img
            src="https://www.legalkart.com/frontend/client_base_web/layout-optim/legal-for-startup/piggi-ride-logo.webp"
            alt="icon1"
          />
        </div>
        <div>
          <img
            src="https://www.legalkart.com/frontend/client_base_web/layout-optim/legal-for-startup/basic-logo.webp"
            alt="icon1"
          />
        </div>
        <div>
          <img
            src="https://www.legalkart.com/frontend/client_base_web/layout-optim/legal-for-startup/springrole-logo.webp"
            alt="icon1"
          />
        </div>
      </Container>
    </StyledSection>
  );
}

export default Clients;
