function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//----------------------------------------------

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//----------------------------------------------
const makePurpleButton = document.getElementById('make-purple');

makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}