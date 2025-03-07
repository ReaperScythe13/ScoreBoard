let red = document.getElementById("score");
let redg = document.getElementById("scoreg");
let scores = 0;
let scoreg = 0;

function updateBackground() {
    if (scores > scoreg) {
        document.body.style.backgroundColor = "lightblue"; // Change color when HOME is winning
    } else if (scores < scoreg) {
        document.body.style.backgroundColor = "coral"; // Change color when GUEST is winning
    } else {
        document.body.style.backgroundColor = "#1B244A"; // Reset when tied
    }
}

function score1() {
    scores += 1;
    red.innerHTML = scores;
    updateBackground();
}

function score2() {
    scores += 2;
    red.innerHTML = scores;
    updateBackground();
}

function score3() {
    scores += 3;
    red.innerHTML = scores;
    updateBackground();
}

function score1g() {
    scoreg += 1;
    redg.innerHTML = scoreg;
    updateBackground();
}

function score2g() {
    scoreg += 2;
    redg.innerHTML = scoreg;
    updateBackground();
}

function score3g() {
    scoreg += 3;
    redg.innerHTML = scoreg;
    updateBackground();
}

function resetgame() {
    scores = 0;
    scoreg = 0;
    redg.innerHTML = 0;
    red.innerHTML = 0;
    document.body.style.backgroundColor = "#1B244A"; // Reset background color
}
