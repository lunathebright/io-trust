"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { IBanner } from "@/types/banner";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLang } from "@/hooks/useLang";

const STATIC_URL = `${process.env.NEXT_PUBLIC_STATIC_URL}/images`;
const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/banner.json`;

export default function Banner() {
  const [banners, setBanners] = useState<IBanner[]>([]);
  const { crrLng } = useLang();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setBanners);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    swipe: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="h-[160px]">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div className="relative h-[160px] cursor-pointer" key={banner.id}>
            <Image
              src={`${STATIC_URL}/${banner.images[crrLng]}`}
              alt={banner.images[crrLng]}
              fill
              sizes="100%"
              priority
            />
            {banner.description && (
              <p className="absolute top-8 left-8 w-2/3 text-white">
                {banner.description[crrLng]}
              </p>
            )}
            {banner.buttonText && (
              <button className="absolute bottom-6 left-8 px-4 py-1.5 rounded-4xl bg-white font-bold">
                {banner.buttonText[crrLng]}
              </button>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}
