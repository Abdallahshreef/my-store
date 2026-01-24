import { getAllProducts } from "@/features/products/product.service";
import ProductCard from "@/components/product/ProductCard"
export default async function ProductsPage() {
    const products = await getAllProducts()
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}