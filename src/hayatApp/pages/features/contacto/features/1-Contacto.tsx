import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Alert } from "./components/CustomAlert";
import { InfoFooter } from "../../../../ui/components/InfoFooter";
import { CustomTextField } from "../../../../ui/components/CustomTextField";
import { AnimatedTypography } from "../../shared/AnimatedTypography";

import { widthScreen } from "../../../../hooks/widthScreen";
import { heightScreen } from "../../../../hooks/heightScreen";
import { useForm } from "../../../../hooks/useForm";
import { alertSwap } from "./hooks/alertSwap";

import girlBeach from "../../../../../assets/girl-beach.webp";
import hayatLogo from '../../../../../assets/hayat-espera.gif';

import { validarNumero } from "../../../../helpers/numberValitador";
import { RootState, useAppDispatch } from "../../../../../store";
import { SendMailStatus } from "../../../../service/config";
import { startSendingMail } from "../../../../../store/mail";


const formValidations: FormValidation = {
    nombres: [ (value) =>  value.length > 0, 'El nombre es obligatorio para poder reconocerte'],
    apellidos: [ (value) => value.length > 0, 'El apellido es obligatorio para poder reconocerte' ],
    correo:  [ (value) => value.includes('@'), 'Ingrese un correo valido'],
    numero: [ (value) => validarNumero(value), 'Ingrese un numero valido']
}

export const Contacto1 = () => {

    const { alert, handleCloseAlert, handleShowAlert } = alertSwap();
    const dispatch = useAppDispatch();

    const {width} = widthScreen();
    const {height} = heightScreen();
    const first_content = (height < 1000) 
        ? (height < 400 && width < 1070) ? height * (390/100) : 1150
        : height * (117/100);
    const second_content = (height < 1000) ? 160: 150;

    const [formSubmitted, setFormSubmitted] = useState(false);

    const mailState = useSelector((state: RootState) => state.mail );

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, []);
    
    //FORM DATA
    const { nombresValid, apellidosValid, correoValid, numeroValid, isFormValid, nombres, apellidos, correo, numero, onInputChange } = useForm({
        nombres: '',
        apellidos: '',
        correo: '',
        numero: '',
    }, formValidations);

    useEffect(()=>{
        if( mailState.status === SendMailStatus.MailSended || mailState.status === SendMailStatus.MainFailed){
            handleShowAlert();
        }
    })
    const onSubmit = async ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        setFormSubmitted(true);

        if(!isFormValid) return;

        await dispatch( startSendingMail({nombres, apellidos, correo , numero}) );
        
    }
    

    return (
    <Box
        bgcolor={'rgba(38,38,38,0.2)'}
        sx={{
            backgroundAttachment: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            padding: '80px 0 0 0',
            alignContent: 'center',
            width: '100%', 
            borderColor:'red'
        }}
    >
        <Grid height='inherit' container display='flex' direction='row' >
            <Box width='100%' height={first_content} padding='0 0 0 0' >
                <Box flexDirection={(width < 1070) ? 'column' : 'row'} margin='80px 0 0 9vw' display='flex'>
                    <AnimatedTypography fontWeight='500' fontSize={(width < 860) ? {
                        xs: '7.0vw',
                        sm: '7.0vw',
                    } : {sm: '50px',
                        md: '50px',
                        lg: '50px',
                        xl: '60px'}} color='white' fontFamily='Montserrat'  >CONTÁCTANOS Y</AnimatedTypography>
                    <AnimatedTypography padding={(width < 1070)  ? 'none' : '0 0 0 10px'} fontWeight='bold' fontSize={(width < 860) ? {
                        xs: '7vw',
                        sm: '7vw',
                    } : {sm: '50px',
                        md: '50px',
                        lg: '50px',
                        xl: '60px'}} fontFamily='Montserrat' color='#E96417'  >EMPECEMOS CON</AnimatedTypography>
                </Box>
                <AnimatedTypography fontWeight='bold' margin='0 0 0 9vw' fontSize={(width < 860) ? {
                    xs: '7vw',
                    sm: '7vw',
                } : {sm: '50px',
                    md: '50px',
                    lg: '50px',
                    xl: '60px'}} fontFamily='Montserrat' color='#E96417'>ESTA MARAVILLOSA EXPERIENCIA</AnimatedTypography>

                <AnimatedTypography id="form-hayat" fontWeight={'bold'} margin={(width < 480) ? '20px 15vw 0 9vw' :'20px 15vw 30px 9vw'} color='white' fontSize={{
                    xs: '15px',
                    sm: '20px',
                    md: '20px',
                    lg: '24px',
                    xl: '24px'
                }}>Se uno de los primeros en obtener tu membresía a este exclusivo CLUB a precio de lanzamiento </AnimatedTypography>

                {(width < 480) 
                    ? <Box height={'auto'}  width={'100%'}  display='flex' alignContent={'center'} justifyContent={'center'}  alignItems={'center'} justifyItems={'center'}>
                        <img src={hayatLogo} alt="Logo" style={{ border:'5px', textAlign:'center', boxShadow: 'none', margin:'none', transition: 'box-shadow 3s', height: 'auto', width: '70%', }} />        
                      </Box>
                    : null
                }

                <Box margin={(width < 550)  ? '0 0 0 10%' :'0 0 0 9vw'}  width={(width < 550)  ? '80%' : '75%'} position='absolute' display='flex' height={
                    (width < (height + 480)) 
                        ? first_content * (50/100) 
                        : first_content * (50/100)}>
                    { (width > 479 ) 
                        ? <Box zIndex={1} bottom={0} left={(width < 480) ?  '-31px' : '-130px'} height='auto' width={{
                            xs: '80vw',
                            sm: '70vw',
                            md: '62vw',
                            lg: '60vw',
                            xl: '64vw'
                        }} maxWidth={'940px'} position='absolute' component={'img'} src={girlBeach} sx={{ objectFit: 'contain'}} />
                        : null
                    }
                    <Box position='relative' bgcolor='rgba(233,100,23, 0.7)' width={(width < 480) ? '7%' : '35%'} />
                    <Box p={(width < 480) ? '5% 5% 0 0' : '5% 5% 0 5%'} color='rgba(38,38,38,0.8)' position='relative' bgcolor='rgba(248,248,248, 0.8)' width={(width < 480) ? '93%' : '65%'}>
                        <form onSubmit={onSubmit}  className='animate__animated animate__fadeIn animate__faster'>
                        <Box width='100%' height='100%'>
                            {/* <Typography fontWeight='bold'  padding='10px 10px' zIndex={1}  fontSize='20px'>
                                <InfoOutlined sx={{color:'rgba(38,38,38,0.8)', zIndex:1, fontSize: '20px'}} /> Información de contacto
                            </Typography> */}
                            <Box display='flex' flexDirection={'column'} margin= {'0 10px 0 13px'} >
                                <CustomTextField key={'nombre'} sx={{margin:'20px 0 0 0', width: (width < 480) ? '105%' : '96%'}} 
                                    placeholder=""
                                    label="Nombres *"
                                    name="nombres"
                                    value={nombres}
                                    onChange={onInputChange}
                                    error = {!!nombresValid && formSubmitted}
                                    helperText={(formSubmitted) ? nombresValid : null}
                                />
                                <CustomTextField key={'apellido'} sx={{ margin:'20px 0 0 0', width: (width < 480) ? '105%' : '96%'}} 
                                    placeholder="" 
                                    label="Apellidos *"
                                    name="apellidos"
                                    value={apellidos}
                                    onChange={onInputChange}
                                    error = {!!apellidosValid && formSubmitted}
                                    helperText={(formSubmitted) ? apellidosValid : null}
                                />
                                <CustomTextField key={'correo'} sx={{ margin:'20px 0 0 0', width: (width < 480) ? '105%' : '96%'}}
                                    placeholder="" 
                                    label="E-mail *" 
                                    name="correo"
                                    value={correo}
                                    onChange={onInputChange}
                                    error = {!!correoValid && formSubmitted}
                                    helperText={(formSubmitted) ? correoValid : null}
                                />
                                <CustomTextField key={'numero'} sx={{ margin: '20px 0 0 0', width: (width < 480) ? '105%' : '96%'}} 
                                placeholder="" 
                                label="Celular *" 
                                value={numero}
                                name="numero"
                                onChange={onInputChange}
                                error = {!!numeroValid && formSubmitted}
                                helperText={(formSubmitted) ? numeroValid : null}
                            />
                            </Box>
                            {/* <Box display='flex' margin= {(width < 760) ? '10px 0 2vw 0' : '0 0 2vw 0'}  flexDirection={(width < 760) ? 'column' : 'row'} >
                                
                                <CustomTextField key={'confirmCorreo'} sx={{ margin:(width < 760) ? '11px 10px 0 13px' : '', width: (width < 760) ? '90%' : '46%'}} 
                                    placeholder="" 
                                    label="Confirmar E-mail *"  
                                    name="confirmCorreo"
                                    onChange={onInputChange}
                                    error = {(correo !== confirmCorreo ) && formSubmitted}
                                    helperText={(formSubmitted) 
                                        ? (correo !== confirmCorreo ) ? 'Los correos no coinciden' : null 
                                        : null
                                    }
                                />
                            </Box> */}
                            {/* <Grid container sx={{ margin: (width < 760) ? '0 10px 0 13px' : '0 10px 2vw 13px', width: (width < 760) ? '90%' : '48%'}}>
                                <FormControl key={'departamentos'} fullWidth>
                                    <InputLabel id="subcategory-select"> <Typography color={'rgba(38,38,38,0.8)'} >Departamento *</Typography></InputLabel>
                                    <Select
                                        value={selectedItem}
                                        onChange={handleCategoryChange}
                                        labelId="category-select"
                                        label="Departamento"
                                        placeholder='Comida'
                                        sx={{'& .MuiOutlinedInput-notchedOutline': {
                                            border:0,
                                            borderColor: 'rgba(248,248,248,0.5)',
                                        }}}
                                    >
                                    {departamentosPeru.map((departamento, index) => (
                                    <MenuItem key={index} value={departamento}>
                                        {departamento}
                                    </MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
                                {(formSubmitted && selectedItem === '') ? <Typography p='0 0 0 10px' color='red' fontSize='11px' >Seleccione un departamento</Typography> : null}
                                <Underline />
                            </Grid> */}
                            <Box pt='8%' width='100%' display='flex' justifyContent='center'>
                                <Button sx={{ display:'flex', justifyContent:'end', zIndex:1, border:3, padding:'10px 40px', color:'black',  borderColor: 'rgba(233,100,23, 0.6)'}} 
                                    disabled={(mailState.status === SendMailStatus.Checking) ? true : false}
                                    variant="text" 
                                    color="inherit"
                                    type='submit'
                                >
                                    <Typography color='rgba(233,100,2, 0.6)' fontWeight='bold' fontFamily={'Montserrat'}>Enviar</Typography>
                                    { (mailState.status === SendMailStatus.Checking) ? <CircularProgress size={14} sx={{ margin:'0 0 0 3px', color: 'green'}} /> : null}
                                </Button>
                            </Box>
                            {alert && (
                                <Alert
                                    title= {(mailState.severity === 'error') 
                                        ? 'Algo salió mal' 
                                        : 'Enviado con éxito'
                                    }
                                    message= {mailState.message ?? ''}
                                    severity= {(mailState.severity === 'error') ? 'error' : 'success'}
                                    duration={3000}
                                    onClose={handleCloseAlert}
                                />
                            )}
                        </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Grid>
        <InfoFooter sizeContent={second_content} />
    </Box>
    );
}