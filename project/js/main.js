const exploreBtns = document.querySelectorAll(".explore-btn");
const popup = document.getElementById("housePopup");
const popupImage = document.getElementById("popupImage");
const closePopup = document.getElementById("closePopup");
/* OPEN */
exploreBtns.forEach((button) => {
    button.addEventListener("click", () => {
        const image =
            button.getAttribute("data-image");
        popupImage.src = image;
        popup.classList.add("show");
    });
});
/* CLOSE BUTTON */
closePopup.addEventListener("click", () => {
    popup.classList.remove("show");
});
/* OUTSIDE CLICK */
popup.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.classList.remove("show");
    }
});


const policyButtons =
    document.querySelectorAll(".policy-btn");

policyButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const content =
            button.nextElementSibling;

        content.classList.toggle("active");

    });

});