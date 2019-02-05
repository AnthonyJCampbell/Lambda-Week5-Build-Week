/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.querySelector('#open').style.display = 'none';
    document.querySelector('#close').style.display = 'block';
    
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "initial";
    document.querySelector('#open').style.display = 'block';
    document.querySelector('#close').style.display = 'none';
  }
  