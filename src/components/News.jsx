import styled from "styled-components";

const NewsSection = styled.section`
  width: 90%;
  height: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  margin-top: 5rem;
`;

const Div1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: auto;
`;

const Heading = styled.h2`
  font-size: 3em;
  margin-bottom: 0.5em;
  letter-spacing: 1px;
`;

const Paragraph = styled.p`
  font-size: 1.5em;
  letter-spacing: 1px;
  padding: 1rem;
  padding-left: 0;
`;

const Div2 = styled.div`
  flex: 1;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin-bottom: auto;
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
`;

const ParagraphGrid = styled.p`
  font-size: 1em;
  text-align: center;
  line-height: 1.3em;
  margin-top: 1em;
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
