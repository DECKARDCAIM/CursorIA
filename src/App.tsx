import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import CreateProduct from "./pages/CreateProduct";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <a className="navbar-brand" href="/">Tienda</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Productos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/crear">Crear producto</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/crear" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
