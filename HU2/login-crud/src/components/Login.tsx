import { FormEvent, use, useState } from "react";
import { authenticate } from "../utils/auth";
import { User } from "../interfaces/User";

interface LoginProp {
    onlogin: (user:User, message: string) => void;
}

function Login({ onlogin }: LoginProp) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        setMessage('Credenciales incorrectas, intente de nuevo');
    };

    return (
        <section className="card">
            <h1>Login modular</h1>
            <p className="helper-text">
                Usa uno de estos usuarios: daniel@gmail.com / 1234, alejita@gmail.com / 4321,
                pepito@gmail.com / 2134.
            </p>

            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="email">Correo</label>
                <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="ana@email.com"
                required
                />

                <label htmlFor="password">Contraseña</label>
                <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="1234"
                required
                />

                <button type="submit">Ingresar</button>
            </form>

            {message && (
                <p className={isError ? 'message error' : 'message success'}>{message}</p>
            )}
        </section>
  );
}

export default Login;
