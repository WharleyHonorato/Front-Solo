import Home from "./pages/Home"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Produtos from "./pages/Produtos"
import Produto from "./pages/Produto"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"


function App() {

  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/produtos" element={<Produtos/>}></Route>
        <Route path="/produto" element={<Produto/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/cadastro" element={<Cadastro/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
