const mySidenav = document.getElementById("mySidenav")
const open = document.querySelector('#open')
/* Set the width of the side navigation to 250px */
function openNav() {
    mySidenav.style.width = "350px";
    open.style.display = 'none';
    document.querySelector('#close').style.display = 'block';
    
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    mySidenav.style.width = "0";
    open.style.display = 'block';
    document.querySelector('#close').style.display = 'none';
}

// When the sidenav is open && clicking outside of the sidenav, close it.
document.addEventListener('click', ((e) => {
    let a = e.target;
    if (a != mySidenav && a != document.querySelector('.closebtn') && a != document.querySelector('#open') && a != document.querySelector('#close')) {
        console.log('it happened')
        closeNav();
    }
}))


const sidenavButtons = document.querySelectorAll('.sidenavButton')
// When clicking items in the side-nav, scroll to target # with an added animation AND close the sideNav. 
for (let item of sidenavButtons) {
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        closeNav();
        e.preventDefault()
    })
}

const navItems = document.querySelectorAll('.navItem');
// Same as above, except for normal menu items. Note that this one doesn't close the sidenav.
for (let item of navItems) { 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}

window.addEventListener('resize', (() => {
    // CASE: WINDOW IS LESS THAN 1024PX, WHICH MEANS THE OPEN-BUTTON OUGHT TO BE VISIBLE
    if (window.innerWidth < 1024) {
        document.querySelector('#open').style.display = 'block';
    }  
    // GENERAL CASE: MENU CLOSED AND WINDOW RESIZED
    if (window.innerWidth >= 1024) {
        open.style.display = 'none';
        document.querySelector('#close').style.display = 'none';
    }
    // EDGE CASE: MENU IS OPEN, BUT WINDOW IS RESIZED
    if (document.querySelector("#mySidenav").style.width > "1px" && window.innerWidth >= 1024) {
        document.querySelector("#mySidenav").style.width = "0px";
        document.querySelector('#close').style.display = 'none';
        open.style.display = 'none';
    }
}))

// Add box shadow on navbar when event 'scroll' fires.
// As soon as it fires, set a timer for 0.3 sec. After that time has elapsed, add the box-shadow
// Have a counter initialized to 0. When 'scroll' fires, add 1;
// Make the function dependent on if (counter < 1);