const grid = document.querySelector(".card-grid");
const treatmentLeftColumn = document.querySelector(".treatment-column-left");
const treatmentRightColumn = document.querySelector(".treatment-column-right");

if (grid || (treatmentLeftColumn && treatmentRightColumn)) {
  const servicess = [
    {
      title: " Flu Clinic ",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Fast, focused care for fever, infections, and viral illnesses — same day.",
      cta: "Book a Same-Day Appointment",
      content:
        "<h2> Flu Clinic in Chennai</h2><p>A fever, body ache, runny nose, or sore throat — most people try to ride it out alone. Sometimes that works. But when symptoms drag on, worsen, or come back repeatedly, the body is telling you something needs attention. Our Flu Clinic at Saravanan Hospital gives you fast, focused care for acute infections without a long wait or an unnecessary hospital admission.</p><h3>What We Treat at the Flu Clinic:</h3><ul><li>Common cold and upper respiratory tract infections</li><li>Throat infections, tonsillitis, and laryngitis</li><li>Ear infections and sinusitis</li><li>Dengue, chikungunya, and typhoid fever</li><li>Urinary tract infections</li><li>Stomach infections, viral gastroenteritis</li><li>Seasonal influenza and viral fever</li><li>Skin and soft tissue infections</li></ul><h3>When Should You Visit Instead of Waiting It Out?</h3> <p> Most viral fevers resolve in 3–5 days. Come in if your fever is above 103°F, lasts more than 3 days, comes with severe headache or body pain, causes difficulty breathing, or if you feel significantly worse rather than better. Children, elderly patients, and those with diabetes or heart conditions should come in earlier rather than later.</p><h3>What Happens at Your Visit:</h3><p> Your doctor takes a full history of your symptoms, examines you thoroughly, and orders targeted tests where needed — blood count, dengue NS1, malaria smear, urine culture — based on what the clinical picture suggests. Treatment is started immediately. You leave knowing exactly what's causing your symptoms and what to do about it.</p><h3>Same-Day Appointments:</h3><p>We keep slots available for urgent cases every day. Walk in or call ahead — our team will fit you in.</p>",
    },

    {
      title: "Endocrinology",
      img: "../img/Surgical Procedure/Anal fissure.jpg",
      short:
        "Specialist evaluation and treatment for hormonal conditions affecting your whole body.",
      cta: "Book an Endocrinology Consultation",
      content:
        "<h2>Endocrinology Specialist in Chennai</h2><p>The endocrine system controls hormones — chemical messengers that regulate nearly every function in your body, from metabolism and mood to growth, reproduction, and sleep. When a gland produces too much or too little, the effects ripple outward. Fatigue, weight changes, hair loss, mood shifts, irregular periods, and dozens of other symptoms can all trace back to a hormonal imbalance that has not yet been identified correctly.</p><h3>Conditions We Manage:</h3><ul><li>Thyroid disorders — hypothyroidism, hyperthyroidism, thyroid nodules, thyroiditis</li><li>Diabetes mellitus — Type 1, Type 2, gestational diabetes</li><li>Adrenal gland disorders — Cushing's syndrome, Addison's disease</li><li>Pituitary gland conditions — prolactinoma, growth hormone disorders</li><li>Polycystic Ovary Syndrome (PCOS) — hormonal evaluation and management</li><li>Osteoporosis — bone density evaluation and treatment</li><li>Obesity with hormonal causes</li><li>Calcium and parathyroid disorders</li></ul><h3>Why See an Endocrinologist Specifically?</h3><p>Many hormonal conditions are first missed or partially treated because the symptoms seem unrelated. An endocrinologist looks at the full hormonal picture — not just one test result — and connects the dots that a general check-up might not. If you've been told your results are \"borderline\" or you're on medication that isn't quite working, a specialist review often changes the approach entirely.</p><h3>How We Evaluate You:</h3><p>A detailed consultation is followed by targeted blood tests — thyroid panel, cortisol, insulin levels, HbA1c, sex hormones, Vitamin D, calcium, and others depending on your symptoms. Ultrasound of the thyroid or adrenals is done in-house when needed. Your results are explained clearly and your treatment plan is built around your specific hormone profile — not a generic protocol.</p>",
    },

    {
      title: "Diabetology & Hypertension",
      img: "../img/Surgical Procedure/Appendicitis.jpg",
      short:
        "Long-term management of diabetes and blood pressure — keeping both under control.",
      cta: "Book Your Diabetes & BP Consultation",
      content:
        "<h2>Diabetes & Hypertension Management in Chennai</h2><p>Diabetes and hypertension are two of the most common chronic conditions in Chennai — and they frequently travel together. Managing one without paying equal attention to the other leaves your health only half protected. At Saravanan Hospital, our diabetology and hypertension clinic treats both conditions as part of the same picture — because in most patients, they are.</p><h3>Diabetes Management:</h3><p>Diabetes is not just about blood sugar. It affects your kidneys, eyes, nerves, heart, and feet — silently over years when not properly controlled. Our approach goes beyond prescribing medication and sending you home.</p><h4>What our diabetes care includes:</h4><ul><li>HbA1c monitoring and fasting/post-meal glucose tracking</li><li>Personalised medication plan — tablets or insulin, adjusted to your lifestyle</li><li>Diet and nutrition counselling tailored to Indian eating habits</li><li>Diabetic foot screening to detect early complications</li><li>Kidney function and urine microalbumin testing</li><li>Eye referral coordination for diabetic retinopathy screening</li><li>Education on self-monitoring and recognising warning signs</li></ul><h3>Hypertension Management:</h3><p>High blood pressure is called a silent condition because most people feel nothing until something goes wrong — a stroke, heart attack, or kidney damage. Regular monitoring, the right medication, and lifestyle changes together help keep blood pressure in a safe range.</p><h4>What our hypertension care includes:</h4><ul><li>Accurate blood pressure assessment across multiple readings</li><li>Identifying secondary causes of hypertension where relevant</li><li>Medication review and adjustment for the most effective, well-tolerated combination</li><li>Salt, diet, and physical activity guidance</li><li>Cardiac and kidney monitoring for patients with long-standing hypertension</li></ul><h3>Managing Both Together:</h3><p>When diabetes and hypertension occur together, the risk to the heart, kidneys, and blood vessels increases significantly. Our physicians track both conditions simultaneously — adjusting treatment, monitoring organ function, and ensuring medications for one condition do not worsen the other. Follow-up visits are structured and regular, focusing on prevention rather than waiting for complications.</p>",
    },
  ];

  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalImg = document.getElementById("modalImg");
  const modalCta = document.getElementById("modalCta");
  const modalCloseBtn = modal ? modal.querySelector(".close") : null;
  const MODAL_CLOSE_DURATION = 220;
  let modalCloseTimer = null;

  function buildModalContent(service) {
    const listItems = service.points
      .map((point) => `<li>${point}</li>`)
      .join("");
    return `
    <h3>${service.heading}</h3>
    <ul>${listItems}</ul>
    <p>${service.short}</p>
  `;
  }

  function renderCards() {
    if (!grid) return;
    grid.innerHTML = "";

    servicess.forEach((service, index) => {
      grid.innerHTML += `
  <article class="card">
    <div class="card-inner">
      <div class="card-front">
        <img src="${service.img}" alt="${service.title}">
        <div class="card-content">
          <h3>${service.title}</h3>
          <p>${service.short}</p>
        </div>
      </div>
      <div class="card-back">
        <h3>${service.title}</h3>
        <p>${service.short}</p>
        <button type="button" class="view-details-btn" data-index="${index}">
          View Details
        </button>
      </div>
    </div>
  </article>`;
    });

    grid.querySelectorAll(".view-details-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        openModal(Number(btn.dataset.index));
      });
    });
  }

  function renderTreatmentCards() {
    if (!treatmentLeftColumn || !treatmentRightColumn) return;

    treatmentLeftColumn.innerHTML = "";
    treatmentRightColumn.innerHTML = "";

    servicess.forEach((service, index) => {
      const targetColumn =
        index % 2 === 0 ? treatmentLeftColumn : treatmentRightColumn;

      targetColumn.innerHTML += `
  <article class="treatment-card reveal-on-scroll">
    <div
      class="treatment-card-body treatment-details-trigger"
      data-index="${index}"
      role="button"
      tabindex="0"
      aria-label="View full details for ${service.title}"
    >
      <div class="treatment-card-media">
        <img src="${service.img}" alt="${service.title}">
      </div>
      <h3>${service.title}</h3>
      <p>${service.short}</p>
    </div>
  </article>`;
    });

    document.querySelectorAll(".treatment-details-trigger").forEach((card) => {
      card.addEventListener("click", () => {
        openModal(Number(card.dataset.index));
      });

      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openModal(Number(card.dataset.index));
        }
      });
    });
  }

  function openModal(index) {
    const service = servicess[index];
    if (
      !service ||
      !modal ||
      !modalTitle ||
      !modalDesc ||
      !modalImg ||
      !modalCta
    ) {
      return;
    }

    modalTitle.innerText = service.title;
    modalDesc.innerHTML = service.content;
    modalImg.onerror = () => {
      modalImg.onerror = null;
      modalImg.src = "./img/surgery.png";
    };
    modalImg.src = service.img;
    modalCta.textContent = service.cta;
    modalCta.href = "tel:04445065959";

    if (modalCloseTimer) {
      window.clearTimeout(modalCloseTimer);
      modalCloseTimer = null;
    }

    modal.classList.remove("is-closing");
    modal.style.display = "flex";
    requestAnimationFrame(() => {
      modal.classList.add("is-open");
    });
    document.body.style.overflow = "hidden";
    modalDesc.scrollTop = 0;
  }

  function closeModal() {
    if (!modal) return;
    const modalIsVisible =
      modal.classList.contains("is-open") || modal.style.display === "flex";
    if (!modalIsVisible) return;

    if (modalCloseTimer) {
      window.clearTimeout(modalCloseTimer);
      modalCloseTimer = null;
    }

    modal.classList.remove("is-open");
    modal.classList.add("is-closing");

    modalCloseTimer = window.setTimeout(() => {
      modal.classList.remove("is-closing");
      modal.style.display = "none";
      document.body.style.overflow = "auto";
      modalCloseTimer = null;
    }, MODAL_CLOSE_DURATION);
  }

  window.closeModal = closeModal;

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  renderTreatmentCards();
  renderCards();
}
