import  movefunc from "./elementmove"
let mobilestyleadded
let mobilestyleremoved

function applyStylesOnScreenSize() {

    function applyStyles2() {
        movefunc.moveAllElements("navbarcollapse","login");
        movefunc.createSecondNavbarMobile();
        movefunc.moveAllElements("input-group-mobile","input-group")
    }
    function removeStyles2() {
        const child = document.getElementById("loginbotton");
        const PP = document.getElementById('login')
        PP.appendChild(child);
        movefunc.moveAllElements("input-group","input-group-mobile")
        const parentElement = document.getElementById("nav2");
        parentElement.innerHTML=""
    }
    function mobilestyleadd(){
        if(mobilestyleadded==1){return}
        else{

            applyStyles2();
            mobilestyleadded = 1
            mobilestyleremoved = 0

        }
    }
    function mobilestyleremove(){
        if(mobilestyleremoved==1){return}
        else{

            closenav();
            removeStyles2();
            mobilestyleremoved = 1
            mobilestyleadded = 0

        }
    }
    function handleResize() {
        if (window.innerWidth  > 768) {
            mobilestyleremove();
        }
        
        else{
               mobilestyleadd();
        } 
    }
    window.addEventListener('resize', handleResize);
    document.getElementById('togglenavbar').addEventListener("click",opennav);
    document.getElementById('closebtn').addEventListener("click",closenav);

    handleResize();
}

function opennav(){
    movefunc.moveAllElements("mainitems","navbarcollapse");
    document.getElementById("burgermenu").style.right='0'
    document.getElementById("Blurwhole").style.display='flex'
    document.getElementById("closebtn").style.display='flex'


}
function closenav(){
    movefunc.moveAllElements("navbarcollapse","mainitems",);
    document.getElementById("burgermenu").style.right='-280px'
    setTimeout(function(){document.getElementById("Blurwhole").style.display='none'
    document.getElementById("closebtn").style.display='none'}, 300);
}


  


    

    

  
  


export default {applyStylesOnScreenSize,opennav,closenav};
