import { fetchList, getList } from "./lib/todolist.js"
import { fetchAndRender, fetchAndRenderList, create } from "./lib/ui.js";
import { el } from './lib/helpers.js';



function route(){
    const container = document.querySelector(".task");
    const showCategory = document.querySelector(".valmynd-efni");
    console.log(fetchAndRender('all', null, container), "isnice");
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
let todocontainer= document.getElementById('toDocontainer');
create()

addTodoButton.addEventListener('click', function(){
    //var paragraph = document.createElement('p');
    //paragraph.innerText=inputField.Value; 
    //todocontainer.appendChild(paragraph);
    console.log('hæ');
    const addTask = el('form', el('p', 'Það þarf að koma nýtt task'));
    todocontainer.appendChild(addTask);
    

    // Búa til form með nafni á vekefni, lýsingu, dagsetningu, flokkum og tags.
    // Þarf að sækja flokka og tags úr localstorage til að birta rétta flokka
    // Síðasta HTML element er takki sem "submittar" forminu. 
    // Event listener á takkanum triggerar function sem save-ar gögn í localStorage.
})

// let addTodoButton = document.getElementById('addTodo');
// let todocontainer= document.getElementById('toDocontainer');
// let inputField = document.getElementById('inputfield');

// addTodoButton.addEventListener('click', function(){
//     var paragraph = document.createElement('p');
//     paragraph.innerText=inputField.Value; 
//     todocontainer.appendChild(paragraph);
// })

async function test(){
    let test = await fetchList();
    let test1 = route();
    // console.log("Hello")
    // let listi = getList()
    // let fjoldi = listi.getLength;
    // console.log(fjoldi)
    // console.log(getList())
    // console.log("goodbye")

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
