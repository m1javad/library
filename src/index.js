import LoadMobilePage from "../components/mobileV";
import category from "../components/dropdownmenu";
import loadcategoryside from "../components/mobilecategory";
/*disable closing drop down onclick */

$(document).on('click', 'nav .dropdown-menu', function (e) {
    e.stopPropagation();
  });
  $(document).on('click', 'Dropdown3', function () {
    document.getElementsByClassName("dropdown-menu").stopPropagation();
  });

  category();
  LoadMobilePage.applyStylesOnScreenSize();

  