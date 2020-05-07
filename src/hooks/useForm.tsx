import {ChangeEvent, FormEvent, useState} from 'react';
import {Task} from "../store/task/taskTypes";

type FormState = Task
type FormChange = (event: ChangeEvent<HTMLInputElement>) => void
type FormSubmit = (event: FormEvent<HTMLFormElement>) => void

interface UseFormReturn extends Array<FormState | FormChange | FormSubmit> {
    0: FormState,
    1: FormChange,
    2: FormSubmit
}

type UseForm<S = FormState, CB = () => void> = (initialValues: S, cb: CB) => UseFormReturn

export const useForm: UseForm = (initialValues, cb) => {
    const [values, setValues] = useState<FormState>(initialValues);

    const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) => setValues({
        ...values,
        [name]: value
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        cb();
        setValues(initialValues)
    };

    return [values, handleChange, handleSubmit]

};
