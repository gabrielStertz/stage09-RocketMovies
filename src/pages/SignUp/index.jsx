import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/input';
import { Button } from '../../components/button';


import { Container, Form, Background } from "./style";

export function SignUp(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua Conta</h2>
        <Input placeholder='Nome' type='text' icon={FiUser}/>
        <Input placeholder='E-mail' type='text' icon={FiMail}/>
        <Input placeholder='Senha' type='password' icon={FiLock}/>
        <Button title='Cadastrar'/>
        <Link to="/">
          <FiArrowLeft/>
          Voltar para Login
        </Link>
      </Form>
      <Background/>
    </Container>
  );
};