import { Container } from "./styles";
import { Logo } from "../../components/Logo";
import { Anchors } from "../../components/Anchors";
import { Note } from "../../components/Note";
import { Button } from "../../components/Button";

export function Home() {
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
          <Button text="Add new notes" />
        </header>
        <div className="note-wrapper">
          <div className="notes">
            <Note noteType="Video" />
            <Note noteType="Note" />
            <Note noteType="Video" />
            <Note noteType="Note" />
            <Note noteType="Video" />
            <Note noteType="Note" />
            <Note noteType="Video" />
            <Note noteType="Note" />
            <Note noteType="Note" />
            <Note noteType="Note" />
            <Note noteType="Note" />
            <Note noteType="Note" />
          </div>


        </div>
      </section>
    </Container>
  );
}
