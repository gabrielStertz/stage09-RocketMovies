import { useState } from "react";
import { Container, Form } from "./style";
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";

import { api } from "../../services/api";

import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { TextArea } from '../../components/text-area';
import { MovieTag } from '../../components/movieTag';
import { Section } from '../../components/section';
import { Button } from '../../components/button';

export function NewMovie(){

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  };

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  };

  async function handleNewNote(){

    if(!title){
      return alert("Digite um título para a nota");
    };

    if(!rating){
      return alert("Digite sua nota para o filme (de 0 à 5) ");
    };

    if(rating < 0){
      return alert("Sua nota precisa ser entre 0 e 5");
    };

    if(rating > 5){
      return alert("Sua nota precisa ser entre 0 e 5");
    };

    if(!description){
      return alert("Digite suas observações sobre o filme");
    };

    if(newTag){
      return alert("Você deixou uma tag sem adicionar!");
    };

    await api.post("/movie_notes", {
      title,
      description,
      rating,
      tags
    });

    alert("Nota criada com sucesso");
    navigate("/");
  };

  function handleBack(){
    navigate("/");
  };

  function handleRemoveMovie(){
    setTitle("");
    setRating("");
    setDescription("");
    setTags([]);
  };

  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <button onClick={handleBack}><FiArrowLeft/> Voltar</button>
            <h1>Novo Filme</h1>
          </header>
          <div>
            <Input 
              type='text' 
              placeholder='Título'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Input 
              type='text' 
              placeholder='Sua nota (de 0 a 5)'
              value={rating}
              onChange={e => setRating(e.target.value)}
            />
          </div>
          <TextArea 
            placeholder='Observações'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <Section title='Marcadores'>
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <MovieTag
                    key={String(index)} 
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              <MovieTag 
                isNew
                placeholder='Novo Marcador' 
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <div className="buttons">
            <Button className = 'delete' title='Excluir filme' onClick={handleRemoveMovie}/>  
            <Button title='Salvar alterações' onClick={handleNewNote}/>
          </div>
        </Form>
      </main>
    </Container>
  );
};