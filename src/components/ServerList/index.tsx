import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
        <ServerButton isHome selected />

        <Separator />

        <ServerButton />
        <ServerButton hasNotifications />
        <ServerButton mentions={3} />
        <ServerButton />
        <ServerButton />
        <ServerButton mentions={43}/>
        <ServerButton />
        <ServerButton hasNotifications/>
        <ServerButton />
        <ServerButton hasNotifications/>
        <ServerButton />
        <ServerButton />
        <ServerButton mentions={12}/>
        <ServerButton />

    </Container>
  );
}

export default ServerList;