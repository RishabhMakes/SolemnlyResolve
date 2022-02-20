var money = 0;
var appeal = 0;
var transparency = 0;
var backing = 0;

var playerCoins = {
    A: 10,
    B: 10,
    C: 10,
    D: 10
};

let scenario = 0;
try {
    scenario = JSON.parse(sessionStorage.scenario);
} catch (e) {
    scenario = 0;
    console.log(e);
}
console.log(`Scenario from memory is `+scenario);

let playerNames;
try {
    playerNames = JSON.parse(sessionStorage.playerNames);
} catch (e) {
    playerNames = {
        A: `Player 1`,
        B: `Player 2`,
        C: `Player 3`,
        D: `Player 4`
    };
    console.log(e);
}
console.log(playerNames );
// -------------------------
// To update the text inside span
// $("#id")[0].textContent="";

// ------------------------
function loadMagic(){
    const centralImage = document.querySelector("#u1057_img");
    centralImage.src = "/images/situations/1.png";
}

function scenarioSelect(number = 0) {
    switch (number) {
        case 0:
            setStats([75, 25, 25, 50]);
            break;
        case 1:
            setStats([25, 75, 25, 50]);
            break;
        case 2:
            setStats([25, 50, 75, 25]);
            break;
        case 3:
            setStats([50, 25, 25, 75]);
            break;
        default:
            setStats([50,50,50,50]);
            break;
    }
}

function updateStats(delta = [0, 0, 0, 0]) {
    money = money + delta[0];
    appeal = appeal + delta[1];
    transparency = transparency + delta[2];
    backing = backing + delta[3];
}

function setStats(init = [0, 0, 0, 0]) {
    money = init[0];
    appeal = init[1];
    transparency = init[2];
    backing = init[3];
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function giveButton(whichOne){
    //move the box accordingly
    //make the box visible
    //have the blue bar on the first name

    //Set the current CHOICE-GIVE VARIABLE to a/b/c

    //On click of the names
        //move blue bar to name or appear-disappear using classes to define positions
        //set GIVER-NAME VARIABLE TO NAME
    
    //ON UP-DOWN
        //CHANGE VALUE ON DISPLAY
        //CHANGE VALUE ON VARIABLE
    
    //ON PRESSING GIVE
        //Pass CHOICE, NAME, AMOUNT variable to main game back state

}