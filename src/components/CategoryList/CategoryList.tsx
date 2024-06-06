
import React from 'react';
import styles from './CategoryList.module.css';
import CategoryCard from '../CategoryCard/CategoryCard';

const categories = [
  { image: '/images/atv.png', title: 'Квадроциклы', link: '/categories/atvs' },
  { image: '/images/jetski.png', title: 'Гидроциклы', link: '/categories/jetskis' },
  { image: '/images/boat.png', title: 'Катера', link: '/categories/boats' },
  { image: '/images/snowmobile.png', title: 'Снегоходы', link: '/categories/snowmobiles' },
  { image: '/images/utv.png', title: 'Вездеходы', link: '/categories/utvs' },
  { image: '/images/engine.png', title: 'Двигатели', link: '/categories/engines' },
];

const CategoryList: React.FC = () => {
  return (
    <div className={styles.container}>
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          image={category.image}
          title={category.title}
          link={category.link}
        />
      ))}
    </div>
  );
};

export default CategoryList;
