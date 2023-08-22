let row1Clicked;
let row2Clicked;
let currPath;

const svg = document.querySelector('.svg');

window.addEventListener('load', ()=> {
    // fit SVG to screen proportions - take the CSS size of the svg element and set it to the viewBox values
    document.querySelector('.svg').setAttribute('viewBox', `0 0 ${svg.clientWidth} ${svg.clientHeight}`)
    // Add event listeners
    document.querySelector('.grid-container').addEventListener('click', saveSelected);
    document.querySelector('.connect').addEventListener('click', connect);
});

// save the selected divs in two variables - 
// one variable for the upper row and another for the lower one
// Adds style for chosen element
const saveSelected = (event) => {
    if (event.target.tagName === 'DIV') {
        if (event.target.id.includes('a')) {
            row1Clicked?.classList.remove('chosen');
            row1Clicked = event.target;
            event.target.classList.add('chosen');
        } else {
            row2Clicked?.classList.remove('chosen');
            row2Clicked = event.target;
            event.target.classList.add('chosen');
        }
        console.log(row1Clicked, row2Clicked);
    }

}


const connect = () => {
    if (!row1Clicked || !row2Clicked) {
        alert ('לא נבחרו שני דברים לחיבור!')
    } else {
        // divide by 4 because we have 4 elements
        // -(viewBoxWidth / 8), to make the line start at the center of the object (if starting to count for 0, change - to +)
        let x1 = Number(row1Clicked.id.slice(1)) * (svg.clientWidth / 4) - (svg.clientWidth / 8); 
        let x2 = Number(row2Clicked.id.slice(1)) * (svg.clientWidth / 4) - (svg.clientWidth / 8);
        let y1 = 0;
        let y2 = svg.clientHeight;
        currPath = document.getElementById(`path${row1Clicked.id.slice(1)}`);
        currPath.setAttribute('d', `M ${x1} 0 C ${x1} ${y2 * 1.2} ${x2} ${y2 * 0.01} ${x2} ${y2}`);
    }
}