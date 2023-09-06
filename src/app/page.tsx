import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "Accessories",
		name: "Basic tee",
		price: 120,
		coverImage: {
			src: "https://media.istockphoto.com/id/171368204/photo/red-cup.jpg?s=612x612&w=0&k=20&c=q0CQtZJAGs8VXm2B7462QDJ0tlk18h1EPApvvZNgBus=",
			alt: "Tee",
		},
	},
	{
		id: "1",
		category: "Accessories",
		name: "Basic tee",
		price: 120,
		coverImage: {
			src: "https://media.istockphoto.com/id/171368204/photo/red-cup.jpg?s=612x612&w=0&k=20&c=q0CQtZJAGs8VXm2B7462QDJ0tlk18h1EPApvvZNgBus=",
			alt: "Tee",
		},
	},
	{
		id: "1",
		category: "Accessories",
		name: "Basic tee",
		price: 120,
		coverImage: {
			src: "https://media.istockphoto.com/id/171368204/photo/red-cup.jpg?s=612x612&w=0&k=20&c=q0CQtZJAGs8VXm2B7462QDJ0tlk18h1EPApvvZNgBus=",
			alt: "Tee",
		},
	},
	{
		id: "1",
		category: "Accessories",
		name: "Basic tee",
		price: 120,
		coverImage: {
			src: "https://media.istockphoto.com/id/171368204/photo/red-cup.jpg?s=612x612&w=0&k=20&c=q0CQtZJAGs8VXm2B7462QDJ0tlk18h1EPApvvZNgBus=",
			alt: "Tee",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl md:max-w-3xl lg:max-w-6xl ">
			<ProductList products={products} />
		</section>
	);
}
