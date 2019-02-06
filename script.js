/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.querySelector('#open').style.display = 'none';
    document.querySelector('#close').style.display = 'block';
    
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector('#open').style.display = 'block';
    document.querySelector('#close').style.display = 'none';
  }

  window.addEventListener('resize', (() => {
    // CASE: WINDOW IS LESS THAN 1024PX, WHICH MEANS THE OPEN-BUTTON OUGHT TO BE VISIBLE
    if (window.innerWidth < 1024) {
        document.querySelector('#open').style.display = 'block';
    }  
    // GENERAL CASE: MENU CLOSED AND WINDOW RESIZED
    if (window.innerWidth >= 1024) {
        document.querySelector('#open').style.display = 'none';
        document.querySelector('#close').style.display = 'none';
      }
    // EDGE CASE: MENU IS OPEN, BUT WINDOW IS RESIZED
    if (document.querySelector("#mySidenav").style.width > "1px" && window.innerWidth >= 1024) {
        document.querySelector("#mySidenav").style.width = "0px";
        document.querySelector('#close').style.display = 'none';
        document.querySelector('#open').style.display = 'none';
    }
}))

  // Add box shadow on navbar when event 'scroll' fires.
  // As soon as it fires, set a timer for 0.3 sec. After that time has elapsed, add the box-shadow
  // Have a counter initialized to 0. When 'scroll' fires, add 1;
  // Make the function dependent on if (counter < 1);