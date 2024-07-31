import logo from "./logo.png";
import { NavLink } from "react-router-dom";

export default function NavBar2() {
  return (
    <div className="font-inter w-full h-full flex flex-col p-11 gap-11">
      <div className="w-full items-center flex justify-between">
        <div className="flex">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
