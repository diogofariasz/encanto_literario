
document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", function() {
        alert(this.getAttribute("data-msg"));
    });
});