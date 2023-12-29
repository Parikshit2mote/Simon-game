let gameseq = [];
let userseq = [];
let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2")

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is started");
        started = true;
        levelUp();
    }
}
);

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash")
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}

function checkAns(idx){
if(userseq[idx] === gameseq[idx]){
    if(userseq.length == gameseq.length){
        setTimeout(levelUp, 1000);
    }
} else{
    h2.innerHTML = `Game over! Your score was <b>${level}</b><br>Press any key to start.`
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    }, 200);
    reset();
}
};

function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level is ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    // console.log(randIdx);
    // console.log(randColor);\
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
   btn.addEventListener("click",btnPress);
};

function reset(){
    started = false;
    userseq = [];
    gameseq = [];
    level = 0;
}