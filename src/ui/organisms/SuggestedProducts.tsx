import { ProductList } from "./ProductList";
import { getProducts } from "@/api/products";

const wait = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const SuggestedProducts = async () => {
	const products = await getProducts();
	await wait(5000);
	return (
		<>
			<ProductList products={products.slice(-4)} />
		</>
	);
};
