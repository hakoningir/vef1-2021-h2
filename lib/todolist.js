const worklist = './data.json';
export async function fetchList(){
    const result = await fetch(worklist).then((data)=>data.json()).finally((json)=>json).catch(()=>null);
    return result;
}
export function getList(fetchList, id){
    if('click', id=''){
        fetchList();
    }
    console.log(result);
}

/*function moveList(){
    if(project)
    er að reyna að gera hér að ef að verkefni er klárað þá er það fært yfir.
    completed==true
}*/
