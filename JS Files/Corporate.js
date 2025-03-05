document.addEventListener("DOMContentLoaded", function () {
    let masterCourtroom = document.querySelector(".MasterCourtroom");

    masterCourtroom.addEventListener("mouseenter", function () {
        masterCourtroom.classList.add("hovered");
    });
});
