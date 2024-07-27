import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Produtos() {
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    fetch(`https://api-store-do1w.onrender.com/shoes`)
      .then((response) => response.json())
      .then((data) => setProduto(data.slice(0, 15)));
  }, []);

  return (
    <>
    <NavBar/>
    <div className="w-full h-full flex flex-col gap-5 p-11 font-inter">
      <div className="w-full flex items-center justify-between">
        <p>
          <scan className="font-bold">Resultados para "Tênis"</scan> - 389
          produtos
        </p>
        <div className="w-[300px] h-[60px] border-2 border-black flex items-center justify-center gap-5">
          <p>Ordernar por: mais relevantes </p>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="w-full flex justify-evenly">
        <div className="w-[300px] h-[720px] flex flex-col justify-evenly">
          <p className="text-black font-bold">Filtrar por</p>
          <div className="w-[200px] h-[1px] bg-black"></div>
          <p className="font-bold">Marca</p>
          <div className="">
            <div className="flex gap-2">
              <input className="w-[20px] bg-yellow-200" type="checkbox" />
              <p>Adidas</p>
            </div>
            <div className="flex gap-2">
              <input className="w-[20px]" type="checkbox" />
              <p>Balenciaga</p>
            </div>
            <div className="flex gap-2">
              <input className="w-[20px]" type="checkbox" />
              <p>K-Swiss</p>
            </div>
            <div className="flex gap-2">
              <input className="w-[20px]" type="checkbox" />
              <p>Nike</p>
            </div>
            <div className="flex gap-2">
              <input className="w-[20px]" type="checkbox" />
              <p>Puma</p>
            </div>
          </div>
          <p className="font-bold">Categoria</p>
          <div className="">
            <div className="flex gap-2">
              <input className="w-[20px]" type="checkbox" />
              <p>Esporte e Lazer</p>
            </div>
            <div className="flex gap-2">
              <input className="w-[20px]" type="checkbox" />
              <p>Casual</p>
            </div>
            <div className="flex gap-2">
              <input className="w-[20px]" type="checkbox" />
              <p>Utilitário</p>
            </div>
            <div className="flex gap-2">
              <input className="w-[20px]" type="checkbox" />
              <p>Corrida</p>
            </div>
          </div>
          <p className="font-bold">Gênero</p>
          <div className="">
            <div className="flex gap-2">
              <input className="w-[20px]" type="checkbox" />
              <p>Masculino</p>
            </div>
            <div className="flex gap-2">
              <input className="w-[20px]" type="checkbox" />
              <p>Feminino</p>
            </div>
            <div className="flex gap-2">
              <input className="w-[20px]" type="checkbox" />
              <p>Unissex</p>
            </div>
          </div>
          <p className="font-bold">Estado</p>
          <div className="flex gap-2">
            <input className="w-[20px]" type="radio" />
            <p>Novo</p>
            <div className="flex gap-2 ">
              <input className="w-[20px]" type="radio" />
              <p>Usado</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap w-[1200px] mt-[30px]">
          <div className="flex flex-wrap gap-11">
            {produto.map((produto) => (
              <div className="text-center w-[350px] border-2 border-black font-inter bg-slate-100 h-[500px] rounded-xl flex items-center justify-between flex-col p-2">
                <div className="flex w-full ">
                  <div className="flex justify-center items-center w-[96px] h-[32px] rounded-full bg-[#E7FF86]">
                    <p className="font-bold">30% OFF</p>
                  </div>
                </div>
                <img
                  className="w-[180px]"
                  src={produto.imagem_url}
                  alt={produto.nome}
                />
                <p className="text-xs">Tênis</p>
                <p className="text-[24px]">{produto.nome}</p>
                <div className="flex gap-2">
                  <p className="line-through text-[#8F8F8F]">
                    R$ {produto.preco_original}
                  </p>
                  <p className="font-bold">R$ {produto.preco_desconto}</p>
                </div>
                <button className="w-[150px] h-[48px] bg-[#C92071] text-[#F5F5F5] rounded-xl font-bold">Comprar</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
