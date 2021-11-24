import { getList, saveList, fetchList } from "./lib/todolist.js"
import {  fetchAndRenderList, getCategory } from "./lib/ui.js";



function route(){
    const container = document.querySelector(".task")
    fetchAndRenderList(container);
    const newshit = document.querySelector('valmynd-efni-svaedi')
    getCategory(newshit);
    /*const extra = document.querySelector(".baetaVid")
    addToList(extra)
    const valmynd = document.querySelector(".valmynd")
    fetchAndRenderList("valmynd", valmynd);
    Spurning hvort ég geti gert þetta alveg eins held að ég fái sama dæmi bara tvisvar og þurfi að updatea fetchandrenderlist frekar*/
    const loc = new URLSearchParams(window.location.search);
    const newLoc = loc.get('valmynd'); //er það samt?
    const myStorage = window.localStorage;
    var test = {"id": 0,
        "tester": "testerval"};
    myStorage.setItem("test", JSON.stringify(test));
    var jsonstring = myStorage.getItem("test");
    localStorage.removeItem("test");
    jsonstring = myStorage.getItem("test");
}
let addTodoButton = document.getElementById('addTodo');
let todocontainer= documnet.getElementById('toDocontainer');
let inputField = document.getElementById('inputfield');

addTodoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText=inputField.Value; 
    todocontainer.appendChild(paragraph);
})
async function test(){
    let test = await fetchList();
    let test1 = route();
} 
test()
/*console.log(await getList());
console.log(await getList('category', 'vefforrit'));
console.log(await getList('tags', 'fundir'));*/

/*try{
    let data = JSON.parse(myStorage.getItem('testLocalKey'));
    console.log("data", data.testKey);
}catch(err){
    console.log("There was an error sawwwy :3", err);
}*/
