import { getProducts } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsProducts({}: { params: { pagination: number } }) {
	const productsCountOnPage = 6;
	const products = await getProducts();
	const lengthOfPagination = Math.round(products.length / productsCountOnPage);
	console.log(lengthOfPagination);

	return (
		<>
			<ProductList products={products} />
			<Pagination paginationLenght={lengthOfPagination} />
		</>
	);
}
