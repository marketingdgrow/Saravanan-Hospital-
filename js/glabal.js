document.addEventListener("DOMContentLoaded", () => {
  /* ===========================
     SHARE BUTTON
  =========================== */
  const shareBtn = document.getElementById("shareBtn");
  const sharePopup = document.getElementById("shareOptions");

  if (shareBtn && sharePopup) {
    shareBtn.addEventListener("click", () => {
      const url = "https://maps.app.goo.gl/a7knCTEr6iSEMExW7";
      const text = document.title;

      if (navigator.share) {
        navigator.share({ title: text, text, url }).catch(console.log);
      } else {
        sharePopup.style.display =
          sharePopup.style.display === "flex" ? "none" : "flex";

        const setLink = (id, link) => {
          const el = document.getElementById(id);
          if (el) el.href = link;
        };

        setLink(
          "whatsappShare",
          `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`,
        );
        setLink(
          "facebookShare",
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url,
          )}`,
        );
        setLink(
          "twitterShare",
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url,
          )}&text=${encodeURIComponent(text)}`,
        );
        setLink(
          "linkedinShare",
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url,
          )}`,
        );
      }
    });
  }

  /* ===========================
     FAQ
  =========================== */
  const faqItems = document.querySelectorAll(".faq-item");

  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const answer = item.querySelector(".faq-answer");
      if (!answer) return;

      item.addEventListener("click", () => {
        faqItems.forEach((i) => {
          const otherAnswer = i.querySelector(".faq-answer");
          if (i !== item && otherAnswer) {
            i.classList.remove("active");
            otherAnswer.style.maxHeight = null;
          }
        });

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
          answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
          answer.style.maxHeight = null;
        }
      });
    });

    const firstAnswer = document.querySelector(".faq-item.active .faq-answer");
    if (firstAnswer) {
      firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";
    }
  }

  /* ===========================
     MENU
  =========================== */
  const menu = document.querySelector(".sub-menu");
  const trigger = document.querySelector(".services-btn");
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (menu && trigger) {
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !trigger.contains(e.target)) {
        menu.classList.remove("active");
      }
    });

    menu.addEventListener("click", (e) => {
      if (e.target === menu) menu.classList.remove("active");
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") menu.classList.remove("active");
    });

    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }
  }

  /* ===========================
     PARTICLES CANVAS
  =========================== */
  const canvas = document.getElementById("particles-bg");

  if (canvas) {
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];
    const colors = ["#ff4d4d", "#ffd11a", "#66ccff", "#33cc33", "#cc66ff"];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 4;
        this.speedX = (Math.random() - 0.3) * 0.3;
        this.speedY = (Math.random() - 0.3) * 0.3;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < 15; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    init();
    animate();
  }

  /* ===========================
     CIRCLE TEXT
 

  /* ===========================
     SERVICES GRID + MODAL
  =========================== */
 

  function initCircleText() {
    const textCircle = document.getElementById("textCircle");
    if (!textCircle) return;

    const text = "CERTIFIED MEDICAL EXCELLENCE ";
    const letters = text.split("");

    textCircle.innerHTML = "";

    letters.forEach((letter, i) => {
      const span = document.createElement("span");
      span.innerText = letter;
      span.style.transform = `rotate(${i * (360 / letters.length)}deg)`;
      textCircle.appendChild(span);
    });
  }

  initCircleText();
});
