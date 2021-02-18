import react, {useState} from 'react'



//Exapsulates logic from previous useState function inside this function without 
//Any UI. Reusable function that maps value to the form 

export const useForm = initialValues => {
    const [values, setValues] = useState(initialValues);


    return [
        values, 
        e => {
            setValues({
                ...values, 
                [e.target.name] : e.target.value
            });
        }
    ];
    
};