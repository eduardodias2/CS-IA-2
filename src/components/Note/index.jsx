import { Button } from "../Button";
import { Container } from "./styles";

export function Note({ title, description, type, video }) {
  return (
    <Container>
      <div>
        <h2>{type === "video" ? "Video" : title}</h2>
        <p>{description}</p>
      </div>
      {type === "video" && (
        <Button
          text="Watch"
          onClick={() => window.open(video, "_blank").focus()}
        />
      )}
    </Container>
  );
}
