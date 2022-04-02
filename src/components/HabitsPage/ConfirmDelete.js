import styled from 'styled-components';

export default function ConfirmDelete({ setShowConfirm, deleteHabit }) {
    return (
        <Container>
            <Box>
                <p>Você realmente deseja apagar o hábito?</p>
                <div>
                    <CancelButton onClick={() => setShowConfirm(false)}>Não</CancelButton>
                    <ConfirmButton onClick={deleteHabit}>Sim</ConfirmButton>
                </div>
            </Box>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
`;

const Box = styled.div`
    width: 300px;
    height: 120px;
    padding: 14px;
    border-radius: 5px;
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #fff;

    p {
        font-size: 18px;
        font-weight: 400;
        line-height: 22.5px;
        color: #666;
    }
    div {
        align-self: flex-end;
    }
`;

const ConfirmButton = styled.button`
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

const CancelButton = styled(ConfirmButton)`
    background-color: #fff;
    color: #52B6FF;
`;