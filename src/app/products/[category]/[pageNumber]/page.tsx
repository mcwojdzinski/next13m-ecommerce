export const generateStaticParams = async () => {
	return [{ category: "t-shirts", pageNumber: "1" }];
};

export default function CategoryProductPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	return (
		<h1>
			Products from category: {params.category}, page: {params.pageNumber}
		</h1>
	);
}
