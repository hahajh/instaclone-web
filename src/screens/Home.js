import styled from "styled-components";
import { isLoggeedInVar } from "../apollo";

const Title = styled.h1`
    color: ${(props) => props.theme.fontColor};
`;

const Container = styled.div``;

function Home() {
    return (
        <Container>
            <Title>Home</Title>
            <button onClick={() => isLoggeedInVar(false)}>Log out now!</button>
        </Container>
    );
}

export default Home;