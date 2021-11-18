const worklist = './data.json';
export async function fetchList(){
    const result = await fetch(worklist)
    .then((data)=>data.json())
    .finally((json)=>console.log(json))
    .catch(()=>null);
    return result;
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
localStorage.clear(); */
var test = {"id": 0,
"tester": "testerval"};
myStorage.setItem("test", test);
console.log("test", myStorage.getItem("test"));

/*function moveList(){
    if(project)
    er að reyna að gera hér að ef að verkefni er klárað þá er það fært yfir.
    completed==true
}*/
