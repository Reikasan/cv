import { nameEl, positionEl, photoEl } from '../utils/variables.js';
import { datas } from '../utils/variables.js';

export function renderTopElementContents() {
    nameEl.textContent = datas.name;
    positionEl.textContent = datas.position;
    photoEl.src = datas.photo;
    photoEl.alt = `${datas.name}`;
}