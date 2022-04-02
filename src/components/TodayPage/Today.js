import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

import UserContext from "../../contexts/UserContext"
import PercentageContext from '../../contexts/PercentageContext';
import HabitBox from './HabitBox';

export default function Today() {
    const [todayHabits, setTodayHabits] = useState([]);

    const date = dayjs().locale('pt-br').format('dddd, DD/MM');
    const today = date.charAt(0).toUpperCase() + date.slice(1);

    const { percentage, setPercentage } = useContext(PercentageContext);
    const { user } = useContext(UserContext);
    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    };

    useEffect(loadTodayHabits, []);

    useEffect(() => {
        setPercentage(
            Math.ceil((todayHabits.filter(hab => hab.done === true).length/todayHabits.length)*100)
        );
    });

    function loadTodayHabits() {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            .then(res => setTodayHabits(res.data))
            .catch(err => console.log(err.response))
    }

    return (
        <Container>
            <TitleWrapper>
                <h3>{today}</h3>

                {percentage ? 
                    <GreenSubtitle>{percentage}% dos hábitos concluídos</GreenSubtitle>
                : <Subtitle>Nenhum hábito concluído ainda</Subtitle>}
            </TitleWrapper>

            {todayHabits.map(habit => <HabitBox key={habit.id} habit={habit} loadTodayHabits={loadTodayHabits} />)}
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

    h3 {
        font-size: 23px;
        font-weight: 400;
        line-height: 28.72px;
        color: #126BA5
    }
`;

const Subtitle = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 23px;
    color: #BABABA;
`;
const GreenSubtitle = styled(Subtitle)`
    color: #8FC549;
`;