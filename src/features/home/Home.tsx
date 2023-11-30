import { Avatar, AvatarGroup } from "@mui/material";
import Call from "../../assets/Call.png";
import Me from "../../assets/Me.png";
import NavLinks from "../../components/NavLinks";

function Home() {
  return (
    <div className="relative grid grid-flow-col w-full h-[90vh] border border-black p-[5vw]  ">
      <div className="col">
        <p className="text-[4em] font-bold ">WALTER</p>
        <p className=" text-2xl uppercase">Full Stack-Software Developer</p>
        <div className="flex space-x-2">
          <AvatarGroup
            className="w-full items-start border border-black justify-end"
            total={24}
          >
            <Avatar alt="Remy Sharp" src={Me} />
            <Avatar alt="Travis Howard" src={Me} />
            <Avatar alt="Agnes Walker" src={Me} />
            <Avatar alt="Trevor Henderson" src={Me} />
          </AvatarGroup>
          <img src={Call}  className="w-[40vw] h-[40vh] object-cover" />
        </div>
        <NavLinks classes="" />
      </div>
      <div className="flex justify-between items-center h-[50vh]">
        <img
          className="w-[40vw] h-[50vh] object-cover blur-[2px]"
          src={Me}
          alt=""
        />
      </div>
      <div className="absolute bottom-0 right-0 m-8 w-[60vw]">
        <p>
          I have a passion for coding and technology, and I'm eager to learn and
          grow in the field of software development. I enjoy working on various
          projects, experimenting with new technologies, and collaborating with
          others to create innovative solutions.
        </p>
      </div>
    </div>
  );
}

export default Home;
