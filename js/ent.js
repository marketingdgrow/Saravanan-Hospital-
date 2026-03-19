const grid = document.querySelector(".card-grid");
const treatmentLeftColumn = document.querySelector(".treatment-column-left");
const treatmentRightColumn = document.querySelector(".treatment-column-right");

if (grid || (treatmentLeftColumn && treatmentRightColumn)) {
  const servicess = [
    {
      title: "Sinusitis",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Diagnosis and treatment for acute and chronic sinus infections affecting breathing and daily comfort.",
      cta: "Book a Sinusitis Consultation",
      content:
        "<h2>Sinusitis Treatment in Chennai</h2><p>Sinusitis is inflammation of the sinuses — the air-filled cavities in the skull surrounding the nose. When they get infected or blocked, the result is facial pain, pressure behind the eyes and cheeks, thick nasal discharge, and a heavy, foggy feeling that makes even a normal day difficult. In Chennai's climate, sinusitis is extremely common — and extremely undertreated.</p><h3>Acute vs Chronic Sinusitis:</h3><p>Acute sinusitis comes on suddenly, usually after a cold or upper respiratory infection, and lasts up to 4 weeks. Chronic sinusitis persists beyond 12 weeks despite treatment — often with allergy, nasal polyps, or a deviated septum making drainage difficult.</p><h3>Symptoms:</h3><ul><li>Facial pain or pressure — forehead, cheeks, around the eyes</li><li>Thick yellow or green nasal discharge</li><li>Blocked or stuffy nose</li><li>Reduced sense of smell</li><li>Headache that worsens when bending forward</li><li>Post-nasal drip causing sore throat and cough</li></ul><h3>Treatment:</h3><p> Acute sinusitis is managed with nasal saline rinses, decongestants, steam inhalation, and antibiotics where bacterial infection is confirmed. Chronic sinusitis that doesn't respond to medication is treated with Functional Endoscopic Sinus Surgery (FESS) — a minimally invasive procedure that opens blocked sinus passages and restores normal drainage without any external incision.</p>",
    },
    {
      title: "Allergic Rhinitis",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Specialist care for chronic sneezing, nasal allergies, and breathing discomfort caused by environmental triggers.",
      cta: "Book an Allergy Rhinitis Consultation",
      content:
        "<h2>Allergic Rhinitis Treatment in Chennai</h2><p>Allergic rhinitis affects a large number of people in Chennai — triggered by dust mites, pollen, pet dander, mould, and vehicle pollution that's hard to avoid in daily life. The constant sneezing, runny nose, itchy eyes, and nasal congestion seem minor on their own — but over months and years, they disrupt sleep, concentration, and quality of life more than most people admit.</p><h3>Seasonal vs Perennial Allergic Rhinitis:</h3><p>Seasonal allergic rhinitis flares at specific times of year — pollen season being the most common trigger. Perennial allergic rhinitis persists year-round, driven by indoor allergens like dust mites and cockroach particles that are difficult to fully eliminate in Chennai homes.</p><h3>Symptoms:</h3><ul><li>Repeated sneezing</li><li>Runny or blocked nose</li><li>Itchy nose and eyes</li><li>Watery red eyes</li><li>Post-nasal drip and throat clearing</li><li>Fatigue from disrupted sleep</li></ul><h3>Treatment:</h3><p>Management combines trigger avoidance, nasal antihistamine or corticosteroid sprays, and oral antihistamines. Allergy testing identifies specific triggers so avoidance is targeted rather than guesswork. For patients with persistent or severe symptoms, immunotherapy (allergy desensitisation) offers long-term reduction in sensitivity.</p>",
    },
    {
      title: "Tonsillitis & Adenotonsillitis",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Evaluation and treatment for recurrent throat infections affecting breathing, swallowing, and sleep.",
      cta: "Book a Tonsil Consultation",
      content:
        "<h2>Tonsillitis & Adenotonsillitis Treatment in Chennai</h2><p>Tonsillitis is inflammation of the tonsils — the lymph tissue at the back of the throat that acts as an early immune barrier. When tonsils become infected repeatedly, they stop being protective and start being a problem. Adenotonsillitis involves the adenoids as well — tissue behind the nose that, when enlarged, causes nasal obstruction, mouth breathing, snoring, and recurrent ear infections, particularly in children. </p><h3>Acute vs Recurrent Tonsillitis: </h3><p>A single bout of tonsillitis — sore throat, fever, difficulty swallowing — is treated with antibiotics and rest. Recurrent tonsillitis (5 or more episodes a year) or tonsils so enlarged they affect breathing and swallowing is a different situation. At that point, tonsillectomy is often the most sensible long-term solution.</p><h3>Symptoms:</h3><ul><li>Severe sore throat and difficulty swallowing</li><li>Swollen, red tonsils — sometimes with white patches</li><li>Fever and swollen neck glands</li><li>Bad breath</li><li>Bad breath</li><li>In children — mouth breathing, snoring, disturbed sleep, poor appetite</li></ul><h3>When Is Surgery Recommended?</h3><p> Tonsillectomy is advised for recurrent infection, obstructive sleep symptoms, peritonsillar abscess, or suspicion of malignancy. It's a well-established, safe procedure done under general anaesthesia. Most patients go home the same day or the following morning and recover fully within 10–14 days.</p>",
    },
    {
      title: "Nasal Polyps",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Treatment for non-cancerous nasal growths causing breathing blockage and sinus infections.",
      cta: "Book a Nasal Polyp Consultation",
      content:
        "<h2>Nasal Polyp Treatment in Chennai</h2><p>Nasal polyps are soft, teardrop-shaped growths that develop in the lining of the nasal passages or sinuses. They're non-cancerous — but they're not harmless. Large or multiple polyps block airflow, impair the sense of smell, and contribute to recurrent sinus infections. They develop in response to chronic inflammation — often linked to allergy, asthma, or chronic sinusitis.</p><h3>Symptoms:</h3><ul><li>Persistent nasal blockage or stuffiness</li><li>Reduced or absent sense of smell and taste</li><li>Runny nose and post-nasal drip</li><li>Snoring and sleep disturbance</li><li>Frequent sinus infections</li><li>Facial pressure or headache</li></ul> <h3>Treatment:</h3><p>Small polyps often respond to nasal corticosteroid sprays which shrink the growth over weeks. Larger polyps, or those causing significant obstruction and recurrent infection, require surgical removal through FESS (Functional Endoscopic Sinus Surgery) — a camera-guided procedure that removes polyps through the nostrils with no external cuts and minimal recovery time. Post-surgical nasal sprays and follow-up care reduce the risk of recurrence.</p>",
    },
    {
      title: "Deviated Septum",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Surgical correction of nasal septum deviation causing breathing obstruction and sinus infections.",
      cta: "Book a Deviated Septum Consultation",
      content:
        "<h2>Deviated Septum Treatment in Chennai</h2><p>The nasal septum is the thin wall of cartilage and bone dividing the nose into two sides. In an ideal world, it sits perfectly in the centre. In reality, most people have some degree of deviation — but when the deviation is significant, it causes chronic one-sided or alternating nasal blockage, snoring, recurrent sinus infections, and breathing difficulty that affects sleep, exercise, and daily comfort.</p><h3>Causes:</h3><p> Deviated septum can be present from birth or caused by nasal trauma — a hit to the nose during sports, a fall, or an accident. Even injuries that seemed minor years ago can cause a deviation significant enough to affect breathing.</p> <h3>Symptoms:</h3> <ul><li>Chronic difficulty breathing through one or both nostrils</li><li>Frequent nosebleeds</li><li>Recurrent sinus infections</li><li>Loud snoring and mouth breathing during sleep</li><li>Noisy breathing during exercise</li><li>Facial pressure or headache</li></ul><h3>Treatment — Septoplasty:</h3><p> Surgical correction of a deviated septum is called septoplasty. It's performed entirely through the nostrils — no external cuts, no bruising around the eyes. The deviated cartilage is straightened or partially removed, and the septum is repositioned in the centre. Most patients notice an immediate improvement in airflow after the swelling settles. Recovery takes 1–2 weeks.</p>",
    },
    {
      title: "Sleep Apnoea",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Diagnosis and treatment for sleep-related breathing disorders causing fatigue and health risks.",
      cta: "Book a Sleep Apnoea Evaluation",
      content:
        "<h2>Sleep Apnoea Treatment in Chennai</h2><p>Obstructive sleep apnoea is a condition where the airway partially or completely collapses during sleep, causing repeated pauses in breathing throughout the night. The person rarely knows it's happening — but the consequences show up during the day as relentless fatigue, poor concentration, irritability, and a higher long-term risk of high blood pressure, heart disease, and stroke. A snoring partner is often the first to notice.</p><h3>Symptoms:</h3><ul><li>Loud, persistent snoring</li><li>Witnessed pauses in breathing during sleep</li><li>Waking with a dry mouth or headache</li><li>Excessive daytime sleepiness — falling asleep in meetings, while driving</li><li>Poor concentration and memory</li><li>Mood changes and irritability</li><li>Frequent night-time urination</li></ul><h3>Diagnosis:</h3><p>A sleep study (polysomnography) is the gold standard for diagnosing sleep apnoea and determining its severity. Our ENT specialist evaluates the upper airway to identify the specific site of obstruction — nose, soft palate, tonsils, tongue base — because treatment depends entirely on where the problem is.</p><h3>Treatment Options:</h3><ul><li></li><li>CPAP therapy — continuous positive airway pressure device keeps the airway open during sleep</li><li>Weight management — obesity is a primary contributing factor</li><li>Positional therapy for mild positional sleep apnoea</li><li>Surgical options — tonsillectomy, uvulopalatopharyngoplasty (UPPP), nasal surgery — when obstruction is structural and CPAP is not tolerated</li></ul>",
    },
    {
      title: "Paediatric ENT Care",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Specialised ENT care for children addressing infections, hearing issues, and breathing problems.",
      cta: "Book a Paediatric ENT Appointment",
      content:
        "<h2>Paediatric ENT Care in Chennai</h2><p>ENT problems in children present differently from adults — and they affect development, behaviour, and learning in ways that aren't always obvious at first. A child with chronic ear infections may have subtle hearing loss affecting speech. A child with enlarged adenoids may mouth-breathe, snore, and sleep poorly — showing up at school exhausted and distracted. Early ENT assessment catches these issues before they compound.</p><h3>Common Paediatric ENT Conditions We Treat:</h3><ul><li>Recurrent ear infections (otitis media) and glue ear</li><li>Enlarged adenoids causing nasal blockage and mouth breathing</li><li>Tonsillitis and adenotonsillitis</li><li>Childhood hearing loss and speech delay</li><li>Foreign bodies in the ear, nose, or throat</li><li>Nasal allergies and allergic rhinitis in children</li><li>Sinusitis in school-age children</li><li>Snoring and obstructive sleep apnoea in children</li><li>Blocked tear ducts (nasolacrimal duct obstruction)</li></ul><h3>Our Approach with Children:</h3><p>Children need a different kind of consultation — one that doesn't frighten them. Our ENT team examines children gently, explains procedures in simple terms, and involves parents fully in every decision. Wherever possible, non-surgical management is tried first. Surgery is recommended only when it's clearly the right call.</p>",
    },
    {
      title: "Ear Infections & Otitis",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Diagnosis and treatment of outer and middle ear infections affecting hearing and comfort.",
      cta: "Book an Ear Infection Consultation",
      content:
        "<h2>Ear Infection Treatment in Chennai</h2><p>Ear infections are among the most common reasons people visit an ENT — and among the most frequently mismanaged with repeated antibiotic courses that address symptoms without resolving the underlying cause. At Saravanan Hospital, ear infections are properly examined, correctly classified, and treated based on what's actually happening — not just what's on the surface.</p><h3>Types of Ear Infections:</h3><ul><li>Otitis externa — infection of the outer ear canal, often called swimmer's ear. Causes pain, itching, discharge, and blocked sensation</li><li>Otitis media — middle ear infection behind the eardrum. Very common in children, causes earache, fever, and temporary hearing reduction</li><li>Chronic suppurative otitis media (CSOM) — long-standing middle ear infection with a perforated eardrum and persistent discharge</li><li>Otitis media with effusion (Glue ear) — fluid trapped in the middle ear without active infection, causing hearing loss</li></ul><h3>When to Come In:</h3><p>Ear pain lasting more than 2–3 days, discharge from the ear, hearing reduction, fever with ear pain, or ear symptoms in a child — all warrant proper ENT evaluation rather than waiting it out.</p><h3>Treatment:</h3><p>Outer ear infections are treated with antibiotic or antifungal ear drops. Middle ear infections in children are carefully monitored — many resolve without antibiotics. Persistent or recurrent cases, glue ear with significant hearing loss, and CSOM may require surgical intervention such as grommet insertion or tympanoplasty.</p>",
    },
    {
      title: "Fungal Ear Infection",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Treatment for fungal ear infections common in humid climates causing itching and blockage.",
      cta: "Book an ENT Consultation",
      content:
        "<h2>Fungal Ear Infection Treatment in Chennai</h2><p>Fungal otitis (otomycosis) is a fungal infection of the outer ear canal — and it's frequently misdiagnosed as bacterial infection, leading to repeated antibiotic ear drops that make the problem worse. Chennai's humid climate makes fungal ear infections particularly common, especially in people who swim regularly, use hearing aids, or have a habit of cleaning their ears with cotton buds.</p><h3>Symptoms:</h3><ul><li>Intense itching inside the ear canal</li><li>A blocked or full feeling in the ear</li><li>Discharge that may be white, grey, black, or yellow</li><li>Mild hearing reduction</li><li>Discomfort rather than severe pain (unlike bacterial infections)</li><li>Visible white or black debris in the ear canal on examination</li></ul><h3>Why It Gets Misdiagnosed:</h3><p> Fungal and bacterial ear infections share several symptoms. Without proper otoscopic examination and microscopy of the discharge, a fungal infection is often treated with antibacterial drops — which do nothing against fungus and disrupt the ear's natural flora further.</p><h3>Treatment:</h3><p>The ear canal is carefully cleaned under magnification to remove all fungal debris — this is essential, as antifungal drops alone rarely work on an uncleaned canal. Antifungal ear drops are then prescribed for 2–3 weeks. Recurrent fungal infections prompt investigation of underlying causes — diabetes, immune suppression, or habitual ear cleaning that removes protective ear wax.</p>",
    },
    {
      title: "Salivary Gland Disorders",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Diagnosis and treatment of salivary gland infections, stones, and tumours.",
      cta: "Book a Salivary Gland Consultation",
      content:
        "<h2>Salivary Gland Disorder Treatment in Chennai</h2><p>The salivary glands — parotid, submandibular, and sublingual — produce saliva that aids digestion and protects teeth. When these glands become blocked, infected, or develop growths, the result is swelling, pain, dry mouth, or difficulty eating. Salivary gland conditions are often unfamiliar to patients but very treatable once properly identified.</p><h3>Conditions We Treat:</h3><ul><li>Salivary stones (sialolithiasis) — calcium deposits blocking the duct, causing swelling and pain especially during eating</li><li>Sialadenitis — bacterial or viral infection of a salivary gland causing pain, swelling, and fever</li><li>Parotitis — inflammation of the parotid gland (mumps is a viral cause)</li><li>Salivary gland cysts and benign tumours</li><li>Dry mouth (xerostomia) — reduced saliva production affecting oral health and swallowing</li><li>Salivary gland malignancy — rare, but requires prompt evaluation of any firm, growing lump</li></ul> <h3>Diagnosis:</h3><p>Ultrasound of the salivary glands identifies stones, swelling, and masses. CT or MRI is used for complex cases or suspected tumours. Fine needle aspiration cytology (FNAC) evaluates any suspicious lump before surgery is considered.<p><h3>Treatment: </h3><p>Small salivary stones may pass with hydration and gland massage. Larger stones are removed endoscopically or through a small incision. Infections are treated with antibiotics. Tumours — benign or malignant — are surgically removed by our ENT team.</p>",
    },
    {
      title: "Chronic Allergic Sinusitis",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Long-term management for sinus inflammation caused by persistent allergies.",
      cta: "Book a Chronic Sinusitis Consultation",
      content:
        "<h2>Chronic Allergic Sinusitis Treatment in Chennai</h2><p>Chronic allergic sinusitis sits at the crossroads of two conditions — persistent sinus inflammation and ongoing allergic response. Each makes the other worse. The allergy triggers nasal lining swelling that blocks sinus drainage. The blocked sinuses become infected and inflamed. The cycle repeats — month after month, sometimes year after year. Breaking it requires treating both simultaneously.</p><h3>How It Differs From Regular Sinusitis:</h3><p>Standard sinusitis may resolve with a course of antibiotics and decongestants. Chronic allergic sinusitis doesn't — because the allergy keeps driving the inflammation even after infection clears. Patients with this condition often describe years of blocked nose, facial pressure, reduced smell, and recurrent sinus infections that never fully go away.</p><h3>Symptoms:</h3><ul><li>Persistent nasal congestion — worse around allergy triggers</li><li>Recurring facial pressure and headache</li><li>Thick nasal discharge and post-nasal drip</li><li>Chronic loss of smell and taste</li><li>Frequent antibiotic courses with only temporary relief</li><li>Associated asthma or eczema in some patients</li></ul><h3>Treatment Approach:</h3><p> Managing chronic allergic sinusitis requires a combined plan — allergy testing to identify triggers, nasal corticosteroid sprays, antihistamines, and sinus rinses for daily management. For patients with significant polyps or structural obstruction, FESS surgery is considered. Allergy immunotherapy addresses the root allergic sensitisation over time.</p>",
    },
    {
      title: "Throat & Laryngeal Cancer",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Early detection and specialist care for cancers affecting the throat and voice box.",
      cta: "Book an ENT Evaluation Today",
      content:
        "<h2>Throat & Laryngeal Cancer Care in Chennai</h2><p>Cancers of the throat and larynx (voice box) are serious — but outcomes improve significantly with early detection. The challenge is that early symptoms are easy to dismiss as a persistent cough, a voice change from overuse, or difficulty swallowing that comes and goes. At Saravanan Hospital, any symptom that persists beyond 3 weeks without a clear explanation is evaluated thoroughly — because catching this early genuinely changes what's possible.</p><h3>Warning Signs That Need Immediate Evaluation:</h3><ul><li>Hoarseness or voice change lasting more than 3 weeks</li><li>Difficulty swallowing or a sensation of something stuck in the throat</li><li>Persistent sore throat not responding to treatment</li><li>A lump in the neck</li><li>Unexplained ear pain on one side</li><li>Coughing up blood</li><li>Unintentional weight loss with throat symptoms</li></ul><h3>Risk Factors:</h3><p>Tobacco use — smoking or chewing — is the single biggest risk factor. Heavy alcohol use significantly increases risk when combined with tobacco. HPV infection is an emerging risk factor for throat cancers in non-smokers.</p><h3>Diagnosis & Treatment:</h3><p> Flexible laryngoscopy allows direct visualisation of the larynx and throat. Biopsy confirms diagnosis. Staging is done with CT or MRI. Treatment depends on stage and location — early-stage laryngeal cancers may be treated with radiation or laser surgery preserving the voice. Advanced cases require more extensive surgery, often combined with radiation and chemotherapy, coordinated with our oncology team.</p>",
    },
    {
      title: "CSF Rhinorrhoea",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Specialist diagnosis and repair of cerebrospinal fluid leaks from the nose.",
      cta: "Book an Urgent ENT Evaluation",
      content:
        "<h2>CSF Rhinorrhoea Treatment in Chennai</h2><p>CSF rhinorrhoea is a condition where cerebrospinal fluid — the fluid that surrounds and cushions the brain — leaks through a defect in the skull base and drains out through the nose. It appears as a clear, watery, one-sided nasal discharge that increases when bending forward or straining. It's rare, often misidentified as a simple runny nose, and carries a real risk of meningitis if left untreated. It requires specialist evaluation without delay.</p><h3>Causes:</h3><ul><li>Trauma — head injury or previous nasal/sinus surgery creating a skull base defect</li><li>Spontaneous — occurring without obvious cause, often associated with raised intracranial pressure</li><li>Post-surgical — following pituitary surgery or other skull base procedures</li><li>Tumour erosion of the skull base — rare</li></ul><h3>Treatment:</h3><p>Most leaks are repaired endoscopically through the nose using minimally invasive surgery.</p><h3>How It's Diagnosed: </h3><p>The nasal fluid is tested for beta-2 transferrin — a protein found only in CSF, confirming the diagnosis. High-resolution CT and MRI identify the exact location of the defect. Intrathecal fluorescein injection is used in complex cases to precisely localise the leak during endoscopic surgery.</p><h3>Treatment:</h3> <p> Most CSF leaks are repaired endoscopically — through the nostrils, using a graft to seal the defect in the skull base. This is minimally invasive, avoids brain surgery, and has a high success rate in experienced hands. Bed rest and reduction of intracranial pressure are managed alongside surgical repair where needed.</p>",
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
