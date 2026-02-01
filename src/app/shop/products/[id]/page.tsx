import { getProductById } from "@/features/products/product.service";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/product/AddToCardButton";

interface Props {
    params: {
        id: string
    }
}
export default async function ProductDetailsPage({ params }: Props) {
    const product = await getProductById(params.id)
    if (!product) return notFound()

    return (
        <div className="max-w-3xl mx-auto mt-10 space-y-4">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-lg font-semibold">{product.price}</p>
            <AddToCartButton product={product} />
        </div>
    )

}