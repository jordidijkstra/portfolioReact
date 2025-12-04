import '../css/contact.css'
import Footer from './Footer';

export default function Contact(){
    return(
        <section id="contact">

            <div className="section-header">
                <h2>&lt;Contact&gt;</h2>
            </div>
            
            <div className="section-body contact-container">
                <p>Interested in working together? Let's get in touch! Feel free to reach out via email or connect with me on social media.</p>
                <div className="social-links">
                    <h3>Connect with me</h3>
                    <div className="social-icons">
                        <a href="mailto:dijkstrajordi@gmail.com" className="social-icon">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a href="https://linkedin.com/in/jordi-dijkstra" target="_blank" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/jordidijkstra" target="_blank" className="social-icon">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />

        </section>
    )
}