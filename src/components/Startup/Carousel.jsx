// import React from "react";
// import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import Carousel from "react-simply-carousel";

function CarouselComponent() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Carousel
      containerProps={{
        style: {
          width: "100%",
          justifyContent: "space-between",
          userSelect: "none",
          background: "white",
        },
      }}
      preventScrollOnSwipe
      swipeTreshold={90}
      activeSlideIndex={activeSlide}
      activeSlideProps={{
        style: {
          //   background: "blue",
          width: "60rem",
        },
      }}
      onRequestChange={setActiveSlide}
      forwardBtnProps={{
        children: ">",
        style: {
          width: 60,
          height: 60,
          minWidth: 60,
          alignSelf: "center",
          borderRadius: "50%",
          color: "white",
          background: "blue",
          border: "none",
        },
      }}
      backwardBtnProps={{
        children: "<",
        style: {
          width: 60,
          height: 60,
          minWidth: 60,
          alignSelf: "center",
          borderRadius: "50%",
          color: "white",
          background: "blue",
          border: "none",
        },
      }}
      dotsNav={{
        show: true,
        itemBtnProps: {
          style: {
            height: 16,
            width: 16,
            borderRadius: "50%",
            border: "1px solid blue",
          },
        },
        activeItemBtnProps: {
          style: {
            height: 16,
            width: 16,
            borderRadius: "50%",
            border: 0,
            background: "black",
          },
        },
      }}
      itemsToShow={2}
      speed={400}
      centerMode
    >
      {Array.from({ length: 10 }).map((item, index) => (
        <div
          style={{
            background: "white",
            width: 400,
            height: 300,
            border: "30px solid white",
            textAlign: "center",
            boxSizing: "border-box",
            textWrap: "wrap",
          }}
          key={index}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          laborum fugiat amet tempore, provident nihil itaque quo ex deleniti
          sequi voluptatem accusamus ullam, dicta veritatis?
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
