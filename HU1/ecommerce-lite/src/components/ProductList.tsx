import { Product } from "../interfaces/products";
import { ProductCard } from "../components/productCard";

interface ProductListProps {
    products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
    return (
        <div>
            <h2>Listado de Productos</h2>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                {products.map((product) => (
                    <ProductCard key={product.sku} product={product} />
                ))}
            </div>
        </div>
    );
};
