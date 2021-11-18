

function handleCategoryClick(id, container) {
    return(e) => {
        empty(container);
        fetchAndRenderList(id, container);
        window.history.pushState({},'', `?valmynd=${id}`);
    };
}

async function fetchAndRenderList(
    id, 
    parent, 
    link = null, 
    limit = Infinity
){
    const verkefni = el('div');
    parent.appendChild(verkefni);
    const loading = el('p', 'Sækir gögn');
    verkefni.appendChild(loading);
}
async function fetchAndRenderProjects(container, getList){
    //henda í forlykkju hér til að birta listann allan? ítra þá í gegnum hann (Sjá verkefni 9)
}