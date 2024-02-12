//@ts-nocheck
import { ImagePath } from "@/Constant";
import { ItemIntervalDataList } from "@/Data/BonusUi/OwlCarousel";
import { CarouselItemWithInterval } from "@/Types/BonusUiType";
import { useEffect, useState } from "react";
import { Carousel, CarouselControl, CarouselItem } from "reactstrap";

const IndividualIntervalBody = () => {
  const [items, setItems] = useState<CarouselItemWithInterval[]>(ItemIntervalDataList);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const next = () => {
    if (activeIndex === items.length - 1) setActiveIndex(0);
    else setActiveIndex(activeIndex + 1);
  };

  const previous = () => {
    if (activeIndex === 0) setActiveIndex(items.length - 1);
    else setActiveIndex(activeIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {next();}, items[activeIndex].interval);
    return () => {
      clearInterval(interval);
    };
  }, [activeIndex, items]);

  return (
    <Carousel activeIndex={activeIndex}>
      {items.map((item, index) => (<CarouselItem key={index}><img src={`${ImagePath}/${item.image}`} alt="Slide" className="w-100 h-100" /></CarouselItem>))}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default IndividualIntervalBody;