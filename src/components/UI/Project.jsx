import { Link } from "react-router-dom"


export default function ProjectCard({ project }) {
    return (
        <ul id="projects">
                {project.map((proj) => (
                    <div key={proj.id} className="card text-bg-dark">
                        <li>
                            <a href={proj.link}>
                                <img src={proj.image} className="card-img" alt={proj.altText}></img>
                            </a>
                                <div className="card-img-overlay">
                                <h5 className="card-title">{proj.title}</h5>
                                <p className="card-text">MERN Stack</p>
                                {/* <button type="button" onClick={()=>{

                                    window.open(proj.github, '_blank')
                                }} 
                                className="card-text" ><small>Github Link</small></button> */}
                                </div>
                            <Link to={proj.github}>Github Link</Link>
                        </li>
                    </div>
                ))
                }
            
        </ul>
        
        
    )
    
}