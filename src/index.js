import LoadCategory from "../components/dropdownmenu";
import LoadMobilePage from "../components/mobileV";
import mobile from "../components/mobileV";
/*disable closing drop down onclick */

$(document).on('click', 'nav .dropdown-menu', function (e) {
    e.stopPropagation();
  });
  $(document).on('click', 'Dropdown3', function () {
    document.getElementsByClassName("dropdown-menu").stopPropagation();
  });

  
  LoadMobilePage.applyStylesOnScreenSize();
  LoadCategory()