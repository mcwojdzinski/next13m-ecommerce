export default function SingleProduct({ params }: { params: { productId: string } }) {
	return (
		<div>
			<h1>Single page product</h1>
			<h2>{params.productId}</h2>
		</div>
	);
}
