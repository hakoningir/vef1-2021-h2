import { getList, saveList, fetchList } from "./lib/todolist.js"
import { fetchAndRenderList } from "./lib/ui.js";



function route(){
    const loc = new URLSearchParams(window.location.search);
    const newLoc = loc.get('valmynd'); //er það samt?
    console.log(newLoc)
    const myStorage = window.localStorage;
    var test = {"id": 0,
        "tester": "testerval"};
    myStorage.setItem("test", JSON.stringify(test));
    var jsonstring = myStorage.getItem("test");
    console.log(jsonstring);
    localStorage.removeItem("test");
    jsonstring = myStorage.getItem("test");
    console.log(jsonstring);
    saveList(); //alltaf þegar sótt er ný gögn úr localStorage þarf að savea.
}

function test(){
    let test = fetchList();
    console.log(test);
}
test()
console.log(await getList());
console.log(await getList('category', 'vefforrit'));
console.log(await getList('tags', 'fundir'));
/*try{
    let data = JSON.parse(myStorage.getItem('testLocalKey'));
    console.log("data", data.testKey);
}catch(err){
    console.log("There was an error sawwwy :3", err);
}*/
