import { Button } from "../Button";
import { Input } from "../Input";
import { Switch } from "../Switch";
import * as S from "./styles";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { api } from "../../services/api";

export function EditModal({isOpen, setIsOpen, editNotes, id }) {
  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("note");

  async function handleUpdate() {
    try {
      await api.put(`/notes/${id}`, {
        title: title,
        description: description,
        url: videoUrl,
      }); 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <S.Overlay>
        <S.Panel>
          <S.Title>Edit Note</S.Title>
          <Dialog.Description>
            <form action="">
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
                <Button text="Save Changes" type="submit" onClick={handleUpdate}/>
                <Button text="Cancel" onClick={() => setIsOpen(false)}/>
              </S.ButtonContainer>
            </form>
          </Dialog.Description>
        </S.Panel>
      </S.Overlay>
    </Dialog>
  );
}
