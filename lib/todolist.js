


const worklist = './data.json';
export async function fetchList(){
    if (localStorage.getItem('dataList')){
       try {
        const dataList = JSON.parse(localStorage.getItem('dataList'));
        return dataList;
       } catch (error) {
           console.error("Villa kom upp við að sækja gögn: " + error);
       }
    }
    const result = await fetch(worklist)
    .then((data)=>data.json())
    .finally((json)=>console.log(json))
    .catch(()=>null);
    saveList(result);
    return result;
}


/** Þetta fall er notað til að savea öll verkefni sem að koma inn í listann. */
export async function saveList(data){
    if (!data){
        return;
    }
    const dataList = JSON.stringify(data);
    localStorage.setItem('dataList', dataList);
}

export async function getList(type='all', id=null){
   const listi = await fetchList();
    if (type==='all'){
        return listi.items;
    }
    if (type === 'category'){
        return listi.items.filter((item)=>{
            return item.category===id;
        });
    }
    if(type==='tag'){
        return listi.items.filter((item)=>{
            return true;
        });
    }
    if(type==='unfinished'){
        console.log('<o>__<o>')
        return listi.items.filter((item)=>{
            return !item.completed
        })
    }
    if(type==='finished'){
        console.log('=,=');
        return listi.items.filter((item)=>{
            return item.completed
        })
    }

}
export async function getAllCategories(){
    const catList = await fetchList();
    const cat = new Set()
    for(let i=0; i<catList.items.length;i++){
        if(catList.items[i].category=="") continue;
        cat.add(catList.items[i].category)
    }
    return Array.from (cat);
    
}
export async function getAllTags(){
    const tagList = await fetchList();
    const tag = new Set()
    for(let i=0; i<tagList.items.length;i++){
        for(let j=0; j<tagList.items[i].tags.length;j++){
            //ítra í gegnum öll tags howdoidoit
            if(tagList.items[i].tags[j]=="") continue;
            tag.add(tagList.items[i].tags[j]);
        }
    }
    return Array.from (tag);
}
const myStorage = window.localStorage;
/*for(let j = 0; j<list[i].tags.length;j++){
    const sp = el('span', list[i].tags[j]);
    sp.classList.add('toDoItem__span');
    inner.appendChild(sp);
}*/

/*localStorage.setItem('key', 'value');
const cat = localStorage.getItem('key');
localStorage.removeItem('key');
localStorage.clear(); 
var test = {"id": 0,
"tester": "testerval"};
myStorage.setItem("test", test);
console.log("test", myStorage.getItem("test"));
*/
/*function moveList(){
    if(project)
    er að reyna að gera hér að ef að verkefni er klárað þá er það fært yfir.
    completed==true
}*/
