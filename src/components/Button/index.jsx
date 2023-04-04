import { Container } from "./styles";

export function Button({ form, type, name, text, method }) {
  return (
    <Container form={form} type={type} name={name} formmethod={method}>
      {text}
    </Container>
  );
}
