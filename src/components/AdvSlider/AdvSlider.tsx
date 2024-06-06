"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./AdvSlider.module.css";
import Image from "next/image";

const slides = [
	{
		image: "/images/adv_banner.png",
		text: "Почувствуй скорость и экстрим",
	},
	{
		image: "/images/adv_banner.png",
		text: "Почувствуй скорость и экстрим",
	},
	{
		image: "/images/adv_banner.png",
		text: "Почувствуй скорость и экстрим",
	},
	{
		image: "/images/adv_banner.png",
		text: "Почувствуй скорость и экстрим",
	},
	{
		image: "/images/adv_banner.png",
		text: "Почувствуй скорость и экстрим",
	},
];

const AdvSlider: React.FC = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			spaceBetween={0}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
			autoplay={{ delay: 5000 }}
			className={styles.swiper}
		>
			{slides.map((slide, index) => (
				<SwiperSlide
					key={index}
					className={styles.slide}
				>
					<Image
						src={slide.image}
						alt={slide.text}
						className={styles.image}
            layout="fill"
            objectFit="cover"
					/>

				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default AdvSlider;
