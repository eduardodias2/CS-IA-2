import { Container } from "./styles";
import { Logo } from "../../components/Logo"
import { Anchors } from "../../components/Anchors";
import { Note } from "../../components/Note";

export function Home () {
  return (
    <Container>
      
      <aside>
      <Logo />
        <nav>
        <Anchors href="#" text="Notes" />
        <Anchors href="#" text="Settings" />
        </nav>
      </aside>
      <section>
        <div className="page-wrapper">
          <Note />
        </div>
      </section>
      
    </Container>
  )
}