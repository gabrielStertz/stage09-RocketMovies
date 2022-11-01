import { Container, Profile, Logout, Image } from "./style";
import { Input } from '../../components/input';

export function Header(){
  return(
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder='Pesquisar pelo título'/>
      <Profile>
        <div>
          <strong>Gabriel Stertz</strong>
          <Logout to=''>
            Sair
          </Logout>
        </div>
        <Image to='/profile'>
          <img src="https://github.com/gabrielStertz.png" alt="Foto do Usuário" />
        </Image>
      </Profile>

      

    </Container>
  )
}