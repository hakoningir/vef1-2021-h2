import { fetchList, getAllCategories, getAllTags, getList } from "./todolist.js";
import {el, empty} from "./helpers.js";

function handleCategoryClick(id, container) {
    return(e) => {
        empty(container);
        fetchAndRenderList(id, container);
        window.history.pushState({},'', `?valmynd=${id}`);
    };
}

export async function fetchAndRenderList(parent){
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


export async function create(parent){
    function cat(e){
        fetchAndRender(e.dataset.type, e.dataset.id, parent )
    }
    const oklaradverk = document.querySelector('.verkefni');
    oklaradverk.addEventListener('click',cat);
    oklaradverk.dataset.type='finished';
    const klaradverk = document.querySelector('.klarad-verkefni');
    klaradverk.addEventListener('click',cat);
    klaradverk.dataset.type='unfinished';
    
    // const flokkur = document.querySelector('.vefforritun')
    // flokkur.addEventListener('click', cat)
    const flock = document.querySelector('#valmynd-flokkur')
    empty(flock)
    const tophead = el('h2', 'Flokkur')
    flock.appendChild(tophead)
    const item = await getAllCategories();
    for(let i = 0; i<item.length; i++){
        const sec = el('section');
        sec.classList.add('valmynd-efni-svaedi');
        flock.appendChild(sec);
        const vef = el('h3', item[i]);
        sec.appendChild(vef);
        const fj = el('p', '10');
        sec.appendChild(fj);
        const allFlokk = document.querySelector('#valmynd-flokkur');
        allFlokk.addEventListener('click', cat);
        allFlokk.dataset.type='category';
    }
    console.log(item)
    

    const takk = document.querySelector('#valmynd-tags');
    empty(takk)
    const skipu = el('h2', 'Tags');
    takk.appendChild(skipu);
    const tagItem = await getAllCategories();
    for(let i=0; i<tagItem.length; i++){
        const tagsec = el('section');
        tagsec.classList.add('valmynd-efni-svaedi');
        takk.appendChild(tagsec);
        const tagvef = el('h3', tagItem[i]);
        tagsec.appendChild(tagvef)
        const tagfj = el('p', 'Boo');
        tagsec.appendChild(tagfj)
        const allTag = document.querySelector('#valmynd-tags');
        allTag.addEventListener('click', cat);
        allTag.dataset.type='tags';
    }
    console.log(tagItem)
}



/*
const vefforrit = document.querySelector('.vefforritun');
vefforrit.addEventListener('click',async ()=>console.log(await getList('vefforritun'), vefforrit));
const skipulag = document.querySelector('.skipulag');
skipulag.addEventListener('click',async ()=>console.log(await getList('skipulag'), skipulag));
const vefthjonusta = document.querySelector('.vefthjonusta');
vefthjonusta.addEventListener('click',async ()=>console.log(await getList('vefthjonusta'), vefthjonusta));
const veftag = document.querySelector('.veftag');
veftag.addEventListener('click',async ()=>console.log(await getList('veftag'), veftag));
const skiptag = document.querySelector('.skiptag');
skiptag.addEventListener('click',async ()=>console.log(await getList('skiptag'), skiptag));
const thjontag = document.querySelector('.thjontag');
thjontag.addEventListener('click',async ()=>console.log(await getList('thjontag'), thjontag));*/
// document.getElementById(fetchAndRender('veftag', 'framendi'|| 'bakendi'||'gagnagrunnur'||'hönnun', veftag));
// fetchAndRender('category', 'vefforrit', parent);



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
        const haus = el('h3', list[i].title);
        haus.classList.add('toDoItem__h3');
        next.appendChild(haus);
        const txt = el('p', list[i].description);
        txt.classList.add('toDoItem__p1');
        next.appendChild(txt);
        const inner = el('div');
        inner.classList.add('toDoItem__inner');
        next.appendChild(inner);
        if (list[i].due !== null){
            const date = new Date(list[i].due)
            const innertxt = el('p', date.toLocaleDateString('is'));
            innertxt.classList.add('toDoItem__p2');
            inner.appendChild(innertxt);
        }
    
        for(let j = 0; j<list[i].tags.length;j++){
            const sp = el('span', list[i].tags[j]);
            sp.classList.add('toDoItem__span');
            inner.appendChild(sp);
        }
        const sptxt = el('p', list[i].category);
        sptxt.classList.add('toDoItem__p3');
        inner.appendChild(sptxt);
    }
    //for lykkja til að fara í gegnum listann og gera svo 
    
    
}
