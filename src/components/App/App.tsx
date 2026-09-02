import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { Projects } from "../Projects/Projects";
import { Skills } from "../Skills/Skills";
import Contact from "../Contact/Contact";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Projects />

        <Skills />

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
