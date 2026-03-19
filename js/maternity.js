const grid = document.querySelector(".card-grid");
const treatmentLeftColumn = document.querySelector(".treatment-column-left");
const treatmentRightColumn = document.querySelector(".treatment-column-right");

if (grid || (treatmentLeftColumn && treatmentRightColumn)) {
  const servicess = [
    {
      title: "Well Women Care",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Preventive health care and routine screenings that keep women healthy at every stage of life.",
      cta: "Book Your Well Women Check-Up",
      content:
        "<h2>Well Women Care in Chennai</h2><p>Most women visit a doctor when something goes wrong. But the smartest thing you can do for your health is show up before anything does. Well Women Care at Saravanan Hospital is exactly that — a dedicated programme that keeps track of your health across every stage of your life, so small concerns get caught early and nothing is left unattended.</p><h3>What Does Well Women Care Actually Cover?</h3><p>Women's health changes significantly through different decades of life. A 25-year-old and a 45-year-old need different things from their gynaecologist. Our Well Women Care programme is built to address this — covering routine screenings, hormonal assessments, menstrual health, reproductive planning, and menopause management under a single, continuous care plan.</p><h3>What's Included in Your Visit:</h3><ul><li>Comprehensive gynaecological examination</li><li>Pap smear and cervical cancer screening</li><li>Breast examination and mammography referral where needed</li><li>Hormonal profile and thyroid function testing</li><li>Bone density evaluation for women over 40</li><li>Contraception counselling and family planning guidance</li><li>Menstrual irregularity assessment</li><li>Nutritional and lifestyle guidance</li></ul><h3>Who Should Come In:</h3><p>Any woman aged 18 and above — whether or not she has an active concern.</p><h3>Why Saravanan Hospital:</h3><p>Our gynaecologists take a full-picture approach. Every recommendation is based on your age, history, and what matters most to your health right now.</p>",
    },
    {
      title: "Natural Birthing",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Supportive, low-intervention childbirth with full medical safety available if needed.",
      cta: "Talk to Our Birthing Team",
      content:
        "<h2>Natural Birthing Support in Chennai</h2><p>More and more women in Chennai are choosing to reclaim their birth experience — and natural birthing makes that possible. At Saravanan Hospital, we support women who want to deliver without unnecessary intervention while having the full safety net of a qualified medical team right there if needed.</p><h3>What Is Natural Birthing?</h3><p>Natural birthing refers to vaginal delivery with minimal medical intervention — allowing labour to progress at its own pace with supportive pain-management techniques.</p><h3>Programme Includes:</h3><ul><li>Prenatal counselling</li><li>Birth plan discussion</li><li>Continuous foetal monitoring</li><li>Trained nursing support</li><li>Access to epidural if required</li><li>Immediate newborn assessment</li><li>Postnatal care for mother and baby</li></ul><h3>Is Natural Birthing Right for You?</h3><p> Not every pregnancy is suitable for natural delivery — and we'll always be honest with you about that. Women with certain medical conditions, foetal complications, or high-risk factors may need a different approach. Your obstetrician will review your full history and give you a clear, honest picture of what's safe and suitable for you.</p>",
    },
    {
      title: "Caesarean Section",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Safe and carefully managed C-section deliveries by experienced obstetric surgeons.",
      cta: " Speak to Our Obstetrics Team",
      content:
        "<h2>Caesarean Section (C-Section) in Chennai</h2><p>A Caesarean section is sometimes the safest way to bring a baby into the world — and when that moment comes, you want a surgical team that's calm, skilled, and prepared. At Saravanan Hospital, both planned and emergency C-sections are performed in fully equipped operation theatres with experienced obstetricians and anaesthetists who know exactly what they're doing.</p><h3>When Is a C-Section Recommended?</h3><ul><li>Breech or transverse baby position</li><li>Placenta previa or placental abruption</li><li>Foetal distress during labour</li><li>Multiple pregnancy</li><li>Previous C-section complications</li><li>Prolonged labour</li><li>Maternal health risks</li></ul><h3>What Happens During the Procedure:</h3><p>The surgery typically takes 45–60 minutes. Spinal anaesthesia is used in most planned cases, meaning you're awake but completely pain-free. Your baby is delivered within the first 10–15 minutes, after which the surgical team closes the incision carefully. Post-operative monitoring ensures both mother and baby are stable before transfer to the ward.</p><h3>Recovery and Aftercare:</h3><p>Most mothers are up and walking within 24 hours. Our nursing team provides wound care guidance, breastfeeding support, and pain management through the recovery period. You'll also receive a clear plan for follow-up visits before discharge.</p>",
    },
    {
      title: "High Risk Obstetrics",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Specialised monitoring and care for pregnancies that need extra attention.",
      cta: " Book a High Risk Pregnancy Consultation",
      content:
        "<h2>High Risk Pregnancy Management in Chennai</h2><p>A high-risk pregnancy doesn't mean something will go wrong. It means your pregnancy needs closer attention, more frequent monitoring, and a care team that doesn't miss anything. At Saravanan Hospital, our high-risk obstetrics unit in Chennai is set up to manage exactly these situations — with specialist oversight from the first trimester through delivery.</p><h3>What Makes a Pregnancy High-Risk?</h3><ul><li>Pre-existing conditions: diabetes, hypertension, thyroid disorders, heart conditions</li><li>Pregnancy-related complications: gestational diabetes, preeclampsia, placenta previa</li><li>Multiple pregnancies</li><li>Previous pregnancy loss</li><li>Foetal growth concerns</li><li>Advanced maternal age</li></ul><h3>How We Manage High-Risk Pregnancies:</h3><p> Each case is different, so there is no single plan that fits everyone. Your specialist will create a monitoring schedule tailored to your specific risk factors. This typically includes more frequent ultrasounds, detailed foetal growth tracking, blood pressure and urine monitoring, and closer communication between your gynaecologist and other specialists if needed.</p> <h3>Our Commitment to You:</h3> <p>You'll never be left wondering what a result means or what comes next. Our team explains every finding in plain language, involves you in every decision, and makes sure you leave each appointment knowing exactly where things stand.</p> ",
    },
    {
      title: "Gynaec Laparoscopy",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Minimally invasive surgery for diagnosing and treating pelvic conditions.",
      cta: "Consult Our Gynaec Surgery Team",
      content:
        "<h2>Gynaecological Laparoscopy in Chennai</h2><p> Many gynaecological conditions are difficult to diagnose from the outside — endometriosis, ovarian cysts, fibroids, pelvic adhesions. Gynaec laparoscopy lets our surgeons look directly inside the pelvic cavity using a small camera, diagnose the problem accurately, and in many cases treat it in the same procedure. Smaller incisions, less pain, faster recovery — and far clearer answers.</p><h3>Conditions Treated with Gynaec Laparoscopy:</h3><ul><li>Endometriosis diagnosis and removal</li><li>Ovarian cyst drainage or removal</li><li>Fibroid removal (myomectomy)</li><li>Tubal blockage investigation and correction</li><li>Ectopic pregnancy treatment</li><li>Pelvic adhesion release</li><li>Hysterectomy (laparoscopic)</li></ul><h3>What to Expect:</h3><p>The procedure is done under general anaesthesia. A small incision near the navel allows the camera to enter, and one or two more tiny incisions are made for surgical instruments if treatment is needed. Most procedures take 30–90 minutes. Recovery is significantly shorter than open surgery — most patients go home within 24–48 hours.</p><h3>Why Choose Laparoscopy Over Open Surgery:</h3><p>Laparoscopic surgery causes less trauma to surrounding tissue. Scarring is minimal, post-operative pain is lower, and return to normal activity is faster. For women dealing with fertility-related issues like blocked tubes or endometriosis, laparoscopy is often both diagnostic and therapeutic in a single step.</p>",
    },
    {
      title: "PCOS Management",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Comprehensive hormonal care for managing PCOS symptoms and improving fertility.",
      cta: "Start Your PCOS Treatment Today",
      content:
        "<h2>PCOS Treatment in Chennai</h2><p>Polycystic Ovary Syndrome is one of the most common hormonal conditions affecting women in Chennai — and one of the most frequently misunderstood. Irregular periods, weight gain, unwanted hair growth, acne, and difficulty conceiving are not things you should simply accept. PCOS is manageable, and the right treatment plan can make a real difference to how you feel every single day.</p><h3>What Is PCOS?</h3><p> PCOS is a hormonal imbalance where the ovaries produce higher-than-normal levels of androgens (male hormones). This disrupts the menstrual cycle, affects ovulation, and causes a range of symptoms that touch nearly every part of daily life — from energy levels and skin to fertility and mood.</p> <h3> How We Approach PCOS at Saravanan Hospital:</h3> <ul><li>Detailed hormonal blood panel and ultrasound assessment</li><li>Identification of your specific PCOS type and trigger factors</li><li>Customised medication plan where required</li><li>Nutritional guidance and sustainable lifestyle changes</li><li>Menstrual cycle regulation and ovulation support</li><li>Fertility planning for women trying to conceive</li><li>Regular follow-ups to track progress and adjust treatment</li></ul> <h3>Can PCOS Be Cured?</h3><p>Not in the conventional sense — but it can absolutely be controlled. Many women with PCOS manage their symptoms so well that they have little to no impact on daily life. With the right medical support and consistent lifestyle habits, most women see significant improvement within a few months.</p>",
    }, 
    {
      title: "Hysteroscopy",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Direct examination and treatment of uterine problems without external incisions.",
      cta: "Book a Hysteroscopy Consultation",
      content:
        "<h2>Hysteroscopy in Chennai</h2><p>When something inside the uterus is causing abnormal bleeding, pain, or fertility problems — you need a way to see what's actually happening. Hysteroscopy gives your doctor a clear, direct view of the uterine cavity using a thin, lighted instrument passed through the cervix. No cuts. No stitches. And often, the problem can be treated in the same sitting.</p><h3>When Is Hysteroscopy Recommended?</h3><ul><li>Abnormal or heavy menstrual bleeding</li><li>Bleeding between periods or after menopause</li><li>Repeated miscarriages or implantation failure</li><li>Suspected uterine polyps or fibroids</li><li>Uterine septum (structural abnormality)</li><li>Intrauterine adhesions (Asherman's Syndrome)</li><li>Checking IUD position</li></ul><h3>Diagnostic vs. Operative Hysteroscopy:</h3><p> A diagnostic hysteroscopy is used purely to examine the uterine cavity and identify problems. An operative hysteroscopy goes a step further — polyps are removed, adhesions are released, septa are corrected, all without a single external incision.</p><h3>What to Expect:</h3><p>The procedure takes 15–45 minutes and is usually done under local or general anaesthesia depending on whether it's diagnostic or operative. Most women return home the same day. Mild cramping and light spotting for a day or two afterwards is normal and settles quickly.</p>",
    },
    {
      title: "Reproductive Medicine",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Comprehensive fertility evaluation and treatment planning for couples.",
      cta: "Book a Reproductive Medicine Consultation",
      content:
        "<h2>Reproductive Medicine in Chennai</h2><p>Reproductive medicine sits at the intersection of gynaecology, endocrinology, and fertility science. It's the speciality that takes over when a couple has been trying to conceive without success and needs a thorough, systematic investigation of why — and a medically guided path forward. At Saravanan Hospital, our reproductive medicine team leaves no question unanswered.</p><h3>What Reproductive Medicine Covers:</h3><ul><li>Complete fertility workup for both partners</li><li>Ovarian reserve testing (AMH, antral follicle count)</li><li>Sperm analysis and male fertility evaluation</li><li>Hormonal profiling and thyroid assessment</li><li>Uterine and tubal assessment (HSG, sonohysterography)</li><li>Ovulation induction and cycle monitoring</li><li>Coordination of IUI, IVF, or ICSI where appropriate</li><li>Management of recurrent pregnancy loss</li></ul> <h3>Who Should See a Reproductive Medicine Specialist?</h3> <p> Any couple who has been trying to conceive for 12 months without success (or 6 months if the woman is over 35). Also recommended for women with known conditions like PCOS, endometriosis, or irregular cycles — even before they start trying.</p> <h3>Our Approach:</h3><p> We start by understanding your full story — medical history, previous pregnancies, lifestyle, and emotional state. Fertility treatment is not just clinical. It involves real people dealing with real pressure. Our team takes that seriously.</p>",
    },
    {
      title: "Female Infertility",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Identifying and treating the underlying causes preventing conception.",
      cta: "Speak to a Female Fertility Specialist",
      content:
        "<h2>Female Infertility Treatment in Chennai</h2><p> Not being able to conceive when you want to is one of the hardest things a woman can face. It brings with it confusion, worry, and often a silence that makes it feel lonelier than it should be. Female infertility has many causes — and most of them are treatable once properly identified. At Saravanan Hospital, we start with answers.</p><h3>Common Causes of Female Infertility:</h3><ul><li>Ovulation disorders (PCOS, premature ovarian insufficiency)</li><li>Blocked or damaged fallopian tubes</li><li>Endometriosis</li><li>Uterine abnormalities</li><li>Age-related egg decline</li><li>Hormonal imbalances</li><li>Unexplained infertility</li></ul><h3>How We Investigate:</h3><p> A systematic fertility workup includes hormonal blood tests, pelvic ultrasound, ovarian reserve assessment, and tubal patency testing. Based on results, your doctor will map out a clear treatment plan — whether that's ovulation induction, surgery to remove a blockage, or assisted reproduction.</p><h3>Treatment Options:</h3><ul><li>Ovulation induction with cycle monitoring</li><li>Hormonal therapy</li><li>Laparoscopic correction of structural problems</li><li>IUI / IVF / ICSI</li><li>Egg freezing for future use</li></ul><h3>You Are Not Alone: </h3><p>Female infertility affects a significant number of couples trying to conceive. Asking for help is not giving up — it's the most proactive thing you can do. Our team makes sure you understand every step of your evaluation and every option available to you.</p>",
    },
    {
      title: "IUI / IVF / ICSI",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Advanced assisted reproductive techniques to help couples conceive.",
      cta: "Book Your IUI / IVF / ICSI Consultation",
      content:
        "<h2>IUI, IVF & ICSI Treatment in Chennai</h2><p>Assisted reproductive technology has helped millions of couples become parents — not by replacing nature, but by giving it the precise support it needs. At Saravanan Hospital, IUI, IVF, and ICSI are offered as a stepwise approach: starting with the least invasive option that gives the best chance of success for your specific situation.</p><h3>Understanding Each Treatment:</h3><p><b>IUI (Intrauterine Insemination)</b> A prepared sperm sample is placed directly into the uterus around the time of ovulation. It's less invasive, more affordable, and often the first recommended step for couples with unexplained infertility, mild male factor issues, or ovulatory dysfunction. Success rates improve when combined with ovulation-stimulating medications.</p><p><b>IVF (In Vitro Fertilisation)</b> Eggs are retrieved from the ovaries, fertilised with sperm in a controlled laboratory setting, and the resulting embryo is transferred into the uterus. IVF is recommended when IUI has not succeeded, tubes are blocked, or ovarian reserve is low. The process takes 2–3 weeks per cycle.</p><p><b>ICSI (Intracytoplasmic Sperm Injection)</b> A single healthy sperm is injected directly into an egg — making fertilisation possible even when sperm count or motility is severely compromised. ICSI is typically recommended alongside IVF when male infertility is the primary factor.</p><h3>What to Expect at Saravanan Hospital:</h3><p> Every treatment cycle begins with a detailed consultation reviewing your history and previous test results. Your protocol is individualised — not a template. You'll have monitoring appointments through the cycle and clear communication at every stage.</p>",
    },
    {
      title: "Andrology",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Specialist care for male reproductive and sexual health concerns.",
      cta: "Book an Andrology Consultation",
      content:
        "<h2>Andrology Services in Chennai</h2><p>Andrology is the branch of medicine that deals with male reproductive and sexual health. It's a speciality that doesn't get enough attention in Chennai — but male factor issues account for a significant portion of fertility challenges faced by couples. At Saravanan Hospital, our andrology services offer men a dedicated, confidential space to get evaluated and treated without awkwardness or delay.</p><h3>What Andrology Covers:</h3><ul><li>Semen analysis and sperm function testing</li><li>Hormonal evaluation (testosterone, FSH, LH, prolactin)</li><li>Diagnosis and treatment of varicocele</li><li>Sexual dysfunction evaluation</li><li>Erectile and ejaculatory disorders</li><li>Azoospermia (absence of sperm) investigation</li> <li>Sperm retrieval procedures (PESA, TESA) for IVF/ICSI</li> <li>Genetic testing for hereditary reproductive conditions</li>  </ul><h3>Why Men Should Not Skip This Evaluation:</h3><p> In couples undergoing fertility treatment, the male partner is often evaluated as an afterthought. Andrology ensures that men receive the same level of thorough investigation. Many male reproductive conditions are highly treatable — and finding them early avoids unnecessary treatment for the female partner.</p><h3>Confidentiality Assured:</h3><p> All andrology consultations and evaluations at Saravanan Hospital are handled with complete discretion. Our specialists approach every consultation without judgement and with focus on getting you real answers.</p>",
    },
    {
      title: "Male Infertility",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Diagnosis and treatment of male fertility problems affecting conception.",
      cta: "Book a Male Fertility Evaluation",
      content:
        "<h2>Male Infertility Treatment in Chennai</h2><p> Male infertility is far more common than most people realise — yet it's often the last thing investigated when a couple struggles to conceive. At Saravanan Hospital, we take male fertility just as seriously as female fertility. Because conception is a two-partner process, and both deserve equal attention.</p><h3>Common Causes of Male Infertility:</h3><ul><li>Low sperm count (oligospermia)</li><li>Poor sperm motility (reduced movement)</li><li>Abnormal sperm morphology (shape issues)</li><li>Azoospermia (no sperm in ejaculate)</li><li>Varicocele (enlarged veins in the scrotum)</li><li>Hormonal imbalances affecting sperm production</li><li>Blockages in the reproductive tract</li><li>Genetic factors</li></ul> <h3>How We Evaluate Male Infertility: </h3><p>A semen analysis is the starting point. From there, hormonal testing, scrotal ultrasound, and genetic assessments may follow depending on the initial findings. Our andrologist reviews the complete picture before recommending any treatment.</p><h3>Treatment Options:</h3><ul><li>Medical management of hormonal causes</li><li>Surgical correction of varicocele or blockages</li><li>Lifestyle and nutritional guidance to improve sperm quality</li><li>Sperm retrieval for use in IVF/ICSI when needed</li><li>Antioxidant therapy for oxidative stress-related sperm damage</li></ul>",
    },
    {
      title: "Cosmetic Gynaecology",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Medical procedures addressing comfort, function, and intimate health concerns.",
      cta: "Book a Private Consultation",
      content:
        "<h2>Cosmetic Gynaecology in Chennai</h2><p>Cosmetic gynaecology addresses something many women feel but few talk about openly — physical discomfort, self-consciousness, or functional issues related to intimate anatomy. Whether the concern stems from childbirth, ageing, or has always been there, these are real medical concerns with real solutions. At Saravanan Hospital, cosmetic gynaecology is performed by qualified gynaecologists in a proper clinical environment — not a beauty salon.</p><h3>Procedures We Offer:</h3><ul><li>Labiaplasty — reshaping of the labia for comfort or appearance</li><li>Vaginal rejuvenation — non-surgical or surgical tightening</li><li>Hymenoplasty</li><li>Laser vaginal therapy for dryness, laxity, or mild prolapse</li><li>Perineoplasty — repair of the perineal area after childbirth</li><li>Treatment of vulvodynia (chronic vulvar pain)</li></ul> <h3>Who Is This For?</h3> <p>Women who experience physical discomfort during exercise or intimacy, women who have noticed changes after childbirth, or women who simply have concerns they've never felt comfortable discussing with anyone. There is no wrong reason to come in. All consultations are private, respectful, and entirely non-judgmental.</p> <h3>Medical Standards, Not Beauty Parlour Promises:</h3><p>Every procedure at Saravanan Hospital follows strict medical protocols. You'll have a full consultation, a clear explanation of the procedure, realistic expectations, and proper aftercare — because your safety and comfort come before anything else.</p>",
    },
    {
      title: "Onco Gynaecology",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Specialised care for cancers affecting the female reproductive system.",
      cta: "Speak to Our Onco Gynaecology Team",
      content:
        "<h2>Onco Gynaecology in Chennai</h2><p> A gynaecological cancer diagnosis changes everything — instantly. The fear, the questions, the uncertainty about what comes next. At Saravanan Hospital, our onco gynaecology team in Chennai provides specialist care for women facing cancers of the cervix, uterus, ovaries, vulva, and vagina. From diagnosis through treatment and recovery, you have a medical team that stays with you.</p><h3>Cancers We Treat:</h3><ul><li>Cervical cancer</li><li>Uterine cancer</li><li>Ovarian cancer</li><li>Vulvar cancer</li><li>Vaginal cancer</li><li>Gestational trophoblastic disease</li></ul><h3>Early Detection Saves Lives:</h3><p>Many gynaecological cancers are highly treatable when caught in the early stages. Cervical cancer, in particular, is preventable with regular Pap smears and HPV vaccination. We encourage all women to keep up with routine screening — and to never dismiss unusual bleeding, pelvic pain, or unexplained weight changes.</p><h3>Our Approach to Treatment :</h3><p> Depending on the cancer type, stage, and your overall health, treatment may involve surgery, chemotherapy, radiation, or a combination. Our gynaecological oncologist works alongside other specialists to build the most effective plan for your specific situation — with your quality of life always factored in.</p><h3>Emotional and Practical Support: </h3><p>Facing cancer is not just a physical battle. We help you understand your diagnosis, make informed decisions, and access the support you need — medical, emotional, and practical — throughout your treatment.</p>",
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
