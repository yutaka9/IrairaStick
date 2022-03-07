'use strict'
// 1行目に記載している 'use strict' は削除しないでください
const myTop = document.getElementById("top");
const wall = document.getElementsByTagName("div") 
const wall3 = document.getElementById("wall3");
const wall4 = document.getElementById("wall4");
const wall5 = document.getElementById("wall5");
const wall6 = document.getElementById("wall6");
const wall7 = document.getElementById("wall7");
const wall8 = document.getElementById("wall8");
const gameover = document.getElementById("gameover");
const gameclear = document.getElementById("clear");
const h1 = document.querySelector("h1");
let flg = 1;
ivent();
function ivent(){
  for (const element of wall){
    if (element.id === "goal"){      
      element.addEventListener("mouseover",function(){
        gameclear.style.zIndex = "5";
        });
    } 
    if (element.id !== "goal" && h1.innerHTML ==="イライラ棒") {
      element.addEventListener("mouseover",function(){
        gameover.style.zIndex = "5";
        });
    } else {
      element.addEventListener("mouseover",function(){
        gameover.style.zIndex = "-5";
        });
    }
  };
}

gameover.addEventListener("mouseleave",function(){
  gameover.style.zIndex = "-5";
  gameclear.style.zIndex = "-5";
})
gameclear.addEventListener("mouseleave",function(){
  gameover.style.zIndex = "-5";
  gameclear.style.zIndex = "-5";
})

h1.addEventListener("click",() => {
  if (h1.innerHTML === "イライラ棒"){
    h1.innerHTML = "イライラしない棒";
    ivent();
  } else {
    h1.innerHTML = "イライラ棒";
    ivent();
  }
})
let count5 = 0;
setInterval(function (){
  if (count5 === 0){
    count5 = -5;
    wall5.style.zIndex = count5;
    wall6.style.zIndex = count5;
  } else {
    count5 = 0;
    wall5.style.zIndex = count5;
    wall6.style.zIndex = count5;
  }
},1000)
let count7 = 0;
setInterval(function (){
  if (count7 === 0){
    count7 = -5;
    wall7.style.zIndex = count7;
    wall8.style.zIndex = count7;
  } else {
    count7 = 0;
    wall7.style.zIndex = count7;
    wall8.style.zIndex = count7;
  }
},700)
let count3 = 0;
let left3 = 300;
setInterval(function (){
  if (count3 === 0){
    left3 += 1;
    wall3.style.left = `${left3}px`;
    if (left3 >350){
      count3 = 1
    }
  } else {
    left3 -= 1;
    wall3.style.left = `${left3}px`;
    if (left3 <300){
      count3 = 0;
    }
  }
},40)
let left4 = 400;
let count4 = 0
setInterval(function (){
  if (count4 === 0){
    left4 += 1;
    wall4.style.left = `${left4}px`;
    if (left4 >460){
      count4 = 1
    }
  } else {
    left4 -= 1;
    wall4.style.left = `${left4}px`;
    if (left4 <400){
      count4 = 0;
    }
  }
},20)
