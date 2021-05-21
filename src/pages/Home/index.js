import React, { useEffect, useRef, useState } from "react";
import { Container, SearchContainer, Header, InputContainer,Button,PostContainer, PostTop, PostBottom, FormContainer } from "./styles";
import { FiSearch, FiCamera, FiVideo } from "react-icons/fi";
import ScrollView from "../../components/ScrollView";
import { usePost } from "../../hooks/Post";
import FormikInput from '../../components/FormikInput';
import {ClipLoader} from "react-spinners";
import { Formik, Field} from 'formik';
import * as yup from "yup";
import api from "../../services/api";

import Swal from "sweetalert2";

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
function Home() {
  
  const [file, setFile] = useState("");
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const { posts, getPosts, getFilter, postMood } = usePost();
  const formRef = useRef();
  const inputImage = useRef();
  const inputVideo = useRef();

  useEffect(() => {
    getPosts();
  }, []);

  const handleSearch = async () => {
    getFilter(searchText);
  }

  const handleGetImage = async (e) => {
    const formData = new FormData();
  
    formData.append('file', e.target.files[0]);

    const response = await api.post('files', formData);

    const {url} = response.data;

    setFile(url);
  }

   
  const handlePost = async (data) => {
    setLoading(true);
    try {
      if (!file) {
        formRef.current?.setErrors([]);
        const schema = yup.object().shape({
          post: yup.string()
            .required("Mood não pode estar vazio!")
        });

        await schema.validate(data, { abortEarly: false });
      }

      postMood({ ...data, file });
      setFile("");
    } catch (err) {
        Toast.fire({
        icon: "error",
        title: "Erro ao listar postagens!",
      });
    }
    setLoading(false);
  }

  return (
    <Container>
    <Header>Bem vindo</Header>
      <ScrollView>
        <SearchContainer>
          <InputContainer>
            <input onChange={(text)=> setSearchText(text)} placeholder="Digite o nome que deseja buscar"/>
          </InputContainer>
          <button onClick={()=> handleSearch()}><FiSearch/></button>
        </SearchContainer>
        
        <Formik
          initialValues={{
            name: '',
            hitdice: '',
            file: ''
          }}
          enableReinitialize
          validationSchema={yup.object().shape({
            name: yup.string().required('Campo Obrigatório'),
            hitdice: yup.string().required('Campo Obrigatório'),
          })}
          onSubmit={(values) => handlePost(values)}
          render={({ submitForm, setFieldValue, values, handleChange }) => (
           <FormContainer>
              <p>Cadastrar novo</p>
              <Field
                  component={FormikInput}
                  name="name"
                  label="Digite o nome"
                  value={values.name}
                  onChange={handleChange}
              />
              <Field
                component={FormikInput}
                name="hitdice"
                label="Digite os dados de vida"
                value={values.hitdice}
                onChange={handleChange}
              />
              <div style={{display: "flex", flexDirection: "column", alignItems: 'center'}}>
                <div>
                  <FiCamera size={24}/>
                  <input type='file' accept={"image/*"} id='file' onChange={handleGetImage} ref={inputImage} style={{marginTop: 20, marginLeft: 20}}/>
                </div>
                
                <div>
                <FiVideo size={24}/>
                <input type='file' accept={"video/*"} id='file' onChange={handleGetImage} ref={inputVideo} style={{marginTop: 20, marginLeft: 20 }}/>
                </div>
                <span style={{color: 'red'}}>Video não funcionando</span>
              </div>
              <div style={{display: "flex", justifyContent: 'center'}}>
                <Button  onClick={submitForm}> {loading ? <ClipLoader size={24}/>: 'Cadastrar Novo'}</Button>
              </div>
            </FormContainer>
          )}
        />
          {/* <Post key={post.secure_id} text={post.text} file={post.file} date={post.date} user={post.user}/> */}
          {posts && posts.map((post) => {
            return <PostContainer>
                  <PostTop>
                    <p>{post?.user?.name}</p>
                    <p>{post?.created_at}</p>
                  </PostTop>
                  <PostBottom>
                      <p>Nome: {post?.name}</p>
                      <p>Dado de vida: {post?.hitdice}</p>
                      {post?.file && <img src={post.file} alt="desc"/>}
                      
                  </PostBottom>
            </PostContainer>
          })}
      </ScrollView>
    </Container>
  );
}

export default Home;