import * as S from "./styles";
import { Dialog } from '@headlessui/react'
import { Input } from "../Input";
import { Button } from "../Button";


export function Modal ({isOpen, setIsOpen}) {
    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <S.Overlay>
      <S.Panel>
        <S.Title>Create a new note</S.Title>
        <Dialog.Description>
          <Input type="radio" text="Note" label="Note" id="note-radio"/>
          <Input type="radio" text="Video" label="Video" id="video-radio"/>
        </Dialog.Description>

        <S.Button text="Create note"onClick={() => setIsOpen(false)}/>
        <S.Button text="Cancel" onClick={() => setIsOpen(false)}/>
      </S.Panel>
      </S.Overlay>
      
    </Dialog>
    )
}