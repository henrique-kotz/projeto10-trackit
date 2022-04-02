import { useContext } from 'react';
import styled from 'styled-components';
import { BsCheckLg } from 'react-icons/bs';

import UserContext from '../../contexts/UserContext';
import axios from 'axios';

export default function HabitBox({ habit, loadTodayHabits }) {
    const { name, currentSequence, highestSequence, done, id } = habit;

    const { user } = useContext(UserContext);
    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    };


    function toggleHabit() {
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${done ? 'uncheck' : 'check'}`, {}, config)
            .then(loadTodayHabits)
            .catch(err => alert(err.response.data.message))
    }

    return (
        <Box>
            <div>
                <h4>{name}</h4>
                <p>Sequência atual: <Current done={done}>{currentSequence} dias</Current></p>
                <p>Seu recorde: <Record best={
                    highestSequence !== 0 ? currentSequence === highestSequence : false
                }>{highestSequence} dias</Record></p>
            </div>
            <CheckButton check={done} onClick={toggleHabit}>
                <BsCheckLg size='36px' color='#fff' />    
            </CheckButton>
        </Box>
    );
}

const Box = styled.div`
    width: 340px;
    height: 94px;
    margin-bottom: 10px;
    padding: 0 13px;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        color: #666;
        margin-bottom: 7px;
    }

    p {
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        color: #666;
    }
`;

const CheckButton = styled.button`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    border: none;
    background-color: ${props => props.check ? '#8FC549' : '#EBEBEB'};
    cursor: pointer;
`;

const Current = styled.span`
    color: ${props => props.done ? '#8FC549' : '#666'};
`;
const Record = styled.span`
    color: ${props => props.best ? '#8FC549' : '#666'};
`;