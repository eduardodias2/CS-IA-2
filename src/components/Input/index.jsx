import { Container } from "./styles";

export function Input({ label, type = "text", id, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      {type.toLowerCase() !== "textarea" ? (
        <input type={type} required id={id} {...rest} />
      ) : (
        <textarea required {...rest}/>
      )}
    </Container>
  );
}
