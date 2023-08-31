import LoadMobilePage from "../components/headerandnavbar/mobileV";
import category from "../components/headerandnavbar/dropdownmenu";
import loadtopbannercontent from "../components/mainsection/topbanner/topbanner";
import loadsubbanner from "../components/mainsection/subbaner/subbanner"
/*disable closing drop down onclick */

$(document).on('click', 'nav .dropdown-menu', function (e) {
    e.stopPropagation();
  });
  $(document).on('click', 'Dropdown3', function () {
    document.getElementsByClassName("dropdown-menu").stopPropagation();
  });

  
  
  category();
  loadtopbannercontent();
  loadsubbanner();
  LoadMobilePage.applyStylesOnScreenSize();




  

  