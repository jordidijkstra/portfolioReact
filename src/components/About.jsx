import aboutMeImage from '../assets/bijgesneden_cirkel_afbeelding.png';
import '../css/about.css';

export default function About(){
    return(
        <section id="about">

            <div className="section-header">
                <h2>&lt;About me&gt;</h2>
            </div>

            <div className="section-body about-content">
                <div className="highlighted">
                    <div className="about-image">
                        <img src={aboutMeImage} alt="About Me Image"/>
                    </div>
                    <p className="first-alinea">Hi, I'm Jordi Dijkstra, a passionate full-stack web developer with a love for creating innovative and user-friendly digital experiences.</p>
                </div>
                <div className="non-highlighted">
                    <p className="second-alinea">I specialize in modern web technologies including HTML5, CSS3, JavaScript, and various frameworks and libraries. Whether it's crafting responsive front-end interfaces or developing robust back-end systems, I enjoy every aspect of the development process from initial concept to final deployment.</p>
                    <p className="third-alinea">When I'm not coding, you'll often find me cycling. This hobby not only keeps me active but also provides the perfect mental break that often leads to my best programming insights. I believe that maintaining a healthy work-life balance is essential for staying creative and productive in the tech industry.</p>
                </div>
            </div>

        </section>
    )
}