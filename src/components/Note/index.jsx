import { api } from "../../services/api";
import { Button } from "../Button";
import { Container, HeaderNote } from "./styles";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import { Modal } from "../Modal";

export function Note({ title, description, type, video, id, setNote, notes }) {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedVideo, setUpdatedVideo] = useState(video);
  const [isOpen, setIsOpen] = useState(false);

  async function handleDelete() {
    await api.delete(`/notes/${id}`);
    setNote(notes.filter(note => note.id != id));
  }
  async function handleUpdate() {
    try {
      await api.put(`/notes/${id}`, {
        title: updatedTitle,
        description: updatedDescription,
        url: updatedVideo,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleButtonClick = () => {
    handleUpdate();
    setIsOpen(true);
  };

  return (
    <Container>
      <HeaderNote>
        <div>
          <h2>{type === "video" ? "Video" : title}</h2>
          <p>{description}</p>
        </div>
        <div>
          <button onClick={handleButtonClick}>
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
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSave={handleUpdate}
      />
    </Container>
  );
}
