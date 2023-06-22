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
    <div className="group  relative h-[550px]">
      <Image fill alt="image" src={images[currentIndex].attributes.url} />
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
      <div className="absolute -bottom-16 z-30 flex w-full cursor-pointer justify-center gap-2 py-2">
        {images.map((_, index) => {
          return (
            <div key={index} onClick={() => setCurrentIndex(index)}>
              <CircleIcon sx={{ color: "rgb(0 0 0 / 0.2)", fontSize: 20 }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
