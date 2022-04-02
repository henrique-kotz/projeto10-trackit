import styled from 'styled-components';

export default function History() {
    return (
        <Container>
            <TitleWrapper>
                <h3>Histórico</h3>
            </TitleWrapper>
            <Message>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </Message>
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

const Message = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 22.5px;
    color: #666;
`;