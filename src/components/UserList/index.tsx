import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot
}) => {
  return (
    <User>
      <Avatar className= {isBot ? "bot" : ''} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
    );
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname = "Luiz Nunes" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Rafael Decothé Xavier" isBot />
      <UserRow nickname="Eric Nunes" />
      <UserRow nickname="Giseli Nunes" />
      <UserRow nickname="Arthur Nunes" />
      <UserRow nickname="Nícolas Annido Nunes" />
      <UserRow nickname="Alana Annido Nunes" isBot />
      <UserRow nickname="Taís Annido Nunes" />
      <UserRow nickname="Júlia Annido Nunes" />
      <UserRow nickname="Ramon Veloso" />
      <UserRow nickname="Neidimar Sanches Nunes" isBot />
      <UserRow nickname="Flávia Ludgero Sanches" />
      <UserRow nickname="Diogo Fox" isBot />
      <UserRow nickname="Kréber" />
      <UserRow nickname="Cracuda Duka Ralho" />
      <UserRow nickname="Rafael Decothé Xavier" isBot />
      <UserRow nickname="Eric Nunes" />
      <UserRow nickname="Giseli Nunes" />
      <UserRow nickname="Arthur Nunes" />
      <UserRow nickname="Nícolas Annido Nunes" />
      <UserRow nickname="Alana Annido Nunes" isBot />
      <UserRow nickname="Taís Annido Nunes" />
      <UserRow nickname="Júlia Annido Nunes" />
      <UserRow nickname="Ramon Veloso" />
      <UserRow nickname="Neidimar Sanches Nunes" isBot />
      <UserRow nickname="Flávia Ludgero Sanches" />
      <UserRow nickname="Diogo Fox" isBot />
      <UserRow nickname="Kréber" />
      <UserRow nickname = "Cracuda Duka Ralho" />
    </Container>
    );
}

export default UserList;