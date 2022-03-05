
function getFat(odstavecID) {
    let odstavec = document.getElementById(odstavecID);
    odstavec.classList.toggle('bold-text');
}

function turnRed(odstavecID) {
    let odstavec = document.getElementById(odstavecID);
    odstavec.classList.toggle('red-text');
}



// Zvětšení mi bohužel nefunguje, pořád mi to hlásí, že fontsize není číslo

/** 
 *    @param {int} soucasnaVelikost
 *    @param {int} zmenaVelikosti
 * 
*/

function getBigger(textSelector, zmenaVelikosti) {
    let text = document.querySelector(textSelector);
    let soucasnaVelikost = parseInt(text.style.fontSize);
    text.style.fontSize = (soucasnaVelikost + zmenaVelikosti) + 'px';
}

function prehraj(audioSelector) {
    document.querySelector(audioSelector).play();
}

function pauzni(audioSelector) {
    document.querySelector(audioSelector).pause();
}

function zmenHlasitost(audioSelector, hlasitost) {
    document.querySelector(audioSelector).volume = hlasitost;
}

function hrajOdZacatku(audioSelector) {
    document.querySelector(audioSelector).currentTime = 0;
}







