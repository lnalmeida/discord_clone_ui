import React from 'react';

import ChannelButton from '../ChannelButton'
import { Container, Category, AddCategoryIcon /*, ChannelButton*/ } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName = "chat-livre" />
      <ChannelButton channelName = "trabalho" />
      <ChannelButton channelName = "front-end" />
      <ChannelButton channelName = "motos" />
      <ChannelButton channelName = "jiu-jitsu" /> 
    </Container>
    );
}

export default ChannelList;