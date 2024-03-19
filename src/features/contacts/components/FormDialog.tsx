import { Dialog } from "@mui/material";
import ContactForm from "./ContactForm";
import { height, width } from "../../../constants/Constants";

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
      open={open}
      className="w-full"
    >
      <ContactForm />
    </Dialog>
  );
}

export default FormDialog;
