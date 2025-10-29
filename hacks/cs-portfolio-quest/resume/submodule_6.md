---
layout: post
title: "Submodule 6"
description: "Submodule 6 of Resume Building Mini-Quest"
permalink: /cs-portfolio-quest/resume/submodule_6/
parent: "Resume Building"
team: "Grinders"
submodule: 6
categories: [CSP, Submodule, ResumeBuilding]
tags: [resume, submodule, grinders]
author: "Grinders Team"
date: 2025-10-29
---

<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<div class="max-w-3xl mx-auto p-4">
  <h1 class="text-2xl font-bold mb-2">Interview Preparation Mini-Quest</h1>
  <p class="text-gray-600 mb-4">Step by step, practice your pitch, demo script, body language, and technical explanations. Autosaves locally.</p>

  <!-- Progress -->
  <div class="border rounded p-3 mb-4">
    <div class="flex justify-between text-sm">
      <span>Progress</span><span id="progressLabel">Step 1 / 6</span>
    </div>
    <div class="w-full bg-gray-200 rounded h-2 mt-2">
      <div id="progressBar" class="bg-blue-600 h-2 rounded" style="width:17%"></div>
    </div>
  </div>

  <!-- STEP 1: MINDSET -->
  <section data-step="0" class="space-y-3">
    <h2 class="text-xl font-semibold">Mindset Before the Interview</h2>
    <p>Interviews are a conversation, not an interrogation. Pausing to think is better than rushing a wrong answer. Reflect:</p>
    <textarea id="mindset" rows="3" class="w-full border rounded px-3 py-2" placeholder="My mindset..."></textarea>
  </section>

  <!-- STEP 2: VOCAL TONE -->
  <section data-step="1" class="space-y-3 hidden">
    <h2 class="text-xl font-semibold">Vocal Tone & Pacing</h2>
    <p>Speak calm, confident, and clear. Use short sentences, signposting, and moderate volume.</p>
    <label class="block text-sm font-medium">Your Notes:</label>
    <textarea id="toneNotes" rows="3" class="w-full border rounded px-3 py-2" placeholder="Notes on tone, pacing..."></textarea>
  </section>

  <!-- STEP 3: BODY LANGUAGE -->
  <section data-step="2" class="space-y-3 hidden">
    <h2 class="text-xl font-semibold">Body Language</h2>
    <p>Open posture, eye contact, gestures, and smiling help communicate confidence.</p>
    <label class="block text-sm font-medium">Two improvements I will try:</label>
    <textarea id="bodyNotes" rows="3" class="w-full border rounded px-3 py-2" placeholder="e.g., keep hands visible, avoid fidgeting"></textarea>
  </section>

  <!-- STEP 4: PROJECT DEMOS -->
  <section data-step="3" class="space-y-3 hidden">
    <h2 class="text-xl font-semibold">Demo Script (60–90s)</h2>
    <p>Include purpose, your role, tech stack, and impact metric.</p>
    <label class="block text-sm font-medium">Your Demo Script:</label>
    <textarea id="demoScript" rows="5" class="w-full border rounded px-3 py-2" placeholder="Project: ..."></textarea>
  </section>

  <!-- STEP 5: PRACTICE EXERCISES -->
  <section data-step="4" class="space-y-3 hidden">
    <h2 class="text-xl font-semibold">Practice Exercises</h2>
    <p>Try recording a 60-second pitch, solving a mock coding problem aloud, and reviewing your video for tone, pacing, and posture.</p>
    <label class="block text-sm font-medium">Reflection / Notes:</label>
    <textarea id="practiceNotes" rows="5" class="w-full border rounded px-3 py-2" placeholder="Notes on pitch, coding, posture..."></textarea>
  </section>

  <!-- STEP 6: REVIEW & EXPORT -->
  <section data-step="5" class="space-y-3 hidden">
    <h2 class="text-xl font-semibold">Review & Export</h2>
    <div class="border rounded p-3">
      <h3 class="font-semibold mb-2">All Inputs</h3>
      <div id="reviewAll" class="text-sm space-y-1"></div>
    </div>
    <div class="grid md:grid-cols-3 gap-2 mt-2">
      <button id="saveDraft" class="px-3 py-2 border rounded">Save Draft</button>
      <button id="exportJson" class="px-3 py-2 border rounded">Export JSON</button>
    </div>
    <textarea id="jsonPreview" class="w-full h-40 border rounded p-2 text-xs mt-2" readonly placeholder="JSON preview..."></textarea>
  </section>

  <!-- Nav -->
  <div class="flex justify-between mt-4">
    <button id="prevBtn" class="px-3 py-2 border rounded" disabled>Previous</button>
    <button id="nextBtn" class="px-3 py-2 border rounded">Next</button>
  </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', ()=>{
  const steps = document.querySelectorAll('section[data-step]');
  let step = 0;

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const progressBar = document.getElementById('progressBar');
  const progressLabel = document.getElementById('progressLabel');

  const ids = ["mindset","toneNotes","bodyNotes","demoScript","practiceNotes"];
  const state = {};

  // Restore from localStorage
  try{
    const saved = JSON.parse(localStorage.getItem('sub6_state'));
    if(saved) Object.assign(state,saved);
    ids.forEach(id=>{
      if(state[id]) document.getElementById(id).value = state[id];
    });
  }catch(e){}

  function showStep(i){
    step = Math.max(0,Math.min(steps.length-1,i));
    steps.forEach((s,idx)=>s.classList.toggle('hidden',idx!==step));
    prevBtn.disabled = step===0;
    nextBtn.textContent = step===steps.length-1 ? "Finish" : "Next";
    const pct = ((step+1)/steps.length)*100;
    progressBar.style.width = pct + '%';
    progressLabel.textContent = `Step ${step+1} / ${steps.length}`;
    updateReview();
  }

  function updateReview(){
    const reviewAll = document.getElementById('reviewAll');
    if(!reviewAll) return;
    const out = ids.map(id=>{
      const el = document.getElementById(id);
      return `<div><b>${id.replace(/([A-Z])/g,' $1')}:</b> ${el.value||'—'}</div>`;
    }).join('');
    reviewAll.innerHTML = out;
    document.getElementById('jsonPreview').value = JSON.stringify(ids.reduce((acc,id)=>{acc[id]=document.getElementById(id).value; return acc;},{ }), null,2);
  }

  nextBtn.addEventListener('click', ()=>{
    if(step<steps.length-1) showStep(step+1);
    else alert("Completed! JSON preview updated.");
  });
  prevBtn.addEventListener('click', ()=>showStep(step-1));

  ids.forEach(id=>{
    const el=document.getElementById(id);
    el.addEventListener('input', ()=>{
      state[id]=el.value;
      localStorage.setItem('sub6_state',JSON.stringify(state));
      updateReview();
    });
  });

  document.getElementById('saveDraft').addEventListener('click', ()=>{
    localStorage.setItem('sub6_state',JSON.stringify(state));
    alert('Saved locally.');
  });

  document.getElementById('exportJson').addEventListener('click', ()=>{
    const blob = new Blob([JSON.stringify(state,null,2)],{type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'submodule6.json';
    a.click();
    URL.revokeObjectURL(url);
  });

  showStep(0);
});
</script>
