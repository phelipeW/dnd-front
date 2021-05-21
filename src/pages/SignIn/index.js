import React, { useState, useRef, useCallback} from 'react';
import Swal from "sweetalert2";
import * as yup from 'yup';
import { Link } from "react-router-dom";
import FormikInput from '../../components/FormikInput';
import { useAuth } from "../../hooks/Auth";
import { Content, Container } from "./styles";
import {ClipLoader} from "react-spinners";
import { Formik, Field } from 'formik'


const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const SignIn = () => {
  const [loading, setLoading] = useState(false);

  const formik = useRef();

  const { signIn } = useAuth();

  const handleSubmit = useCallback(async (data) => {
    setLoading(true);
    try {
      
       await signIn({
        email: data.email,
        password: data.password,
      });

    } catch (err) {
        Toast.fire({
        icon: "error",
        title: "Usuário ou senha incorretos!",
      });
    }
    setLoading(false);
  }, []);

  return (
    <Container>
      <Content>
        <p>Login</p>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          enableReinitialize
          validationSchema={yup.object().shape({
            email: yup.string().required('Campo Obrigatório').email('Email inválido'),
            password: yup.string().required('Campo Obrigatório')
          })}
          onSubmit={(values) => handleSubmit(values)}
          render={({ submitForm, setFieldValue, values, handleChange }) => (
            <>
              <Field
                component={FormikInput}
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                style={{ width: 340 }}
              />
              <Field
                component={FormikInput}
                name="password"
                label="Senha"
                type="password"
                value={values.password}
                onChange={handleChange}
                style={{ width: 340 }}
              />
              <button onClick={submitForm}> {loading ? <ClipLoader size={24}/>: 'Login'}</button>
              <Link to="/signup"> {"Cadastrar"}</Link>
            </>
          )}
          >
      </Formik>
    </Content>
  </Container>
  );
}

export default SignIn;