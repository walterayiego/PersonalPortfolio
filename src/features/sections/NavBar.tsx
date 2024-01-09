import MenuIcon from "@mui/icons-material/Menu";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  children: React.ReactNode;
}

function NavBar({ children }: NavBarProps) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <nav className="fixed bg top-0 h-[6vh] w-[100%] row items-center justify-between z-50">
      <div className="rowCenter h-full ">
        <div
          onClick={() => handleNavigate()}
          className=" bg-[#030303] w-[13vw] p-1 h-full rowCenter"
        >
          <MenuIcon className=" text-white" fontSize="large" />
        </div>
        <p className="mx-3 bold">WALT</p>
      </div>
      <div className="hidden sm:flex w-fit">{children}</div>

      <button className="bg-[#030303] w-fit h-full rowCenter p-1 px-3 space-x-2">
        <p className="text-white text-sm font-semibold">CONTACT ME</p>
        <CallMadeIcon className="text-white" fontSize="small" />
      </button>
    </nav>
  );
}

export default NavBar;
