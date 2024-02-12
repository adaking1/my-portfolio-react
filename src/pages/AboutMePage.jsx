import me from "../assets/images/me.jpg";

export default function AboutMe() {
    return (
        <>
        <div id="aboutTitle">
        <h2>About Me</h2>
        <img src={me} id="me"></img>
        </div>
        <div id="aboutMe">
            <p>
                Coming out of college with a music degree, my options were limited. After many years of
                working various jobs, I found a passion for coding. At the beginning of 2022 I started a Python certificate that I completed by the end of that April.
                That program helped blossom a love for coding and using very logical thinking. Since then I have completed a fullstack web deveopment bootcamp through the University of Connecticut, 
                where I learned to code using front-end and back-end technologies such as MongoDB, Express.js, React.js, Node.js, and MySQL. These skills are exhibitied in the applications found in the "Portfolio" page, as well as this site itself.
            </p>
        </div>
        </>
    );
}