// import { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
import Project from '../components/UI/Project';
import techBlog from '../assets/images/techBlog.png';
import socialNetwork from '../assets/images/socialNetwork.png';
import empDBManager from '../assets/images/employeeDatabase.jpg';
import weatherDashboard from '../assets/images/weatherDashboard.png';
import comicQuest from '../assets/images/comicQuest.png';
import filmFinder from '../assets/images/filmFinder.png';


export default function PortfolioPage() {

    const projects = [
        {
            title: 'The Tech Blog',
            image: techBlog,
            altText: 'First Fullstack Application',
            github: 'https://github.com/adaking1/technology-blog',
            link: 'https://chilling-citadel-47329-94bcd0d8e6c1.herokuapp.com/',
            id: '1'
        },
        {
            title: 'Social Networking API',
            image: socialNetwork,
            altText: 'Social Network API',
            github: 'https://github.com/adaking1/social-media-api',
            link: 'https://github.com/adaking1/social-media-api',
            id: '2'
        },
        {
            title: 'Employee Database Manager',
            image: empDBManager,
            altText: 'Employee Database Manager',
            github: 'https://github.com/adaking1/employee-database-manager/',
            link: 'https://github.com/adaking1/employee-database-manager/',
            id: '3'
        },
        {
            title: 'Weather Dashboard',
            image: weatherDashboard,
            altText: 'Weather Dashboard',
            github: 'https://github.com/adaking1/weather-dashboard',
            link: 'https://adaking1.github.io/weather-dashboard/',
            id: '4'
        },
        {
            title: 'Film Finder',
            image: filmFinder,
            altText: 'Film Finder',
            github: 'https://github.com/adaking1/film-finder',
            link: 'https://adaking1.github.io/film-finder/',
            id: '5'
        },
        {
            title: 'Comic Quest',
            image: comicQuest,
            altText: 'Comic Quest',
            github: 'https://github.com/adaking1/comic-quest',
            link: 'https://fast-spire-60504-c09eefa67524.herokuapp.com/',
            id: '6'
        }
    ]
    
    return (
        <>
            <h2>My Work</h2>
            <Project project={projects}/>

        </>
    );
}