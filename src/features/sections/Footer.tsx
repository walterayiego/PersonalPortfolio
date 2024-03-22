import logo from "../../assets/Logo.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Socials from "../../components/Socials";
import NavLinks from "../../components/NavLinks";

function Footer() {
  return (
    <div
      id="footer"
      className=" w-[100vw] bg-black p-[2vw] px-[5vw] col justify-between"
    >
      <div className="row min-h-[35vh] justify-between flex-wrap">
        <div className="min:w-[50vw] sm:w-1/3 h-full my-[2vh]">
          <div className="row items-center mb-2 h-1/4 ">
            <img
              src={logo}
              className="h-full w-1/6 object-contain grayscale"
              alt="start"
            />
            <p className="pl-2 text-2xl font-semibold text-white">
              WALTER AYIEGO
            </p>
          </div>
          <p className="text-sm text font-light text-white">
            Crafting innovative web and mobile experiences from idea to
            deployment
          </p>
          <p className="text-sm text font-light text-white">
            You can find me on my socials
          </p>
          <Socials styles="h-[5vh] justify-start " />
        </div>
        <div className="h-full col hidden sm:block about my-[2vh]">
          <p className="text-xl aladin text-white">About</p>
          {NavLinks()}
        </div>
        <div className="hidden sm:block h-full my-[2vh]">
          <p className="text-xl aladin text-white">Product</p>
          <ul className="text-white">
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>UI/UX Design</li>
            <li>Product Strategy</li>
          </ul>
        </div>
        <div className="col min-w-1/5 overflow-x-clip my-[2vh]">
          <p className="text-xl text-center aladin text-white">Contact Info</p>
          <p className="text-sm font-light"></p>
          <div className="row m-2 space-x-3">
            <LocationOnIcon color="secondary" />
            <p className="text-sm font-light text-white"> Nairobi</p>
          </div>
          <div className="row m-2 space-x-3">
            <PhoneIcon color="secondary" />
            <p className="text-sm font-light text-white">+254715280146</p>
          </div>
          <div className="row m-2 space-x-3 w-full">
            <EmailIcon color="secondary" />
            <a
              href="mailto:walterayiego@gmail.com"
              className="text-sm font-light text-white truncate overflow-ellipsis"
            >
              walterayiego@gmail.com
            </a>
          </div>
        </div>
      </div>
      <p className="text-white/60 text-center text-sm mt-[3vh]">
        © {new Date().getFullYear()} Pixel Galaxies. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
