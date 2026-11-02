const fortunes = [
    "True wisdom comes not from knowledge, but from understanding.",
    "A beautiful, smart, and loving person will be coming into your life.",
    "Your high-minded principles spell success.",
    "Hard work pays off in the future, laziness pays off now.",
    "Change can hurt, but it leads a path to something better.",
    "A dream you have will come true.",
    "You will become great if you believe in yourself.",
    "Wealth awaits you very soon.",
    "Do not let the past dictate your future.",
    "An exciting opportunity lies ahead of you.",
    "Luck is what happens when preparation meets opportunity.",
    "Fortune favors the bold.",
    "The journey of a thousand miles begins with a single step.",
    "Knowing yourself is the beginning of all wisdom.",
    "The best time to plant a tree was twenty years ago. The second best time is now."
];

const fortuneText = document.getElementById("fortune-text");
const fortuneBox = document.getElementById("fortune-box");

window.onload = function() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    fortuneText.innerText = fortunes[randomIndex];
};

const themes = {
    theme1: { fontColor: "#cc0000", bgColor: "#ffd866", borderColor: "#5d8a3f", fontSize: "18px", fontFamily: "sans-serif" }, 
    theme2: { fontColor: "#ffffff", bgColor: "#5c9fd6", borderColor: "#ffb300", fontSize: "20px", fontFamily: "'Courier New', Courier, monospace" },
    theme3: { fontColor: "#333333", bgColor: "#f35757", borderColor: "#389ef2", fontSize: "22px", fontFamily: "Georgia, serif" },
    theme4: { fontColor: "#004d40", bgColor: "#94fff6", borderColor: "#00796b", fontSize: "24px", fontFamily: "'Times New Roman', Times, serif" }
};

function applyTheme(theme) {
    fortuneText.style.color = theme.fontColor;
    fortuneText.style.fontSize = theme.fontSize;
    fortuneText.style.fontFamily = theme.fontFamily;
    fortuneBox.style.backgroundColor = theme.bgColor;
    fortuneBox.style.borderColor = theme.borderColor;
}

document.getElementById("btn-theme1").addEventListener("click", function() { applyTheme(themes.theme1); });
document.getElementById("btn-theme2").addEventListener("click", function() { applyTheme(themes.theme2); });
document.getElementById("btn-theme3").addEventListener("click", function() { applyTheme(themes.theme3); });
document.getElementById("btn-theme4").addEventListener("click", function() { applyTheme(themes.theme4); });