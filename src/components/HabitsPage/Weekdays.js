import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Weekdays({ habit, setHabit, isWaiting }) {
    const [weekdays, setWeekdays] = useState([
        {text: 'D'},
        {text: 'S'},
        {text: 'T'},
        {text: 'Q'},
        {text: 'Q'},
        {text: 'S'},
        {text: 'S'}
    ]);
    
    useEffect(() => {
        for (let i=0; i<weekdays.length; i++) {
            for (let j=0; j<habit.days.length; j++) {
                if (i === habit.days[j]) {
                    weekdays[i].selected = true;
                    setWeekdays([...weekdays]);
                }
            }
        }
    }, []);

    function selectDay(day, index) {
        if (day.selected) {
            day.selected = false;
            setWeekdays([...weekdays]);
            setHabit({...habit, days: [...habit.days].filter(elem => elem !== index)});
        } else {
            day.selected = true;
            setWeekdays([...weekdays]);
            setHabit({...habit, days: [...habit.days, index]});
        }
    }

    return (
        <WeekdayWrapper>
            {weekdays.map((day, i) => 
                <WeekdayButton key={i} selected={day.selected}
                    type='button' disabled={isWaiting}
                    onClick={() => selectDay(day, i)}>
                    {day.text}
                </WeekdayButton>)}
        </WeekdayWrapper>
    );
}

const WeekdayWrapper = styled.div`
    display: flex;
`;

const WeekdayButton = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid ${props => props.selected ? '#CFCFCF' : '#D4D4D4'};
    border-radius: 5px;
    margin-right: 4px;
    background-color: ${props => props.selected ? '#CFCFCF' : '#fff'};

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    color: ${props => props.selected ? '#fff' : '#DBDBDB'};
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
`;