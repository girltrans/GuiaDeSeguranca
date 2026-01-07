const urlParams = new URLSearchParams(window.location.search);
let stepParam = Number(urlParams.get('step')) - 1 || 0;
let currentPage = Math.max(0, stepParam);

const list = document.getElementById("list");
const stepDisplay = document.getElementById("stepDisplay");
const prevEl = document.getElementById("prevEl");
const nextEl = document.getElementById("nextEl");

window.nextPage = () => {
    if (window.steps && currentPage < window.steps.length - 1) loadPage(++currentPage);
}

window.prevPage = () => {
    if (currentPage > 0) loadPage(--currentPage);
}

function loadPage(page) {
    if (!window.steps || !Array.isArray(window.steps) || window.steps.length === 0) return;

    const maxPage = Math.min(window.steps.length - 1, Math.max(0, page));
    
    if (page !== maxPage) {
        const url = new URL(window.location);
        url.searchParams.set("step", maxPage + 1);
        window.location.href = url.toString();
        return;
    }

    const currentPoints = window.steps[page].points;

    while (list.children.length > currentPoints.length) {
        list.removeChild(list.lastChild);
    }

    currentPoints.forEach((point, i) => {
        var liEl = document.createElement('li');
        
        var hasMdLink = /\[(.*?)\]\((.*?)\)/.test(point);

        if (hasMdLink) {
            point = point.replace(/\[(.*?)\]\((.*?)\)/g, (match, text, url) => {
                return `<a href="${url}" target="_blank">${text}</a>`;
            });
        }

        if (list.children[i]) {
            list.children[i].style.animation = 'fadeInAndOut .35s';
            setTimeout(() => {
                list.children[i].innerHTML = point;
                setTimeout(() => list.children[i].style.animation = '', 75)
            }, 175)
        } else {
            liEl.innerHTML = point;
            list.append(liEl)
        }
    });

    if (prevEl) prevEl.toggleAttribute("disabled", currentPage === 0);
    if (nextEl) nextEl.toggleAttribute("disabled", currentPage === window.steps.length - 1);

    if (stepDisplay) stepDisplay.textContent = `Etapa ${currentPage + 1} de ${window.steps.length}`;
    
    history.pushState('', '', currentPage === 0 ? location.pathname : `?step=${currentPage + 1}`);
}

window.addEventListener('load', () => {
    loadPage(currentPage);
});