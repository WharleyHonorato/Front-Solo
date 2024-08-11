import Footer from "../../components/Footer";
import NavBar2 from "../../components/NavBar-2";
import { useEffect } from "react";

export default function CriarConta() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


  return (
    <>
      <NavBar2 />
      <div className=" mt-[50px] w-full h-full flex flex-col justify-center items-center mb-[150px] font-inter">
        <div className="w-[750px] mb-[30px] flex justify-start items-start">
          <p className="font-bold text-[32px]">Criar Conta</p>
        </div>
        <div className="w-[700px] flex flex-col gap-5 mb-[50px]">
          <p className="font-bold text-[18px]">Informações Pessoais</p>
          <div className="w-[650px] h-[2px] bg-[#CCCCCC]"></div>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-[14px]">Nome Completo *</p>
            <input
              type="text"
              placeholder="Insira Seu Nome"
              className="w-full h-[45px] text-[#666666] rounded-xl pl-3 border-none"
            />
            <p className="font-bold text-[14px]">CPF *</p>
            <input
              type="text"
              placeholder="Insira Seu CPF"
              className="w-full h-[45px] text-[#666666] rounded-xl pl-3"
            />
            <p className="font-bold text-[14px]">E-mail *</p>
            <input
              type="text"
              placeholder="Insira Seu E-mail"
              className="w-full h-[45px] text-[#666666] rounded-xl pl-3"
            />
            <p className="font-bold text-[14px]">Celular *</p>
            <input
              type="text"
              placeholder="Insira Seu Celular"
              className="w-full h-[45px] text-[#666666] rounded-xl pl-3"
            />
          </div>
        </div>
        <div className="w-[700px] flex flex-col gap-5 mb-[50px]">
          <p className="font-bold text-[18px]">Informações de Entrega</p>
          <div className="w-[650px] h-[2px] bg-[#CCCCCC]"></div>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-[14px]">Endereço *</p>
            <input
              type="text"
              placeholder="Insira Seu Endereço"
              className="w-full h-[45px] text-[#666666] rounded-xl pl-3"
            />
            <p className="font-bold text-[14px]">Bairro *</p>
            <input
              type="text"
              placeholder="Insira Seu Bairro"
              className="w-full h-[45px] text-[#666666] rounded-xl pl-3"
            />
            <p className="font-bold text-[14px]">Cidade *</p>
            <input
              type="text"
              placeholder="Insira Sua Cidade"
              className="w-full h-[45px] text-[#666666] rounded-xl pl-3"
            />
            <p className="font-bold text-[14px]">CEP *</p>
            <input
              type="text"
              placeholder="Insira Seu CEP"
              className="w-full h-[45px] text-[#666666] rounded-xl pl-3"
            />
            <p className="font-bold text-[14px]">Complemento</p>
            <input
              type="text"
              placeholder="Insira Complemento"
              className="w-full h-[45px] text-[#666666] rounded-xl pl-3"
            />
          </div>
        </div>
        <div className="w-[700px] flex flex-col items-center justify-center gap-6 ">
          <div className="w-full flex gap-2">
            <input type="checkbox" className="w-[25px]"/>
            <p className="text-[#474747] text-[14px]">
            Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.
            </p>
          </div>
          <button className="w-[700px] h-[48px] bg-[#C92071] rounded-md text-white font-bold">
            Criar Conta
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
