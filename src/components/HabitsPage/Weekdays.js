import styled from 'styled-components';

export default function Weekdays() {
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (
        <WeekdayWrapper>
            {weekdays.map((day, i) => 
                <WeekdayButton key={i} selected={false}>
                    {day}
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

    color: ${props => props.selected ? '#fff' : '#DBDBDB'};
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
`;