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
  font-size: 2em;
  margin-bottom: 1em;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
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
  height: 28rem;
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
  padding: 2rem;
`;

const Image = styled.img`
  width: 80%;
  height: 50%;
  object-fit: cover;
  /* filter: grayscale(100%); */
`;

const HeadingGrid = styled.h3`
  font-size: 1.2em;
  margin-top: 1em;
`;

const ParagraphGrid = styled.p`
  font-size: 1em;
`;

function News() {
  return (
    <NewsSection>
      <Div1>
        <Heading>Heading</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          nulla auctor, vestibulum magna sed, convallis ex.
        </Paragraph>
      </Div1>
      <Div2>
        <GridCell>
          <Image src="https://picsum.photos/id/1015/300/400" alt="Image 1" />
          <HeadingGrid>Heading 1</HeadingGrid>
          <ParagraphGrid>Paragraph 1</ParagraphGrid>
        </GridCell>
        <GridCell>
          <Image src="https://picsum.photos/id/1016/300/400" alt="Image 2" />
          <HeadingGrid>Heading 2</HeadingGrid>
          <ParagraphGrid>Paragraph 2</ParagraphGrid>
        </GridCell>
        <GridCell>
          <Image src="https://picsum.photos/id/1015/300/400" alt="Image 3" />
          <HeadingGrid>Heading 3</HeadingGrid>
          <ParagraphGrid>Paragraph 3</ParagraphGrid>
        </GridCell>
        <GridCell>
          <Image src="https://picsum.photos/id/1018/300/400" alt="Image 4" />
          <HeadingGrid>Heading 4</HeadingGrid>
          <ParagraphGrid>Paragraph 4</ParagraphGrid>
        </GridCell>
        <GridCell>
          <Image src="https://picsum.photos/id/1018/300/400" alt="Image 5" />
          <HeadingGrid>Heading 4</HeadingGrid>
          <ParagraphGrid>Paragraph 4</ParagraphGrid>
        </GridCell>
        <GridCell>
          <Image src="https://picsum.photos/id/1018/300/400" alt="Image 6" />
          <HeadingGrid>Heading 4</HeadingGrid>
          <ParagraphGrid>Paragraph 4</ParagraphGrid>
        </GridCell>
        <GridCell>
          <Image src="https://picsum.photos/id/1018/300/400" alt="Image 7" />
          <HeadingGrid>Heading 4</HeadingGrid>
          <ParagraphGrid>Paragraph 4</ParagraphGrid>
        </GridCell>
        <GridCell>
          <Image src="https://picsum.photos/id/1018/300/400" alt="Image 8" />
          <HeadingGrid>Heading 4</HeadingGrid>
          <ParagraphGrid>Paragraph 4</ParagraphGrid>
        </GridCell>
      </Div2>
    </NewsSection>
  );
}

export default News;
