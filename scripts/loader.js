window.addEventListener("load", function() {
    const loader = this.document.querySelector(".loader");
    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", function () {
        document.body.removeChild("loader");
    })
})