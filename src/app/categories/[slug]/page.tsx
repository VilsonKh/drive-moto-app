import React from "react";

interface CategoryPageProps {
	params: {
		slug: string;
	};
}

const CategoryPage: React.FC<CategoryPageProps> = (props) => {
	const dynamicParams = props.params.slug;

	return <div> {dynamicParams} CategoryPage</div>;
};

export default CategoryPage;
