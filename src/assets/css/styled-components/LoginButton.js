import styled from 'styled-components';

const LoginButton = styled.button`
    width: 303px;
    height: 45px;
    border: none;
    border-radius: 5px;
    background-color: #52B6FF;

    color: #fff;
    font-size: 21px;
    font-weight: 400;

    &:hover {
        cursor: pointer;
        filter: brightness(1.1);
    }
`;

export default LoginButton;