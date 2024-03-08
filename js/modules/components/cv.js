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
    datas.name = JSON.parse(JSON.stringify(data.name));
    datas.position = JSON.parse(JSON.stringify(data.position));
    datas.photo = JSON.parse(JSON.stringify(data.photo));
    datas.contactData = JSON.parse(JSON.stringify(data.contact));
    datas.languageTitle = JSON.parse(JSON.stringify(data.languageTitle));
    datas.languageData = JSON.parse(JSON.stringify(data.languages));
    datas.educationTitle = JSON.parse(JSON.stringify(data.educationTitle));
    datas.educationData = JSON.parse(JSON.stringify(data.education));
    datas.visaTitle = JSON.parse(JSON.stringify(data.visaTitle));
    datas.visa = JSON.parse(JSON.stringify(data.visa));
    datas.aboutMeTitle = JSON.parse(JSON.stringify(data.aboutMeTitle));
    datas.aboutMe = JSON.parse(JSON.stringify(data.aboutMe));
    datas.skillsTitle = JSON.parse(JSON.stringify(data.skillsTitle));
    datas.skills = JSON.parse(JSON.stringify(data.skills));
    datas.experienceTitle = JSON.parse(JSON.stringify(data.experienceTitle));
    datas.experienceData = JSON.parse(JSON.stringify(data.experiences));
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



