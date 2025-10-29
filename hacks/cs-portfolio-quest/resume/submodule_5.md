---
layout: post
title: "Submodule 5: LinkedIn Profile Builder"
description: "Build your professional LinkedIn profile with AI assistance"
permalink: /cs-portfolio-quest/resume/submodule_5/
parent: "Resume Building"
team: "Grinders"
submodule: 5
categories: [CSP, Submodule, ResumeBuilding]
tags: [resume, submodule, grinders, linkedin]
author: "Grinders Team"
date: 2025-10-21
---

<style>
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: "Poppins", -apple-system, system-ui, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #333;
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  .main-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  .hero-section {
    text-align: center;
    color: white;
    margin-bottom: 40px;
    animation: fadeInDown 0.8s ease;
  }

  .hero-section h1 {
    font-size: 3em;
    margin-bottom: 0.2em;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  }

  .hero-section p {
    font-size: 1.2em;
    opacity: 0.95;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-top: 30px;
  }

  @media (max-width: 1024px) {
    .content-grid {
      grid-template-columns: 1fr;
    }
  }

  .card {
    background: white;
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.15);
    animation: fadeInUp 0.8s ease;
  }

  .card h2 {
    color: #4338ca;
    margin-top: 0;
    font-size: 1.8em;
    border-bottom: 3px solid #6366f1;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  .form-section {
    margin-bottom: 25px;
  }

  .form-section label {
    display: block;
    font-weight: 600;
    color: #4338ca;
    margin-bottom: 8px;
    font-size: 1em;
  }

  .form-section input,
  .form-section textarea {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    font-size: 0.95em;
    transition: all 0.3s ease;
    font-family: inherit;
  }

  .form-section input:focus,
  .form-section textarea:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  .form-section textarea {
    resize: vertical;
    min-height: 80px;
  }

  .form-section small {
    display: block;
    color: #6b7280;
    margin-top: 5px;
    font-size: 0.85em;
  }

  .btn {
    padding: 12px 24px;
    border: none;
    border-radius: 10px;
    font-size: 1em;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .btn-primary {
    background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
  }

  .btn-secondary {
    background: white;
    color: #4f46e5;
    border: 2px solid #6366f1;
  }

  .btn-secondary:hover {
    background: #f5f3ff;
  }

  .btn-success {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
  }

  .btn-copy {
    padding: 6px 12px;
    font-size: 0.85em;
    background: #f3f4f6;
    color: #4b5563;
    border: 1px solid #d1d5db;
  }

  .btn-copy:hover {
    background: #e5e7eb;
  }

  .btn-group {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .api-key-section {
    background: #fef3c7;
    border-left: 4px solid #f59e0b;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .api-key-section strong {
    color: #92400e;
  }

  .linkedin-preview {
    background: #f8f9fa;
    border-radius: 15px;
    overflow: hidden;
  }

  .linkedin-header {
    background: linear-gradient(135deg, #0077b5 0%, #00a0dc 100%);
    height: 120px;
    position: relative;
  }

  .linkedin-profile-photo {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: white;
    border: 5px solid white;
    position: absolute;
    bottom: -70px;
    left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3em;
    color: #0077b5;
    font-weight: bold;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }

  .linkedin-content {
    padding: 80px 30px 30px;
  }

  .linkedin-name {
    font-size: 1.8em;
    font-weight: 700;
    color: #000000e6;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .linkedin-headline {
    font-size: 1.1em;
    color: #000000e6;
    margin-bottom: 10px;
  }

  .linkedin-location {
    color: #00000099;
    font-size: 0.9em;
    margin-bottom: 15px;
  }

  .linkedin-section {
    background: white;
    border-radius: 10px;
    padding: 20px;
    margin-top: 15px;
    border: 1px solid #e5e7eb;
    position: relative;
  }

  .linkedin-section h3 {
    color: #000000e6;
    font-size: 1.2em;
    margin-top: 0;
    margin-bottom: 15px;
  }

  .linkedin-section p {
    color: #000000e6;
    line-height: 1.6;
    margin: 0;
    white-space: pre-wrap;
  }

  .copy-indicator {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .loading {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 3px solid #f3f4f6;
    border-top-color: #6366f1;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
  }

  .skill-tag {
    background: #eef2ff;
    color: #4f46e5;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.9em;
    font-weight: 500;
  }

  .empty-state {
    color: #9ca3af;
    font-style: italic;
    text-align: center;
    padding: 20px;
  }

  .success-message {
    background: #d1fae5;
    border: 1px solid #6ee7b7;
    color: #065f46;
    padding: 12px 16px;
    border-radius: 10px;
    margin-top: 15px;
    display: none;
    align-items: center;
    gap: 10px;
  }

  .success-message.show {
    display: flex;
    animation: slideInRight 0.4s ease;
  }

  .error-message {
    background: #fee2e2;
    border: 1px solid #fca5a5;
    color: #991b1b;
    padding: 12px 16px;
    border-radius: 10px;
    margin-top: 15px;
    display: none;
  }

  .error-message.show {
    display: block;
    animation: slideInRight 0.4s ease;
  }

  .congrats-screen {
    display: none;
    text-align: center;
    padding: 60px 20px;
  }

  .congrats-screen.show {
    display: block;
    animation: zoomIn 0.6s ease;
  }

  .congrats-screen h2 {
    font-size: 3em;
    color: #4338ca;
    margin-bottom: 20px;
  }

  .congrats-screen .emoji {
    font-size: 5em;
    margin-bottom: 20px;
  }

  .next-steps {
    background: white;
    border-radius: 15px;
    padding: 30px;
    margin-top: 30px;
    text-align: left;
  }

  .next-steps ul {
    list-style: none;
    padding: 0;
  }

  .next-steps li {
    padding: 15px;
    margin: 10px 0;
    background: #f8f9fa;
    border-radius: 10px;
    border-left: 4px solid #6366f1;
  }

  .next-steps li strong {
    color: #4338ca;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    background-color: #333;
    color: white;
    text-align: center;
    padding: 5px 10px;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 0.85em;
    white-space: nowrap;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
</style>

<div class="main-container">
  <div class="hero-section">
    <h1>🚀 LinkedIn Profile Builder</h1>
    <p>Create a standout LinkedIn profile with AI-powered assistance. Get professional content suggestions and see a live preview!</p>
  </div>

  <div id="mainContent">
    <div class="content-grid">
      <!-- Left: Input Form -->
      <div class="card">
        <h2>📝 Build Your Profile</h2>
        
        <div class="api-key-section">
          <strong>⚠️ API Key Required:</strong> You'll need a Gemini API key to generate AI-enhanced content.
          <a href="https://makersuite.google.com/app/apikey" target="_blank" style="color: #0066cc;">Get your free key here</a>
        </div>

        <div class="form-section">
          <label for="apiKey">Gemini API Key</label>
          <input type="password" id="apiKey" placeholder="Enter your Gemini API key" value="AIzaSyBRQH3NCC1m3UGfm_mbl2b3aHGJkcAZtms">
          <small>Your key is stored locally and never sent to our servers</small>
        </div>

        <div class="form-section">
          <label for="fullName">Full Name *</label>
          <input type="text" id="fullName" placeholder="e.g., Sarah Johnson" required>
        </div>

        <div class="form-section">
          <label for="currentRole">Current Role / Desired Role *</label>
          <input type="text" id="currentRole" placeholder="e.g., Computer Science Student | Aspiring Software Engineer" required>
        </div>

        <div class="form-section">
          <label for="location">Location</label>
          <input type="text" id="location" placeholder="e.g., San Diego, CA">
        </div>

        <div class="form-section">
          <label for="aboutPrompt">About Section Prompt</label>
          <textarea id="aboutPrompt" rows="4" placeholder="Describe yourself: your background, interests, what you're passionate about, goals..."></textarea>
          <small>The more details you provide, the better the AI-generated content will be</small>
        </div>

        <button class="btn btn-primary" onclick="generateAbout()">
          <span id="generateAboutIcon">✨</span> Generate About Section
        </button>

        <div class="form-section" style="margin-top: 20px;">
          <label for="about">About Section *</label>
          <textarea id="about" rows="6" placeholder="Your professional summary will appear here..."></textarea>
          <small>Edit the AI-generated content or write your own</small>
        </div>

        <div class="form-section">
          <label for="experiencePrompt">Experience Prompt</label>
          <textarea id="experiencePrompt" rows="4" placeholder="Describe your work experience, internships, projects, achievements..."></textarea>
        </div>

        <button class="btn btn-primary" onclick="generateExperience()">
          <span id="generateExpIcon">✨</span> Generate Experience Section
        </button>

        <div class="form-section" style="margin-top: 20px;">
          <label for="experience">Experience *</label>
          <textarea id="experience" rows="6" placeholder="Your experience details will appear here..."></textarea>
        </div>

        <div class="form-section">
          <label for="skills">Skills (comma-separated)</label>
          <input type="text" id="skills" placeholder="e.g., Python, JavaScript, React, Data Analysis, Machine Learning">
          <small>Add your technical and professional skills</small>
        </div>

        <div class="form-section">
          <label for="education">Education</label>
          <textarea id="education" rows="3" placeholder="e.g., B.S. Computer Science, UC San Diego, Expected 2026&#10;GPA: 3.8/4.0"></textarea>
        </div>

        <div class="btn-group">
          <button class="btn btn-success" onclick="updatePreview()">
            🔄 Update Preview
          </button>
          <button class="btn btn-secondary" onclick="saveProgress()">
            💾 Save Progress
          </button>
          <button class="btn btn-primary" onclick="showCongrats()">
            ✅ Complete Profile
          </button>
        </div>

        <div class="success-message" id="saveMessage">
          ✓ Progress saved locally!
        </div>

        <div class="error-message" id="errorMessage"></div>
      </div>

      <!-- Right: LinkedIn Preview -->
      <div class="card">
        <h2>👀 Live Preview</h2>
        <p style="color: #6b7280; margin-bottom: 20px;">See how your LinkedIn profile will look. Click copy buttons to paste directly into LinkedIn!</p>
        
        <div class="linkedin-preview">
          <div class="linkedin-header">
            <div class="linkedin-profile-photo" id="profilePhoto">
              ?
            </div>
          </div>
          
          <div class="linkedin-content">
            <div class="linkedin-name" id="previewName">
              <span>Your Name</span>
              <button class="btn btn-copy tooltip" onclick="copyToClipboard('fullName', this)">
                📋
                <span class="tooltiptext">Copy name</span>
              </button>
            </div>
            
            <div class="linkedin-headline" id="previewHeadline">
              Your Professional Headline
              <button class="btn btn-copy tooltip" onclick="copyToClipboard('currentRole', this)">
                📋
                <span class="tooltiptext">Copy headline</span>
              </button>
            </div>
            
            <div class="linkedin-location" id="previewLocation">
              📍 Location
            </div>

            <div class="linkedin-section">
              <h3>About</h3>
              <div class="copy-indicator">
                <button class="btn btn-copy tooltip" onclick="copyToClipboard('about', this)">
                  📋 Copy
                  <span class="tooltiptext">Copy about section</span>
                </button>
              </div>
              <p id="previewAbout" class="empty-state">
                Your about section will appear here after you generate or write it...
              </p>
            </div>

            <div class="linkedin-section">
              <h3>Experience</h3>
              <div class="copy-indicator">
                <button class="btn btn-copy tooltip" onclick="copyToClipboard('experience', this)">
                  📋 Copy
                  <span class="tooltiptext">Copy experience</span>
                </button>
              </div>
              <p id="previewExperience" class="empty-state">
                Your experience will appear here...
              </p>
            </div>

            <div class="linkedin-section">
              <h3>Skills</h3>
              <div class="copy-indicator">
                <button class="btn btn-copy tooltip" onclick="copyToClipboard('skills', this)">
                  📋 Copy
                  <span class="tooltiptext">Copy skills</span>
                </button>
              </div>
              <div id="previewSkills" class="empty-state">
                Add your skills to see them here...
              </div>
            </div>

            <div class="linkedin-section">
              <h3>Education</h3>
              <div class="copy-indicator">
                <button class="btn btn-copy tooltip" onclick="copyToClipboard('education', this)">
                  📋 Copy
                  <span class="tooltiptext">Copy education</span>
                </button>
              </div>
              <p id="previewEducation" class="empty-state">
                Your education details will appear here...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="congratsScreen" class="congrats-screen">
    <div class="emoji">🎉</div>
    <h2>Congratulations!</h2>
    <p style="font-size: 1.2em; color: #6b7280; margin-bottom: 30px;">
      You've built your professional LinkedIn profile! Now it's time to make it live.
    </p>

    <div class="next-steps">
      <h3 style="color: #4338ca; font-size: 1.5em; margin-bottom: 20px;">Next Steps</h3>
      <ul>
        <li>
          <strong>Step 1:</strong> Go to <a href="https://www.linkedin.com" target="_blank" style="color: #0066cc;">LinkedIn.com</a> and log in to your account
        </li>
        <li>
          <strong>Step 2:</strong> Click on your profile picture and select "View Profile"
        </li>
        <li>
          <strong>Step 3:</strong> Click the pencil icon (✏️) next to each section to edit
        </li>
        <li>
          <strong>Step 4:</strong> Use the copy buttons (📋) in the preview to copy each section
        </li>
        <li>
          <strong>Step 5:</strong> Paste the content into the corresponding LinkedIn section
        </li>
        <li>
          <strong>Step 6:</strong> Upload a professional profile photo (headshot with good lighting)
        </li>
        <li>
          <strong>Step 7:</strong> Add a background banner that represents your field
        </li>
        <li>
          <strong>Bonus:</strong> Ask for recommendations from professors, mentors, or colleagues
        </li>
      </ul>
    </div>

    <div class="btn-group" style="justify-content: center; margin-top: 30px;">
      <button class="btn btn-secondary" onclick="backToEdit()">
        ← Edit Profile
      </button>
      <a href="https://www.linkedin.com/in/me" target="_blank" style="text-decoration: none;">
        <button class="btn btn-primary">
          Open LinkedIn Profile →
        </button>
      </a>
    </div>
  </div>
</div>

<script>
  const STORAGE_KEY = 'linkedin_profile_builder';
  const GEMINI_API_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

  window.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    updatePreview();
  });

  document.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => {
      if (el.id !== 'apiKey') {
        updatePreview();
      }
    });
  });

  async function generateAbout() {
    const apiKey = document.getElementById('apiKey').value.trim();
    const name = document.getElementById('fullName').value.trim();
    const role = document.getElementById('currentRole').value.trim();
    const prompt = document.getElementById('aboutPrompt').value.trim();

    if (!apiKey) {
      showError('Please enter your Gemini API key first');
      return;
    }

    if (!prompt) {
      showError('Please describe yourself in the "About Section Prompt" field');
      return;
    }

    const generateIcon = document.getElementById('generateAboutIcon');
    const originalIcon = generateIcon.innerHTML;
    generateIcon.innerHTML = '<span class="loading"></span>';

    try {
      const systemPrompt = `You are a professional LinkedIn profile writer. Create a compelling "About" section for a LinkedIn profile based on the following information:

Name: ${name}
Role: ${role}
Background: ${prompt}

Write a professional, engaging "About" section that:
- Is 3-5 paragraphs long
- Highlights key strengths and passions
- Includes specific skills and experiences
- Shows personality while remaining professional
- Uses first person ("I")
- Ends with what they're looking for (opportunities, connections, etc.)

Return ONLY the about section text, no additional commentary.`;

      const response = await fetch(`${GEMINI_API_ENDPOINT}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: systemPrompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 800,
          }
        })
      });

      if (!response.ok) {
        throw new Error('API request failed. Check your API key.');
      }

      const data = await response.json();
      const generatedText = data.candidates[0].content.parts[0].text;
      
      document.getElementById('about').value = generatedText.trim();
      updatePreview();
      showSuccess('About section generated successfully!');
    } catch (error) {
      showError(`Failed to generate content: ${error.message}`);
    } finally {
      generateIcon.innerHTML = originalIcon;
    }
  }

  async function generateExperience() {
    const apiKey = document.getElementById('apiKey').value.trim();
    const name = document.getElementById('fullName').value.trim();
    const role = document.getElementById('currentRole').value.trim();
    const prompt = document.getElementById('experiencePrompt').value.trim();

    if (!apiKey) {
      showError('Please enter your Gemini API key first');
      return;
    }

    if (!prompt) {
      showError('Please describe your experience in the "Experience Prompt" field');
      return;
    }

    const generateIcon = document.getElementById('generateExpIcon');
    const originalIcon = generateIcon.innerHTML;
    generateIcon.innerHTML = '<span class="loading"></span>';

    try {
      const systemPrompt = `You are a professional LinkedIn profile writer. Create a compelling "Experience" section for a LinkedIn profile based on the following information:

Name: ${name}
Current Role: ${role}
Experience Details: ${prompt}

Write a professional experience section that:
- Lists experiences in reverse chronological order (most recent first)
- For each experience, include: Title, Company/Organization, Dates, and bullet points of achievements
- Uses action verbs and quantifies achievements where possible
- Focuses on impact and results
- Is formatted clearly with line breaks between different positions

Return ONLY the experience section text, no additional commentary.`;

      const response = await fetch(`${GEMINI_API_ENDPOINT}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: systemPrompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1000,
          }
        })
      });

      if (!response.ok) {
        throw new Error('API request failed. Check your API key.');
      }

      const data = await response.json();
      const generatedText = data.candidates[0].content.parts[0].text;
      
      document.getElementById('experience').value = generatedText.trim();
      updatePreview();
      showSuccess('Experience section generated successfully!');
    } catch (error) {
      showError(`Failed to generate content: ${error.message}`);
    } finally {
      generateIcon.innerHTML = originalIcon;
    }
  }

  function updatePreview() {
    const fullName = document.getElementById('fullName').value.trim();
    const currentRole = document.getElementById('currentRole').value.trim();
    const location = document.getElementById('location').value.trim();
    const about = document.getElementById('about').value.trim();
    const experience = document.getElementById('experience').value.trim();
    const skills = document.getElementById('skills').value.trim();
    const education = document.getElementById('education').value.trim();

    const photoEl = document.getElementById('profilePhoto');
    photoEl.textContent = fullName ? fullName.charAt(0).toUpperCase() : '?';

    document.getElementById('previewName').innerHTML = `
      <span>${fullName || 'Your Name'}</span>
      <button class="btn btn-copy tooltip" onclick="copyToClipboard('fullName', this)">
        📋
        <span class="tooltiptext">Copy name</span>
      </button>
    `;

    document.getElementById('previewHeadline').innerHTML = `
      ${currentRole || 'Your Professional Headline'}
      <button class="btn btn-copy tooltip" onclick="copyToClipboard('currentRole', this)">
        📋
        <span class="tooltiptext">Copy headline</span>
      </button>
    `;

    document.getElementById('previewLocation').textContent = location ? `📍 ${location}` : '📍 Location';

    const previewAbout = document.getElementById('previewAbout');
    if (about) {
      previewAbout.textContent = about;
      previewAbout.classList.remove('empty-state');
    } else {
      previewAbout.textContent = 'Your about section will appear here after you generate or write it...';
      previewAbout.classList.add('empty-state');
    }

    const previewExperience = document.getElementById('previewExperience');
    if (experience) {
      previewExperience.textContent = experience;
      previewExperience.classList.remove('empty-state');
    } else {
      previewExperience.textContent = 'Your experience will appear here...';
      previewExperience.classList.add('empty-state');
    }

    const previewSkills = document.getElementById('previewSkills');
    if (skills) {
      const skillsArray = skills.split(',').map(s => s.trim()).filter(s => s);
      previewSkills.innerHTML = skillsArray.map(skill => 
        `<span class="skill-tag">${skill}</span>`
      ).join('');
      previewSkills.classList.remove('empty-state');
    } else {
      previewSkills.textContent = 'Add your skills to see them here...';
      previewSkills.classList.add('empty-state');
    }

    const previewEducation = document.getElementById('previewEducation');
    if (education) {
      previewEducation.textContent = education;
      previewEducation.classList.remove('empty-state');
    } else {
      previewEducation.textContent = 'Your education details will appear here...';
      previewEducation.classList.add('empty-state');
    }
  }

  function copyToClipboard(fieldId, button) {
    const field = document.getElementById(fieldId);
    const text = field.value || field.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
      const originalText = button.innerHTML;
      button.innerHTML = '✓ Copied!';
      button.style.background = '#d1fae5';
      button.style.color = '#065f46';
      
      setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
        button.style.color = '';
      }, 2000);
    }).catch(err => {
      showError('Failed to copy to clipboard');
    });
  }

  function saveProgress() {
    const data = {
      apiKey: document.getElementById('apiKey').value,
      fullName: document.getElementById('fullName').value,
      currentRole: document.getElementById('currentRole').value,
      location: document.getElementById('location').value,
      aboutPrompt: document.getElementById('aboutPrompt').value,
      about: document.getElementById('about').value,
      experiencePrompt: document.getElementById('experiencePrompt').value,
      experience: document.getElementById('experience').value,
      skills: document.getElementById('skills').value,
      education: document.getElementById('education').value,
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    
    const msg = document.getElementById('saveMessage');
    msg.classList.add('show');
    setTimeout(() => msg.classList.remove('show'), 3000);
  }

  function loadProgress() {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (!savedData) return;
      
      const data = JSON.parse(savedData);
      
      Object.keys(data).forEach(key => {
        const el = document.getElementById(key);
        if (el) el.value = data[key] || '';
      });
    } catch (err) {
      console.error('Failed to load saved progress:', err);
    }
  }

  function showCongrats() {
    const fullName = document.getElementById('fullName').value.trim();
    const about = document.getElementById('about').value.trim();
    const experience = document.getElementById('experience').value.trim();
    
    if (!fullName || !about || !experience) {
      showError('Please complete at least Name, About, and Experience sections before finishing!');
      return;
    }
    
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('congratsScreen').classList.add('show');
    
    saveProgress();
  }

  function backToEdit() {
    document.getElementById('mainContent').style.display = 'block';
    document.getElementById('congratsScreen').classList.remove('show');
  }

  function showError(message) {
    const errorEl = document.getElementById('errorMessage');
    errorEl.textContent = message;
    errorEl.classList.add('show');
    setTimeout(() => errorEl.classList.remove('show'), 5000);
  }

  function showSuccess(message) {
    const successEl = document.getElementById('saveMessage');
    successEl.textContent = '✓ ' + message;
    successEl.classList.add('show');
    setTimeout(() => successEl.classList.remove('show'), 3000);
  }
</script>
