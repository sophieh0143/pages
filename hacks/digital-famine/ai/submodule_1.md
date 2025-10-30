---
layout: post
title: "Types of AI"
description: "Going over the three types of AI"
permalink: /digital-famine/ai/submodule_1/
breadcrumb: true
microblog: true
parent: "AI Usage"
team: "Debuggers"
submodule: 1
categories: [CSP, Submodule, AIUsage]
tags: [ai, submodule, Debuggers]
author: "Debuggers Team - Laya Balaji, Akshara Shankar"
date: 2025-10-21
---

# Types of AI

AI has become one of the most influential inventions of our generation. It helps run the apps we use, the websites we visit, and the tools that make work and commmunication faster. There are three main types of AI: **Narrow AI**, **General AI**, **Super AI**. Each one represents a different level of power and ability.

---

## Narrow AI

Also known as **Weak AI**, Narrow AI is the kind of AI we use today. It is built to do one specific task very well but cannot do anything outside of that task.

This includes:
- **Siri** or **Alexa** understand voice commands
- **Chess-playing programs** beat professional players by finding optimal moves
- **Spam filters** sort unwanted emails out of the inbox

Narrow AI can perform certain jobs better than humans, but it doesn't actually understand what it's doing. It follows data and instructions, not real thinking or emotions.

---

## General AI

**General AI**, sometimes called **Strong AI**, is a system that could think, learn, and adapt like humans. It could understand information, solve multiple kinds of problems, and apply their new knowldge to other situations.

General AI would be able to:
- Make judgements and decisions
- Learn from experiences
- Adapt to new environments
- Understand human emotions and behaviors

Although this type of AI doesn't exist yet, General AI has the capability to change almost every part of life. However, it also raises questions about safety and control.

---

## Super AI

**Super AI** would be even more powerful than human intelligence. It would be smarter, faster, and more creative than any person, able to solve problems that we couldn't even imagine.

Super AI could:
- Find answers to complex global challenges
- Invent new technologies quickly
- Make independent decisions

While the idea sounds cool, it also brings serious risks. If a Super AI acted on its own goals instead of human values, it could become dangerous. That's why researchers say we need to be very careful about how we create and control it.

## Conclusion

From today’s **Narrow AI** to the future idea of **Super AI**, each stage shows how technology can grown and change. Understanding these types helps us see where AI is now and how it might shape the future.
<<<<<<< HEAD

=======
>>>>>>> f6ec4208 (changes)

javac AIQuiz.java
Java AIQuiz
## 🧠 Types of AI Quiz

<div id="quiz-container">
  <div class="question-block" id="question1">
    <h3>Question 1: A company develops an AI that can diagnose disease using medical images. It can outperform human doctors in this one task, but cannot drive a car or play chess. Which type of AI is this?</h3>
    <div class="options">
      <button class="option-btn" onclick="checkAnswer(1, 'A', false)">A) Super AI</button>
      <button class="option-btn" onclick="checkAnswer(1, 'B', false)">B) General AI</button>
      <button class="option-btn" onclick="checkAnswer(1, 'C', true)">C) Narrow AI</button>
    </div>
    <div id="feedback1" class="feedback"></div>
  </div>

  <div class="question-block" id="question2">
    <h3>Question 2: An AI system that is vastly smarter than humans and capable of improving itself, creating new technologies, and making decisions beyond human understanding. Which type of AI is this?</h3>
    <div class="options">
      <button class="option-btn" onclick="checkAnswer(2, 'A', true)">A) Super AI</button>
      <button class="option-btn" onclick="checkAnswer(2, 'B', false)">B) General AI</button>
      <button class="option-btn" onclick="checkAnswer(2, 'C', false)">C) Narrow AI</button>
    </div>
    <div id="feedback2" class="feedback"></div>
  </div>

  <div class="question-block" id="question3">
    <h3>Question 3: Researchers create an AI that can reason, plan, solve unfamiliar problems, and learn any intellectual task a human. It matches human intelligence across all areas. Which type of AI is this?</h3>
    <div class="options">
      <button class="option-btn" onclick="checkAnswer(3, 'A', false)">A) Super AI</button>
      <button class="option-btn" onclick="checkAnswer(3, 'B', true)">B) General AI</button>
      <button class="option-btn" onclick="checkAnswer(3, 'C', false)">C) Narrow AI</button>
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
  color: #333;
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
  transition: all 0.3s ease;
}

.option-btn:hover {
  background-color: #d0e8f2;
  transform: translateX(5px);
}

.option-btn.correct {
  background-color: #d4edda;
  border-color: #28a745;
}

.option-btn.incorrect {
  background-color: #f8d7da;
  border-color: #dc3545;
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
// Total number of questions in this specific quiz
const totalQuestions = 3;

function checkAnswer(questionNum, selectedOption, isCorrect) {
  const feedbackDiv = document.getElementById('feedback' + questionNum);
  const buttons = document.querySelectorAll('#question' + questionNum + ' .option-btn');
  
  // Disable all buttons for this question
  buttons.forEach(btn => btn.disabled = true);
  
  // Mark the selected button
  // Use event.target which is the button that was clicked
  const clickedButton = event.target;
  clickedButton.classList.add(isCorrect ? 'correct' : 'incorrect');
  
  // Show feedback
  if (isCorrect) {
    feedbackDiv.textContent = '✅ Correct! Great job!';
    feedbackDiv.className = 'feedback correct';
    score++;
  } else {
    // Also highlight the correct answer for visual feedback
    buttons.forEach(btn => {
        // 'A', 'B', 'C' are hardcoded in the question buttons. We need to find the correct one.
        // For a more robust solution, you would need to store the correct answer (e.g., 'C' for Q1)
        // or ensure the `isCorrect` value in the onclick maps correctly.
        // Based on the provided question structure: Q1:C, Q2:A, Q3:B
        const correctOptions = { 1: 'C', 2: 'A', 3: 'B' };
        if (btn.textContent.startsWith(correctOptions[questionNum] + ')')) {
            btn.classList.add('correct');
        }
    });
    feedbackDiv.textContent = '❌ Incorrect. The correct answer is highlighted.';
    feedbackDiv.className = 'feedback incorrect';
  }
  
  questionsAnswered++;
  
  // Show final score after all questions answered
  if (questionsAnswered === totalQuestions) {
    setTimeout(() => {
      document.querySelectorAll('.question-block').forEach(block => block.style.display = 'none');
      document.getElementById('score-container').style.display = 'block';
      document.getElementById('final-score').textContent = `You scored ${score} out of ${totalQuestions}!`;
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