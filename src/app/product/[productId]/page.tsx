import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

// export const generateStaticParams = async () => {
// 	const products = await getProducts();

// 	return products.map((product: ProductItemType) => ({
// 		productId: product.id,
// 	}));
// };
export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.name} - Online shop`,
		description: `${product.name}`,
		openGraph: {
			title: `${product.name} - Online shop`,
			description: `${product.description}`,
			images: [
				{
					url: product.coverImage.src,
				},
			],
		},
	};
};

export default async function SingleProduct({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	return (
		<div>
			<h1>Single page product</h1>
			<h2>{JSON.stringify(product)}</h2>
			<Suspense fallback={"Loading..."}>
				<SuggestedProducts />
			</Suspense>
		</div>
	);
}
