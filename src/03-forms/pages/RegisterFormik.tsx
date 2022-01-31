import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

import "../styles/styles.css";

export const RegisterFormik = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "El nombre debe de ser de 2 o mas caracteres")
            .max(15, "El nombre debe de ser menor a 15 caracteres")
            .required("El nombre es requerido"),
          email: Yup.string().email("Debe tener formato de email"),
          password: Yup.string()
            .min(6, "Debe ser mayor a 6")
            .required("La contrasena es requerida"),
          password2: Yup.string()
            .oneOf([Yup.ref("password")], "Las contrasenas deben ser iguales")
            .required("Requerido"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Name" name="name" placeholder="Diego" />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="diego@gmail.com"
            />
            <MyTextInput
              label="Password"
              name="password"
              type="password"
              placeholder="****"
            />
            <MyTextInput
              label="Repeat the password"
              type="password"
              name="password2"
              placeholder="****"
            />

            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
