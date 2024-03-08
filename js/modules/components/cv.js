import { languageSelect }  from '../utils/variables.js';
import { datas } from '../utils/variables.js';

import { renderTopElementContents } from './top.js';
import { renderContactData, renderEducationData, renderLanguageData, renderVisaStatus } from './sidebar.js';
import { renderAboutMeData, renderSkillData, renderExperienceData } from './main.js';

window.document.addEventListener('DOMContentLoaded', fetchData);
languageSelect.addEventListener('change', fetchData);

function fetchData() {
    const data = selectLanguage();

    fetch(data)
        .then(response => response.json())
        .then(data => {
            mapData(data);
            renderAllData();
        });
}

function selectLanguage() {
    const selectedLanguage = languageSelect.value;
    return  selectedLanguage === 'de' ? 'data/data-de.json' : 'data/data-en.json';
}

function mapData(data) {
    datas.name = data.name;
    datas.position = data.position;
    datas.photo = data.photo;
    datas.contactData = data.contact;
    datas.languageTitle = data.languageTitle;
    datas.languageData = data.languages;
    datas.educationTitle = data.educationTitle;
    datas.educationData = data.education;
    datas.visaTitle = data.visaTitle;
    datas.visa = data.visa;
    datas.aboutMeTitle = data.aboutMeTitle;
    datas.aboutMe = data.aboutMe;
    datas.skillsTitle = data.skillsTitle;
    datas.skills = data.skills;
    datas.experienceTitle = data.experienceTitle;
    datas.experienceData = data.experiences;
}

function renderAllData() {
    renderTopElementContents();
    renderContactData();
    renderEducationData();
    renderLanguageData();
    renderVisaStatus();
    renderAboutMeData();
    renderSkillData();
    renderExperienceData();
}



