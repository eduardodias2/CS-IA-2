import { api } from "../../services/api";
import { Button } from "../Button";
import { Container, HeaderNote } from "./styles";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

export function Note({ title, description, type, video, id, setNote, notes }) {
  async function handleDelete() {
    await api.delete(`/notes/${id}`);
    setNote(notes.filter(note => note.id != id));
  }
  async function handleUpdate() {
    await api.put(`/notes/${id}`);
    setNote();
  }
  return (
    <Container>
      <HeaderNote>
        <div>
          <h2>{type === "video" ? "Video" : title}</h2>
          <p>{description}</p>
        </div>
        <div>
          <button onClick={handleUpdate}>
            <AiOutlineEdit />
          </button>
          <button onClick={handleDelete}>
            <AiOutlineDelete />
          </button>
        </div>
      </HeaderNote>
      {video && (
        <Button
          text="Watch"
          onClick={() => window.open(video, "_blank").focus()}
        />
      )}
    </Container>
  );
}
