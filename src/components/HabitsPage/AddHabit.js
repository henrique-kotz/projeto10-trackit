import { useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import UserContext from '../../contexts/UserContext';
import HabitContext from '../../contexts/HabitContext';
import Weekdays from './Weekdays';

import TextInput from '../../assets/css/styled-components/TextInput';

export default function AddHabit({ closeForm }) {
    const { habit, setHabit } = useContext(HabitContext);
    const { user } = useContext(UserContext);
    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    };

    function submitHabit(e) {
        e.preventDefault();
    }

    return (
        <FormWrapper>
            <form onSubmit={submitHabit}>
                <div>
                    <TextInput type='text' placeholder='nome do hábito' 
                        required value={habit.name}
                        onChange={e => setHabit({...habit, name: e.target.value})}
                    />
                    <Weekdays habit={habit} setHabit={setHabit} />
                </div>
                
                <div>
                    <CancelButton type='button' onClick={closeForm}>Cancelar</CancelButton>
                    <SaveButton type='submit'>Salvar</SaveButton>
                </div>
            </form>
        </FormWrapper>
    );
}


const FormWrapper = styled.div`
    width: 100%;
    height: 180px;
    margin-bottom: 29px;
    padding: 18px;
    border-radius: 5px;

    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        input {
            margin-bottom: 8px;
        }

        div:last-child {
            align-self: flex-end;
        }
    }

    background-color: #fff;
`;

const SaveButton = styled.button`
    width: 84px;
    height: 35px;
    border: none;
    border-radius: 4.64px;
    background-color: #52B6FF;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
        filter: brightness(1.1);
    }
`;

const CancelButton = styled(SaveButton)`
    background-color: #fff;
    color: #52B6FF;
`;