import Link from "next/link";
import type { ProductItemType } from "../types";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import { ProductItemCoverImage } from "@/ui/atoms/ProductItemCoverImage";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<Link href={`product/${product.id}`} className="hover:cursor-pointer">
				<ProductItemCoverImage src={product.coverImage.src} alt={product.coverImage.alt} />
				<ProductItemDescription product={product} />
			</Link>
		</li>
	);
};
