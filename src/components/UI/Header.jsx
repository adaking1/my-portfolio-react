export default function Nav({links}) {
    return (
    <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid" id="bar">
            <a className="navbar-brand" href="/"><h1>Adam King</h1></a>
            <div id="navLinks">
            <div className="navbar-nav" id="navTitles">
                {links.map((link) => link)}
            </div>
            </div>
        </div>
    </nav>
    );
}