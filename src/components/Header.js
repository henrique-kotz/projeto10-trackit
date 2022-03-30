import { useContext } from 'react';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';

export default function Header() {
    const { user } = useContext(UserContext);

    return (
        <Container>
            <h2>Trackit</h2>
            <img src={user.image} alt='user-profile' />
        </Container>
    )
}

const Container = styled.header`
    width: 100%;
    height: 70px;
    padding: 0 18px;
    background-color: #126BA5;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;

    h2 {
        font-family: 'Playball', cursive;
        font-size: 39px;
        font-weight: 400;
        line-height: 49px;
        color: #fff
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`;