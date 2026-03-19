const grid = document.querySelector(".card-grid");
const treatmentLeftColumn = document.querySelector(".treatment-column-left");
const treatmentRightColumn = document.querySelector(".treatment-column-right");

if (grid || (treatmentLeftColumn && treatmentRightColumn)) {
  const servicess = [
    {
      title: "Abscess",
      img: "../img/Surgical Procedure/Abscess.jpg",
      short:
        "Painful pus-filled swellings drained and treated before they spread further.",
      cta: "Book a Surgical Consultation",
      content:
        "<h2>Abscess Treatment in Chennai</h2><p>An abscess is a pocket of pus that forms when your body is fighting a bacterial infection. It starts as a swollen, tender lump — and if left alone, it grows larger, becomes more painful, and can spread infection to surrounding tissue. The treatment is straightforward when handled early: drain it, clean it, and make sure it doesn't come back.</p><h3>What Causes an Abscess?</h3><p>Abscesses form when bacteria enter the skin through a cut, hair follicle, blocked gland, or insect bite. People with diabetes, weakened immunity, or skin conditions are more prone to developing them — but anyone can get one.</p><h3>Symptoms to Watch For:</h3><ul><li>A swollen, red, warm lump under the skin</li><li>Throbbing pain that worsens over time</li><li>Pus visible at the surface or leaking out</li><li>Fever and general unwellness if the infection spreads</li></ul><h3>How We Treat It:</h3><p>Small abscesses may respond to warm compresses and antibiotics. Larger ones need incision and drainage — a quick procedure where the abscess is opened, drained completely, and the cavity cleaned out. This brings immediate relief. Local anaesthesia is used, and the procedure takes minutes. Dressing and follow-up care ensure proper healing without recurrence.</p><h3>When to Come In:</h3><p>Don't wait for an abscess to burst on its own. An untreated abscess can develop into cellulitis or a deeper infection. Come in as soon as you notice a painful, growing lump — especially if you have diabetes or run a fever alongside it.</p>",
    },
    {
      title: "Anal Fissure",
      img: "../img/Surgical Procedure/Anal fissure.jpg",
      short:
        "Small but painful tears near the anal opening treated without surgery in most cases.",
      cta: "Consult Our Surgical Team",
      content:
        "<h2>Anal Fissure Treatment in Chennai</h2><p>An anal fissure is a small tear in the lining of the anal canal — and despite being tiny, it causes a level of pain that feels anything but small. Sharp pain during bowel movements, bleeding on tissue paper, and a burning sensation that lingers for hours after — these are signs that shouldn't be ignored or endured silently.</p><h3>What Causes Anal Fissures? </h3><p>The most common cause is passing hard or large stools that stretch the anal canal beyond its comfort. Chronic constipation, straining, low-fibre diets, and prolonged sitting all contribute. In some cases, fissures develop after childbirth or due to inflammatory bowel conditions.</p><h3>Symptoms:</h3><ul><li>Sharp, cutting pain during or after a bowel movement</li><li>Bright red blood on toilet paper or in the bowl</li><li>A visible crack or tear near the anal opening</li><li>Muscle spasm around the area</li></ul> <h3>Treatment Approach:</h3><p> Most acute fissures heal with conservative care — stool softeners, high-fibre diet, topical numbing or muscle-relaxing creams, and sitz baths. Chronic fissures that haven't healed in 6–8 weeks may need a minor surgical procedure called lateral internal sphincterotomy, which relaxes the anal muscle and allows healing. It's a short, highly effective procedure with excellent long-term outcomes..</p>",
    },
    {
      title: "Appendicitis",
      img: "../img/Surgical Procedure/Appendicitis.jpg",
      short:
        "Emergency appendix removal handled promptly before rupture becomes a risk.",
      cta: "Go to Emergency or Book a Consultation",
      content:
        "<h2>Appendicitis Treatment in Chennai</h2><p>Appendicitis is one of the most common surgical emergencies — and one where timing genuinely matters. The appendix, a small finger-shaped pouch attached to the large intestine, becomes inflamed and, if not removed in time, can rupture and cause a life-threatening abdominal infection. At Saravanan Hospital, appendix removal is handled promptly, precisely, and with minimal recovery time.</p><h3>Recognising the Symptoms:</h3><ul><li>Pain that starts around the navel and shifts to the lower right abdomen</li><li>Pain that worsens with movement, coughing, or deep breathing</li><li>Nausea, vomiting, and loss of appetite</li><li>Low-grade fever</li><li>Abdominal rigidity or guarding</li></ul><h3>Diagnosis:</h3><p>A clinical examination combined with blood tests (raised white cell count) and ultrasound or CT scan confirms the diagnosis. We move quickly — because a perforated appendix changes everything.</p><h3>Surgery — Open vs Laparoscopic:</h3><p>Most appendix removals at Saravanan Hospital are performed laparoscopically — three small incisions, a camera, and surgical instruments that remove the appendix without a large cut. Recovery is faster, pain is lower, and most patients go home within 24–48 hours. Open surgery is used when there are complications such as a ruptured appendix or significant infection.</p><h3>Post-Surgery Recovery:</h3><p> Mild discomfort for a few days is normal. Most patients return to light activity within a week and full activity within 2–3 weeks. Your surgical team will guide you on diet, wound care, and follow-up visits.</p>",
    },
    {
      title: "Breast Swelling",
      img: "../img/Surgical Procedure/Breast Swelling.jpg",
      short:
        "Accurate diagnosis and treatment of lumps, cysts, and breast tissue changes.",
      cta: "Book a Breast Examination",
      content:
        "<h2>Breast Swelling Diagnosis & Treatment in Chennai</h2><p>Noticing a lump or swelling in your breast is frightening — and the first instinct for many women is to wait and see if it disappears. Don't wait. Most breast swellings are not cancer, but every one of them deserves a proper evaluation so you know exactly what you're dealing with and can act accordingly.</p><h3>Common Causes of Breast Swelling:</h3><ul><li>Fibrocystic changes (benign lumpy tissue)</li><li>Breast cysts (fluid-filled sacs)</li><li>Fibroadenoma (solid, non-cancerous growth)</li><li>Breast abscess or mastitis (infection)</li><li>Lipoma (fatty lump)</li><li>Breast cancer — less common but must always be ruled out</li></ul><h3>What Happens at Your Consultation:</h3><p>Your surgeon will take a detailed history, perform a clinical breast examination, and arrange an ultrasound or mammogram depending on your age and the nature of the swelling. If further evaluation is needed, a fine needle aspiration or biopsy will be arranged. Results are discussed clearly and promptly.</p><h3>Treatment Options:</h3><p> Benign cysts may simply be aspirated. Fibroadenomas that are symptomatic or enlarging are removed surgically. Infections are treated with antibiotics or drainage. Malignant findings are referred to our onco-surgery team with no delay.</p><h3>When to Come In</h3><p> Any new lump, change in breast shape, nipple discharge, skin dimpling, or persistent pain warrants a visit. Earlier is always better.</p>",
    },
    {
      title: "Cellulitis",
      img: "../img/Surgical Procedure/Cellulitis.jpg",
      short:
        "Skin and soft tissue bacterial infection treated before it reaches deeper layers.",
      cta: "See a Doctor Today",
      content:
        "<h2>Cellulitis Treatment in Chennai</h2><p>Cellulitis is a bacterial skin infection that goes deeper than the surface — affecting the skin and the soft tissue just beneath it. It spreads quickly, and what starts as a small red patch can expand over hours into a large, swollen, hot area that needs prompt medical attention. Left untreated, cellulitis can reach the bloodstream and become serious.</p><h3>What Causes Cellulitis?</h3><p>Bacteria — most commonly Streptococcus or Staphylococcus — enter through a break in the skin. This could be a cut, insect bite, surgical wound, cracked skin between toes, or even a scratch. People with diabetes, poor circulation, or lymphoedema are at higher risk.</p><h3>Symptoms:</h3><ul><li>Redness that spreads and has an expanding border </li><li>Warmth and swelling in the affected area</li><li>Skin that feels tight, shiny, or tender</li><li>Fever and chills if the infection has spread</li><li>Red streaks moving outward from the site</li></ul><h3>How We Treat It:</h3><p>Most cases respond well to oral antibiotics prescribed promptly. Severe or rapidly spreading cellulitis requires intravenous antibiotics and hospitalisation. Our team assesses the severity immediately and starts treatment without delay. Wound care, elevation of the affected limb, and close monitoring are part of the management plan.</p>",
    },
    {
      title: "Cholecystitis",
      img: "../img/Surgical Procedure/Cholecystitis.jpg",
      short:
        "Inflamed gallbladder treated with timely surgery to prevent complications.",
      cta: "Book a Surgical Consultation",
      content:
        "<h2>Cholecystitis Treatment in Chennai</h2><p>Cholecystitis is inflammation of the gallbladder — usually caused by a gallstone blocking the bile duct and trapping bile inside. The result is severe upper abdominal pain, nausea, fever, and a situation that worsens without treatment. At Saravanan Hospital, we assess and manage cholecystitis promptly to prevent complications like gallbladder rupture or infection spreading to the liver.</p><h3>Symptoms to Recognise:</h3><ul><li>Sudden, severe pain in the upper right or centre of the abdomen</li><li>Pain that radiates to the right shoulder or back</li><li>Nausea and vomiting</li><li>Fever and chills</li><li>Pain that lasts more than a few hours</li></ul><h3>Acute vs Chronic Cholecystitis:</h3><p>Acute cholecystitis comes on suddenly and requires urgent care. Chronic cholecystitis develops over time with repeated mild attacks — often dismissed as indigestion until they become more severe.</p><h3>Treatment:</h3><p>Initial management includes pain relief, IV fluids, and antibiotics to control infection. Once stable, cholecystectomy (surgical gallbladder removal) is the definitive treatment. This is performed laparoscopically at Saravanan Hospital — three small incisions, same-day or next-day discharge, and a return to normal diet within days.</p>",
    },
    {
      title: "Cholelithiasis",
      img: "../img/Surgical Procedure/Cholelithiasis.jpg",
      short:
        "Gallstones diagnosed and removed through modern laparoscopic techniques.",
      cta: "Consult Our Surgical Team",
      content:
        "<h2>Gallstone Treatment in Chennai</h2><p>Cholelithiasis simply means gallstones — hard deposits that form inside the gallbladder when bile components crystallise. Some people carry gallstones for years without symptoms. Others experience sudden, severe attacks of pain that make daily life difficult. Wherever you are on that spectrum, knowing your options is the first step.</p><h3>Who Gets Gallstones?</h3><p> Gallstones are more common in women, people over 40, those with obesity or rapid weight loss, and individuals with a family history. High-cholesterol diets and prolonged fasting also increase risk.</p><h3>Symptoms of Symptomatic Gallstones:</h3><ul><li>Sharp pain in the upper right abdomen, especially after fatty meals</li><li>Nausea, bloating, and indigestion</li><li>Pain that comes in waves and lasts 30 minutes to several hours</li><li>Jaundice if a stone blocks the common bile duct</li></ul><h3>Treatment:</h3><p>Asymptomatic gallstones in low-risk patients may simply be monitored. Symptomatic gallstones are best treated with laparoscopic cholecystectomy — removal of the gallbladder through keyhole surgery. Life without a gallbladder is perfectly normal; the liver continues to produce bile and digestion is largely unaffected.</p>",
    },
    {
      title: "Colon Cancer & Rectal Mass",
      img: "../img/Surgical Procedure/Colon Cancer - Rectal Mass.jpg",
      short:
        "Early detection and surgical management of colorectal growths and malignancies.",
      cta: "Book a Colorectal Consultation",
      content:
        "<h2>Colon Cancer & Rectal Mass Treatment in Chennai</h2><p>Colorectal cancer is one of the most common cancers in India — and one where early detection makes a dramatic difference to outcomes. A rectal mass or change in bowel habits should never be dismissed as just piles without a proper examination. At Saravanan Hospital, we evaluate colorectal symptoms thoroughly and act quickly when something needs attention.</p><h3>Warning Signs That Need Investigation:</h3><ul><li>Blood in stool (not explained by piles)</li><li>Persistent change in bowel habits lasting more than 3 weeks</li><li>Unexplained weight loss</li><li>Abdominal pain or bloating that doesn't settle</li><li>A feeling of incomplete evacuation after passing stool</li><li>Anaemia without a clear cause</li></ul><h3>Diagnosis:</h3><p>Clinical examination, colonoscopy, biopsy, and imaging (CT scan) are used to confirm the diagnosis and determine the stage of the disease</p><h3>Surgical Treatment:</h3><p>Depending on the location and stage, surgery may involve removal of the affected bowel segment, lymph node clearance, and reconstruction. Laparoscopic colorectal surgery is offered where appropriate, reducing recovery time significantly. Our surgical team coordinates with oncology for cases requiring chemotherapy or radiation alongside surgery.</p>",
    },
    {
      title: "Cystic Fibrosis",
      img: "../img/Surgical Procedure/Cystic FIbrosis.jpg",
      short:
        "Supportive surgical care for complications arising from cystic fibrosis.",
      cta: "Speak to Our Surgical Team",
      content:
        "<h2>Cystic Fibrosis Surgical Care in Chennai</h2><p>Cystic fibrosis is a genetic condition that affects the lungs, digestive system, and other organs by causing thick, sticky mucus to build up where it shouldn't. While the primary management of cystic fibrosis is medical, surgical care becomes necessary for several complications — and having a surgical team familiar with the condition's unique demands matters greatly.</p><h3>When Surgery Is Needed in Cystic Fibrosis:</h3><ul><li>Bowel obstruction (meconium ileus in newborns or distal intestinal obstruction syndrome in older patients)</li><li>Nasal polyp removal</li><li>Gastrostomy tube placement for nutritional support</li><li>Management of pneumothorax (collapsed lung)</li><li>Liver or bowel complications in advanced disease</li></ul><h3>Our Approach:</h3><p> Cystic fibrosis patients require careful pre-operative preparation, anaesthetic planning, and post-operative respiratory support. Our surgical team works closely with pulmonologists and paediatricians to ensure every procedure is handled with the awareness this condition demands.</p>",
    },
    {
      title: "Folliculitis",
      img: "../img/Surgical Procedure/Folliculitis.jpg",
      short:
        "Infected hair follicles treated to stop recurring flare-ups and skin damage.",
      cta: "Book a Skin & Surgical Consultation",
      content:
        "<h2>Folliculitis Treatment in Chennai</h2><p>Folliculitis is an infection of the hair follicles — tiny red, pus-filled bumps that appear on the skin and are often mistaken for acne. They're uncomfortable, sometimes itchy, and when left untreated, can deepen into larger boils or cause permanent scarring. The good news is that most cases clear up quickly with the right treatment.</p><h3>What Causes Folliculitis?</h3><p> Bacteria (most commonly Staphylococcus aureus) are the usual culprit. Friction from clothing, shaving, sweat, hot tubs, and skin conditions like eczema all increase susceptibility. Fungal folliculitis is less common but occurs in people with weakened immunity.</p><h3>Symptoms:</h3><ul><li>Clusters of small red or white-headed pimples around hair follicles</li><li>Itching, burning, or tenderness</li><li>Pus-filled blisters that may crust over</li><li>In severe cases, large, painful boils</li></ul><h3>Treatment:</h3><p> Mild folliculitis is treated with topical or oral antibiotics. Recurring or deep folliculitis may need oral antifungal medication, minor surgical drainage, or laser hair removal to prevent further episodes. Keeping skin clean, dry, and free from friction helps prevent recurrence.</p>",
    },
    {
      title: "Ganglion Cyst",
      img: "../img/Surgical Procedure/Ganglion cyst.jpg",
      short:
        "Fluid-filled lumps near joints removed when painful or limiting movement.",
      cta: "Book a Consultation",
      content:
        "<h2>Ganglion Cyst Removal in Chennai</h2><p>A ganglion cyst is a smooth, round lump that appears near a joint or tendon — most commonly on the wrist, hand, or foot. It's filled with a thick, jelly-like fluid and is almost always non-cancerous. Some people find them harmless and barely noticeable. Others find them painful, growing, or limiting their movement. When that happens, removal is a straightforward solution.</p><h3>Symptoms:</h3><ul><li>A visible, rounded lump near a joint</li><li>Pain or aching when the joint is used</li><li>Tingling or weakness if the cyst presses on a nearby nerve</li><li>Size that fluctuates — sometimes larger, sometimes smaller</li></ul><h3>Treatment Options:</h3><p>Small, painless cysts that don't restrict movement can be observed without intervention. For symptomatic cysts, two options exist: aspiration (draining the fluid with a needle) or surgical excision (complete removal of the cyst and its root). Aspiration is quicker but has a higher recurrence rate. Surgical removal under local anaesthesia is more definitive and done as a day procedure.</p>",
    },
    {
      title: "Hemorrhoids (ConRX)",
      img: "../img/Surgical Procedure/Hemorrhoids ConRX.jpg",
      short:
        "Conservative treatment for early-stage piles without surgical intervention.",
      cta: "See a Specialist Today",
      content:
        "<h2>Conservative Hemorrhoid Treatment in Chennai</h2><p>Not all hemorrhoids need surgery. Early-stage piles — those that are uncomfortable but haven't prolapsed or caused significant bleeding — often respond very well to non-surgical management. At Saravanan Hospital, we always start with the least invasive approach that gives you relief.</p><h3>What Conservative Treatment Includes:</h3><ul><li>High-fibre diet and adequate fluid intake to soften stools</li><li>Sitz baths to reduce swelling and discomfort</li><li>Topical creams to relieve itching and pain</li><li>Stool softeners to prevent straining</li><li>Rubber band ligation for internal hemorrhoids (quick, in-clinic procedure)</li><li>Sclerotherapy (injection treatment to shrink hemorrhoids)</li></ul><h3>Who Is This Suitable For?</h3><p>Grade 1 and Grade 2 hemorrhoids that haven't prolapsed respond well to conservative management. If symptoms persist or worsen despite treatment, surgical options are discussed.</p>",
    },
    {
      title: "Hemorrhoids (Grade)",
      img: "../img/Surgical Procedure/Hemorrhoids Grade.jpg",
      short:
        "Grade-based assessment to decide the most appropriate treatment approach.",
      cta: "Get Your Hemorrhoids Assessed",
      content:
        "<h2>Hemorrhoid Grading & Treatment Planning in Chennai</h2><p>Hemorrhoids are graded from 1 to 4 based on severity — and the grade determines the treatment. Getting the right assessment upfront means you're not over-treated or under-treated. At Saravanan Hospital, every hemorrhoid case is properly evaluated before any treatment is recommended.</p><h3>The Grading System:</h3><ul><li>Grade 1 — Internal hemorrhoids that bleed but don't prolapse. Managed conservatively.</li><li>Grade 2 — Prolapse during straining but return on their own. May need banding or sclerotherapy.</li><li>Grade 3 — Prolapse and need to be pushed back manually. Surgical treatment usually required.</li><li>Grade 4 — Permanently prolapsed and cannot be reduced. Requires surgery.</li></ul> <h3>Why Grading Matters: </h3><p>Treating a Grade 4 hemorrhoid with diet changes alone wastes time and delays relief. Treating a Grade 1 with surgery is unnecessary. Accurate grading by an experienced surgeon means you get the right treatment from day one.</p>",
    },
    {
      title: "Hemorrhoids",
      img: "../img/Surgical Procedure/Hemorrhoids.jpg",
      short:
        "Surgical and non-surgical treatment for piles causing pain and bleeding.",
      cta: "Book a Piles Consultation",
      content:
        "<h2> Hemorrhoid Treatment in Chennai</h2><p>Hemorrhoids — or piles — are swollen veins in and around the rectum and anus. They're extremely common, often embarrassing to bring up, and almost always very treatable. If you've been managing pain, bleeding, or discomfort on your own for weeks or months, it's time to come in. You don't have to live with it.</p><h3>Symptoms:</h3><ul><li>Bright red blood on toilet paper or in the bowl after a bowel movement</li><li>Pain, itching, or irritation around the anal area</li><li>Swelling or a lump near the anus</li><li>Discomfort while sitting</li><li>Mucus discharge after passing stool</li></ul><h3>Treatment Depends on Severity:</h3><p>Mild cases are managed with dietary changes, topical treatment, and minimally invasive procedures like rubber band ligation. Advanced cases are treated with surgical hemorrhoidectomy — removal of the hemorrhoid tissue under anaesthesia, with excellent long-term results.</p><h3>Recovery:</h3><p>Most patients return home the same day or the next. Discomfort during recovery is managed with pain medication, sitz baths, and dietary guidance from our team.</p>",
    },
    {
      title: "Hernia",
      img: "../img/Surgical Procedure/Hernia.jpg",
      short:
        "Bulging tissue repaired through open or laparoscopic surgery with durable results.",
      cta: "Consult Our Hernia Surgeon",
      content:
        "<h2>Hernia Treatment in Chennai</h2><p>A hernia happens when an internal organ or fatty tissue pushes through a weak spot in the surrounding muscle or connective tissue. The result is a visible bulge — often in the abdomen or groin — that may be painless at first but tends to grow and become more uncomfortable over time. Hernias don't heal on their own. Surgery is the only permanent fix.</p><h3>Types of Hernia We Treat:</h3><ul><li>Inguinal hernia (groin — most common in men)</li><li>Femoral hernia (upper thigh/groin — more common in women)</li><li>Umbilical hernia (belly button)</li><li>Incisional hernia (at the site of a previous surgical scar)</li><li>Hiatal hernia (stomach pushes into the chest cavity)</li></ul><h3>Symptoms:</h3><ul><li>A bulge that appears when standing, coughing, or straining</li><li>Aching or heaviness in the affected area</li><li>Pain that worsens with bending or lifting</li><li>In severe cases — nausea, vomiting, and a hard, tender lump (strangulated hernia — emergency)</li></ul><h3>Surgical Repair:</h3><p> Hernia repair at Saravanan Hospital is performed laparoscopically in most cases — small incisions, mesh placement to reinforce the weak area, and a recovery that has most patients walking the same day. Open surgery is used for complex or recurrent hernias. Both approaches have excellent outcomes in experienced hands.</p>",
    },
    {
      title: "Hyperthyroidism",
      img: "../img/Surgical Procedure/Hyperthyrodism.jpg",
      short:
        "Overactive thyroid managed surgically when medication alone isn't enough.",
      cta: "Book a Thyroid Consultation",
      content:
        "<h2>Hyperthyroidism Treatment in Chennai</h2><p>Hyperthyroidism means your thyroid gland is producing more hormone than your body needs — and the effects show up everywhere. Racing heart, unexplained weight loss, trembling hands, difficulty sleeping, and feeling anxious or overheated are all signs the thyroid is working overtime. When medication or radioactive iodine therapy aren't enough, surgery offers a lasting solution.</p><h3>Common Causes:</h3><ul><li>Graves' disease (autoimmune — most common cause)</li><li>Toxic multinodular goitre</li><li>Thyroid adenoma (overactive single nodule)</li></ul><h3>Symptoms:</h3><ul><li>Rapid or irregular heartbeat</li><li>Unintentional weight loss despite good appetite</li><li>Heat intolerance and excessive sweating</li><li>Nervousness, anxiety, and irritability</li><li>Enlarged thyroid (goitre) visible at the neck</li><li>Hand tremors and muscle weakness</li></ul><h3>Treatment:</h3><p>Medication, radioactive iodine, or thyroid surgery depending on severity.</p><h3>When Is Surgery Recommended?</h3><p>Thyroidectomy (partial or total removal of the thyroid) is recommended when antithyroid medications cause side effects, when the goitre is large and causing pressure symptoms, or when the patient prefers a permanent solution. The procedure is performed under general anaesthesia and takes 1–2 hours.</p>",
    },
    {
      title: "Hypothyroidism",
      img: "../img/Surgical Procedure/Hypothyrodism.jpg",
      short:
        "Underactive thyroid evaluated and treated with the right long-term plan.",
      cta: "Get Your Thyroid Checked",
      content:
        "<h2>Hypothyroidism Management in Chennai</h2><p>Hypothyroidism — an underactive thyroid — is one of the most common hormonal conditions in Chennai, particularly among women. When the thyroid doesn't produce enough hormone, everything slows down: metabolism, energy, mood, and even digestion. Most cases are managed medically, but surgical evaluation is sometimes needed when structural thyroid problems are the underlying cause.</p><h3>Common Causes:</h3><ul><li>Hashimoto's thyroiditis (autoimmune)</li><li>Previous thyroid surgery or radioactive iodine treatment</li><li>Thyroid nodules or goitre affecting function</li><li>Iodine deficiency</li></ul><h3>Symptoms:</h3><ul><li>Persistent fatigue and sluggishness</li><li>Weight gain despite no change in diet</li><li>Cold intolerance</li><li>Dry skin, hair thinning, and brittle nails</li><li>Depression and slow mental processing</li><li>Constipation and irregular periods</li></ul><h3>Our Approach: </h3><p> Most hypothyroid patients need lifelong thyroid hormone replacement therapy. Our team evaluates your thyroid function thoroughly, identifies the underlying cause, and creates a management plan that stabilises your levels and addresses symptoms. When structural thyroid disease is present, surgical assessment is arranged.</p>",
    },
    {
      title: "Sebaceous Cyst",
      img: "../img/Surgical Procedure/SebaceousCyst..jpg",
      short:
        "Skin cysts cleanly removed to prevent infection and recurring discomfort.",
      cta: "Book a Cyst Removal Appointment",
      content:
        "<h2>Sebaceous Cyst Removal in Chennai</h2><p>A sebaceous cyst is a slow-growing, non-cancerous lump under the skin — formed when a sebaceous (oil) gland gets blocked and the sac fills with a thick, cheesy material. They're most common on the scalp, face, neck, and back. Most are harmless, but they grow over time, can become infected, and once they cause discomfort or embarrassment, removal is simple and effective.</p><h3>Symptoms:</h3><ul><li>A smooth, round lump under the skin</li><li>Slow growth over months or years</li><li>A small central punctum (blackhead-like opening)</li><li>Redness, swelling, and pain if infected</li></ul><h3>Treatment:</h3><p>An infected cyst is first treated with antibiotics to reduce inflammation. Once settled, the cyst is surgically removed under local anaesthesia — the entire cyst wall must be excised to prevent recurrence. The procedure takes 15–30 minutes and leaves a small, neat scar. Incomplete removal is the most common reason cysts come back, which is why precision matters.</p>",
    },
    {
      title: "Stomach Ulcer",
      img: "../img/Surgical Procedure/Stomach ulcer.jpg",
      short:
        "Persistent gastric ulcers evaluated and treated when medical therapy fails.",
      cta: "Consult Our Surgical Team",
      content:
        "<h2>Stomach Ulcer Treatment in Chennai</h2><p>A stomach ulcer is an open sore that develops on the inner lining of the stomach or the upper part of the small intestine. The burning, gnawing pain — particularly on an empty stomach or at night — is hard to ignore. Most ulcers are treated medically, but surgical intervention becomes necessary when complications arise.</p><h3>What Causes Stomach Ulcers?</h3><ul><li>H. pylori bacterial infection (most common cause)</li><li>Long-term use of NSAIDs (pain medications like ibuprofen or aspirin)</li><li>Excess stomach acid production (Zollinger-Ellison syndrome)</li><li>Stress and lifestyle factors can worsen but rarely cause ulcers alone</li></ul><h3>Symptoms:</h3><ul><li>Burning stomach pain between meals or at night</li><li>Nausea and feeling full quickly</li><li>Bloating, belching, and heartburn</li><li>Dark or tarry stools (sign of bleeding ulcer — seek urgent care)</li><li>Vomiting blood (emergency — come in immediately)</li></ul><h3>When Is Surgery Needed?</h3><p>Surgery is considered when an ulcer bleeds severely and cannot be controlled endoscopically, when it perforates the stomach wall, or when it blocks the digestive tract. Emergency surgery for perforated ulcers is handled promptly at Saravanan Hospital with experienced surgical care.</p>",
    },
    {
      title: "Umbilical Hernia",
      img: "../img/Surgical Procedure/Umbilical Hernia.png",
      short:
        "Belly button hernia repaired in adults and children with a straightforward procedure.",
      cta: "Book a Hernia Consultation",
      content:
        "<h2>Umbilical Hernia Repair in Chennai</h2><p>An umbilical hernia appears as a soft bulge at or near the belly button — caused by abdominal tissue or part of the bowel pushing through a weak spot in the abdominal wall around the navel. In infants, many close on their own by age 2. In adults, they don't — and they tend to grow larger and become more uncomfortable over time.</p><h3>Who Gets Umbilical Hernias?</h3><ul><li>Infants — especially premature babies</li><li>Adults who are overweight or obese</li><li>Women during or after pregnancy</li><li>People with chronic cough or constipation causing repeated abdominal strain</li><li>Those who have had previous abdominal surgery</li></ul><h3>Symptoms:</h3><ul><li>A visible lump at the navel that disappears when lying down</li><li>Discomfort or pain with exertion</li><li>Nausea if bowel tissue becomes trapped (seek urgent care)</li></ul><h3>Surgical Repair:</h3><p>Umbilical hernia repair is a straightforward day procedure under general or local anaesthesia. The protruding tissue is pushed back into place and the abdominal wall is closed and reinforced — with or without mesh depending on the size of the defect. Recovery is quick, with most patients back to light activity within a week.</p>",
    },
    {
      title: "Varicose Vein",
      img: "../img/Surgical Procedure/Varicose Vein.jpg",
      short:
        "Swollen, twisted leg veins treated to relieve pain and prevent complications.",
      cta: "Book a Vein Consultation",
      content:
        "<h2>Varicose Vein Treatment in Chennai</h2><p>Varicose veins are enlarged, twisted veins visible just beneath the skin — most commonly on the legs and calves. They develop when the valves inside the veins stop working properly, causing blood to pool instead of flowing efficiently back to the heart. Beyond being a cosmetic concern, untreated varicose veins cause aching, heaviness, swelling, and eventually skin complications.</p><h3>Symptoms:</h3><ul><li>Bulging, rope-like veins visible on the legs</li><li>Aching or heaviness, especially after standing long hours</li><li>Swelling around the ankles by end of day</li><li>Itching or burning sensation over the veins</li><li>Skin darkening or ulcers near the ankles in advanced cases</li></ul><h3>Treatment Options:</h3><ul><li>Compression therapy — Graduated stockings to improve blood flow (suitable for mild cases)</li><li>Sclerotherapy — A chemical solution injected into the vein causes it to collapse and fade</li><li>Laser treatment — Heat energy closes off the affected vein</li><li>Surgical stripping — Removal of the vein through small incisions for larger, symptomatic veins</li><li>Endovenous procedures — Minimally invasive techniques using laser or radiofrequency inside the vein</li></ul><p>The right option depends on the size, location, and severity of the veins. Your surgeon will recommend the approach most suited to your situation.</p>",
    },
    {
      title: "Circumcision",
      img: "../img/Surgical Procedure/zCircum.jpg",
      short:
        "Safe circumcision procedure performed for medical or personal reasons.",
      cta: "Book a Consultation",
      content:
        "<h2>Circumcision in Chennai</h2><p>Circumcision — the surgical removal of the foreskin — is performed for medical, hygienic, or personal reasons at any age, from newborns to adults. At Saravanan Hospital, the procedure is done in a sterile clinical environment by experienced surgeons, with complete care taken for comfort, precision, and a clean recovery.</p><h3>Medical Reasons for Circumcision:</h3><ul><li>Phimosis (tight foreskin that cannot be retracted)</li><li>Recurrent balanitis (inflammation of the foreskin or glans)</li><li>Paraphimosis (foreskin stuck behind the glans — emergency)</li><li>Recurrent urinary tract infections related to foreskin hygiene</li><li>Personal or cultural preference</li></ul><h3>The Procedure:</h3><p> Performed under local anaesthesia in adults and general anaesthesia in children, circumcision takes 30–45 minutes. Dissolvable stitches are used — no removal needed. Swelling and mild discomfort settle within 1–2 weeks. Full healing is typically complete in 4–6 weeks.</p><h3>Post-Procedure Care: </h3><p>Wound hygiene instructions, activity restrictions, and follow-up appointments are provided before discharge. Our team is available for any questions during the recovery period.</p>",
    },
    {
      title: "Phimosis",
      img: "../img/Surgical Procedure/zphimosis.jpg",
      short:
        "Tight foreskin treated with non-surgical options first and surgery when necessary.",
      cta: "Book a Private Consultation",
      content:
        "<h2>Phimosis Treatment in Chennai</h2><p>Phimosis is a condition where the foreskin is too tight to be pulled back over the head of the penis. In young children, this is often normal and resolves naturally. In older boys and adults, it can cause pain during erections, difficulty with hygiene, recurrent infections, and discomfort during intercourse. It's a common, treatable condition — and there's no reason to simply tolerate it.</p><h3>Types of Phimosis:</h3><ul><li>Physiological phimosis — Normal in young children, usually resolves by adolescence</li><li>Pathological phimosis — Develops due to scarring, infection, or skin conditions like lichen sclerosus</li><li>Circumcision</li></ul><h3>Symptoms in Adults:</h3><ul><li>Inability to retract the foreskin fully</li><li>Pain during erections or intercourse</li><li>Difficulty with urination in severe cases</li><li>Recurrent infections under the foreskin</li><li>White, scarred ring of tissue at the tip of the foreskin</li></ul><h3>Treatment Options:</h3><p> Mild phimosis is first treated with topical steroid cream applied to the tight area over 4–8 weeks — this works well in many cases. If conservative treatment fails, surgical options include preputioplasty (widening the foreskin opening without full removal) or circumcision for definitive resolution.</p>",
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
