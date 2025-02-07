
document.querySelectorAll(".ntb").forEach(button => {
    button.addEventListener("click", function() {
        alert(this.getAttribute("data-msg"));
    });
});