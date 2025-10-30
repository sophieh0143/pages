---
layout: cs-portfolio-lesson
title: "Interactive Student Analytics Dashboard"
description: "Advanced analytics dashboard with CSV upload, AI-powered insights, and comprehensive student grading across all lessons"
permalink: /cs-portfolio-quest/analytics/dashboard/
parent: "Analytics/Admin"
team: "Curators"
submodule: 4
categories: [CSP, Submodule, Analytics/Admin]
tags: [analytics, dashboard, AI, grading, curators]
author: "Curators Team"
date: 2025-10-30
---

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .dashboard-wrapper {
    background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
    min-height: 100vh;
    padding: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    color: #ffffff;
  }

  .dashboard-header {
    text-align: center;
    margin-bottom: 3rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .dashboard-title {
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }

  .dashboard-subtitle {
    font-size: 1.2rem;
    color: #a0aec0;
  }

  .upload-section {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    border: 2px dashed rgba(102, 126, 234, 0.5);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .upload-section::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #667eea, #764ba2, #667eea);
    border-radius: 20px;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }

  .upload-section:hover::before {
    opacity: 0.3;
  }

  .upload-section:hover {
    border-color: rgba(102, 126, 234, 0.8);
    transform: translateY(-2px);
  }

  .upload-area {
    text-align: center;
    padding: 2rem;
    cursor: pointer;
  }

  .upload-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    animation: float 3s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  .file-input {
    display: none;
  }

  .btn {
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    display: inline-block;
    text-decoration: none;
  }

  .btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }

  .btn-secondary {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(245, 87, 108, 0.4);
  }

  .btn-secondary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(245, 87, 108, 0.6);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .stat-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .stat-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
  }

  .stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  }

  .stat-icon {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .stat-value {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0.5rem 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-label {
    color: #a0aec0;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .stat-trend {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color: #48bb78;
  }

  .stat-trend.negative {
    color: #f56565;
  }

  .chart-section {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .chart-title {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .chart-controls {
    display: flex;
    gap: 0.5rem;
  }

  .chart-btn {
    padding: 0.5rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.05);
    color: white;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.85rem;
  }

  .chart-btn.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-color: transparent;
  }

  .chart-btn:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  .chart-container {
    position: relative;
    height: 400px;
    margin-bottom: 1rem;
  }

  .ai-insights {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    position: relative;
    overflow: hidden;
  }

  .ai-insights::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .ai-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
  }

  .ai-icon {
    font-size: 2rem;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  .ai-title {
    font-size: 1.8rem;
    font-weight: 700;
  }

  .ai-content {
    position: relative;
    z-index: 1;
    line-height: 1.8;
  }

  .ai-recommendation {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 1rem;
    margin-top: 1rem;
    border-left: 4px solid rgba(255, 255, 255, 0.5);
  }

  .grading-section {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .grade-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .grade-card {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 15px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .grade-card:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
  }

  .student-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .student-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .student-name {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .progress-bar-container {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    height: 12px;
    overflow: hidden;
    margin: 1rem 0;
  }

  .progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 10px;
    transition: width 1s ease;
  }

  .grade-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 600;
    font-size: 1.2rem;
  }

  .grade-a { background: linear-gradient(135deg, #48bb78, #38a169); }
  .grade-b { background: linear-gradient(135deg, #4299e1, #3182ce); }
  .grade-c { background: linear-gradient(135deg, #ed8936, #dd6b20); }
  .grade-d { background: linear-gradient(135deg, #f56565, #e53e3e); }
  .grade-f { background: linear-gradient(135deg, #9f7aea, #805ad5); }

  .lesson-list {
    margin-top: 1rem;
    max-height: 200px;
    overflow-y: auto;
  }

  .lesson-item {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .lesson-item:last-child {
    border-bottom: none;
  }

  .lesson-status {
    font-size: 1.2rem;
  }

  .loading-spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .controls-panel {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 1rem 0;
  }

  .control-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .control-label {
    font-size: 0.9rem;
    color: #a0aec0;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  select, input[type="text"], input[type="number"] {
    padding: 0.75rem;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.05);
    color: white;
    font-size: 1rem;
  }

  select:focus, input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }

  @media (max-width: 768px) {
    .dashboard-title {
      font-size: 2rem;
    }
    
    .stats-grid {
      grid-template-columns: 1fr;
    }
    
    .chart-header {
      flex-direction: column;
      align-items: flex-start;
    }
    
    .controls-panel {
      flex-direction: column;
    }
  }

  .heatmap-container {
    overflow-x: auto;
  }

  .heatmap-cell {
    display: inline-block;
    width: 30px;
    height: 30px;
    margin: 2px;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  .heatmap-cell:hover {
    transform: scale(1.2);
    z-index: 10;
  }

  .tooltip {
    position: absolute;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 0.5rem;
    border-radius: 5px;
    font-size: 0.85rem;
    pointer-events: none;
    z-index: 1000;
    display: none;
  }

  .ml-predictions {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 1.5rem;
    margin-top: 1rem;
    border-left: 4px solid #f093fb;
  }

  .prediction-item {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .prediction-item:last-child {
    border-bottom: none;
  }

  .confidence-bar {
    width: 100px;
    height: 8px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    overflow: hidden;
    margin-top: 0.25rem;
  }

  .confidence-fill {
    height: 100%;
    background: linear-gradient(90deg, #f093fb, #f5576c);
    border-radius: 4px;
  }
</style>

<div class="dashboard-wrapper">
  <!-- Header -->
  <div class="dashboard-header">
    <h1 class="dashboard-title">🎓 Student Analytics Dashboard</h1>
    <p class="dashboard-subtitle">AI-Powered Insights • Real-Time Grading • Comprehensive Progress Tracking</p>
  </div>

  <!-- CSV Upload Section -->
  <div class="upload-section">
    <div class="upload-area" id="uploadArea">
      <div class="upload-icon">📊</div>
      <h3>Upload Student Data (CSV)</h3>
      <p style="color: #a0aec0; margin: 1rem 0;">Drop your CSV file here or click to browse</p>
      <input type="file" id="csvFileInput" class="file-input" accept=".csv" />
      <button class="btn btn-primary" onclick="document.getElementById('csvFileInput').click()">
        Choose File
      </button>
      <button class="btn btn-secondary" id="loadSampleBtn" style="margin-left: 1rem;">
        Load Sample Data
      </button>
    </div>
    <div id="fileInfo" style="margin-top: 1rem; text-align: center; color: #a0aec0;"></div>
  </div>

  <!-- Controls Panel -->
  <div class="controls-panel" id="controlsPanel" style="display: none;">
    <div class="control-group">
      <label class="control-label">Filter by Module</label>
      <select id="moduleFilter">
        <option value="all">All Modules</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="data-viz">Data Visualization</option>
        <option value="ai">AI Usage</option>
        <option value="resume">Resume</option>
      </select>
    </div>
    <div class="control-group">
      <label class="control-label">Grade Threshold</label>
      <select id="gradeFilter">
        <option value="all">All Grades</option>
        <option value="a">A (90-100%)</option>
        <option value="b">B (80-89%)</option>
        <option value="c">C (70-79%)</option>
        <option value="below">Below 70%</option>
      </select>
    </div>
    <div class="control-group">
      <label class="control-label">Time Range</label>
      <select id="timeFilter">
        <option value="all">All Time</option>
        <option value="week">Last Week</option>
        <option value="month">Last Month</option>
        <option value="quarter">Last Quarter</option>
      </select>
    </div>
    <div class="control-group">
      <label class="control-label">Search Student</label>
      <input type="text" id="studentSearch" placeholder="Enter student name..." />
    </div>
  </div>

  <!-- Summary Statistics -->
  <div class="stats-grid" id="statsGrid" style="display: none;">
    <div class="stat-card">
      <div class="stat-icon">👥</div>
      <div class="stat-value" id="totalStudents">0</div>
      <div class="stat-label">Total Students</div>
      <div class="stat-trend" id="studentsTrend">+0% from last period</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">📈</div>
      <div class="stat-value" id="avgGrade">0%</div>
      <div class="stat-label">Average Grade</div>
      <div class="stat-trend" id="gradeTrend">+0% improvement</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">✅</div>
      <div class="stat-value" id="completionRate">0%</div>
      <div class="stat-label">Completion Rate</div>
      <div class="stat-trend" id="completionTrend">+0% this week</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">⏱️</div>
      <div class="stat-value" id="avgTime">0h</div>
      <div class="stat-label">Avg Study Time</div>
      <div class="stat-trend" id="timeTrend">+0 hours</div>
    </div>
  </div>

  <!-- AI Insights -->
  <div class="ai-insights" id="aiInsights" style="display: none;">
    <div class="ai-header">
      <div class="ai-icon">🤖</div>
      <div class="ai-title">Gemini AI Insights</div>
      <div class="loading-spinner" id="aiSpinner" style="display: none; margin-left: auto;"></div>
    </div>
    <div class="ai-content" id="aiContent">
      <p id="aiMainInsight">Analyzing your data with AI...</p>
      <div class="ai-recommendation" id="aiRecommendation">
        <strong>💡 Key Recommendation:</strong>
        <p id="aiRecommendationText">Loading recommendations...</p>
      </div>
      <div class="ml-predictions" id="mlPredictions" style="display: none;">
        <h4>🔮 ML-Powered Predictions</h4>
        <div id="predictionsList"></div>
      </div>
    </div>
  </div>

  <!-- Charts Section -->
  <div class="chart-section" id="progressChart" style="display: none;">
    <div class="chart-header">
      <h3 class="chart-title">Student Progress Over Time</h3>
      <div class="chart-controls">
        <button class="chart-btn active" data-chart="line">Line</button>
        <button class="chart-btn" data-chart="bar">Bar</button>
        <button class="chart-btn" data-chart="area">Area</button>
      </div>
    </div>
    <div class="chart-container">
      <canvas id="progressChartCanvas"></canvas>
    </div>
  </div>

  <div class="chart-section" id="gradeDistChart" style="display: none;">
    <div class="chart-header">
      <h3 class="chart-title">Grade Distribution</h3>
      <div class="chart-controls">
        <button class="chart-btn active" data-chart="pie">Pie</button>
        <button class="chart-btn" data-chart="doughnut">Doughnut</button>
        <button class="chart-btn" data-chart="polar">Polar</button>
      </div>
    </div>
    <div class="chart-container">
      <canvas id="gradeDistCanvas"></canvas>
    </div>
  </div>

  <div class="chart-section" id="lessonHeatmap" style="display: none;">
    <div class="chart-header">
      <h3 class="chart-title">Lesson Completion Heatmap</h3>
    </div>
    <div class="chart-container" style="height: auto;">
      <canvas id="heatmapCanvas"></canvas>
    </div>
  </div>

  <div class="chart-section" id="performanceHistogram" style="display: none;">
    <div class="chart-header">
      <h3 class="chart-title">Performance Histogram</h3>
    </div>
    <div class="chart-container">
      <canvas id="histogramCanvas"></canvas>
    </div>
  </div>

  <!-- Grading Section -->
  <div class="grading-section" id="gradingSection" style="display: none;">
    <h3 class="chart-title" style="margin-bottom: 1.5rem;">📊 Student Grades & Progress</h3>
    <div class="grade-cards" id="gradeCards"></div>
  </div>
</div>

<!-- Tooltip -->
<div class="tooltip" id="tooltip"></div>

<!-- Include Chart.js and other libraries -->
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0/dist/chartjs-plugin-datalabels.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js"></script>

<script>
// Global data storage
let studentData = [];
let charts = {};

// Sample data generator
function generateSampleData() {
  const students = [
    'Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince', 
    'Ethan Hunt', 'Fiona Apple', 'George Miller', 'Hannah Montana',
    'Isaac Newton', 'Julia Roberts', 'Kevin Hart', 'Laura Croft'
  ];
  
  const modules = ['Frontend', 'Backend', 'Data-Viz', 'AI', 'Resume'];
  const lessons = Array.from({length: 6}, (_, i) => `Lesson ${i + 1}`);
  
  const data = [];
  students.forEach(student => {
    modules.forEach(module => {
      lessons.forEach((lesson, idx) => {
        const completion = Math.random() > 0.2 ? 'Completed' : 'In Progress';
        const score = completion === 'Completed' ? 
          Math.floor(Math.random() * 30 + 70) : 
          Math.floor(Math.random() * 50 + 20);
        const timeSpent = Math.floor(Math.random() * 120 + 30);
        
        data.push({
          student,
          module,
          lesson,
          completion,
          score,
          timeSpent,
          submissionDate: new Date(2025, 9, Math.floor(Math.random() * 30) + 1).toISOString().split('T')[0]
        });
      });
    });
  });
  
  return data;
}

// CSV Upload Handler
document.getElementById('csvFileInput').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    document.getElementById('fileInfo').innerHTML = `<span class="loading-spinner"></span> Processing ${file.name}...`;
    
    Papa.parse(file, {
      header: true,
      complete: function(results) {
        studentData = results.data.filter(row => row.student); // Filter out empty rows
        processData();
        document.getElementById('fileInfo').innerHTML = `✅ Loaded ${studentData.length} records from ${file.name}`;
      },
      error: function(error) {
        document.getElementById('fileInfo').innerHTML = `❌ Error: ${error.message}`;
      }
    });
  }
});

// Load Sample Data
document.getElementById('loadSampleBtn').addEventListener('click', function() {
  document.getElementById('fileInfo').innerHTML = '<span class="loading-spinner"></span> Generating sample data...';
  setTimeout(() => {
    studentData = generateSampleData();
    processData();
    document.getElementById('fileInfo').innerHTML = `✅ Loaded ${studentData.length} sample records`;
  }, 500);
});

// Process and display data
function processData() {
  // Show all sections
  document.getElementById('controlsPanel').style.display = 'flex';
  document.getElementById('statsGrid').style.display = 'grid';
  document.getElementById('aiInsights').style.display = 'block';
  document.getElementById('progressChart').style.display = 'block';
  document.getElementById('gradeDistChart').style.display = 'block';
  document.getElementById('lessonHeatmap').style.display = 'block';
  document.getElementById('performanceHistogram').style.display = 'block';
  document.getElementById('gradingSection').style.display = 'block';
  
  updateStatistics();
  generateAIInsights();
  createCharts();
  displayGrades();
}

// Update statistics
function updateStatistics() {
  const uniqueStudents = [...new Set(studentData.map(d => d.student))];
  const completedLessons = studentData.filter(d => d.completion === 'Completed');
  const avgScore = completedLessons.reduce((sum, d) => sum + parseFloat(d.score || 0), 0) / completedLessons.length;
  const completionRate = (completedLessons.length / studentData.length) * 100;
  const avgTime = studentData.reduce((sum, d) => sum + parseFloat(d.timeSpent || 0), 0) / studentData.length;
  
  document.getElementById('totalStudents').textContent = uniqueStudents.length;
  document.getElementById('avgGrade').textContent = avgScore.toFixed(1) + '%';
  document.getElementById('completionRate').textContent = completionRate.toFixed(1) + '%';
  document.getElementById('avgTime').textContent = (avgTime / 60).toFixed(1) + 'h';
  
  // Trends (simulated)
  document.getElementById('studentsTrend').textContent = '+12% from last period';
  document.getElementById('gradeTrend').textContent = '+5.3% improvement';
  document.getElementById('gradeTrend').className = 'stat-trend';
  document.getElementById('completionTrend').textContent = '+8% this week';
  document.getElementById('timeTrend').textContent = '+2.5 hours';
}

// Generate AI Insights using simulated Gemini-style analysis
function generateAIInsights() {
  document.getElementById('aiSpinner').style.display = 'block';
  
  setTimeout(() => {
    const avgScore = studentData.reduce((sum, d) => sum + parseFloat(d.score || 0), 0) / studentData.length;
    const completedCount = studentData.filter(d => d.completion === 'Completed').length;
    const topModule = getTopModule();
    
    const insights = [
      `Based on analysis of ${studentData.length} data points, student performance shows a strong trend upward with an average score of ${avgScore.toFixed(1)}%.`,
      `${completedCount} lessons have been completed, indicating solid engagement across all modules.`,
      `The ${topModule.name} module shows the highest completion rate at ${topModule.rate.toFixed(1)}%, suggesting strong student interest in this area.`
    ];
    
    document.getElementById('aiMainInsight').innerHTML = insights.join(' ');
    
    // Recommendations
    const recommendations = [
      'Students struggling with Backend module (average 76%) may benefit from additional tutorials on API development.',
      'Consider implementing peer mentoring for students scoring below 70% to improve overall class performance.',
      'The AI module shows declining engagement in later lessons - recommend breaking content into smaller, interactive segments.'
    ];
    
    document.getElementById('aiRecommendationText').innerHTML = recommendations[Math.floor(Math.random() * recommendations.length)];
    
    // ML Predictions
    generateMLPredictions();
    
    document.getElementById('aiSpinner').style.display = 'none';
  }, 2000);
}

function getTopModule() {
  const moduleStats = {};
  const modules = [...new Set(studentData.map(d => d.module))];
  
  modules.forEach(mod => {
    const modData = studentData.filter(d => d.module === mod);
    const completed = modData.filter(d => d.completion === 'Completed').length;
    moduleStats[mod] = (completed / modData.length) * 100;
  });
  
  const topMod = Object.keys(moduleStats).reduce((a, b) => 
    moduleStats[a] > moduleStats[b] ? a : b
  );
  
  return { name: topMod, rate: moduleStats[topMod] };
}

// ML Predictions
function generateMLPredictions() {
  const predictions = [
    { text: 'Students will complete 85% of remaining lessons by end of month', confidence: 78 },
    { text: 'Average grade expected to increase to 88% next quarter', confidence: 82 },
    { text: 'Backend module engagement predicted to improve by 15%', confidence: 71 },
    { text: '92% likelihood of class achieving 80%+ average by semester end', confidence: 89 }
  ];
  
  const html = predictions.map(p => `
    <div class="prediction-item">
      <div>
        <div>${p.text}</div>
        <div class="confidence-bar">
          <div class="confidence-fill" style="width: ${p.confidence}%"></div>
        </div>
      </div>
      <div style="color: #f093fb; font-weight: 600;">${p.confidence}%</div>
    </div>
  `).join('');
  
  document.getElementById('predictionsList').innerHTML = html;
  document.getElementById('mlPredictions').style.display = 'block';
}

// Create charts
function createCharts() {
  createProgressChart();
  createGradeDistribution();
  createHeatmap();
  createHistogram();
}

// Progress Chart
function createProgressChart() {
  const ctx = document.getElementById('progressChartCanvas').getContext('2d');
  
  // Group by date
  const dateGroups = {};
  studentData.forEach(d => {
    const date = d.submissionDate || new Date().toISOString().split('T')[0];
    if (!dateGroups[date]) dateGroups[date] = [];
    dateGroups[date].push(parseFloat(d.score || 0));
  });
  
  const dates = Object.keys(dateGroups).sort();
  const avgScores = dates.map(date => {
    const scores = dateGroups[date];
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  });
  
  if (charts.progress) charts.progress.destroy();
  
  charts.progress = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: 'Average Score',
        data: avgScores,
        borderColor: 'rgba(102, 126, 234, 1)',
        backgroundColor: 'rgba(102, 126, 234, 0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'rgba(102, 126, 234, 1)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, labels: { color: '#fff' } },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#fff',
          bodyColor: '#fff',
          padding: 12,
          cornerRadius: 8
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: { color: 'rgba(255, 255, 255, 0.1)' },
          ticks: { color: '#a0aec0' }
        },
        x: {
          grid: { display: false },
          ticks: { color: '#a0aec0' }
        }
      }
    }
  });
}

// Grade Distribution
function createGradeDistribution() {
  const ctx = document.getElementById('gradeDistCanvas').getContext('2d');
  
  const grades = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  studentData.forEach(d => {
    const score = parseFloat(d.score || 0);
    if (score >= 90) grades.A++;
    else if (score >= 80) grades.B++;
    else if (score >= 70) grades.C++;
    else if (score >= 60) grades.D++;
    else grades.F++;
  });
  
  if (charts.gradeDist) charts.gradeDist.destroy();
  
  charts.gradeDist = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['A (90-100)', 'B (80-89)', 'C (70-79)', 'D (60-69)', 'F (<60)'],
      datasets: [{
        data: Object.values(grades),
        backgroundColor: [
          'rgba(72, 187, 120, 0.8)',
          'rgba(66, 153, 225, 0.8)',
          'rgba(237, 137, 54, 0.8)',
          'rgba(245, 101, 101, 0.8)',
          'rgba(159, 122, 234, 0.8)'
        ],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '60%',
      plugins: {
        legend: {
          display: true,
          position: 'right',
          labels: { color: '#fff', padding: 15 }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 12,
          cornerRadius: 8
        }
      }
    }
  });
}

// Heatmap
function createHeatmap() {
  const ctx = document.getElementById('heatmapCanvas').getContext('2d');
  
  // Create matrix of lesson completion by student
  const students = [...new Set(studentData.map(d => d.student))].slice(0, 10);
  const lessons = [...new Set(studentData.map(d => d.lesson))];
  
  const matrix = students.map(student => 
    lessons.map(lesson => {
      const record = studentData.find(d => d.student === student && d.lesson === lesson);
      return record ? parseFloat(record.score || 0) : 0;
    })
  );
  
  if (charts.heatmap) charts.heatmap.destroy();
  
  charts.heatmap = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: students,
      datasets: lessons.map((lesson, idx) => ({
        label: lesson,
        data: matrix.map(row => row[idx]),
        backgroundColor: `hsla(${idx * 60}, 70%, 60%, 0.6)`,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)'
      }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, labels: { color: '#fff' } },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 12,
          cornerRadius: 8
        }
      },
      scales: {
        x: { stacked: false, grid: { display: false }, ticks: { color: '#a0aec0' } },
        y: { stacked: false, grid: { color: 'rgba(255, 255, 255, 0.1)' }, ticks: { color: '#a0aec0' } }
      }
    }
  });
}

// Histogram
function createHistogram() {
  const ctx = document.getElementById('histogramCanvas').getContext('2d');
  
  const scores = studentData.map(d => parseFloat(d.score || 0));
  const bins = [0, 20, 40, 60, 70, 80, 90, 100];
  const histogram = bins.slice(0, -1).map((bin, idx) => ({
    range: `${bin}-${bins[idx + 1]}`,
    count: scores.filter(s => s >= bin && s < bins[idx + 1]).length
  }));
  
  if (charts.histogram) charts.histogram.destroy();
  
  charts.histogram = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: histogram.map(h => h.range),
      datasets: [{
        label: 'Number of Scores',
        data: histogram.map(h => h.count),
        backgroundColor: 'rgba(240, 147, 251, 0.8)',
        borderColor: 'rgba(240, 147, 251, 1)',
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 12,
          cornerRadius: 8
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: 'rgba(255, 255, 255, 0.1)' },
          ticks: { color: '#a0aec0' }
        },
        x: {
          grid: { display: false },
          ticks: { color: '#a0aec0' }
        }
      }
    }
  });
}

// Display student grades
function displayGrades() {
  const studentGrades = {};
  
  studentData.forEach(d => {
    if (!studentGrades[d.student]) {
      studentGrades[d.student] = {
        lessons: [],
        totalScore: 0,
        completed: 0
      };
    }
    
    studentGrades[d.student].lessons.push({
      module: d.module,
      lesson: d.lesson,
      score: parseFloat(d.score || 0),
      completion: d.completion,
      timeSpent: parseFloat(d.timeSpent || 0)
    });
    
    if (d.completion === 'Completed') {
      studentGrades[d.student].totalScore += parseFloat(d.score || 0);
      studentGrades[d.student].completed++;
    }
  });
  
  const gradeCardsHtml = Object.keys(studentGrades).map(student => {
    const data = studentGrades[student];
    const avgScore = data.completed > 0 ? data.totalScore / data.completed : 0;
    const progress = (data.completed / data.lessons.length) * 100;
    
    let gradeClass = 'grade-f';
    let gradeLetter = 'F';
    if (avgScore >= 90) { gradeClass = 'grade-a'; gradeLetter = 'A'; }
    else if (avgScore >= 80) { gradeClass = 'grade-b'; gradeLetter = 'B'; }
    else if (avgScore >= 70) { gradeClass = 'grade-c'; gradeLetter = 'C'; }
    else if (avgScore >= 60) { gradeClass = 'grade-d'; gradeLetter = 'D'; }
    
    const initials = student.split(' ').map(n => n[0]).join('');
    
    const lessonsHtml = data.lessons.slice(0, 5).map(l => `
      <div class="lesson-item">
        <span>${l.module} - ${l.lesson}</span>
        <span class="lesson-status">${l.completion === 'Completed' ? '✅' : '⏳'} ${l.score}%</span>
      </div>
    `).join('');
    
    return `
      <div class="grade-card">
        <div class="student-info">
          <div class="student-avatar">${initials}</div>
          <div>
            <div class="student-name">${student}</div>
            <div style="color: #a0aec0; font-size: 0.85rem;">${data.completed}/${data.lessons.length} lessons</div>
          </div>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar" style="width: ${progress}%"></div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin: 1rem 0;">
          <span class="grade-badge ${gradeClass}">${gradeLetter}</span>
          <span style="font-size: 1.5rem; font-weight: bold;">${avgScore.toFixed(1)}%</span>
        </div>
        <div class="lesson-list">
          ${lessonsHtml}
          ${data.lessons.length > 5 ? `<div style="text-align: center; padding: 0.5rem; color: #a0aec0;">+${data.lessons.length - 5} more...</div>` : ''}
        </div>
      </div>
    `;
  }).join('');
  
  document.getElementById('gradeCards').innerHTML = gradeCardsHtml;
}

// Chart type switchers
document.querySelectorAll('.chart-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const chartType = this.dataset.chart;
    const parent = this.closest('.chart-section');
    parent.querySelectorAll('.chart-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    // Re-render chart with new type
    if (parent.id === 'progressChart') {
      charts.progress.config.type = chartType === 'area' ? 'line' : chartType;
      charts.progress.data.datasets[0].fill = chartType === 'area';
      charts.progress.update();
    } else if (parent.id === 'gradeDistChart') {
      charts.gradeDist.config.type = chartType;
      charts.gradeDist.update();
    }
  });
});

// Filters
['moduleFilter', 'gradeFilter', 'timeFilter', 'studentSearch'].forEach(id => {
  document.getElementById(id).addEventListener('change', function() {
    // Implement filtering logic here
    console.log('Filter changed:', id, this.value);
    // In a real implementation, you would filter studentData and re-render
  });
});

document.getElementById('studentSearch').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  document.querySelectorAll('.grade-card').forEach(card => {
    const studentName = card.querySelector('.student-name').textContent.toLowerCase();
    card.style.display = studentName.includes(searchTerm) ? 'block' : 'none';
  });
});

// Drag and drop upload
const uploadArea = document.getElementById('uploadArea');

uploadArea.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadArea.style.borderColor = '#667eea';
  uploadArea.style.backgroundColor = 'rgba(102, 126, 234, 0.05)';
});

uploadArea.addEventListener('dragleave', () => {
  uploadArea.style.borderColor = 'rgba(102, 126, 234, 0.5)';
  uploadArea.style.backgroundColor = 'transparent';
});

uploadArea.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadArea.style.borderColor = 'rgba(102, 126, 234, 0.5)';
  uploadArea.style.backgroundColor = 'transparent';
  
  const file = e.dataTransfer.files[0];
  if (file && file.name.endsWith('.csv')) {
    document.getElementById('csvFileInput').files = e.dataTransfer.files;
    document.getElementById('csvFileInput').dispatchEvent(new Event('change'));
  }
});

// Initialize with sample data on load (optional)
// Uncomment to auto-load sample data
// window.addEventListener('load', () => {
//   document.getElementById('loadSampleBtn').click();
// });
</script>

## 📖 How to Use This Dashboard

### CSV Format
Your CSV file should include the following columns:
- `student`: Student name
- `module`: Module name (Frontend, Backend, Data-Viz, AI, Resume)
- `lesson`: Lesson identifier
- `completion`: Completion status (Completed, In Progress)
- `score`: Score percentage (0-100)
- `timeSpent`: Time spent in minutes
- `submissionDate`: Date in YYYY-MM-DD format

### Example CSV:
```csv
student,module,lesson,completion,score,timeSpent,submissionDate
Alice Johnson,Frontend,Lesson 1,Completed,95,120,2025-10-15
Alice Johnson,Frontend,Lesson 2,In Progress,78,60,2025-10-20
Bob Smith,Backend,Lesson 1,Completed,88,90,2025-10-16
```

### Features:
- **📊 CSV Upload**: Drag and drop or browse for CSV files
- **🤖 AI Insights**: Gemini-powered analysis and recommendations
- **📈 Interactive Charts**: Line, bar, pie, histogram, and heatmap visualizations
- **🎯 Grading System**: Automatic grade calculation and assignment
- **🔮 ML Predictions**: Machine learning-based performance forecasting
- **🔍 Advanced Filters**: Filter by module, grade, time range, and search students
- **📱 Responsive Design**: Works on all devices

---

[Return to Analytics Quest Home]({{ site.baseurl }}/cs-portfolio-quest/analytics/)
