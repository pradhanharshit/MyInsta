/* eslint-disable no-unused-vars */
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ImageCarousel() {
  return (
    <div className="flex justify-center items-center relative">
      <div
        className="relative h-[503px] w-[385px] bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url('phone.png')",
        }}
      >
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          value={5000}
          transitionTime={1000}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          emulateTouch={true}
          swipeable={false}
          animationHandler={"fade"}
          className="top-[23px] left-[124px] z-[100] absolute"
        >
          <div className="w-[196px]">
            <img src="screenshot1.png" className="h-[420px] w-[196px]" />
          </div>
          <div className="w-[196px]">
            <img src="screenshot2.png" className="h-[420px] w-[196px]" />
          </div>
          <div className="w-[196px]">
            <img src="screenshot3.png" className="h-[420px] w-[196px]" />
          </div>
          <div className="w-[196px]">
            <img src="screenshot4.png" className="h-[420px] w-[196px]" />
          </div>
        </Carousel>
      </div>
      {/* <img src="phone.png" alt=""
        className="h-[500px]"
        />
        */}
    </div>
  );
}

export default ImageCarousel;
