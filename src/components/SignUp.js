import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

import logo from '../assets/img/logo-trackit.png';
import TextInput from '../assets/css/styled-components/TextInput';
import LoginButton from '../assets/css/styled-components/LoginButton';
import TextLink from '../assets/css/styled-components/TextLink';

export default function SignUp() {
    const [userInputs, setUserInputs] = useState({
        email: '',
        name: '',
        image: '',
        password: ''
    });
    const [isWaiting, setIsWaiting] = useState(false);
    const navigate = useNavigate();

    function validateImage(string) {
        const regexURL = /^(http(s)?:\/\/)|(www\.)/;
        const regexImage = /\.(jpeg|jpg|png|gif|svg)/;
        const isValid = regexURL.test(string) && regexImage.test(string);
    
        return isValid;
    }

    function signUp(e) {
        e.preventDefault();
        if(!validateImage(userInputs.image)) return alert('Insira uma imagem válida!');
        setIsWaiting(true);
        
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', userInputs)
            .then(res => {
                setIsWaiting(false);
                navigate('/');
            })
            .catch(err => {
                alert(err.response.data.message);
                setIsWaiting(false);
            })
    }

    return (
        <Container>
            <img src={logo} alt="logo-trackit" />
            <h1>TrackIt</h1>

            <form onSubmit={signUp}>
                <TextInput type='email' placeholder='email'
                    required disabled={isWaiting}
                    value={userInputs.email}
                    onChange={(e) => setUserInputs({...userInputs, email: e.target.value})}
                    ></TextInput>
                <TextInput type='password' placeholder='senha'
                    required disabled={isWaiting}
                    value={userInputs.password}
                    onChange={(e) => setUserInputs({...userInputs, password: e.target.value})}
                    ></TextInput>
                <TextInput type='text' placeholder='nome'
                    required disabled={isWaiting}
                    value={userInputs.name}
                    onChange={(e) => setUserInputs({...userInputs, name: e.target.value})}
                    ></TextInput>
                <TextInput type='text' placeholder='foto'
                    required disabled={isWaiting}
                    value={userInputs.image}
                    onChange={(e) => setUserInputs({...userInputs, image: e.target.value})}
                    ></TextInput>

                <LoginButton type='submit' disabled={isWaiting}>
                    {isWaiting? <ThreeDots color='#fff'/>: 'Cadastrar'}
                </LoginButton>
            </form>

            <Link to='/'>
                <TextLink>Já tem uma conta? Faça login!</TextLink>
            </Link>
        </Container>
    )
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