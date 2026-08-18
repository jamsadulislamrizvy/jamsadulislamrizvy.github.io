const phrases = [
  "CSE Student",
  "AI & Machine Learning Enthusiast",
  "Problem Solver",
  "Future Software Engineer"
];
const typing = document.getElementById("typing");
let p = 0, c = 0, deleting = false;

function type(){
  const word = phrases[p];
  typing.textContent = deleting ? word.slice(0, --c) : word.slice(0, ++c);
  let speed = deleting ? 55 : 90;
  if(!deleting && c === word.length){ speed = 1400; deleting = true; }
  else if(deleting && c === 0){ deleting = false; p = (p + 1) % phrases.length; speed = 350; }
  setTimeout(type, speed);
}
type();

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("show"); });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const menu = document.querySelector(".menu-btn");
const links = document.querySelector(".links");
menu.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll(".links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e=>{
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const particles = document.querySelector(".particles");
for(let i=0;i<45;i++){
  const dot=document.createElement("span");
  dot.className="particle";
  dot.style.left=Math.random()*100+"%";
  dot.style.top=Math.random()*100+"%";
  dot.style.animationDuration=(7+Math.random()*12)+"s";
  dot.style.animationDelay=(-Math.random()*12)+"s";
  particles.appendChild(dot);
}
