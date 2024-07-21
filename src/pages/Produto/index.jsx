import img1 from "./White-Sneakers.png";
import img2 from "./ShoesSell.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiStarHalfOutline, TiStarFullOutline } from "react-icons/ti";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Produto() {
  return (
    <div className="w-full flex flex-col items-center font-inter">
      <div className="w-full p-11 mt-[-50px]">
        <p className="text-black">
          Home / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature
          Masculino
        </p>
      </div>
      <div className="w-full flex p-11 gap-[100px] justify-center">
        <div className="flex flex-col gap-2">
          <div className="w-[700px] h-[600px] bg-[#E2E3FF] flex items-center justify-between rounded-xl">
            <IoIosArrowBack size={35} />
            <img src={img1} alt="" />
            <IoIosArrowForward size={35} />
          </div>
          <div className="flex w-[700px] justify-between">
            <div className="w-[120px] h-[100px] bg-[#D8E3F2] flex items-center justify-center rounded-xl">
              <img className="w-[90px]" src={img1} alt="" />
            </div>
            <div className="w-[120px] h-[100px] bg-[#FFE8BC] flex items-center justify-center rounded-xl">
              <img className="w-[90px]" src={img1} alt="" />
            </div>
            <div className="w-[120px] h-[100px] bg-[#FFC0BC] flex items-center justify-center rounded-xl">
              <img className="w-[90px]" src={img1} alt="" />
            </div>
            <div className="w-[120px] h-[100px] bg-[#DEC699] flex items-center justify-center rounded-xl">
              <img className="w-[90px]" src={img1} alt="" />
            </div>
            <div className="w-[120px] h-[100px] bg-[#E8DFCF] flex items-center justify-center rounded-xl">
              <img className="w-[90px]" src={img1} alt="" />
            </div>
          </div>
        </div>
        <div className="w-[700px] h-[400px] flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <p className="text-[36px] font-bold">
              Tênis Nike Revolution 6 Next Nature Masculino
            </p>
            <p className="text-xs font-bold">Casual | Nike | REF:38416711</p>
            <div className="flex items-center">
              <TiStarFullOutline size={20} color="#F6AA1C" />
              <TiStarFullOutline size={20} color="#F6AA1C" />
              <TiStarFullOutline size={20} color="#F6AA1C" />
              <TiStarFullOutline size={20} color="#F6AA1C" />
              <TiStarHalfOutline size={20} color="F6AA1C" />
              <div className="flex w-[63px] text-white font-bold ml-2 h-[23px] bg-[#F6AA1C] items-center justify-evenly rounded-md">
                <p>4.7</p>
                <TiStarFullOutline color="white" />
              </div>
              <p className="text-xs ml-2">(90 avaliações)</p>
            </div>
            <div className="flex gap-2 items-center">
              <p>R$ </p>
              <p className="text-[32px] font-bold"> 219,00 </p>
              <p className="line-through text-[#CCCCCC]">250,00</p>
            </div>
            <p className="text-[14px] text-black font-bold">
              Descrição do Produto
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[14px] text-black font-bold">Tamanho</p>
            <div className="flex gap-4">
              <div className="w-[50px] h-[50px] border-2 rounded-full font-bold border-black flex justify-center items-center">
                39
              </div>
              <div className="w-[50px] h-[50px] border-2 rounded-full font-bold border-black flex justify-center items-center">
                40
              </div>
              <div className="w-[50px] h-[50px] border-2 rounded-full font-bold border-black flex justify-center items-center bg-[#C92071] text-white">
                41
              </div>
              <div className="w-[50px] h-[50px] border-2 rounded-full font-bold border-black flex justify-center items-center">
                42
              </div>
              <div className="w-[50px] h-[50px] border-2 rounded-full font-bold border-black flex justify-center items-center">
                43
              </div>
            </div>
            <p className="text-[14px] text-black font-bold">Cores</p>
            <div className="flex gap-4">
              <div className="w-[40px] h-[40px] rounded-full bg-[#6FEEFF]"></div>
              <div className="w-[40px] h-[40px] rounded-full bg-[#FF6969] border-2 border-black"></div>
              <div className="w-[40px] h-[40px] rounded-full bg-[#5E5E5E]"></div>
              <div className="w-[40px] h-[40px] rounded-full bg-[#6D70B7]"></div>
            </div>
            <div className="">
              <button className="w-[220px] h-[50px] font-bold text-white bg-[#FFB31F] rounded-xl">
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex p-11 gap-[850px] justify-around font-inter">
        <p className="text-[20px] font-bold text-[#474747]">
          Produtos Relacionados
        </p>
        <div className="flex items-center gap-3">
          <p className="text-[#C92071]">Ver Todos</p>
          <FaArrowRightLong color="#C92071" />
        </div>
      </div>
      <div className="flex mb-[100px] flex-wrap gap-[70px]">
        <div className="w-[292px] font-inter bg-slate-200 h-[400px] rounded-xl flex justify-center flex-col p-2">
          <div className="flex justify-center items-center w-[96px] h-[32px] rounded-full bg-[#E7FF86]">
            <p className="font-bold">30% OFF</p>
          </div>
          <div className="flex items-center h-full">
            <img className="w-[250px]" src={img2} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs">Tênis</p>
            <p className="text-[24px]">K-Swiss V8 - Masculino</p>
            <div className="flex gap-2 items-center">
              <p className="line-through text-[#8F8F8F]">R$ 200</p>
              <p className="text-[#1F1F1F] font-bold text-[20px]">R$ 100</p>
            </div>
          </div>
        </div>
        <div className="w-[292px] font-inter bg-slate-200 h-[400px] rounded-xl flex justify-center flex-col p-2">
          <div className="flex justify-center items-center w-[96px] h-[32px] rounded-full bg-[#E7FF86]">
            <p className="font-bold">30% OFF</p>
          </div>
          <div className="flex items-center h-full">
            <img className="w-[250px]" src={img2} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs">Tênis</p>
            <p className="text-[24px]">K-Swiss V8 - Masculino</p>
            <div className="flex gap-2 items-center">
              <p className="line-through text-[#8F8F8F]">R$ 200</p>
              <p className="text-[#1F1F1F] font-bold text-[20px]">R$ 100</p>
            </div>
          </div>
        </div>
        <div className="w-[292px] font-inter bg-slate-200 h-[400px] rounded-xl flex justify-center flex-col p-2">
          <div className="flex items-center h-full">
            <img className="w-[250px]" src={img2} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs">Tênis</p>
            <p className="text-[24px]">K-Swiss V8 - Masculino</p>
            <div className="flex gap-2 items-center">
              <p className="line-through text-[#8F8F8F]">R$ 200</p>
              <p className="text-[#1F1F1F] font-bold text-[20px]">R$ 100</p>
            </div>
          </div>
        </div>
        <div className="w-[292px] font-inter bg-slate-200 h-[400px] rounded-xl flex justify-center flex-col p-2">
          <div className="flex items-center h-full">
            <img className="w-[250px]" src={img2} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs">Tênis</p>
            <p className="text-[24px]">K-Swiss V8 - Masculino</p>
            <div className="flex gap-2 items-center">
              <p className="line-through text-[#8F8F8F]">R$ 200</p>
              <p className="text-[#1F1F1F] font-bold text-[20px]">R$ 100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
