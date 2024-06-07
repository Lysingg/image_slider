import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { useState } from "react";
import { SliderData } from "./SliderData";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider">
      <CircleArrowLeft className="left-arrow" onClick={prevSlide} />
      <CircleArrowRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && <img src={slide.image} alt="travel img"  className="image"/>}
          </div>
        );
        
      })}
    </section>
  );
};

export default ImageSlider;
