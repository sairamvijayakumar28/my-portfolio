// Typing Effect
const text = "Hi, I'm Sairam 👋";
let index = 0;

function typingEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect,90);
  }
}
typingEffect();

// Scroll Animation
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.scrollY + window.innerHeight - 100;

  sections.forEach((sec) => {
    if (scrollY > sec.offsetTop) {
      sec.classList.add("show-section");
    }
  });
});
