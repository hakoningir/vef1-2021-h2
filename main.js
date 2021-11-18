import { fetchList } from "./lib/todolist.js"




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
    
}
route()

console.log(await fetchList())
/*try{
    let data = JSON.parse(myStorage.getItem('testLocalKey'));
    console.log("data", data.testKey);
}catch(err){
    console.log("There was an error sawwwy :3", err);
}*/
