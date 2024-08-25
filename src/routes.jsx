import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home'
import { Design } from './pages/Design'
import { Video } from './pages/Video'
import { Sobre } from './pages/Sobre'
import { Contato } from './pages/Contato'
import { NotFound } from './pages/NotFound'
import { DesignDetail } from "./components/DesignDetail";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/design/:id" element={<DesignDetail />} />
          <Route path="/video" element={<Video />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}