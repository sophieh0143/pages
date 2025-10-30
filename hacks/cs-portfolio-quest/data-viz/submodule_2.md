---
layout: post
title: "Submodule 2"
description: "Spring Boot RESTful Company Profile System"
permalink: /cs-portfolio-quest/data-viz/submodule_2/
parent: "Data Visualization"
team: "Applicators"
submodule: 2
categories: [CSP, Submodule, DataVisualization]
tags: [spring-boot, rest, jpa, sqlite]
author: "Applicators Team"
date: 2025-10-21
---

# Submodule 2: Company Profile & REST APIs — Interactive Lesson (Fixed HTML)

Below is a **fully fixed, copy-paste ready HTML file**.  
It corrects broken tags, unfinished attributes (e.g., `select i`), and adds complete JavaScript for the interactive features:
- In-memory API simulator (CRUD)
- Code challenge checker
- Multiple-choice quiz
- “Build your own company” form
- Dynamic company list rendering
- Status badges & responses

> Save as `submodule2-company-rest.html` and open in a browser.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Submodule 2: Company Profile & REST APIs — Black Theme</title>
  <style>
    :root{
      --bg:#000;
      --text:#fff;
      --muted:#bbb;
      --muted-2:#888;
      --border:#333;
      --panel:#0b0b0b;
      --panel-2:#111;
      --accent:#ddd;
      --accent-2:#aaa;
      --danger:#f66;
      --ok:#9f9;
      --warn:#ff9;
    }
    /* Global */
    *{ box-sizing: border-box; }
    html,body{ height:100%; }
    body{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      line-height: 1.6;
    }
    .container{
      padding: 32px 0;
      border: none;             /* no background panels */
      box-shadow: none;         /* remove all shadows */
    }
    h1{
      color: var(--text);
      border-bottom: 1px solid var(--border);
      padding-bottom: 8px;
      margin: 0 0 20px;
    }
    h2{ color: var(--text); margin-top: 32px; }
    h3{ color: var(--text); margin-top: 20px; }
    p, li, label{ color: var(--muted); }
    a{ color: var(--accent); text-decoration: none; }
    a:hover{ text-decoration: underline; }

    /* Surfaces */
    .interactive-section,
    .api-tester,
    .exercise-box,
    .info-box,
    .quiz-question,
    .company-card,
    .output-box{
      background: transparent;      /* remove backgrounds */
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 16px;
      margin: 16px 0;
      box-shadow: none;             /* remove shadows */
      color: var(--text);
    }
    .interactive-section h3{ margin-top: 0; }

    /* Code */
    pre{
      background: var(--panel-2);
      color: #eee;
      padding: 16px;
      border-radius: 6px;
      overflow-x: auto;
      font-size: 13px;
      border: 1px solid var(--border);
    }
    code{
      font-family: 'Courier New', Consolas, monospace;
      background: var(--panel);
      color: #eee;
      padding: 2px 6px;
      border-radius: 3px;
      font-size: 13px;
      border: 1px solid var(--border);
    }
    pre code{ background: transparent; border: none; padding: 0; }

    /* Inputs */
    textarea, input[type="text"], input[type="number"], select{
      width: 100%;
      padding: 12px;
      border: 1px solid var(--border);
      border-radius: 6px;
      font-family: 'Courier New', Consolas, monospace;
      font-size: 13px;
      margin: 10px 0;
      background: var(--panel-2);
      color: var(--text);
      transition: border-color 0.2s ease;
    }
    textarea:focus, input:focus, select:focus{
      outline: none;
      border-color: var(--accent-2);
    }
    textarea{ min-height: 140px; resize: vertical; }

    /* Buttons */
    button{
      background: #1a1a1a;
      color: var(--text);
      border: 1px solid var(--border);
      padding: 10px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      font-weight: 600;
      margin: 6px 6px 6px 0;
      transition: transform .1s ease, border-color .2s ease;
    }
    button:hover{ transform: translateY(-1px); border-color: var(--accent-2); }
    button.success{ border-color: #1f7; }
    button.danger{ border-color: #f55; }
    button.warning{ border-color: #ffb84d; }
    .completion-btn{
      width: 100%;
      padding: 14px 18px;
      font-size: 16px;
      margin-top: 24px;
    }
    .completion-btn:disabled{ opacity: .5; cursor: not-allowed; }

    /* Output */
    .output-box{
      white-space: pre-wrap;
      font-family: 'Courier New', Consolas, monospace;
      font-size: 13px;
    }

    /* Status badges (monochrome) */
    .status-badge{
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 700;
      border: 1px solid var(--border);
      color: var(--accent);
      margin-left: 8px;
    }

    /* Table (no header bg) */
    table{
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
    }
    th, td{
      border: 1px solid var(--border);
      padding: 10px;
      text-align: left;
      color: var(--muted);
    }
    th{ color: var(--text); font-weight: 700; }
    tr:hover{ background: transparent; }

    /* Quiz */
    .quiz-option{
      display: block;
      padding: 10px;
      margin: 8px 0;
      border: 1px solid var(--border);
      border-radius: 6px;
      cursor: pointer;
      transition: border-color .2s ease, background .2s ease;
      color: var(--muted);
    }
    .quiz-option:hover{ border-color: var(--accent-2); }
    .quiz-option.selected{ border-color: var(--accent); color: var(--text); }
    .quiz-option.correct{ border-color: #3f3; color: var(--text); }
    .quiz-option.incorrect{ border-color: #f55; color: var(--text); }
    .explanation{
      border: 1px solid var(--border);
      padding: 12px;
      border-radius: 6px;
      margin-top: 10px;
      color: var(--muted);
    }

    /* Utility */
    .score-display{
      font-size: 20px;
      font-weight: 700;
      text-align: center;
      padding: 16px;
      border: 1px solid var(--border);
      border-radius: 6px;
      color: var(--text);
      background: transparent;
    }
    .badge{
      display: inline-block;
      padding: 2px 8px;
      border: 1px solid var(--border);
      border-radius: 12px;
      font-size: 11px;
      margin: 3px 6px 3px 0;
      color: var(--muted);
    }
    .code-challenge-result{
      padding: 12px;
      margin: 12px 0;
      border-radius: 6px;
      border: 1px solid var(--border);
      font-weight: 600;
    }
    .code-challenge-result.pass{ color: #bfffbf; }
    .code-challenge-result.fail{ color: #ffb3b3; }
    hr{ border: none; border-top: 1px solid var(--border); margin: 24px 0; }
  </style>
</head>
<body>
  <div class="container">
    <h1>📚 Submodule 2: Company Profile & REST APIs</h1>
    <p><strong>Interactive Learning Module (45–60 min)</strong><br/>
      Create a <strong>Spring Boot + JPA</strong> backend for managing company profiles with RESTful APIs.</p>
    <hr/>

    <h2>🎯 Learning Objectives</h2>
    <ul>
      <li>Set up a Spring Boot project with JPA and SQLite</li>
      <li>Design entity relationships (One-to-Many, Many-to-Many)</li>
      <li>Create RESTful API endpoints and CRUD operations</li>
      <li>Write custom JPA queries</li>
      <li>Handle HTTP requests and responses</li>
    </ul>

    <hr/>

    <h2>1. Setup</h2>
    <h3>Dependencies (<code>pom.xml</code>)</h3>
<pre><code>&lt;dependencies&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.xerial&lt;/groupId&gt;
    &lt;artifactId&gt;sqlite-jdbc&lt;/artifactId&gt;
  &lt;/dependency&gt;
&lt;/dependencies&gt;</code></pre>

    <h3>Configuration (<code>application.properties</code>)</h3>
<pre><code>spring.datasource.url=jdbc:sqlite:company_profiles.db
spring.datasource.driver-class-name=org.sqlite.JDBC
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true</code></pre>

    <hr/>

    <h2>2. Entities</h2>

    <h3>Company.java</h3>
<pre><code>package com.example.demo.entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "companies")
public class Company {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name, industry, location;
  private Integer size;

  @ManyToMany(cascade = CascadeType.ALL)
  @JoinTable(
    name = "company_skills",
    joinColumns = @JoinColumn(name = "company_id"),
    inverseJoinColumns = @JoinColumn(name = "skill_id")
  )
  private Set&lt;Skill&gt; skills = new HashSet&lt;&gt;();

  @ManyToMany(cascade = CascadeType.ALL)
  @JoinTable(
    name = "company_roles",
    joinColumns = @JoinColumn(name = "company_id"),
    inverseJoinColumns = @JoinColumn(name = "role_id")
  )
  private Set&lt;Role&gt; roles = new HashSet&lt;&gt;();

  public Company() {}
  public Company(String name, String industry, String location, Integer size) {
    this.name = name; this.industry = industry; this.location = location; this.size = size;
  }
  // getters/setters...
}</code></pre>

    <h3>Skill.java</h3>
<pre><code>package com.example.demo.entity;

import javax.persistence.*;

@Entity
public class Skill {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(unique = true, nullable = false)
  private String name;

  public Skill() {}
  public Skill(String name) { this.name = name; }
  // getters/setters...
}</code></pre>

    <h3>Role.java</h3>
<pre><code>package com.example.demo.entity;

import javax.persistence.*;

@Entity
public class Role {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(unique = true, nullable = false)
  private String title;

  public Role() {}
  public Role(String title) { this.title = title; }
  // getters/setters...
}</code></pre>

    <hr/>

    <h2>3. Repository</h2>
<pre><code>package com.example.demo.repository;

import com.example.demo.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository&lt;Company, Long&gt; {
  List&lt;Company&gt; findByIndustry(String industry);
  List&lt;Company&gt; findByLocation(String location);
  List&lt;Company&gt; findBySizeGreaterThan(Integer minSize);

  @Query("SELECT c FROM Company c JOIN c.skills s WHERE s.name = :skillName")
  List&lt;Company&gt; findBySkillName(@Param("skillName") String skillName);
}</code></pre>

    <hr/>

    <h2>4. Service Layer</h2>
<pre><code>package com.example.demo.service;

import com.example.demo.entity.Company;
import com.example.demo.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.concurrent.CompletableFuture;

@Service
public class CompanyService {
  @Autowired private CompanyRepository repository;

  public Company createCompany(Company company){ return repository.save(company); }
  public Company getCompanyById(Long id){
    return repository.findById(id).orElseThrow(() -&gt; new RuntimeException("Company not found: " + id));
  }
  public List&lt;Company&gt; getAllCompanies(){ return repository.findAll(); }
  public Company updateCompany(Long id, Company d){
    Company c = getCompanyById(id);
    c.setName(d.getName()); c.setIndustry(d.getIndustry()); c.setLocation(d.getLocation());
    c.setSize(d.getSize()); c.setSkills(d.getSkills()); c.setRoles(d.getRoles());
    return repository.save(c);
  }
  public void deleteCompany(Long id){ repository.delete(getCompanyById(id)); }

  @Async
  public CompletableFuture&lt;Double&gt; calculateCompanyScore(Long id){
    getCompanyById(id); // ensure existence
    return CompletableFuture.completedFuture(Math.random() * 100);
  }

  // passthroughs
  public List&lt;Company&gt; findByIndustry(String v){ return repository.findByIndustry(v); }
  public List&lt;Company&gt; findByLocation(String v){ return repository.findByLocation(v); }
  public List&lt;Company&gt; findBySizeGreaterThan(Integer v){ return repository.findBySizeGreaterThan(v); }
}</code></pre>

    <hr/>

    <h2>5. Controller (REST API)</h2>
<pre><code>package com.example.demo.controller;

import com.example.demo.entity.Company;
import com.example.demo.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/api/companies")
public class CompanyController {
  @Autowired private CompanyService service;

  @PostMapping
  public ResponseEntity&lt;Company&gt; create(@RequestBody Company c){
    return ResponseEntity.status(HttpStatus.CREATED).body(service.createCompany(c));
  }

  @GetMapping("/{id}")
  public ResponseEntity&lt;Company&gt; get(@PathVariable Long id){
    return ResponseEntity.ok(service.getCompanyById(id));
  }

  @GetMapping
  public ResponseEntity&lt;List&lt;Company&gt;&gt; getAll(){
    return ResponseEntity.ok(service.getAllCompanies());
  }

  @PutMapping("/{id}")
  public ResponseEntity&lt;Company&gt; update(@PathVariable Long id, @RequestBody Company c){
    return ResponseEntity.ok(service.updateCompany(id, c));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity&lt;Void&gt; delete(@PathVariable Long id){
    service.deleteCompany(id);
    return ResponseEntity.noContent().build();
  }

  @GetMapping("/search/industry")
  public ResponseEntity&lt;List&lt;Company&gt;&gt; findByIndustry(@RequestParam String name){
    return ResponseEntity.ok(service.findByIndustry(name));
  }

  @GetMapping("/score/{id}")
  public CompletableFuture&lt;ResponseEntity&lt;Map&lt;String,Object&gt;&gt;&gt; score(@PathVariable Long id){
    return service.calculateCompanyScore(id).thenApply(s -&gt; {
      Map&lt;String,Object&gt; m = new HashMap&lt;&gt;();
      m.put("id", id); m.put("score", s);
      return ResponseEntity.ok(m);
    });
  }
}</code></pre>

    <hr/>

    <h2>6. REST API Endpoints Summary</h2>
    <table>
      <thead>
        <tr><th>Method</th><th>Endpoint</th><th>Description</th><th>Status</th></tr>
      </thead>
      <tbody>
        <tr><td>POST</td><td>/api/companies</td><td>Create a company</td><td>201</td></tr>
        <tr><td>GET</td><td>/api/companies/{id}</td><td>Get by ID</td><td>200</td></tr>
        <tr><td>GET</td><td>/api/companies</td><td>Get all</td><td>200</td></tr>
        <tr><td>PUT</td><td>/api/companies/{id}</td><td>Update</td><td>200</td></tr>
        <tr><td>DELETE</td><td>/api/companies/{id}</td><td>Delete</td><td>204</td></tr>
        <tr><td>GET</td><td>/api/companies/search/industry?name=Software</td><td>Filter by industry</td><td>200</td></tr>
      </tbody>
    </table>

    <hr/>

    <!-- API Simulator -->
    <div class="interactive-section">
      <h3>🚀 Interactive Exercise 1: API Simulator</h3>
      <p>Test REST API endpoints with a local, in-memory database (no backend required).</p>
    </div>

    <div class="api-tester">
      <div class="control-group">
        <label for="apiEndpoint">Select API Endpoint</label>
        <select id="apiEndpoint" onchange="updateAPIFields()">
          <option value="POST /api/companies">POST /api/companies (Create)</option>
          <option value="GET /api/companies">GET /api/companies (Get All)</option>
          <option value="GET /api/companies/{id}">GET /api/companies/{id} (Get One)</option>
          <option value="PUT /api/companies/{id}">PUT /api/companies/{id} (Update)</option>
          <option value="DELETE /api/companies/{id}">DELETE /api/companies/{id} (Delete)</option>
        </select>
      </div>

      <div class="control-group" id="pathParamGroup" style="display:none">
        <label for="pathId">Path Parameter <code>{id}</code></label>
        <input type="number" id="pathId" min="1" placeholder="e.g., 1"/>
      </div>

      <div class="control-group" id="requestBodyGroup">
        <label for="apiBody">Request Body (JSON)</label>
        <textarea id="apiBody" spellcheck="false">{
  "name": "TechCorp",
  "industry": "Software",
  "location": "San Francisco",
  "size": 150,
  "skills": ["Java", "Spring"],
  "roles": ["Backend Engineer", "DevOps Engineer"]
}</textarea>
      </div>

      <button onclick="simulateAPI()">Send Request</button>
      <button class="warning" onclick="resetCompanies()">Reset DB</button>

      <div class="control-group">
        <label>Response <span id="statusBadge" class="status-badge"></span></label>
        <div class="output-box" id="apiResponse">Click "Send Request"…</div>
      </div>
    </div>

    <h3>Current Companies</h3>
    <div id="companiesList"></div>

    <hr/>

    <!-- Code Challenge -->
    <div class="interactive-section">
      <h3>💻 Interactive Exercise 2: Code Challenge</h3>
      <p>Write a repository method to find companies with size greater than a given threshold.</p>
    </div>

    <div class="exercise-box">
<pre><code>@Repository
public interface CompanyRepository extends JpaRepository&lt;Company, Long&gt; {
  // TODO: Method should find companies where size &gt; minSize
}</code></pre>
      <label for="codeAnswer"><strong>Your Answer (single line)</strong></label>
      <textarea id="codeAnswer" placeholder="List<Company> findBySizeGreaterThan(Integer minSize);"></textarea>
      <button onclick="checkCodeChallenge()">Check Answer</button>
      <button class="warning" onclick="showCodeSolution()">Show Solution</button>
      <div id="codeFeedback" class="code-challenge-result"></div>
    </div>

    <hr/>

    <!-- Quiz -->
    <div class="interactive-section">
      <h3>📝 Interactive Exercise 3: Knowledge Check</h3>
      <p>Select the best answer for each question.</p>
    </div>

    <div class="quiz-container" id="quizContainer"></div>
    <button onclick="submitQuiz()">Submit Quiz</button>
    <div id="quizResults"></div>

    <hr/>

    <!-- Build Your Own -->
    <div class="interactive-section">
      <h3>🛠️ Interactive Exercise 4: Build Your Own Company</h3>
      <p>Create a company and add it to the in-memory DB.</p>
    </div>

    <div class="api-tester">
      <div class="control-group">
        <label for="companyName">Company Name</label>
        <input type="text" id="companyName" placeholder="e.g., TechStartup Inc"/>
      </div>

      <div class="control-group">
        <label for="companyIndustry">Industry</label>
        <select id="companyIndustry">
          <option>Software</option>
          <option>AI</option>
          <option>Healthcare</option>
          <option>Finance</option>
          <option>Education</option>
        </select>
      </div>

      <div class="control-group">
        <label for="companyLocation">Location</label>
        <input type="text" id="companyLocation" placeholder="e.g., San Diego"/>
      </div>

      <div class="control-group">
        <label for="companySize">Size (employees)</label>
        <input type="number" id="companySize" min="1" placeholder="e.g., 50"/>
      </div>

      <div class="control-group">
        <label for="companySkills">Skills (comma-separated)</label>
        <input type="text" id="companySkills" placeholder="e.g., Java, Spring, SQL"/>
      </div>

      <div class="control-group">
        <label for="companyRoles">Roles (comma-separated)</label>
        <input type="text" id="companyRoles" placeholder="e.g., Backend Engineer, QA Engineer"/>
      </div>

      <button class="success" onclick="addCompanyFromForm()">Add Company</button>
    </div>

    <button class="completion-btn" id="doneBtn" onclick="markComplete()">Mark Module Complete</button>
    <div id="completionMsg" class="score-display" style="display:none">Great job! Module complete 🎉</div>
  </div>

  <script>
    // In-memory DB
    let companies = [
      { id: 1, name: "TechNova", industry: "AI", location: "San Diego", size: 1200, skills: ["Python","TensorFlow"], roles: ["ML Engineer","Data Scientist"] },
      { id: 2, name: "HealthBridge", industry: "Healthcare", location: "Austin", size: 300, skills: ["Java","Spring"], roles: ["Backend Engineer"] }
    ];
    let nextId = 3;

    const companiesList = document.getElementById("companiesList");
    const apiEndpointEl = document.getElementById("apiEndpoint");
    const pathParamGroup = document.getElementById("pathParamGroup");
    const pathIdEl = document.getElementById("pathId");
    const requestBodyGroup = document.getElementById("requestBodyGroup");
    const apiBodyEl = document.getElementById("apiBody");
    const statusBadge = document.getElementById("statusBadge");
    const apiResponse = document.getElementById("apiResponse");

    function escapeHtml(s){
      return String(s)
        .replaceAll("&","&amp;").replaceAll("<","&lt;")
        .replaceAll(">","&gt;").replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");
    }

    function renderCompanies(){
      companiesList.innerHTML = companies.map(c => `
        <div class="company-card">
          <h4>${escapeHtml(c.name)} <span class="badge">${escapeHtml(c.industry)}</span></h4>
          <div><strong>Location:</strong> ${escapeHtml(c.location)} · <strong>Size:</strong> ${Number(c.size)}</div>
          <div>${(c.skills||[]).map(s => `<span class="badge">${escapeHtml(s)}</span>`).join(" ")}</div>
          <div>${(c.roles||[]).map(r => `<span class="badge">${escapeHtml(r)}</span>`).join(" ")}</div>
          <div><em>ID: ${c.id}</em></div>
        </div>
      `).join("");
    }

    function setStatus(code){
      statusBadge.textContent = code;
    }

    function updateAPIFields(){
      const value = apiEndpointEl.value;
      const needsId = value.includes("{id}");
      pathParamGroup.style.display = needsId ? "block" : "none";
      requestBodyGroup.style.display = (value.startsWith("POST") || value.startsWith("PUT")) ? "block" : "none";
    }

    function parseBody(){
      try{ return JSON.parse(apiBodyEl.value || "{}"); }
      catch(e){ throw new Error("Invalid JSON body"); }
    }

    function normalizeCompany(obj){
      return {
        name: obj.name ?? "Unnamed",
        industry: obj.industry ?? "Unknown",
        location: obj.location ?? "Unknown",
        size: Number(obj.size ?? 0),
        skills: Array.isArray(obj.skills) ? obj.skills : [],
        roles: Array.isArray(obj.roles) ? obj.roles : []
      };
    }

    function simulateAPI(){
      const sel = apiEndpointEl.value;
      const [method, path] = sel.split(" ");
      let result = null;

      try{
        if(method==="POST" && path==="/api/companies"){
          const body = parseBody();
          const newObj = normalizeCompany(body);
          newObj.id = nextId++;
          companies.push(newObj);
          setStatus(201);
          result = newObj;
        } else if(method==="GET" && path==="/api/companies"){
          setStatus(200);
          result = companies;
        } else if(method==="GET" && path==="/api/companies/{id}"){
          const id = Number(pathIdEl.value);
          const found = companies.find(c => c.id === id);
          if(!found){ setStatus(404); result = { error: "Not found" }; }
          else { setStatus(200); result = found; }
        } else if(method==="PUT" && path==="/api/companies/{id}"){
          const id = Number(pathIdEl.value);
          const idx = companies.findIndex(c => c.id === id);
          if(idx === -1){ setStatus(404); result = { error: "Not found" }; }
          else {
            const body = parseBody();
            companies[idx] = { ...companies[idx], ...normalizeCompany(body), id };
            setStatus(200);
            result = companies[idx];
          }
        } else if(method==="DELETE" && path==="/api/companies/{id}"){
          const id = Number(pathIdEl.value);
          const before = companies.length;
          companies = companies.filter(c => c.id !== id);
          if(companies.length === before){ setStatus(404); result = { error: "Not found" }; }
          else { setStatus(204); result = {}; }
        } else {
          setStatus(400);
          result = { error: "Unsupported operation" };
        }
      } catch(err){
        setStatus(400);
        result = { error: err.message };
      }

      apiResponse.textContent = JSON.stringify(result, null, 2);
      renderCompanies();
    }

    function resetCompanies(){
      companies = [
        { id: 1, name: "TechNova", industry: "AI", location: "San Diego", size: 1200, skills: ["Python","TensorFlow"], roles: ["ML Engineer","Data Scientist"] },
        { id: 2, name: "HealthBridge", industry: "Healthcare", location: "Austin", size: 300, skills: ["Java","Spring"], roles: ["Backend Engineer"] }
      ];
      nextId = 3;
      setStatus(200);
      apiResponse.textContent = "Database reset.";
      renderCompanies();
    }

    // Code challenge
    const codeFeedback = document.getElementById("codeFeedback");
    function checkCodeChallenge(){
      const ans = (document.getElementById("codeAnswer").value || "").trim().replace(/\s+/g," ");
      const valid = /^List<\s*Company\s*>\s*findBySizeGreaterThan\s*\(\s*Integer\s+\w+\s*\);\s*$/i.test(ans);
      if(valid){
        codeFeedback.className = "code-challenge-result pass";
        codeFeedback.textContent = "Correct! Spring Data JPA will generate this derived query.";
      } else {
        codeFeedback.className = "code-challenge-result fail";
        codeFeedback.textContent = "Not quite. Hint: List<Company> findBySizeGreaterThan(Integer minSize);";
      }
    }
    function showCodeSolution(){
      document.getElementById("codeAnswer").value = "List<Company> findBySizeGreaterThan(Integer minSize);";
      checkCodeChallenge();
    }

    // Quiz
    const quiz = [
      { q:"Which annotation marks a Spring REST controller?",
        opts:["@Controller","@RestController","@Service","@Repository"], a:1,
        expl:"@RestController combines @Controller and @ResponseBody." },
      { q:"What does @JoinTable specify?",
        opts:["Primary key","Entity table name","Join table & join columns","Auto ID strategy"], a:2,
        expl:"It defines the join table and its columns for relationships like @ManyToMany." },
      { q:"Purpose of CompletableFuture in services?",
        opts:["Synchronous I/O","Blocking DB calls","Asynchronous computation","ORM mapping"], a:2,
        expl:"CompletableFuture enables non-blocking async computations." },
      { q:"How to find companies by skill with JPQL?",
        opts:[
          "SELECT c FROM Company c WHERE c.skills = :skill",
          "SELECT c FROM Company c JOIN c.skills s WHERE s.name = :skillName",
          "SELECT * FROM companies WHERE skill=:skill",
          "SELECT s FROM Skill s WHERE s.company = :c"
        ],
        a:1,
        expl:"Join the skills collection and filter by skill name."
      }
    ];
    const selections = {};
    function renderQuiz(){
      const container = document.getElementById("quizContainer");
      container.innerHTML = "";
      quiz.forEach((item, idx) => {
        const qDiv = document.createElement("div");
        qDiv.className = "quiz-question";
        qDiv.innerHTML = `<strong>Q${idx+1}.</strong> ${escapeHtml(item.q)}`;
        item.opts.forEach((opt, oIdx) => {
          const optEl = document.createElement("label");
          optEl.className = "quiz-option";
          optEl.setAttribute("data-q", idx);
          optEl.setAttribute("data-o", oIdx);
          optEl.textContent = opt;
          optEl.onclick = () => selectOption(idx, oIdx);
          qDiv.appendChild(optEl);
        });
        container.appendChild(qDiv);
      });
    }
    function selectOption(qIdx, oIdx){
      selections[qIdx] = oIdx;
      document.querySelectorAll(`.quiz-option[data-q="${qIdx}"]`).forEach(el => el.classList.remove("selected"));
      const el = document.querySelector(`.quiz-option[data-q="${qIdx}"][data-o="${oIdx}"]`);
      if(el) el.classList.add("selected");
    }
    function submitQuiz(){
      let score = 0;
      quiz.forEach((item, idx) => {
        const correct = item.a;
        const chosen = selections[idx];
        const options = document.querySelectorAll(`.quiz-option[data-q="${idx}"]`);
        options.forEach((el, oIdx) => {
          el.classList.remove("correct","incorrect");
          if(oIdx === correct) el.classList.add("correct");
          if(chosen != null && oIdx === chosen && chosen !== correct) el.classList.add("incorrect");
        });
        if(chosen === correct) score++;
      });
      const percent = Math.round((score / quiz.length) * 100);
      document.getElementById("quizResults").innerHTML =
        `<div class="score-display">Score: ${score}/${quiz.length} (${percent}%)</div>` +
        quiz.map((item, idx) => `<div class="explanation"><strong>Q${idx+1}:</strong> ${escapeHtml(item.expl)}</div>`).join("");
    }

    // Build Your Own
    function addCompanyFromForm(){
      const name = document.getElementById("companyName").value.trim() || "New Company";
      const industry = document.getElementById("companyIndustry").value;
      const location = document.getElementById("companyLocation").value.trim() || "Unknown";
      const size = Number(document.getElementById("companySize").value || 0);
      const skills = (document.getElementById("companySkills").value || "").split(",").map(s => s.trim()).filter(Boolean);
      const roles = (document.getElementById("companyRoles").value || "").split(",").map(r => r.trim()).filter(Boolean);

      const obj = { id: nextId++, name, industry, location, size, skills, roles };
      companies.push(obj);
      setStatus(201);
      apiResponse.textContent = JSON.stringify(obj, null, 2);
      renderCompanies();
    }

    function markComplete(){
      document.getElementById("doneBtn").disabled = true;
      document.getElementById("completionMsg").style.display = "block";
    }

    // Init
    renderCompanies();
    updateAPIFields();
    renderQuiz();
  </script>
</body>
</html>
