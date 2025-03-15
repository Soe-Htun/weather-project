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
      hideProgressBar: true,
      dangerouslyHTMLString: true,
      closeButton: true,
      autoClose: 3000
    });
  };

  return {
    toaster,
  };
};
