import { Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/views/Home";
import Personajes from "./assets/views/Personajes";
import Detalle from "./assets/views/PersonajeDetalle";

export default function App() {
  return (
    <div className="caja">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes/" element={<Personajes />} />
        <Route path="/personajes/:name" element={<Detalle />} />
      </Routes>
    </div>
  );
}
