function startCelebration() {
    document.querySelector(".welcome-screen").classList.add("hidden");
    document.querySelector(".main-content").classList.remove("hidden");
}

function sendMessage() {
    alert("Your birthday wish has been sent to Cherlyn! 🎉");
}

function submitWish() {
    let wishText = document.getElementById("wish-text").value;
    if (wishText.trim() !== "") {
        let wishList = document.getElementById("wish-list");
        let newWish = document.createElement("p");
        newWish.textContent = wishText;
        wishList.appendChild(newWish);
        document.getElementById("wish-text").value = "";
    }
}

function toggleMusic() {
    let music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
        document.getElementById("music-toggle").textContent = "🔇 Stop Music";
    } else {
        music.pause();
        document.getElementById("music-toggle").textContent = "🎵 Play Music";
    }
}

// Typing effect
let text = "Happy Birthday Cherlyn! 🎉🎈 Wishing you a fantastic day filled with joy and happiness!";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-effect").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
window.onload = typeEffect;
