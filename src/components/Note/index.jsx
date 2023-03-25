import { Container } from "./styles";

export function Note ({noteType}) {
    return (
        <Container>
            <h2>{noteType}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim dolore alias vitae quis mollitia, hic qui eveniet harum rerum aliquam autem assumenda ducimus magnam vero possimus similique! Minus, corrupti nulla!</p>
        </Container>
    )
}