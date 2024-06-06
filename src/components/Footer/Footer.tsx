// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.subscribe}>
          <h3>Подпишитесь на нашу рассылку и узнавайте о акциях быстрее</h3>
          <form className={styles.form}>
            <input type="email" placeholder="Введите ваш e-mail" />
            <button type="submit">ОТПРАВИТЬ</button>
          </form>
        </div>
        <div className={styles.info}>
          <div>
            <h4>Информация</h4>
            <ul>
              <li><Link href="/about">О компании</Link></li>
              <li><Link href="/contacts">Контакты</Link></li>
              <li><Link href="/sales">Акции</Link></li>
              <li><Link href="/stores">Магазины</Link></li>
            </ul>
          </div>
          <div>
            <h4>Интернет-магазин</h4>
            <ul>
              <li><Link href="/delivery">Доставка и самовывоз</Link></li>
              <li><Link href="/payment">Оплата</Link></li>
              <li><Link href="/returns">Возврат-обмен</Link></li>
              <li><Link href="/news">Новости</Link></li>
            </ul>
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.socialContainer}>
            <Link href="https://instagram.com" >
              <Image src="/images/instagram.svg" alt="Instagram" width={30} height={30}/>
            </Link>
            <Link href="https://vk.com" >
              <Image src="/images/vk.svg" alt="VK" width={30} height={30}/>
            </Link>
            <Link href="https://facebook.com" >
              <Image src="/images/facebook.svg" alt="Facebook" width={30} height={30}/>
            </Link>
            <Link href="https://youtube.com" >
              <Image src="/images/youtube.svg" alt="YouTube" width={30} height={30}/>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <Link href="/terms">Договор оферты</Link>
        <Link href="/privacy">Политика обработки персональных данных</Link>
      </div>
    </footer>
  );
};

export default Footer;
