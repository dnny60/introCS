

window.addEventListener("load", start, false);
var allDies = new Array();
var rollCount = 0;
var fre1 = 0;
var fre2 = 0;
var fre3 = 0;
var fre4 = 0;
var fre5 = 0;
var fre6 = 0;
function start(){
    var button = document.getElementById("rollbutton");
    button.addEventListener("click", rollDice);
    
    for(i = 1; i <= 12; i++){
        allDies.push(document.getElementById("die" + i));
        
        console.log("die%s", i);
        console.log(allDies);

    }
}


function rollDice(){
    console.log("hi");
    
    allDies.forEach(element => {
        rollCount++;
        let dieValue = Math.floor( 1 + Math.random() * 6);
        element.setAttribute("src", "img/die" + dieValue + ".png");
        element.setAttribute("alt", "die image with" + dieValue + "spot(s)");
        countFrequencyAdnPercent(dieValue);
    });

}

function countFrequencyAdnPercent(dieValue){
    switch (dieValue) {
        case 1:
            fre1++;
            updateFreAndPer(dieValue, fre1);
            break;
        case 2:
            fre2++;
            updateFreAndPer(dieValue, fre2);
            break
        case 3:
            fre3++;
            updateFreAndPer(dieValue, fre3);
            break
        case 4:
            fre4++;
            updateFreAndPer(dieValue, fre4);
            break
        case 5:
            fre5++;
            updateFreAndPer(dieValue, fre5);
            break
        case 6:
            fre6++;
            updateFreAndPer(dieValue, fre6);
            break
    }
}

function updateFreAndPer(dieValue, fre){
    $(function(){
        $("#fre"+dieValue).text(fre);
        let per = fre/rollCount * 100
        $("#per"+dieValue).text(per.toFixed(2) + "%");
    });
}

