import { fetchList } from "./todolist.js";
import {el} from "./helpers.js";

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
    const verkefni = el('div');
    parent.appendChild(verkefni);
    const loading = el('p', 'Sækir gögn');
    verkefni.appendChild(loading);
    const proj = await getList();
    console.log(proj);

    for(let i=0; i<9; i++){ //Forlykkja sem að býr til allt id dæmið sem að er í data.json.
        
        //localStorage
        const verk = el('h3');
        verkefni.appendChild(verk);
        console.log(verk);
    }
    
}

async function fetchAndRenderProjects(container, getList){
    //henda í forlykkju hér til að birta listann allan? ítra þá í gegnum hann (Sjá verkefni 9)
}