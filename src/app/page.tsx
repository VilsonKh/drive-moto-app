import AdvSlider from "@/components/AdvSlider/AdvSlider";
import styles from "./homepage.module.css";
import PromotionCard from "@/components/PromotionCard/PromotionCard";
import SearchBar from "@/components/SearchBar/SearchBar";
import CategoryList from "@/components/CategoryList/CategoryList";

const Home = () => {
	return (
		<div>
			<div className={styles.hero}>
				<div className={styles.slider}>
					<AdvSlider />
				</div>
				<div className={styles.banner}>
					<PromotionCard />
				</div>
			</div>
			<SearchBar/>
			<CategoryList/>
		</div>
	);
};

export default Home;
