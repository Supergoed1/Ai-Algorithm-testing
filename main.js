var text = (prompt("Enter the text")).split("");
var output = "";
var alphabet = (" abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ?.!1234567890'()&+=:;").split("");
var num = 0;
var wordindex = 0;
var generation = 1;

var updateInterval = setInterval("update()",10)

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var red = 0; var green = 0; var blue= 0;
var target = {redTar: 123,greenTar: 148, blueTar: 234};
var best;

var subjects = [one = {
    red: getRandomInt(0,255),
    green: getRandomInt(0,255),
    blue: getRandomInt(0,255),
    fitness: 0
},
two = {
    red: getRandomInt(0,255),
    green: getRandomInt(0,255),
    blue: getRandomInt(0,255),
    fitness: 0
},
three = {
    red: getRandomInt(0,255),
    green: getRandomInt(0,255),
    blue: getRandomInt(0,255),
    fitness: 0
},
four = {
    red: getRandomInt(0,255),
    green: getRandomInt(0,255),
    blue: getRandomInt(0,255),
    fitness: 0
},
five = {
    red: getRandomInt(0,255),
    green: getRandomInt(0,255),
    blue: getRandomInt(0,255),
    fitness: 0
},
]


function cycleLetters() {
    setTimeout(() => {
        if(alphabet[num] == text[wordindex]) {
            output += alphabet[num];
            wordindex++;
            num = 0;
        } else {
            num++;
        }
        if(output == text.join("")) {
            return;
        }
        cycleLetters();
    }, 10);
}

makeBabies();

function makeBabies() {
    //calculating fitness
    for(var i = 0; i < subjects.length; i++) {
        var subject = subjects[i];
        subject.fitness = diff(subject.red,target.redTar) + diff(subject.green,target.greenTar) + diff(subject.blue,target.blueTar);
        console.log("Subject " + i + ": " + subject.fitness);
    }
    //getting best subject
    best = {red: getRandomInt(0,255),
        green: getRandomInt(0,255),
        blue: getRandomInt(0,255),
        fitness: 0};
    var lastfitness = 765;
    for(var i = 0; i < subjects.length; i++) {
        var subject = subjects[i];
        if(subject.fitness < lastfitness) {
            lastfitness = subject.fitness;
            best = subject;
        }
    }
    console.log(best.fitness);
    //making more of the best
    for(var i = 0; i < subjects.length; i++) {
        var subject = subjects[i];
        if(subject == best) {
            continue;
        }
        subject.red = best.red + getRandomInt(-10,10);
        subject.green = best.green + getRandomInt(-10,10);
        subject.blue = best.blue + getRandomInt(-10,10);
    }
    gen++;
}

function update() {
    document.getElementById("currentletter").innerHTML = "Current Letter: " + alphabet[num];
    document.getElementById("output").innerHTML = "Output: " + output;
    document.getElementById("gen").innerHTML = "Generation: " + generation;
    ctx.fillStyle = 'rgb(' + best.red + ',' + best.green + ',' + best.blue + ')';
    ctx.fillRect(10, 10, 150, 80);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function diff(a,b){return Math.abs(a-b);}
cycleLetters();


