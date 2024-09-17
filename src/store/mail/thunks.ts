
import { sendEmail, sendEmailNovedades } from '../../hayatApp/service/providers';
import { noStaredMail, chekingMessage, failedMessage, sendedMessage } from './mailSlice';
import { Dispatch } from 'redux';

export const checkingAuthentication = () => {
    return async( dispatch: Dispatch ) => {
        dispatch( noStaredMail() );
    }
}

export const startSendingMail = ({ nombres, apellidos, correo, numero }: MailData) => {
    return async( dispatch: Dispatch ) => {

        dispatch( chekingMessage() );

        const result = await sendEmail({nombres, apellidos, correo, numero })
        
        if ( result.error === true ) return dispatch( failedMessage( result.message ) );
        
        dispatch( sendedMessage( result.message ))

    }

}

export const startSendingMailNovedades = ({ correo }: MailDataNovedades) => {
    return async( dispatch: Dispatch ) => {

        dispatch( chekingMessage() );

        const result = await sendEmailNovedades({ correo });
        
        if ( result.error === true ) return dispatch( failedMessage( result.message ) );
        
        dispatch( sendedMessage( result.message ))

    }

}