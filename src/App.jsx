import Home from "./pages/Home"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Produtos from "./pages/Produtos"
import Produto from "./pages/Produto"


function App() {

  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/produtos" element={<Produtos/>}></Route>
        <Route path="/produto" element={<Produto/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
