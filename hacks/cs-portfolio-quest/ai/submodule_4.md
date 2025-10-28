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
author: "Ansh Kumar - Thinkers"
date: 2025-10-21
---

<style>
:root {
    --primary-color: #007bff;
    --success-color: #28a745;
    --warning-color: #ff6b35;
    --danger-color: #dc3545;
    --info-color: #17a2b8;
    --light-bg: #f8f9fa;
    --dark-bg: #2d2d2d;
    --text-dark: #212529;
}

body {
    line-height: 1.6;
}

.intro-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 30px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.intro-section h1 {
    margin-top: 0;
    font-size: 2em;
    color: white;
}

.intro-section p {
    color: white;
}

.guide-box {
    background: #e7f3ff;
    border-left: 4px solid var(--primary-color);
    padding: 20px;
    margin: 20px 0;
    border-radius: 5px;
}

.guide-box h3 {
    color: var(--primary-color);
    margin-top: 0;
}

.guide-box p, .guide-box ul, .guide-box li {
    color: var(--text-dark);
}

details {
    background: white;
    border: 2px solid #dee2e6;
    border-radius: 8px;
    padding: 15px;
    margin: 15px 0;
}

details h4, details ol, details li, details p {
    color: var(--text-dark);
}

summary {
    cursor: pointer;
    font-weight: bold;
    color: var(--primary-color);
    font-size: 18px;
    padding: 10px;
    user-select: none;
}

summary:hover {
    color: #0056b3;
}

.code-editor {
    width: calc(100% - 34px);
    min-height: 200px;
    font-family: 'Courier New', 'Monaco', monospace;
    padding: 15px;
    border: 2px solid #ced4da;
    border-radius: 8px;
    background: var(--dark-bg);
    color: #f8f8f2;
    font-size: 14px;
    line-height: 1.5;
    resize: vertical;
    box-sizing: border-box;
}

.code-editor:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(0,123,255,0.1);
}

.spec-section {
    margin: 25px 0;
    padding: 25px;
    background: white;
    border: 2px solid var(--primary-color);
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s, box-shadow 0.2s;
}

.spec-section:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.spec-section h3 {
    color: var(--primary-color);
    margin-top: 0;
    font-size: 22px;
    border-bottom: 2px solid var(--primary-color);
    padding-bottom: 10px;
    margin-bottom: 15px;
}

.spec-section .description {
    color: var(--text-dark);
    margin-bottom: 15px;
    font-size: 15px;
    line-height: 1.6;
}

.spec-section .description strong {
    color: var(--text-dark);
}

.spec-section .example-box {
    background: #e8f5e9;
    border-left: 4px solid var(--success-color);
    padding: 15px;
    margin: 15px 0;
    border-radius: 5px;
    font-family: 'Courier New', monospace;
    font-size: 13px;
    color: var(--text-dark);
}

.spec-section .example-box strong {
    color: var(--text-dark);
}

.spec-section input {
    width: calc(100% - 28px);
    padding: 12px;
    border: 2px solid #ced4da;
    border-radius: 5px;
    font-size: 14px;
    background: white;
    color: var(--text-dark);
    transition: border-color 0.3s;
    box-sizing: border-box;
}

.spec-section input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(0,123,255,0.1);
}

.security-result {
    padding: 25px;
    margin: 25px 0;
    border-radius: 10px;
    display: none;
    animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.security-result.pass {
    background: #d4edda;
    border: 2px solid var(--success-color);
    color: #155724;
}

.security-result.pass h3, .security-result.pass h4, .security-result.pass p, .security-result.pass li {
    color: #155724;
}

.security-result.fail {
    background: #f8d7da;
    border: 2px solid var(--danger-color);
    color: #721c24;
}

.security-result.fail h3, .security-result.fail h4, .security-result.fail p, .security-result.fail li {
    color: #721c24;
}

.security-result.loading {
    background: #d1ecf1;
    border: 2px solid var(--info-color);
    color: #0c5460;
}

.security-result.loading p {
    color: #0c5460;
}

.vulnerability-list {
    margin-top: 15px;
    padding-left: 25px;
}

.vulnerability-list li {
    margin: 10px 0;
    line-height: 1.8;
}

.button-primary {
    padding: 15px 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: transform 0.2s, box-shadow 0.2s;
    margin-top: 15px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.button-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.2);
}

.button-primary:active {
    transform: translateY(0);
}

.button-primary:disabled {
    background: #6c757d;
    cursor: not-allowed;
    transform: none;
}

.score-display {
    font-size: 32px;
    font-weight: bold;
    margin: 20px 0;
}

.info-box {
    background: #fff8e1;
    border: 2px solid var(--warning-color);
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
}

.info-box h2, .info-box h3, .info-box h4 {
    color: #d84315;
    margin-top: 0;
}

.info-box p, .info-box li, .info-box strong {
    color: var(--text-dark);
}

.info-box pre {
    color: #f8f8f2;
}

.success-box {
    background: #d4edda;
    border: 2px solid var(--success-color);
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
}

.success-box h2, .success-box h3, .success-box h4 {
    color: #155724;
    margin-top: 0;
}

.success-box p, .success-box li, .success-box strong {
    color: var(--text-dark);
}

.danger-box {
    background: #f8d7da;
    border: 2px solid var(--danger-color);
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
}

.danger-box h2, .danger-box h3, .danger-box h4 {
    color: #721c24;
    margin-top: 0;
}

.danger-box p, .danger-box li, .danger-box strong {
    color: var(--text-dark);
}

.example-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 20px 0;
}

@media (max-width: 768px) {
    .example-grid {
        grid-template-columns: 1fr;
    }
}

.example-card {
    padding: 20px;
    border-radius: 8px;
    border: 2px solid;
}

.example-card.bad {
    background: #ffebee;
    border-color: var(--danger-color);
}

.example-card.bad h4, .example-card.bad p, .example-card.bad li, .example-card.bad strong {
    color: var(--text-dark);
}

.example-card.good {
    background: #e8f5e9;
    border-color: var(--success-color);
}

.example-card.good h4, .example-card.good p, .example-card.good li, .example-card.good strong {
    color: var(--text-dark);
}

.example-card h4 {
    margin-top: 0;
}

.example-card pre {
    background: var(--dark-bg);
    color: #f8f8f2;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
    font-size: 13px;
}

.step-number {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: var(--primary-color);
    color: white;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    font-weight: bold;
    margin-right: 10px;
}

.checklist {
    list-style: none;
    padding-left: 0;
}

.checklist li {
    padding: 10px;
    margin: 10px 0;
    background: white;
    border-left: 4px solid var(--success-color);
    border-radius: 5px;
    color: var(--text-dark);
}

.checklist li:before {
    content: "✓ ";
    color: var(--success-color);
    font-weight: bold;
    margin-right: 10px;
}

.checklist li strong {
    color: var(--text-dark);
}
</style>

<div class="intro-section">
  <h1>🤖 Coding with AI - The Realistic Version</h1>
  <p><strong>Learn to work WITH AI, not just copy from it.</strong></p>
  <p>This module teaches you the SPEC framework for better AI prompts, how to debug effectively, and the critical security checks you must perform on ANY AI-generated code.</p>
  <p><em>The golden rule: Understand and verify before you use.</em></p>
</div>

## Why This Matters

AI coding assistants like ChatGPT, Claude, and GitHub Copilot are powerful tools, but they're not magic. They can:
- Generate buggy code
- Introduce security vulnerabilities
- Use outdated patterns
- Hallucinate non-existent functions

**Your job isn't to blindly copy AI code. Your job is to guide AI to write better code and verify what it produces.**

---

<details open>
  <summary>📚 Module Guide - Click to expand</summary>
  <div style="margin-top: 15px;">
    <h4>What You'll Learn:</h4>
    <ol>
      <li><strong>SPEC Framework:</strong> How to write prompts that generate usable code</li>
      <li><strong>Security Checks:</strong> The 5 non-negotiable security validations</li>
      <li><strong>Code Review:</strong> How to verify AI-generated code</li>
      <li><strong>Practical Application:</strong> Test your code with our security analyzer</li>
    </ol>
    
    <h4>How to Use This Module:</h4>
    <ol>
      <li>Read through each section carefully</li>
      <li>Fill out the SPEC framework for your coding task</li>
      <li>Write or paste your code in the submission box</li>
      <li>Run the security check to get feedback</li>
      <li>Review results and improve your code</li>
    </ol>
  </div>
</details>

---

## Part 1: The SPEC Framework

<div class="guide-box">
  <h3>What is SPEC?</h3>
  <p>SPEC is a framework for writing AI prompts that actually produce usable code. Instead of asking "write a login function," you provide:</p>
  <ul>
    <li><strong>S</strong>pecific - Exact functionality needed</li>
    <li><strong>P</strong>latform - Language, version, frameworks</li>
    <li><strong>E</strong>xamples - Input/output samples</li>
    <li><strong>C</strong>onstraints - Security, performance, style requirements</li>
  </ul>
</div>

### Why Generic Prompts Fail

<div class="example-grid">
  <div class="example-card bad">
    <h4>❌ Bad Prompt</h4>
    <pre>"Write a function to validate users"</pre>
    <p><strong>Problems:</strong></p>
    <ul>
      <li>What language?</li>
      <li>What validation rules?</li>
      <li>What should it return?</li>
      <li>Any security requirements?</li>
    </ul>
  </div>

  <div class="example-card good">
    <h4>✅ Good Prompt (SPEC)</h4>
    <pre>Create a Python user validation function.
Platform: Python 3.9, no external libs
Input: dict with username, email, password
Output: (valid: bool, errors: list)
Rules:
- Username: 3-20 chars, alphanumeric
- Email: valid format
- Password: 8+ chars, mixed case + number
Example:
Input: {'username': 'ab', 'email': 'bad'}
Output: (False, ['Username too short', 
                 'Invalid email'])</pre>
  </div>
</div>

---

### Now Try It Yourself

Fill out each section of the SPEC framework below. We'll use this to guide your code development.

<div class="spec-section">
  <h3>📝 S - Specific</h3>
  <div class="description">
    <strong>Describe the EXACT functionality you need.</strong><br>
    Be precise: "validate user registration data" not just "validate users"<br>
    Include: What the function does, what it processes, what it returns
  </div>
  <div class="example-box">
    <strong>Example:</strong><br>
    "Create a function that validates user registration data and returns a tuple containing a boolean (valid/invalid) and a list of all validation errors found."
  </div>
  <textarea id="spec-specific" class="code-editor" rows="3" 
    placeholder="Enter your specific functionality requirement here..."></textarea>
</div>

<div class="spec-section">
  <h3>💻 P - Platform</h3>
  <div class="description">
    <strong>Specify your technical environment.</strong><br>
    Include: Programming language, version, frameworks, libraries (or restrictions)<br>
    Be specific: "Python 3.9" not just "Python"
  </div>
  <div class="example-box">
    <strong>Example:</strong><br>
    "Python 3.9, no external libraries except 're' module for regex"
  </div>
  <input type="text" id="spec-platform" 
    placeholder="e.g., Python 3.9, Flask 2.0, no external libraries">
</div>

<div class="spec-section">
  <h3>📊 E - Examples</h3>
  <div class="description">
    <strong>Provide concrete input/output examples.</strong><br>
    Show: Sample inputs and their expected outputs<br>
    Include: Both valid and invalid cases, edge cases
  </div>
  <div class="example-box">
    <strong>Example:</strong><br>
    Input: {'username': 'ab', 'email': 'notanemail', 'password': 'weak'}<br>
    Output: (False, ['Username too short (min 3)', 'Invalid email format', 'Password needs uppercase'])
  </div>
  <textarea id="spec-examples" class="code-editor" rows="4"
    placeholder="Provide at least 2 input/output examples..."></textarea>
</div>

<div class="spec-section">
  <h3>⚙️ C - Constraints</h3>
  <div class="description">
    <strong>Define all requirements and limitations.</strong><br>
    Specify: Validation rules, security requirements, performance needs, style guidelines<br>
    List: Each constraint on a separate line for clarity
  </div>
  <div class="example-box">
    <strong>Example:</strong><br>
    - Username: 3-20 characters, alphanumeric only<br>
    - Email: must match standard email regex<br>
    - Password: minimum 8 characters, requires uppercase, lowercase, and number<br>
    - Return ALL errors, not just the first one<br>
    - No external API calls
  </div>
  <textarea id="spec-constraints" class="code-editor" rows="4"
    placeholder="List your constraints (one per line)..."></textarea>
</div>

---

## Part 2: The 4-Step Debugging Process

<div class="guide-box">
  <h3>When Things Go Wrong</h3>
  <p>AI can help you debug, but only if you ask the right questions. Use this template every time:</p>
</div>

<div class="info-box">
  <h3>The Debugging Template</h3>
  
  <p><span class="step-number">1</span><strong>Problem:</strong> One sentence - be specific</p>
  <p style="margin-left: 50px; font-style: italic; color: #555;">Example: "Function returns None instead of calculated average"</p>
  
  <p><span class="step-number">2</span><strong>Expected vs Actual:</strong> What should happen vs what is happening</p>
  <p style="margin-left: 50px; font-style: italic; color: #555;">Expected: Returns float average of list<br>Actual: Returns None</p>
  
  <p><span class="step-number">3</span><strong>Minimal Code:</strong> Only the relevant parts</p>
  <p style="margin-left: 50px; font-style: italic; color: #555;">Don't paste 500 lines - just the function and test case</p>
  
  <p><span class="step-number">4</span><strong>What You've Tried:</strong> Show you've made an effort</p>
  <p style="margin-left: 50px; font-style: italic; color: #555;">1. Checked if list is empty<br>2. Added print statements<br>3. Tested with simple data</p>
</div>

**Why this works:** You're showing you've done the work, giving AI enough context, and asking efficiently.

---

## Part 3: Your Code Submission

Now it's time to submit your code for security analysis. Either:
1. Write code based on your SPEC framework above
2. Paste existing code you want to validate

<div class="spec-section">
  <h3>📄 Submit Your Code</h3>
  <div class="description">
    Paste your code below. Our AI security analyzer will check it against the 5 essential security requirements.
  </div>
  <textarea id="code-submission" class="code-editor" rows="18"
    placeholder="def validate_user(data):
    '''Validate user registration data'''
    errors = []
    
    # Username validation
    username = data.get('username', '')
    if len(username) < 3:
        errors.append('Username too short (minimum 3 characters)')
    elif len(username) > 20:
        errors.append('Username too long (maximum 20 characters)')
    elif not username.isalnum():
        errors.append('Username must be alphanumeric')
    
    # Email validation
    email = data.get('email', '')
    if '@' not in email or '.' not in email:
        errors.append('Invalid email format')
    
    # Password validation
    password = data.get('password', '')
    if len(password) < 8:
        errors.append('Password too short (minimum 8 characters)')
    if not any(c.isupper() for c in password):
        errors.append('Password needs at least one uppercase letter')
    if not any(c.islower() for c in password):
        errors.append('Password needs at least one lowercase letter')
    if not any(c.isdigit() for c in password):
        errors.append('Password needs at least one number')
    
    return (len(errors) == 0, errors)"></textarea>
  
  <div style="margin-top: 15px;">
    <button id="check-button" class="button-primary" onclick="checkCodeSecurity()">
      🔍 Run Security Analysis
    </button>
  </div>
</div>

<div id="result" class="security-result"></div>

---

## Part 4: The 5 Essential Security Checks

<div class="danger-box">
  <h2>⚠️ Non-Negotiable Security Requirements</h2>
  <p>Before deploying ANY code (AI-generated or not), verify these 5 critical security areas:</p>
</div>

<ul class="checklist">
  <li><strong>SQL Injection Prevention</strong> - Use parameterized queries, never string concatenation</li>
  <li><strong>Secrets Management</strong> - Environment variables only, never hardcode passwords or API keys</li>
  <li><strong>Input Validation</strong> - Validate and sanitize ALL user input before processing</li>
  <li><strong>XSS Protection</strong> - Escape output, sanitize HTML content</li>
  <li><strong>Authentication/Authorization</strong> - Verify who the user is and what they can access</li>
</ul>

### Real-World Examples

<div class="example-grid">
  <div class="example-card bad">
    <h4>❌ Vulnerable Code</h4>
    <pre># Hardcoded secret
API_KEY = "sk_live_1234567890"

# SQL injection vulnerability
query = f"SELECT * FROM users WHERE name = '{username}'"

# No input validation
email = request.form['email']
send_email(email)

# XSS vulnerability
html = f"&lt;div&gt;{user_comment}&lt;/div&gt;"

# No authentication
@app.route('/admin')
def admin():
    return render_template('admin.html')</pre>
  </div>

  <div class="example-card good">
    <h4>✅ Secure Code</h4>
    <pre># Environment variable
API_KEY = os.getenv("API_KEY")

# Parameterized query
query = "SELECT * FROM users WHERE name = ?"
cursor.execute(query, (username,))

# Input validation
email = request.form['email']
if validate_email(email):
    send_email(email)

# Output escaping
from markupsafe import escape
html = f"&lt;div&gt;{escape(user_comment)}&lt;/div&gt;"

# Authentication required
@app.route('/admin')
@login_required
@admin_required
def admin():
    return render_template('admin.html')</pre>
  </div>
</div>

---

## Part 5: The Trust But Verify Rule

<div class="success-box">
  <h2>✅ Your Checklist for AI-Generated Code</h2>
  <p>For EVERY piece of AI code you consider using:</p>
  
  <h3><span class="step-number">1</span> Understand It</h3>
  <p>Can you explain what every line does? If not, don't use it. AI often generates complex solutions when simple ones would work better.</p>
  
  <h3><span class="step-number">2</span> Test It</h3>
  <p>Write tests for:</p>
  <ul>
    <li>Normal cases (happy path)</li>
    <li>Edge cases (empty input, maximum values, special characters)</li>
    <li>Error conditions (invalid data, missing fields)</li>
  </ul>
  
  <h3><span class="step-number">3</span> Secure It</h3>
  <p>Run through ALL 5 security checks above. Every. Single. Time.</p>
  
  <h3><span class="step-number">4</span> Simplify It</h3>
  <p>AI tends to over-engineer. Remove:</p>
  <ul>
    <li>Unnecessary abstractions</li>
    <li>Unused imports</li>
    <li>Overly complex logic</li>
    <li>Premature optimizations</li>
  </ul>
</div>

---

## Practice Scenarios

<details>
  <summary>📝 Scenario 1: User Login System</summary>
  <div style="margin-top: 15px;">
    <p><strong>Task:</strong> You need to create a login validation function.</p>
    <p><strong>Write a SPEC prompt that would generate secure, working code.</strong></p>
    <p>Consider:</p>
    <ul>
      <li>What inputs does the function need?</li>
      <li>What validation should occur?</li>
      <li>How should errors be handled?</li>
      <li>What security measures are essential?</li>
    </ul>
  </div>
</details>

<details>
  <summary>📝 Scenario 2: API Endpoint Security</summary>
  <div style="margin-top: 15px;">
    <p><strong>Situation:</strong> You have an API endpoint that accepts user data.</p>
    <pre style="background: #2d2d2d; color: #f8f8f2; padding: 15px; border-radius: 5px;">@app.route('/api/user', methods=['POST'])
def create_user():
    data = request.json
    query = f"INSERT INTO users (name, email) VALUES ('{data['name']}', '{data['email']}')"
    db.execute(query)
    return {'status': 'success'}</pre>
    <p><strong>Question:</strong> Identify at least 3 security vulnerabilities in this code.</p>
    <p><strong>Task:</strong> Rewrite it securely.</p>
  </div>
</details>

<details>
  <summary>📝 Scenario 3: Code Review Challenge</summary>
  <div style="margin-top: 15px;">
    <p><strong>You receive this code from AI:</strong></p>
    <pre style="background: #2d2d2d; color: #f8f8f2; padding: 15px; border-radius: 5px;">def process_payment(amount, card_number):
    # Store card for future use
    with open('cards.txt', 'a') as f:
        f.write(f"{card_number}\n")
    
    # Process payment
    api_key = "pk_live_123456789"
    response = requests.post(
        "https://api.payment.com/charge",
        data={"amount": amount, "card": card_number},
        headers={"Authorization": api_key}
    )
    return response.json()</pre>
    <p><strong>Apply the "Trust But Verify" rule:</strong></p>
    <ol>
      <li>What does each line do? (Understand it)</li>
      <li>What test cases would you write? (Test it)</li>
      <li>What security issues exist? (Secure it)</li>
      <li>How can this be simplified? (Simplify it)</li>
    </ol>
  </div>
</details>

---

## Quick Security Audit Prompt

<div class="info-box">
  <h3>🔍 Security Review Template</h3>
  <p>When you want AI to review your code for vulnerabilities, use this prompt:</p>
  <pre style="background: #2d2d2d; color: #f8f8f2; padding: 15px; border-radius: 5px; overflow-x: auto;">"Perform a security audit on this code. Check for:
1. SQL injection vulnerabilities
2. XSS (cross-site scripting) risks
3. Hardcoded secrets or credentials
4. Missing input validation
5. Authentication/authorization issues
6. Common OWASP Top 10 problems

For each issue found:
- Explain WHAT the vulnerability is
- Explain WHY it's dangerous
- Provide a SPECIFIC fix

[paste your code here]"</pre>
</div>

---

## Summary

<div class="success-box">
  <h2>Key Takeaways</h2>
  <ul>
    <li>✅ Use the <strong>SPEC framework</strong> for better AI prompts</li>
    <li>✅ Follow the <strong>4-step debugging template</strong> when asking for help</li>
    <li>✅ ALWAYS check the <strong>5 essential security requirements</strong></li>
    <li>✅ Apply <strong>Trust But Verify</strong>: understand, test, secure, simplify</li>
    <li>✅ Never deploy code you don't understand</li>
    <li>✅ AI is a tool, not a replacement for thinking</li>
  </ul>
</div>

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
    resultDiv.innerHTML = '<p style="font-size: 18px;">🔍 Analyzing code security... This may take a moment.</p>';
    button.disabled = true;
    button.textContent = '⏳ Analyzing...';
    
    // Build comprehensive prompt for security analysis
    const prompt = `You are a senior security engineer reviewing code. Analyze this code for security vulnerabilities.

CHECK THESE 5 CRITICAL AREAS:
1. SQL Injection - Are queries parameterized? Any string concatenation in SQL?
2. Hardcoded Secrets - Any passwords, API keys, tokens in the code?
3. Input Validation - Is user input validated before use?
4. XSS Protection - Is output escaped? Any dangerous HTML rendering?
5. Authentication/Authorization - Are access controls implemented?

Code to analyze:
\`\`\`
${code}
\`\`\`

Context:
${specContext}

Respond in this EXACT JSON format (no extra text):
{
  "score": <number 0-100>,
  "passed": <boolean true if score >= 80>,
  "vulnerabilities": [<array of specific security issues found - be detailed>],
  "feedback": "<2-3 sentence overall security assessment>",
  "recommendations": [<array of specific fixes - be actionable>]
}

Be thorough and specific. For each vulnerability, explain what it is and how to fix it.`;

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
            throw new Error(`API request failed: ${response.status}`);
        }
        
        const result = await response.json();
        
        if (result.error) {
            throw new Error(result.error);
        }
        
        if (!result.text) {
            throw new Error('No response from AI - the API may be down');
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
                    vulnerabilities: ['AI response not in expected JSON format'],
                    feedback: result.text.substring(0, 500),
                    recommendations: ['Review the detailed feedback above', 'Try running the security check again']
                };
            }
        } catch (e) {
            console.error('JSON parse error:', e);
            // Create a structured response from the text
            analysis = {
                score: 60,
                passed: false,
                vulnerabilities: ['Could not parse AI response into structured format'],
                feedback: result.text.substring(0, 500) + '...',
                recommendations: ['Review the AI feedback above', 'Consider manual security review']
            };
        }
        
        displayResults(analysis);
        
    } catch (error) {
        console.error('Security check error:', error);
        resultDiv.className = 'security-result fail';
        resultDiv.innerHTML = `
            <h3 style="margin-top: 0;">❌ Analysis Error</h3>
            <p><strong>Failed to analyze code:</strong> ${error.message}</p>
            <div style="margin-top: 15px; padding: 15px; background: rgba(255,255,255,0.7); border-radius: 5px;">
                <p><strong>Possible causes:</strong></p>
                <ul>
                    <li>Backend server is not running</li>
                    <li>Gemini API is unavailable</li>
                    <li>Network connection issue</li>
                </ul>
                <p><strong>Manual checklist - verify these yourself:</strong></p>
                <ol>
                    <li>Are SQL queries parameterized?</li>
                    <li>Are there any hardcoded passwords or API keys?</li>
                    <li>Is all user input validated?</li>
                    <li>Is output properly escaped?</li>
                    <li>Are authentication/authorization checks in place?</li>
                </ol>
            </div>
        `;
    } finally {
        button.disabled = false;
        button.textContent = '🔍 Run Security Analysis';
    }
}

function displayResults(analysis) {
    const resultDiv = document.getElementById('result');
    const passed = analysis.passed || analysis.score >= 80;
    
    resultDiv.className = passed ? 'security-result pass' : 'security-result fail';
    resultDiv.style.display = 'block';
    
    let html = `
        <div class="score-display">
            ${passed ? '✅' : '❌'} Security Score: ${analysis.score}/100
        </div>
        <p style="font-size: 18px; font-weight: bold;">${passed ? 'PASSED - Code looks secure!' : 'NEEDS IMPROVEMENT - Security issues found'}</p>
        <p style="font-size: 16px; line-height: 1.6;">${analysis.feedback}</p>
    `;
    
    if (analysis.vulnerabilities && analysis.vulnerabilities.length > 0) {
        html += `
            <div style="margin-top: 20px;">
                <h4 style="margin-bottom: 10px; font-size: 18px;">🔍 Security Issues Found:</h4>
                <ul class="vulnerability-list">
                    ${analysis.vulnerabilities.map(v => `<li style="font-size: 15px;">${v}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    if (analysis.recommendations && analysis.recommendations.length > 0) {
        html += `
            <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.7); border-radius: 5px;">
                <h4 style="margin-top: 0; margin-bottom: 10px; font-size: 18px;">💡 How to Fix:</h4>
                <ul class="vulnerability-list">
                    ${analysis.recommendations.map(r => `<li style="font-size: 15px;">${r}</li>`).join('')}
                </ul>
            </div>
        `;
    } else if (passed) {
        html += `
            <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.7); border-radius: 5px;">
                <h4 style="margin-top: 0;">✨ Great work!</h4>
                <p>Your code passed the security checks. Remember to:</p>
                <ul>
                    <li>Keep dependencies updated</li>
                    <li>Review code regularly</li>
                    <li>Test with different inputs</li>
                    <li>Follow the Trust But Verify rule</li>
                </ul>
            </div>
        `;
    }
    
    resultDiv.innerHTML = html;
    
    // Scroll to results
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
</script>

{%- include tailwind/cs-portfolio-quest-lessons_info.html -%}