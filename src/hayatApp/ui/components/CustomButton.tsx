import { Button } from "@mui/material";
import '../css/CustomButton.css';

interface CustomButtonProps {
    children: React.ReactNode;
    selected?: boolean;
    className: string
    onClick?: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ className, children, selected = false, onClick, ...props }) => {

    return (
        <Button
            sx={{mr: 4.0}}
            disableRipple 
            onClick={onClick}
            className={className} 
            {...props}>

            {children}
        </Button>
    );
}
  
export default CustomButton;