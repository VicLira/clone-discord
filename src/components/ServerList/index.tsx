import React from "react";

import { Container } from "./styles";

import ServerButton from "../ServerButton";

import { Separator } from "./styles";

const ServerList: React.FC = () => (
    <Container>
        <ServerButton isHome />


        <Separator />

        <ServerButton />
        <ServerButton hasNotifications />
        <ServerButton mentions={3} />
        <ServerButton />
        <ServerButton />
        <ServerButton />
        <ServerButton hasNotifications />
        <ServerButton />
        <ServerButton />
        <ServerButton mentions={72} />
        <ServerButton />
        <ServerButton />
    </Container>
);

export default ServerList;