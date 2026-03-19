const grid = document.querySelector(".card-grid");
const treatmentLeftColumn = document.querySelector(".treatment-column-left");
const treatmentRightColumn = document.querySelector(".treatment-column-right");

if (grid || (treatmentLeftColumn && treatmentRightColumn)) {
  const servicess = [
    {
      title: "Immunization & Vaccination",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Complete childhood vaccination following the IAP schedule to protect children from preventable diseases.",
      cta: "Book Your Child's Vaccination Appointment",
      content:
        "<h2>Child Vaccination in Chennai</h2><p>Vaccines are the most reliable tool medicine has ever produced for keeping children safe from serious, preventable diseases. A well-timed vaccination schedule builds immunity before your child ever encounters the infection — giving them protection they carry for years, sometimes for life. At Saravanan Hospital, we follow the complete IAP (Indian Academy of Pediatrics) immunization schedule and make sure no dose is missed or delayed.</p><h3>Vaccines We Administer:</h3><h4>From Birth Through the First Year:</h4><ul><li>BCG — protection against tuberculosis</li><li>Hepatitis B — first dose at birth, followed by subsequent doses</li><li>OPV and IPV — oral and injectable polio vaccines</li><li>DTaP/DTP — diphtheria, tetanus, pertussis</li><li>Hib — Haemophilus influenzae type b</li><li>PCV — pneumococcal conjugate vaccine</li><li>Rotavirus — protection against severe diarrhoea</li><li>MMR — measles, mumps, rubella</li></ul><h4>Toddler and Preschool Boosters:</h4><ul><li>Varicella (chickenpox)</li><li>Hepatitis A</li><li>Typhoid conjugate vaccine</li><li>Annual influenza vaccine</li></ul><h4>School Age and Adolescent Vaccines:</h4><ul><li>HPV vaccine (recommended for girls and boys)</li><li>Tdap booster</li><li>Meningococcal vaccine where indicated</li></ul><h3>Why Timing Matters:</h3><p>Each vaccine is scheduled at the age when the child's immune system responds best and when disease risk is highest. Delaying vaccines leaves gaps in protection during the most vulnerable period. Our team maintains your child's vaccination record and sends reminders so nothing slips through.</p><h3>For Catch-Up Immunization:</h3><p>If your child has missed doses or you're unsure what's been given, our paediatrician will review their records and create a catch-up schedule that gets them back on track safely.</p>",
    },
    {
      title: "Well Baby Care",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Routine health visits tracking your baby's growth, development, nutrition, and vaccinations.",
      cta: "Book a Well Baby Check-Up",
      content:
        "<h2>Well Baby Care in Chennai</h2><p>A well baby visit isn't just about checking if something is wrong. It's about making sure everything is going right — and having a doctor who knows your baby well enough to notice when something is even slightly off. At Saravanan Hospital, well baby care starts from the first days of life and continues through the early years, tracking your baby's growth, nutrition, and development at every visit.</p><h3>What Happens at a Well Baby Visit:</h3><h4>Physical Examination:</h4><ul><li>Weight, length, and head circumference tracked on growth charts</li><li>Heart, lung, and abdomen examination</li><li>Hip, spine, and limb assessment</li><li>Eye and ear evaluation</li><li>Fontanelle (soft spot) assessment in newborns</li></ul><h4>Developmental Check:</h4><ul><li>Milestone review — smiling, sitting, walking, talking</li><li>Hearing and vision screening</li><li>Behavioural and social development observation</li></ul><h4>Feeding & Nutrition Guidance:</h4><ul><li>Breastfeeding support</li><li>Weaning and solid food guidance</li><li>Formula feeding advice when needed</li><li>Vitamin and iron supplementation guidance</li></ul><h3>Vaccinations:</h3><p>Due immunizations are administered during well baby visits so parents don't need separate appointments.</p><h3>How Often Should You Come In?</h3><p>Visits are recommended at birth, 6 weeks, 10 weeks, 14 weeks, 6 months, 9 months, 12 months, 18 months, and 2 years following the IAP schedule.</p><h3>For New Parents:</h3><p>First-time parents often have questions that feel too small to ask — bring every question. There is no question too small when it concerns your newborn.</p>",
    },
    {
      title: "Growth & Development Clinic",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Early assessment of physical growth, speech, behaviour, and developmental milestones.",
      cta: "Book a Growth & Development Assessment",
      content:
        "<h2>Child Growth & Development Clinic in Chennai</h2><p>Children grow at their own pace — but there are windows within which certain milestones should happen. When a child isn't reaching those markers on time, early identification makes a significant difference to outcomes. Our Growth & Development Clinic at Saravanan Hospital provides detailed, structured assessments for children whose parents have noticed something is different — or want to make sure everything is on track.</p><h3>What the Clinic Assesses:</h3><h4>Physical Growth:</h4><ul><li>Height and weight tracking against standardised growth charts</li><li>Identifying short stature, underweight, or obesity patterns</li><li>Hormonal evaluation when growth is significantly below expected range</li><li>Bone age assessment where needed</li></ul>  <h4>Developmental Milestones:</h4><ul><li>Gross motor skills — sitting, standing, walking, running</li><li>Fine motor skills — grasping, drawing, writing</li><li>Speech and language development</li><li>Cognitive and problem-solving abilities</li><li>Social and emotional behaviour</li></ul> <h4>Concerns We Commonly Evaluate:</h4><ul><li>Speech delay or unclear speech</li><li>Late walking or poor coordination</li><li>Learning difficulties or attention problems</li><li>Suspected autism spectrum disorder (ASD) — initial screening and referral</li><li>Behavioural concerns — aggression, hyperactivity, withdrawal</li><li>Poor weight gain or failure to thrive</li></ul> <h3>Who Should Come In:</h3><p>Any parent who feels their child isn't quite where they should be — even if school or others say they'll catch up. A parent's instinct is often right. Early assessment is always better than a prolonged wait-and-see approach.</p><h3>What Happens After Assessment:</h3><p>Your paediatrician will explain findings clearly, identify whether specialist referral is needed (speech therapy, occupational therapy, neurology), and give you practical, actionable guidance for supporting your child at home and in school.</p>",
    },
    {
      title: "Adolescent Health Clinic",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Medical care and guidance for teenagers dealing with puberty, health concerns, and emotional wellbeing.",
      cta: "Book an Adolescent Health Consultation",
      content:
        "<h2>Adolescent Health Clinic in Chennai</h2><p>Adolescence brings rapid physical changes, hormonal shifts, new pressures, and health concerns that are neither childhood nor adult medicine. Teenagers often don't speak freely in front of parents — and parents often don't know what's normal versus what needs attention. Our Adolescent Health Clinic at Saravanan Hospital creates a space where teenagers are heard, examined properly, and given honest answers without judgment.</p><h3>What We Address:</h3><h4>Physical Health:</h4><ul><li>Puberty-related concerns — early, delayed, or atypical puberty</li><li>Menstrual health — irregular periods, painful periods, heavy bleeding</li><li>Acne and skin concerns common during adolescence</li><li>Weight concerns — obesity, unhealthy weight loss, body image issues</li><li>Sports injuries and musculoskeletal pain</li><li>Nutritional deficiencies — iron, Vitamin D, calcium — common in this age group</li><li>Anaemia, especially in teenage girls</li></ul><h4>Mental & Emotional Health:</h4><ul><li>Stress and academic pressure</li><li>Sleep disturbances</li><li>Mood changes and depression screening</li><li>Screen time and social media effects</li><li>Substance use awareness</li></ul><h3>Preventive Care:</h3><ul><li>HPV vaccination</li><li>Hepatitis A and B catch-up vaccines</li><li>Annual health screening</li><li>Healthy lifestyle guidance</li></ul><h3>A Note on Confidentiality:</h3><p> Teenagers often avoid seeing a doctor because they worry about parents finding out what they share. Our clinic handles adolescent consultations with appropriate confidentiality and sensitivity — because trust is the only way to have a conversation that actually helps.</p>",
    },
    {
      title: "Allergy & Asthma Care",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Diagnosis and long-term management of childhood allergies, asthma, and breathing conditions.",
      cta: "Book an Allergy & Asthma Consultation",
      content:
        "<h2>Child Allergy & Asthma Treatment in Chennai</h2><p>Allergies and asthma are among the most common chronic conditions in children — and among the most under-managed. A child who wheezes every cold season, wakes up coughing at night, sneezes constantly around dust or pets, or breaks into rashes after certain foods deserves a proper diagnosis and a real management plan. Not just antihistamines handed out at each visit.</p><h3>Conditions We Treat:</h3><h4>Asthma:</h4><ul><li>Recurrent wheezing or chest tightness</li><li>Nighttime or early morning cough</li><li>Exercise-induced breathlessness</li><li>Frequent respiratory infections triggering breathing difficulty</li></ul><h4>Allergic Rhinitis:</h4><ul><li>Persistent sneezing, runny nose, and nasal congestion</li><li>Itchy, watery eyes</li><li>Symptoms triggered by dust, pollen, pets, or seasonal changes</li></ul> <h4>Food Allergies:</h4><ul><li>Rashes, hives, or swelling after specific foods</li><li>Vomiting or diarrhoea with suspected food triggers</li><li>History of anaphylactic reactions</li></ul><h4>Skin Allergies:</h4><ul><li>Eczema (atopic dermatitis) — dry, itchy, inflamed skin</li><li>Contact dermatitis from soaps, detergents, or fabrics</li><li>Urticaria (hives) — recurring or chronic</li></ul>   <h3>How We Manage Allergies & Asthma:</h3><p>Diagnosis starts with a thorough history and clinical examination. Allergy testing, spirometry (lung function test), and skin prick testing are arranged where needed. Treatment is built around identifying triggers, reducing exposure, and using the right medications — inhalers, antihistamines, or other therapies — at the correct dose for your child's age and weight.</p><h3>For Asthma Specifically:</h3><p>We provide inhaler technique training for both the child and parent — because even the best inhaler medication fails if it's not being used correctly. An asthma action plan is given to every family so you know exactly what to do when symptoms flare.</p>",
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
