import { Container } from "./styles";

export function Button ({form, type, name, text}) {
    return (
        <Container>
            <button form={form} type={type} name={name}>{text}</button>
        </Container>
    )
}