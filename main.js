/* ---------------------------------------------------
   ULTRA PREMIUM LOVE EFFECTS (JS ONLY)
--------------------------------------------------- */

const flowers = ["🌸", "🌺", "🌷", "🌼"];
const hearts  = ["💗"];
const butterflies = ["🦋", "🦋", "🦋"]; 
const sparkColors = ["#ff9dd9", "#ffd3f7", "#fff2b3", "#ffe6ff"];





// Utility: create animated element
function createAnimatedElement(char, sizeMin, sizeMax, durationMin, durationMax, curvePower) {
    const el = document.createElement("div");
    el.innerHTML = char;
    el.style.position = "fixed";
    el.style.bottom = "-10%";
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = (sizeMin + Math.random() * sizeMax) + "px";
    el.style.zIndex = "9999";
    el.style.pointerEvents = "none";
    el.style.opacity = "1";

    const duration = durationMin + Math.random() * durationMax;
    const curveX = Math.random() < 0.5 ? -1 : 1;
    const curveAmt = Math.random() * curvePower;

    el.animate([
        { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
        { transform: `translate(${curveX * curveAmt}px, -120vh) rotate(${360 + Math.random() * 360}deg)`, opacity: 0 }
    ], {
        duration: duration * 1000,
        easing: "ease-out",
        fill: "forwards"
    });

    document.body.appendChild(el);
    setTimeout(() => el.remove(), duration * 1000);
}




/* ---------------------------------------------------
   1) Premium Upward Flowers
--------------------------------------------------- */
setInterval(() => {
    const flower = flowers[Math.floor(Math.random() * flowers.length)];
    createAnimatedElement(flower, 20, 30, 4, 5, 80);
}, 350);

/* ---------------------------------------------------
   2) Romantic Floating Hearts (slow & aesthetic)
--------------------------------------------------- */
setInterval(() => {
    const heart = hearts[Math.floor(Math.random() * hearts.length)];
    createAnimatedElement(heart, 28, 35, 5, 6, 40);
}, 700);

/* ---------------------------------------------------
   3) Soft Golden Sparkles (premium effect)
--------------------------------------------------- */
setInterval(() => {
    const spark = document.createElement("div");
    spark.style.position = "fixed";
    spark.style.left = Math.random() * 100 + "vw";
    spark.style.top = Math.random() * 100 + "vh";
    spark.style.width = "6px";
    spark.style.height = "6px";
    spark.style.borderRadius = "50%";
    spark.style.background = sparkColors[Math.floor(Math.random() * sparkColors.length)];
    spark.style.filter = "blur(2px)";
    spark.style.zIndex = "9999";

    spark.animate([
        { transform: "scale(0.2)", opacity: 1 },
        { transform: "scale(1.2)", opacity: 0 }
    ], {
        duration: 1200,
        easing: "ease-out",
        fill: "forwards"
    });

    document.body.appendChild(spark);
    setTimeout(() => spark.remove(), 1300);
}, 120);





/* ---------------------------------------------------
   4) Cute Butterflies flying diagonally
--------------------------------------------------- */
setInterval(() => {
    const bf = butterflies[Math.floor(Math.random() * butterflies.length)];
    const el = document.createElement("div");
    el.innerHTML = bf;
    el.style.position = "fixed";
    el.style.left = "-10%";
    el.style.bottom = Math.random() * 60 + "vh";
    el.style.fontSize = (35 + Math.random() * 15) + "px";
    el.style.pointerEvents = "none";

    const duration = 9 + Math.random() * 4;
    const endY = Math.random() * 80 + "vh";

    el.animate([
        { transform: "translate(0,0) scale(1)", opacity: 1 },
        { transform: `translate(120vw, -${endY}) scale(1.3)`, opacity: 0.7 }
    ], {
        duration: duration * 1000,
        easing: "ease-in-out",
        fill: "forwards"
    });

    document.body.appendChild(el);
    setTimeout(() => el.remove(), duration * 1000);
}, 2000);

function sendAnswer(answer) {
    // show popup text
    document.getElementById("popupText").innerText =
      "Your answer '" + answer + "' Your note is now safe with me… forever. ❤️";
    document.getElementById("popup").style.display = "block";

    // send to PHP backend
    fetch("save.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "answer=" + encodeURIComponent(answer)
    })
    .then(res => res.text())
    .then(data => console.log(data));
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}





 const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  // Create particles
  const particles = [];
  const particleCount = 150; // adjust number of stars

  for(let i=0; i<particleCount; i++){
    particles.push({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*2 + 1,
      d: Math.random()*particleCount
    });
  }

  function draw(){
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    for(let i=0;i<particles.length;i++){
      const p = particles[i];
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
    }
    ctx.fill();
    update();
  }

  let angle = 0;
  function update(){
    angle += 0.01;
    for(let i=0;i<particles.length;i++){
      const p = particles[i];
      p.y += Math.cos(angle + p.d) + 1 + p.r/2;
      p.x += Math.sin(angle) * 2;

      if(p.x > w + 5 || p.x < -5 || p.y > h){
        if(i%3 > 0){
          particles[i] = {x: Math.random()*w, y: -10, r: p.r, d: p.d};
        } else {
          if(Math.sin(angle) > 0){
            particles[i] = {x: -5, y: Math.random()*h, r: p.r, d: p.d};
          } else {
            particles[i] = {x: w+5, y: Math.random()*h, r: p.r, d: p.d};
          }
        }
      }
    }
  }

  setInterval(draw, 33); // ~30fps
let slides = document.querySelectorAll(".slide")
let index = 0

function updateSlider(){

slides.forEach(slide=>{
slide.className="slide"
})

slides[index].classList.add("active")

slides[(index+1)%slides.length].classList.add("right")
slides[(index+2)%slides.length].classList.add("far-right")

slides[(index-1+slides.length)%slides.length].classList.add("left")
slides[(index-2+slides.length)%slides.length].classList.add("far-left")

}

function autoSlide(){
index++
if(index>=slides.length){
index=0
}
updateSlider()
}

updateSlider()

setInterval(autoSlide,3000)

document.addEventListener('DOMContentLoaded', () => {
    const revealItems = document.querySelectorAll('.reveal-item');
    const dynamicText = document.getElementById('dynamicText');
    const revealImg = document.getElementById('revealMainImage');
    const revealNum = document.getElementById('revealItemNumber');
    const revealDesc = document.getElementById('revealDescription'); // Ek naya element jo description dikhayega

    let currentIndex = 0;
    let autoScrollTimer;

    // 1. Top Sequential Text Animation
    const phrases = ["What I feel about you", "I Love you", "You are my world", "Always mine"];
    let pIdx = 0;
    setInterval(() => {
        pIdx = (pIdx + 1) % phrases.length;
        dynamicText.innerText = phrases[pIdx];
    }, 2500);

    // 2. Main Logic to Update Everything
    function updateRevealSection(index) {
        // Active class toggle
        document.querySelector('.reveal-item.active').classList.remove('active');
        const activeItem = revealItems[index];
        activeItem.classList.add('active');

        // Content update
        revealImg.style.opacity = 0;
        setTimeout(() => {
            revealImg.src = activeItem.getAttribute('data-img');
            revealNum.innerText = activeItem.getAttribute('data-id');
            // Agar description dikhana hai:
            // revealDesc.innerText = activeItem.getAttribute('data-text'); 
            revealImg.style.opacity = 1;
        }, 300);
        
        currentIndex = index;
    }

    // 3. Auto Scroll
    function startAutoScroll() {
        autoScrollTimer = setInterval(() => {
            currentIndex = (currentIndex + 1) % revealItems.length;
            updateRevealSection(currentIndex);
        }, 4000);
    }

    // 4. Manual Click
    revealItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            clearInterval(autoScrollTimer);
            updateRevealSection(index);
            // 5 second rukne ke baad wapas auto-scroll start
            setTimeout(startAutoScroll, 10000);
        });
    });

    startAutoScroll();
});

function sendAnswer(value){

document.getElementById("answerInput").value=value;

Swal.fire({
title:"Awww ❤️",
text:"Your answer made my day!",
icon:"success",
confirmButtonText:"Okay 💖",
confirmButtonColor:"#ff4d7e",
background:"#fff0f6",
color:"#ff4d7e"
});

}

const cards = document.querySelectorAll(".card")


function updateCards(){

cards.forEach(card=>{
card.classList.remove("active","left","right","back")
})

cards[index].classList.add("active")

let prev = (index-1+cards.length)%cards.length
let next = (index+1)%cards.length

cards[prev].classList.add("left")
cards[next].classList.add("right")

for(let i=0;i<cards.length;i++){

if(i!==index && i!==prev && i!==next){
cards[i].classList.add("back")
}

}

}

updateCards()

setInterval(()=>{

index++

if(index>=cards.length){
index=0
}

updateCards()

},3000)

function sendAnswer(value){

  document.getElementById("answerInput").value = value;

  Swal.fire({
    title: "Awww ❤️",
    text: "Your answer made my day!",
    icon: "success",
    confirmButtonText: "Send 💌",
    confirmButtonColor: "#ff4d7e",
    background: "#fff0f6",
    color: "#ff4d7e"
  }).then((result)=>{

    if(result.isConfirmed){
      document.getElementById("answerForm").submit();

      // ⬇️ redirect after submit
      setTimeout(()=>{
        window.location.href = "v.html"; // apna homepage link daal
      }, 1000); // 1 sec delay (optional)
    }

  });

}

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('loveChart').getContext('2d');
    
    // Register the plugin
    Chart.register(ChartDataLabels);

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(39, 174, 96, 0.5)');
    gradient.addColorStop(1, 'rgba(39, 174, 96, 0)');

    let loveData = [100, 4500, 12000, 350000, 890000, 900000];
    let labels = ['Meet', 'Talk', 'Smile', 'Friends', 'Today', 'Live'];

    const loveChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Love Index',
                data: loveData,
                borderColor: '#27ae60',
                borderWidth: 3,
                fill: true,
                backgroundColor: gradient,
                tension: 0.4,
                pointRadius: 6,
                pointBackgroundColor: '#27ae60',
                // --- DATALABELS SETTINGS ---
                datalabels: {
                    display: true, // Hamesha dikhayega
                    align: 'top',  // Point ke upar
                    anchor: 'end',
                    offset: 8,     // Point se thodi doori
                    color: '#27ae60',
                    font: {
                        weight: 'bold',
                        size: 11
                    },
                    formatter: function(value) {
                        // Number ko readable banane ke liye (e.g. 900k)
                        
                    }
                }
            }]
        },
        options: {
            responsive: true,
            layout: {
                padding: {
                    top: 30 // Taaki upar wala number kat na jaye
                }
            },
            plugins: { 
                legend: { display: false },
                tooltip: { enabled: false }, // Hover wala box band kar diya
                datalabels: {
                    display: true // Global display on
                }
            },
            scales: {
                y: { display: false },
                x: { grid: { display: false } }
            },
            animation: {
                duration: 1000,
                easing: 'linear'
            }
        }
    });

    setInterval(() => {
        let lastIdx = loveChart.data.datasets[0].data.length - 1;
        let lastValue = loveChart.data.datasets[0].data[lastIdx];
        let growth = Math.random() * 50 + 10; 
        
        loveChart.data.datasets[0].data[lastIdx] = lastValue + growth;
        
        // Chart aur Labels dono update honge
        loveChart.update('none'); 
    }, 1000);
});



