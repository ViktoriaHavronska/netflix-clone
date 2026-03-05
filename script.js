const rows = document.querySelectorAll('.movie-row');

rows.forEach(row => {
    const leftBtn = document.createElement("button");
    const rightBtn = document.createElement("button");

    leftBtn.innerHTML = "❮";
    rightBtn.innerHTML = "❯";

    leftBtn.classList.add("carousel-btn", "left");
    rightBtn.classList.add("carousel-btn", "right");

    row.parentElement.appendChild(leftBtn);
    row.parentElement.appendChild(rightBtn);

    leftBtn.addEventListener("click", () => {
        row.scrollBy({
            left: -400,
            behavior: "smooth"
        });
    });

    rightBtn.addEventListener("click", () => {
        row.scrollBy({
            left: 400,
            behavior: "smooth"
        });
    });
});
