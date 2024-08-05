import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

const Container = styled.div`
  padding-bottom: 4rem;
  border-bottom: 1px solid lightgray;
  width: 100%;
  padding: 2vmax 8vmax;
  @media (max-width: 768px) {
    width: 100vw;
    /* border: 2px solid red; */
    padding: 2rem;
    position: relative;
  }
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid lightgray;
  & > div {
    display: flex;
    align-items: center;
  }
  & > h2 {
    letter-spacing: 2px;
  }
  @media (max-width: 768px) {
    & > h2 {
      font-size: large;
    }
    & > div {
      font-size: small;
      flex-direction: column;
    }
  }
`;
const Rating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 3rem;
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1rem;
    margin: 0;
    font-size: smaller;
  }
`;
const WriteReview = styled.button`
  background: none;
  border: none;
  background-color: blue;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 2rem;
  border-radius: 35px;
  height: 5rem;
  &:hover {
    background-color: #0505b3;
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 95%;
    right: 50%;
    transform: translateX(50%);
    height: 3rem;
  }
`;
const starsOptions = {
  edit: false,
  value: 4.5,
  size: 20,
  isHalf: true,
};

const Body = styled.ul`
  list-style: none;
  @media (max-width: 768px) {
    /* border: 2px solid green; */
    margin-bottom: 4rem;
  }
`;
const Review = styled.li`
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    margin: 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 1rem;
    & > h4 {
      font-size: 2.2vmax;
    }
    & > p {
      font-size: 1.5vmax;
      line-height: 1.2;
      margin-top: 0.5rem;
    }
  }
`;
const Name = styled.h4``;
const Text = styled.p`
  font-size: 1vmax;
`;

function Reviews() {
  return (
    <Container>
      <Header>
        <h2>Reviews</h2>
        <div>
          <Rating>
            <h2>4.9</h2>
            <ReactStars {...starsOptions} />
          </Rating>
          <WriteReview>Write a Review</WriteReview>
        </div>
      </Header>
      <Body>
        <Review>
          <Name>Ram Chaudhary</Name>
          <Text>
            They will provide very determined lawyer advice services to anyone
            who has been wronged legally and my own personal advice is that
            please do not hesitate to approach Ezylegal. They are always very
            open-minded and provide proper solutions and answers. Happy to have
            received help from Ezylegal in time.
          </Text>
        </Review>
        <Review>
          <Name>Ram Chaudhary</Name>
          <Text>
            They will provide very determined lawyer advice services to anyone
            who has been wronged legally and my own personal advice is that
            please do not hesitate to approach Ezylegal. They are always very
            open-minded and provide proper solutions and answers. Happy to have
            received help from Ezylegal in time.
          </Text>
        </Review>
        <Review>
          <Name>Ram Chaudhary</Name>
          <Text>
            They will provide very determined lawyer advice services to anyone
            who has been wronged legally and my own personal advice is that
            please do not hesitate to approach Ezylegal. They are always very
            open-minded and provide proper solutions and answers. Happy to have
            received help from Ezylegal in time.
          </Text>
        </Review>
        <Review>
          <Name>Ram Chaudhary</Name>
          <Text>
            They will provide very determined lawyer advice services to anyone
            who has been wronged legally and my own personal advice is that
            please do not hesitate to approach Ezylegal. They are always very
            open-minded and provide proper solutions and answers. Happy to have
            received help from Ezylegal in time.
          </Text>
        </Review>
        <Review>
          <Name>Ram Chaudhary</Name>
          <Text>
            They will provide very determined lawyer advice services to anyone
            who has been wronged legally and my own personal advice is that
            please do not hesitate to approach Ezylegal. They are always very
            open-minded and provide proper solutions and answers. Happy to have
            received help from Ezylegal in time.
          </Text>
        </Review>
        <Review>
          <Name>Ram Chaudhary</Name>
          <Text>
            They will provide very determined lawyer advice services to anyone
            who has been wronged legally and my own personal advice is that
            please do not hesitate to approach Ezylegal. They are always very
            open-minded and provide proper solutions and answers. Happy to have
            received help from Ezylegal in time.
          </Text>
        </Review>
      </Body>
    </Container>
  );
}

export default Reviews;
