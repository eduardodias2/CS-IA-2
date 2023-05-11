import { Container } from "./styles";

export function Input({ label, type = "text", id, ...rest }) {
  var wordLen = 20; // Maximum word length
  function checkWordLen(obj) {
    var len = obj.value.split(/[\s]+/);
    if (len.length > wordLen) {
      alert("You cannot put more than " + wordLen + " words in this text area.");
      obj.oldValue = obj.value != obj.oldValue ? obj.value : obj.oldValue;
      obj.value = obj.oldValue ? obj.oldValue : "";
      return false;
    }
    return true;
  }

  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      {type.toLowerCase() !== "textarea" ? (
        <input type={type} required id={id} {...rest} />
      ) : (
        <textarea required onInput={(e) => checkWordLen(e.target)} {...rest} />
      )}
    </Container>
  );
}
