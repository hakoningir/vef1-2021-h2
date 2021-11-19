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

function saveList(data){
    const dataList = JSON.stringify(data);
    localStorage.setItem('dataList', dataList);
}
export function getList(fetchList, id){
    if('click', id=''){
        fetchList();
    }
    console.log(result);
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
