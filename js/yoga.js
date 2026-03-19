const grid = document.querySelector(".card-grid");
const treatmentLeftColumn = document.querySelector(".treatment-column-left");
const treatmentRightColumn = document.querySelector(".treatment-column-right");

if (grid || (treatmentLeftColumn && treatmentRightColumn)) {
  const servicess = [
    {
      title: "Therapeutic Yoga for Chronic Conditions",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Structured yoga sessions designed around diabetes, hypertension, arthritis, and other long-term conditions.",
      cta: " Join the Therapeutic Yoga Programme",
      content:
        "<h2>Therapeutic Yoga for Chronic Conditions in Chennai</h2><p>Chronic conditions like diabetes, hypertension, thyroid disorders, and arthritis don't just affect one part of the body — they affect energy levels, mobility, sleep, mood, and quality of life. Medication manages the numbers. Therapeutic yoga works on everything around them — improving circulation, reducing inflammation, managing weight, and helping the body respond better to treatment over time.</p><h3>How Therapeutic Yoga Differs From Regular Yoga:</h3><p>A general yoga class works with healthy bodies. Therapeutic yoga is adapted — postures are modified based on physical limitations, health conditions, and fitness levels. No session asks you to do something your body isn't ready for. Progress is gradual, deliberate, and tracked.</p><h3>Conditions This Programme Supports:</h3><ul><li>Type 2 diabetes — improves insulin sensitivity, aids weight management, reduces stress hormones that raise blood sugar</li> <li>Hypertension — certain poses and breathing techniques have a measurable effect on blood pressure when practised consistently</li><li>Arthritis and joint conditions — gentle movement maintains joint mobility and reduces stiffness without aggravating inflammation</li><li>Thyroid disorders — specific sequences support metabolic function and energy regulation</li><li>Obesity — low-impact movement that builds consistency without joint strain</li> <li>Post-cardiac rehabilitation — gentle, supervised movement for patients cleared by their cardiologist</li></ul><h3>What a Session Looks Like:</h3><p>Sessions begin with gentle warm-up movement, progress through condition-appropriate postures, and close with guided breathing and relaxation. Each participant's limitations are known before they walk in. The instructor adapts in real time — no one is pushed beyond what's appropriate for their condition.</p>",
    },

    {
      title: "Prenatal Yoga",
      img: "../img/Surgical Procedure/Anal fissure.jpg",
      short:
        "Safe, guided movement and breathing for expecting mothers at every stage of pregnancy.",
      cta: " Join Prenatal Yoga Sessions",
      content:
        "<h2> Prenatal Yoga in Chennai</h2><p>Pregnancy changes everything — posture, breathing, balance, sleep, and energy. Prenatal yoga at Saravanan Hospital is designed specifically for expecting mothers, working with the body as it changes through each trimester rather than against it. Conducted in-hospital by instructors familiar with obstetric considerations, every session is safe, supportive, and genuinely useful for what's coming next.</p><h3>What Prenatal Yoga Does:</h3><ul><li>Relieves common pregnancy discomforts — back pain, hip tightness, swollen ankles, and shortness of breath</li><li>Builds strength in the muscles that matter most during labour — pelvic floor, core, and lower back</li><li>Teaches breathing techniques used actively during contractions and delivery</li><li>Reduces pregnancy-related anxiety and improves sleep quality</li> <li>Prepares the body physically and mentally for both natural and caesarean delivery</li></ul><h3>Is It Safe Throughout Pregnancy?</h3><p>With appropriate modifications — yes. The first trimester requires the most caution. From the second trimester onward, prenatal yoga is well-supported by evidence and widely recommended by obstetricians. Our instructors coordinate with the maternity team so sessions align with each participant's obstetric status.</p> <h3>Who Should Join:</h3> <p> Any pregnant woman cleared for normal physical activity by her obstetrician. Women with high-risk pregnancies, placenta previa, or bleeding should consult their doctor before joining.</p> <h3>What to Bring:</h3> <p> Comfortable, loose clothing. A water bottle. No prior yoga experience needed — sessions are designed for complete beginners as much as experienced practitioners.</p>",
    },

    {
      title: "Stress & Anxiety Relief",
      img: "../img/Surgical Procedure/Appendicitis.jpg",
      short:
        "Yoga and relaxation techniques that bring the nervous system down from overdrive.",
      cta: "Join the Stress Relief Yoga Programme",
      content:
        "<h2> Yoga for Stress & Anxiety Relief in Chennai</h2><p>Stress is not just a feeling. It has a measurable physical effect — raised cortisol, elevated blood pressure, disrupted sleep, weakened immunity, and a body that stays in a state of low-level alert long after the stressful event has passed. Yoga works directly on this — activating the parasympathetic nervous system, the body's natural counterbalance to stress, and giving it a regular opportunity to reset.</p><h3>What This Programme Addresses:</h3><ul><li>Work-related stress and burnout</li><li>Generalised anxiety affecting daily functioning</li><li>Physical symptoms of stress — tension headaches, tight shoulders, chest tightness, digestive issues</li><li>Sleep difficulties linked to an overactive mind</li><li>Emotional exhaustion from caregiving, illness, or life pressures</li></ul> <h3>Surgery — Open vs Laparoscopic</h3> <li>Restorative yoga postures — held longer, fully supported, focused on releasing tension</li><li>Yoga nidra — a guided body-scan relaxation that produces deep rest in a short time</li><li>Pranayama — breathing techniques that directly reduce the physiological stress response</li> <li>Mindful movement — slow, deliberate sequences that redirect attention away from anxious thought patterns</li><h3>This Is Not a Substitute for Mental Health Treatment:</h3><p>For patients dealing with clinical anxiety or depression, this programme works best alongside — not instead of — appropriate medical or psychological care. Our team coordinates with the general medicine and psychiatry departments where relevant.</p>",
    },

    {
      title: "Breathing & Pranayama Therapy",
      img: "../img/Surgical Procedure/Breast Swelling.jpg",
      short:
        "Controlled breathing practices that improve lung function, circulation, and mental clarity.",
      cta: "Join Pranayama Therapy Sessions",
      content:
        "<h2>  Pranayama & Breathing Therapy in Chennai</h2><p>Pranayama is the formal practice of controlled breathing — one of the most clinically relevant aspects of yoga and one of the most overlooked. Breathing patterns directly affect heart rate, blood pressure, oxygen saturation, stress hormone levels, and mental clarity. For patients recovering from respiratory illness, managing anxiety, or dealing with conditions like asthma and hypertension, learning to breathe correctly is not a small thing.</p> <h3>Clinical Benefits of Pranayama Practice:</h3><ul><li>Improves lung capacity and respiratory efficiency</li><li>Lowers resting heart rate and blood pressure with consistent practice</li><li>Reduces cortisol and activates the parasympathetic nervous system</li><li>Improves oxygen delivery to tissues</li><li>Helps manage anxiety by giving the mind a concrete, physiological anchor</li><li>Supports recovery in post-COVID patients with residual breathlessness</li></ul> <h3>Techniques Taught:</h3> <li>Diaphragmatic breathing — the foundation of correct breathing mechanics</li><li>Nadi Shodhana (alternate nostril breathing) — balances the nervous system</li><li>Bhramari (humming bee breath) — reduces anxiety and lowers blood pressure</li> <li>Ujjayi breath — used during yoga practice to maintain calm and focus</li><li>Kapalabhati — energising breath technique for metabolic and respiratory benefit</li><li>Sitali and Sitkari — cooling breath techniques beneficial in Chennai's heat</li><h3>Who Benefits Most:</h3><p> Patients with asthma, COPD, post-COVID breathlessness, hypertension, anxiety disorders, and anyone who spends long hours at a desk with poor breathing habits — which, in a city like Chennai, is most working adults.</p>",
    },

    {
      title: "Yoga for Back Pain & Posture",
      img: "../img/Surgical Procedure/Cellulitis.jpg",
      short:
        "Targeted movement to reduce spinal pain, correct postural imbalances, and strengthen the core.",
      cta: " Join the Back Pain & Posture Programme",
      content:
        "<h2>Yoga for Back Pain & Posture Correction in Chennai</h2><p>Back pain is one of the most common reasons people in Chennai seek medical attention — and one of the most frequently managed with painkillers alone. Medication reduces pain temporarily. What keeps it from returning is building the strength, flexibility, and postural awareness to support the spine properly. That's exactly what this programme addresses.</p><h3>Why Posture Matters More Than Most People Realise:</h3><p> Hours at a desk, long commutes, looking down at a phone, carrying bags on one shoulder — these habits create muscular imbalances that load the spine unevenly over time. The result is chronic tension, disc pressure, and pain that doesn't have a single dramatic cause but builds quietly over years.</p><h3>What This Programme Addresses:</h3><ul><li>Lower back pain — the most common complaint, often linked to weak core and tight hip flexors</li><li>Upper back and neck tension — driven by desk posture and screen time</li><li>Sciatica — nerve pain running from the lower back into the leg, aggravated by tight piriformis and compressed discs</li><li>Poor posture causing recurring shoulder and neck pain</li><li>Post-surgical back recovery — for patients cleared by their orthopaedic surgeon</li></ul><h3>Techniques Used:</h3> <li>Core strengthening sequences — targeting the deep stabilising muscles of the spine</li> <li>Hip flexor and hamstring release — reduces the pull on the lower back</li> <li>Spinal decompression postures — creates space between vertebrae, relieves disc pressure</li> <li>Postural awareness training — retraining how you sit, stand, and carry yourself daily</li> <li>Breath-movement coordination — reduces muscle guarding and tension</li> <h3>Important Note:</h3> <p>This programme is not suitable for acute disc herniation, spinal fractures, or unstable spinal conditions without prior clearance from an orthopaedic or spine specialist. Our instructors review every participant's medical history before sessions begin.</p>",
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
