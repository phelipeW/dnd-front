import React, { useState, useRef, useCallback} from 'react';
import Swal from "sweetalert2";
import * as yup from 'yup';
import { useAuth } from "../../hooks/Auth";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import FormikInput from '../../components/FormikInput';
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

const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const formik = useRef();
  const history = useHistory();

  const handleSubmit = useCallback(async (data) => {
    setLoading(true);
    try {
      
      await api.post("/users", {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      history.push("/");

      Toast.fire({
        icon: "success",
        title: "Cadastro realizado com sucesso!",
      });
    } catch (err) {
        Toast.fire({
        icon: "error",
        title: "Erro ao criar conta!",
      });
    }
    setLoading(false);
  }, []);
  
  return (
    <Container>
      <Content>
        <p>Cadastro</p>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
          }}
          enableReinitialize
          validationSchema={yup.object().shape({
            name: yup.string().required('Campo Obrigatório'),
            email: yup.string().required('Campo Obrigatório').email('Email inválido'),
            password: yup.string().required('Campo Obrigatório'),
            password_confirmation: yup
              .string()
              .required('Campo Obrigatório')
              .oneOf([yup.ref('password'), null], 'Senhas não conferem'),
          })}
          onSubmit={(values) => handleSubmit(values)}
          render={({ submitForm, setFieldValue, values, handleChange }) => (
            <>
              <Field
                component={FormikInput}
                name="name"
                label="Nome"
                value={values.name}
                onChange={handleChange}
              />
              <Field
                component={FormikInput}
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
              />
              <Field
                component={FormikInput}
                name="password"
                label="Senha"
                type="password"
                value={values.password}
                onChange={handleChange}
              />
              <Field
                component={FormikInput}
                name="password_confirmation"
                label="Confirme sua senha"
                type="password"
                value={values.password_confirmation}
                onChange={handleChange}
              />
              <button onClick={submitForm}> {loading ? <ClipLoader size={24}/>: 'Cadastrar'}</button>
            </>
          )}
          >
      </Formik>
    </Content>
  </Container>
  )
}

export default SignUp;