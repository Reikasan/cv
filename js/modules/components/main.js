import { aboutMeAreaTitle, aboutMeParagraph } from '../utils/variables.js';
import { skillsAreaTitle, skillTableBody } from '../utils/variables.js';
import { experienceAreaTitle, experienceAreaWrapper } from '../utils/variables.js';
import { datas } from '../utils/variables.js';

export function renderAboutMeData() {
    aboutMeAreaTitle.textContent = datas.aboutMeTitle;
    aboutMeParagraph.textContent = datas.aboutMe;
}

export function renderSkillData() {
    skillsAreaTitle.textContent = datas.skillsTitle;
    datas.skills.forEach((skill)  => {
        const row = document.createElement('tr');
        const skillCategoryEl = document.createElement('td');
        skillCategoryEl.classList.add('skill__category');
        skillCategoryEl.textContent = `${skill.category}: `;
        const skillLi = document.createElement('td');
        skillLi.classList.add('skill__list');
        skillLi.textContent = skill.skills;
        row.appendChild(skillCategoryEl);
        row.appendChild(skillLi);
        skillTableBody.appendChild(row);
    });
}

export function renderExperienceData() {
    experienceAreaTitle.textContent = datas.experienceTitle;
    datas.experienceData.forEach(experience => {
        const experienceDiv = document.createElement('div');
        experienceDiv.innerHTML = `
                    <h3 class="position">${experience.position}</h3>
                    <h4 class="company">${experience.company} <span>- ${experience.location}</span></h4>
                    <small class="date">${experience.date}</small>
                    <ul class="descriptions">
                        ${experience.descriptions.map(description => `<li>${description}</li>`).join('')}
                    </ul>
                `;
                experienceAreaWrapper.appendChild(experienceDiv);
    });
}