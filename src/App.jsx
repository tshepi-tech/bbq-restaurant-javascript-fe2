// NPM packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import Modal from "components/Modal";
import Admin from "pages/Admin";
import AdminCategory from "pages/AdminCategory";
import Home from "pages/Home";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/:categoryId" element={<AdminCategory />} />
        </Routes>
      </BrowserRouter>
      <Modal />
    </div>
  );
}
