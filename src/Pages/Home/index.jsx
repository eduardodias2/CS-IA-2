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
import { EditModal } from "../../components/EditModal";

export function Home() {
  const [noNotes, setNoNotes] = useState(false);
  const { signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [sortOption, setSortOption] = useState("titleAZ");
  console.log(notes);

  async function getNotes() {
    const token = localStorage.getItem("@visualstudies:token");
    const response = await api("/notes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      }
    });
    setNotes(response.data.data);
    setNoNotes(response.data.data.length === 0);
  }

  useEffect(() => {
    getNotes();
  }, []);

  function sortNotes(a, b) {
    if (sortOption === "titleAZ") {
      return a.title && b.title ? a.title.localeCompare(b.title) : 0;
    } else if (sortOption === "titleZA") {
      return a.title && b.title ? b.title.localeCompare(a.title) : 0;
    } else if (sortOption === "type") {
      const aIsVideo = !!a.url;
      const bIsVideo = !!b.url;

      if (aIsVideo === bIsVideo) {
        return 0;
      } else if (aIsVideo) {
        return 1;
      } else {
        return -1;
      }
    }
  }

  return (
    <Container>
      <aside>
        <Logo />
        <nav>
          <ul>
            <li>
              <Anchors href="/" text="Notes" />
            </li>
          </ul>
        </nav>
        <Button
          type="button"
          text="Logout"
          onClick={() => {
            signOut();
          }}
        />
      </aside>
      <section>
        <header>
          <h1>All notes</h1>
          <div className="sorting-options">
            <label>
              Sort by:
              <select
                value={sortOption}
                onChange={e => setSortOption(e.target.value)}
              >
                <option value="titleAZ">Title A-Z</option>
                <option value="titleZA">Title Z-A</option>
                <option value="type">Type</option>
              </select>
            </label>
          </div>
          <Button text="Add note" onClick={() => setIsOpen(true)} />
        </header>
        <div className="note-wrapper">
          {noNotes ? (
              <p>You have no notes, create one now!</p>
          ) : (
            <div className="notes">
              {notes.sort(sortNotes).map((note, index) => (
                <Note
                  data={note}
                  key={index}
                  setNote={setNotes}
                  notes={notes}
                />
              ))}
            </div>
          )}
        </div>
      </section>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} setNotes={setNotes} />
      <EditModal isOpen={isEditOpen} setIsOpen={setIsEditOpen} />
    </Container>
  );
}
