// Contact form submission alert
function showMessage() {
    alert("Thank you! Your message has been sent successfully.");
}

// Hamburger Menu for Mobile
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const toggleBtn = document.createElement("div");
    toggleBtn.innerHTML = "☰";
    toggleBtn.style.fontSize = "24px";
    toggleBtn.style.color = "white";
    toggleBtn.style.cursor = "pointer";
    toggleBtn.style.display = "none"; // hidden for desktop

    document.querySelector("header").appendChild(toggleBtn);

    toggleBtn.addEventListener("click", () => {
        if (nav.style.display === "flex" || nav.style.display === "") {
            nav.style.display = "block";
            nav.style.flexDirection = "column";
        } else {
            nav.style.display = "flex";
            nav.style.flexDirection = "row";
        }
    });

    // Show hamburger only on small screens
    function checkWidth() {
        if (window.innerWidth <= 768) {
            toggleBtn.style.display = "block";
            nav.style.display = "none";
        } else {
            toggleBtn.style.display = "none";
            nav.style.display = "flex";
            nav.style.flexDirection = "row";
        }
    }

    checkWidth();
    window.addEventListener("resize", checkWidth);
});

// Smooth scroll for all buttons linking sections
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function(e){
        const href = btn.getAttribute("href");
        if(href.startsWith("#")) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({behavior:"smooth"});
        }
    });
});