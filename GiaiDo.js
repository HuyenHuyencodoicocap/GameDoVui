
var gameArray = [];
var game = document.getElementById("game");
for (let j = 0; j < 5; j++) {
    gameArray.push([]);
    for (let i = 0; i < 5; i++) {
        var x = document.createElement("input");
        x.type = "checkbox";
        game.appendChild(x);
        x.style.width = "25px";
        x.style.height = "25px";
        x.setAttribute("i", i);
        x.setAttribute("j", j);
        x.checked = true;
        gameArray[j].push(x);

    }
    var y = document.createElement("br");
    game.appendChild(y);



}

game.style.textAlign = "center";
for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
        gameArray[i][j].onclick = function () {

            let tungDo = this.getAttribute("j");
            let hoanhDo = this.getAttribute("i");
            gameArray[tungDo][hoanhDo].checked ^= true;

            if (hoanhDo == 0 && tungDo == 0) {
                gameArray[tungDo][hoanhDo - 0 + 1].checked ^= true;
                gameArray[tungDo - 0 + 1][hoanhDo].checked ^= true;

            }
            else if (hoanhDo == 4 && tungDo == 4) {
                gameArray[tungDo][hoanhDo - 0 - 1].checked ^= true;
                gameArray[tungDo - 0 - 1][hoanhDo].checked ^= true;

            }
            else if (hoanhDo == 0 && tungDo == 4) {
                gameArray[tungDo][hoanhDo - 0 + 1].checked ^= true;
                gameArray[tungDo - 0 - 1][hoanhDo].checked ^= true;

            }
            else if (hoanhDo == 4 && tungDo == 0) {
                gameArray[tungDo][hoanhDo - 0 - 1].checked ^= true;
                gameArray[tungDo - 0 + 1][hoanhDo].checked ^= true;

            }
            else if (tungDo >= 4) {
                gameArray[tungDo - 0 - 1][hoanhDo].checked ^= true;
                gameArray[tungDo][hoanhDo - 0 - 1].checked ^= true;
                gameArray[tungDo][hoanhDo - 0 + 1].checked ^= true;

            } else if (tungDo <= 0) {
                gameArray[tungDo][hoanhDo - 0 - 1].checked ^= true;
                gameArray[tungDo][hoanhDo - 0 + 1].checked ^= true;
                gameArray[tungDo - 0 + 1][hoanhDo].checked ^= true;

            }
            else if (hoanhDo >= 4) {
                gameArray[tungDo][hoanhDo - 0 - 1].checked ^= true;
                gameArray[tungDo - 0 - 1][hoanhDo].checked ^= true;
                gameArray[tungDo - 0 + 1][hoanhDo].checked ^= true;

            } else if (hoanhDo <= 0) {
                gameArray[tungDo][hoanhDo - 0 + 1].checked ^= true;
                gameArray[tungDo - 0 - 1][hoanhDo].checked ^= true;
                gameArray[tungDo - 0 + 1][hoanhDo].checked ^= true;
            } else {
                gameArray[tungDo][hoanhDo - 0 - 1].checked ^= true;
                gameArray[tungDo][hoanhDo - 0 + 1].checked ^= true;
                gameArray[tungDo - 0 - 1][hoanhDo].checked ^= true;
                gameArray[tungDo - 0 + 1][hoanhDo].checked ^= true;
            }

            checkWin();


        }
    }
}
for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
        let randomX = Math.floor(Math.random() * 5);
        let randomY = Math.floor(Math.random() * 5);
        gameArray[randomX][randomY].click();
    }
}

let clock = document.getElementById("clock");
let start = 30;
let timeId;
function myMinus() {
    start--;
    if (start > 0) {
        timeId= setTimeout(() => {
            myMinus()
        }, 1000);
        clock.innerHTML = "&#9200;" + start + "s";
    } else {
        for (let j = 0; j < 5; j++) {
            for (let i = 0; i < 5; i++) {
                gameArray[j][i].disabled = true; 
            }
        } clock.innerHTML = "Hết giờ !"
        clock.style.color = "red";
        clock.style.fontFamily = "Verdana";
        replay.style.display="block";

    }


}

let batDau= document.getElementById("start");
batDau.onclick= function(){
    myMinus();
    batDau.style.display="none";

}
//replay
var replay= document.getElementById("playAgain");
function replayGame(){
    location.reload();
}
replay.onclick= function(){
    replayGame();
    backgroundMusic.play();

}


// win

let win = document.getElementById("win");
function checkWin() {
    let check = true;
    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 5; i++) {
            if (gameArray[i][j].checked == false) {
                check = false;
            }
        }
    }
    if (check == true) {
        clearTimeout(timeId);
        for (let j = 0; j < 5; j++) {
            for (let i = 0; i < 5; i++) {
                gameArray[j][i].disabled = true; // Vô hiệu hóa từng ô input
            }
        }
        win.innerHTML = "🎉" + "Win";
        win.style.color = "red";
        win.style.fontFamily = "Verdana";
        replay.style.display="block";


    }

}
// an quy tắc sau 5s
let rules= document.getElementById("rules");
setTimeout(() => {
    rules.style.opacity = "0";
    setTimeout(() => {
        rules.style.display = "none"; 
    }, 2000);

}, 8000);

// Phát nhạc nền khi trang tải xong
var backgroundMusic = document.getElementById("backgroundMusic");
backgroundMusic.play();


















