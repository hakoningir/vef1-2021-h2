const worklist = './data.json';
async function fetch_list();
    const result = await fetch(worklist).then((data)=>data.json()).finally((json)=>json).catch(()=>null);
    return result;


