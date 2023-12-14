import { Link } from "react-router-dom"


export default function ProjectCard({ project }) {
    
    return (
        <ul id="projects">
                {project.map((proj) => (
                    <div key={proj.id} className="card text-bg-dark project">
                        <li>
                            <img src={proj.image} className="card-img" alt={proj.altText}></img>
                            <div className="card-img-overlay proj-links">
                                <Link to={proj.link} target="_blank" rel="noreferrer">
                                    <h5 className="card-title">{proj.title}</h5>
                                </Link>
                                <a href={proj.github} className="icon" id="github" target="_blank" rel="noreferrer"><i className="fa-brands fa-github fa-2xl"></i></a>
                            </div>
                            
                        </li>
                    </div>
                ))
                }
            
        </ul>
        
        
    )
    
}