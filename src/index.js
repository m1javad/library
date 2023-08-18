import LoadMobilePage from "../components/headerandnavbar/mobileV";
import category from "../components/headerandnavbar/dropdownmenu";
/*disable closing drop down onclick */

$(document).on('click', 'nav .dropdown-menu', function (e) {
    e.stopPropagation();
  });
  $(document).on('click', 'Dropdown3', function () {
    document.getElementsByClassName("dropdown-menu").stopPropagation();
  });

  category();
  LoadMobilePage.applyStylesOnScreenSize();

  