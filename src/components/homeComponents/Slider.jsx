import sliderImage1 from "../../assets/slider (1).jpg";
import sliderImage2 from "../../assets/slider (2).jpg";
import sliderImage3 from "../../assets/slider (3).jpg";

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
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide ">
        <img className="h-[400px]" src={sliderImage1} />
      </div>
      <div className="keen-slider__slide ">
        <img className="h-[400px]" src={sliderImage2} />
      </div>
      <div className="keen-slider__slide ">
        <img className="h-[400px]" src={sliderImage3} />
      </div>
    </div>
  );
}
