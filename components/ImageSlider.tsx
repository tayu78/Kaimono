"use client";
import { useState } from "react";
import Image from "next/image";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CircleIcon from "@mui/icons-material/Circle";

interface Props {
  images: Image[];
}

const ImageSlider = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSLide = currentIndex === 0;
    const newIndex = isFirstSLide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="lg:flex">
      <div className="hidden lg:mr-5 lg:block lg:max-h-[450px] lg:overflow-y-scroll ">
        {images.map((image, index) => {
          return (
            <div
              key={image.id}
              className="relative mb-5 h-24 w-24 cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={image.attributes.url}
                fill
                alt={image.attributes.name}
              />
            </div>
          );
        })}
      </div>
      <div className="group  relative h-[550px] lg:w-[450px] 2xl:h-[750px]  2xl:w-[650px]">
        <Image
          fill
          src={images[currentIndex].attributes.url}
          alt={images[currentIndex].attributes.name}
        />
        <div
          className="absolute left-3 top-[50%] z-30 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2  text-white group-hover:block"
          onClick={prevSlide}
        >
          <KeyboardArrowLeftIcon />
        </div>

        <div
          className="absolute right-3 top-[50%] z-30 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2  text-white group-hover:block"
          onClick={nextSlide}
        >
          <KeyboardArrowRightIcon />
        </div>
        <div className="absolute -bottom-16 z-30 flex w-full cursor-pointer justify-center gap-2 py-2 lg:hidden">
          {images.map((_, index) => {
            return (
              <div key={index} onClick={() => setCurrentIndex(index)}>
                <CircleIcon sx={{ color: "rgb(0 0 0 / 0.2)", fontSize: 20 }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
