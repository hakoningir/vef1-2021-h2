

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

}