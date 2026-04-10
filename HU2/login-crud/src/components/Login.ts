import { FormEvent, use, useState } from "react";
import { authenticate } from "../utils/auth";
import { User } from "../interfaces/User";

interface LoginProp {
    onlogin: (user:User, message: string) => void;
}

function Login({ onlogin }: LoginProp) {
    const [email, setEmail] = useState('');
    const [password, setPasswprd] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const user = authenticate({ email, password });

        if (user) {
            const successMessage = `Bienvenido, ${user.fullName}. inicio de sesión exitoso`;
            setIsError(false);
            setMessage(successMessage);
            onlogin(user, successMessage);
            return;
        }

        setIsError(true);
        setMessage('Credenciales incorrectas, intente de nuevo')
    }
}