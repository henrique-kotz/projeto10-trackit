import styled from 'styled-components';

const TextInput = styled.input`
    width: 303px;
    height: 45px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    padding: 0 11px;
    font-size: 20px;
    font-weight: 400;
    color: #AFAFAF;

    &::placeholder {
        color: #DBDBDB;
    }
`;

export default TextInput;