import { Avatar, AvatarGroup } from "@mui/material";
import Call from "../../assets/Call.png";
import Me from "../../assets/Me.png";

interface HomeProps {
  children: React.ReactNode;
}

function Home({ children }: HomeProps) {
  return (
    <div className="relative grid grid-cols-3 w-full h-[95vh] p-[5vw] m-[2vw]">
      <div className="col col-span-2">
        <p className="text-[4em] font-bold ">WALTER</p>
        <p className=" text-2xl uppercase">Full Stack-Software Developer</p>
        <div className="grid grid-cols-3 h-full space-x-2 m-2">
          <div className="col-span-2">
            <AvatarGroup className="w-full items-start justify-end" total={24}>
              <Avatar alt="Remy Sharp" src={Me} />
              <Avatar alt="Travis Howard" src={Me} />
              <Avatar alt="Agnes Walker" src={Me} />
              <Avatar alt="Trevor Henderson" src={Me} />
            </AvatarGroup>
            <span className="text-base font-light">
              Many clients are satisfied and happy with the results I provide.
            </span>
            {children}
          </div>
          <div>
            <img src={Call} className="w-full h-1/2 object-contain z-40" />
          </div>
        </div>
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
