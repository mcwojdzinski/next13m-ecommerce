"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Route } from "next";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
	exact?: boolean;
};

export const ActiveLink = <T extends string>({
	href,
	children,
	exact = true,
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();

	if (pathname === href) {
		exact = false;
	}
	const isActive = `${pathname.split("/")[1]}` == `${href.split("/")[1]}` && exact === false;
	return (
		<Link
			href={href}
			className={clsx(`text-blue-400 hover:text-blue-600`, isActive && `underline`)}
		>
			{children}
		</Link>
	);
};
