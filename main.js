const menu = document.querySelector(".menu");
const firstspan = document.querySelector("#f-line");
const secondspan = document.querySelector("#s-line");
const thirdspan = document.querySelector("#t-line");
let hiddenmenu = document.querySelector(".hidden-menu");
let turn = 0;

function showhiddenmenu() {
    menu.addEventListener("click", function() {
        if(turn == 0) {
            hiddenmenu.style.cssText = "opacity: 1; transform: translateX(10px);";
            secondspan.style.display = "none";
            firstspan.style.cssText = "transform: rotate(45deg); top: 7px;";
            thirdspan.style.cssText = "transform: rotate(-45deg); top: 7px;";
            turn = 1;
        } else {
            hiddenmenu.style.cssText = "opacity: 0; transform: translateX(-390px);";
            firstspan.style.cssText = "transform: rotate(0); top: 0px;";
            thirdspan.style.cssText = "transform: rotate(0); top: 14px;";
            secondspan.style.display = "block";
            turn = 0
        }
    });
}
showhiddenmenu(); 
/*--------------------------------------------------------------------------------- */


const showmorebtn = document.querySelector(".s-m button"); 
const forthpage = document.querySelectorAll(".f-page > div");
const forth = document.querySelector(".f-page");
let turn1 = 0;


function showmore(){
    showmorebtn.onclick = function() {     // in Case That Each Row Have 3 Boxes
        if(turn1 == 0) {
            forthpage.forEach(el => {
                if(el.classList.contains("hide")) {
                    el.classList.replace("hide", "show");
                }
            })
                turn1 = 1;
                showmorebtn.textContent = "Show Less.";
        } else {
            forthpage.forEach(el => {
                if(el.classList.contains("show")) {
                    el.classList.replace("show", "hide");
                }
            })
                turn1 = 0;
                showmorebtn.textContent = "Show More.";
        }
    };
}
showmore();

/*--------------------------------------------------------------------------------- */
const upbtn = document.querySelector(".up-btn");
const header = document.querySelector(".head");
window.onscroll = function() {
    if(window.scrollY >= 39) {
        header.style.cssText = "position: sticky; top: -5px; background-color: #fff; z-index: 99;"; 
    } else if (window.scrollY < 39){
        header.style.cssText = "position:static; background-color: #fff; z-index: 99;"
    }

    if(window.scrollY >= 200) {
        upbtn.style.cssText = "transform: translate(0, 0px);";
        
    } else {
        upbtn.style.cssText = "transform: translate(0, 54px);";
        
    }
}
/*--------------------------------------------------------------------------------- */


