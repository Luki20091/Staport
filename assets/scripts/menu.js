
var items = document.querySelectorAll(".menu-child");



items.forEach(function (item, index) {
    item.addEventListener('click', function (e) {
        closeMenu(e.target);
    });
});





function openMenu() {
    document.getElementById("menu-items").classList.toggle("menu-items-visible");
    document.getElementById("menu-home").classList.toggle("home-row");
    return false;
};

function closeMenu(el) {
    items.forEach(function (item) {
        document.getElementById("menu-items").classList.remove("menu-items-visible");
        document.getElementById("menu-home").classList.add("home-row");
        document.getElementById("toggle").checked = false;
        return false;
    });
};
