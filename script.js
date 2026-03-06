const rows = document.querySelectorAll('.movie-row');
const header = document.querySelector('.header');
const cards = document.querySelectorAll('.movie-card');
const modal = document.querySelector('.movie-modal');
const closeModal = document.querySelector('.close-modal');
const searchInput = document.getElementById("searchInput");
const movieCards = document.querySelectorAll(".movie-card");

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

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

cards.forEach(card => {
    card.addEventListener("click", () => {
        modal.style.display = "flex";
    });
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

searchInput.addEventListener("keyup", function () {
    const searchValue = searchInput.value.toLowerCase();
    movieCards.forEach(card => {
        const title = card.getAttribute("data-title").toLowerCase();

        if (title.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});