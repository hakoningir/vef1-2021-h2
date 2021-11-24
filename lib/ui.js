import { getList } from "./todolist.js";
import {el, empty} from "./helpers.js";

function handleCategoryClick(id, container) {
    return(e) => {
        empty(container);
        fetchAndRenderList(id, container);
        window.history.pushState({},'', `?valmynd=${id}`);
    };
}

export async function getCategory(){
  
}

export async function fetchAndRenderList(parent){
    empty(parent);
    const verkefni = el('div');
    parent.appendChild(verkefni);
    const loading = el('p', 'Sækir gögn');
    verkefni.appendChild(loading);
    const proj = await getList();
    verkefni.removeChild(loading);
    console.log(proj);
    
    for(let i=0; i<proj.length; i++){ //Forlykkja sem að býr til allt id dæmið sem að er í data.json.
        console.log(proj[i])
        const verk = el('p', proj[i].title);
        verkefni.appendChild(verk);
        console.log(verk)
    }
    
}
//gera function sem að bætir nýju elementi aftast i listann. og síðan bæta því við í local storage.
async function fetchAndRenderProjects(container, getList){
    //henda í forlykkju hér til að birta listann allan? ítra þá í gegnum hann (Sjá verkefni 9)
}
/*Býr til nýtt element sem að notað er til að setja inn auka form til að bæta við task*/
/*export function addToList(parent){
    empty(parent);
    const verkefni = el('radio');
    parent.appendChild(verkefni);
    const xtra = el('summary');
    verkefni.appendChild(xtra);
    console.log(xtra);
    
    /*for(let i = 0; i < 1; i++){

    }
} */
