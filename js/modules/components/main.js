import { aboutMeAreaTitle, aboutMeParagraph } from '../utils/variables.js';
import { skillsAreaTitle, skillTableBody } from '../utils/variables.js';
import { experienceAreaWrapper } from '../utils/variables.js';
import { datas } from '../utils/variables.js';

export function renderAboutMeData() {
    aboutMeAreaTitle.textContent = datas.aboutMeTitle;
    aboutMeParagraph.textContent = datas.aboutMe;
}

export function renderSkillData() {
    skillsAreaTitle.textContent = datas.skillsTitle;
    datas.skills.forEach((skill)  => {
        const skillCategoryEl = document.createElement('td');
        skillCategoryEl.classList.add('skill__category');
        skillCategoryEl.textContent = skill.category;
        const skillLi = document.createElement('td');
        skillLi.classList.add('skill__list');
        skillLi.textContent = skill.skills;
        skillTableBody.appendChild(skillCategoryEl);
        skillTableBody.appendChild(skillLi);
    });
}

export function renderExperienceData() {
    datas.experienceData.forEach(experience => {
        const experienceDiv = document.createElement('div');
        experienceDiv.innerHTML = `
                    <small class="date">${experience.date}</small>
                    <h3 class="company">${experience.company} <span>- ${experience.location}</span></h3>
                    <h4 class="position">${experience.position}</h4>
                    <ul class="descriptions">
                        ${experience.descriptions.map(description => `<li>${description}</li>`).join('')}
                    </ul>
                `;
                experienceAreaWrapper.appendChild(experienceDiv);
    });
}