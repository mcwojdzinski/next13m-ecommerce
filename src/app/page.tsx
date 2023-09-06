import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		category: "Tops",
		name: "Basic tee",
		price: 1200,
		coverImage: {
			src: "https://cdn11.bigcommerce.com/s-o7vdfbtasz/images/stencil/500x659/products/358/1048/i-once-lived-in-fargo-really-fargo-stuff-black-back__82397.1541002551.jpg?c=2",
			alt: "T-Shirt image",
		},
	},
	{
		id: "2",
		category: "Hoodies",
		name: "Hoodie",
		price: 2340,
		coverImage: {
			src: "https://detailbasics.ca/cdn/shop/products/66747_f_fl_c0def3f1-0bb6-404b-be30-db6a537c286a_1024x1024@2x.jpg?v=1682786840",
			alt: "Hoodies",
		},
	},
	{
		id: "3",
		category: "Pants",
		name: "Pants",
		price: 12000,
		coverImage: {
			src: "https://media.istockphoto.com/id/173239968/photo/skinny-tight-blue-jeans-on-white-background.jpg?s=612x612&w=0&k=20&c=HsI-xC12KkzjeCaFC4eQ33SZuL53EerbfLMkPuLpaVw=",
			alt: "Pants",
		},
	},
	{
		id: "4",
		category: "Tank tops",
		name: "Basic tank top",
		price: 4000,
		coverImage: {
			src: "https://foxoutdoor.com/cdn/shop/products/64711.jpg?v=1652367267",
			alt: "Tank top",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl md:max-w-3xl lg:max-w-6xl ">
			<ProductList data-testid="products-list" products={products} />
		</section>
	);
}
