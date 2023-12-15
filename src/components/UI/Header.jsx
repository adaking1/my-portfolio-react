export default function Nav({links}) {
    return (
    <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid" id="bar">
            <a className="navbar-brand" href="/"><h1>Adam King</h1></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navLinks">
            <div className="navbar-nav">
                {links.map((link) => link)}
            </div>
            </div>
        </div>
    </nav>
    );
}