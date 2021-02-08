function show_hide(obj) {
    var x = document.getElementById(obj);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}