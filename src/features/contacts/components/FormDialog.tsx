import React from "react";
import { Dialog, DialogContent, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface FormDialogProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

function FormDialog(props: FormDialogProps) {
  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      fullScreen={true}
      // maxWidth="xl"
      open={open}
      TransitionComponent={Transition}
      className="col"
      hideBackdrop={true}
      // sx={{ backgroundColor: "#00000000" }}
    >
      <DialogContent className=" col w-full h-full bg-black/0">
        <div className=" h-full bg-blue-600/0 colCenter">
          <form
            action="https://formsubmit.co/walterayiego@gmail.com"
            method="POST"
            // encType='multipart/form-data'
            className=" relative p-3 col w-full h-fit col overflow-y-scroll bg-white rounded-xl"
          >
            <p
              className="absolute top-0 right-0 bg-black/20 p-1 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              X
            </p>
            <input type="hidden" name="_captcha" value="false"></input>
            <p className="sm:text-xl p-2">Leave a Message</p>

            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="col">
                <label className="uppercase text-sm py-2">Name</label>
                <input
                  className="border-2 sm:rounded-lg p-3 border-gray-300"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className="col">
                <label className="uppercase text-sm py-2">Phone Number</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="phone"
                  required
                />
              </div>
            </div>
            <div className="col py-2 w-full">
              <label className="uppercase text-sm py-2">Email</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="col py-2 w-full">
              <label className="uppercase text-sm py-2">Message</label>
              <textarea
                className="border-2 rounded-lg p-3 border-gray-300"
                rows={5}
                name="message"
                required
              ></textarea>
            </div>
            <button className="w-full bg-brown p-4 rounded-md text-gray-100 mt-4">
              Send Message
            </button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FormDialog;
