import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import footer from './footer.png'

export default function Footer() {
  return (
    <div className="flex flex-col  items-center w-full h-full bg-[#1F1F1F] text-white font-Inter">
      <div className="flex p-11 justify-between w-full ">
        <div className="flex flex-col gap-10 w-[25%] mt-[40px]">
          <div className="flex items-center gap-3">
            <img src={footer} alt="" />
          </div>
          <div className="">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div className="flex gap-6">
            <FaFacebookF color="white" />
            <FaInstagram color="white" />
            <FaTwitter color="white" />
          </div>
        </div>
        <div className="flex gap-[200px] mt-[50px]">
          <div className="gap-10 w-[135px] h-[278px] flex flex-col">
            <p className="font-bold">Informação</p>
            <div className="flex flex-col gap-2">
              <p>Sobre Drip Store</p>
              <p>Segurança</p>
              <p>Wishlist</p>
              <p>Blog</p>
              <p>Trabalhe Conosco</p>
              <p>Meus Pedidos</p>
            </div>
          </div>
          <div className="gap-10 w-[135px] h-[278px] flex flex-col">
            <p className="font-bold">Categorias</p>
            <div className="flex flex-col gap-2">
              <p>Camisetas</p>
              <p>Calças</p>
              <p>Bonés</p>
              <p>Headphones</p>
              <p>Tênis</p>
            </div>
          </div>
          <div className="gap-10 w-[233px] h-[168px] flex flex-col">
            <p className="font-bold">Contato</p>
            <div className="flex flex-col gap-3">
              <p>
                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                60150-161
              </p>
              <p>(85) 3051-3411</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1240px] h-[1px] bg-white"></div>
      <p className="p-5 text-xs">@ 2022 Digital College</p>
    </div>
  );
}