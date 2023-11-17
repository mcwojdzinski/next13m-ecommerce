import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SuggestedProductsLoader = ({}) => {
	return (
		<ul
			className="grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			<li>
				<div className="aspect-square overflow-hidden rounded-md border bg-white">
					<Skeleton className="h-full w-full object-contain object-center p-4 transition-transform hover:scale-105" />
				</div>
				<div className="mt-2 flex justify-between">
					<div>
						<h3 className="text-sm font-semibold text-gray-700">
							<Skeleton height={20} width={100} />
						</h3>
						<p className="text-sm text-gray-500">
							<span className="sr-only">Category:</span> <Skeleton height={15} width={50} />
						</p>
					</div>
					<p className="text-sm font-medium text-gray-900">
						<span className="sr-only">Price:</span> <Skeleton height={10} width={50} />
					</p>
				</div>
			</li>
			<li>
				<div className="aspect-square overflow-hidden rounded-md border bg-white">
					<Skeleton className="h-full w-full object-contain object-center p-4 transition-transform hover:scale-105" />
				</div>
				<div className="mt-2 flex justify-between">
					<div>
						<h3 className="text-sm font-semibold text-gray-700">
							<Skeleton height={20} width={100} />
						</h3>
						<p className="text-sm text-gray-500">
							<span className="sr-only">Category:</span> <Skeleton height={15} width={50} />
						</p>
					</div>
					<p className="text-sm font-medium text-gray-900">
						<span className="sr-only">Price:</span> <Skeleton height={10} width={50} />
					</p>
				</div>
			</li>
			<li>
				<div className="aspect-square overflow-hidden rounded-md border bg-white">
					<Skeleton className="h-full w-full object-contain object-center p-4 transition-transform hover:scale-105" />
				</div>
				<div className="mt-2 flex justify-between">
					<div>
						<h3 className="text-sm font-semibold text-gray-700">
							<Skeleton height={20} width={100} />
						</h3>
						<p className="text-sm text-gray-500">
							<span className="sr-only">Category:</span> <Skeleton height={15} width={50} />
						</p>
					</div>
					<p className="text-sm font-medium text-gray-900">
						<span className="sr-only">Price:</span> <Skeleton height={10} width={50} />
					</p>
				</div>
			</li>
			<li>
				<div className="aspect-square overflow-hidden rounded-md border bg-white">
					<Skeleton className="h-full w-full object-contain object-center p-4 transition-transform hover:scale-105" />
				</div>
				<div className="mt-2 flex justify-between">
					<div>
						<h3 className="text-sm font-semibold text-gray-700">
							<Skeleton height={20} width={100} />
						</h3>
						<p className="text-sm text-gray-500">
							<span className="sr-only">Category:</span> <Skeleton height={15} width={50} />
						</p>
					</div>
					<p className="text-sm font-medium text-gray-900">
						<span className="sr-only">Price:</span> <Skeleton height={10} width={50} />
					</p>
				</div>
			</li>
		</ul>
	);
};
