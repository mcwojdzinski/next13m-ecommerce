import { ProductsGetListDocument, type TypedDocumentString } from "@/gql/graphql";
import { type ProductItemType } from "@/ui/types";

type ProductResponseItem = {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    rating: Rating;
    image: string;
    longDescription: string;
};

type Rating = {
    rate: number;
    count: number;
};

const executeGraphql = async <TResult, TVariables>(query: TypedDocumentString<TResult, TVariables>, variables: TVariables): Promise<TResult> => {
    if (!process.env.GRAPHQL_URL) {
        throw TypeError("GRAPHQL_URL is not defined")
    }
    const res = await fetch(process.env.GRAPHQL_URL, {
        method: "POST",
        body: JSON.stringify({
            query, variables
        }),
        headers: {
            "Content-Type": 'application/json'
        }
    })

    type GraphQLResponse<T> = 
    | {data?: undefined; errors: {message: string}[]}
    | {data: T; errors?: undefined} 

    const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

    if(graphqlResponse.errors) {
        throw TypeError(`GraphQL error`, {cause: graphqlResponse.errors})
    }

    return graphqlResponse.data
};



export const getProducts = async () => {
    const graphqlResponse = await executeGraphql(ProductsGetListDocument, {})

    return graphqlResponse.products.map((p) => {
        return {
            id: p.id,
            category: p.categories[0]?.name,
            name: p.name,
            price: p.price,
            coverImage: p.images[0] &&  {
                src: p.images[0]?.url,
                akt: p.name
            }
        }
    })
}

export const getProductById = async (id: ProductResponseItem["id"]) => {
    const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
    const productResponse = (await res.json()) as ProductResponseItem;
    
    return productResponseItemToProductItemType(productResponse);
}

const productResponseItemToProductItemType = (product: ProductResponseItem): ProductItemType => {
    return {
        id: product.id,
        name: product.title,
        category: product.category,
        price: product.price,
        coverImage: {
            alt: product.title,
            src: product.image,
        },
        description: product.description
    }
}