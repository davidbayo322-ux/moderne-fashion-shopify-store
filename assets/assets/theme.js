// =====================================
// MODERNE Shopify Theme
// Author: David Bayo
// =====================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("MODERNE Shopify Theme Loaded");

    const menuButton = document.querySelector(".menu-toggle");

    if (menuButton) {
        menuButton.addEventListener("click", () => {
            document.body.classList.toggle("menu-open");
        });
    }
});
