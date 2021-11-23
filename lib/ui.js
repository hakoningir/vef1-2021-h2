import { getList } from "./todolist.js";
import {el, empty} from "./helpers.js";

function handleCategoryClick(id, container) {
    return(e) => {
        empty(container);
        fetchAndRenderList(id, container);
        window.history.pushState({},'', `?valmynd=${id}`);
    };
}



export async function fetchAndRenderList(
    id, 
    parent, 
    link = null, 
    limit = Infinity
){
    empty(parent);
    const verkefni = el('div');
    parent.appendChild(verkefni);
    const loading = el('p', 'Sækir gögn');
    verkefni.appendChild(loading);
    const proj = await getList();
    console.log(proj);
    
    for(let i=0; i<proj.length; i++){ //Forlykkja sem að býr til allt id dæmið sem að er í data.json.
        console.log(proj[i])
        const verk = el('p', proj[i].title);
        verkefni.appendChild(verk);
    }
    
}

async function fetchAndRenderProjects(container, getList){
    //henda í forlykkju hér til að birta listann allan? ítra þá í gegnum hann (Sjá verkefni 9)
}