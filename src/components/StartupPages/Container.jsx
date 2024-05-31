import styled from "styled-components";
import { useEffect, useRef } from "react";

const StyledContainer = styled.div`
  display: flex;
  min-width: 97%;
  height: 100vh;
  /* margin-top: 50px; Height of the navbar */
  overflow: hidden;
  position: relative;
  /* background-color: yellow; */
  padding: 2vmax 5vmax;
`;
const LeftBox = styled.div`
  overflow: hidden;
  position: relative;
  width: 60%;
  overflow-y: auto;

  & > div {
    padding: 5rem 20px;
    border-bottom: 1px solid #ccc;
  }
`;
const RightBox = styled.div`
  overflow: hidden;
  position: relative;
  width: 40%;
  height: 100%;

  & > div {
    padding: 20px;
    border: 1px solid #ccc;
    height: 100%;
  }
`;

function Container() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const left = leftRef.current;
      const navbarHeight = 50; // Adjust if your navbar height changes
      const containerTop = container.offsetTop;

      if (window.scrollY >= containerTop - navbarHeight) {
        document.body.style.overflow = "hidden";
        container.style.position = "fixed";
        container.style.top = `${navbarHeight}px`;

        let leftScrollTop = left.scrollTop;
        left.scrollTop += window.scrollY - (containerTop - navbarHeight);
        window.scrollTo(0, containerTop - navbarHeight);

        if (left.scrollTop === leftScrollTop) {
          document.body.style.overflow = "auto";
          container.style.position = "relative";
          container.style.top = "auto";
          window.scrollTo(
            0,
            containerTop + left.scrollHeight - window.innerHeight
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledContainer ref={containerRef}>
      <LeftBox ref={leftRef}>
        <div>Component 1</div>
        <div>Component 2</div>
        <div>Component 3</div>
        <div>Component 3</div>
        <div>Component 3</div>
        <div>Component 3</div>
        <div>Component 3</div>
        <div>Component 3</div>
        <div>Component 3</div>
        <div>Component 3</div>
      </LeftBox>
      <RightBox>
        <div>Right component</div>
      </RightBox>
    </StyledContainer>
  );
}

export default Container;
