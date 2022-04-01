import { useState, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

import UserContext from '../../contexts/UserContext';
import HabitContext from '../../contexts/HabitContext';
import Weekdays from './Weekdays';

import TextInput from '../../assets/css/styled-components/TextInput';

export default function AddHabit({ closeForm, setHabits }) {
    const { habit, setHabit } = useContext(HabitContext);
    const { user } = useContext(UserContext);
    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    };

    const [isWaiting, setIsWaiting] = useState(false);

    function submitHabit(e) {
        e.preventDefault();
        if (habit.days.length === 0) return alert('Selecione pelo menos um dia da semana!');
        setIsWaiting(true);

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', habit, config)
            .then(res => {
                console.log(res.data);
                setIsWaiting(false);
                setHabit({
                    name: '',
                    days: []
                });
                closeForm();

                axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
                    .then(res => setHabits(res.data))
                    .catch(err => console.log(err.response))
            })
            .catch(err => {
                alert(err.response.data.messaage);
                setIsWaiting(false);
            })
    }

    return (
        <FormWrapper>
            <form onSubmit={submitHabit}>
                <div>
                    <TextInput type='text' placeholder='nome do hábito' 
                        required value={habit.name} disabled={isWaiting}
                        onChange={e => setHabit({...habit, name: e.target.value})}
                    />
                    <Weekdays habit={habit} setHabit={setHabit} isWaiting={isWaiting} />
                </div>
                
                <div>
                    <CancelButton type='button' onClick={closeForm} disabled={isWaiting}>
                        Cancelar    
                    </CancelButton>
                    <SaveButton type='submit' disabled={isWaiting}>
                        {isWaiting ? <ThreeDots width='84' height='15' color='#fff' /> : 'Salvar'}
                    </SaveButton>
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
            display: flex;
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

    opacity: ${props => props.disabled ? '0.7' : '1'};
`;

const CancelButton = styled(SaveButton)`
    background-color: #fff;
    color: #52B6FF;
`;