import { datas, printArea } from '../utils/variables.js';

export function renderFooter(element = null) {
    // Clear footer before rendering new data
    while(element === null && printArea.lastChild.tagName === 'FOOTER') {
        printArea.removeChild(printArea.lastChild);
    }
    
    const footer = document.createElement('footer');
    const date = document.createElement('div');
    
    if(datas.contactData.phone !== "") {
        date.innerHTML = `<p>${datas.name}</p><p>|</p><p>${datas.contactData.email}</p><p>|</p><p>${datas.contactData.phone}</p><p>|</p><p>${datas.contactData.address}</p>`;
    }
    else {
        date.innerHTML = `<p>${datas.name}</p><p>|</p><p>${datas.contactData.email}</p><p>|</p><p>${datas.contactData.address}</p>`;
    }
    footer.appendChild(date);

    if(element !== null) {
        footer.classList.add('inside');
        element.parentNode.insertBefore(footer, element);
    } else {
        footer.classList.add('last');
        printArea.appendChild(footer);
    }
}