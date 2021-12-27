var input = window.prompt("please input data" );
// console.log(input);
var char = window.prompt("input a char to search");
var allIndex = [];
for(var i = 0; i < input.length; i = input.indexOf(char, i) + 1){
    // console.log(i);
    var indexOfChar = input.indexOf(char, i);
    if(indexOfChar != -1){
        console.log(indexOfChar + "char");
        allIndex.push(indexOfChar);
        console.log(allIndex.length);
    }else {
        break;
    }
}

var node = document.getElementById("answer");
var newNode = document.createElement('p');

allIndex.forEach(element => {
    console.log(element);
    // document.getElementById("answer").appendChild(document.createElement("p").appendChild(document.createTextNode(element)));
    var node = document.getElementById("answer");
    var newNode = document.createElement('p');
    newNode.appendChild(document.createTextNode(element));
    node.appendChild(newNode);
});

// while(input.indexOf(char) != -1){
//     var indexOfChar = input.indexOf(char);
//     console.log(indexOfChar);
//     indexOfChar = input.indexOf(char, (indexOfChar+1));
//     console.log(indexOfChar);
    
// }
// var indexOfChar = input.indexOf(char);

