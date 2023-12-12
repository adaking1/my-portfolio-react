// import { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
import Project from '../components/UI/Project';
import techBlog from '../assets/images/techBlog.png'

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
            title: 'The Tech Blog',
            image: techBlog,
            altText: 'First Fullstack Application',
            github: 'https://github.com/adaking1/technology-blog',
            link: 'https://chilling-citadel-47329-94bcd0d8e6c1.herokuapp.com/',
            id: '2'
        },
        {
            title: 'The Tech Blog',
            image: techBlog,
            altText: 'First Fullstack Application',
            github: 'https://github.com/adaking1/technology-blog',
            link: 'https://chilling-citadel-47329-94bcd0d8e6c1.herokuapp.com/',
            id: '3'
        },
        {
            title: 'The Tech Blog',
            image: techBlog,
            altText: 'First Fullstack Application',
            github: 'https://github.com/adaking1/technology-blog',
            link: 'https://chilling-citadel-47329-94bcd0d8e6c1.herokuapp.com/',
            id: '4'
        }
    ]
    
    return (
        <>

            <Project project={projects}/>

        </>
    );
}