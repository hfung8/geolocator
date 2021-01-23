// A variable that contains a name
var name1 = "";
var name2 = "";
var whereWeAmFrom = "";
function printName(name1, name2, location){
    return `${name1} and ${name2} are from ${location}.`;
}

function setLocation(){
whereWeAreFrom = printName("Harrison", "Alastair", "Toronto");
}

function tellLocation(){
    console.log(whereWeAreFrom);
}

setLocation();
tellLocation(); // "Harrison and Alastair are from Toronto."