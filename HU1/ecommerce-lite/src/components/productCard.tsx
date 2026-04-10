import { ProductcardProps } from "../interfaces/products";

const cardStyle: React.CSSProperties = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '10px',
  width: '200px',
  textAlign: 'center',
  backgroundColor: '#f9f9f9'
};

export const ProductCard = ({ product }: ProductcardProps) => {
    return (
        <div className="product-card" style={cardStyle}>
            <img src={product.imageUrl} alt={product.name} width={150} />
            <h3>{product.name}</h3>
            <p><strong>Precio:</strong> ${product.price}</p>
            <p><strong>Categoría:</strong> {product.category}</p>
        </div>
    );
};