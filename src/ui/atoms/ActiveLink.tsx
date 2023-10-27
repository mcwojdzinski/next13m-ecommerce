"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export const ActiveLink = ({ href, text }: { href: string; text: string }) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			href={href}
			className={clsx(`text-blue-400 hover:text-blue-600`, isActive && `underline`)}
		>
			{text}
		</Link>
	);
};
