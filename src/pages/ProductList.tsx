import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
      setFiltered(res);
    });
  }, []);

  useEffect(() => {
    const filteredData = products.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const price = parseFloat(p.price);
      const min = parseFloat(minPrice) || 0;
      const max = parseFloat(maxPrice) || Infinity;
      const matchesPrice = price >= min && price <= max;
      return matchesSearch && matchesPrice;
    });
    setFiltered(filteredData);
  }, [search, minPrice, maxPrice, products]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 fw-semibold">Lista de Productos</h2>

      {/* Filtros modernos */}
      <div className="row g-3 mb-4 align-items-end">
        <div className="col-md-6 col-lg-4">
          <label className="form-label">Buscar por nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ej. camisa"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-3 col-lg-2">
          <label className="form-label">Precio mínimo</label>
          <input
            type="number"
            className="form-control"
            placeholder="0"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
        <div className="col-md-3 col-lg-2">
          <label className="form-label">Precio máximo</label>
          <input
            type="number"
            className="form-control"
            placeholder="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <div className="col-md-12 col-lg-4">
          <button
            className="btn btn-outline-secondary w-100 mt-2 mt-lg-0"
            onClick={() => {
              setSearch("");
              setMinPrice("");
              setMaxPrice("");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Limpiar filtros
          </button>
        </div>
      </div>

      {/* Resultados */}
      {filtered.length === 0 ? (
        <div className="alert alert-warning">No se encontraron productos.</div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {filtered.map(product => (
            <div className="col" key={product.id}>
              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                <div
                  className="bg-white d-flex align-items-center justify-content-center border-bottom"
                  style={{ height: "220px" }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid p-3"
                    style={{ maxHeight: "180px", objectFit: "contain" }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h6
                    className="fw-semibold mb-2 text-truncate"
                    title={product.title}
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {product.title}
                  </h6>
                  <p className="text-success mb-3 fw-semibold">${product.price}</p>
                  <div className="mt-auto">
                    <Link
                      to={`/producto/${product.id}`}
                      className="btn btn-primary w-100 fw-semibold"
                    >
                      Ver detalle
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
