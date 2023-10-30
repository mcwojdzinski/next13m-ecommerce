import { type ReactNode } from "react";

export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	console.log({ params });
	return [{ category: "t-shirts" }, { category: "pants" }, { category: "boots" }];
};

export default function CategoryProductLayout({ children }: { children: ReactNode }) {
	return children;
}
