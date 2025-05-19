import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import CreateProduct from "./pages/CreateProduct";
import "./App.css"; // para estilos del layout

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex" style={{ minHeight: "100vh", flexDirection: "column" }}>
        <div className="d-flex flex-grow-1" style={{ flex: 1 }}>
          {/* Sidebar */}
          <aside className="bg-dark text-white p-3" style={{ width: "240px", minHeight: "100vh" }}>
            <h4 className="text-center mb-4">🛒 Cursor IA</h4>
            <nav className="nav flex-column">
              <Link className="nav-link text-white" to="/">📦 Productos</Link>
              <Link className="nav-link text-white" to="/crear">➕ Crear producto</Link>
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-grow-1 d-flex flex-column">
            {/* Top Navbar */}
            <header className="bg-light border-bottom p-3">
              <h5 className="mb-0">Panel de Administración</h5>
            </header>

            {/* Content Area */}
            <main className="p-4" style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/producto/:id" element={<ProductDetail />} />
                <Route path="/crear" element={<CreateProduct />} />
              </Routes>
            </main>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3">
              © {new Date().getFullYear()} Cursor IA — Proyecto desarrollado por Cristoffer Falla
            </footer>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
