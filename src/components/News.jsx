import styled from "styled-components";

const NewsSection = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 4vmax;
  margin-top: 5rem;
  /* test */
  /* background-color: yellow; */
  /* border: 0.5rem solid violet; */
  @media (width <= 1200px) {
    flex-direction: column;
    margin-top: 1rem;
  }
`;

const Div1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: auto;
`;

const Heading = styled.h2`
  font-size: 4rem;
  margin-bottom: 0.5em;
  letter-spacing: 1px;
  @media (width <= 1200px) {
    text-align: center;
    margin-bottom: 0;
    font-size: 3rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.5em;
  letter-spacing: 1px;
  padding: 1rem;
  padding-left: 0;
  @media (width <= 1200px) {
    text-align: center;
  }
  @media (width <= 400px) {
    font-size: 1.5rem;
  }
`;

const Div2 = styled.div`
  flex: 1;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2vmax;
  margin-bottom: auto;
  @media (width <= 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (width <= 650px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (width <= 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GridCell = styled.div`
  width: 20rem;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
  filter: grayscale(100%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.1);
    filter: grayscale(0);
    cursor: pointer;
  }
  padding: 1.5rem;
  justify-content: flex-start;
  @media (width <= 400px) {
    width: 30rem;
    padding: 1rem;
  }
`;

const Image = styled.img`
  /* width: 80%;
  height: 50%; */
  object-fit: cover;
  aspect-ratio: 4/3;
  /* filter: grayscale(100%); */
`;

const HeadingGrid = styled.h3`
  font-size: 1.2em;
  margin-top: 1em;
  @media (width <= 400px) {
    margin-top: 1rem;
    font-size: 1em;
  }
`;

const ParagraphGrid = styled.p`
  font-size: 1em;
  text-align: center;
  line-height: 1.3em;
  margin-top: 1em;
  @media (width <= 400px) {
    margin-top: 0.5rem;
    font-size: 0.9em;
    line-height: 1em;
  }
`;

function News() {
  return (
    <NewsSection>
      <Div1>
        <Heading>LegalEiz in News</Heading>
        <Paragraph>
          Our Success Stories in Media Headlines and Lots of Encouragement.
        </Paragraph>
      </Div1>
      <Div2>
        <GridCell>
          <Image src="https://picsum.photos/id/1015/300/400" alt="Image 1" />
          <HeadingGrid>Heading 1</HeadingGrid>
          <ParagraphGrid>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </ParagraphGrid>
        </GridCell>
        <GridCell>
          <Image src="https://picsum.photos/id/1016/300/400" alt="Image 2" />
          <HeadingGrid>Heading 2</HeadingGrid>
          <ParagraphGrid>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </ParagraphGrid>
        </GridCell>
        <GridCell>
          <Image src="https://picsum.photos/id/1015/300/400" alt="Image 3" />
          <HeadingGrid>Heading 3</HeadingGrid>
          <ParagraphGrid>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </ParagraphGrid>
        </GridCell>
        <GridCell>
          <Image src="https://picsum.photos/id/1018/300/400" alt="Image 4" />
          <HeadingGrid>Heading 4</HeadingGrid>
          <ParagraphGrid>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </ParagraphGrid>
        </GridCell>
        <GridCell>
          <Image src="https://picsum.photos/id/1018/300/400" alt="Image 5" />
          <HeadingGrid>Heading 4</HeadingGrid>
          <ParagraphGrid>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </ParagraphGrid>
        </GridCell>
        <GridCell>
          <Image src="https://picsum.photos/id/1018/300/400" alt="Image 6" />
          <HeadingGrid>Heading 4</HeadingGrid>
          <ParagraphGrid>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </ParagraphGrid>
        </GridCell>
        <GridCell>
          <Image src="https://picsum.photos/id/1018/300/400" alt="Image 7" />
          <HeadingGrid>Heading 4</HeadingGrid>
          <ParagraphGrid>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </ParagraphGrid>
        </GridCell>
        <GridCell>
          <Image src="https://picsum.photos/id/1018/300/400" alt="Image 8" />
          <HeadingGrid>Heading 4</HeadingGrid>
          <ParagraphGrid>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </ParagraphGrid>
        </GridCell>
      </Div2>
    </NewsSection>
  );
}

export default News;
