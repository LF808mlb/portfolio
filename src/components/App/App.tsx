import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { Projects } from "../Projects/Projects";
import { Skills } from "../Skills/Skills";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Skills />

        <Projects />

        <section id="contact" style={{ minHeight: "60vh", padding: "2rem" }}>
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}
