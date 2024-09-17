import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { changeIndex } from "../../store/navbar/navBatSlice";

export const selectedOption = (initialSelectedIndex: number | null = null) => {
    const [selectedButton, setSelectedButton] = useState<number | null>(initialSelectedIndex);
    
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const handleButtonClick = (buttonIndex: number) => {
        
        switch (buttonIndex) {
            case 0:
                dispatch( changeIndex(buttonIndex))
                navigate('/');
                break;
            case 1:
                dispatch( changeIndex(buttonIndex))
                navigate('/servicios');
                break;
            case 2:
                dispatch( changeIndex(buttonIndex))
                navigate('/nosotros');
                break;
            case 3:
                dispatch( changeIndex(buttonIndex))
                navigate('/contacto');
                break;
            case 4:
                dispatch( changeIndex(buttonIndex))
                navigate('/informacion');
                break;
            default:
                dispatch( changeIndex(buttonIndex))
                navigate('/');
                break;
        }
        setSelectedButton(buttonIndex);
    };

    return { selectedButton, handleButtonClick };
}