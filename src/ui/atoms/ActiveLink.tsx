"use client";

import Link, { type LinkProps } from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type RouteType } from "next/dist/lib/load-custom-routes";

export const ActiveLink = ({ href, children }: LinkProps<RouteType>) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			href={href}
			className={clsx(`text-blue-400 hover:text-blue-600`, isActive && `underline`)}
		>
			{children}
		</Link>
	);
};
