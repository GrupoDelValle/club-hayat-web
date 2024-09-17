import axios from 'axios';

const HAYAT_MAIL_API = import.meta.env.VITE_MAIL_API;

export enum UserStatus {
    Checking         = 'checking',
    NotAuthenticated = 'not-authenticated',
    Authenticated    = 'authenticated'
}

export enum SendMailStatus{
    None = 'none',
    Checking = 'checking',
    MailSended = 'mail-sended',
    MainFailed = 'mail-failed'
}

const token = localStorage.getItem('token');

export const MailApi = `${HAYAT_MAIL_API}/mail`;

export const AuthStatusApi = axios.create({
    baseURL: `${HAYAT_MAIL_API}/auth`,
    headers: {
        'Authorization': `Bearer ${token}`
    }
});

export const ProductApi = axios.create({
    baseURL: `${HAYAT_MAIL_API}/products`,
    headers: {
        'Authorization': `Bearer ${token}`,
    }
});

export const CreateProductApi = axios.create({
    baseURL: `${HAYAT_MAIL_API}/products`,
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
    }
});