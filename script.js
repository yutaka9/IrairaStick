'use strict'
// 1行目に記載している 'use strict' は削除しないでください
const myTop = document.getElementById("top");
const wall = document.getElementsByTagName("div") 
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
    console.log(h1.innerHTML);
    ivent();
  } else {
    h1.innerHTML = "イライラ棒";
    console.log(h1.innerHTML);
    ivent();
  }
})
