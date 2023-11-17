import { Suspense } from "react";
import { type Metadata } from "next";
import Image from "next/image";
import { getProductById } from "@/api/products";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";
import { SuggestedProductsLoader } from "@/ui/molecules/SuggestedProductsLoader";
import { formatPrice } from "@/utils";

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
			<div className="grid grid-cols-2">
				<div className="w-full">
					<Image
						src={product.coverImage.src}
						alt={product.coverImage.alt}
						width={100}
						height={100}
					/>
				</div>
				<div className="p-4">
					<h1 className="text-3xl font-bold">{product.name}</h1>
					<p className="text-xl"> {product.category}</p>
					<p className="py-2 text-justify"> {product.description}</p>
					<h3>{formatPrice(product.price / 100)}</h3>
				</div>
			</div>

			<h1 className="py-3 text-xl font-bold">Suggested products</h1>
			<Suspense fallback={<SuggestedProductsLoader />}>
				<SuggestedProducts />
			</Suspense>
		</div>
	);
}
