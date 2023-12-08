const topBarDropDownButton = document.getElementById('topBarDropDownButton');
let sideBarToggle = false;
const sideBarContainer = document.getElementById('sideBarContainer');

function toggleSidebar() {
    sideBarContainer.classList.toggle('show-sidebar');
    if (sideBarToggle === false) {
        sideBarToggle = true;
        topBarDropDownButton.style.color = 'rgb(66, 66, 66)';
        return;
    }
    if (sideBarToggle === true) {
        sideBarToggle = false;
        topBarDropDownButton.style.color = 'white';
    }
}

topBarDropDownButton.addEventListener('click', toggleSidebar);

function handleResize() {
    // Check the screen width and toggle sidebar accordingly
    if (window.innerWidth >= 950 && sideBarToggle === true) {
        toggleSidebar();
    }
}

// Call handleResize when the page loads
handleResize();

// Call handleResize when the window is resized
window.addEventListener('resize', handleResize);

topBarDropDownButton.addEventListener('mouseenter', function(){
    if(sideBarToggle === false){
        topBarDropDownButton.style.color = 'rgb(66, 66, 66)'
    }
})
topBarDropDownButton.addEventListener('mouseleave', function(){
    if(sideBarToggle === false){
        topBarDropDownButton.style.color = 'white'
    }
})