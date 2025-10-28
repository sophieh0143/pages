---
layout: post
title: "Coding with AI - The Realistic Version"
description: "Use the SPEC framework for code generation, follow a debugging template, and always run security checks. The key principle: understand and verify before using any AI-generated code."
permalink: /cs-portfolio-quest/ai/submodule_4/
parent: "AI Usage"
team: "Thinkers"
submodule: 4
categories: [CSP, Submodule, AIUsage]
tags: [ai, submodule, thinkers]
author: "Thinkers Team"
date: 2025-10-21
---

<style>
.code-editor {
    width: 100%;
    min-height: 200px;
    font-family: 'Courier New', monospace;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #f5f5f5;
    font-size: 14px;
}

.spec-section {
    margin: 20px 0;
    padding: 20px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.security-result {
    padding: 20px;
    margin: 20px 0;
    border-radius: 8px;
    display: none;
}

.security-result.pass {
    background: #d4edda;
    border: 1px solid #c3e6cb;
    color: #155724;
}

.security-result.fail {
    background: #f8d7da;
    border: 1px solid #f5c6cb;
    color: #721c24;
}

.security-result.loading {
    background: #d1ecf1;
    border: 1px solid #bee5eb;
    color: #0c5460;
}

.vulnerability-list {
    margin-top: 10px;
    padding-left: 20px;
}

.vulnerability-list li {
    margin: 5px 0;
}

.button-primary {
    padding: 12px 24px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.3s;
}

.button-primary:hover {
    background: #0056b3;
}

.button-primary:disabled {
    background: #6c757d;
    cursor: not-allowed;
}

.score-display {
    font-size: 24px;
    font-weight: bold;
    margin: 15px 0;
}
</style>

# Coding with AI - The Realistic Version

Learn to write better AI prompts using the **SPEC Framework** and automatically check your code for security vulnerabilities.

---

## The SPEC Framework

Before asking AI to generate code, structure your prompt using these 4 components:

<div class="spec-section">
  <h3>📝 S - Specific</h3>
  <p><strong>What exact functionality do you need?</strong></p>
  <textarea id="spec-specific" class="code-editor" rows="2" 
    placeholder="Example: Create a function to validate user registration data">
  </textarea>
</div>

<div class="spec-section">
  <h3>💻 P - Platform</h3>
  <p><strong>Language, version, frameworks</strong></p>
  <input type="text" id="spec-platform" 
    placeholder="Example: Python 3.9, no external libraries" 
    style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 5px; font-size: 14px;">
</div>

<div class="spec-section">
  <h3>📊 E - Examples</h3>
  <p><strong>Sample input/output</strong></p>
  <textarea id="spec-examples" class="code-editor" rows="3"
    placeholder="Input: {'username': 'ab', 'email': 'invalid'}
Output: (False, ['Username too short', 'Invalid email'])">
  </textarea>
</div>

<div class="spec-section">
  <h3>⚙️ C - Constraints</h3>
  <p><strong>Security, performance, style requirements</strong></p>
  <textarea id="spec-constraints" class="code-editor" rows="2"
    placeholder="- Username: 3-20 chars, alphanumeric only
- Password: 8+ chars with uppercase, lowercase, number
- Return all errors, not just first one">
  </textarea>
</div>

---

## Your Code Submission

<div class="spec-section">
  <h3>📄 Paste Your Code Here</h3>
  <p>Submit your code for automatic security analysis</p>
  <textarea id="code-submission" class="code-editor" rows="15"
    placeholder="def validate_user(data):
    errors = []
    
    if len(data['username']) < 3:
        errors.append('Username too short')
    
    if '@' not in data['email']:
        errors.append('Invalid email')
    
    return (len(errors) == 0, errors)">
  </textarea>
  
  <div style="margin-top: 15px;">
    <button id="check-button" class="button-primary" onclick="checkCodeSecurity()">
      🔍 Run Security Check
    </button>
  </div>
</div>

<div id="result" class="security-result"></div>

---

## The 5 Essential Security Checks

Your code will be automatically checked for:

1. **🛡️ SQL Injection Prevention** - Are you using parameterized queries?
2. **🔐 Secrets Management** - No hardcoded passwords or API keys
3. **✅ Input Validation** - All user input must be validated
4. **🚫 XSS Protection** - Sanitize output to prevent cross-site scripting
5. **🔒 Authentication** - Proper auth/authorization checks

---

## Trust But Verify Rule

For every AI-generated code:
1. **Understand it** - If you can't explain it, don't use it
2. **Test it** - Try edge cases and error conditions
3. **Secure it** - Run through the checklist above
4. **Simplify it** - Remove unnecessary complexity

<script type="module">
import { pythonURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

const ENDPOINT = `${pythonURI}/api/gemini`;

window.checkCodeSecurity = async function() {
    const code = document.getElementById('code-submission').value.trim();
    const resultDiv = document.getElementById('result');
    const button = document.getElementById('check-button');
    
    if (!code) {
        alert('Please paste your code first!');
        return;
    }
    
    // Build SPEC context
    const specContext = `
SPEC Framework Context:
- Specific: ${document.getElementById('spec-specific').value}
- Platform: ${document.getElementById('spec-platform').value}
- Examples: ${document.getElementById('spec-examples').value}
- Constraints: ${document.getElementById('spec-constraints').value}
    `.trim();
    
    // Show loading state
    resultDiv.className = 'security-result loading';
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = '<p>🔍 Analyzing code security...</p>';
    button.disabled = true;
    
    // Build prompt for security analysis
    const prompt = `Analyze this code for security vulnerabilities. Check these 5 critical areas:
1. SQL Injection (parameterized queries used?)
2. Hardcoded secrets (passwords, API keys in code?)
3. Input validation (user input validated?)
4. XSS protection (output sanitized?)
5. Authentication (proper auth checks?)

Code to analyze:
\`\`\`
${code}
\`\`\`

${specContext}

Respond in JSON format with:
{
  "score": <number 0-100>,
  "passed": <boolean>,
  "vulnerabilities": [<array of specific issues found>],
  "feedback": "<overall security assessment>",
  "recommendations": [<array of how to fix issues>]
}`;

    try {
        const response = await fetch(ENDPOINT, {
            ...fetchOptions,
            method: 'POST',
            body: JSON.stringify({
                prompt: prompt,
                text: code
            })
        });
        
        if (!response.ok) {
            throw new Error('API request failed');
        }
        
        const result = await response.json();
        
        if (result.error || !result.text) {
            throw new Error(result.error || 'No response from AI');
        }
        
        // Parse the AI response
        let analysis;
        try {
            // Try to extract JSON from the response
            const jsonMatch = result.text.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                analysis = JSON.parse(jsonMatch[0]);
            } else {
                // Fallback: create analysis from text
                analysis = {
                    score: 70,
                    passed: false,
                    vulnerabilities: ['AI response not in expected format'],
                    feedback: result.text,
                    recommendations: ['Review the detailed feedback above']
                };
            }
        } catch (e) {
            console.error('JSON parse error:', e);
            analysis = {
                score: 0,
                passed: false,
                vulnerabilities: ['Could not parse AI response'],
                feedback: result.text,
                recommendations: []
            };
        }
        
        displayResults(analysis);
        
    } catch (error) {
        resultDiv.className = 'security-result fail';
        resultDiv.innerHTML = `
            <h3>❌ Error</h3>
            <p>Failed to analyze code: ${error.message}</p>
            <p>Make sure the backend is running and try again.</p>
        `;
    } finally {
        button.disabled = false;
    }
}

function displayResults(analysis) {
    const resultDiv = document.getElementById('result');
    const passed = analysis.score >= 80;
    
    resultDiv.className = passed ? 'security-result pass' : 'security-result fail';
    resultDiv.style.display = 'block';
    
    let html = `
        <div class="score-display">
            ${passed ? '✅' : '❌'} Security Score: ${analysis.score}/100
        </div>
        <p><strong>${passed ? 'PASSED' : 'FAILED'}</strong></p>
        <p>${analysis.feedback}</p>
    `;
    
    if (analysis.vulnerabilities && analysis.vulnerabilities.length > 0) {
        html += `
            <h4>🔍 Issues Found:</h4>
            <ul class="vulnerability-list">
                ${analysis.vulnerabilities.map(v => `<li>${v}</li>`).join('')}
            </ul>
        `;
    }
    
    if (analysis.recommendations && analysis.recommendations.length > 0) {
        html += `
            <h4>💡 Recommendations:</h4>
            <ul class="vulnerability-list">
                ${analysis.recommendations.map(r => `<li>${r}</li>`).join('')}
            </ul>
        `;
    }
    
    resultDiv.innerHTML = html;
}
</script>

---

## Example: Good vs Bad Code

### ❌ Bad (Insecure)
```python
password = "mySecret123"  # Hardcoded!
query = "SELECT * FROM users WHERE name = '" + user_input + "'"  # SQL injection!
html = "" + user_comment + ""  # XSS vulnerability!
```

### ✅ Good (Secure)
```python
password = os.getenv("DB_PASSWORD")  # From environment
query = "SELECT * FROM users WHERE name = ?"  # Parameterized
html = "" + escape(user_comment) + ""  # Sanitized
```

{%- include tailwind/cs-portfolio-quest-lessons_info.html -%}