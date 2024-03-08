import { addressEl, phoneEl, phoneElTd, emailEl, portfolioEl, githubEl, linkedinEl } from '../utils/variables.js';
import { educationAreaTitle, educationAreaWrapper } from '../utils/variables.js';
import { languagesAreaTitle ,languagesTableBody } from '../utils/variables.js';
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
    // Clear the education area before rendering new data
    while(educationAreaWrapper.firstChild) {
        educationAreaWrapper.removeChild(educationAreaWrapper.firstChild);
    }

    educationAreaTitle.textContent = datas.educationTitle;
    datas.educationData.forEach(education => {
        const educationDiv = document.createElement('div');
        educationDiv.innerHTML = `
            <h3 class="school">${education.school} <span>- ${education.location}</span></h3>
            <small class="date">${education.date}</small>
            <p class="description">- ${education.description}</p>
        `;
        educationAreaWrapper.appendChild(educationDiv);
    })
}

export function renderLanguageData() {
    // Clear the experience area before rendering new data
    while(languagesTableBody.firstChild) {
        languagesTableBody.removeChild(languagesTableBody.firstChild);
    }
    
    languagesAreaTitle.textContent = datas.languageTitle;
    datas.languageData.forEach(language => {
        const row = document.createElement('tr');
        const languageName = document.createElement('td');
        languageName.textContent = language.name;
        const languageLevel = document.createElement('td');
        languageLevel.textContent = language.level;
        row.appendChild(languageName);
        row.appendChild(languageLevel);
        languagesTableBody.appendChild(row);
    })
}

export function renderVisaStatus() {
    visaAreaTitle.textContent = datas.visaTitle;
    visaStatusEl.textContent = datas.visa;
}