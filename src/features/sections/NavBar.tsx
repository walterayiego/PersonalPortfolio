import MenuIcon from "@mui/icons-material/Menu";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { useNavigate } from "react-router-dom";
import SideDrawer from "../../components/SideDrawer";

interface NavBarProps {
  children: React.ReactNode;
}

function NavBar({ children }: NavBarProps) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    // navigate("/");
    console.log("navigate");
  };

  return (
    <nav className="fixed bg top-0 h-[6vh] w-[100%] row items-center justify-between z-50">
      <SideDrawer>
        <div
          onClick={() => handleNavigate()}
          className="cursor-pointer bg-[#030303] w-[13vw] p-1 h-full rowCenter"
        >
          <MenuIcon className=" text-white" fontSize="large" />
        </div>
      </SideDrawer>

      <div className="hidden sm:flex w-fit">{children}</div>

      <a href="#contactme" className="bg-[#030303] w-fit h-full rowCenter p-1 px-3 space-x-2">
        <p className="text-white text-sm font-semibold">CONTACT ME</p>
        <CallMadeIcon className="text-white" fontSize="small" />
      </a>
    </nav>
  );
}

export default NavBar;
