import { fetchList } from "./lib/todolist.js"




function route(){
    const loc = new URLSearchParams(window.location.search);
    const newLoc = loc.get('valmynd'); //er það samt?
    console.log(newLoc)
}
route()

console.log(await fetchList())
