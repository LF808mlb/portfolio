import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { Projects } from "../Projects/Projects";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section id="skills" style={{ minHeight: "60vh", padding: "2rem" }}>
          <h2>Skills</h2>
        </section>

        <Projects />

        <section id="contact" style={{ minHeight: "60vh", padding: "2rem" }}>
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}
