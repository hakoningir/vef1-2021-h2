


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
export function saveList(data){
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
}
const myStorage = window.localStorage;

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
