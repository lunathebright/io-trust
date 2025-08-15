"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import type { Banner } from "@/types/banner";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/images`;

export default function Banner() {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    fetch("/data/banner.json")
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
  };

  return (
    <div className="h-[160px]">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div className="relative h-[160px] cursor-pointer" key={banner.id}>
            <Image
              src={`${API_URL}/${banner.images.ko}`}
              alt={banner.images.ko}
              fill
            />
            {banner.description && (
              <p className="absolute top-8 left-8 w-2/3 text-white">
                {banner.description.ko}
              </p>
            )}
            {banner.buttonText && (
              <button className="absolute bottom-6 left-8 px-4 py-1.5 rounded-4xl bg-white font-bold">
                {banner.buttonText.ko}
              </button>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}
