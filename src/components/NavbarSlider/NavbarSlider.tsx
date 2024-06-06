"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import styles from './NavbarSlider.module.css';

const NavbarSlider: React.FC = () => {
  const categories = [
    { name: 'Квадроциклы', href: '/categories/atvs' },
    { name: 'Катера', href: '/categories/boats' },
    { name: 'Гидроциклы', href: '/categories/jetskis' },
    { name: 'Лодки', href: '/categories/boats' },
    { name: 'Вездеходы', href: '/categories/utvs' },
    { name: 'Снегоходы', href: '/categories/snowmobiles' },
    { name: 'Двигатели', href: '/categories/engines' },
    { name: 'Запчасти', href: '/categories/parts' },
  ];

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView="auto"
      freeMode={true}
      className={styles.swiper}
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          <Link href={category.href}>{category.name}</Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NavbarSlider;
