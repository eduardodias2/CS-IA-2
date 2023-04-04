import { Container } from "./styles";

export function Button({ form, type, name, text, method, ...rest }) {
  return (
    <Container form={form} type={type} name={name} formmethod={method} {...rest}>
      {text}
    </Container>
  );
}
