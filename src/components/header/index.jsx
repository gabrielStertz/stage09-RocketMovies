import { Container, Profile, Logout, Image } from "./style";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from '../../assets/avatar.svg';

import { api } from '../../services/api';

import { Input } from '../../components/input';

export function Header({onChange}){

  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut(){
    signOut();
    navigate("/");
  };

  return(
    <Container >
      <h1>RocketMovies</h1>
      <Input placeholder='Pesquisar pelo título' onChange={onChange}/>
      <Profile>
        <div>
          <strong>{user.name}</strong>
          <Logout onClick={handleSignOut}>
            Sair
          </Logout>
        </div>
        <Image to='/profile'>
          <img src={avatarUrl} alt="Foto do Usuário" />
        </Image>
      </Profile>

      

    </Container>
  )
}