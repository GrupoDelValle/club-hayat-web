interface FormValidation {
    [key: string]: [(value: string ) => boolean, string];
}

interface FormState {
    [key: string]: string;
}

interface FormHook {
    [key: string]: any;
    formState: FormState;
    onInputChange: ({ target }: { target: any; }) => void;
    onResetForm: () => void;
    isFormValid: boolean;
}