import { useMobileDetect } from "@/hooks/useMobileDetect";
import { ButtonBack, ButtonNext, CarouselProvider, Slider as CarouselSlider } from "pure-react-carousel";
import { PropsWithChildren } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

interface IProps {
  maxLength: number;
}

export const Slider = ({ maxLength, children }: PropsWithChildren<IProps>) => {
  const { isMobile } = useMobileDetect();
  return (
    <CarouselProvider
      visibleSlides={isMobile ? 1 : 4}
      totalSlides={maxLength}
      step={1}
      naturalSlideWidth={8}
      naturalSlideHeight={9}
      infinite={true}
      touchEnabled={true}
      dragEnabled={true}
      className={"relative"}
    >
      <ButtonBack className="group carousel-btn-back">
        <BsFillArrowLeftCircleFill className="carousel-left-caret" />
      </ButtonBack>
      <CarouselSlider className="p-5">{children}</CarouselSlider>
      <ButtonNext className="group carousel-btn-next">
        <BsFillArrowRightCircleFill className="carousel-right-caret" />
      </ButtonNext>
    </CarouselProvider>
  );
};
