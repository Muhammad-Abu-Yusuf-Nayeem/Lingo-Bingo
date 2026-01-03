import sliderImage1 from "../../assets/SliderImages.jpg";
import sliderImage2 from "../../assets/SliderImages.png";
import sliderImage3 from "../../assets/SliderImages.webp";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Autoplay plugin
function AutoPlayPlugin(interval = 2000) {
  return (slider) => {
    let timeout;
    let mouseOver = false;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }

    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, interval);
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });

    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  };
}

export default function Slider() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 1 },
    },
    [AutoPlayPlugin(1000)] // <-- 1 second interval
  );

  return (
    <div ref={sliderRef} className="keen-slider mx-auto w-1/2 h-120 rounded-lg bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 overflow-hidden ">
      <div className="keen-slider__slide mx-auto w-fit h-120 flex justify-center items-center">
        <img className="h-full object-cover" src={sliderImage1} />
      </div>

      <div className="keen-slider__slide mx-auto w-fit h-120 flex justify-center items-center">
        <img className="h-full object-cover" src={sliderImage2} />
      </div>

      <div className="keen-slider__slide mx-auto w-fit h-120 flex justify-center items-center">
        <img className="h-full object-cover" src={sliderImage3} />
      </div>
    </div>
  );
}
