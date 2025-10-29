---
layout: post
title: "Prompt Engineering"
description: "Master the art of specific prompts by including context, the problem, what you've tried, and desired outcomes. Practice iterative refinement to get better AI responses."
permalink: /cs-portfolio-quest/ai/submodule_2/
parent: "AI Usage"
team: "Thinkers"
submodule: 2
categories: [CSP, Submodule, AIUsage]
tags: [ai, submodule, thinkers]
author: "Thinkers Team"
date: 2025-10-21
---

## Module 2: Prompt Engineering

### Real Talk on Prompts

Most students waste time with vague prompts. Winners get specific. The difference between a useless AI response and one that actually solves your problem comes down to how you ask.

<style>
  .prompt-container {
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 8px;
  }
  
  .comparison-box {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 20px 0;
  }
  
  .bad-prompt {
    background: #ffe0e0;
    border-left: 4px solid #ff4444;
    padding: 20px;
    border-radius: 8px;
    color: #000;
  }
  
  .bad-prompt h4 {
    color: #c41e3a;
  }
  
  .good-prompt {
    background: #e0f7fa;
    border-left: 4px solid #00bcd4;
    padding: 20px;
    border-radius: 8px;
    color: #000;
  }
  
  .good-prompt h4 {
    color: #00838f;
  }
  
  .component-box {
    border: 2px solid #007bff;
    border-radius: 8px;
    padding: 15px;
    margin: 15px 0;
  }
  
  .iteration-step {
    background: #e9ecef;
    border-left: 4px solid #6c757d;
    padding: 15px;
    margin: 10px 0;
    border-radius: 4px;
  }
  
  .practice-textarea {
    width: 100%;
    min-height: 120px;
    padding: 12px;
    border: 2px solid #007bff;
    border-radius: 8px;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.5;
    resize: vertical;
    margin: 10px 0;
  }
  
  .status-box {
    padding: 12px;
    border-radius: 8px;
    margin: 15px 0;
    display: none;
  }
  
  @media (max-width: 768px) {
    .comparison-box {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="prompt-container">

## The Difference Between Bad and Good Prompts

<div class="comparison-box">
  <div class="bad-prompt">
    <h4>❌ Bad Prompt:</h4>
    <p><em>"Help me with my code"</em></p>
    <p><strong>Why it fails:</strong> No context, no specifics, no code shown. AI has to guess everything.</p>
  </div>
  
  <div class="good-prompt">
    <h4>✅ Good Prompt:</h4>
    <p><em>"I'm getting a 404 error in my Flask app when trying to POST to /api/login. The route exists and works in Postman but fails from my React frontend. Here's the fetch call: [code]. Here's my Flask route: [code]. What's the likely issue?"</em></p>
    <p><strong>Why it works:</strong> Specific error, tools mentioned, code provided, clear problem statement.</p>
  </div>
</div>

---

## The 4 Components Every Prompt Needs

<div class="component-box">
  <h4>1. 📋 Context</h4>
  <p><strong>What you're working on and with what tools</strong></p>
  <ul>
    <li>"I'm building a Flask backend with React frontend"</li>
    <li>"Using Python 3.11 with SQLite database"</li>
    <li>"Working on authentication for a student portfolio site"</li>
  </ul>
</div>

<div class="component-box">
  <h4>2. 🔍 Problem</h4>
  <p><strong>Specific issue you're facing</strong></p>
  <ul>
    <li>Not: "It doesn't work"</li>
    <li>Yes: "Getting 'CORS policy' error when frontend tries to fetch from backend"</li>
    <li>Include error messages, unexpected behavior, or what's different from expected</li>
  </ul>
</div>

<div class="component-box">
  <h4>3. 🔧 What You've Tried</h4>
  <p><strong>Failed attempts (shows you're not being lazy)</strong></p>
  <ul>
    <li>"I tried adding CORS headers but still getting blocked"</li>
    <li>"Checked the Flask route - it returns 200 in Postman"</li>
    <li>"Frontend console shows the request never completes"</li>
  </ul>
</div>

<div class="component-box">
  <h4>4. 🎯 Desired Outcome</h4>
  <p><strong>What success looks like</strong></p>
  <ul>
    <li>"Need the POST request to successfully reach Flask and return user data"</li>
    <li>"Want to understand why CORS is blocking and how to fix it properly"</li>
    <li>"Should work like it does in Postman but from the browser"</li>
  </ul>
</div>

---

## Iterative Refinement In Practice

**Most students give up after one bad AI response. Winners iterate.**

<div class="iteration-step">
  <strong>Round 1 - Generic Prompt:</strong><br>
  <em>You: "Explain how JWT authentication works in Flask"</em><br>
  <span style="color: #6c757d;">AI: [Generic explanation about JWTs and basic Flask setup]</span>
</div>

<div class="iteration-step">
  <strong>Round 2 - Add Context:</strong><br>
  <em>You: "I need to implement JWT auth that persists across page refreshes in a Github Pages + Flask app. Show me the Flask backend token generation and the Github Pages frontend token storage/usage."</em><br>
  <span style="color: #0c5460;">AI: [Much more useful - specific code for your stack]</span>
</div>

<div class="iteration-step">
  <strong>Round 3 - Refine Based on Response:</strong><br>
  <em>You: "This token expires in 15 min. How do I implement refresh tokens to keep users logged in longer?"</em><br>
  <span style="color: #155724;">AI: [Exactly what you needed - refresh token implementation]</span>
</div>

---

### Practice Exercise (15 min)

**Take a problem you're currently stuck on. Write 3 progressively better prompts, each adding more specificity based on what's missing.**

<div style="background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 15px 0; border-radius: 4px;">
  <strong>📝 Your Turn:</strong> Use the text areas below to practice iterative prompt refinement. Start vague, then improve with each version.
</div>

<label for="prompt-v1"><strong>Version 1 - Initial Prompt (Probably Too Vague):</strong></label>
<textarea id="prompt-v1" class="practice-textarea" placeholder="Start with your first attempt at describing your problem..."></textarea>

<label for="prompt-v2"><strong>Version 2 - Add Context & Specifics:</strong></label>
<textarea id="prompt-v2" class="practice-textarea" placeholder="Improve your prompt by adding: What tools are you using? What exactly is the error? What have you tried?"></textarea>

<label for="prompt-v3"><strong>Version 3 - The Killer Prompt:</strong></label>
<textarea id="prompt-v3" class="practice-textarea" placeholder="Final version: Include context, specific problem, what you tried, desired outcome, and any relevant code snippets"></textarea>

<div style="display: flex; gap: 10px; margin-top: 15px; flex-wrap: wrap;">
  <button class="iridescent flex-1 text-white text-center py-2 rounded-lg font-semibold transition" onclick="savePromptExercise()">
    💾 Save Progress
  </button>
  <button class="iridescent flex-1 text-white text-center py-2 rounded-lg font-semibold transition" onclick="loadPromptExercise()">
    📂 Load Saved Work
  </button>
  <button class="iridescent flex-1 text-white text-center py-2 rounded-lg font-semibold transition" onclick="analyzePrompts()">
    🔍 Analyze My Prompts
  </button>
  <button class="iridescent flex-1 text-white text-center py-2 rounded-lg font-semibold transition" onclick="testModePrompts()">
    🧪 Test Mode
  </button>
</div>

<div id="prompt-status" class="status-box"></div>
<div id="analysis-result" class="status-box"></div>

---

### Real-World Example: Debugging a Flask API

**Scenario:** Your Flask API works in Postman but fails from your React frontend.

<details style="background: #f8f9fa; padding: 15px; margin: 15px 0; border-radius: 8px; border: 1px solid #dee2e6;">
  <summary style="cursor: pointer; font-weight: bold; color: #007bff;">Click to see the progression from bad → good prompt</summary>
  
  <div style="margin-top: 15px;">
    <div style="background: #f8d7da; padding: 15px; margin: 10px 0; border-radius: 6px;">
      <strong>❌ Attempt 1 (Useless):</strong><br>
      "My API doesn't work"
    </div>
    
    <div style="background: #fff3cd; padding: 15px; margin: 10px 0; border-radius: 6px;">
      <strong>⚠️ Attempt 2 (Better but still vague):</strong><br>
      "I'm getting an error when I call my Flask API from React"
    </div>
    
    <div style="background: #d1ecf1; padding: 15px; margin: 10px 0; border-radius: 6px;">
      <strong>✅ Attempt 3 (Getting there):</strong><br>
      "My Flask /api/login route returns 404 when called from React fetch() but works in Postman. Using Flask-CORS."
    </div>
    
    <div style="background: #d4edda; padding: 15px; margin: 10px 0; border-radius: 6px;">
      <strong>🎯 Attempt 4 (Perfect):</strong><br>
      "I'm building a Flask backend (localhost:5001) with React frontend (localhost:3000). The POST request to /api/login works in Postman but returns 404 from React. I've installed Flask-CORS and added CORS(app) to my Flask app. Here's my Flask route: <code>[route code]</code>. Here's my React fetch: <code>[fetch code]</code>. Browser console shows: 'Failed to fetch'. What's causing the CORS/routing issue?"
    </div>
  </div>
</details>

---

### Key Takeaways

<div style="background: #007bff; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
  <h4 style="margin-top: 0;">🎯 Remember:</h4>
  <ul style="margin: 10px 0;">
    <li><strong>Be specific:</strong> Error messages, tools, what you tried</li>
    <li><strong>Iterate:</strong> First response bad? Refine your prompt</li>
    <li><strong>Include code:</strong> Show what you've actually written</li>
    <li><strong>State the goal:</strong> What does success look like?</li>
    <li><strong>Don't give up:</strong> Winners ask 3+ times with better prompts each time</li>
  </ul>
</div>

</div>

<script>
// Status message helper
function showStatus(message, type, elementId = 'prompt-status') {
    const statusDiv = document.getElementById(elementId);
    statusDiv.textContent = message;
    statusDiv.style.display = "block";

    switch(type) {
        case "success":
            statusDiv.style.backgroundColor = "#d4edda";
            statusDiv.style.color = "#155724";
            statusDiv.style.border = "1px solid #c3e6cb";
            break;
        case "error":
            statusDiv.style.backgroundColor = "#f8d7da";
            statusDiv.style.color = "#721c24";
            statusDiv.style.border = "1px solid #f5c6cb";
            break;
        case "info":
            statusDiv.style.backgroundColor = "#d1ecf1";
            statusDiv.style.color = "#0c5460";
            statusDiv.style.border = "1px solid #bee5eb";
            break;
        case "warning":
            statusDiv.style.backgroundColor = "#fff3cd";
            statusDiv.style.color = "#856404";
            statusDiv.style.border = "1px solid #ffeaa7";
            break;
    }

    setTimeout(() => {
        statusDiv.style.display = "none";
    }, 5000);
}

// Save prompt exercise
function savePromptExercise() {
    const v1 = document.getElementById('prompt-v1').value.trim();
    const v2 = document.getElementById('prompt-v2').value.trim();
    const v3 = document.getElementById('prompt-v3').value.trim();

    if (!v1 && !v2 && !v3) {
        showStatus("⚠️ Please write at least one prompt before saving", "warning");
        return;
    }

    const data = {
        version1: v1,
        version2: v2,
        version3: v3,
        timestamp: new Date().toISOString(),
        module: 'prompt-engineering'
    };

    try {
        localStorage.setItem('ai-prompt-exercise', JSON.stringify(data));
        showStatus("✅ Progress saved successfully!", "success");
    } catch (error) {
        showStatus("❌ Failed to save: " + error.message, "error");
    }
}

// Load prompt exercise
function loadPromptExercise() {
    try {
        const saved = localStorage.getItem('ai-prompt-exercise');
        if (saved) {
            const data = JSON.parse(saved);
            document.getElementById('prompt-v1').value = data.version1 || '';
            document.getElementById('prompt-v2').value = data.version2 || '';
            document.getElementById('prompt-v3').value = data.version3 || '';
            
            const saveDate = new Date(data.timestamp).toLocaleString();
            showStatus(`✅ Work loaded! (Saved: ${saveDate})`, "success");
        } else {
            showStatus("⚠️ No saved work found", "warning");
        }
    } catch (error) {
        showStatus("❌ Failed to load: " + error.message, "error");
    }
}

// Analyze prompts for quality
function analyzePrompts() {
    const v1 = document.getElementById('prompt-v1').value.trim();
    const v2 = document.getElementById('prompt-v2').value.trim();
    const v3 = document.getElementById('prompt-v3').value.trim();

    if (!v1 && !v2 && !v3) {
        showStatus("⚠️ Please write some prompts first", "warning", "analysis-result");
        return;
    }

    const components = ['context', 'problem', 'tried', 'outcome', 'error', 'code'];
    
    function scorePrompt(text) {
        let score = 0;
        const lower = text.toLowerCase();
        
        if (lower.includes('flask') || lower.includes('react') || lower.includes('python')) score++;
        if (lower.includes('error') || lower.includes('issue') || lower.includes('problem')) score++;
        if (lower.includes('tried') || lower.includes('attempted') || lower.includes('already')) score++;
        if (lower.includes('want') || lower.includes('need') || lower.includes('should')) score++;
        if (text.length > 100) score++;
        if (text.includes('```') || text.includes('[code]')) score++;
        
        return score;
    }

    const scores = [scorePrompt(v1), scorePrompt(v2), scorePrompt(v3)];
    const improvements = [];
    
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > scores[i-1]) {
            improvements.push(`✅ Version ${i+1} improved!`);
        } else if (scores[i] === scores[i-1] && v1 && v2) {
            improvements.push(`⚠️ Version ${i+1} needs more detail`);
        }
    }

    const finalScore = scores[2] || scores[1] || scores[0];
    let feedback = `<strong>Analysis Results:</strong><br>`;
    feedback += `Final Prompt Score: ${finalScore}/6<br>`;
    feedback += improvements.join('<br>');
    
    if (finalScore >= 5) {
        feedback += `<br><br>🎯 <strong>Excellent!</strong> Your final prompt has most key components.`;
    } else if (finalScore >= 3) {
        feedback += `<br><br>👍 <strong>Good progress!</strong> Consider adding: code snippets, specific error messages, or tools being used.`;
    } else {
        feedback += `<br><br>📚 <strong>Keep refining!</strong> Add context, specific problems, and what you've tried.`;
    }

    const analysisDiv = document.getElementById('analysis-result');
    analysisDiv.innerHTML = feedback;
    analysisDiv.style.display = "block";
    analysisDiv.style.backgroundColor = "#e7f3ff";
    analysisDiv.style.color = "#004085";
    analysisDiv.style.border = "2px solid #007bff";
}

// Test mode - fill with examples
function testModePrompts() {
    if (confirm("Fill all fields with example prompts for testing?")) {
        document.getElementById('prompt-v1').value = "My code doesn't work";
        
        document.getElementById('prompt-v2').value = "I'm getting an error in my Flask app when I try to connect to my database. The error says something about connection refused.";
        
        document.getElementById('prompt-v3').value = `I'm building a Flask backend (Python 3.11) with SQLite database for a student portfolio site. When I try to query the database from my /api/users route, I get "sqlite3.OperationalError: unable to open database file". 

I've tried:
- Checking that the database file exists (it does: database.db in root folder)
- Verifying file permissions (it's readable)
- Testing the query directly in Python shell (works fine there)

Here's my database connection code:
\`\`\`python
conn = sqlite3.connect('database.db')
cursor = conn.cursor()
\`\`\`

Here's my Flask route:
\`\`\`python
@app.route('/api/users')
def get_users():
    conn = sqlite3.connect('database.db')
    users = conn.execute('SELECT * FROM users').fetchall()
    return jsonify(users)
\`\`\`

Expected: Should return list of users from database
Actual: Gets connection error when Flask route runs

What am I missing about database connections in Flask routes?`;

        showStatus("🧪 Test mode activated! Example prompts loaded.", "info");
    }
}

// Auto-load on page load
document.addEventListener('DOMContentLoaded', function() {
    loadPromptExercise();
});

localStorage.setItem('ai-submodule-2-completed', 'true');

</script>

{%- include tailwind/cs-portfolio-quest-lessons_info.html -%}