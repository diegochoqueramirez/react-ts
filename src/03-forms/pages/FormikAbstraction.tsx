import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyCheckbox, MySelect, MyTextInput } from "../components";

import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe ser menor que 15")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe ser menor que 10")
            .required("Requerido"),
          email: Yup.string()
            .email("El correo no es valido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "Opcion no valida")
            .required("Requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Diego"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Choque"
            />
            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="diego@gmail.com"
            />

            <MySelect name="jobType" label="Job Type">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="senior">Senior</option>
              <option value="it-jr">Dev Jr.</option>
            </MySelect>

            <MyCheckbox label="Terms and Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
