import Halaman1 from "./Pages/Halaman1/Halaman1";
import Halaman2 from "./Pages/Halaman2/Halaman2";
import Halaman3 from "./Pages/Halaman3/Halaman3";
import Halaman4 from "./Pages/Halaman4/Halaman4";
import Halaman5 from "./Pages/Halaman5/Halaman5";
import Halaman6 from "./Pages/Halaman6/Halaman6";
import Halaman7 from "./Pages/Halaman7/Halaman7";
import Halaman8 from "./Pages/Halaman8/Halaman8";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Halaman1 />} />
          <Route path="/halaman2" element={<Halaman2 />} />
          <Route path="/halaman3" element={<Halaman3 />} />
          <Route path="/halaman4" element={<Halaman4 />} />
          <Route path="/halaman5" element={<Halaman5 />} />
          <Route path="/halaman6" element={<Halaman6 />} />
          <Route path="/halaman7" element={<Halaman7 />} />
          <Route path="/halaman8" element={<Halaman8 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;