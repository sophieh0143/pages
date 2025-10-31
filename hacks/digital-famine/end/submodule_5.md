---
layout: post
title: "Submodule 5 - Rocket Landing Challenge"
description: "Task 5 of the End Quest - Navigate the rocket to a safe landing"
permalink: /digital-famine/end/submodule_5/
parent: "End Quest"
team: "CodeMaxxers"
submodule: 5
categories: [CSP, Submodule, End]
tags: [end, submodule, codemaxxers, minigame, rocket]
author: "CodeMaxxers Team"
date: 2025-10-24
---

# Submodule 5: Rocket Landing Challenge

## Mission Briefing
Your rocket is approaching the landing pad! Execute the correct key sequences to ensure a safe touchdown. As you descend, the navigation system will require increasingly complex input sequences.

<div id="game-container" style="max-width: 800px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
  
  <div id="game-header" style="text-align: center; color: white; margin-bottom: 30px;">
    <h2 style="margin: 10px 0; font-family: 'Courier New', monospace;">🚀 ROCKET LANDING SYSTEM 🚀</h2>
    <div id="altitude" style="font-size: 24px; color: #00ff00; margin: 10px;">Altitude: <span id="altitudeValue">10000</span>m</div>
  </div>

  <div id="rocket-visual" style="text-align: center; margin: 30px 0; font-size: 60px;">
    🚀
  </div>

  <div id="game-area" style="background: rgba(0,0,0,0.5); padding: 30px; border-radius: 10px; min-height: 200px;">
    
    <div id="start-screen" style="text-align: center; color: white;">
      <h3>Ready for Landing Sequence?</h3>
      <p>You'll need to input key sequences to guide the rocket safely to the ground.</p>
      <p>⚠️ Three failed attempts will restart the mission!</p>
      <button id="startBtn" style="background: #00ff00; color: black; padding: 15px 30px; font-size: 18px; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; margin-top: 20px;">
        START LANDING SEQUENCE
      </button>
    </div>

    <div id="game-screen" style="display: none; text-align: center; color: white;">
      <div id="level-indicator" style="margin-bottom: 20px; font-size: 20px;">
        Level: <span id="currentLevel">1</span> / 4
      </div>
      
      <div id="sequence-display" style="margin: 30px 0;">
        <h3>Memorize this sequence:</h3>
        <div id="sequence" style="font-size: 48px; letter-spacing: 20px; color: #ffff00; margin: 20px 0; font-family: monospace; min-height: 60px;"></div>
      </div>

      <div id="input-area" style="display: none;">
        <h3>Enter the sequence:</h3>
        <div id="player-input" style="font-size: 36px; letter-spacing: 15px; color: #00ff00; margin: 20px 0; font-family: monospace; min-height: 50px; border: 2px solid #00ff00; padding: 10px; border-radius: 5px; background: rgba(0,0,0,0.7);"></div>
        <div id="timer" style="margin-top: 20px; font-size: 18px;">
          Time remaining: <span id="timeValue">10</span>s
        </div>
      </div>

      <div id="feedback" style="margin-top: 20px; font-size: 24px; font-weight: bold; min-height: 30px;"></div>
      
      <div id="attempts" style="margin-top: 20px; color: #ff6666;">
        Failed Attempts: <span id="failCount">0</span> / 3
      </div>
    </div>

    <div id="win-screen" style="display: none; text-align: center; color: white;">
      <h2 style="color: #00ff00;">🎉 SUCCESSFUL LANDING! 🎉</h2>
      <div style="font-size: 100px; margin: 30px 0;">🚀✅</div>
      <p style="font-size: 20px;">The rocket has touched down safely!</p>
      <p>You have made it back to Earth, and you will now restore the lost knowledge! Great work!/p>
    </div>

    <div id="game-over-screen" style="display: none; text-align: center; color: white;">
      <h2 style="color: #ff6666;">💥 MISSION FAILED 💥</h2>
      <div style="font-size: 100px; margin: 30px 0;">💥</div>
      <p style="font-size: 20px;">The rocket crashed!</p>
      <p>Too many failed attempts. Try again!</p>
      <button id="restartBtn" style="background: #ff6666; color: white; padding: 15px 30px; font-size: 18px; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; margin-top: 20px;">
        RESTART MISSION
      </button>
    </div>

  </div>

  <div id="instructions" style="margin-top: 30px; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 10px; color: white;">
    <h4>Instructions:</h4>
    <ul style="text-align: left;">
      <li>Watch the key sequence carefully</li>
      <li>Press the keys in the exact order shown</li>
      <li>You have limited time to input each sequence</li>
      <li>Complete all 4 levels to land safely</li>
      <li>3 failures = mission restart</li>
    </ul>
  </div>

</div>

<script>
(function() {
  // Game state
  let gameState = {
    currentLevel: 1,
    failedAttempts: 0,
    currentSequence: [],
    playerInput: [],
    isPlaying: false,
    isInputPhase: false,
    timer: null,
    altitude: 10000
  };

  // Configuration
  const levels = [
    { sequenceLength: 3, timeLimit: 10, altitude: 7500 },
    { sequenceLength: 4, timeLimit: 12, altitude: 5000 },
    { sequenceLength: 5, timeLimit: 15, altitude: 2500 },
    { sequenceLength: 6, timeLimit: 18, altitude: 500 }
  ];

const possibleKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  // DOM elements
  const elements = {
    startScreen: document.getElementById('start-screen'),
    gameScreen: document.getElementById('game-screen'),
    winScreen: document.getElementById('win-screen'),
    gameOverScreen: document.getElementById('game-over-screen'),
    startBtn: document.getElementById('startBtn'),
    playAgainBtn: document.getElementById('playAgainBtn'),
    restartBtn: document.getElementById('restartBtn'),
    sequenceDisplay: document.getElementById('sequence'),
    playerInputDisplay: document.getElementById('player-input'),
    feedback: document.getElementById('feedback'),
    currentLevel: document.getElementById('currentLevel'),
    failCount: document.getElementById('failCount'),
    timeValue: document.getElementById('timeValue'),
    inputArea: document.getElementById('input-area'),
    altitudeValue: document.getElementById('altitudeValue'),
    rocketVisual: document.getElementById('rocket-visual')
  };

  // Generate random sequence
  function generateSequence(length) {
    const sequence = [];
    for (let i = 0; i < length; i++) {
      sequence.push(possibleKeys[Math.floor(Math.random() * possibleKeys.length)]);
    }
    return sequence;
  }

  // Display sequence to memorize
  function displaySequence() {
    const level = levels[gameState.currentLevel - 1];
    gameState.currentSequence = generateSequence(level.sequenceLength);
    gameState.playerInput = [];
    
    elements.sequenceDisplay.textContent = gameState.currentSequence.join(' ');
    elements.inputArea.style.display = 'none';
    elements.feedback.textContent = 'Memorize the sequence!';
    elements.feedback.style.color = '#ffff00';
    
    // Show sequence for 0.5 seconds + 0.5 seconds per key
    const displayTime = 0.5 + (level.sequenceLength * 500);
    
    setTimeout(() => {
      elements.sequenceDisplay.textContent = '?????'.slice(0, level.sequenceLength).split('').join(' ');
      elements.inputArea.style.display = 'block';
      elements.playerInputDisplay.textContent = '';
      elements.feedback.textContent = 'Enter the sequence now!';
      elements.feedback.style.color = '#00ff00';
      gameState.isInputPhase = true;
      startTimer(level.timeLimit);
    }, displayTime);
  }

  // Start countdown timer
  function startTimer(seconds) {
    let timeLeft = seconds;
    elements.timeValue.textContent = timeLeft;
    
    clearInterval(gameState.timer);
    gameState.timer = setInterval(() => {
      timeLeft--;
      elements.timeValue.textContent = timeLeft;
      
      if (timeLeft <= 3) {
        elements.timeValue.style.color = '#ff6666';
      } else {
        elements.timeValue.style.color = '#00ff00';
      }
      
      if (timeLeft <= 0) {
        clearInterval(gameState.timer);
        handleFailure();
      }
    }, 1000);
  }

  // Handle keyboard input
  function handleKeyPress(e) {
    if (!gameState.isInputPhase) return;
    
    const key = e.key.toUpperCase();
    if (!possibleKeys.includes(key)) return;
    
    gameState.playerInput.push(key);
    elements.playerInputDisplay.textContent = gameState.playerInput.join(' ');
    
    // Check if sequence is complete
    if (gameState.playerInput.length === gameState.currentSequence.length) {
      clearInterval(gameState.timer);
      checkSequence();
    }
  }

  // Check if player input matches sequence
  function checkSequence() {
    gameState.isInputPhase = false;
    
    const isCorrect = gameState.playerInput.join('') === gameState.currentSequence.join('');
    
    if (isCorrect) {
      handleSuccess();
    } else {
      handleFailure();
    }
  }

  // Handle successful input
  function handleSuccess() {
    elements.feedback.textContent = '✅ Correct! Adjusting thrusters...';
    elements.feedback.style.color = '#00ff00';
    
    // Update altitude
    const level = levels[gameState.currentLevel - 1];
    gameState.altitude = level.altitude;
    elements.altitudeValue.textContent = gameState.altitude;
    
    // Animate rocket
    elements.rocketVisual.style.transform = 'translateY(10px)';
    setTimeout(() => {
      elements.rocketVisual.style.transform = 'translateY(0)';
    }, 500);
    
    setTimeout(() => {
      if (gameState.currentLevel >= 4) {
        // Game won!
        showWinScreen();
      } else {
        // Next level
        gameState.currentLevel++;
        elements.currentLevel.textContent = gameState.currentLevel;
        elements.feedback.textContent = 'Preparing next sequence...';
        
        setTimeout(() => {
          displaySequence();
        }, 2000);
      }
    }, 3000);
  }

  // Handle failed input
  function handleFailure() {
    gameState.isInputPhase = false;
    gameState.failedAttempts++;
    elements.failCount.textContent = gameState.failedAttempts;
    
    elements.feedback.textContent = '❌ Incorrect or too slow! Stabilizing...';
    elements.feedback.style.color = '#ff6666';
    
    // Shake rocket
    elements.rocketVisual.style.animation = 'shake 0.5s';
    setTimeout(() => {
      elements.rocketVisual.style.animation = '';
    }, 500);
    
    if (gameState.failedAttempts >= 3) {
      setTimeout(() => {
        showGameOverScreen();
      }, 2000);
    } else {
      setTimeout(() => {
        elements.feedback.textContent = 'Try again...';
        setTimeout(() => {
          displaySequence();
        }, 2000);
      }, 3000);
    }
  }

  // Show win screen
  function showWinScreen() {
    gameState.altitude = 0;
    elements.altitudeValue.textContent = gameState.altitude;
    elements.gameScreen.style.display = 'none';
    elements.winScreen.style.display = 'block';
  }

  // Show game over screen
  function showGameOverScreen() {
    elements.gameScreen.style.display = 'none';
    elements.gameOverScreen.style.display = 'block';
  }

  // Start game
  function startGame() {
    gameState = {
      currentLevel: 1,
      failedAttempts: 0,
      currentSequence: [],
      playerInput: [],
      isPlaying: true,
      isInputPhase: false,
      timer: null,
      altitude: 10000
    };
    
    elements.altitudeValue.textContent = gameState.altitude;
    elements.currentLevel.textContent = gameState.currentLevel;
    elements.failCount.textContent = gameState.failedAttempts;
    elements.startScreen.style.display = 'none';
    elements.winScreen.style.display = 'none';
    elements.gameOverScreen.style.display = 'none';
    elements.gameScreen.style.display = 'block';
    
    setTimeout(() => {
      displaySequence();
    }, 1000);
  }

  // Event listeners
  elements.startBtn.addEventListener('click', startGame);
  elements.playAgainBtn.addEventListener('click', startGame);
  elements.restartBtn.addEventListener('click', startGame);
  document.addEventListener('keydown', handleKeyPress);

  // Add shake animation CSS
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-10px) rotate(-5deg); }
      75% { transform: translateX(10px) rotate(5deg); }
    }
  `;
  document.head.appendChild(style);
})();
</script>

*This minigame was created as part of the End Quest series by the CodeMaxxers team.*