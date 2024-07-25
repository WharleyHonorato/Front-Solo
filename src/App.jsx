import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Produto from "./pages/Produto"
import Produtos from "./pages/Produtos"


function App() {

  return (
    <div className="">
      <NavBar/>
      <Home/>
      <Produto/>
      <Produtos/>
      <Footer/>
    </div>
  )
}

export default App
