import useEmblaCarousel from "embla-carousel-react";
import { Fragment, useCallback } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";

import "./carousel.scss";

const Carousel = ({ imgArr }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );
  return (
    <div className="carousel-container">
      <div className=" ads embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="ads-item embla__container" id="item">
            {imgArr?.map((ad, i) => (
              <div className="embla__slide ads-item-img" key={i}>
                <img src={ad.url} alt={ad.name} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots dot__container">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
