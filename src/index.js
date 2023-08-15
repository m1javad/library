import LoadMobilePage from "../components/mobileV";
import LoadCategory from "../components/dropdownmenu";
/*disable closing drop down onclick */

$(document).on('click', 'nav .dropdown-menu', function (e) {
    e.stopPropagation();
  });
  $(document).on('click', 'Dropdown3', function () {
    document.getElementsByClassName("dropdown-menu").stopPropagation();
  });

 
  LoadMobilePage.applyStylesOnScreenSize();
  LoadCategory();

  