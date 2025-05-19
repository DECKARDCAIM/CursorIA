import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../api/products";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) getProductById(Number(id)).then(setProduct);
  }, [id]);

  if (!product) return <div className="container mt-4">Cargando...</div>;

  return (
    <div className="container mt-4">
      {/* Encabezado con botón regresar */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">{product.title}</h2>
        <button className="btn btn-outline-secondary" onClick={() => navigate("/")}>
          ← Regresar
        </button>
      </div>

      {/* Contenido del producto */}
      <div className="row align-items-center">
        {/* Imagen */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
        </div>

        {/* Información */}
        <div className="col-md-7">
          <p className="mb-4">{product.description}</p>
          <h4 className="text-success fw-bold">${product.price}</h4>
        </div>
      </div>
    </div>
  );
}
