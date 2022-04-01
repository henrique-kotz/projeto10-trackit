import { useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs';

import UserContext from '../../contexts/UserContext';

export default function HabitItem({ habit, setHabits }) {
    const { name, days, id } = habit;
    const weekdays = [
        {text: 'D'},
        {text: 'S'},
        {text: 'T'},
        {text: 'Q'},
        {text: 'Q'},
        {text: 'S'},
        {text: 'S'}
    ];

    const { user } = useContext(UserContext);
    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }; 

    for (let i=0; i<weekdays.length; i++) {
        for (let j=0; j<days.length; j++) {
            if (i === days[j]) {
                weekdays[i].selected = true;
            }
        }
    }

    function deleteHabit(id) {
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
            .then(res => {
                axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
                    .then(res => setHabits(res.data))
                    .catch(err => console.log(err.response))
            })
            .catch(err => alert(err.response.data.message))
    }

    return (
        <HabitBox>
            <p>{name}</p>
            <span onClick={() => deleteHabit(id)}>
                <BsTrash color='#666' />
            </span>
            <WeekdayWrapper>
                {weekdays.map((day, i) => <WeekdayIcon key={i} selected={day.selected}>{day.text}</WeekdayIcon>)}
            </WeekdayWrapper>
        </HabitBox>
    );
}

const HabitBox = styled.li`
    width: 100%;
    height: 91px;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    p {
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        color: #666;
    }

    span {
        position: absolute;
        top: 11px;
        right: 10px;
        cursor: pointer;
    }
`;

const WeekdayWrapper = styled.div`
    display: flex;
`;

const WeekdayIcon = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid ${props => props.selected ? '#CFCFCF' : '#D4D4D4'};
    border-radius: 5px;
    margin-right: 4px;
    background-color: ${props => props.selected ? '#CFCFCF' : '#fff'};

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props => props.selected ? '#fff' : '#DBDBDB'};
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
`;