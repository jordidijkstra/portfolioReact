import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import '../css/main.css';

export default function Main(){
    return(
        <main>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    )
}