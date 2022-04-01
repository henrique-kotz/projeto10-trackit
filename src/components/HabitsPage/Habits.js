import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import UserContext from '../../contexts/UserContext';
import AddHabit from './AddHabit';

export default function Habits() {
    const [habits, setHabits] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const { user } = useContext(UserContext);
    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }; 

    // useEffect(() => {
    //     axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
    //         .then(res => setHabits(res.data))
    //         .catch(err => console.log(err.response))
    // }, []);

    return (
        <Container>
            <TitleWrapper>
                <h3>Meus Hábitos</h3>
                <PlusHabit onClick={() => setShowForm(true)}>+</PlusHabit>
            </TitleWrapper>

            {showForm ? <AddHabit closeForm={() => setShowForm(false)} /> : ''}

            {habits.length === 0 ? 
            <Message>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </Message>
            : ''}
        </Container>
    );
}

const Container = styled.div`
    min-height: calc(100vh - 140px);
    margin: 70px 0;
    padding: 0 18px;
    border: 1px solid transparent;
    background-color: #f2f2f2;
`;

const TitleWrapper = styled.div`
    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-size: 23px;
        font-weight: 400;
        line-height: 28.72px;
        color: #126BA5
    }
`;

const PlusHabit = styled.button`
    width: 40px;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: #52B6FF;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;
    font-size: 27px;
    font-weight: 400;

    &:hover {
        filter: brightness(1.1);
    }
`;

const Message = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 22.5px;
    color: #666;
`;