import Test from "./Test";
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section>Paralax</section>
      <section id="Services">Services</section>
      <section>Paralax</section>
      <section id="Portfolio">Portflolio1</section>
      <section id="Portfolio">Portflolio2</section>
      <section id="Portfolio">Portflolio3</section>
      <section id="Contact">Contact</section>
    </div>
    // <Test />
  );
};

export default App;
