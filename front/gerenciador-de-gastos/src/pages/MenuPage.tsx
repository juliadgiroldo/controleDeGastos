import { Outlet } from "react-router-dom";
import NavBarComponents from "../components/Navbar";

const MenuPage: React.FC = () => {
  return (
    <>
      <NavBarComponents />

      <Outlet />
    </>
  );
};

export default MenuPage;
