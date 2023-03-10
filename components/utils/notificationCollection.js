import { toast } from 'react-toastify';

export const notifyError = (str = 'Please try After Some Time') => {
    toast.error(str, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
    });
}

export const notifySuccess = (str = "Your query is registered !") => {
    toast.success(str, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
    });
}
