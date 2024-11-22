import { Box, IconButton } from "@mui/material";
import ConsultaAhoraSvg from "../../../../ui/components/TextSVG";
import { widthScreen } from "../../../../hooks/widthScreen";

import { AnimatedTypography } from "../../shared/AnimatedTypography";

import ImagenHayatVillasAereo from "../../../../../assets/ingreso-hayat-lotes.webp";
import ImagenHayatVillasAereoMovil from "../../../../../assets/ingreso-hayat-lotes-movil.webp";

interface Contacto1Props {
    showForm: boolean;
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Servicios1: React.FC<Contacto1Props> = ({ showForm, setShowForm }) => {
    const { width } = widthScreen();

    const handleCloseForm = (showForm: boolean) => {
        setShowForm(!showForm);
    };

    return (
        <Box
            id="membresia"
            bgcolor={"rgba(38,38,38,0.4)"}
            overflow="hidden"
            sx={{
                backgroundImage: `url(${(width< 640) ? ImagenHayatVillasAereoMovil : ImagenHayatVillasAereo})`,
                backgroundColor: "white",
                backgroundAttachment: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                padding: "80px 0 0 0",
                width: "100vw",
                height: "90vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: (width < 640) ? "center" : "end",
                    paddingRight: (width < 640) ? "none" : "180px",
                    paddingLeft: (width < 640) ? "20px" : "none",
                }}
            >
                        <AnimatedTypography
                        fontFamily="Archivo Black"
                        fontSize={{
                            xs: "6vw",
                            sm: "4.5vw",
                            md: "4.5vw",
                            lg: "45px",
                            xl: "45px",
                        }}
                        color="white"
                    >
                        AMBIENTE PERFECTO
                    </AnimatedTypography>
                    <AnimatedTypography
                        fontFamily="Archivo Black"
                        fontSize={{
                            xs: "6vw",
                            sm: "4.5vw",
                            md: "4.5vw",
                            lg: "45px",
                            xl: "45px",
                        }}
                        color="white"
                    >
                        FRENTE AL MAR
                    </AnimatedTypography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: (width<640) ? "center" : "end",
                    paddingBottom: "30px",
                    paddingRight: (width<640) ? "none" : "15%",  
                }}
            >
                <Box 
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <AnimatedTypography
                        color="white"
                        fontSize={{
                            xs: "13px",
                            sm: "14px",
                            md: "16px",
                            lg: "16px",
                            xl: "16px",
                        }}
                        fontWeight="500"
                    >
                        Se parte de nuestro exclusivo club,
                    </AnimatedTypography>
                    <AnimatedTypography
                        color="white"
                        fontSize={{
                            xs: "13px",
                            sm: "14px",
                            md: "16px",
                            lg: "16px",
                            xl: "16px",
                        }}
                        fontWeight="500"
                    >
                        ''vive un mar de experiencias'' 
                    </AnimatedTypography>
                </Box>
                <IconButton
                    sx={{
                        height: "50px",
                        width: width < 550 ? "200px" : "280px",
                        borderRadius: "30px",
                        marginTop: "20px", // Espacio entre el texto y el botón
                    }}
                    onClick={() => {
                        handleCloseForm(showForm);
                    }}
                >
                    <ConsultaAhoraSvg
                        style={{ width: 300, height: width < 650 ? 30 : 40 }}
                    />
                </IconButton>
            </Box>
        </Box>
    );
};
