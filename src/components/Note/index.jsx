import { api } from "../../services/api";
import { Button } from "../Button";
import { Container, HeaderNote } from "./styles";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import { EditModal } from "../EditModal";

export function Note({ setNote, notes, data }) {
  const [isOpen, setIsOpen] = useState(false);

  async function handleDelete() {
    await api.delete(`/notes/${data.id}`);
    setNote(notes.filter(note => note.id != data.id));
  }

  const handleButtonClick = () => {
    setIsOpen(true);
  };
  console.log(data);
  return (
    <Container>
      <HeaderNote>
        <div>
          <h2>{data.type === "video" ? "Video" : data.title}</h2>
          <p>{data.description}</p>
        </div>
        <div>
          <button onClick={handleButtonClick}>
            <div className="iconWrapper">
              <AiOutlineEdit />
            </div>
          </button>
          <button onClick={handleDelete}>
            <div className="iconWrapper">
              <AiOutlineDelete />
            </div>
          </button>
        </div>
      </HeaderNote>
      {data.url && (
        <Button
          text="Watch"
          onClick={() => window.open(data.url, "_blank").focus()}
        />
      )}
      <EditModal isOpen={isOpen} setIsOpen={setIsOpen} id={data.id} />
    </Container>
  );
}
