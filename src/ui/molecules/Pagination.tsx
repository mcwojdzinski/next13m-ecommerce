/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

export const Pagination = ({ paginationLenght }: { paginationLenght: number }) => {
	return (
		<ul
			className="mx-auto mt-6 flex min-h-[3rem] w-fit justify-center space-x-2"
			aria-label="pagination"
		>
			{[...Array(paginationLenght)].map((_, pageNumber) => (
				<li key={pageNumber}>
					<ActiveLink href={("/products/" + (pageNumber + 1)) as Route}>
						{pageNumber + 1}
					</ActiveLink>
				</li>
			))}
		</ul>
	);
};
