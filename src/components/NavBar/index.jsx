import logo from "./logo.png";
import { CiSearch } from "react-icons/ci";
import { IoCart } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className="font-inter w-full h-full flex flex-col p-11 gap-11">
      <div className="w-full items-center flex justify-between">
        <div className="flex">
          <img src={logo} alt="" />
        </div>
        <div className="w-[560px] h-[50px] bg-[#E5E5E5]  rounded-xl justify-center p-2 flex items-center">
            <input
              className="w-[500px] h-[35px] pl-2 bg-[#E5E5E5] outline-none placeholder-black rounded-md"
              type="text"
              placeholder="Pesquisar Produto..."
            />
            <div className="flex justify-center rounded-md items-center w-[50px] h-[35px] bg-[#E5E5E5]">
              <CiSearch size={20} color="black" />
            </div>
          </div>
        <div className=" flex justify-between">
          
          <div className="flex gap-11 items-center">
            <p className="text-[16px] underline underline-offset-4 text-[#C92071]">Cadastre-se</p>
            <button className="w-[110px] h-[40px] text-[14px] font-bold font-inter bg-[#C92071] text-white rounded-xl">
              Entrar
            </button>
            <IoCart color="#C92071" size={30} />
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        <p>Home</p>
        <p>Produtos</p>
        <p>Categorias</p>
        <p>Meus Pedidos</p>
      </div>
    </div>
  );
}
