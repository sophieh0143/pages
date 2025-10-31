---
layout: cs-portfolio-lesson
title: "Resume & Interview Prep"
description: "Learn to rewrite resume bullets with metrics using STAR format and prepare for the three most common interview questions by recording and analyzing your responses."
permalink: /cs-portfolio-quest/ai/submodule_1/
parent: "AI Usage"
team: "Thinkers"
submodule: 1
categories: [CSP, Submodule, AIUsage]
tags: [ai, submodule, thinkers]
author: "Thinkers Team"
date: 2025-10-21
---

## **MODULE 1: Mastering AI Prompts**
*Learn to write prompts that actually work and iterate until you get what you need*

### Comic Strip 1: "The Prompt Formula"
**Read:**
- Bad prompt: "Help me with my code" → vague, useless response
- Good prompt formula: **Context + Problem + What You Tried + What You Need**
- Real example:
  - ❌ "My API doesn't work"
  - ✅ "I'm getting a 404 error in my Flask app when trying to POST to /api/login. The route exists and works in Postman but fails from my React frontend. Here's the fetch call: [code]. Here's my Flask route: [code]. What's the likely issue?"

**Interact:** 
- **Prompt Builder Tool**: Interactive form where students build a prompt:
  - Dropdown: "I'm working with [Flask/React/Python/Node/etc]"
  - Fill-in: "I'm getting this error: _____"
  - Checkboxes: "I've tried: □ Checking docs □ Testing in isolation □ Adding console.logs"
  - Fill-in: "I need: _____"
- Shows real-time preview of complete prompt
- Color-coded feedback: Green = "Good! Added context", Red = "Missing: what you tried"

**Submit:**
Text box: "Write a prompt for a real coding problem you're facing right now. Include all 4 parts: Context + Problem + Tried + Need."

---

### Comic Strip 2: "Iterate Don't Quit"
**Read:**
- Most people give up after one bad response. Winners iterate 3-5 times.
- Example conversation:
  - **Round 1**: "Explain JWT authentication" → AI gives generic overview
  - **Round 2**: "Show me JWT auth for React + Flask that persists across page refreshes" → AI gives better code
  - **Round 3**: "This expires in 15 min. How do I implement refresh tokens to keep users logged in?" → AI gives exactly what you need
- Key lesson: Each prompt builds on the previous response. Add specifics based on what was missing.

**Interact:**
- **Iteration Practice Game**: 
  - Students see a mediocre AI response (e.g., generic database code)
  - They write 2-3 follow-up prompts to narrow it down
  - System scores based on: "Did you add specifics? Reference the previous response? State your actual need?"
  - Shows "Prompt Quality: 40% → 75% → 95%" as they improve
  - Example scenarios:
    - "AI gave generic CSS, but you need Tailwind-specific for dark mode"
    - "AI gave React code without hooks, but you need useState/useEffect"

**Submit:**
"Take the AI response from your Comic 1 prompt. Write a follow-up prompt that would get you closer to what you actually need. Explain what you added."

---

### Comic Strip 3: "Real Project Breakdown"
**Read:**
- **Case study** from your actual experience:
  - **Problem**: Overcomplicated Flask + Spring backend, messy login system
  - **Phase 1**: "Explain how this login system works [paste code]" → AI mapped the data flow
  - **Phase 2**: "How do I consolidate into Flask-only? What Spring functionality needs to be replicated?" → Got migration plan
  - **Phase 3**: "Implement session-based auth in Flask with these requirements: [list]" → Got working code
  - **Phase 4**: "React isn't maintaining Flask session. Fetch calls work first time but lose auth after. Here's my setup: [code]" → AI found CORS + credentials issue
- **Time saved**: 2 weeks of reading docs → 3 days with AI
- **Key lesson**: Break complex problems into phases. Ask AI to explain before you start changing things.

**Interact:**
- **Project Simplifier**:
  - Student describes their current project (or uses example)
  - AI analyzes and suggests: "You have 3 dependencies when you need 1. Here's the simplification plan."
  - OR: **Phase Planner** - Interactive flowchart where students drag-drop steps of tackling a refactor:
    - "Understand current system" → "Plan migration" → "Implement changes" → "Debug issues"
  - Shows: "Phase 1: Ask AI these 3 questions..." "Phase 2: Use these prompts..."

**Submit:**
"Describe a project/feature that feels overcomplicated. Break it into 3 phases. For each phase, write one AI prompt you'd use."