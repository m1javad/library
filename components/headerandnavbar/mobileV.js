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
            topbannermobileactive();

            applyStyles1();
            applyStyles2();
            mobilestyleadded = 1
            mobilestyleremoved = 0

        }
    }
    function mobilestyleremove(){
        if(mobilestyleremoved==1){return}
        else{
            topbannermobiledeactive();

            closenav();
            removeStyles1();
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

function topbannermobileactive() {
    const bannercontainer = document.querySelector('.bannercontainer');
    const bannercontant = document.querySelector('.bannercontant');
    const bannertextsection = document.querySelector('.bannertextsection');
    const bannerline = document.querySelector('.bannerline');
    const bannertitle = document.querySelector('.bannertitle');
    const bannertext = document.querySelector('.bannertext');
    const bannerappinstall = document.querySelector('.bannerappinstall');
    const bannerbutton = document.querySelector('.bannerbutton');
    const imagecontainer = document.querySelector('.imagecontainer');
  
    bannercontainer.style.alignItems = 'flex-end';
    bannercontainer.style.height = '180px';
  
    bannercontant.style.alignItems = 'flex-end';
  
    bannertextsection.style.padding = '10px';
    bannertextsection.style.paddingBottom = '0';
    bannertextsection.style.height = '180px';
    bannertextsection.style.width = '200px';
    bannertextsection.style.gap = '0px';
  
   
    bannerline.style.width = '50px';
    bannerline.style.margin = '5px';
    
  
    bannertitle.style.textAlign = 'center';
    bannertitle.style.fontSize = '20px';
  
    
  
    bannertext.style.fontSize = '12px';
    bannertext.style.lineHeight = '15px';
  
    bannerappinstall.style.marginTop = '3px';
  
    bannerbutton.style.width = '120px';
    bannerbutton.style.height = '30px';
    bannerbutton.style.padding = '2px 4px';
    bannerbutton.style.border = '1px solid #FFFFFF';
    bannerbutton.style.fontSize = '10px';
  
    imagecontainer.style.height = '150px';
  }
  function topbannermobiledeactive() {
    const bannercontainer = document.querySelector('.bannercontainer');
    const bannercontant = document.querySelector('.bannercontant');
    const bannertextsection = document.querySelector('.bannertextsection');
    const bannerline = document.querySelector('.bannerline');
    const bannertitle = document.querySelector('.bannertitle');
    const bannertext = document.querySelector('.bannertext');
    const bannerappinstall = document.querySelector('.bannerappinstall');
    const bannerbutton = document.querySelector('.bannerbutton');
    const imagecontainer = document.querySelector('.imagecontainer');
  
    bannercontainer.style.alignItems = 'center';
    bannercontainer.style.height = '380px';
  
    bannercontant.style.alignItems = 'center';
  
    bannertextsection.style.padding = 'unset';
    bannertextsection.style.paddingBottom = 'unset';
    bannertextsection.style.height = 'unset';
    bannertextsection.style.width = 'unset';
    bannertextsection.style.gap = '15px';
  
   
    bannerline.style.width = '550px';
    bannerline.style.margin = 'unset';
    
  
    bannertitle.style.textAlign = 'unset';
    bannertitle.style.fontSize = '38px';
  
    
  
    bannertext.style.fontSize = '25px';
    bannertext.style.lineHeight = '35px';
  
    bannerappinstall.style.marginTop = '5px';
  
    bannerbutton.style.width = `250px`;
    bannerbutton.style.height = '50px';
    bannerbutton.style.padding = '8px 30px';
    bannerbutton.style.border = '2px solid #FFFFFF';
    bannerbutton.style.fontSize = '20px';
  
    imagecontainer.style.height = '380px';
  
  }


    

    

  
  


export default {applyStylesOnScreenSize,opennav,closenav};
