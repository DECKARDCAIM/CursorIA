import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const [form, setForm] = useState({ title: "", price: "", description: "" });
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    Swal.fire({
      title: "¡Producto creado!",
      text: "El producto se ha registrado correctamente.",
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#198754"
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h3 className="card-title mb-4 text-center">Crear Producto</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Título</label>
                  <input
                    className="form-control"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Precio</label>
                  <input
                    className="form-control"
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Descripción</label>
                  <textarea
                    className="form-control"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success w-100">
                  Crear producto
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
