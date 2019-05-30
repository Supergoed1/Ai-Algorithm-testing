var text = ("hi").split("");
var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
var num = 0;
var wordindex = 0;

var updateInterval = setInterval("update()",10)

function cycleLetters() {
    for (num = 0; num < alphabet.length; num++) {
        console.log(alphabet[num]);
        if(text[wordindex] == alphabet[num]) {
            wordindex += 1;
            num = 0;
            console.log(alphabet[num]);
        }
    }
}

function update() {
    document.getElementById("currentletter").innerHTML = "Current Letter: " + alphabet[num];
}
cycleLetters();
