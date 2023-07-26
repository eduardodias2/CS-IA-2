import { Container } from "./styles";
import { Logo } from "../../components/Logo";
import { Anchors } from "../../components/Anchors";
import { Note } from "../../components/Note";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../hooks/auth"; 
import { api } from "../../services/api";

export function Home() {
  const {signOut} = useAuth()
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  console.log(notes)
  async function getNotes() {
    const token = localStorage.getItem("@visualstudies:token")
    const response = await api("/notes" , {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    });
       
    setNotes(response.data.data);
  }

    useEffect(() => {
      getNotes()
    }, [])

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
        <Button type="button" text="Logout" onClick={() => {
          signOut()
        }}/>
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
                video={note.url}
                description={note.description}
                id={note.id}
                setNote={setNotes}
                notes={notes}
              />
            ))} 
          </div>
        </div>
      </section>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} setNotes={setNotes} />
    </Container>
  );
}
