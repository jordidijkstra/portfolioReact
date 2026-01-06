import '../css/projects.css'
import { projects } from '../data/projects.js'

export default function Projects(){
    const projectItems = projects.map((project, index) => {
        const techItems = project.tech.map((techItem, techIndex) => {
            return (
                <span key={techIndex} className={`tech-badge ${techItem.class}`}><i className={techItem.icon}></i></span>
            )
        })
        return (
            <div 
                key={index} 
                className={`${project.className} project-item`} 
                data-url={project.url} 
            >
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech">
                        {techItems}
                    </div>
            </div>
        )
    })
            
    return(
        <section id="projects">

            <div className="section-header">
                <h2>&lt;Projects&gt;</h2>
            </div>

            <div className="section-body projects-list">
                {projectItems}
            </div>

        </section>
    )
}