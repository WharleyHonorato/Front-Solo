import img1 from "./img1.png";
import shirt from "./Shirt.png";
import shoes from "./Shoes.png";
import fone from "./Fone.png";
import camisa from "./camisa.png";
import bone from "./bone.png";
import calca from "./calca.png";
import headphone from "./headphone.png";
import sneakers from "./sneakers.png";
import imgGrande from "./ImgGrande.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function Home() {
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    fetch(`https://api-store-do1w.onrender.com/shoes`)
      .then((response) => response.json())
      .then((data) => setProduto(data.slice(0, 12)));
  }, []);

  return (
    <>
      <NavBar />
      <div className="font-inter w-full h-full flex justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="w-[512px] h-[352px] flex flex-col justify-between">
            <p className="text-[#F6AA1C] text-[14px] font-bold">
              Melhores Ofertas Personalizadas
            </p>
            <p className="text-[64px] font-bold leading-none">
              Queima de estoque Nike 🔥
            </p>
            <p className="text-[#474747]">
              Consequat culpa exercitation mollit nisi excepteur do do tempor
              laboris eiusmod irure consectetur.
            </p>
            <button className="w-[200px] font-bold h-[48px] bg-[#C92071] rounded-xl text-white">
              Ver Ofertas
            </button>
          </div>
        </div>
        <div className="">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="font-inter w-full h-[350px] gap-4 flex flex-col">
        <div className="flex w-[780px] justify-center items-start">
          <p className="font-bold text-[24px]">Coleções em Destaque</p>
        </div>
        <div className="flex w-full gap-4 justify-center items-center">
          <div className="w-[405px] h-[250px] flex bg-[#D8E3F2] rounded-xl">
            <div className="flex flex-col p-5 justify-between">
              <div className="flex justify-center items-center w-[96px] h-[32px] rounded-full bg-[#E7FF86]">
                <p className="font-bold">30% OFF</p>
              </div>
              <p className="text-[32px] font-bold leading-none">
                Novo Drop Supreme
              </p>
              <button className="w-[153px] h-[48px] bg-[#F5F5F5] text-[#C92071] rounded-xl font-bold">
                Comprar
              </button>
            </div>
            <div className="flex items-end">
              <img className="w-[300px] h-[200px]" src={shirt} alt="" />
            </div>
          </div>
          <div className="w-[405px] h-[250px] flex bg-[#D8E3F2] rounded-xl">
            <div className="flex flex-col p-5 justify-between">
              <div className="flex justify-center items-center w-[96px] h-[32px] rounded-full bg-[#E7FF86]">
                <p className="font-bold">30% OFF</p>
              </div>
              <p className="text-[32px] font-bold leading-none">
                Coleção Adidas
              </p>
              <button className="w-[153px] h-[48px] bg-[#F5F5F5] text-[#C92071] rounded-xl font-bold">
                Comprar
              </button>
            </div>
            <div className="flex items-end">
              <img className="w-[300px] h-[200px]" src={shoes} alt="" />
            </div>
          </div>
          <div className="w-[405px] h-[250px] flex bg-[#D8E3F2] rounded-xl">
            <div className="flex flex-col p-5 justify-between">
              <div className="flex justify-center items-center w-[96px] h-[32px] rounded-full bg-[#E7FF86]">
                <p className="font-bold">30% OFF</p>
              </div>
              <p className="text-[32px] font-bold leading-none">
                Novo Beat Bass
              </p>
              <button className="w-[153px] h-[48px] bg-[#F5F5F5] text-[#C92071] rounded-xl font-bold">
                Comprar
              </button>
            </div>
            <div className="flex items-end">
              <img className="w-[300px] h-[200px]" src={fone} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="font-inter w-full h-[200px] gap-4 flex flex-col font-Inter justify-center items-center">
        <div className="text-[18px] font-bold">
          <p className="font-bold text-[24px]">Coleções em Destaque</p>
        </div>
        <div className="w-1/2 flex justify-evenly items-center">
          <div className="flex flex-col gap-2 items-center">
            <button className="flex flex-col gap-7 justify-center items-center w-[140px] h-[140px] rounded-full bg-white">
              <img className="w-[60px]" src={camisa} alt="" />
              <p className="text-[14px] font-bold">Camisetas</p>
            </button>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <button className="flex flex-col gap-7 justify-center items-center w-[140px] h-[140px] rounded-full bg-white">
              <img className="w-[60px]" src={calca} alt="" />
              <p className="text-[14px] font-bold">Calças</p>
            </button>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <button className="flex flex-col gap-7 justify-center items-center w-[140px] h-[140px] rounded-full bg-white">
              <img className="w-[70px]" src={bone} color="" alt="" />
              <p className="text-[14px] font-bold">Bonés</p>
            </button>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <button className="flex flex-col gap-7 justify-center items-center w-[140px] h-[140px] rounded-full bg-white">
              <img className="w-[60px]" src={headphone} alt="" />
              <p className="text-[14px] font-bold">Headphones</p>
            </button>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <button className="flex flex-col gap-7 justify-center items-center w-[140px] h-[140px] rounded-full bg-white">
              <img className="w-[60px]" src={sneakers} alt="" />
              <p className="text-[14px] font-bold">Tênis</p>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[50px] w-full flex gap-[600px] items-center justify-around ">
        <p className="text-[20px] font-bold">Produtos em alta</p>
        <div className="flex items-center gap-3">
          <p className="text-[#C92071]">Ver todos</p>
          <FaArrowRightLong color="#C92071" />
        </div>
      </div>
      <div className="mt-[20px] ml-[260px] flex flex-wrap gap-[70px]">
        {produto.map((produto) => (
          <div className="w-[300px] font-inter bg-slate-200 h-[500px] rounded-xl flex justify-center flex-col p-2">
            <div className="flex justify-center items-center w-[96px] h-[32px] rounded-full bg-[#E7FF86]">
              <p className="font-bold">30% OFF</p>
            </div>
            <div className="flex justify-center items-center h-full">
              <img className="w-[250px]" src={produto.imagem_url} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs">Tênis</p>
              <p className="text-[24px]">{produto.nome}</p>
              <div className="flex gap-2 items-center">
                <p className="line-through text-[#8F8F8F]">
                  R$ {produto.preco_original}
                </p>
                <p className="text-[#1F1F1F] font-bold text-[20px]">
                  R$ {produto.preco_desconto}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-full flex mt-[80px] p-11 ml-[150px] font-inter justify-evenly gap-[50px] items-center">
        <div className="flex items-center justify-center bg-gradient-to-b from-[#E9E1FF] from-25% to-[#FFFFFF] w-[466px] h-[466px] rounded-full bg-black">
          <img className="absolute" src={imgGrande} alt="" />
        </div>
        <div className="w-1/2">
          <div className="w-[550px] h-[341px] flex flex-col justify-between">
            <p className="text-[#C92071] font-bold">Oferta especial</p>
            <p className="text-[48px] font-bold leading-none">
              Air Jordan edição de colecionador
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
            <div className="flex justify-start">
              <button className="w-[200px] h-[40px] bg-[#C92071] rounded-xl text-white font-bold">
                Ver Oferta
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
