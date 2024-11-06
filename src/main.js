// src/main.js
const projects = [
    {
      name: "PROJECT NAME",
      technologies: ["tech", "tech", "tech", "tech", "tech"],
      description: [
        "Lorem ipsum dolor sit tech, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua vel pharetra vel turpis nunc eget lorem dolor sed viverra.",
        "Lorem ipsum dolor sit amet, tech adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tech incididunt ut labore et dolore magna.",
        "Lorem ipsum dolor sit tech, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
      ],
      githubLink: "#", 
      liveLink: "#" 
    },

    {
      name: "PROJECT NAME",
      technologies: ["tech", "tech", "tech", "tech", "tech"],
      description: [
        "Lorem ipsum dolor sit tech, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua vel pharetra vel turpis nunc eget lorem dolor sed viverra.",
        "Lorem ipsum dolor sit amet, tech adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tech incididunt ut labore et dolore magna.",
        "Lorem ipsum dolor sit tech, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
      ],
      githubLink: "#",
      liveLink: "#"
    },
  ];
  
  function createProjectHTML(project) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
  
    const header = document.createElement("h3");
    header.innerHTML = `${project.name} >> ${project.technologies.join(", ")} <a href="${project.githubLink}" target="_blank">GitHub</a> > <a href="${project.liveLink}" target="_blank">Live</a>`;
    projectDiv.appendChild(header);
  
    project.description.forEach((desc) => {
      const p = document.createElement("p");
      p.textContent = desc;
      projectDiv.appendChild(p);
    });
  
    return projectDiv;
  }
  
  function loadProjectExperience() {
    const mainContent = document.querySelector("main");
    const projectSection = document.createElement("section");
    projectSection.id = "project-experience";
  
    const title = document.createElement("h2");
    title.textContent = "PROJECT EXPERIENCE";
    projectSection.appendChild(title);
  
    projects.forEach((project) => {
      const projectHTML = createProjectHTML(project);
      projectSection.appendChild(projectHTML);
    });
  
    mainContent.appendChild(projectSection);
  }
  
  document.addEventListener("DOMContentLoaded", loadProjectExperience);
  