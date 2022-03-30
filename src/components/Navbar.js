import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Navbar() {


    return (
        <Container>
            <Link to='/habitos'>
                <p>Hábitos</p>
            </Link>

            <Link to='/hoje'>    
                <div>
                <CircularProgressbar
                    value={40}
                    text={'Hoje'}
                    strokeWidth={8}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
                </div>
            </Link>
            
            <Link to='/historico'>
                <p>Histórico</p>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #fff;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;

    p {
        font-size: 18px;
        font-weight: 400;
        line-height: 22.5px;
        color: #52B6FF;
    }
    
    div {
        width: 91px;
        height: 91px;
        margin-bottom: 31px;
    }
`;