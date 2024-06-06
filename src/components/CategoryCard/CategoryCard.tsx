// src/components/CategoryCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CategoryCard.module.css';

interface CategoryCardProps {
  image: string;
  title: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title, link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image src={image} alt={title} layout="fill" objectFit="contain" />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <Link href={link} className={styles.link}>
        Подробнее
      </Link>
    </div>
  );
};

export default CategoryCard;
