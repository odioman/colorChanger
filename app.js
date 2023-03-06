const text = document.getElementById('RGB');

function color() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    textUpdate(r, g, b);
    return { r, g, b }
}

function textUpdate(r, g, b) {
    text.textContent = 'rgb' + '('+ r + ', ' + g + ', ' + b + ')'
    console.log(r,g,b);
}

document.addEventListener('submit', (e) => {
    e.preventDefault();
})