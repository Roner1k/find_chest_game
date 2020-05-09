'use strict'
let cursorObj = document.querySelector('.task2cont');

cursorObj.addEventListener('mousemove', getPosition);
function getPosition(e) {
    document.querySelector('#cursor').innerHTML = `<div>X=${e.screenX}, Y=${e.screenY} </div> `;
}

cursorObj.addEventListener('contextmenu', (e) => {
    e.preventDefault();
})
cursorObj.addEventListener('mousedown', getClick);

function getClick(e) {
    let y;
    switch (e.which) {
        case 1:
            y = 'Left-MB';
            break;
        case 2:
            y = 'Middle-MB';
            break;
        case 3:
            y = 'Right-MB';
            break;
        default:
            y = 'which other'
    }
    document.querySelector('#buttons').innerHTML += `<div>${y}</div>`;
    setTimeout(() => {
        document.querySelector('#buttons div').remove();
    }, 2000);
}
