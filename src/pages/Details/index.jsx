import { useState, useEffect } from 'react';
import { Container, Content } from './style';
import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from '../../assets/avatar.svg'

import { StarNote } from '../../components/StarNotes';
import { Header } from '../../components/header';
import { Tag } from '../../components/tag';

export function Details(){

  const [data, setData] = useState(null);

  const { user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  };

  async function handleRemoveNote(){
    const confirm = window.confirm("Deseja realmente remover a nota?");
    
    if(confirm){
      await api.delete(`/movie_notes/${params.id}`);
      navigate(-1);
    };
  };

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/movie_notes/${params.id}`);
      setData(response.data);
    };
    fetchNote();
    console.log(data)
  }, []);
  
  return(
    <Container>
      <Header/>

      {
        data &&
        <main>
          <Content>
            <div className="buttons">
              <button onClick={handleBack}><FiArrowLeft/> Voltar</button>
              <button onClick={handleRemoveNote}>Excluir Nota</button>
            </div>
            <div className="title">
              <h1>{data.title}</h1>
              <StarNote stars={data.rating}/>
            </div>
            <div className="movie-info">
              <img src={avatarUrl} alt="Foto do usuário" />
              <p>Por {user.name}</p>
              <FiClock/>
              <p>{data.created_at}</p>
            </div>
            <div className="tags">
              {
                data.movieTags.map(tag => (
                  <Tag 
                    key={tag.id}
                    title={tag.name}
                  />
                ))
             }
            </div>
            <p>{data.description}</p>
        
          </Content>
        </main>
      }
    </Container>
  );
};