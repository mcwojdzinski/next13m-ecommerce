import { type ProductItemType } from "@/ui/types";

type ProductResponseItem = {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    rating: Rating;
    image: string;
    longDescription: string;
};

type Rating = {
    rate: number;
    count: number;
};


export const getProducts = async () => {
    const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await res.json()) as ProductResponseItem[];

	const products = productsResponse.map((product: ProductResponseItem): ProductItemType => {
		return productResponseItemToProductItemType(product)}
	);

    return products
}

export const getProductById = async (id: ProductResponseItem["id"]) => {
    const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
    const productResponse = (await res.json()) as ProductResponseItem;
    
    return productResponseItemToProductItemType(productResponse);
}

const productResponseItemToProductItemType = (product: ProductResponseItem): ProductItemType => {
    return {
        id: product.id,
        name: product.title,
        category: product.category,
        price: product.price,
        coverImage: {
            alt: product.title,
            src: product.image,
        },
        description: product.description
    }
}