/* eslint-disable no-unused-vars */
import "../styles/testimonials.css";

function Testimonials() {
  {
    const slider = function () {
      let slides = document.querySelectorAll(".slide");
      const btnLeft = document.querySelector(".slider__btn--left");
      const btnRight = document.querySelector(".slider__btn--right");

      let curSlide = 0;
      let maxSlide = slides.length; //length of nodelist
      const slider = document.querySelector(".slider");

      const dotContainer = document.querySelector(".dots");

      //FUNCTIONS
      const createDots = function () {
        slides.forEach(function (_, i) {
          dotContainer.insertAdjacentHTML(
            "beforeend",
            `<button class="dots__dot" data-slide="${i}"></button>`
          );
        });
      };

      // document.addEventListener("keydown", function (e) {
      //   console.log(e);
      //   if (e.key === "ArrowLeft") prevSlide();
      //   else nextSlide();
      // });

      // dotContainer.addEventListener("click", function (e) {
      //   if (e.target.classList.contains("dots__dot")) {
      //     const { slide } = e.target.dataset;
      //     goToSlide(slide);
      //     // activateDot(slide);
      //   }
      // });
    };
    slider();
  }
  let slides = document.querySelectorAll(".slide");
  let curSlide = 0;
  let maxSlide = slides.length; //length of nodelist
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
    );
  };
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    // activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    // activateDot(curSlide);
  };
  const init = function () {
    goToSlide(0);
    // createDots();
    // activateDot(0);
  };

  init();

  return (
    <section className="section" id="section--3">
      <div className="section__title section__title--testimonials">
        <h3 className="section__header">Here is what our users have to say.</h3>
      </div>

      <div className="slider">
        <div className="slide slide--1">
          <div className="testimonial">
            <h5 className="testimonial__header">
              Best financial decision ever!
            </h5>
            <blockquote className="testimonial__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusantium quas quisquam non? Quas voluptate nulla minima
              deleniti optio ullam nesciunt, numquam corporis et asperiores
              laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
              id alias reiciendis, perferendis facere pariatur dolore veniam
              autem esse non voluptatem saepe provident nihil molestiae.
            </blockquote>
            <address className="testimonial__author">
              <img src="user-1.jpg" alt="" className="testimonial__photo" />
              <h6 className="testimonial__name">Aarav Lynn</h6>
              <p className="testimonial__location">San Francisco, USA</p>
            </address>
          </div>
        </div>

        <div className="slide slide--2">
          <div className="testimonial">
            <h5 className="testimonial__header">
              The last step to becoming a complete minimalist
            </h5>
            <blockquote className="testimonial__text">
              Quisquam itaque deserunt ullam, quia ea repellendus provident,
              ducimus neque ipsam modi voluptatibus doloremque, corrupti
              laborum. Incidunt numquam perferendis veritatis neque repellendus.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              deserunt exercitationem deleniti.
            </blockquote>
            <address className="testimonial__author">
              <img src="user-2.jpg" alt="" className="testimonial__photo" />
              <h6 className="testimonial__name">Miyah Miles</h6>
              <p className="testimonial__location">London, UK</p>
            </address>
          </div>
        </div>

        <div className="slide slide--3">
          <div className="testimonial">
            <h5 className="testimonial__header">
              Finally free from old-school banks
            </h5>
            <blockquote className="testimonial__text">
              Debitis, nihil sit minus suscipit magni aperiam vel tenetur
              incidunt commodi architecto numquam omnis nulla autem,
              necessitatibus blanditiis modi similique quidem. Odio aliquam
              culpa dicta beatae quod maiores ipsa minus consequatur error sunt,
              deleniti saepe aliquid quos inventore sequi. Necessitatibus id
              alias reiciendis, perferendis facere.
            </blockquote>
            <address className="testimonial__author">
              <img src="user-3.jpg" alt="" className="testimonial__photo" />
              <h6 className="testimonial__name">Francisco Gomes</h6>
              <p className="testimonial__location">Lisbon, Portugal</p>
            </address>
          </div>
        </div>

        <button className="slider__btn slider__btn--left" onClick={prevSlide}>
          &larr;
        </button>
        <button className="slider__btn slider__btn--right" onClick={nextSlide}>
          &rarr;
        </button>
        <div className="dots"></div>
      </div>
    </section>
  );
}

export default Testimonials;
