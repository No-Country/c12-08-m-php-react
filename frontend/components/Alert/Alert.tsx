import Swal from 'sweetalert2';

export const alert = async (
  message: string,
  title: string,
  type: 'success' | 'error',
) => {
  return await Swal.fire({
    title: title,
    text: message,
    icon: type,
    confirmButtonText: 'Ok',
  });
};
