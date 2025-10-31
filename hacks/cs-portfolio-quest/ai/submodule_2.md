---
layout: cs-portfolio-lesson
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

---

## **MODULE 2: Code Generation & Debugging**
*Generate better code with SPEC, debug efficiently, and stay secure*

### Comic Strip 1: "The SPEC Framework"
**Read:**
- Vague prompts → Vague code
- **SPEC Framework** for code generation:
  - **S**pecific: "Validate user registration data" not "validate users"
  - **P**latform: "Python 3.11, no external libraries except 're' for regex"
  - **E**xamples: 
    - Input: `{'username': 'ab', 'email': 'invalid', 'password': 'weak'}`
    - Output: `(False, ['Username too short (min 3)', 'Invalid email', 'Password needs uppercase'])`
  - **C**onstraints:
    - Username: 3-20 chars, alphanumeric only
    - Email: standard regex
    - Password: 8+ chars, uppercase + lowercase + number
    - Return ALL errors, not just first one
- Side-by-side comparison:
  - ❌ Bad: "Write a login function"
  - ✅ Good: [Shows full SPEC prompt]

**Interact:**
- **SPEC Builder Interactive Form**:
  - 4 expandable sections (S, P, E, C)
  - As students type, "Completeness Score" increases: 0% → 25% → 50% → 75% → 100%
  - When complete, generates copy-pasteable prompt
  - **Examples toggle**: Click to see good/bad examples for each section
- **SPEC Mad Libs**: Alternative simpler version
  - "Create a [Python/JavaScript/Java] [function/class/component] that [does what exactly]..."
  - Fill in blanks to complete prompt

**Submit:**
"Use the SPEC framework to write a prompt for code you need. Fill out all 4 sections: Specific, Platform, Examples, Constraints."

---

### Comic Strip 2: "Debug Like You Mean It"
**Read:**
- AI can help debug, but only if you give it what it needs
- **4-Step Debugging Template**:
  1. **Problem**: One specific sentence (not "it's broken")
     - Example: "Function returns None instead of calculated average"
  2. **Expected vs Actual**: 
     - Expected: Returns float average of list
     - Actual: Returns None
  3. **Minimal Code**: Only relevant parts (not 500 lines - just the function + test case)
  4. **What You Tried**: 
     - Checked if list is empty ✓
     - Added print statements ✓
     - Tested with simple data ✓
- Why this works: Shows you've done the thinking, gives AI enough context, asks efficiently

**Interact:**
- **Debug Template Builder**:
  - Interactive form with 4 fields matching the template
  - Shows bad example vs good example side-by-side
  - As they fill it out, gives tips: "Good - you included the error message!" or "Add: What have you tried?"
- **Debug Scenario Challenge**:
  - Present broken code with vague error: "TypeError on line 42"
  - Student must:
    1. Identify what's actually wrong
    2. List what information is missing
    3. Write proper debug prompt
  - Multiple choice + short answer combo

**Submit:**
"Use the 4-step template to debug actual code you're stuck on. Fill out all 4 sections. (If you don't have buggy code, use our example scenario.)"

---

### Comic Strip 3: "Security: The 5 Non-Negotiables"
**Read:**
- AI generates code fast. But it also generates vulnerabilities.
- **The 5 Security Checks** (run these EVERY TIME):
  1. **SQL Injection**: Use parameterized queries, never f-strings in SQL
     - ❌ `f"SELECT * FROM users WHERE name = '{username}'"`
     - ✅ `cursor.execute("SELECT * FROM users WHERE name = ?", (username,))`
  2. **Hardcoded Secrets**: Environment variables only
     - ❌ `API_KEY = "sk_live_1234"`
     - ✅ `API_KEY = os.getenv("API_KEY")`
  3. **Input Validation**: Never trust user input
     - ❌ `email = request.form['email']` then immediately use it
     - ✅ `email = request.form['email']` then `if validate_email(email):`
  4. **XSS Protection**: Escape output, sanitize HTML
     - ❌ `f"<div>{user_comment}</div>"`
     - ✅ `f"<div>{escape(user_comment)}</div>"`
  5. **Auth/Authorization**: Verify who can access what
     - ❌ `@app.route('/admin')` with no checks
     - ✅ `@app.route('/admin')` + `@login_required` + `@admin_required`
- **Trust But Verify Rule**: Understand it → Test it → Secure it → Simplify it

**Interact:**
- **Security Bug Hunter Game**:
  - Show code snippet with 3-5 hidden vulnerabilities
  - Student clicks on lines they think are vulnerable
  - Instant feedback: "✓ Found SQL injection on line 12!" or "Line 8 is safe"
  - Scoreboard: "Found 4/5 vulnerabilities - 80% Security Score"
  - Multiple rounds with different code examples
- **Security Checklist Widget**:
  - Interactive checklist where they paste code and check off each requirement:
    - ☐ No SQL injection (parameterized queries)
    - ☐ No hardcoded secrets
    - ☐ Input validation present
    - ☐ Output escaped
    - ☐ Auth checks in place

**Submit:**
"Paste code (yours or AI-generated). Run through the 5-point security checklist. List any vulnerabilities you found and how to fix them."