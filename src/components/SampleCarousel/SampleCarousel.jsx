import React from "react";
import "./sample-carousel.css";
import { useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function SampleCarousel({ urlsList, timer = -1 }) {
	const [activeIndex, setActiveIndex] = React.useState(0);

	function incrementIndex() {
		setActiveIndex((activeIndex) => (activeIndex + 1) % urlsList.length);
	}

	function decrementIndex() {
		setActiveIndex(
			(activeIndex) => (activeIndex - 1 + urlsList.length) % urlsList.length
		);
	}

	useEffect(() => {
		// Set up automatic slide change every 5 seconds
		if (timer === -1) return;
		const intervalId = setInterval(() => {
			incrementIndex();
		}, timer * 1000);

		// Clear the interval when the component is unmounted or when the URLs list changes
		return () => clearInterval(intervalId);
	}, [urlsList]);

	return (
		<div className="carousel-container">
			<FaAngleLeft
				className="carousel-icon"
				style={{ left: ".5rem" }}
				onClick={decrementIndex}
			/>
			<img
				src={urlsList[activeIndex]}
				alt={`customer image ${activeIndex + 1}`}
			/>
			{/* <p className="carousel-index">{activeIndex}</p> */}
			<FaAngleRight
				className="carousel-icon"
				style={{ right: ".5rem" }}
				onClick={incrementIndex}
			/>
			<div />
		</div>
	);
}

export default SampleCarousel;
