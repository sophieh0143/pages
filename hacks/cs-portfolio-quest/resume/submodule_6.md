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



<html lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EVA AI Assistant</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background: transparent;
            min-height: 100vh;
            font-family: Arial, sans-serif;
        }
        .eva-loader-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            cursor: pointer;
            transition: transform 0.3s ease;
            z-index: 1000;
        }
        .eva-loader-container:hover {
            transform: scale(1.05);
        }
        .eva-loader-container:active {
            transform: scale(0.95);
        }
        .modelViewPort {
            perspective: 1000px;
            width: 15rem;
            aspect-ratio: 1;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: transparent;
            overflow: hidden;
        }
        .eva {
            --EVA-ROTATION-DURATION: 4s;
            transform-style: preserve-3d;
            animation: rotateRight var(--EVA-ROTATION-DURATION) linear infinite alternate;
        }
        .head {
            position: relative;
            width: 6rem;
            height: 4rem;
            border-radius: 48% 53% 45% 55% / 79% 79% 20% 22%;
            background: linear-gradient(to right, white 45%, gray);
        }
        .eyeChamber {
            width: 4.5rem;
            height: 2.75rem;
            position: relative;
            left: 50%;
            top: 55%;
            border-radius: 45% 53% 45% 48% / 62% 59% 35% 34%;
            background-color: #0c203c;
            box-shadow: 0px 0px 2px 2px white, inset 0px 0px 0px 2px black;
            transform: translate(-50%, -50%);
            animation: moveRight var(--EVA-ROTATION-DURATION) linear infinite alternate;
        }
        .eye {
            width: 1.2rem;
            height: 1.5rem;
            position: absolute;
            border-radius: 50%;
        }
        .eye:first-child {
            left: 12px;
            top: 50%;
            background: repeating-linear-gradient(65deg, #9bdaeb 0px, #9bdaeb 1px, white 2px);
            box-shadow: inset 0px 0px 5px #04b8d5, 0px 0px 15px 1px #0bdaeb;
            transform: translate(0, -50%) rotate(-65deg);
        }
        .eye:nth-child(2) {
            right: 12px;
            top: 50%;
            background: repeating-linear-gradient(-65deg, #9bdaeb 0px, #9bdaeb 1px, white 2px);
            box-shadow: inset 0px 0px 5px #04b8d5, 0px 0px 15px 1px #0bdaeb;
            transform: translate(0, -50%) rotate(65deg);
        }
        .body {
            width: 6rem;
            height: 8rem;
            position: relative;
            margin-block-start: 0.25rem;
            border-radius: 47% 53% 45% 55% / 12% 9% 90% 88%;
            background: linear-gradient(to right, white 35%, gray);
        }
        .hand {
            position: absolute;
            left: -1.5rem;
            top: 0.75rem;
            width: 2rem;
            height: 5.5rem;
            border-radius: 40%;
            background: linear-gradient(to left, white 15%, gray);
            box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.25);
            transform: rotateY(55deg) rotateZ(10deg);
        }
        .hand:first-child {
            animation: compensateRotation var(--EVA-ROTATION-DURATION) linear infinite alternate;
        }
        .hand:nth-child(2) {
            left: 92%;
            background: linear-gradient(to right, white 15%, gray);
            transform: rotateY(55deg) rotateZ(-10deg);
            animation: compensateRotationRight var(--EVA-ROTATION-DURATION) linear infinite alternate;
        }
        .scannerThing {
            width: 0;
            height: 0;
            position: absolute;
            left: 60%;
            top: 10%;
            border-top: 180px solid #9bdaeb;
            border-left: 250px solid transparent;
            border-right: 250px solid transparent;
            transform-origin: top left;
            mask: linear-gradient(to right, white, transparent 35%);
            display: none;
        }
        .scannerThing.active {
            display: block;
            animation: glow 2s cubic-bezier(0.86, 0, 0.07, 1) infinite;
        }
        .scannerOrigin {
            position: absolute;
            width: 8px;
            aspect-ratio: 1;
            border-radius: 50%;
            left: 60%;
            top: 10%;
            background: #9bdaeb;
            box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.5);
            animation: moveRight var(--EVA-ROTATION-DURATION) linear infinite;
            display: none;
        }
        .scannerOrigin.active {
            display: block;
        }
        @keyframes rotateRight {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(25deg); }
        }
        @keyframes moveRight {
            from { transform: translate(-50%, -50%); }
            to { transform: translate(-40%, -50%); }
        }
        @keyframes compensateRotation {
            from { transform: rotateY(55deg) rotateZ(10deg); }
            to { transform: rotatey(30deg) rotateZ(10deg); }
        }
        @keyframes compensateRotationRight {
            from { transform: rotateY(55deg) rotateZ(-10deg); }
            to { transform: rotateY(70deg) rotateZ(-10deg); }
        }
        @keyframes glow {
            from { opacity: 0; }
            20% { opacity: 1; }
            45% { transform: rotate(-25deg); }
            75% { transform: rotate(5deg); }
            100% { opacity: 0; }
        }
    </style>
</head>
<body>
    <!-- EVA Robot -->
    <div class="eva-loader-container" id="evaContainer">
        <div class="loader">
            <div class="modelViewPort">
                <div class="eva">
                    <div class="head">
                        <div class="eyeChamber">
                            <div class="eye"></div>
                            <div class="eye"></div>
                        </div>
                    </div>
                    <div class="body">
                        <div class="hand"></div>
                        <div class="hand"></div>
                        <div class="scannerThing" id="scanner"></div>
                        <div class="scannerOrigin" id="scannerOrigin"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        // Replace with your actual API key
        let apiKey = 'pretend its here';
        let isListening = false;
        let recognition = null;
        // EVA's personality and specialization
        const EVA_SYSTEM_PROMPT = `You are ACE (AI Career Expert), a friendly and sharp interview prep coach for high school students getting ready for tech interviews.
Your expertise: computer science fundamentals, problem-solving, communication skills, resume tips, and mock interview practice. You specialize in helping students build confidence while explaining their projects, coding logic, and teamwork experiences.
CRITICAL RULES:
Keep ALL responses to 2–3 sentences MAX
Be chill, encouraging, and easy to talk to — like a mentor who gets it
Go straight to the point — no formal lecture tone
Use simple, real-world examples whenever possible
If the student seems unsure, ask if they want you to explain or quiz them more
Avoid long lists or jargon unless the student asks for detail`;
        // Conversation history storage
        let conversationHistory = [];
        // Initialize Speech Recognition
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            recognition.lang = 'en-US';
            recognition.onresult = async (event) => {
                const transcript = event.results[0][0].transcript;
                await sendToGemini(transcript);
            };
            recognition.onerror = (event) => {
                console.error('Speech recognition error:', event.error);
                stopListening();
            };
            recognition.onend = () => {
                stopListening();
            };
        }
        document.getElementById('evaContainer').addEventListener('click', function() {
            if (!recognition) {
                alert('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
                return;
            }
            if (isListening) {
                stopListening();
            } else {
                startListening();
            }
        });
        function startListening() {
            isListening = true;
            document.getElementById('scanner').classList.add('active');
            document.getElementById('scannerOrigin').classList.add('active');
            try {
                recognition.start();
            } catch (e) {
                console.error('Recognition start error:', e);
            }
        }
        function stopListening() {
            isListening = false;
            document.getElementById('scanner').classList.remove('active');
            document.getElementById('scannerOrigin').classList.remove('active');
        }
        async function sendToGemini(text) {
            // Add user message to history
            conversationHistory.push({
                role: "user",
                parts: [{ text: text }]
            });
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`;
            const requestBody = {
                system_instruction: {
                    parts: [{ text: EVA_SYSTEM_PROMPT }]
                },
                contents: conversationHistory
            };
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody)
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`API Error: ${response.status} - ${errorText}`);
                }
                const data = await response.json();
                if (!data.candidates || !data.candidates[0]) {
                    throw new Error('Unexpected API response structure');
                }
                const reply = data.candidates[0].content.parts[0].text;
                // Add EVA's response to history
                conversationHistory.push({
                    role: "model",
                    parts: [{ text: reply }]
                });
                speak(reply);
            } catch (error) {
                console.error('Gemini API Error:', error);
                speak('Sorry, I encountered an error.');
            }
        }
        function speak(text) {
            if (!window.speechSynthesis) {
                return;
            }
            // Cancel any ongoing speech
            if (speechSynthesis.speaking) {
                speechSynthesis.cancel();
            }
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 1.0;
            utterance.pitch = 1.2;
            utterance.volume = 1.0;
            // Wait for voices and select a female voice
            const voices = speechSynthesis.getVoices();
            const femaleVoice = voices.find(voice =>
                voice.lang.startsWith('en') && voice.name.toLowerCase().includes("female")
            ) || voices.find(voice =>
                voice.lang.startsWith('en') && (
                    voice.name.includes("Google") || 
                    voice.name.includes("Samantha") || 
                    voice.name.includes("Jenny") ||
                    voice.name.includes("Zira") ||
                    voice.name.includes("Susan")
                )
            );
            if (femaleVoice) {
                utterance.voice = femaleVoice;
            }
            window.speechSynthesis.speak(utterance);
        }
        // Ensure voices are loaded
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = () => {
                speechSynthesis.getVoices();
            };
        }
    </script>
</body>
</html>