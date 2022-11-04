const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
    panel.addEventListener("click", function() {
        removeClassPanel();
        panel.classList.add("active");
    });
});

function removeClassPanel() {
    panels.forEach((panel) => panel.classList.remove("active"));
}