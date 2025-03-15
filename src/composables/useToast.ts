import { toast } from "vue3-toastify";

export const useToast = () => {
  const toaster = (
    variant: "success" | "error" | "info" | "warning",
    title: string
  ) => {
    toast(title, {
      theme: "colored",
      type: variant,
      position: "top-center",
      autoClose: 3000,
      style: {
        marginTop: "20px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "10px",
        paddingRight: "10px"
      },
    });
  };

  return {
    toaster,
  };
};
