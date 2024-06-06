
import Image from 'next/image';
import styles from './PromotionCard.module.css';

const PromotionCard: React.FC = () => {
  // Тестовые данные
  const promotion = {
    image: '/images/suzuki_engine.png', 
    title: 'Лодочный мотор Suzuki DF9.9BRS',
    currentPrice: '190 000 ₽',
    oldPrice: '225 000 ₽',
    promotionEnd: '31.08.2020',
  };

  return (
    <div className={styles.card}>
      <div className={styles.heading}>
        <div className={styles.promotionLabel}>АКЦИЯ</div>
        <div className={styles.price}>
          <span className={styles.currentPrice}>{promotion.currentPrice}</span>
          <span className={styles.oldPrice}>{promotion.oldPrice}</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src={promotion.image} alt={promotion.title}  width={125} height={170}/>
      </div>
      <h3 className={styles.title}>{promotion.title}</h3>
      <div className={styles.promotionEnd}>
        Акция действует до <br/><span className={styles.date}>{promotion.promotionEnd}</span>
      </div>
    </div>
  );
};

export default PromotionCard;
