import styled from "styled-components";

const StyledProductsSection = styled.div`
  background-color: #fff;
  padding: 3rem 10vw;
  border-top: 1px solid grey;
`;

const Heading = styled.div`
  font-size: 2.8rem;
  font-weight: 600;
  letter-spacing: 2.5px;
  color: #000;
`;

const Content = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
`;
const ContentHead = styled.div`
  font-size: 1.8rem;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 2rem;
  & > * {
    /* border: 1px solid black; */
    padding: 1rem;
    width: max-content;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    &::after {
      content: " ";
      width: 0%;
      height: 2px;
      background: blue;
      display: block;
      margin: auto;
      transition: 0.5s;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;
const HeadingIcon = styled.img`
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  margin-bottom: 1rem;
`;
const HeadingTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1.5px;
  color: #2f2e2e;
`;

const ContentBody = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
`;
const BodyBox = styled.div`
  /* border: 1px solid black; */
  padding: 1rem;
  height: min-content;
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BoxHead = styled.div`
  width: 70%;
  text-align: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid gray;
  margin-bottom: 2rem;
`;
const BoxList = styled.ul`
  list-style: none;
  & > * {
    margin-bottom: 1.5rem;
    color: #4e4e4e;
    font-size: 1.5rem;
  }
  margin-bottom: 3rem;
`;
const BoxBtn = styled.button`
  border: 2px solid blue;
  padding: 1rem 3rem;
  border-radius: 30px;
  color: blue;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
    background-color: blue;
    color: #fff;
    transition: all 0.3s ease-in-out;
  }
  transition: all 0.3s ease-in-out;
  margin-bottom: 2rem;
`;

function ProductsSection() {
  return (
    <StyledProductsSection>
      <Heading>Products for all your Startup needs</Heading>
      <Content>
        <ContentHead>
          <div>
            <HeadingIcon
              src="https://img.icons8.com/?size=100&id=122504&format=png&color=000000"
              alt="heading-icon1"
            />
            <HeadingTitle>Company Formation</HeadingTitle>
          </div>
          <div>
            <HeadingIcon
              src="https://img.icons8.com/?size=100&id=122504&format=png&color=000000"
              alt="heading-icon1"
            />
            <HeadingTitle>Company Formation</HeadingTitle>
          </div>
          <div>
            <HeadingIcon
              src="https://img.icons8.com/?size=100&id=122504&format=png&color=000000"
              alt="heading-icon1"
            />
            <HeadingTitle>Company Formation</HeadingTitle>
          </div>
        </ContentHead>
        <ContentBody>
          <BodyBox
            style={{
              borderRight: "1px solid darkgray",
            }}
          >
            <BoxHead>
              <h3>One Person One Company</h3>
              <p
                style={{
                  margin: "1rem 0",
                  fontWeight: "bold",
                  fontSize: "4rem",
                  color: "#202020",
                }}
              >
                ₹12,999
              </p>
              <p>
                <span
                  style={{
                    textDecoration: "line-through",
                    marginRight: "1rem",
                  }}
                >
                  ₹17499{" "}
                </span>
                <span
                  style={{
                    color: "red",
                  }}
                >
                  (26% off)
                </span>
              </p>
            </BoxHead>
            <BoxList>
              <li>Separate legal Existence</li>
              <li>Limited liability of shareholders</li>
              <li>Continuous Existence</li>
              <li>Easy Fund Raising</li>
            </BoxList>
            <BoxBtn>Know More</BoxBtn>
          </BodyBox>
          <BodyBox>
            <BoxHead>
              <h3>One Person One Company</h3>
              <p
                style={{
                  margin: "1rem 0",
                  fontWeight: "bold",
                  fontSize: "4rem",
                  color: "#202020",
                }}
              >
                ₹12,999
              </p>
              <p>
                <span
                  style={{
                    textDecoration: "line-through",
                    marginRight: "1rem",
                  }}
                >
                  ₹17499{" "}
                </span>
                <span
                  style={{
                    color: "red",
                  }}
                >
                  (26% off)
                </span>
              </p>
            </BoxHead>
            <BoxList>
              <li>Separate legal Existence</li>
              <li>Limited liability of shareholders</li>
              <li>Continuous Existence</li>
              <li>Easy Fund Raising</li>
            </BoxList>
            <BoxBtn>Know More</BoxBtn>
          </BodyBox>
        </ContentBody>
      </Content>
    </StyledProductsSection>
  );
}

export default ProductsSection;
