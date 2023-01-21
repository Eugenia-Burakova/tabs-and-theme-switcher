function openSection(event, roomType) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(roomType).style.display = "block";
    event.currentTarget.className += " active";
}

//theme switcher
let switcher = document.getElementById("switcher");
let themeElements = document.querySelectorAll(".theme");

switcher.addEventListener("click", function () {
    themeElements.forEach(changeTheme);
    function changeTheme(themeElement) {
        if (switcher.checked == true) {
            themeElement.classList.add("dark-theme");
        } else {
            themeElement.classList.remove("dark-theme");
        }
    }
})