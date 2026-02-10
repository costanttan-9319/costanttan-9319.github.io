// main.js

// 1. Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// 2. Simple console check to ensure JS is linked correctly
console.log("Portfolio script loaded successfully.");

// 3. Optional: Close dropdown if clicking outside (for mobile usability)
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}