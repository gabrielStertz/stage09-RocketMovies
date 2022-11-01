import { Container, Form } from "./style";
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { TextArea } from '../../components/text-area';
import { MovieTag } from '../../components/movieTag';
import { Section } from '../../components/section';
import { Button } from '../../components/button';

export function NewMovie(){
  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <Link to="/"><FiArrowLeft/> Voltar</Link>
            <h1>Novo Filme</h1>
          </header>
          <div>
            <Input type='text' placeholder='Título'/>
            <Input type='text' placeholder='Sua nota (de 0 a 5)'/>
          </div>
          <TextArea placeholder='Observações'/>
          <Section title='Marcadores'>
            <div className="tags">
              <MovieTag value="React"/>
              <MovieTag placeholder='Novo marcador' isNew/>
            </div>
          </Section>
          <div className="buttons">
            <Button className = 'delete' title='Excluir filme'/>  
            <Button title='Salvar alterações'/>
          </div>
        </Form>
      </main>
    </Container>
  );
};