document.addEventListener("DOMContentLoaded", function () {
    const activities = document.querySelectorAll(".activity");

    activities.forEach(activity => {
        activity.addEventListener("mouseenter", () => {
            activity.querySelector(".overlay").style.bottom = "0";
        });

        activity.addEventListener("mouseleave", () => {
            activity.querySelector(".overlay").style.bottom = "-100%";
        });
    });
});
