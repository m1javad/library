import  movefunc from "./elementmove"
let mobilestyleadded
let mobilestyleremoved

function applyStylesOnScreenSize() {
    const navbarHeader = document.querySelector('.navbar-header');
    const lefts = document.querySelector('.lefts');
    const navbarBrandC = document.querySelector('.navbar-brandC');
    const navbarToggleC = document.querySelector('.navbar-toggleC');
    const cartC = document.querySelector('.cartC');
    const inputGroup = document.querySelector('#input-group');
    const searchbar = document.querySelector('#search-bar');
    const dropdownbotton = document.querySelector('#dropdownbotton');


    function applyStyles1() {
        searchbar.style.width='85vw';
        navbarHeader.style.gap = '0px';
        navbarHeader.style.display = 'grid';
        navbarHeader.style.gridTemplate = '1fr/1fr 3fr 1fr';
        lefts.style.gridArea = '1/1/2/2';
        lefts.style.display = 'flex';
        lefts.style.justifyContent = 'flex-start';
        lefts.style.alignItems = 'center';
        lefts.style.width = '40px';
        navbarBrandC.style.gridArea = '1/2/2/3';
        navbarToggleC.style.position = 'absolute';
        navbarToggleC.style.right = '15px';
        cartC.style.position = 'absolute';
        cartC.style.left = '15px';
        navbarBrandC.style.alignSelf = 'center';
        inputGroup.style.display = 'none';
        inputGroup.style.position = 'absolute';
    }

    function removeStyles1() {
        searchbar.style.width='65vw'
        navbarHeader.style.gap = '25px';
        navbarHeader.style.display = '';
        navbarHeader.style.gridTemplate = '';
        lefts.style.gridArea = '';
        lefts.style.display = '';
        lefts.style.justifyContent = '';
        lefts.style.alignItems = '';
        lefts.style.width = '';
        navbarBrandC.style.gridArea = '';
        navbarToggleC.style.position = '';
        navbarToggleC.style.right = '';
        cartC.style.position = '';
        cartC.style.left = '';
        navbarBrandC.style.alignSelf = '';
        inputGroup.style.display = '';
        inputGroup.style.position = '';
    }

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
            applyStyles1();
            applyStyles2();
            mobilestyleadded = 1
            mobilestyleremoved = 0

        }
    }
    function mobilestyleremove(){
        if(mobilestyleremoved==1){return}
        else{
            closenav();
            removeStyles1()
            removeStyles2()
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
    document.getElementById("navbarfixed").style.position='static'
    document.getElementById("closebtn").style.display='flex'


}
function closenav(){
    movefunc.moveAllElements("navbarcollapse","mainitems",);
    document.getElementById("burgermenu").style.right='-280px'
    setTimeout(function(){document.getElementById("Blurwhole").style.display='none'
    document.getElementById("navbarfixed").style.position='fixed'
    document.getElementById("closebtn").style.display='none'}, 300);
}



    

    

  
  


export default {applyStylesOnScreenSize,opennav,closenav};
;