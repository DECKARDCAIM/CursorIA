import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Lista de Productos</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.image} className="card-img-top p-3" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
                <Link to={`/producto/${product.id}`} className="btn btn-primary">
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
