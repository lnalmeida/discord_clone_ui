import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        { Array.from(Array(13).keys()).map(n => (
          <ChannelMessage
          author='Alguém'
          date='28/07/2020'
          content='Alguma mensagem.'
        />
        ))}
        <ChannelMessage
          author='Luiz Nunes'
          date='28/07/2020'
          content='O mundo parou, mas eu sigo em frente.'
        />

        <ChannelMessage
          author='Taís Annido Nunes'
          date='28/07/2020'
          content={
            <>
              <Mention>@Luiz Nunes</Mention>, passa no mercado e traz pão.
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type = "text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>       
    </Container>
    );
}

export default ChannelData;