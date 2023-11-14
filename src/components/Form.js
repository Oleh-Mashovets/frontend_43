import { Form, Field, Formik, ErrorMessage } from "formik";
import { useState } from "react";

import "../components/form.css";

export default function FormikForm() {
  const [message, setMessage] = useState("");

  const submitForm = (values) => {
    setMessage("Apply has been accepted");
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "This field must be filled in";
    }
    if (!values.email) {
      errors.email = "This field must be filled in";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email";
    }
    if (!values.phone) {
      errors.phone = "This field must be filled in";
    } else if (!/^\d{1,12}$/i.test(values.phone)) {
      errors.phone = `Invalid number. Do not use the prefix "+"`;
    }
    return errors;
  };
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        validate={validate}
        onSubmit={submitForm}
      >
        <Form className="formik">
          <div className="form__item">
            <span className="id">Name:</span>
            <Field className="input" type="text" name="name" />
          </div>
          <span className="error">
            <ErrorMessage name="name" />
          </span>
          <div className="form__item">
            <span className="id">Email:</span>
            <Field className="input" type="email" name="email" />
          </div>
          <span className="error">
            <ErrorMessage name="email" />
          </span>
          <div className="form__item">
            <span className="id">Phone:</span>
            <Field className="input" type="tel" name="phone" />
          </div>
          <span className="error">
            <ErrorMessage name="phone" />
          </span>
          <button className="btn" type="submit">
            Sign In
          </button>
        </Form>
      </Formik>
      <span className="accept">{message}</span>
    </>
  );
}
