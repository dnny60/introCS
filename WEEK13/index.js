const randNum = Math.floor(Math.random() * 100 )+ 1 ;
var min = 1;
var max = 100;


function start(){
    console.log("start")
    var text = document.getElementById("text").value;
    var playButton = document.getElementById("playbutton");
    playButton.addEventListener("click", findrange(text), false);

}

function findrange(text){
    var resultarea = document.getElementById('ResultArea');
    var resultElement = document.createElement("h4");
    resultElement.id = 'Result';
    try{
        document.getElementById('Result').remove();
    }
    finally{
    if(text < randNum){
        
        min = text;
        let result = document.createTextNode(min + " - " + max);
        resultElement.appendChild(result);
        resultarea.appendChild(resultElement);
    }
    else if(text > randNum){
        max = text;
        let result = document.createTextNode(min + " - " + max);
        resultElement.appendChild(result);
        resultarea.appendChild(resultElement);
    }
    else if(text == randNum){
        let result = document.createTextNode("bingo");
        resultElement.appendChild(result);
        resultarea.appendChild(resultElement);
    }
    }
}


