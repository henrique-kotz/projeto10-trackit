import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

import UserContext from '../contexts/UserContext';

import logo from '../assets/img/logo-trackit.png';
import TextInput from '../assets/css/styled-components/TextInput';
import LoginButton from '../assets/css/styled-components/LoginButton';
import TextLink from '../assets/css/styled-components/TextLink';

export default function Login() {
    const [userInputs, setUserInputs] = useState({
        email: '',
        password: ''
    });
    const [isWaiting, setIsWaiting] = useState(false);
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    function login(e) {
        e.preventDefault();
        setIsWaiting(true);

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', userInputs)
            .then(res => {
                const { name, image, token } = res.data;
                setIsWaiting(false);
                setUser({...user, name, image, token});
                navigate('/hoje');
            })
            .catch(err => {
                alert(err.response.data.message);
                setIsWaiting(false);
            })

    }

    return (
        <Container>
            <img src={logo} alt="logo-trackit" />
            <h1>Trackit</h1>

            <form onSubmit={login}>
                <TextInput type='email' placeholder='email'
                required disabled={isWaiting}
                value={userInputs.email}
                onChange={e => setUserInputs({...userInputs, email: e.target.value})}
                ></TextInput>
                <TextInput type='password' placeholder='senha'
                required disabled={isWaiting}
                value={userInputs.password}
                onChange={e => setUserInputs({...userInputs, password: e.target.value})}
                ></TextInput>

                <LoginButton type='submit' disabled={isWaiting}>
                    {isWaiting? <ThreeDots color='#fff' /> : 'Entrar'}
                </LoginButton>
            </form>

            <Link to='/cadastro'>
                <TextLink>Não tem uma conta? Cadastre-se!</TextLink>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 180px;
    }
    h1 {
        margin-bottom: 32px;
    }
    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input {
        margin-bottom: 6px;
    }
    button {
        margin-bottom: 25px;
    }
`;