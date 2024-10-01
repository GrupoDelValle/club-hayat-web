import { MailApi } from './config';
import axios from 'axios'

export const sendEmail = async ({nombres, apellidos, correo, numero, razon}: MailData) => {
    return axios.post(`${MailApi}/hayat/send`, { 
        nombres: nombres,
        apellidos: apellidos,
        email: correo,
        numero: +numero,
        razon: razon,
    }).then(response => {
        return response.data;
    }).catch(error => {
        if(error.code === 'ERR_NETWORK'){
            return {
                error: true,
                message: 'Error al enviar el mensaje, vamos a solucionarlo.'
            }
        }
        if (error.response) {
            return { 
                error: true,
                message: error.response.data.message
            };
        } else {
            throw error;
        }
    });
};

export const sendEmailNovedades = async ({correo}: MailDataNovedades) => {
    return axios.post(`${MailApi}/sendNovedades`, { 
        email: correo,
    }).then(response => {
        return response.data;
    }).catch(error => {
        if(error.code === 'ERR_NETWORK'){
            return {
                error: true,
                message: 'Error al enviar el mensaje, vamos a solucionarlo.'
            }
        }
        if (error.response) {
            return { 
                error: true,
                message: error.response.data.message
            };
        } else {
            throw error;
        }
    });
 };