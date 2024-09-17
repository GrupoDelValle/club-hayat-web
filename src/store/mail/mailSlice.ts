import { createSlice } from '@reduxjs/toolkit';
import { SendMailStatus } from '../../hayatApp/service/config';

export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        status: SendMailStatus.None, // 'checking', 'mail-sended', 'mail-failed'
        severity: 'error' ,
        message: null,
    },
    reducers: {
        noStaredMail: ( state ) => {
            state.status = SendMailStatus.None; // 'checking', 'mail-sended', 'mail-failed'
            state.severity = 'error';
            state.message = null;
        },
        sendedMessage: ( state, {payload} ) => {
            state.status = SendMailStatus.MailSended; // 'checking', 'mail-sended', 'mail-failed'
            state.severity = 'success'
            state.message = payload;
        },
        failedMessage: ( state, {payload} ) => {
            state.status = SendMailStatus.MainFailed; // 'checking', 'mail-sended', 'mail-failed'
            state.severity = 'error'
            state.message = payload
        },
        chekingMessage: ( state ) => {
            state.status = SendMailStatus.Checking; // 'checking', 'mail-sended', 'mail-failed'
            state.severity= 'error'
            state.message = null
        },
    }
});

export const { noStaredMail, sendedMessage, failedMessage, chekingMessage } = mailSlice.actions;