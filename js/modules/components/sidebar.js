import { addressEl, phoneEl, phoneElTd, emailEl, portfolioEl, githubEl, linkedinEl } from '../utils/variables.js';
import { educationAreaTitle, educationAreaWrapper } from '../utils/variables.js';
import { languagesAreaTitle ,languagesList } from '../utils/variables.js';
import { visaAreaTitle, visaStatusEl } from '../utils/variables.js';
import { datas } from '../utils/variables.js';

export function renderContactData() {
    addressEl.textContent = datas.contactData.address;
    emailEl.textContent = datas.contactData.email;
    emailEl.href = `mailto:${datas.contactData.email}`;
    portfolioEl.textContent = datas.contactData.portfolio;
    portfolioEl.href = datas.contactData.portfolio;
    githubEl.textContent = datas.contactData.github;
    githubEl.href = datas.contactData.github;
    linkedinEl.textContent = datas.contactData.linkedin;
    linkedinEl.href = datas.contactData.linkedin;
    if(datas.contactData.phone !== "") {
        phoneElTd.textContent = datas.contactData.phone;
    } else {
        phoneEl.classList.add('hidden');
    }
}

export function renderEducationData() {
    educationAreaTitle.textContent = datas.educationTitle;
    datas.educationData.forEach(education => {
        const educationDiv = document.createElement('div');
        educationDiv.innerHTML = `
            <small class="date">${education.date}</small>
            <h3 class="school">${education.school} <span>- ${education.location}</span></h3>
            <p class="description">${education.description}</p>
        `;
        educationAreaWrapper.appendChild(educationDiv);
    })
}

export function renderLanguageData() {
    languagesAreaTitle.textContent = datas.languageTitle;
    datas.languageData.forEach(language => {
        const languageLi = document.createElement('li');
        languageLi.innerHTML = 
            `<b>${language.name}</b> - ${language.level}`;
        languagesList.appendChild(languageLi);
    })
}

export function renderVisaStatus() {
    visaAreaTitle.textContent = datas.visaTitle;
    visaStatusEl.textContent = datas.visa;
}