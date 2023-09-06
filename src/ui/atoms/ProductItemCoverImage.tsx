export const ProductItemCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-white">
			<img
				alt={alt}
				src={src}
				className="h-full w-full object-contain object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};
