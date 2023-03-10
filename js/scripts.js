function changeText() {
    var textArray = ["table","chair","laptop","bottle","bag","phone","SIT725 Practical 1"];
    var number = getRandomNumber(0,textArray.length -1);
    document.getElementById("heading").innerHTML = textArray[number];
}

function getRandomNumber(min, max){
    console.log("hey")
    return Math.floor(Math.random() * (max-min+1) + min);
}