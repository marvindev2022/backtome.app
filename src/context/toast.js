import { toast } from "react-toastify";

export function toastSuccess(msg, classname) {
  toast.success(`${msg}`, {
    icon: false,
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: "colored",
    className: classname,
  });
}
export function toastFailWhite(msg, classname) {
  toast.error(`${msg}`, {
    closeButton: false,
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    theme: "ligth",
    className: classname,
  });
}
