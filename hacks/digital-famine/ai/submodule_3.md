---
layout: base
title: "AI APIs"
description: "Going over how to use AI APIs"
background: images/platformer/backgrounds/images.png.jpeg
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

# Submodule 3 AI API


## ❗️What is AI API
An AI API (Application Programming Interface) is a set of rules that allows developers to integrate artificial intelligence capabilities, such as natural language processing, image recognition, and data analysis, into their own applications without building the AI models from scratch. It acts as a bridge, enabling software to communicate with and use AI services by sending requests and receiving responses. For example, when you're using Google, Uber, ApplePay, or anything that needs AI analysis, you're using AIAPI, it combined our world digitaly.


## 🔈 Example of using AI API 
An typical example of using an AI API is to build a **customer service chatbot** that uses a natural language processing API to understand customer queries and generate responses. Ex:microblog.


<<<<<<< HEAD
#
#
# 
# Structure of Microblog: Layers Overview
=======
# Layers Overview
>>>>>>> e8f4a8b881f2be69151026f5038007d1207e31c6

## 1. Layout Layer 

Handles the inclusion of all required dependencies (Tailwind CSS, jQuery, and microblog scripts).
Injects the microblog overlay panel and floating button into the page.
Reads frontmatter (e.g., microblog: True) to determine whether to activate the microblog UI.
Ensures the microblog panel is available and styled consistently across all enabled pages.

## 2. JavaScript Layer (assets/js/api/microblog.js):

Handles all UI interactivity: opening/closing the panel, posting, replying, and updating the display.
Manages API calls to the backend (fetching, posting, reacting, etc.).
Implements error handling, loading states, and user feedback.
Uses modern JavaScript patterns (Promises, async/await) for robust, maintainable code.

## 3. Backend/API Layer:

Provides RESTful endpoints for microblog operations (GET, POST, reply, react).
Can be extended or replaced as needed for different deployments.
#
#
# Lesson
<!-- Lesson Content -->

  <section>
    <h2>1. Conditional Microblog Loading</h2>
    <p>The system only activates when <code>page.microblog</code> is set to true in the page's front matter.</p>
    
    <div class="code-example">
      <pre><code>{%- if page.microblog %}
  <!-- Microblog code loads here -->
{%- endif %}</code></pre>
    </div>
  </section>

  <section>
    <h2>2. External Dependencies</h2>
    <p>The system loads several external libraries:</p>
    <ul>
      <li><strong>Tailwind CSS</strong> - For styling utilities</li>
      <li><strong>DataTables</strong> - For enhanced table functionality</li>
      <li><strong>jQuery</strong> - For DOM manipulation and DataTables integration</li>
    </ul>
  </section>

  <section>
    <h2>3. Microblog Panel Structure</h2>
    <p>The panel uses a fixed position overlay that slides in from the right:</p>
    
    <div class="code-example">
      <pre><code>&lt;aside id="microblog-panel" class="fixed top-20 right-0 h-[calc(100vh-5rem)] sm:w-[400px] max-w-full shadow-2xl z-50 transform translate-x-full transition-transform duration-300 flex flex-col bg-gray-600"&gt;
  &lt;!-- Panel content --&gt;
&lt;/aside&gt;</code></pre>
    </div>
    
    <p>Key CSS classes explained:</p>
    <ul>
      <li><code>fixed</code> - Positions the panel relative to the viewport</li>
      <li><code>translate-x-full</code> - Initially hides the panel off-screen to the right</li>
      <li><code>transition-transform</code> - Creates smooth sliding animation</li>
      <li><code>z-50</code> - Ensures the panel appears above other content</li>
    </ul>
  </section>

  <section>
    <h2>4. Toggle Button</h2>
    <p>A floating button that triggers the panel open/close:</p>
    
    <div class="code-example">
      <pre><code>&lt;button id="microblog-toggle-btn" aria-label="Open Microblog"&gt;
  💬 Microblog
&lt;/button&gt;</code></pre>
    </div>
    
    <p>This button is:</p>
    <ul>
      <li>Positioned fixed in the top-right corner</li>
      <li>Styled with a dark background for contrast</li>
      <li>Responsive - changes size and position on mobile</li>
    </ul>
  </section>

  <section>
    <h2>5. JavaScript Interaction</h2>
    <p>Simple JavaScript handles the open/close functionality:</p>
    
    <div class="code-example">
      <pre><code>function openMicroblog() {
  overlay.classList.add('open');
  overlay.style.transform = 'translateX(0)';
  overlay.focus();
  toggleBtn.style.display = 'none';
}

function closeMicroblog() {
  overlay.classList.remove('open');
  overlay.style.transform = 'translateX(100%)';
  toggleBtn.style.display = '';
}</code></pre>
    </div>
  </section>

  <section>
    <h2>6. Content Flexibility</h2>
    <p>The system supports different content sources:</p>
    
    <div class="code-example">
      <pre><code>{% if page.microblog_heading %}
  &lt;h2&gt;{{ page.microblog_heading }}&lt;/h2&gt;
{% endif %}

{% if page.microblog_content %}
  {{ page.microblog_content }}
{% else %}
  {% include microblog_foundation.html %}
{% endif %}</code></pre>
    </div>
  </section>

  <section>
    <h2>7. Responsive Design</h2>
    <p>The system adapts to different screen sizes:</p>
    
    <div class="code-example">
      <pre><code>@media (max-width: 600px) {
  #microblog-overlay {
    width: 100vw;
    max-width: 100vw;
  }
  
  #microblog-toggle-btn {
    right: 0.5rem;
    top: 3.5rem;
    padding: 1.2rem 2.2rem;
    border-radius: 50%;
  }
}</code></pre>
    </div>
    
    <p>On mobile devices:</p>
    <ul>
      <li>The panel takes the full screen width</li>
      <li>The toggle button becomes circular and repositioned</li>
      <li>Touch-friendly sizing is applied</li>
    </ul>
  </section>
</div>

<!-- Microblog Implementation -->
<button id="microblog-toggle-btn" aria-label="Open Microblog" style="position: fixed; top: 4.5rem; right: 2.5rem; z-index: 1100; background: #191d26; color: white; border-radius: 999px; padding: 1rem 1.5rem; font-size: 1.3rem; font-weight: 600; box-shadow: 0 2px 8px rgba(0,0,0,0.08); border: none; cursor: pointer; transition: background 0.2s; opacity: 0.97;">💬 Microblog</button>

<aside id="microblog-panel" style="position: fixed; top: 5rem; right: 0; width: 400px; max-width: 90vw; height: calc(100vh - 5rem); box-shadow: -2px 0 12px rgba(0,0,0,0.12); z-index: 1000; transform: translateX(100%); transition: transform 0.3s cubic-bezier(.4,0,.2,1); display: flex; flex-direction: column; background: white;" tabindex="-1" aria-label="Microblog panel">
  <div style="flex: 0 0 auto; display: flex; justify-content: flex-end; padding: 0.5rem; border-bottom: 1px solid #e5e7eb;">
    <button id="microblog-close-btn" style="padding: 0.5rem; font-size: 1.5rem; font-weight: bold; color: #374151; border: 1px solid #d1d5db; border-radius: 9999px; width: 2.5rem; height: 2.5rem; display: flex; align-items: center; justify-content: center; cursor: pointer; background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1);" aria-label="Close Microblog">&times;</button>
  </div>
  <div style="flex: 1; overflow-y: auto; padding: 1rem;">
    <h2 style="font-size: 1.25rem; font-weight: bold; margin-bottom: 1rem;">Microblog Demo</h2>
    <div class="microblog-content">
      <p>This is a demonstration of the microblog panel in action!</p>
      <p>You can put any content here:</p>
      <ul>
        <li>Discussion threads</li>
        <li>Code examples</li>
        <li>Interactive elements</li>
        <li>Notes and annotations</li>
      </ul>
      
      <h3>Try It Out</h3>
      <p>Add your own note:</p>
      <textarea style="width: 100%; height: 100px; padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; margin-bottom: 1rem;"></textarea>
      <button style="background: #4f46e5; color: white; padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer;">Add Note</button>
    </div>
  </div>
</div>
</aside>

<script>
// Microblog functionality
const overlay = document.getElementById('microblog-panel');
const toggleBtn = document.getElementById('microblog-toggle-btn');
const closeBtn = document.getElementById('microblog-close-btn');

function openMicroblog() {
  overlay.style.transform = 'translateX(0)';
  overlay.focus();
  toggleBtn.style.display = 'none';
}

function closeMicroblog() {
  overlay.style.transform = 'translateX(100%)';
  toggleBtn.style.display = '';
}

toggleBtn.addEventListener('click', openMicroblog);
closeBtn.addEventListener('click', closeMicroblog);

// Close on escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && overlay.style.transform === 'translateX(0px)') {
    closeMicroblog();
  }
});
</script>

<style>
.lesson-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
}

.lesson-container h1 {
  color: #1e293b;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 0.5rem;
}

.lesson-container h2 {
  color: #334155;
  margin-top: 2rem;
}

.code-example {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  padding: 1rem;
  margin: 1rem 0;
  overflow-x: auto;
}

.code-example pre {
  margin: 0;
}

.code-example code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
}

@media (max-width: 600px) {
  .lesson-container {
    padding: 1rem;
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
  
  #microblog-panel {
    width: 100vw;
    max-width: 100vw;
  }
}
</style>

# Code

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
<<<<<<< HEAD


 
```html
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
=======
>>>>>>> e8f4a8b881f2be69151026f5038007d1207e31c6

# JavaScript Layer/UI Functionality

## What is UI Functionality?

UI functionality refers to the JavaScript code that makes your web page interactive. It handles:
- What happens when users click buttons
- How forms collect and submit data
- How content updates without refreshing the page

This lesson covers the microblog's interactive features.

---
**Three Main Parts:**
1. **Modal System** - Shows/hides pop-up form
2. **Form Handler** - Collects data and calls create/update APIs
3. **Table Renderer** - Fetches and displays posts

**Key Flow:**
User Action → Event Handler → Function → API Call → Re-render → Updated UI

**Main Idea:**
The UI stays in sync with the data by re-rendering after every change, rather than trying to manually update individual pieces.

## The Three Main Components

### 1. Modal System (Pop-up Window)

A **modal** is a pop-up window that appears over the main page. In this application, it's used for creating and editing posts.

#### Opening the Modal

```javascript
function openModal({ mode, post = {} }) {
  document.getElementById('microblog-modal').classList.remove('hidden');
  document.getElementById('modal-title').textContent = mode === 'edit' ? 'Edit Microblog Post' : 'Create Microblog Post';
  document.getElementById('post-id').value = post.id || '';
  document.getElementById('content').value = post.content || '';
}
```

**What this does:**
- Makes the modal visible by removing the `'hidden'` CSS class
- Changes the title based on whether you're creating or editing
- Pre-fills the form with existing data (for editing) or leaves it empty (for creating)

**Parameters:**
- `mode`: Either `'create'` or `'edit'`
- `post`: An object containing post data (only used when editing)

#### Closing the Modal

```javascript
function closeModal() {
  document.getElementById('microblog-modal').classList.add('hidden');
}
```

**What this does:**
- Hides the modal by adding back the `'hidden'` CSS class

**Why this matters:** Using one modal for both create and edit saves code. The same HTML element serves two purposes based on how you open it.

---

### 2. Form Submission (Saving Data)

When a user fills out the form and clicks "Save", this code runs:

```javascript
document.getElementById('microblog-form').onsubmit = async function(e) {
  e.preventDefault();
  
  // Collect data from form fields
  const id = document.getElementById('post-id').value;
  const topicPath = document.getElementById('topic-id').value;
  const content = document.getElementById('content').value;
  
  try {
    // Decide: Are we updating or creating?
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
```
<<<<<<< HEAD
# AI API Quiz
=======
>>>>>>> e8f4a8b881f2be69151026f5038007d1207e31c6

**Step-by-step:**

1. **`e.preventDefault()`** - Stops the form from refreshing the page (default behavior)
2. **Collect data** - Gets values from form input fields
3. **Check for `id`** - If an `id` exists, we're editing an existing post. If not, we're creating a new one
4. **Call API** - Uses either `updatePost()` or `createPost()` to save data
5. **Update UI** - Closes the modal and refreshes the table to show changes

**Why this matters:** The same form handles both create and edit operations. The presence of an `id` is the deciding factor.

---

### 3. Table Rendering (Displaying Data)

This function fetches post data and displays it in a table:

```javascript
async function renderMicroblogTable() {
  const container = document.getElementById('microblog-playground');
  
  try {
    // Step 1: Determine what to show
    let pageArg = undefined;
    if (window.__microblogFilterMode === 'page') {
      pageArg = window.location.pathname; // Current page only
    }
    // If undefined, show all posts
    
    // Step 2: Fetch data from API
    const data = await fetchPosts(pageArg);
    
    // Step 3: Build table HTML
    let tableHTML = '<table id="microblog-table">...';
    data.microblogs.forEach(post => {
      tableHTML += `<tr>
        <td>${post.userName}</td>
        <td>${post.content}</td>
      </tr>`;
    });
    tableHTML += '</table>';
    
    // Step 4: Display table
    container.innerHTML = tableHTML;
    
    // Step 5: Add interactive features (search, pagination)
    $('#microblog-table').DataTable();
    
  } catch (error) {
    container.innerHTML = `<div style="color:red;">Error: ${error.message}</div>`;
  }
}
```

**Step-by-step:**

1. **Determine filter** - Should we show all posts or just posts for this page?
2. **Fetch data** - Call the API to get post data
3. **Build HTML** - Create table structure with data
4. **Display** - Replace container content with new table
5. **Enhance** - Add DataTables features (search, sort, pagination)

**Why this matters:** The table rebuilds from scratch every time data changes. This ensures the UI always matches the current data.

---

