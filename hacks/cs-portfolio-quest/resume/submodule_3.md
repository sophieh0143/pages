---
layout: cs-portfolio-lesson
title: "Submodule 3"
description: "Submodule 3 of Resume Building Mini-Quest"
permalink: /cs-portfolio-quest/resume/submodule_3/
parent: "Resume Building"
team: "Grinders"
submodule: 3
categories: [CSP, Submodule, ResumeBuilding]
tags: [resume, submodule, grinders]
author: "Grinders Team"
date: 2025-10-21
---

<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<style>
  /* Minimal, neutral style (inspired by Module 2) */
  :root {
    --main-text: #111;
    --muted: #444;
    --border: #ddd;
    --accent: #000;
    --bg: #fff;
  }

  /* Reset / container */
  .max-w-3xl { max-width: 860px; margin: 0 auto; padding: 16px; background: var(--bg); color: var(--main-text); font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
  h1 { font-size: 1.5rem; margin-bottom: 0.25rem; font-weight: 700; text-align: left; }
  p.lead { color: var(--muted); margin-bottom: 1rem; }

  /* Progress */
  .progress-wrapper { border: 1px solid var(--border); border-radius: 6px; padding: 10px; margin-bottom: 16px; }
  .progress-header { display:flex; justify-content:space-between; font-size: 0.9rem; color:var(--muted); }
  .progress-bar-bg { width:100%; background: #f5f5f5; height: 8px; border-radius: 6px; margin-top:8px; }
  .progress-bar-fill { height:8px; width:0%; background: var(--accent); border-radius:6px; transition: width 240ms ease; }

  /* Sections */
  section[data-step] { margin: 18px 0; }
  .hidden { display: none; }

  h2 { font-size: 1.125rem; margin-bottom: 8px; font-weight: 600; color: var(--main-text); }
  .muted-box { border-left: 4px solid #e5e5e5; background: #fafafa; padding: 12px; border-radius: 4px; color: var(--muted); font-size: 0.95rem; }

  /* Carousel */
  .carousel { position: relative; width: 100%; overflow: hidden; margin: 12px 0; border-radius: 6px; border:1px solid var(--border); }
  .carousel-inner { display:flex; transition: transform 400ms ease; width: 200%; }
  .carousel-item { min-width: 100%; padding: 12px; box-sizing: border-box; }
  .example-box { padding: 12px; border-radius: 6px; border: 1px solid var(--border); background: #fff; }
  .bullet-points { margin:0; padding-left:20px; }

  /* Drag/drop */
  .drop-zone { min-height: 160px; border: 2px dashed var(--border); border-radius: 6px; padding: 12px; box-sizing: border-box; display:flex; flex-direction:column; align-items:center; justify-content:center; background: #fff; }
  .drop-zone.drag-over { background: #f8fbff; border-color: #c9e0ff; transform: scale(1.01); }
  .items-pool { display:flex; flex-wrap:wrap; gap:8px; padding:12px; border:1px solid var(--border); border-radius:6px; min-height:80px; background:#fafafa; }
  .draggable-item { padding:8px 10px; border-radius:6px; border:1px solid #cfcfcf; background:#fff; cursor:grab; user-select:none; }
  .draggable-item.dragging { opacity:0.5; }

  .draggable-item.correct { border-color: #2e8b57; background:#f6fff6; }
  .draggable-item.incorrect { border-color: #b22222; background:#fff6f6; animation: shake 0.45s; }

  @keyframes shake {
    0% { transform: translateX(0); } 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } 100% { transform: translateX(0); }
  }

  /* Form / profile builder (simple) */
  form { margin-top: 8px; }
  label.block { display:block; font-weight:600; margin-bottom:6px; }
  .input, textarea, input[type="text"] { width:100%; padding:8px 10px; border:1px solid var(--border); border-radius:6px; box-sizing:border-box; font-size:0.95rem; }
  textarea { min-height:92px; resize:vertical; }
  .btn { display:inline-block; padding:8px 12px; border-radius:6px; text-decoration:none; border:1px solid #999; background:#fff; color:var(--accent); cursor:pointer; font-weight:600; }
  .btn.primary { background:#000; color:#fff; border-color:#000; }
  .btn.ghost { background:transparent; color:var(--accent); border-color:var(--border); }

  /* Experience entries */
  .entry { border-left:4px solid #e5e5e5; padding:12px; margin-bottom:12px; background:#fff; border-radius:4px; }
  .entry .small { color:var(--muted); font-size:0.9rem; margin-bottom:8px; }

  /* Linkedin-style preview simplified */
  .linkedin-preview { border:1px solid var(--border); border-radius:6px; overflow:hidden; background:#fff; }
  .linkedin-header { height:80px; background:#f3f3f3; position:relative; display:flex; align-items:center; padding-left:16px; }
  .linkedin-profile-pic { width:80px; height:80px; border-radius:50%; background:#fff; border:3px solid #fff; display:flex; align-items:center; justify-content:center; font-size:32px; margin-right:12px; }
  .linkedin-content { padding:16px; }
  .linkedin-name { font-size:1.25rem; font-weight:700; margin:0; }
  .linkedin-headline { color:var(--muted); margin:6px 0 12px 0; }

  /* Footer actions */
  .action-row { display:flex; gap:8px; margin-top:12px; }
  .center { text-align:center; }

  /* small responsive */
  @media (max-width:640px){
    .max-w-3xl { padding:12px; }
    .linkedin-header { height:70px; }
  }
</style>

<div class="max-w-3xl">
  <h1>Professional Profile Builder</h1>
  <p class="lead">Learn what makes a great resume and LinkedIn profile stand out to employers</p>

  <!-- Progress -->
  <div class="progress-wrapper" aria-hidden="false">
    <div class="progress-header">
      <span>Progress</span><span id="progressLabel">Part 1 / 5</span>
    </div>
    <div class="progress-bar-bg" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
      <div id="progressBar" class="progress-bar-fill" style="width: 0%;"></div>
    </div>
  </div>

  <!-- Part 1: Why It Matters -->
  <section data-step="0" class="">
    <h2>🎯 Why Your Resume & LinkedIn Profile Matter</h2>
    <p class="muted-box"><strong>Did you know?</strong> Recruiters spend an average of 6–7 seconds reviewing a resume. Make those seconds count!</p>
    <p>Your resume and LinkedIn profile are often the <strong>first impression</strong> you make on potential employers. Let's understand what separates a great profile from a poor one.</p>
    <div style="margin-top:8px;">
      <button class="btn primary" id="toComparisonBtn">See the Difference →</button>
    </div>
  </section>

  <!-- Part 2: Good vs Bad Comparison Carousel -->
  <section data-step="1" class="hidden" aria-hidden="true">
    <h2>Good vs. Bad: What Employers Look For</h2>
    <p>Swipe through to see examples and understand what makes them effective.</p>
    <div class="carousel" aria-hidden="false">
      <div class="carousel-inner" id="carouselInner">
        <!-- Slide 1: Good Example -->
        <div class="carousel-item">
          <div class="example-box">
            <h3>GOOD Example</h3>
            <div>
              <h4 style="margin:0;">Software Engineering Intern</h4>
              <p class="small" style="margin:6px 0;"><em>Tech Solutions Inc. | June 2024 - August 2024</em></p>
              <ul class="bullet-points">
                <li>Developed and deployed a customer dashboard using React and Node.js, reducing support ticket response time by 35%</li>
                <li>Collaborated with a team of 5 engineers to implement REST APIs serving 10,000+ daily active users</li>
                <li>Optimized database queries in PostgreSQL, improving application load time by 50%</li>
              </ul>
              <p style="margin-top:8px;"><strong>Skills:</strong> JavaScript, React, Node.js, PostgreSQL, Git</p>
            </div>
            <h4 style="margin-top:12px;">Why This Works:</h4>
            <ul class="bullet-points">
              <li><strong>Specific & Quantifiable:</strong> Uses numbers to demonstrate impact</li>
              <li><strong>Action-Oriented:</strong> Starts with strong verbs</li>
              <li><strong>Technical Depth:</strong> Mentions tools and technologies</li>
            </ul>
          </div>
        </div>
        <!-- Slide 2: Bad Example -->
        <div class="carousel-item">
          <div class="example-box">
            <h3>BAD Example</h3>
            <div>
              <h4 style="margin:0;">Intern</h4>
              <p class="small" style="margin:6px 0;"><em>Some Company | Summer 2024</em></p>
              <ul class="bullet-points">
                <li>Worked on coding projects</li>
                <li>Helped the team with various tasks</li>
                <li>Learned a lot about software development</li>
              </ul>
              <p style="margin-top:8px;"><strong>Skills:</strong> Coding, Computers, Hard worker</p>
            </div>
            <h4 style="margin-top:12px;">Why This Doesn't Work:</h4>
            <ul class="bullet-points">
              <li><strong>Too Vague:</strong> Lacks specific responsibilities</li>
              <li><strong>No Measurable Impact:</strong> No metrics or outcomes</li>
              <li><strong>Weak Verbs:</strong> Passive phrasing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div style="display:flex; justify-content:center; align-items:center; gap:12px; margin-top:12px;">
      <button class="btn ghost" id="carouselPrev">← Example</button>
      <span id="carouselIndicator" style="font-weight:700;">Good Example</span>
      <button class="btn ghost" id="carouselNext">Example →</button>
    </div>
    <div style="margin-top:12px;">
      <button class="btn primary" id="startActivityBtn">I Understand! Let's Practice →</button>
    </div>
  </section>
  <!-- Part 3: Drag and Drop Activity -->
  <section data-step="2" class="hidden" aria-hidden="true">
    <h2>Interactive Activity: Sort Good vs. Bad</h2>
    <p>Drag each item into the correct category. Can you identify what makes a good resume entry?</p>
    <div class="center" style="margin:12px 0; font-weight:700;">
      Score: <span id="score">0</span> / <span id="total">0</span>
    </div>
    <div style="margin:12px 0;">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
        <div class="drop-zone" id="goodZone" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="dragLeave(event)">
          <h4 style="margin:0 0 6px 0;">GOOD Examples</h4>
          <p class="small" style="margin:0; color:var(--muted);">Drag good examples here</p>
        </div>
        <div class="drop-zone" id="badZone" ondrop="drop(event)" ondragover="allowDrop(event)" ondragleave="dragLeave(event)">
          <h4 style="margin:0 0 6px 0;">BAD Examples</h4>
          <p class="small" style="margin:0; color:var(--muted);">Drag bad examples here</p>
        </div>
      </div>
      <h4 style="margin-top:12px; margin-bottom:8px;">Items to Sort:</h4>
      <div class="items-pool" id="itemsPool" aria-live="polite"></div>
    </div>
    <div style="margin-top:12px;">
      <button class="btn ghost hidden" id="checkAnswersBtn" onclick="checkAnswers()">Check My Answers</button>
      <button class="btn primary hidden" id="continueToFormBtn" onclick="showForm()">Continue to Build My Profile →</button>
    </div>
  </section>
  <!-- Part 4: Profile Building Form (simplified: only Summary + Experience) -->
  <section data-step="3" class="hidden" aria-hidden="true">
    <h2>✍️ Build Your Professional Profile</h2>
    <p class="muted-box">Write a concise summary and add experiences. Use action verbs, quantify impact, and be specific.</p>
    <form id="profileForm" class="" onsubmit="event.preventDefault(); generatePreview();">
      <!-- Professional Summary -->
      <div style="margin-top:8px;">
        <label class="block" for="summary">Professional Summary *</label>
        <textarea id="summary" class="input" placeholder="Example: Motivated computer science student with 2 years of full-stack development... " required></textarea>
      </div>
      <!-- Experience -->
      <div style="margin-top:14px;">
        <h3 style="margin:8px 0 6px 0;">Experience</h3>
        <div class="muted-box" style="margin-bottom:8px;">Remember: start with strong verbs, include metrics when you can, and show outcomes.</div>
        <div id="experienceContainer"></div>
        <div style="margin-top:8px;">
          <button type="button" class="btn" id="addExperienceBtn">+ Add Experience</button>
          <button type="button" class="btn primary" id="previewBtn" style="margin-left:8px;"> My resume →</button>
        </div>
      </div>
    </form>
  </section>
  <!-- Part 5: LinkedIn Preview -->
  <section data-step="4" class="hidden" aria-hidden="true">
    <h2> Your LinkedIn-Style Profile Preview</h2>
    <div id="linkedinPreview" class="linkedin-preview" aria-live="polite" style="margin-top:12px; padding:0;"></div>
    <div class="muted-box" style="margin-top:12px;">
      <strong>Congratulations!</strong> You've created a professional profile following industry best practices!
    </div>
    <div class="action-row" style="margin-top:12px;">
      <button class="btn ghost" id="editProfileBtn">← Edit Profile</button>
      <button class="btn primary" id="completeLevelBtn">Continue to Level 4: Resume Generation →</button>
    </div>
  </section>
</div>

<script>
/* ============================
   Module 3 — cleaned & fixed
   - Simple neutral styling (like Module 2)
   - Removed Education & Skills sections
   - Fixed JS initialization & UX flow
   ============================ */

(function() {
  // State
  let currentStep = 0;
  let currentCarouselIndex = 0;
  let experienceCount = 0;
  let dragDropItems = [
    { text: "Increased user engagement by 45% through implementing personalized recommendations", good: true },
    { text: "Worked on stuff for the company", good: false },
    { text: "Responsible for things", good: false },
    { text: "Developed automated testing suite reducing bug detection time by 60%", good: true },
    { text: "Used Java and Python", good: false },
    { text: "Helped with projects", good: false },
    { text: "Led team of 4 developers to deliver mobile app with 50,000+ downloads in first month", good: true },
    { text: "Good at teamwork and communication", good: false },
    { text: "Optimized database queries reducing server costs by $2,000/month", good: true },
    { text: "Did various tasks as assigned", good: false },
    { text: "Designed and implemented RESTful API serving 100,000+ requests daily", good: true },
    { text: "Fast learner who can do many things", good: false }
  ];
  const userAnswers = {}; // keyed by pool item unique id

  // DOM references
  const steps = Array.from(document.querySelectorAll('section[data-step]'));
  const progressBar = document.getElementById('progressBar');
  const progressLabel = document.getElementById('progressLabel');

  // Carousel controls
  const carouselInner = document.getElementById('carouselInner');
  const carouselPrev = document.getElementById('carouselPrev');
  const carouselNext = document.getElementById('carouselNext');
  const carouselIndicator = document.getElementById('carouselIndicator');

  // Buttons
  const toComparisonBtn = document.getElementById('toComparisonBtn');
  const startActivityBtn = document.getElementById('startActivityBtn');
  const checkAnswersBtn = document.getElementById('checkAnswersBtn');
  const continueToFormBtn = document.getElementById('continueToFormBtn');
  const addExperienceBtn = document.getElementById('addExperienceBtn');
  const previewBtn = document.getElementById('previewBtn');
  const editProfileBtn = document.getElementById('editProfileBtn');
  const completeLevelBtn = document.getElementById('completeLevelBtn');

  // Pools & containers
  const itemsPool = document.getElementById('itemsPool');
  const totalSpan = document.getElementById('total');
  const scoreSpan = document.getElementById('score');
  const goodZone = document.getElementById('goodZone');
  const badZone = document.getElementById('badZone');
  const experienceContainer = document.getElementById('experienceContainer');
  const linkedinPreview = document.getElementById('linkedinPreview');

  // Utilities for UI
  function updateProgress() {
    const pct = ((currentStep + 1) / steps.length) * 100;
    if (progressBar) progressBar.style.width = pct + '%';
    if (progressLabel) progressLabel.textContent = `Part ${currentStep + 1} / ${steps.length}`;
    // Update aria
    if (progressBar) progressBar.parentElement.setAttribute('aria-valuenow', Math.round(pct));
  }

  function showStep(stepNum) {
    currentStep = Math.max(0, Math.min(steps.length - 1, stepNum));
    steps.forEach((el, idx) => {
      const hidden = idx !== currentStep;
      el.classList.toggle('hidden', hidden);
      el.setAttribute('aria-hidden', hidden ? 'true' : 'false');
    });
    updateProgress();
    // Scroll to top of container for better UX on small screens
    const container = document.querySelector('.max-w-3xl');
    if (container) container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ------------------------------
     Carousel (Good / Bad)
     ------------------------------ */
  function updateCarouselIndicator() {
    carouselIndicator.textContent = currentCarouselIndex === 0 ? 'Good Example' : 'Bad Example';
    // disable/enable prev/next visually
    carouselPrev.disabled = currentCarouselIndex === 0;
    carouselNext.disabled = currentCarouselIndex === 1;
    carouselInner.style.transform = `translateX(-${currentCarouselIndex * 100}%)`;
  }

  function moveCarousel(direction) {
    currentCarouselIndex = Math.max(0, Math.min(1, currentCarouselIndex + direction));
    updateCarouselIndicator();
  }

  /* ------------------------------
     Drag & Drop Activity
     ------------------------------ */

  // Create items pool (id unique per run)
  function initializeDragDrop() {
    const shuffled = [...dragDropItems].sort(() => Math.random() - 0.5);
    itemsPool.innerHTML = '';
    shuffled.forEach((item, index) => {
      // use stable id to map userAnswers
      const id = `item-${Date.now()}-${index}`;
      const el = document.createElement('div');
      el.className = 'draggable-item';
      el.draggable = true;
      el.textContent = item.text;
      el.dataset.id = id;
      el.dataset.good = String(item.good);
      el.addEventListener('dragstart', dragStart);
      el.addEventListener('dragend', dragEnd);
      itemsPool.appendChild(el);
      userAnswers[id] = undefined; // not placed yet
    });
    // set total & reset score
    const total = itemsPool.children.length;
    (document.getElementById('total') || {textContent:''}).textContent = total;
    scoreSpan.textContent = '0';
    checkAnswersBtn.classList.add('hidden');
    continueToFormBtn.classList.add('hidden');
  }

  function dragStart(ev) {
    ev.dataTransfer.setData('text/plain', ev.target.dataset.id);
    ev.currentTarget.classList.add('dragging');
    // add a small delay so class applies visually
    setTimeout(() => ev.currentTarget.classList.add('dragging'), 0);
  }

  function dragEnd(ev) {
    ev.currentTarget.classList.remove('dragging');
  }

  function allowDrop(ev) {
    ev.preventDefault();
    ev.currentTarget.classList.add('drag-over');
  }

  function dragLeave(ev) {
    ev.currentTarget.classList.remove('drag-over');
  }

  function drop(ev) {
    ev.preventDefault();
    ev.currentTarget.classList.remove('drag-over');
    const itemId = ev.dataTransfer.getData('text/plain');
    const targetIsGood = ev.currentTarget.id === 'goodZone';
    const itemEl = document.querySelector(`[data-id="${itemId}"]`);
    if (!itemEl) return;
    // append the draggable to the drop zone
    ev.currentTarget.appendChild(itemEl);
    userAnswers[itemId] = targetIsGood;
    // if pool is empty, reveal check button
    if (itemsPool.children.length === 0) {
      checkAnswersBtn.classList.remove('hidden');
    }
  }

  function checkAnswers() {
    let correct = 0;
    const entries = Object.keys(userAnswers);
    entries.forEach(id => {
      const item = document.querySelector(`[data-id="${id}"]`);
      if (!item) return; // if removed or missing
      const isGood = item.dataset.good === 'true';
      const pickedGood = userAnswers[id] === true;
      if (isGood === pickedGood) {
        item.classList.add('correct');
        item.classList.remove('incorrect');
        correct++;
      } else {
        item.classList.add('incorrect');
        item.classList.remove('correct');
      }
    });

    scoreSpan.textContent = String(correct);
    if (correct === entries.length) {
      setTimeout(() => {
        alert('Perfect! You got them all correct! 🎉');
        checkAnswersBtn.classList.add('hidden');
        continueToFormBtn.classList.remove('hidden');
      }, 300);
    } else {
      alert(`You got ${correct} out of ${entries.length} correct. Review the incorrect ones (marked in red) and try again or continue to the form to practice writing better entries.`);
      continueToFormBtn.classList.remove('hidden');
    }
  }

  /* ------------------------------
     Experience Form Management
     ------------------------------ */
  function addExperience(initial = {}) {
    experienceCount++;
    const id = experienceCount;
    const wrapper = document.createElement('div');
    wrapper.className = 'entry';
    wrapper.id = `exp-${id}`;

    wrapper.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <strong>Experience ${id}</strong>
        <button type="button" class="btn" data-remove="${id}" aria-label="Remove experience ${id}">Remove</button>
      </div>
      <div style="margin-top:8px;">
        <label class="block">Job Title *</label>
        <input type="text" id="expTitle${id}" class="input" placeholder="Software Engineering Intern" value="${escapeHtml(initial.title||'')}" required>
      </div>
      <div style="margin-top:8px;">
        <label class="block">Company *</label>
        <input type="text" id="expCompany${id}" class="input" placeholder="Tech Solutions Inc." value="${escapeHtml(initial.company||'')}" required>
      </div>
      <div style="margin-top:8px;">
        <label class="block">Dates *</label>
        <input type="text" id="expDates${id}" class="input" placeholder="June 2024 - August 2024" value="${escapeHtml(initial.dates||'')}" required>
      </div>
      <div style="margin-top:8px;">
        <label class="block">Description * (Use bullet points, start with action verbs!)</label>
        <textarea id="expDesc${id}" class="input" placeholder="• Built X that reduced Y by Z..." required>${escapeHtml(initial.desc||'')}</textarea>
      </div>
    `;

    // remove handler
    wrapper.querySelector(`[data-remove="${id}"]`).addEventListener('click', () => {
      wrapper.remove();
    });

    experienceContainer.appendChild(wrapper);
    // scroll into view
    wrapper.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function collectExperiences() {
    const arr = [];
    for (let i = 1; i <= experienceCount; i++) {
      const titleEl = document.getElementById(`expTitle${i}`);
      if (!titleEl) continue;
      const title = titleEl.value.trim();
      const company = (document.getElementById(`expCompany${i}`) || {value:''}).value.trim();
      const dates = (document.getElementById(`expDates${i}`) || {value:''}).value.trim();
      const desc = (document.getElementById(`expDesc${i}`) || {value:''}).value.trim();
      if (title && company && dates && desc) {
        arr.push({ title, company, dates, desc });
      }
    }
    return arr;
  }

  /* ------------------------------
     Preview Generator
     ------------------------------ */
  function generatePreview() {
    const summaryEl = document.getElementById('summary');
    if (!summaryEl) return;
    const summary = summaryEl.value.trim();
    if (!summary) {
      alert('Please fill in your professional summary.');
      showStep(3);
      return;
    }

    const experiences = collectExperiences();

    // Build preview HTML (simple LinkedIn-like)
    let html = '';
    html += `<div class="linkedin-header"><div class="linkedin-profile-pic">👤</div></div>`;
    html += `<div class="linkedin-content">`;
    html += `<h1 class="linkedin-name">Your Name</h1>`;
    html += `<p class="linkedin-headline">${escapeHtml(summary)}</p>`;

    html += `<div style="margin-top:12px;"><h3 style="margin:0 0 6px 0;">About</h3><p style="margin:0 0 10px 0;">${escapeHtml(summary)}</p></div>`;

    if (experiences.length) {
      html += `<div style="margin-top:12px;"><h3 style="margin:0 0 8px 0;">Experience</h3>`;
      experiences.forEach(ex => {
        html += `<div style="margin-bottom:12px;">`;
        html += `<h4 style="margin:0; font-size:1rem; font-weight:700;">${escapeHtml(ex.title)}</h4>`;
        html += `<p class="small" style="margin:4px 0 6px 0;">${escapeHtml(ex.company)} • ${escapeHtml(ex.dates)}</p>`;
        html += `<p style="white-space:pre-line; margin:0;">${escapeHtml(ex.desc)}</p>`;
        html += `</div>`;
      });
      html += `</div>`;
    } else {
      html += `<div style="margin-top:12px;"><h3 style="margin:0 0 6px 0;">Experience</h3><p>(No experience added)</p></div>`;
    }

    html += `</div>`; // linkedin-content

    linkedinPreview.innerHTML = html;
    showStep(4);

    // ==== SUBMIT RESUME DATA ==== //
    try {
      // Prepare resume object in required format
      const resume = {
        professionalSummary: summary,
        experiences: experiences.map(e => ({
          jobTitle: e.title,
          company: e.company,
          dates: e.dates,
          description: e.desc
        }))
      };
      // Determine endpoint based on host
      let endpoint = '';
      if (window.location.hostname === 'localhost') {
        endpoint = 'http://localhost:8585/api/resume/me';
      } else if (window.location.hostname === 'pages.opencodingsociety.com') {
        endpoint = 'https://spring.opencodingsocity.com/api/resume/me';
      }
      if (endpoint) {
        fetch(endpoint, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(resume)
        }).then(res => {
          // Optionally, show a confirmation or handle the response
          if (res.ok) {
            // console.log('Resume submitted successfully');
          }
        }).catch(err => {
          // console.error('Resume submission error', err);
        });
      }
    } catch (e) {
      // console.error('Resume submit logic error', e);
    }
    // ==== END SUBMIT ==== //
  }

  /* ------------------------------
     Helpers
     ------------------------------ */
  function escapeHtml(s) {
    if (!s) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* ------------------------------
     Initialization & Event Wiring
     ------------------------------ */
  function init() {
    // initial progress + step
    showStep(0);
    updateCarouselIndicator();

    // wire buttons (guard with exist checks)
    if (toComparisonBtn) toComparisonBtn.addEventListener('click', () => showStep(1));
    if (carouselPrev) carouselPrev.addEventListener('click', () => moveCarousel(-1));
    if (carouselNext) carouselNext.addEventListener('click', () => moveCarousel(1));
    if (startActivityBtn) startActivityBtn.addEventListener('click', () => {
      showStep(2);
      initializeDragDrop();
    });
    if (checkAnswersBtn) checkAnswersBtn.addEventListener('click', checkAnswers);
    if (continueToFormBtn) continueToFormBtn.addEventListener('click', () => showForm());
    if (addExperienceBtn) addExperienceBtn.addEventListener('click', () => addExperience());
    if (previewBtn) previewBtn.addEventListener('click', generatePreview);
    if (editProfileBtn) editProfileBtn.addEventListener('click', () => showStep(3));
    if (completeLevelBtn) completeLevelBtn.addEventListener('click', () => {
      alert('Congratulations! You completed Level 3!\n\nYou now understand:\n✓ What makes a resume effective\n✓ How to write impactful experience descriptions\n✓ How to structure a LinkedIn profile\n\nReady to generate your professional resume?');
      window.location.href = '/cs-portfolio-quest/resume/submodule_4/';
    });

    // drop zones events
    [goodZone, badZone].forEach(zone => {
      if (!zone) return;
      zone.addEventListener('dragover', allowDrop);
      zone.addEventListener('dragleave', dragLeave);
      zone.addEventListener('drop', drop);
    });

    // initialize experience with one blank entry for convenience
    addExperience();

    // Accessibility: allow keyboard enter on items pool elements? (not necessary now)
  }

  // Exposed for inline handlers older code might call (keeps compatibility)
  window.showForm = function() { showStep(3); };
  window.addExperience = function() { addExperience(); };
  window.generatePreview = function() { generatePreview(); };
  window.allowDrop = allowDrop;
  window.dragLeave = dragLeave;
  window.drag = function(ev) { /* kept for potential inline events */ };
  window.drop = drop;
  window.checkAnswers = checkAnswers;

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
</script>
