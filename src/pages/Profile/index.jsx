import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Container, Form, Avatar } from "./style";
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import avatarPlaceholder from '../../assets/avatar.svg';

export function Profile(){

  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

  async function handleUpdate(){

    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });

  };

  function handleChangeAvatar(event){
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  };

  function handleBack(){
    navigate(-1);
  };

  return(
    <Container>
      <header>
        <button onClick={handleBack}>
          <FiArrowLeft/>
          Voltar
        </button>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera/>
            <input 
              id="avatar" 
              type='file'
              onChange={handleChangeAvatar}
            />
          </label>
        </Avatar>
        <Input 
          placeholder='Nome' 
          type='text' 
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input 
          placeholder='E-mail' 
          type='text' 
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder='Senha atual' 
          type='password' 
          icon={FiLock}
          onChange={e => setOldPassword(e.target.value)}
        />
        <Input 
          placeholder='Nova Senha' 
          type='password' 
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        />
        <Button title='Salvar' onClick={handleUpdate}/>
      </Form>
    </Container>
  );
};