import AdvSlider from "@/components/AdvSlider/AdvSlider";
import styles from "./homepage.module.css";

const Home = () => {
	return (
		<div>
			<div className={styles.hero}>
        <div className={styles.slider}>
          <AdvSlider/>
        </div>
        <div className={styles.banner}></div>
      </div>
		</div>
	);
};

export default Home;
