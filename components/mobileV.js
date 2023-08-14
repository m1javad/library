import  movefunc from "./elementmove"


function applyStylesOnScreenSize() {
    const navbarHeader = document.querySelector('.navbar-header');
    const lefts = document.querySelector('.lefts');
    const navbarBrandC = document.querySelector('.navbar-brandC');
    const navbarToggleC = document.querySelector('.navbar-toggleC');
    const cartC = document.querySelector('.cartC');
    const inputGroup = document.querySelector('#input-group');

    function applyStyles1() {
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

    function handleResize() {
        console.log(screen.width)
        if (screen.width  > 768) {
            removeStyles1();
            removeStyles2();
        }
        else{
            applyStyles2();
            applyStyles1();} 
    }

    window.addEventListener('resize', handleResize);
    
    handleResize();
}
  
   
    function applyStyles2() {
        movefunc.moveAllElements("navbarcollapse","login");
        movefunc.createSecondNavbarMobile();
        movefunc.moveElementToParent("input-group","input-group-mobile")

    }

    function removeStyles2() {
        movefunc.moveElementToParent("input-group","navbarheader")
        movefunc.undocreateSecondNavbarMobile("nav2")

    }

    

    

  
  


export default {applyStylesOnScreenSize};
;