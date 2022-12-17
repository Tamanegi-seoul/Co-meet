import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: toast => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const onErrorAlert = explain => {
  Toast.fire({
    icon: "error",
    title: explain,
  });
};

export const onSuccessAlert = explain => {
  Toast.fire({
    icon: "success",
    title: explain,
  });
};
