// src/components/Header.tsx
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import NavbarSlider from "../NavbarSlider/NavbarSlider";

const Header: React.FC = () => {
	return (
	<>
	  	<header className={styles.header}>
  			<nav className={styles.nav}>
  				<ul className={styles.navList}>
  					<li className={styles.navItem}>
  						<Link href="/stores">Магазины</Link>
  					</li>
  					<li className={styles.navItem}>
  						<Link href="/sales">Акции</Link>
  					</li>
  					<li className={styles.navItem}>
  						<Link href="/delivery">Доставка и оплата</Link>
  					</li>
  				</ul>
  				<div className={styles.logo}>
  					<Link href="/">
  						<Image
	  						src="/images/logo.svg"
	  						alt="Drive Moto"
	              width={50}
	              height={50}
	  					/>
  					</Link>
  				</div>
  				<ul className={styles.navList}>
  					<li className={styles.navItem}>
  						<Image src="/images/geo.svg" alt="location" width={24} height={24} /><span>Москва, ул. Науки 25</span>
  					</li>
  					<li className={styles.navItem}>
  						<Link href="/favorites">
  							<Image
  								src="/images/favorites.svg"
  								alt="favorites"
                  width={24}
                  height={24}
  							/>
  						</Link>
  					</li>
  					<li className={styles.navItem}>
  						<Link href="/profile">
                <Image
                  src="/images/profile.svg"
                  alt="profile"
                  width={24}
                  height={24}
                />
              </Link>
  					</li>
  					<li className={styles.navItem}>
  						<Link href="/cart">
                <Image
                  src="/images/cart.svg"
                  alt="cart"
                  width={30}
                  height={30}
                />
              </Link>
  					</li>
  				</ul>
  			</nav>
  		</header>
      <NavbarSlider/>
	</>
    
	);
};

export default Header;
