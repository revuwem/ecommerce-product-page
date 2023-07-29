"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProductImageT } from "@/entities/product";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import styles from "./Gallery.module.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type Props = {
  data: ProductImageT[];
};

const Gallery: React.FC<Props> = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={styles.gallery}>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.current}
      >
        {data.map((item) => (
          <SwiperSlide key={item.href}>
            <Image src={item.href} alt="" fill className={styles.img} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.thumbnails}
      >
        {data.map((item) => (
          <SwiperSlide className={styles.thumbnailItem} key={item.thumbnail}>
            <Image src={item.thumbnail} alt="" fill className={styles.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
