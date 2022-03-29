import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/img/logo-trackit.png';
import TextInput from '../assets/css/styled-components/TextInput';
import LoginButton from '../assets/css/styled-components/LoginButton';
import TextLink from '../assets/css/styled-components/TextLink';

export default function SignUp() {


    return (
        <Container>
            <img src={logo} alt="logo-trackit" />
            <h1>TrackIt</h1>

            <form>
                <TextInput type='email' placeholder='email'></TextInput>
                <TextInput type='password' placeholder='senha'></TextInput>
                <TextInput type='text' placeholder='nome'></TextInput>
                <TextInput type='text' placeholder='foto'></TextInput>

                <LoginButton>Cadastrar</LoginButton>
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