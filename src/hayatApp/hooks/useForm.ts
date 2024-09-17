import { ChangeEvent, useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm: FormState = {}, formValidations: FormValidation = {}): FormHook => {
  
    const [ formState, setFormState ] = useState<FormState>( initialForm );
    const [ formValidation, setFormValidation ] = useState<any>({});

    useEffect(() => {
        createValidators();
    }, [ formState ])
    
    const isFormValid = useMemo( () => {
        for (const formValue of Object.keys( formValidation )) {
            if ( formValidation[formValue] !== null ) return false;
        }

        return true;
    }, [ formValidation ])


    const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        
        const formCheckedValues : { [key: string]: string | null } = {};
        
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;
        }

        setFormValidation( formCheckedValues );
    }



    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid
    }
}