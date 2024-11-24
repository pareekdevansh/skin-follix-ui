import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import the carousel's styles

function SampleCarousel({ urlsList, timer = 5 }) {
  const responsive = {
    superLargeDesktop: {
      // >= 2560px
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      // >= 1024px
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      // >= 464px
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      // <= 464px
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="carousel-container">
      <Carousel
        swipeable={true} // Enables swiping on touch devices
        draggable={true} // Allows dragging slides
        showDots={true} // Shows dots for navigation
        responsive={responsive} // Responsive breakpoints
        infinite={true} // Infinite looping of slides
        autoPlay={true} // Enables autoplay
        autoPlaySpeed={timer * 1000} // Autoplay speed in milliseconds
        keyBoardControl={true} // Allows controlling carousel with keyboard
        customTransition="all 1s ease" // Custom transition effect
        transitionDuration={1000} // Duration of the transition
        containerClass="carousel-container" // Custom class for the carousel container
        removeArrowOnDeviceType={["tablet", "mobile"]} // Hide arrows on tablet and mobile
      >
        {urlsList.map((url, index) => (
          <div key={index} className="carousel-item">
            <img src={url} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default SampleCarousel;
