const grid = document.querySelector(".card-grid");
const treatmentLeftColumn = document.querySelector(".treatment-column-left");
const treatmentRightColumn = document.querySelector(".treatment-column-right");

if (grid || (treatmentLeftColumn && treatmentRightColumn)) {
  const servicess = [
    {
      title: "Acne & Acne Scars",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Persistent breakouts and the marks they leave behind — treated at the root.",
      cta: "Book an Acne Consultation",
      content:
        "<h2>Acne & Acne Scar Treatment in Chennai</h2><p>Acne is the most common skin condition seen by dermatologists — and the most frequently mistreated. Medicated face washes, home remedies, and over-the-counter creams may reduce surface breakouts temporarily, but they rarely address why acne keeps coming back. At Saravanan Hospital, treatment starts with understanding your skin type, trigger factors, and the grade of acne before anything is prescribed.</p><h3>Why Does Acne Keep Coming Back?</h3><p>Acne develops when hair follicles get clogged with oil and dead skin cells. Hormonal fluctuations, excess sebum production, bacteria, dietary factors, and stress all play a role. Without treating the underlying cause, breakouts return — often worse after stopping over-the-counter products.</p><h3>What We Treat:</h3><ul><li>Whiteheads and blackheads</li><li>Inflammatory acne — papules, pustules, nodules, cysts</li><li>Hormonal acne along the jawline and chin</li><li>Back and chest acne</li><li>Post-acne hyperpigmentation</li><li>Acne scars — ice pick, boxcar, rolling, hypertrophic</li></ul><h3>Treatment Options:</h3><ul><li>Topical and oral medication tailored to acne type</li><li>Hormonal therapy where required</li><li>Chemical peels for acne and marks</li><li>Laser resurfacing for scars</li><li>Microneedling for scar remodelling</li><li>Comedone extraction</li></ul><h3>On Acne Scars Specifically:</h3><p>Scars form when deep acne damages the skin's collagen structure. They don't fade on their own with time — but with the right procedure, significant improvement is achievable. Your dermatologist will assess your scar type and recommend the most effective treatment for your specific pattern.</p>",
    },
    {
      title: "Psoriasis & Eczema",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Chronic skin conditions managed with a long-term plan that actually controls flare-ups.",
      cta: "Book a Consultation for Psoriasis or Eczema",
      content:
        "<h2>Psoriasis & Eczema Treatment in Chennai</h2><p>Psoriasis and eczema are two of the most frustrating skin conditions to live with — not because they're untreatable, but because they're often poorly managed. Flare-ups are controlled, then they return. Creams are applied, then stopped. The cycle continues. At Saravanan Hospital, we treat both conditions with the consistency and long-term thinking they require.</p><h3>Psoriasis</h3><p>Psoriasis is an autoimmune condition where skin cells multiply too fast, building up into thick, scaly, inflamed patches. It most commonly affects the scalp, elbows, knees, and lower back — but can appear anywhere. It isn't contagious, but it is chronic, and flare-ups are often triggered by stress, infections, or certain medications.Treatment includes topical corticosteroids, vitamin D analogues, phototherapy (UV light treatment), and systemic medications for moderate to severe cases. The goal is sustained remission — not just clearing the current flare.</p><h3>Eczema (Atopic Dermatitis):</h3><p> Eczema causes dry, intensely itchy, inflamed skin — often starting in childhood but persisting into adulthood for many patients. Triggers include soaps, detergents, synthetic fabrics, sweat, dust mites, pet dander, and stress. Scratching worsens the inflammation, creating a difficult itch-scratch cycle.Treatment focuses on identifying and avoiding triggers, repairing the skin barrier with the right moisturisers, and using anti-inflammatory medications during flare-ups. Newer targeted therapies are available for patients with severe or resistant eczema.</p><h3>Living With These Conditions :</h3><p>Beyond medication, our dermatologists provide practical guidance on daily skincare routines, bathing habits, fabric choices, and stress management — because what you do every day between clinic visits matters as much as the treatment itself.</p>",
    },
    {
      title: "Warts, Moles & Skin Tags",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Safe, clean removal of unwanted skin growths with minimal scarring.",
      cta: "Book a Skin Growth Removal Appointment",
      content:
        "<h2>Wart, Mole & Skin Tag Removal in Chennai</h2><p>Warts, moles, and skin tags are among the most common reasons people visit a dermatologist — and removal is almost always straightforward when done correctly. Whether you're bothered by how they look, concerned about one that's changing, or simply want it gone, our dermatologists handle removal cleanly and safely with minimal scarring.</p><h3>Warts:</h3><p> Warts are caused by the human papillomavirus (HPV) and appear as rough, raised growths — commonly on the hands, feet (plantar warts), and face. They're contagious through direct contact and tend to spread if untreated. Treatment options include cryotherapy (freezing), electrocautery (burning), laser, and topical acids. Multiple sessions are sometimes needed for complete clearance.</p><h3>Moles:</h3><p>Most moles are benign and harmless. However, moles that change in size, shape, or colour — or that bleed, itch, or develop irregular borders — need urgent evaluation. Our dermatologists examine every mole using dermoscopy before recommending removal. Suspicious moles are sent for histopathology to rule out malignancy.</p><h3>Skin Tags:</h3><p> Skin tags are soft, flesh-coloured growths that hang off the skin — common on the neck, armpits, eyelids, and under the breasts. They're entirely benign but can catch on clothing or jewellery and cause irritation. Removal is quick, painless under local anaesthesia, and leaves no significant mark.</p>",
    },
    {
      title: "Hair Loss Treatments",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Finding why your hair is falling — and stopping it before more is lost.",
      cta: "Book a Hair Loss Consultation",
      content:
        "<h2>Hair Loss Treatment in Chennai</h2><p>Losing 50–100 hairs a day is normal. Noticing your parting widening, your ponytail thinning, or patches of scalp showing through — that's when it needs attention. Hair loss has many causes, and the treatment only works when it matches the actual cause. At Saravanan Hospital, every hair loss case starts with a proper diagnosis.</p><h3>Common Causes of Hair Loss:</h3><ul><li>Androgenetic alopecia — genetic hair thinning in men and women</li><li>Telogen effluvium — shedding triggered by stress, illness, childbirth, or nutritional deficiency</li><li>Alopecia areata — autoimmune patchy hair loss</li><li>Scalp conditions — dandruff, seborrhoeic dermatitis, fungal infections</li><li>Hormonal causes — thyroid disorders, PCOS, post-partum changes</li><li>Nutritional deficiencies — iron, Vitamin D, Vitamin B12, zinc</li></ul><h3>How We Evaluate Hair Loss:</h3><p>A detailed scalp examination, trichoscopy (scalp magnification), and targeted blood tests identify the type and cause of hair loss. Treatment is prescribed based on findings — not guesswork.</p><h3>Treatment Options:</h3><ul><li>Topical minoxidil and oral medications for androgenetic alopecia</li><li>PRP (Platelet-Rich Plasma) therapy — stimulates follicle activity and reduces active shedding</li><li>Mesotherapy for scalp nutrition and hair density improvement</li><li>Anti-fungal or anti-inflammatory treatment for scalp-related hair loss</li><li>Nutritional supplementation where deficiencies are found</li><li>Medical hair restoration planning for advanced cases</li></ul>",
    },
    {
      title: "Pigmentation & Melasma",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Uneven skin tone and stubborn dark patches treated with targeted clinical procedures.",
      cta: "Book a Pigmentation Consultation",
      content:
        "<h2>Pigmentation & Melasma Treatment in Chennai</h2><p>Dark patches, uneven skin tone, and stubborn spots that don't respond to fairness creams — these are among the most common concerns seen in Chennai dermatology clinics, particularly in Indian skin tones that are naturally more prone to pigmentation. The mistake most people make is treating pigmentation with over-the-counter products for months before seeing a dermatologist. Clinical treatment works faster, more effectively, and more safely when prescribed correctly.</p><h3>Types of Pigmentation We Treat:</h3><ul><li>Melasma — brown or grey-brown patches typically on the cheeks, forehead, and upper lip, often triggered by sun exposure, hormones, or pregnancy</li><li>Post-inflammatory hyperpigmentation — dark marks left after acne, injury, or skin inflammation</li><li>Sunspots and age spots — flat, darkened areas from cumulative sun damage</li><li>Freckles and uneven skin tone</li></ul><h3>What Causes Pigmentation?</h3><p> Melanin overproduction — triggered by UV exposure, hormonal changes, heat, and skin trauma — is the root cause of most pigmentation concerns. Effective treatment requires both reducing melanin production and protecting skin from further triggers.</p><h3>Treatment Options:</h3><ul><li>Topical depigmenting agents — prescription-strength, not over-the-counter</li><li>Chemical peels — targeted exfoliation to reduce surface pigmentation</li><li>Laser toning — breaks down melanin deposits in deeper skin layers</li><li>Microdermabrasion for surface-level brightening</li><li>Sun protection guidance — because no pigmentation treatment works without it</li></ul>",
    },
    {
      title: "Skin Allergy Management",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Identifying what's triggering your skin reaction and keeping it from coming back.",
      cta: "Book a Skin Allergy Consultation",
      content:
        "<h2>Skin Allergy Treatment in Chennai</h2><p>Skin allergies come in many forms — sudden hives after a meal, a rash from a new soap, patches of dry inflamed skin that come and go without explanation. The frustrating part isn't the rash itself — it's not knowing what caused it or how to prevent it from happening again. At Saravanan Hospital, allergy management goes beyond treating the reaction. We find the trigger.</p><h3>Types of Skin Allergies We Treat:</h3><ul><li>Contact dermatitis — reaction to direct skin contact with an allergen or irritant (soaps, metals, cosmetics, rubber, plants)</li><li>Urticaria (hives) — raised, itchy welts that appear suddenly and can be acute or chronic</li><li>Angioedema — deeper swelling under the skin, often around the eyes and lips</li><li>Atopic dermatitis (eczema) — chronic allergic skin inflammation</li><li>Drug-induced skin reactions</li><li>Food allergy skin manifestations — rashes, hives, flushing</li></ul> <h3>How We Identify the Trigger:</h3><p> A detailed allergy history is taken — what you eat, what you use on your skin, your work environment, and when reactions occur. Patch testing identifies contact allergens. Blood tests check for IgE-mediated allergies. Skin prick testing is used where appropriate.</p><h3>Treatment:</h3><p> Once the trigger is identified, avoidance is the most effective management. Antihistamines, topical or oral corticosteroids, and immunomodulatory treatments control ongoing symptoms. Your dermatologist will also guide you on safe product alternatives for everyday use.</p>",
    },
    {
      title: "Nail Disorders",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Fungal infections, nail changes, and structural problems diagnosed and treated correctly.",
      cta: "Book a Nail Disorder Consultation",
      content:
        "<h2>Nail Disorder Treatment in Chennai</h2><p>Nails are often the last thing people think to bring to a dermatologist — but nail changes can signal fungal infections, autoimmune conditions, nutritional deficiencies, or occasionally something more serious that needs early attention. Whether it's discolouration, thickening, separation, pitting, or chronic brittleness — nail disorders are diagnosable and treatable.</p><h3>Common Nail Conditions We Treat:</h3><ul><li>Onychomycosis — fungal nail infection causing thickening, yellowing, and crumbling of the nail</li><li>Nail psoriasis — pitting, oil-drop discolouration, nail separation</li><li>Onycholysis — nail lifting away from the nail bed</li><li>Paronychia — infection of the skin around the nail (acute or chronic)</li><li>Ingrown toenails — painful, sometimes infected nail edges digging into surrounding skin</li><li>Brittle or ridged nails related to nutritional deficiency</li><li>Nail changes associated with systemic disease — anaemia, thyroid disorders, kidney disease</li></ul><h3>Diagnosis:</h3><p>Nail clippings or scrapings are sent to the lab to confirm fungal infection where suspected. Dermoscopy of the nail unit helps identify psoriasis and other structural conditions. Blood tests identify underlying systemic causes.</p><h3>Treatment:</h3><p> Fungal nail infections need oral antifungal medication for several months — topical treatment alone rarely penetrates deep enough. Nail psoriasis is managed alongside skin psoriasis treatment. Ingrown toenails are treated with minor nail surgery under local anaesthesia when conservative care fails.</p>",
    },
    {
      title: "Skin Cancer & Mole Screening",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Early detection of suspicious skin changes — because catching it early saves lives.",
      cta: "Book a Skin Cancer Screening",
      content:
        "<h2>Skin Cancer & Mole Screening in Chennai</h2><p>Skin cancer is more common than most people in India acknowledge — and the reason outcomes vary so dramatically is timing. Caught early, most skin cancers are highly treatable. Left unexamined, they grow, spread, and become significantly harder to manage. At Saravanan Hospital, our dermoscopy-based mole screening gives you a clear answer on whether a growth needs further investigation or simple monitoring.</p><h3>Warning Signs That Need Immediate Evaluation:</h3><p>Using the ABCDE rule as a guide:</p><ul><li>A — Asymmetry: One half doesn't match the other</li><li>B — Border: Irregular, ragged, or blurred edges</li><li>C — Colour: Multiple shades — brown, black, red, white, or blue in the same lesion</li><li>D — Diameter: Larger than 6mm (roughly the size of a pencil eraser)</li><li>E — Evolution: Any change in size, shape, colour, or a mole that starts bleeding or itching</li></ul><h3>Types of Skin Cancer:</h3><ul><li>Basal cell carcinoma — most common, slow-growing, rarely spreads</li><li>Squamous cell carcinoma — can spread if not treated early</li><li>Melanoma — least common but most serious, can spread quickly</li></ul> <h3>Who Should Get Screened?</h3>   <p>Anyone with a large number of moles, a family history of skin cancer, significant sun exposure history, or a mole that has changed recently. Fair-skinned individuals are at higher risk, but darker skin tones are not immune — and skin cancers in darker skin are often diagnosed later because they're not expected.</p><h3>What Screening Involves:</h3><p>A full-body skin examination and dermoscopic evaluation of suspicious lesions. Biopsies are arranged immediately when a lesion looks concerning. Results are communicated clearly and promptly.</p>",
    },
    {
      title: "Cosmetology",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Medical-grade cosmetic procedures for skin, hair, and anti-aging — done by doctors, not salons.",
      cta: "Book a Cosmetology Consultation",
      content:
        "<h2>Cosmetology Services in Chennai</h2><p>Cosmetology at Saravanan Hospital is not a beauty parlour service. Every procedure is performed by a qualified dermatologist in a proper clinical setting — with a pre-procedure consultation, realistic expectations, and proper aftercare. If you want results that actually last, the difference between a clinic and a salon matters more than most people realise.</p><h3>What We Offer:</h3><h4>Anti-Aging & Skin Rejuvenation:</h4><ul><li>Botox — reduces fine lines and expression wrinkles</li><li>Dermal fillers — restores volume in cheeks, lips, and under-eye areas</li><li>Skin tightening treatments</li><li>PRP therapy for skin rejuvenation</li></ul><h4>Pigmentation & Complexion Treatments:</h4><ul><li>Chemical peels — removes dead skin, reduces pigmentation and acne marks</li><li>Laser toning — targets uneven skin tone and stubborn dark spots</li><li>Microdermabrasion for dull, tired skin</li></ul><h4>Acne & Scar Treatments:</h4><ul><li>Laser resurfacing for acne scars</li><li>Microneedling (dermaroller) for scar reduction</li><li>Clinical acne facials and comedone extraction</li></ul><h4>Hair Treatments:</h4><ul><li>PRP for hair loss — stimulates follicle activity</li><li>Mesotherapy for scalp health and hair density</li><li>Medical hair restoration planning</li></ul><h4>Laser Treatments:</h4><ul><li>Laser hair removal — face, underarms, legs, full body</li><li>Laser for pigmentation, sunspots, and vascular lesions</li></ul><h3>What to Expect:</h3><p> Every cosmetology consultation begins with a skin assessment. Your dermatologist explains what's achievable, how many sessions you'll need, and what recovery looks like. No hard sells. No unrealistic promises. Just honest clinical guidance.</p>",
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
