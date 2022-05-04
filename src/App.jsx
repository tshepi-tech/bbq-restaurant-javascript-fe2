// NPM packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Project files
import Modal from "components/Modal";
import Admin from "pages/Admin";
import AdminCategory from "pages/AdminCategory";
import Home from "pages/Home";
import { ItemsProvider } from "state/ItemsContext";
import { ModalProvider } from "state/ModalContext";

export default function App() {
  return (
    <div className="App">
      <ModalProvider>
        <ItemsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/:categoryId" element={<AdminCategory />} />
            </Routes>
          </BrowserRouter>
          <Modal />
        </ItemsProvider>
      </ModalProvider>
    </div>
  );
}
