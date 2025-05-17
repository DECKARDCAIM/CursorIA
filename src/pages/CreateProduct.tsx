import { useState } from "react";

export default function CreateProduct() {
  const [form, setForm] = useState({ title: "", price: "", description: "" });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Producto creado:\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <div className="container mt-4">
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            className="form-control"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            className="form-control"
            type="number"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Crear
        </button>
      </form>
    </div>
  );
}
