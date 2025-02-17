export function el(name, ...children) {
    const e = document.createElement(name);
  
    for (const child of children) {
      if (typeof child === 'string') {
        e.appendChild(document.createTextNode(child));
      } else {
        e.appendChild(child);
      }
    }
  
    return e;
  }
  
  export function empty(element) {
    if (!element || !element.firstChild) {
      return;
    }
  
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }