import Footer from "../../components/Footer";
import { FaFacebook } from "react-icons/fa6";
import sapato from "./pexels-1.png";
import sapato2 from "./pexels-2.png";
import NavBar2 from "../../components/NavBar-2";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
    <NavBar2/>
      <div className="flex justify-center items-center font-inter w-100% h-100% bg-gradient-to-b from-[#BABAF3] from-25% to-[#DBDCFA]">
        <div className="w-1/2 h-full flex justify-center items-center mb-[200px]">
          <div className="w-[583px] h-[560px] bg-white mt-[200px] p-[30px] flex flex-col justify-between rounded-md">
            <div className="flex flex-col gap-[30px]">
              <p className="text-[32px] font-bold ">Acesse sua conta</p>
              <p>Novo cliente? Então registre-se <scan className=" font-bold underline hover:text-[#C92071]"><Link to="/cadastro">aqui</Link></scan>.</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#474747] font-bold text-sm">Login *</p>
              <input
                type="text"
                placeholder="Insira seu login ou e-mail"
                className="w-[523px] h-[60px] bg-zinc-100 rounded-xl pl-6"
              />
              <p className="font-bold text-[#474747] text-sm">Senha *</p>
              <input
                type="text"
                placeholder="Insira sua senha"
                className="w-[523px] h-[60px] bg-zinc-100 p-6"
              />
            </div>
            <div className="flex flex-col gap-5">
              <p className="underline underline-offset-2">Esqueci minha senha</p>
              <button className="w-[523px] h-[48px] bg-[#C92071] rounded-md text-white font-bold">Acessar Conta</button>
            </div>
            <div className="flex justify-center items-center gap-3">
              <p className="text-[#474747]">Ou faça login com</p>
              <div className="flex gap-6 items-center">
                <img className="w-[40px]" src="https://static.vecteezy.com/system/resources/previews/016/716/465/original/gmail-icon-free-png.png" alt="" />
                <FaFacebook size={25} color="#1877f2" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <div className="w-[420px] h-[483px] flex flex-col">
            <img src={sapato} alt="" />
            <div className="w-[256px] h-[483px] mt-[100px]"></div>
          </div>
          <div className="w-[450px] h-[515px] flex flex-col mb-[200px] ml-[-100px]">
            <div className="w-[256px] h-[483px] mt-[200px]" ></div>
            <img className="" src={sapato2} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
