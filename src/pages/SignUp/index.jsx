import { useState } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Input } from '../../components/input';
import { Button } from '../../components/button';


import { Container, Form, Background } from "./style";

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password){
      return alert("preencha todos os campos!");
    };

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
      })
      .catch(error => {
        if(error.response){
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        };
      });

      navigate(-1);
  };

  function handleBack(){
    navigate(-1);
  };

  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua Conta</h2>
        <Input 
          placeholder='Nome' 
          type='text' 
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />
        <Input 
          placeholder='E-mail' 
          type='text' 
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder='Senha' 
          type='password' 
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />
        <Button title='Cadastrar' onClick={handleSignUp}/>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft/>
          Voltar para Login
        </button>
      </Form>
      <Background/>
    </Container>
  );
};