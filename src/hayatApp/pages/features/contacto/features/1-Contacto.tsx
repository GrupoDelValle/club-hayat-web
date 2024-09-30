import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { CustomTextField } from "../../../../ui/components/CustomTextField";
import { Alert } from "./components/CustomAlert";
import { useForm } from "../../../../hooks/useForm";
import { validarNumero } from "../../../../helpers/numberValitador";
import { RootState, useAppDispatch } from "../../../../../store";
import { SendMailStatus } from "../../../../service/config";
import { startSendingMail } from "../../../../../store/mail";
import { alertSwap } from "./hooks/alertSwap";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

// Validaciones para el formulario
interface FormValidation {
    [key: string]: [(value: string) => boolean, string];
  }

interface Contacto1Props {
  showForm: boolean;
  setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const formValidations: FormValidation = {
  nombres: [(value) => value.length > 0, "El nombre es obligatorio para poder reconocerte"],
  apellidos: [(value) => value.length > 0, "El apellido es obligatorio para poder reconocerte"],
  correo: [(value) => value.includes("@"), "Ingrese un correo válido"],
  numero: [(value) => validarNumero(value), "Ingrese un número válido"],
};

export const Contacto1: React.FC<Contacto1Props> = ({ showForm, setShowForm }) => {
  const { alert, handleCloseAlert, handleShowAlert } = alertSwap();
  const dispatch = useAppDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleCloseForm = (showForm : boolean) => {
    setShowForm(!showForm);
  };

  const mailState = useSelector((state: RootState) => state.mail);

  useEffect(() => {
    if (mailState.status === SendMailStatus.MailSended || mailState.status === SendMailStatus.MainFailed) {
      handleShowAlert();
      handleCloseForm(showForm);
    }
  }, [mailState.status, handleShowAlert]);

  // Hook personalizado para gestionar los datos del formulario
  const {
    nombresValid,
    apellidosValid,
    correoValid,
    numeroValid,
    isFormValid,
    nombres,
    apellidos,
    correo,
    numero,
    onInputChange,
  } = useForm(
    {
      nombres: "",
      apellidos: "",
      correo: "",
      numero: "",
    },
    formValidations
  );

  // Manejador de envío de formulario
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    await dispatch(startSendingMail({ nombres, apellidos, correo, numero }));
  };

  return (
    <Box
      p={3}
      display="flex"
      flexDirection="column"
      alignItems="center"
      bgcolor="rgba(248,248,248, 0.8)"
      width="100%"
    >
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Box width="100%" >
          <Box display="flex" flexDirection="column" margin="0 10px 0 13px">
            <CustomTextField
              key={"nombre"}
              sx={{ margin: "20px 0 0 0", width: "96%" }}
              label="Nombres *"
              name="nombres"
              value={nombres}
              onChange={onInputChange}
              error={!!nombresValid && formSubmitted}
              helperText={formSubmitted ? nombresValid : null}
            />
            <CustomTextField
              key={"apellido"}
              sx={{ margin: "20px 0 0 0", width: "96%" }}
              label="Apellidos *"
              name="apellidos"
              value={apellidos}
              onChange={onInputChange}
              error={!!apellidosValid && formSubmitted}
              helperText={formSubmitted ? apellidosValid : null}
            />
            <CustomTextField
              key={"correo"}
              sx={{ margin: "20px 0 0 0", width: "96%" }}
              label="E-mail *"
              name="correo"
              value={correo}
              onChange={onInputChange}
              error={!!correoValid && formSubmitted}
              helperText={formSubmitted ? correoValid : null}
            />
            <CustomTextField
              key={"numero"}
              sx={{ margin: "20px 0 0 0", width: "96%" }}
              label="Celular *"
              name="numero"
              value={numero}
              onChange={onInputChange}
              error={!!numeroValid && formSubmitted}
              helperText={formSubmitted ? numeroValid : null}
            />
            <FormControl fullWidth sx={{ margin: "20px 0" }}>
                <InputLabel id="label-razon">Razón</InputLabel>
                <Select
                    labelId="label-razon"
                    id="razon"
                    value={age}
                    onChange={handleChange}
                    label="Razón"
                >
                    <MenuItem value={'membresia'}>Membresía</MenuItem>
                    <MenuItem value={'suites'}>Suites y Penthouses</MenuItem>
                    <MenuItem value={'ambas'}>Ambas</MenuItem>
                </Select>
            </FormControl>
          </Box>
          <Box pt="8%" width="100%" display="flex" justifyContent="center">
            <Button
              sx={{ display: "flex", justifyContent: "end", zIndex: 1, border: 3, padding: "10px 40px", color: "black", borderColor: "#DCA65E" }}
              disabled={mailState.status === SendMailStatus.Checking}
              variant="text"
              color="inherit"
              type="submit"
            >
              <Typography color="#DCA65E" fontWeight="bold" fontFamily={"Montserrat"}>
                Enviar
              </Typography>
              {mailState.status === SendMailStatus.Checking ? (
                <CircularProgress size={14} sx={{ margin: "0 0 0 3px", color: "green" }} />
              ) : null}
            </Button>
          </Box>
          {alert && (
            <Alert
              title={mailState.severity === "error" ? "Algo salió mal" : "Enviado con éxito"}
              message={mailState.message ?? ""}
              severity={mailState.severity === "error" ? "error" : "success"}
              duration={3000}
              onClose={handleCloseAlert}
            />
          )}
        </Box>
      </form>
    </Box>
  );
};
