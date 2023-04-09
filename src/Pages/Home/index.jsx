import { Container } from "./styles";
import { Logo } from "../../components/Logo";
import { Anchors } from "../../components/Anchors";
import { Note } from "../../components/Note";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { useState } from "react";

export function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  return (
    <Container>
      <aside>
        <Logo />
        <nav>
          <ul>
            <li>
              <Anchors href="#" text="Notes" />
            </li>
            <li>
              <Anchors href="#" text="Settings" />
            </li>
          </ul>
        </nav>
        <Button type="submit" text="Logout" />
      </aside>
      <section>
        <header>
          <h1>All notes</h1>
          <Button text="Add note" onClick={() => setIsOpen(true)} />
        </header>
        <div className="note-wrapper">
          <div className="notes">
            {notes.map((note, index) => (
              <Note
                key={index}
                title={note.title}
                type= {note.type}
                video= {note.video}
                description={note.description}
              />
            ))}
          </div>
        </div>
      </section>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} setNotes={setNotes}/>
    </Container>
  );
}
