import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

const Container = styled.div`
  /* background-color: blue; */
  padding-bottom: 4rem;
  border-bottom: 1px solid lightgray;
  /* border: 5px solid red; */
  width: 100%;
  padding: 2vmax 8vmax;
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
`;
const Rating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 3rem;
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
`;
const starsOptions = {
  edit: false,
  value: 4.5,
  size: 20,
  isHalf: true,
};

const Body = styled.ul`
  list-style: none;
`;
const Review = styled.li`
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 2rem;
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
