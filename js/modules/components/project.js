
import { datas } from '../utils/variables.js';
import { githubProjectTitle, githubProjectWrapper } from '../utils/variables.js';
export function renderGithubProjects() {
    while(githubProjectWrapper.firstChild) {
        githubProjectWrapper.removeChild(githubProjectWrapper.firstChild);
    }
    
    githubProjectTitle.textContent = datas.githubProjectsTitle;
    datas.githubProjects.forEach(project => {
        const projectEl = document.createElement('div');
        projectEl.classList.add('project');
        if(project.live === '') {
            projectEl.innerHTML = `
            <div class="project__image">
                <img src="${project.image}" alt="${project.name}">
            </div>
            <h3 class="project__name">${project.name}</h3>
            <p class="project__description">${project.technologies}</p>
            <p>
                <a class="project__link" href="${project.link}" target="_blank">
                    <i class="fa-brands fa-github"></i>
                    ${project.link}
                </a>
            </p>
            `;
        } else {
            projectEl.innerHTML = `
            <div class="project__image">
                <img src="${project.image}" alt="${project.name}">
            </div>
            <h3 class="project__name">${project.name}</h3>
            <p class="project__description">${project.technologies}</p>
            <p>
                <a class="project__link" href="${project.link}" target="_blank">
                    <i class="fa-brands fa-github"></i>
                    ${project.link}
                </a>
            </p>
            <p>
                <a class="project__link" href="${project.live}" target="_blank">
                    <i class="fa-solid fa-link"></i>
                    ${project.live}
                </a>
            </p>
            `;
        }

        githubProjectWrapper.appendChild(projectEl);
    });
}