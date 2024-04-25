function r1(){
    window.location.href = 'introduzione.html';
}
function r2(){
    window.location.href = '2.html';
}
function r3(){
    window.location.href = '3.html';
}
function r4(){
    window.location.href = '4.html';
}
function r5(){
    window.location.href = '5.html';
}
function r6(){
    window.location.href = '6.html';
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 39 && !event.target.tagName.toLowerCase().match(/input|textarea/)) {
        window.location.href = 'introduzione.html';
    }
    if (event.keyCode === 37 && !event.target.tagName.toLowerCase().match(/input|textarea/)) {
        window.location.href = 'r.html';
    }
});