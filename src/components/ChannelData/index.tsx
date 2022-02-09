import React, { useRef, useEffect} from "react";
import ChannelMessages, { Mention} from "../ChannelMessages";

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessages 
                    author="Boot"
                    date="14/02/2005"
                    content="Transportai um punhado de terra todos os dias e fareis uma montanha."
                    isBot
                />
                <ChannelMessages 
                    author="Kleber"
                    date="15/02/2005"
                    content="Os grandes homens estão muitas vezes solitários. Mas essa solidão é parte da sua capacidade de criar. O caráter, assim como a fotografia, desenvolve-se no escuro."
                />
                <ChannelMessages 
                    author="Pedro"
                    date="16/02/2022"
                    content={
                        <>
                            <Mention>Victor Lira</Mention>, FOCO!
                        </>
                    }
                    hasMention
                />
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessages
                        key={n}
                        author="Rocketseat"
                        date="08/02/2022"
                        content="To the next step"
                    />
                ))};
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;