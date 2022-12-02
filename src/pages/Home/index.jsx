import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Content, AddMovie } from './style';

import { FiPlus } from 'react-icons/fi';

import { api } from '../../services/api';

import { Header } from '../../components/header';
import { MovieCard } from '../../components/movie-card';

export function Home(){

  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id){
    navigate(`/details/${id}`)
  };

  function handleNewMovie(){
    navigate("/new")
  };


  useEffect(() => {
    
    async function fetchNotes(){
      const response = await api.get(`/movie_notes?title=${search}`);
      setNotes(response.data);
    };

    fetchNotes();

  }, [search]);

  return(
    <Container>
      <Header onChange={e => setSearch(e.target.value)}/>

      <Content>
        <div>
          <h1>Meus Filmes</h1>
          <AddMovie onClick={handleNewMovie}>
            <FiPlus/>
            Adicionar filme
          </AddMovie>
        </div>
        {
          notes.map(note => (
            <MovieCard 
              key={String(note.id)}
              data={note}
              onClick={() => handleDetails(note.id)}
            />
          ))
        }
      </Content>
    </Container>
  );
};