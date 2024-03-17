import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/skillls/Skills";
import Projects from "./components/projects/Projects";
import ClientConact from "./components/ClientsContact/ClientConact";
import Footer from "./components/footer/Footer";

function App() {
  return (
   <div className="App">
    <Navbar />
    <Intro />
    <Skills />
    <Projects />
    <ClientConact />
    <Footer />
   </div>
  );
}

export default App;
