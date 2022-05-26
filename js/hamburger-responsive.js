function hamburger() {
    var x = document.getElementById("header");
    if (x.className === "fixed-top navbar") {
      x.className += " responsive";
    } else {
      x.className = "fixed-top navbar";
    }
}