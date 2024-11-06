// src/intro.js

const aboutMeTxt = "IT Support Administrator with seven plus years of experience resolving network, hardware, and software issues within Windows and Apple environments. Understanding of when to escalate issues to upper-tier support and knowing what information should be gathered to expedite solutions.";

function loadIntro() {
    const introContent = document.querySelector("#intro");
    const introSection = document.createElement("section");
    introSection.id = "intro-section";
    
    const aboutMe = document.createElement("p");
    aboutMe.id = "aboutMe"
    aboutMe.textContent = aboutMeTxt;

    introSection.appendChild(aboutMe);
    introContent.parentNode.insertBefore(introSection, introContent.nextSibling); 
}

document.addEventListener("DOMContentLoaded", loadIntro);
