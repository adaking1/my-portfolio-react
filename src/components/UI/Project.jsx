import { Link } from "react-router-dom"


export default function ProjectCard({ project }) {
    return (
        <ul id="projects">
                {project.map((proj) => (
                    <div key={proj.id} className="card text-bg-dark project">
                        <li>
                            <a href={proj.link}>
                                <img src={proj.image} className="card-img" alt={proj.altText}></img>
                            </a>
                                <div className="card-img-overlay">
                                <h5 className="card-title">{proj.title}</h5>
                                <p className="card-text">MERN Stack</p>
                                </div>
                            <Link to={proj.github}>Github Link</Link>
                        </li>
                    </div>
                ))
                }
            
        </ul>
        
        
    )
    
}