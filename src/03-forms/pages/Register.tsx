import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const Register = () => {
  const { data, onChange, name, email, password, password2, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <h1>Register page</h1>

      <form noValidate onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={name}
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          onChange={onChange}
          value={email}
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          onChange={onChange}
          value={password}
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          onChange={onChange}
          value={password2}
          type="password"
          placeholder="Repeat password"
          name="password2"
        />

        <button type="submit">Enviar</button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </form>
    </div>
  );
};
