import * as S from "./styles";
import { Dialog } from "@headlessui/react";
import { Input } from "../Input";
import { Button } from "../Button";
import { Switch } from "../Switch";
import { useState } from "react";

export function Modal({ isOpen, setIsOpen, setNotes }) {
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("note");

  async function handleCreateNote() {
    const note = { description, type };
    if (type === "note") {
      note.title = title;
    } else {
      note.video = videoUrl;
    }
    const token = localStorage.getItem("@visualstudies:token");
    const response = await fetch("http://localhost:3333/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },

      body: JSON.stringify({
        title: title,
        url: videoUrl,
        description: description
      })
    });
    setNotes(prev => [...prev, note]);
    setIsOpen(false);
    setTitle("");
    setDescription("");
    setType("note");
    setVideoUrl("");
    console.log(await response.json());
  }
  
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <S.Overlay>
        <S.Panel>
          <S.Title>Create a new note</S.Title>
          <Dialog.Description>
            <form onSubmit={handleCreateNote}>
              <S.InputContainer>
                <Switch
                  isChecked={type === "video"}
                  onChange={isChecked => setType(isChecked ? "video" : "note")}
                />
              </S.InputContainer>
              <S.InputTextContainer>
                <Input
                  label="Title"
                  placeholder="Title of the note"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />{" "}
                {type === "video" && (
                  <Input
                    label="Video URL"
                    placeholder="Copy and paste the video's URL"
                    value={videoUrl}
                    onChange={e => setVideoUrl(e.target.value)}
                  />
                )}
                <Input
                  type="textarea"
                  label="Description"
                  placeholder="Description of the note"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </S.InputTextContainer>

              <S.ButtonContainer>
                <Button text="Create note" type="submit" />
                <Button text="Cancel" onClick={() => setIsOpen(false)} />
              </S.ButtonContainer>
            </form>
          </Dialog.Description>
        </S.Panel>
      </S.Overlay>
    </Dialog>
  );
}
