import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../api/products";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) getProductById(Number(id)).then(setProduct);
  }, [id]);

  if (!product) return <div className="container mt-4">Cargando...</div>;

  return (
    <div className="container mt-4">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className="img-fluid" style={{ maxHeight: "300px" }} />
      <p className="mt-3">{product.description}</p>
      <h4 className="text-success">${product.price}</h4>
    </div>
  );
}
