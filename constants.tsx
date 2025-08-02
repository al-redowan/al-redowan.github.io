
import React from 'react';

const IconWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => <span className="w-5 h-5">{children}</span>;

export const USER_INFO = {
    name: "Al Redowan Ahmed Fahim",
    titles: [
        "Passionate Front-End Developer",
        "WordPress Expert",
        "React & Next.js Builder",
        "From Bangladesh 🇧🇩",
        "AI & Robotics Enthusiast",
    ],
    bio: "A passionate front-end and WordPress developer from Bangladesh. Currently building full-stack projects with React, Next.js, and Node.js, focusing on modern UIs, scalable APIs, and performance-driven web apps.",
    imageUrl: "https://b.top4top.io/p_2613tre2k0.jpeg",
    email: "fahimdj071@gmail.com",
};

export const TECH_STACK = {
    frontend: [
        { name: "HTML5", icon: <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#E34F26"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.42-.003L6.61 17.312h8.021l-.375 4.219-3.251.902-3.228-.899-.23-2.622h-2.583l.382 4.355 5.673 1.574.002-.001 5.653-1.573.835-9.356H9.031z"/></svg></IconWrapper> },
        { name: "CSS3", icon: <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#1572B6"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.42-.003L6.61 17.312h8.021l-.375 4.219-3.251.902-3.228-.899-.23-2.622h-2.583l.382 4.355 5.673 1.574.002-.001 5.653-1.573.835-9.356H9.031z"/></svg></IconWrapper> },
        { name: "JavaScript", icon: <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#F7DF1E"><title>JavaScript</title><path d="M0 0h24v24H0V0zm22.034 18.276c.583 1.168.91 2.475.91 3.724H19.22c0-1.002-.223-1.84-.668-2.508-.444-.667-1.077-1-1.9-1-.822 0-1.46.333-1.912.999-.452.667-.679 1.476-.679 2.428H10.24c0-2.31.862-4.14 2.588-5.493 1.725-1.353 3.9-2.03 6.512-2.03.822 0 1.603.09 2.342.27M11.08 11.453c-.426-.65-.64-1.42-.64-2.31 0-1.02.28-1.876.84-2.568.56-.692 1.307-1.037 2.24-1.037 1.223 0 2.14.47 2.753 1.41l-1.9 1.12c-.22-.445-.515-.667-.885-.667-.41 0-.715.222-.915.666-.2.445-.3.987-.3 1.628 0 .64.1 1.185.3 1.634.2.45.495.675.885.675.37 0 .665-.223.885-.668l1.9 1.12c-.613.94-1.53 1.41-2.75 1.41-1.01 0-1.81-.36-2.39-1.08z"/></svg></IconWrapper> },
        { name: "React", icon: <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#61DAFB"><title>React</title><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.88-9.55c.34-.13.58-.49.58-.88s-.24-.75-.58-.88c-2.11-.8-4.93-1.31-7.12.3-1.48 1.08-1.48 3.03 0 4.1.34.25.79.37 1.24.37.5 0 .96-.14 1.37-.42-.03-.02-.06-.04-.09-.06-.34-.13-.58-.49-.58-.88s.24-.75.58-.88c1.3-.5 3.05-.75 4.62.06zM12 8.16c0-.23.11-.45.31-.58.19-.13.43-.17.65-.11l3.52 1.01c.26.07.45.3.45.57s-.19.5-.45.57l-3.52 1.01c-.06.02-.12.03-.18.03-.17 0-.34-.06-.47-.17-.2-.13-.31-.35-.31-.58zm2.46 4.29c-.34.13-.58.49-.58.88s.24.75.58.88c2.11.8 4.93 1.31 7.12-.3 1.48-1.08 1.48-3.03 0-4.1-.34-.25-.79-.37-1.24-.37-.5 0-.96.14-1.37-.42.03.02.06.04.09.06.34.13.58.49.58.88s-.24.75-.58.88c-1.3.5-3.05.75-4.62-.06z"/></svg></IconWrapper> },
        { name: "Next.js", icon: <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"><title>Next.js</title><path d="M12.001 2c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 1.58c4.654 0 8.421 3.766 8.421 8.42s-3.767 8.42-8.421 8.42-8.42-3.766-8.42-8.42 3.766-8.42 8.42-8.42zm-1.04 3.498v9.843h1.58V9.873l4.572 7.046h1.58L14.001 9.873V8.078h-3.039zm4.07 0v.08h.08v-.08h-.08z"/></svg></IconWrapper> },
        { name: "Figma", icon: <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#F24E1E"><title>Figma</title><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM12 6.4a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8zm0 5.6a2.4 2.4 0 0 0-2.4 2.4v4.8h2.4v-2.4h2.4a2.4 2.4 0 1 0 0-4.8h-2.4zm-3.2-3.2a2.4 2.4 0 1 0 4.8 0 2.4 2.4 0 0 0-4.8 0zm3.2 0a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8z"/></svg></IconWrapper> },
    ],
    backend: [
        { name: "Node.js", icon: <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#339933"><title>Node.js</title><path d="M11.394 23.999H.733L7.02 12.03 0 0h11.231l-3.56 6.015 3.56 6.015-3.525 5.968h3.663zm11.873-1.129c-1.371 1.371-3.234 2.228-5.492 2.228h-5.26v-3.327h5.086c1.37 0 2.529-.394 3.473-1.18.945-.794 1.417-1.805 1.417-3.033s-.472-2.24-1.417-3.034c-.944-.786-2.103-1.18-3.473-1.18h-5.086V2.228h5.26c2.258 0 4.121.857 5.492 2.228 1.37 1.37 2.057 3.208 2.057 5.51s-.687 4.14-2.057 5.506z"/></svg></IconWrapper> },
        { name: "Express", icon: <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"><title>Express</title><path d="M24 14.121l-2.032-1.41.033.023-4.832-3.924.032.023-2.033-1.65v-3.5l2.033 1.666-.033-.027 4.832 3.923-.032-.027L24 10.63v3.49zM0 9.879l2.032 1.41-.033-.023 4.832 3.924-.032-.023 2.033 1.65v3.5l-2.033-1.666.033.027-4.832-3.923.032.027L0 13.37V9.88zm13.945-1.928L11.56 10.3l-2.385-2.35-2.613 2.126L4.54 10.05 12 3l7.46 7.05-2.022.027-2.614-2.126zm-3.904 4.084l2.001 1.63 1.95-1.587 1.016 1.107-2.966 2.422-2.967-2.422 1.016-1.107.033.027.917.74z"/></svg></IconWrapper> },
        { name: "MongoDB", icon: <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#47A248"><title>MongoDB</title><path d="M12.723,13.245c-0.128-0.323-0.213-0.603-0.213-0.837s0.011-0.547,0.021-0.925c0.021-0.379,0.085-0.925,0.203-1.648 c0.117-0.723,0.266-1.4,0.457-2.032c-1.223,0.479-2.234,1.106-3.032,1.883c-0.798,0.777-1.191,1.755-1.191,2.947 c0,0.564,0.117,1.085,0.362,1.553c0.245,0.479,0.596,0.862,1.043,1.149c0.447,0.298,0.925,0.447,1.447,0.447 C12.014,16.216,12.397,15.11,12.723,13.245z M13.844,7.578c0.053,0.617,0.085,1.159,0.085,1.638c0,0.479-0.032,0.947-0.085,1.404 c-0.053,0.457-0.128,0.883-0.213,1.277c-0.085,0.394-0.181,0.755-0.287,1.085c-0.106,0.33-0.213,0.617-0.309,0.851 c-0.106,0.234-0.191,0.436-0.266,0.596c-1.128,0.33-2.181-0.085-3.149-1.255c-0.979-1.17-1.468-2.617-1.468-4.34 c0-1.287,0.34-2.447,1.021-3.479c0.681-1.021,1.553-1.745,2.617-2.17C12.419,3.961,13.217,5.557,13.844,7.578z M12,0 C5.372,0,0,5.372,0,12s5.372,12,12,12s12-5.372,12-12S18.628,0,12,0z"/></svg></IconWrapper> },
        { name: "MySQL", icon: <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#4479A1"><title>MySQL</title><path d="M12.012 21.491c-3.13 0-5.918-1.597-7.618-4.045l-1.396.953A9.854 9.854 0 0012.012 24a9.854 9.854 0 009.014-5.6l-1.4-.955c-1.7 2.447-4.487 4.045-7.618 4.045zm7.618-14.946l1.396-.953A9.854 9.854 0 0012.012 0a9.854 9.854 0 00-9.014 5.6l1.4.955c1.7-2.447 4.487-4.045 7.618-4.045 3.13 0 5.918 1.597 7.618 4.045zm-1.854 3.99c.075-1.29-.023-2.624-.316-3.95l-3.23 11.23h-1.42l-2.03-7.06-2.03 7.06h-1.42L3.93 6.584c-.293 1.326-.39 2.66-.316 3.95C4.24 15.688 7.78 18.9 12.01 18.9c4.23 0 7.77-3.212 8.4-8.365zm-8.4-1.29c.338 0 .622.122.842.368.22.245.33.56.33.945v5.047h-2.34V10.6c0-.385.11-.7.33-.945.22-.246.504-.368.842-.368z"/></svg></IconWrapper> },
        { name: "Git", icon: <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#F05032"><title>Git</title><path d="M23.363 10.735l-8.38-8.38a1.354 1.354 0 00-1.914 0l-2.06 2.06 2.64 2.64a2.7 2.7 0 013.82 3.82l2.64 2.64 2.06-2.06a1.354 1.354 0 000-1.913.003.003 0 00.194-.191zM14.67 11.28a1.35 1.35 0 00-1.91 0l-6.32 6.32a1.35 1.35 0 000 1.91l2.06 2.06a1.35 1.35 0 001.91 0l6.32-6.32a1.35 1.35 0 000-1.91l-2.06-2.06zM9.36 8.35a2.703 2.703 0 01-2.22 1.48L3.2 5.88a1.352 1.352 0 010-1.91l2.06-2.06a1.352 1.352 0 011.91 0l3.96 3.96a2.703 2.703 0 01-1.77 2.48z"/></svg></IconWrapper> },
        { name: "WordPress", icon: <IconWrapper><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#21759B"><title>WordPress</title><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-1.2-5.263l-2.91-8.15H11.7l1.373 4.935L14.5 5.587h3.812l-4.168 10.975-2.945-2.175zM5.895 12.3c0 .54.075.9.225 1.088.15.187.375.28.675.28.375 0 .66-.094.855-.28.195-.188.293-.548.293-1.088s-.098-.9-.293-1.087c-.195-.188-.48-.282-.855-.282-.3 0-.525.094-.675.282-.15.187-.225.547-.225 1.087zm11.25-3.037c.3 0 .525.094.675.28.15.188.225.54.225 1.05 0 .51-.075.87-.225 1.08-.15.21-.375.315-.675.315s-.525-.105-.675-.315c-.15-.18-.225-.54-.225-1.08 0-.51.075-.862.225-1.05.15-.188.375-.28.675-.28z"/></svg></IconWrapper> },
    ]
};

export const SOCIAL_LINKS = [
    { 
        name: "Facebook", 
        url: "https://www.facebook.com/AR.ERROR.404",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    },
    { 
        name: "Telegram", 
        url: "https://t.me/Al_redowan",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    },
    { 
        name: "GitHub", 
        url: "https://al-redowan.github.io",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    },
    { 
        name: "Instagram", 
        url: "https://www.instagram.com/sinister.face0",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    },
    { 
        name: "Email", 
        url: `mailto:${USER_INFO.email}`,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    },
     
];
