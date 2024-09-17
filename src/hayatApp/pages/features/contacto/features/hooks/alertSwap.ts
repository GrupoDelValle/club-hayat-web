import { useState } from "react";
import { useAppDispatch } from "../../../../../../store";
import { noStaredMail } from "../../../../../../store/mail";

export const alertSwap = () => {
    const [alert, setAlert] = useState(false);

    const dispatch = useAppDispatch();

    const handleShowAlert = () => {
        setAlert(true);
        setTimeout(() => {
            handleCloseAlert();
            dispatch( noStaredMail() )
        }, 3000);
    };

    const handleCloseAlert = () => {
        setAlert(false);
    };

    return {handleShowAlert, alert, handleCloseAlert};
}