import myResume from '../assets/downloads/myResume.pdf';

export default function resumePage() {
    return (
        <>
        <h2>Resume and Skills</h2>
        <section id='resumeCard'>
            <a href={myResume} download='resume_adam_king'>Downloadable Resume</a>
            <h3>Front-End Knowledge</h3>
            <ul>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>React.js</li>
                <li>Handlebars.js</li>
                <li>JQuery</li>
                <li>Bootstrap</li>
                <li>Responsive Design</li>
                <li>Accessibility</li>
            </ul>
            <h3>Back-End Knowledge</h3>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySQL and Sequelize</li>
                <li>MongoDB and Mongoose</li>
                <li>Graphql</li>
                <li>REST API</li>
            </ul>
        </section>
        </>
    );
}