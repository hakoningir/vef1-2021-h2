import { fetchList, getList } from "./todolist.js";
import {el, empty} from "./helpers.js";

function handleCategoryClick(id, container) {
    return(e) => {
        empty(container);
        fetchAndRenderList(id, container);
        window.history.pushState({},'', `?valmynd=${id}`);
    };
}
/*
Þetta fall á að sækja categories og tags sem að eru v megin á síðunni. Þau eiga að innihalda öll verkefnin, kláruð eða ókláruð.
*/
/*export async function getCategory(){
  for (var i = 0; i < data[categories].length; i++){
      var comma = document.createTextNode(', ');
      var link = document.createElement('a');
        link.setAttribute('href', '#journal__category--' + data['categories'][i]['url_title'] );
        link.setAttribute('class', 'js--page__link');
        link.innerHTML = data['categories'][i]['category_name'];

        document.getElementById('js--journal__categories').appendChild(link);
  }
}
*/
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
    let addTodoButton = el('button', 'Bæta við verkefni');
    verkefni.appendChild(addTodoButton)
    let inputField = document.getElementById('inputfield');

addTodoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText=inputField.Value; 
    verkefni.appendChild(paragraph);

})

}

export async function category(){
    empty(parent)
    const getcat = await fetchList(categories)
    const secproj = el('section');
    const newproj = el('h3', getcat);
    // parent.appendChild(newproj)
    for(let i = 0; i < newproj.length; i++){
        console.log(newproj[i]);
        const newVerk = el('h3', newproj[i].categories);
        secproj.appendChild(newVerk)
    }
}
