import { useContext } from 'react';
import styled from 'styled-components';

import UserContext from "../contexts/UserContext"

export default function Today() {
    const { user } = useContext(UserContext);
    //console.log(user);

    return (
        <Container>
            /hoje
        </Container>
    );
}

const Container = styled.div`
    margin-top: 70px;
    margin-bottom: 70px;
`;