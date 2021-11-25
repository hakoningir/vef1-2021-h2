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
    //empty(parent);
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
    //let addTodoButton = el('button', 'Bæta við verkefni');
    //verkefni.appendChild(addTodoButton)
    //let inputField = document.getElementById('inputField');
    
//addTodoButton.addEventListener('click', function(){
//    var paragraph = document.createElement('p');
//    paragraph.innerText=inputField.value; 
//    verkefni.appendChild(paragraph);
//
//}) 



} 
//gera function sem að bætir nýju elementi aftast i listann. og síðan bæta því við í local storage.
async function fetchAndRenderProjects(container, getList){
   
//henda í forlykkju hér til að birta listann allan? ítra þá í gegnum hann (Sjá verkefni 9)
}




const klaradverk = document.querySelector('.verkefni');
klaradverk.addEventListener('click',async ()=>console.log(await getList('unfinished'), klaradverk));
// const data=saekja;
export async function fetchAndRender(type, id, parent){
    empty(parent)
    const list = await getList(type, id);
    for(let i = 0; i<list.length; i++){
        const item = el('div');
        item.classList.add('toDoItem');
        parent.appendChild(item)
        const inp = el('input');
        inp.classList.add('toDoItem__input');
        item.appendChild(inp)
        inp.setAttribute('type', 'radio');
        const next = el('div');
        next.classList.add('toDoItem__radio');
        item.appendChild(next);
        const haus = el('h3', "pls");
        haus.classList.add('toDoItem__h3');
        next.appendChild(haus);
        const txt = el('p', "no");
        txt.classList.add('toDoItem__p1');
        next.appendChild(txt);
        const inner = el('div');
        inner.classList.add('toDoItem__inner');
        next.appendChild(inner);
        const innertxt = el('p', ":(");
        innertxt.classList.add('toDoItem__p2');
        inner.appendChild(innertxt);
        for(let j = 0; j<list[i].tags.length;j++){
            const sp = el('span', "nomore");
            sp.classList.add('toDoItem__span');
            inner.appendChild(sp);
        }
        const sptxt = el('p', "makeitstop");
        sptxt.classList.add('toDoItem__p3');
        inner.appendChild(sptxt);
    }
    //for lykkja til að far aí gegnum listann og gera svo 


}
export async function getData(){
    
}