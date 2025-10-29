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

<<<<<<< HEAD:hacks/digital famine/ai/submodule_3.md
## 🔈 Example of using AI API 
An typical example of using an AI API is to build a **customer service chatbot** that uses a natural language processing API to understand customer queries and generate responses.

## 💡 How do you use AI API as a creater 
- As a creater to use AI API, first, you need to go to the AI provider's platform to borrow AI such as **Open AI**
- Sign up and get an API key, then use the provided documentation to make a request from your code, passing in a prompt and your API key for authorization. 

=======
>>>>>>> 3ba0bbde57cb5c21be81646d39acff217a90c63d:hacks/digital-famine/ai/submodule_3.md
## Microblog System Architecture: Layered AI Approach
This article is the main technical reference for the microblog system, which uses a layered approach to enable interactive, AI-powered microblogging on any lesson or article page.

## Architectural Overview
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
<<<<<<< HEAD:hacks/digital famine/ai/submodule_3.md

=======
>>>>>>> 3ba0bbde57cb5c21be81646d39acff217a90c63d:hacks/digital-famine/ai/submodule_3.md
