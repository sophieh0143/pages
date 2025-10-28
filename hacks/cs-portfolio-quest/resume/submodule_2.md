---
layout: post
title: "Submodule 2"
description: "Submodule 2 of Resume Building Mini-Quest"
permalink: /cs-portfolio-quest/resume/submodule_2/
parent: "Resume Building"
team: "Grinders"
submodule: 2
categories: [CSP, Submodule, ResumeBuilding]
tags: [resume, submodule, grinders]
author: "Grinders Team"
date: 2025-10-21
---

<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<div class="max-w-3xl mx-auto p-4">
  <h1 class="text-2xl font-bold mb-2">Resume Builder</h1>
  <p class="text-gray-600 mb-4">Fill this out step by step. Autosaves locally.</p>

  <!-- Progress -->
  <div class="border rounded p-3 mb-4">
    <div class="flex justify-between text-sm">
      <span>Progress</span><span id="progressLabel">Step 1 / 5</span>
    </div>
    <div class="w-full bg-gray-200 rounded h-2 mt-2">
      <div id="progressBar" class="bg-blue-600 h-2 rounded" style="width:20%"></div>
    </div>
  </div>

  <!-- STEP 1: INTRO -->
  <section data-step="0" class="space-y-3">
    <h2 class="text-xl font-semibold">Intro</h2>
    <p>Your resume should be simple, clear, and truthful. We’ll collect contact info, (optional) work, education, and skills.</p>
  </section>

  <!-- STEP 2: PERSONAL -->
  <section data-step="1" class="space-y-3 hidden">
    <h2 class="text-xl font-semibold">Personal Information</h2>
    <div>
      <label class="block text-sm font-medium">Full Name *</label>
      <input id="fullName" class="w-full border rounded px-3 py-2" placeholder="Ada Lovelace">
    </div>
    <div>
      <label class="block text-sm font-medium">Email *</label>
      <input id="email" type="email" class="w-full border rounded px-3 py-2" placeholder="ada@lovelace.dev">
    </div>
    <div>
      <label class="block text-sm font-medium">Phone *</label>
      <input id="phone" class="w-full border rounded px-3 py-2" placeholder="(555) 123-4567">
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div>
        <label class="block text-sm font-medium">Location</label>
        <input id="location" class="w-full border rounded px-3 py-2" placeholder="San Diego, CA">
      </div>
      <div>
        <label class="block text-sm font-medium">LinkedIn</label>
        <input id="linkedin" class="w-full border rounded px-3 py-2" placeholder="linkedin.com/in/you">
      </div>
      <div>
        <label class="block text-sm font-medium">Upload Files (optional)</label>
        <input id="files" type="file" class="w-full" multiple>
      </div>
    </div>
  </section>

  <!-- STEP 3: EXPERIENCE (OPTIONAL) -->
  <section data-step="2" class="space-y-3 hidden">
    <h2 class="text-xl font-semibold">Work Experience (Optional)</h2>
    <label class="inline-flex items-center gap-2 text-sm">
      <input id="skipExperience" type="checkbox" class="h-4 w-4">
      <span>Skip work experience</span>
    </label>
    <div id="experienceBlock" class="space-y-3">
      <div>
        <label class="block text-sm font-medium">Job Title</label>
        <input id="jobTitle" class="w-full border rounded px-3 py-2" placeholder="Software Intern">
      </div>
      <div>
        <label class="block text-sm font-medium">Company</label>
        <input id="company" class="w-full border rounded px-3 py-2" placeholder="Company Inc.">
      </div>
      <div>
        <label class="block text-sm font-medium">Impact (1–2 bullets)</label>
        <textarea id="impact" rows="3" class="w-full border rounded px-3 py-2" placeholder="Built X that reduced Y%..."></textarea>
      </div>
    </div>
    <h3 class="text-lg font-semibold mt-4">Education</h3>
    <div class="space-y-3">
      <div>
        <label class="block text-sm font-medium">School</label>
        <input id="school" class="w-full border rounded px-3 py-2" placeholder="UC San Diego">
      </div>
      <div>
        <label class="block text-sm font-medium">Degree / Program</label>
        <input id="degree" class="w-full border rounded px-3 py-2" placeholder="M.S.–Med Bioengineering">
      </div>
      <div>
        <label class="block text-sm font-medium">Highlights</label>
        <textarea id="eduHighlights" rows="3" class="w-full border rounded px-3 py-2" placeholder="GPA; relevant courses; honors"></textarea>
      </div>
    </div>
  </section>
  <!-- STEP 4: SKILLS -->
  <section data-step="3" class="space-y-3 hidden">
    <h2 class="text-xl font-semibold">Skills (code-related)</h2>
    <div id="skillsGrid" class="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm"></div>
    <div class="flex gap-2">
      <input id="customSkill" class="flex-1 border rounded px-3 py-2" placeholder="Add custom skill (e.g., GraphQL)">
      <button id="addSkillBtn" class="px-3 py-2 border rounded">Add</button>
    </div>
    <div id="skillTags" class="flex flex-wrap gap-2"></div>
  </section>

  <!-- STEP 5: REVIEW -->
  <section data-step="4" class="space-y-3 hidden">
    <h2 class="text-xl font-semibold">Review & Export</h2>
    <div class="grid md:grid-cols-2 gap-3">
      <div class="border rounded p-3">
        <h3 class="font-semibold mb-2">Personal</h3>
        <div id="reviewPersonal" class="text-sm space-y-1"></div>
      </div>
      <div class="border rounded p-3">
        <h3 class="font-semibold mb-2">Experience & Education</h3>
        <div id="reviewExp" class="text-sm space-y-1"></div>
      </div>
    </div>
    <div class="border rounded p-3">
      <h3 class="font-semibold mb-2">Skills (<span id="skillCount">0</span>)</h3>
      <div id="reviewSkills" class="flex flex-wrap gap-2"></div>
    </div>
    <div class="grid md:grid-cols-3 gap-2">
      <button id="saveDraft" class="px-3 py-2 border rounded">Save Draft</button>
      <button id="exportJson" class="px-3 py-2 border rounded">Export JSON</button>
      <button id="sendToBackend" class="px-3 py-2 border rounded">Save to Backend (stub)</button>
    </div>
    <textarea id="jsonPreview" class="w-full h-40 border rounded p-2 text-xs" readonly placeholder="JSON preview..."></textarea>
    <p class="text-xs text-gray-600">When ready, replace <code>saveToBackend()</code> with a real <code>fetch()</code> POST to your API.</p>
  </section>

  <!-- Nav -->
  <div class="flex justify-between mt-4">
    <button id="prevBtn" class="px-3 py-2 border rounded" disabled>Previous</button>
    <button id="nextBtn" class="px-3 py-2 border rounded">Next</button>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', () => {
  // ------- Simple State -------
  const state = {
    step: 0,
    personal: { fullName:"", email:"", phone:"", location:"", linkedin:"" },
    experience: { skip:false, jobTitle:"", company:"", impact:"", school:"", degree:"", eduHighlights:"" },
    files: [],
    skills: new Set()
  };

  // ------- DOM -------
  const $  = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const steps = $$('section[data-step]');
  const progressBar   = $('#progressBar');
  const progressLabel = $('#progressLabel');

  // Inputs
  const personalIds = ["fullName","email","phone","location","linkedin"];
  const expIds = ["jobTitle","company","impact","school","degree","eduHighlights"];
  const fileInput = $("#files");
  const skipExperience = $("#skipExperience");
  const experienceBlock = $("#experienceBlock");

  // Review
  const reviewPersonal = $("#reviewPersonal");
  const reviewExp = $("#reviewExp");
  const reviewSkills = $("#reviewSkills");
  const skillCount = $("#skillCount");
  const jsonPreview = $("#jsonPreview");

  // Buttons
  const prevBtn = $("#prevBtn");
  const nextBtn = $("#nextBtn");
  const saveDraftBtn = $("#saveDraft");
  const exportJsonBtn = $("#exportJson");
  const sendToBackendBtn = $("#sendToBackend");

  // Skills UI
  const curated = ["JavaScript","Python","Java","HTML","CSS","React","Node.js","SQL","Git","Linux","Docker","AWS"];
  const skillsGrid = $("#skillsGrid");
  const customSkillInput = $("#customSkill");
  const addSkillBtn = $("#addSkillBtn");
  const skillTags = $("#skillTags");

  // ------- Build skills checklist -------
  function renderSkillChecklist(){
    if (!skillsGrid) return;
    skillsGrid.innerHTML = "";
    curated.forEach(label=>{
      const id = "s_" + label.replace(/[^a-z0-9]/gi,'_');
      const wrap = document.createElement('label');
      wrap.className = "flex items-center gap-2 p-2 border rounded";
      wrap.innerHTML = `<input type="checkbox" data-skill="${label}" class="h-4 w-4"><span>${label}</span>`;
      skillsGrid.appendChild(wrap);
    });
  }
  function syncChecklist(){
    if (!skillsGrid) return;
    skillsGrid.querySelectorAll('input[type=checkbox][data-skill]').forEach(cb=>{
      cb.checked = state.skills.has(cb.dataset.skill);
    });
  }
  function renderCustomTags(){
    if (!skillTags) return;
    skillTags.innerHTML = "";
    [...state.skills].forEach(s=>{
      const tag = document.createElement('span');
      tag.className = "px-2 py-1 rounded bg-gray-100 text-gray-800 text-sm flex items-center gap-2";
      tag.innerHTML = `${s} <button title="remove" class="font-bold">×</button>`;
      tag.querySelector('button').addEventListener('click', ()=>{
        state.skills.delete(s);
        syncChecklist();
        renderCustomTags();
        persist();
      });
      skillTags.appendChild(tag);
    });
  }

  // ------- Step Nav -------
  function showStep(i){
    state.step = Math.max(0, Math.min(steps.length-1, i));
    steps.forEach((el,idx)=>el.classList.toggle('hidden', idx!==state.step));
    const pct = ((state.step+1)/steps.length)*100;
    progressBar.style.width = pct + '%';
    progressLabel.textContent = `Step ${state.step+1} / ${steps.length}`;
    prevBtn.disabled = state.step===0;
    nextBtn.textContent = state.step===steps.length-1 ? "Finish" : "Next";
    if (state.step===steps.length-1) updateReview();
    persist();
  }

  prevBtn.addEventListener('click', ()=>showStep(state.step-1));
  nextBtn.addEventListener('click', ()=>{
    if (state.step===1 && (!state.personal.fullName || !state.personal.email || !state.personal.phone)) {
      alert("Please fill Name, Email, and Phone.");
      return;
    }
    if (state.step < steps.length-1) showStep(state.step+1);
    else alert("Done! Export JSON or wire the backend stub.");
  });

  // ------- Bind Inputs -------
  personalIds.forEach(id=>{
    const el = $("#"+id); if (!el) return;
    el.addEventListener('input', ()=>{
      state.personal[id] = el.value.trim();
      persist();
    });
  });

  expIds.forEach(id=>{
    const el = $("#"+id); if (!el) return;
    el.addEventListener('input', ()=>{
      state.experience[id] = el.value;
      persist();
    });
  });

  if (fileInput){
    fileInput.addEventListener('change', (e)=>{
      state.files = Array.from(e.target.files||[]);
      persist();
    });
  }

  if (skipExperience && experienceBlock){
    skipExperience.addEventListener('change', ()=>{
      state.experience.skip = skipExperience.checked;
      experienceBlock.classList.toggle('hidden', state.experience.skip);
      persist();
    });
  }

  if (skillsGrid){
    skillsGrid.addEventListener('change', (e)=>{
      const cb = e.target;
      if (cb && cb.matches('input[type=checkbox][data-skill]')){
        const s = cb.dataset.skill;
        cb.checked ? state.skills.add(s) : state.skills.delete(s);
        renderCustomTags();
        persist();
      }
    });
  }

  if (addSkillBtn && customSkillInput){
    addSkillBtn.addEventListener('click', ()=>{
      const val = customSkillInput.value.trim();
      if (!val) return;
      state.skills.add(val);
      customSkillInput.value = "";
      syncChecklist();
      renderCustomTags();
      persist();
    });
    customSkillInput.addEventListener('keydown', (e)=>{
      if (e.key==='Enter'){ e.preventDefault(); addSkillBtn.click(); }
    });
  }

  // ------- Review -------
  function updateReview(){
    if (reviewPersonal){
      reviewPersonal.innerHTML = [
        ["Name", state.personal.fullName || "—"],
        ["Email", state.personal.email || "—"],
        ["Phone", state.personal.phone || "—"],
        ["Location", state.personal.location || "—"],
        ["LinkedIn", state.personal.linkedin || "—"],
        ["Files", (state.files||[]).length + " uploaded"]
      ].map(([k,v])=>`<div><b>${k}:</b> ${escapeHtml(v)}</div>`).join("");
    }
    if (reviewExp){
      reviewExp.innerHTML = (state.experience.skip ? 
        `<div><b>Work Experience:</b> (skipped)</div>` :
        [
          ["Job Title", state.experience.jobTitle || "—"],
          ["Company", state.experience.company || "—"],
          ["Impact", state.experience.impact || "—"]
        ].map(([k,v])=>`<div><b>${k}:</b> ${escapeHtml(v)}</div>`).join("")
      ) + [
        ["School", state.experience.school || "—"],
        ["Degree", state.experience.degree || "—"],
        ["Highlights", state.experience.eduHighlights || "—"]
      ].map(([k,v])=>`<div><b>${k}:</b> ${escapeHtml(v)}</div>`).join("");
    }
    const skills = [...state.skills];
    if (skillCount) skillCount.textContent = skills.length;
    if (reviewSkills){
      reviewSkills.innerHTML = skills.length
        ? skills.map(s=>`<span class="px-2 py-1 border rounded text-sm">${escapeHtml(s)}</span>`).join(" ")
        : `<span class="text-sm text-gray-500">No skills added</span>`;
    }
    if (jsonPreview){
      jsonPreview.value = JSON.stringify(makePayload(), null, 2);
    }
  }

  // ------- Persistence -------
  const STORAGE_KEY = "resume_builder_simple_v1";
  function persist(){
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        ...state,
        skills:[...state.skills],
        files:(state.files||[]).map(f=>({name:f.name,size:f.size,type:f.type}))
      }));
    } catch(e){}
  }
  function restore(){
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      state.step = 0; // always start at intro
      Object.assign(state.personal, saved.personal||{});
      Object.assign(state.experience, saved.experience||{});
      (saved.skills||[]).forEach(s=>state.skills.add(s));
      state.files = saved.files||[];

      // reflect inputs
      personalIds.forEach(id=>{ const el=$("#"+id); if (el) el.value = state.personal[id]||""; });
      expIds.forEach(id=>{ const el=$("#"+id); if (el) el.value = state.experience[id]||""; });
      if (skipExperience && experienceBlock){
        skipExperience.checked = !!state.experience.skip;
        experienceBlock.classList.toggle('hidden', !!state.experience.skip);
      }
      syncChecklist();
      renderCustomTags();
    } catch(e){}
  }

  // ------- Export / Backend Stub -------
  function makePayload(){
    return {
      personal: {...state.personal},
      experience: {
        skip: !!state.experience.skip,
        entries: state.experience.skip ? [] : [{
          jobTitle: state.experience.jobTitle,
          company: state.experience.company,
          impact: state.experience.impact
        }],
        education: [{
          school: state.experience.school,
          degree: state.experience.degree,
          highlights: state.experience.eduHighlights
        }]
      },
      skills: [...state.skills],
      files: (state.files||[]).map(f=>({name:f.name,size:f.size,type:f.type}))
    };
  }

  if (saveDraftBtn) saveDraftBtn.addEventListener('click', ()=>{ persist(); alert("Saved locally."); });
  if (exportJsonBtn) exportJsonBtn.addEventListener('click', ()=>{
    const blob = new Blob([JSON.stringify(makePayload(), null, 2)], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement('a'), {href:url, download:'resume-draft.json'});
    document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
  });
  if (sendToBackendBtn) sendToBackendBtn.addEventListener('click', async ()=>{
    const ok = await saveToBackend(makePayload(), state.files);
    alert(ok ? "Stubbed: would POST to backend." : "Backend stub failed.");
  });

  async function saveToBackend(payload, files){
    console.log("POST this to your API:", payload, files);
    // Example when ready:
    // const fd = new FormData();
    // fd.append("payload", new Blob([JSON.stringify(payload)], {type:"application/json"}));
    // for (const f of document.querySelector('#files').files) fd.append("files", f, f.name);
    // await fetch("https://your-api.example.com/resumes", { method:"POST", body: fd, credentials:"include" });
    return true;
  }

  // ------- Utilities -------
  function escapeHtml(s){ return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

  // ------- Boot -------
  renderSkillChecklist();
  restore();
  showStep(0);
});
</script>
