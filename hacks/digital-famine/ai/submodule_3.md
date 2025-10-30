---
layout: post
title: "AI APIs"
description: "Going over how to use AI APIs"
permalink: /digital-famine/ai/submodule_3/
breadcrumb: true
microblog: true
parent: "AI Usage"
team: "Debuggers"
submodule: 3
categories: [CSP, Submodule, AIUsage]
tags: [ai, API, flask, debuggers]
author: "Debuggers Team - Lilian Wu, Rebecca Yan"
date: 2025-10-21
---

# Submodule 3


## ❗️What is AI API
An AI API (Application Programming Interface) is a set of rules that allows developers to integrate artificial intelligence capabilities, such as natural language processing, image recognition, and data analysis, into their own applications without building the AI models from scratch. It acts as a bridge, enabling software to communicate with and use AI services by sending requests and receiving responses. For example, when you're using Google, Uber, ApplePay, or anything that needs AI analysis, you're using AIAPI, it combined our world digitaly.


## 🔈 Example of using AI API 
An typical example of using an AI API is to build a **customer service chatbot** that uses a natural language processing API to understand customer queries and generate responses.

## 💡 How do you use AI API as a creater 
- As a creater to use AI API, first, you need to go to the AI provider's platform to borrow AI such as **Open AI**
- Sign up and get an API key, then use the provided documentation to make a request from your code, passing in a prompt and your API key for authorization. 


## Microblog System Architecture: Layered AI Approach
This article is the main technical reference for the microblog system, which uses a layered approach to enable interactive, AI-powered microblogging on any lesson or article page.

#
#
#
#
# Layers Overview

1. Layout Layer 

Handles the inclusion of all required dependencies (Tailwind CSS, jQuery, and microblog scripts).
Injects the microblog overlay panel and floating button into the page.
Reads frontmatter (e.g., microblog: True) to determine whether to activate the microblog UI.
Ensures the microblog panel is available and styled consistently across all enabled pages.

2. JavaScript Layer (assets/js/api/microblog.js):

Handles all UI interactivity: opening/closing the panel, posting, replying, and updating the display.
Manages API calls to the backend (fetching, posting, reacting, etc.).
Implements error handling, loading states, and user feedback.
Uses modern JavaScript patterns (Promises, async/await) for robust, maintainable code.

3. Backend/API Layer:

Provides RESTful endpoints for microblog operations (GET, POST, reply, react).
Can be extended or replaced as needed for different deployments.
## Code

 ``` html
 {%- include themes/minima/base.html -%}

<!-- Microblog Layout: For lesson pages with microblog overlay/side panel -->
{%- if page.microblog %}
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>

<style>
  /* Microblog overlay styles */
  #microblog-overlay {
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    max-width: 90vw;
    height: 100vh;
    box-shadow: -2px 0 12px rgba(0,0,0,0.12);
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(.4,0,.2,1);
    display: flex;
    flex-direction: column;
  }
  #microblog-overlay.open {
    transform: translateX(0);
  }
  #microblog-toggle-btn {
    position: fixed;
    top: 4.5rem;
    right: 2.5rem;
    z-index: 1100;
    background: #191d26;
    color: white;
    border-radius: 999px;
    padding: 1rem 1.5rem;
    font-size: 1.3rem;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    opacity: 0.97;
    touch-action: manipulation;
  }
  #microblog-toggle-btn:hover {
    background: #1e40af;
    opacity: 1;
  }
  /* Removed custom close-btn styles, now using Tailwind only */
  @media (max-width: 600px) {
    #microblog-overlay {
      width: 100vw;
      max-width: 100vw;
    }
    #microblog-toggle-btn {
      right: 0.5rem;
      top: 3.5rem;
      padding: 1.2rem 2.2rem;
      font-size: 1.5rem;
      min-width: 56px;
      min-height: 56px;
      border-radius: 50%;
      box-shadow: 0 2px 12px rgba(0,0,0,0.18);
    }
  }
</style>

<!-- Main lesson content -->
<main id="lesson-content">
  <!-- Microblog toggle button (floating, mobile-friendly) -->
  <button id="microblog-toggle-btn" aria-label="Open Microblog">💬 Microblog</button>
  <!-- Microblog panel (hidden by default) -->
  <aside id="microblog-panel" class="fixed top-20 right-0 h-[calc(100vh-theme(spacing.20))] sm:w-[400px] max-w-full shadow-2xl z-50 transform translate-x-full transition-transform duration-300 flex flex-col bg-gray-600" tabindex="-1" aria-label="Microblog panel">
    <div class="flex items-center justify-end p-2 border-b border-gray-200">
      <button id="microblog-close-btn" class="p-2 text-2xl font-bold text-gray-700 hover:text-red-600 border border-gray-300 rounded-full shadow focus:outline-none" aria-label="Close Microblog">&times;</button>
    </div>
    <div class="microblog-content flex-1 overflow-y-auto px-4 pb-4">
      {% if page.microblog_heading %}
        <h2 class="text-xl font-bold mb-4">{{ page.microblog_heading }}</h2>
      {% endif %}
      {% if page.microblog_content %}
        {{ page.microblog_content }}
      {% else %}
        <!-- Slot for microblog code: include microblog-playground or other content -->
        {% include microblog_foundation.html %}
      {% endif %}
    </div>
  </aside>
</main>

<script>
const overlay = document.getElementById('microblog-panel');
const toggleBtn = document.getElementById('microblog-toggle-btn');
const closeBtn = document.getElementById('microblog-close-btn');

function openMicroblog() {
  overlay.classList.add('open');
  overlay.style.transform = 'translateX(0)';
  overlay.focus();
  toggleBtn.style.display = 'none';
}
function closeMicroblog() {
  overlay.classList.remove('open');
  overlay.style.transform = 'translateX(100%)';
  toggleBtn.style.display = '';
}
toggleBtn.onclick = openMicroblog;
closeBtn.onclick = closeMicroblog;
</script>
{%- endif -%}


 ```
```html
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>

<!-- MicroBlog Container -->
<div id="microblog-playground">
  <em>Loading microblog posts...</em>
</div>

<!-- Create/Edit Modal Overlay using Tailwind -->
<div id="microblog-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 hidden">
  <div class="bg-blue-500 rounded-lg shadow-lg w-full max-w-lg mx-2 p-6 relative">
    <button id="modal-close" class="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
    <h2 id="modal-title" class="text-xl font-bold mb-4">Create Microblog Post</h2>
    <form id="microblog-form" class="space-y-4">
      <input type="hidden" id="post-id" name="id">
      <div>
        <label class="block text-sm font-medium text-gray-700">Topic</label>
        <input id="topic-id" name="topicId" type="text" class="mt-1 block w-full border border-gray-300 rounded-md p-2" readonly>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700">Content <span class="text-red-500">*</span></label>
        <textarea id="content" name="content" rows="3" required class="mt-1 block w-full border border-gray-300 rounded-md p-2"></textarea>
      </div>
      <div class="flex justify-end space-x-2">
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
      </div>
    </form>
  </div>
</div>

<!--JavaScript Logic for MicroBlog -->
<script type="module">
// Imports for APIs used on this page
import { fetchPosts, createPost, updatePost } from '/assets/js/api/microblog.js';

// Default Key for New MicroBlog Posts
const pagePermalink = '{{page.permalink}}';

// Create/Edit Modal Functions
function openModal({ mode, post = {} }) {
  document.getElementById('microblog-modal').classList.remove('hidden');
  document.getElementById('modal-title').textContent = mode === 'edit' ? 'Edit Microblog Post' : 'Create Microblog Post';
  document.getElementById('post-id').value = post.id || '';
  document.getElementById('topic-id').value = post.topicPath || pagePermalink;
  document.getElementById('content').value = post.content || '';
}
function closeModal() {
  document.getElementById('microblog-modal').classList.add('hidden');
}
document.getElementById('modal-close').onclick = closeModal;
document.getElementById('microblog-modal').onclick = function(e) {
  if (e.target === this) closeModal();
};

// Save Button Listner for Update and Create
document.getElementById('microblog-form').onsubmit = async function(e) {
  e.preventDefault();
  const id = document.getElementById('post-id').value;
  const topicPath = document.getElementById('topic-id').value;
  const content = document.getElementById('content').value;
  try {
    // API calls to Update and Create Posts
    if (id) {
      await updatePost({ id, content, topicPath });
    } else {
      await createPost({ content, topicPath });
    }
    closeModal();
    renderMicroblogTable();
  } catch (err) {
    alert('Error saving post: ' + err.message);
  }
};

// MicroBlog Table Manager
async function renderMicroblogTable() {
    const container = document.getElementById('microblog-playground');
    try {
        // Determine filter mode and pass page if needed
        let pageArg = undefined;
        if (window.__microblogFilterMode === undefined || window.__microblogFilterMode === 'page') {
          // Use current page as filter; fallback to location.pathname or a default string
          pageArg = window.location ? window.location.pathname : 'default';
        }
        // API call to Read former Posts
        const data = await fetchPosts(pageArg);
        // SVG icons for Create (+) and Edit (pencil)
        const createIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="inline w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>`;
        const editIcon = `<svg xmlns="http://www.w3.org/2000/svg" class="inline w-4 h-4 ml-1 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a4 4 0 01-2.828 1.172H7v-2a4 4 0 011.172-2.828z" /></svg>`;
        // Single page icon (default)
        const pageIcon = `<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white mx-1 cursor-pointer" id="page-icon"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="6" y="4" width="12" height="16" rx="2" fill="white" stroke="white" stroke-width="1.5"/><rect x="8" y="6" width="8" height="12" rx="1" fill="purple" stroke="white" stroke-width="1.5"/></svg></span>`;
        // Many pages icon (secondary option)
        const manyPagesIcon = `<span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white mx-1 cursor-pointer" id="many-pages-icon"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><g><rect x="7" y="15" width="10" height="6" rx="2" fill="#60a5fa" stroke="white" stroke-width="1.2"/><rect x="5" y="11" width="12" height="6" rx="2" fill="#2563eb" stroke="white" stroke-width="1.2"/><rect x="3" y="7" width="12" height="6" rx="2" fill="#1e40af" stroke="white" stroke-width="1.2"/></g></svg></span>`;
        // Create and Page Icons
        const controlsInfo = `
          <span id="filter-icons" class="flex items-center" style="color:white;">
            <button id="create-btn" class="bg-green-600 text-white px-2 py-1 rounded-full hover:bg-green-700 flex items-center justify-center w-8 h-8">${createIcon}</button>
            ${pageIcon}
            ${manyPagesIcon}
          </span>
        `;

        // Table: Keys and Special Formatting
        const analytics = [
          { key: 'userName' },
          { key: 'timestamp', format: ts => {
              if (!ts) return '';
              const d = new Date(ts);
              if (isNaN(d)) return ts;
              return d.toLocaleString();
            }
          },
          { key: 'characterCount', format: v => `Count: ${v}` }
        ];
        const message = [
          { key: 'topicPath', format: v => `Topic: ${v}` },
          { key: 'content' }
        ];

        // Table: columns
        let head = `
            <thead>
                <tr>
                    <th style="width:30%">Analytics</th>
                    <th>Message</th>
                </tr>
            </thead>
        `;

        // Table: rows; generated from microblog data
        let genBody = '';
        (data.microblogs || []).forEach(post => {
            const analyticsCell = analytics.map(f => {
              let value = post[f.key] ?? '';
              if (f.format) value = f.format(value);
              return `<div>${value}</div>`;
            }).join('');
            // Edit button inline with Topic
            const messageCell = message.map(f => {
              let value = post[f.key] ?? '';
              if (f.key === 'topicPath') {
                value = (f.format ? f.format(value) : value) +
                  ` <button class='edit-btn ml-2' data-id='${post.id}' title='Edit'>${editIcon}</button>`;
              } else if (f.format) {
                value = f.format(value);
              }
              return `<div>${value}</div>`;
            }).join('');
            genBody += `<tr><td class="text-left">${analyticsCell}</td><td class="text-left">${messageCell}</td></tr>`;
        });

        // Table: body
        let body = `
        <tbody>
            ${genBody}
        </tbody>
        `;


        // Table: set container with scrollable wrapper
        container.innerHTML = `
        <div class="max-h-[45vh] sm:max-h-[60vh] lg:max-h-[70vh] overflow-y-auto" style="max-height:70vh;">
          <table id="microblog-table" border="1" style="border-collapse:collapse; margin-top:1em; width:100%;">
              ${head}
              ${body}
          </table>
        </div>
        `;

        // Wait for DOM update, then initialize DataTables
        setTimeout(() => {
        // JQuery micro-table Bottom and Top control updates
        if (window.jQuery && $('#microblog-table').length) {
            $('#microblog-table').DataTable({
                initComplete: function() {
                    // Top controls (Show entries)
                    const lengthDiv = document.querySelector('.dataTables_length');
                    if (lengthDiv) {
                      lengthDiv.style.display = 'flex';
                      lengthDiv.style.alignItems = 'center';
                      lengthDiv.insertAdjacentHTML('afterbegin', controlsInfo);
                      lengthDiv.querySelectorAll('*').forEach(el => {
                        el.style.marginTop = '0';
                        el.style.marginBottom = '0';
                      });
                      const createBtn = document.getElementById('create-btn');
                      if (createBtn) createBtn.onclick = () => openModal({ mode: 'create' });
                    }
                    // Bottom controls (prefix to info)
                    const infoDiv = document.querySelector('.dataTables_info');
                    if (infoDiv) {
                      infoDiv.style.display = 'flex';
                      infoDiv.style.alignItems = 'center';
                      infoDiv.innerHTML = controlsInfo + infoDiv.innerHTML;
                      // Only bind if not already bound (avoid duplicate IDs)
                      const btns = infoDiv.querySelectorAll('#create-btn');
                      btns.forEach(btn => btn.onclick = () => openModal({ mode: 'create' }));
                    }
                    // Filter mode logic (default: page, people = all)
                    window.__microblogFilterMode = 'page';
                    function setFilterMode(mode) {
                      window.__microblogFilterMode = mode;
                      // Update icon backgrounds for visual feedback
                      const pageIconEl = document.getElementById('page-icon');
                      const manyPagesIconEl = document.getElementById('many-pages-icon');
                      if (pageIconEl && manyPagesIconEl) {
                        if (mode === 'page') {
                          pageIconEl.style.background = '#9333ea'; // purple
                          manyPagesIconEl.style.background = '#2563eb'; // blue
                          pageIconEl.style.opacity = '1';
                          manyPagesIconEl.style.opacity = '0.5';
                        } else {
                          manyPagesIconEl.style.background = '#2563eb';
                          pageIconEl.style.background = '#9333ea';
                          manyPagesIconEl.style.opacity = '1';
                          pageIconEl.style.opacity = '0.5';
                        }
                      }
                      // Re-render table with new filter
                      renderMicroblogTable();
                    }
                    setTimeout(() => {
                      // Bind ALL filter icons (top and bottom)
                      document.querySelectorAll('#page-icon').forEach(el => {
                        el.onclick = () => setFilterMode('page');
                      });
                      document.querySelectorAll('#many-pages-icon').forEach(el => {
                        el.onclick = () => setFilterMode('people');
                      });
                      // Only set default filter if not already set
                      if (!window.__microblogFilterModeInitialized) {
                        window.__microblogFilterModeInitialized = true;
                        setFilterMode('page');
                      }
                    }, 0);
                }
            });
            // Bind edit buttons using event delegation so it works on all pages
            $('#microblog-table').off('click', '.edit-btn').on('click', '.edit-btn', function() {
              const id = $(this).data('id');
              const post = (data.microblogs || []).find(p => p.id == id);
              openModal({ mode: 'edit', post });
            });
        }
        }, 0);
    } catch (error) {
        container.innerHTML = `<div style="color:red;">Failed to load microblog posts: ${error.message}</div>`;
    }
}
renderMicroblogTable();
</script>
```
## AI API Quiz

<div id="quiz-container">
  <div class="question-block" id="question1">
    <h3>Question 1: Which following action is using AI API</h3>
    <div class="options">
      <button class="option-btn" onclick="checkAnswer(1, 'A', false)">A) "Copy and phaste the text to move your essay."</button>
      <button class="option-btn" onclick="checkAnswer(1, 'B', false)">B) "Build a snake game by coding oneself."</button>
      <button class="option-btn" onclick="checkAnswer(1, 'C', false)">C) "Using a phone to take pictures for your friends"</button>
      <button class="option-btn" onclick="checkAnswer(1, 'D', true)">D) "Using the customer service chatbot in the house renting website"</button>
    </div>
    <div id="feedback1" class="feedback"></div>
  </div>

  <div class="question-block" id="question2">
    <h3>Question 2: What is the main difference between a zero-shot prompt and an instructional prompt?</h3>
    <div class="options">
      <button class="option-btn" onclick="checkAnswer(2, 'A', false)">A) Zero-shot prompts are longer than instructional prompts</button>
      <button class="option-btn" onclick="checkAnswer(2, 'B', true)">B) Instructional prompts use direct command verbs while zero-shot prompts are simple instructions without examples</button>
      <button class="option-btn" onclick="checkAnswer(2, 'C', false)">C) Zero-shot prompts always include examples</button>
      <button class="option-btn" onclick="checkAnswer(2, 'D', false)">D) Instructional prompts require images</button>
    </div>
    <div id="feedback2" class="feedback"></div>
  </div>

  <div class="question-block" id="question3">
    <h3>Question 3: Which of the following demonstrates a contextual prompt?</h3>
    <div class="options">
      <button class="option-btn" onclick="checkAnswer(3, 'A', false)">A) "Explain photosynthesis."</button>
      <button class="option-btn" onclick="checkAnswer(3, 'B', false)">B) "Write something about biology."</button>
      <button class="option-btn" onclick="checkAnswer(3, 'C', true)">C) "This text is for an undergrad course on behavioral economics. Rephrase it in simpler language."</button>
      <button class="option-btn" onclick="checkAnswer(3, 'D', false)">D) "You are a scientist. Describe your work."</button>
    </div>
    <div id="feedback3" class="feedback"></div>
  </div>

  <div id="score-container" style="display: none;">
    <h3>Quiz Complete! 🎉</h3>
    <p id="final-score"></p>
    <button onclick="resetQuiz()" class="reset-btn">Try Again</button>
  </div>
</div>

<style>
#quiz-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
}

.question-block {
  margin-bottom: 30px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.question-block h3 {
  color: #000000 !important;
  margin-bottom: 15px;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.option-btn {
  padding: 15px;
  text-align: left;
  background-color: #e8f4f8;
  border: 2px solid #b8d4e0;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  color: #000000;
  transition: all 0.3s ease;
}

.option-btn:hover {
  background-color: #d0e8f2;
  transform: translateX(5px);
}

.option-btn.correct {
  background-color: #d4edda;
  border-color: #28a745;
  color: #000000;
}

.option-btn.incorrect {
  background-color: #f8d7da;
  border-color: #dc3545;
  color: #000000;
}

.option-btn:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.feedback {
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  font-weight: bold;
}

.feedback.correct {
  background-color: #d4edda;
  color: #155724;
}

.feedback.incorrect {
  background-color: #f8d7da;
  color: #721c24;
}

#score-container {
  text-align: center;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
}

#score-container h3 {
  color: #000000;
}

#score-container p {
  color: #000000;
}

.reset-btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.reset-btn:hover {
  background-color: #0056b3;
}
</style>

<script>
let score = 0;
let questionsAnswered = 0;

function checkAnswer(questionNum, selectedOption, isCorrect) {
  const feedbackDiv = document.getElementById('feedback' + questionNum);
  const buttons = document.querySelectorAll('#question' + questionNum + ' .option-btn');
  
  // Disable all buttons for this question
  buttons.forEach(btn => btn.disabled = true);
  
  // Mark the selected button
  event.target.classList.add(isCorrect ? 'correct' : 'incorrect');
  
  // Show feedback
  if (isCorrect) {
    feedbackDiv.textContent = '✅ Correct! Great job!';
    feedbackDiv.className = 'feedback correct';
    score++;
  } else {
    feedbackDiv.textContent = '❌ Incorrect. Review the prompt types table above.';
    feedbackDiv.className = 'feedback incorrect';
  }
  
  questionsAnswered++;
  
  // Show final score after all questions answered
  if (questionsAnswered === 3) {
    setTimeout(() => {
      document.querySelectorAll('.question-block').forEach(block => block.style.display = 'none');
      document.getElementById('score-container').style.display = 'block';
      document.getElementById('final-score').textContent = `You scored ${score} out of 3!`;
    }, 1500);
  }
}

function resetQuiz() {
  score = 0;
  questionsAnswered = 0;
  
  // Reset all questions
  document.querySelectorAll('.question-block').forEach(block => {
    block.style.display = 'block';
  });
  
  // Reset all buttons
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('correct', 'incorrect');
  });
  
  // Clear feedback
  document.querySelectorAll('.feedback').forEach(feedback => {
    feedback.textContent = '';
    feedback.className = 'feedback';
  });
  
  // Hide score container
  document.getElementById('score-container').style.display = 'none';
}
</script>