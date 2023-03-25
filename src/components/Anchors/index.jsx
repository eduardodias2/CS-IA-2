import { Container } from "./styles";

export function Anchors ({href, text}) {
    return (
        <Container>
        <button>
        <a href={href}>{text}</a>
        </button>
        </Container>
    )
}