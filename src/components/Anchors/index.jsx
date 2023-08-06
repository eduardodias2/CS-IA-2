import { Container } from "./styles";

export function Anchors ({href, text}) {
    return (
        <Container>
        <a href={href}>{text}</a>
        </Container>
    )
}