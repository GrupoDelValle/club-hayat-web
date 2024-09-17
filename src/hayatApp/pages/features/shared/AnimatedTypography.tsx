import { SxProps, Theme, Typography } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import './ani-typo.css';
import { Variant } from "@mui/material/styles/createTypography";

interface AniTypoProps{
    children: ReactNode;
    variant?: Variant | "inherit"
    padding?: any;
    id?: any;
    margin?:any;
    display?: any;
    fontSize?: any;
    alignItems?: any;
    fontWeight?: string;
    color?: string;
    fontFamily?: string;
    textAlign?: any;
    sx?: SxProps<Theme> | undefined;
}
export const AnimatedTypography:React.FC<AniTypoProps> = ({textAlign='left', id, alignItems, display, margin, variant, sx, children, color, fontFamily, fontSize, fontWeight, padding}) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);

    return (
        <Typography 
            id={id}
            textAlign={textAlign}
            alignItems={alignItems}
            display={display}
            variant={variant}
            sx={sx}
            margin={margin}
            color={color}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            padding={padding}
            className={isVisible ? 'typography-enter' : ''}
        >
          {children}
        </Typography>
    );
}