import { Link } from "react-router-dom"


export default function ProjectCard({ project }) {
    
    return (
        <ul id="projects">
                {project.map((proj) => (
                    <div key={proj.id} className="card text-bg-dark project">
                        <li>
                                <img src={proj.image} className="card-img" alt={proj.altText}></img>
                                <div className="card-img-overlay">
                                <Link to={proj.link}>
                                <h5 className="card-title">{proj.title}</h5>
                                <p className="card-text">MERN Stack</p>
                                </Link>
                                <a href={proj.github}>Github Link</a>
                                </div>
                            
                        </li>
                    </div>
                ))
                }
            
        </ul>
        
        
    )
    
}