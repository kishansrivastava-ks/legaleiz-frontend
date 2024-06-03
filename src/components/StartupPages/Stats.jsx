import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

const StyledStats = styled.div`
  width: 100%;
  /* background-color: rgb(255, 0, 0); */
  /* padding: 1vmax; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1.5vmax;
`;

const RatingBox = styled.div`
  /* background-color: lightblue; */
  color: #000;
  flex: 1 1;
  flex-basis: 20%;
  background-color: #f6f5f5;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-evenly; */
  height: max-content;
  padding: 1vmax 0;
  gap: 1rem;
  & > h2 {
    font-weight: 600;
    font-size: 4vmax;
    letter-spacing: 2px;
  }
  & > div {
    margin-top: -2rem;
  }
  & > p {
    font-size: 1.2vmax;
    letter-spacing: 2px;
    color: #000;
    font-weight: 600;
  }
`;
const Box = styled.div`
  /* background-color: lightgreen; */
  flex: 1 1;
  flex-basis: 70%;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1vmax;
  align-self: stretch;
`;
const Heading = styled.div`
  font-size: 2vmax;
  font-weight: bold;
  color: #08be08;
  text-transform: uppercase;
  letter-spacing: 3px;
  width: 100%;
`;
const Para = styled.p`
  font-weight: 500;
  font-size: 1vmax;
  text-align: justify;
  width: 100%;
  margin: 1vmax 0;
`;
const Purchased = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-weight: 500;
  & > img {
    width: 1.5vmax;
    border-radius: 50%;
    margin-right: 1rem;
  }
  & > p {
    font-size: 1.2vmax;
    & > span {
      font-weight: 600;
      color: #000;
    }
  }
`;

const stats = {
  rating: 4.5,
  reviews: 123,
  purchased: 256,
};

const starsOptions = {
  edit: false,
  // color: #ffa500,
  value: 4.5,
  size: 30,
  isHalf: true,
};

function Stats() {
  return (
    <StyledStats>
      <RatingBox>
        <h2>{stats.rating}</h2>
        <div>
          <ReactStars {...starsOptions} />
        </div>
        <p>{`(${stats.reviews} reviews)`}</p>
      </RatingBox>
      <Box>
        <Heading>Partnership Firm</Heading>
        <Para>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          nulla dolores cupiditate error pariatur debitis, repellendus tempora,
          suscipit eveniet officia, facilis ut nostrum adipisci ullam!
        </Para>
        <Purchased>
          <img src="https://img.icons8.com/?size=100&id=u4U9G3tGGHu1&format=png&color=6eb404" />
          <p>
            <span>{stats.purchased} </span>People Purchased
          </p>
        </Purchased>
      </Box>
    </StyledStats>
  );
}

export default Stats;
