---
layout: post
title: "Submodule 3"
description: "Search & Data Filtering with Spring Boot"
permalink: /cs-portfolio-quest/data-viz/submodule_3/
parent: "Data Visualization"
team: "Applicators"
submodule: 3
categories: [CSP, Submodule, DataVisualization]
tags: [spring-boot, search, jpql, pagination]
author: "Applicators Team"
date: 2025-10-21
---

<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Submodule 3: Search & Data Filtering</title>
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
      border: none;
      box-shadow: none;
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
    .result-card,
    .output-box{
      background: transparent;
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 16px;
      margin: 16px 0;
      box-shadow: none;
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

    /* Status badges */
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

    /* Table */
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
    .pagination{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px 0;
      gap: 10px;
    }
    .pagination button{
      padding: 8px 16px;
    }
    .search-filters{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 10px;
      margin: 16px 0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔍 Submodule 3: Search & Data Filtering</h1>
    <p><strong>Interactive Learning Module (45–60 min)</strong><br/>
      Build powerful search and filtering with <strong>Spring Data JPA, JPQL, and Specifications</strong>.</p>
    <hr/>

    <h2>🎯 Learning Objectives</h2>
    <ul>
      <li>Create derived query methods in JPA repositories</li>
      <li>Write custom JPQL queries</li>
      <li>Implement dynamic filtering with @RequestParam</li>
      <li>Add pagination using Pageable</li>
      <li>Use Spring Data Specifications for complex queries</li>
      <li>Build DTOs for optimized responses</li>
    </ul>

    <hr/>

    <h2>1. Query Methods</h2>
    <h3>Derived Query Methods</h3>
<pre><code>@Repository
public interface UserRepository extends JpaRepository&lt;User, Long&gt; {
  // Find by single field
  List&lt;User&gt; findByLocation(String location);
  
  // Find by multiple fields
  List&lt;User&gt; findByLocationAndIndustry(String location, String industry);
  
  // Comparison queries
  List&lt;User&gt; findByExperienceGreaterThan(Integer years);
  List&lt;User&gt; findBySalaryBetween(Double min, Double max);
  
  // Like queries
  List&lt;User&gt; findByFirstNameContaining(String name);
  
  // Collection queries
  List&lt;User&gt; findBySkillsContaining(String skill);
  
  // Ordering
  List&lt;User&gt; findByIndustryOrderByExperienceDesc(String industry);
  
  // Limiting results
  List&lt;User&gt; findTop10ByOrderByExperienceDesc();
}</code></pre>

    <h3>Custom JPQL Queries</h3>
<pre><code>@Repository
public interface CompanyRepository extends JpaRepository&lt;Company, Long&gt; {
  @Query("SELECT c FROM Company c WHERE c.size &gt; :minSize AND c.location = :location")
  List&lt;Company&gt; findLargeCompaniesInLocation(
    @Param("minSize") Integer minSize, 
    @Param("location") String location
  );
  
  @Query("SELECT c FROM Company c JOIN c.skills s WHERE s.name IN :skills")
  List&lt;Company&gt; findByMultipleSkills(@Param("skills") List&lt;String&gt; skills);
  
  @Query(value = "SELECT * FROM companies WHERE industry = ?1 LIMIT ?2", nativeQuery = true)
  List&lt;Company&gt; findByIndustryNative(String industry, int limit);
}</code></pre>

    <hr/>

    <h2>2. Dynamic Filtering with @RequestParam</h2>
<pre><code>@RestController
@RequestMapping("/api/search")
public class SearchController {
  @Autowired private UserRepository userRepo;
  @Autowired private CompanyRepository companyRepo;

  @GetMapping("/users")
  public ResponseEntity&lt;List&lt;User&gt;&gt; searchUsers(
    @RequestParam(required = false) String location,
    @RequestParam(required = false) String industry,
    @RequestParam(required = false) Integer minExperience,
    @RequestParam(required = false) String skill
  ) {
    // Build dynamic query based on provided parameters
    if (skill != null) {
      return ResponseEntity.ok(userRepo.findBySkillsContaining(skill));
    }
    if (location != null && industry != null) {
      return ResponseEntity.ok(userRepo.findByLocationAndIndustry(location, industry));
    }
    if (location != null) {
      return ResponseEntity.ok(userRepo.findByLocation(location));
    }
    if (minExperience != null) {
      return ResponseEntity.ok(userRepo.findByExperienceGreaterThan(minExperience));
    }
    return ResponseEntity.ok(userRepo.findAll());
  }

  @GetMapping("/companies")
  public ResponseEntity&lt;List&lt;Company&gt;&gt; searchCompanies(
    @RequestParam(required = false) String industry,
    @RequestParam(required = false) String location,
    @RequestParam(required = false) Integer minSize
  ) {
    if (industry != null && location != null) {
      return ResponseEntity.ok(companyRepo.findByIndustryAndLocation(industry, location));
    }
    if (industry != null) {
      return ResponseEntity.ok(companyRepo.findByIndustry(industry));
    }
    if (minSize != null) {
      return ResponseEntity.ok(companyRepo.findBySizeGreaterThan(minSize));
    }
    return ResponseEntity.ok(companyRepo.findAll());
  }
}</code></pre>

    <hr/>

    <h2>3. Pagination with Pageable</h2>
<pre><code>@RestController
@RequestMapping("/api/search")
public class SearchController {
  @GetMapping("/users/paginated")
  public ResponseEntity&lt;Page&lt;User&gt;&gt; getUsersPaginated(
    @RequestParam(required = false) String location,
    @PageableDefault(size = 10, sort = "id") Pageable pageable
  ) {
    if (location != null) {
      return ResponseEntity.ok(userRepo.findByLocation(location, pageable));
    }
    return ResponseEntity.ok(userRepo.findAll(pageable));
  }
}

// Update repository
@Repository
public interface UserRepository extends JpaRepository&lt;User, Long&gt; {
  Page&lt;User&gt; findByLocation(String location, Pageable pageable);
}</code></pre>

    <h3>Example Request</h3>
<pre><code>GET /api/search/users/paginated?location=NYC&page=0&size=20&sort=experience,desc</code></pre>

    <hr/>

    <h2>4. Spring Data Specifications</h2>
<pre><code>public class UserSpecifications {
  public static Specification&lt;User&gt; hasLocation(String location) {
    return (root, query, cb) -&gt; 
      location == null ? null : cb.equal(root.get("location"), location);
  }

  public static Specification&lt;User&gt; hasMinExperience(Integer years) {
    return (root, query, cb) -&gt; 
      years == null ? null : cb.greaterThanOrEqualTo(root.get("experience"), years);
  }

  public static Specification&lt;User&gt; hasSkill(String skill) {
    return (root, query, cb) -&gt; {
      if (skill == null) return null;
      return cb.isMember(skill, root.get("skills"));
    };
  }
}

@Repository
public interface UserRepository extends JpaRepository&lt;User, Long&gt;, 
                                        JpaSpecificationExecutor&lt;User&gt; {
  // Now supports .findAll(Specification)
}

@RestController
@RequestMapping("/api/search")
public class SearchController {
  @GetMapping("/users/advanced")
  public ResponseEntity&lt;List&lt;User&gt;&gt; advancedSearch(
    @RequestParam(required = false) String location,
    @RequestParam(required = false) Integer minExperience,
    @RequestParam(required = false) String skill
  ) {
    Specification&lt;User&gt; spec = Specification.where(
      UserSpecifications.hasLocation(location))
      .and(UserSpecifications.hasMinExperience(minExperience))
      .and(UserSpecifications.hasSkill(skill));
    
    return ResponseEntity.ok(userRepo.findAll(spec));
  }
}</code></pre>

    <hr/>

    <h2>5. DTOs for Optimized Responses</h2>
<pre><code>public class UserSearchDTO {
  private Long id;
  private String name;
  private String location;
  private List&lt;String&gt; skills;

  public UserSearchDTO(Long id, String firstName, String lastName, 
                       String location, List&lt;String&gt; skills) {
    this.id = id;
    this.name = firstName + " " + lastName;
    this.location = location;
    this.skills = skills;
  }
  // getters/setters
}

@Repository
public interface UserRepository extends JpaRepository&lt;User, Long&gt; {
  @Query("SELECT new com.example.demo.dto.UserSearchDTO(u.id, u.firstName, " +
         "u.lastName, u.location, u.skills) FROM User u WHERE u.location = :location")
  List&lt;UserSearchDTO&gt; findUserSummariesByLocation(@Param("location") String location);
}</code></pre>

    <hr/>

    <h2>6. Search API Endpoints Summary</h2>
    <table>
      <thead>
        <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>GET</td><td>/api/search/users?location=NYC</td><td>Filter users by location</td></tr>
        <tr><td>GET</td><td>/api/search/users?skill=Java</td><td>Filter users by skill</td></tr>
        <tr><td>GET</td><td>/api/search/users?minExperience=5</td><td>Filter by experience</td></tr>
        <tr><td>GET</td><td>/api/search/companies?industry=Tech</td><td>Filter companies by industry</td></tr>
        <tr><td>GET</td><td>/api/search/users/paginated?page=0&size=10</td><td>Paginated results</td></tr>
        <tr><td>GET</td><td>/api/search/users/advanced</td><td>Combined filters with Specifications</td></tr>
      </tbody>
    </table>

    <hr/>

    <!-- Interactive Search -->
    <div class="interactive-section">
      <h3>🔍 Interactive Exercise 1: Search Interface</h3>
      <p>Filter and search through users and companies with dynamic queries.</p>
    </div>

    <div class="api-tester">
      <h4>Search Users</h4>
      <div class="search-filters">
        <input type="text" id="searchLocation" placeholder="Location (e.g., NYC)"/>
        <input type="text" id="searchIndustry" placeholder="Industry (e.g., Tech)"/>
        <input type="number" id="searchMinExp" placeholder="Min Experience (years)"/>
        <input type="text" id="searchSkill" placeholder="Skill (e.g., Java)"/>
      </div>
      <button onclick="performSearch()">Search Users</button>
      <button class="warning" onclick="clearFilters()">Clear Filters</button>
      <button class="danger" onclick="resetData()">Reset Data</button>

      <div class="control-group">
        <label>Results <span id="resultCount" class="status-badge">0</span></label>
        <div id="searchResults"></div>
      </div>

      <div class="pagination" id="paginationControls" style="display:none">
        <button onclick="changePage(-1)">← Previous</button>
        <span id="pageInfo"></span>
        <button onclick="changePage(1)">Next →</button>
      </div>
    </div>

    <hr/>

    <!-- Code Challenge -->
    <div class="interactive-section">
      <h3>💻 Interactive Exercise 2: Code Challenge</h3>
      <p>Write a JPQL query to find all companies in a specific industry with size greater than a minimum value.</p>
    </div>

    <div class="exercise-box">
<pre><code>@Repository
public interface CompanyRepository extends JpaRepository&lt;Company, Long&gt; {
  @Query("SELECT c FROM Company c WHERE ...")
  List&lt;Company&gt; findLargeCompaniesInIndustry(
    @Param("industry") String industry,
    @Param("minSize") Integer minSize
  );
}</code></pre>
      <label for="codeAnswer"><strong>Complete the WHERE clause</strong></label>
      <textarea id="codeAnswer" placeholder="c.industry = :industry AND c.size > :minSize"></textarea>
      <button onclick="checkCodeChallenge()">Check Answer</button>
      <button class="warning" onclick="showCodeSolution()">Show Solution</button>
      <div id="codeFeedback" class="code-challenge-result"></div>
    </div>

    <hr/>

    <!-- Quiz -->
    <div class="interactive-section">
      <h3>📝 Interactive Exercise 3: Knowledge Check</h3>
      <p>Test your understanding of search and filtering.</p>
    </div>

    <div class="quiz-container" id="quizContainer"></div>
    <button onclick="submitQuiz()">Submit Quiz</button>
    <div id="quizResults"></div>

    <hr/>

    <!-- Build Query -->
    <div class="interactive-section">
      <h3>🛠️ Interactive Exercise 4: Build Your Query</h3>
      <p>Create a custom search query by selecting criteria.</p>
    </div>

    <div class="api-tester">
      <div class="control-group">
        <label>Select Search Criteria</label>
        <label><input type="checkbox" id="useLocation"/> Filter by Location</label>
        <input type="text" id="queryLocation" placeholder="Location" disabled/>
        
        <label><input type="checkbox" id="useIndustry"/> Filter by Industry</label>
        <select id="queryIndustry" disabled>
          <option>Software</option>
          <option>Healthcare</option>
          <option>Finance</option>
          <option>Education</option>
        </select>
        
        <label><input type="checkbox" id="useSkill"/> Filter by Skill</label>
        <input type="text" id="querySkill" placeholder="Skill" disabled/>
      </div>
      <button class="success" onclick="buildQuery()">Build Query</button>
      <div class="output-box" id="queryOutput">Select criteria and click "Build Query"</div>
    </div>

    <button class="completion-btn" id="doneBtn" onclick="markComplete()">Mark Module Complete</button>
    <div id="completionMsg" class="score-display" style="display:none">Great job! Module complete 🎉</div>
  </div>

  <script>
    // Sample data
    let users = [
      { id: 1, firstName: "Alice", lastName: "Johnson", location: "NYC", industry: "Tech", experience: 5, skills: ["Java","Python","SQL"] },
      { id: 2, firstName: "Bob", lastName: "Smith", location: "SF", industry: "Finance", experience: 3, skills: ["C++","Trading"] },
      { id: 3, firstName: "Carol", lastName: "Davis", location: "NYC", industry: "Tech", experience: 8, skills: ["Java","Spring","AWS"] },
      { id: 4, firstName: "David", lastName: "Wilson", location: "Austin", industry: "Healthcare", experience: 2, skills: ["Python","ML"] },
      { id: 5, firstName: "Eve", lastName: "Brown", location: "SF", industry: "Tech", experience: 6, skills: ["JavaScript","React","Node"] },
      { id: 6, firstName: "Frank", lastName: "Miller", location: "Boston", industry: "Education", experience: 10, skills: ["Java","Kubernetes"] },
      { id: 7, firstName: "Grace", lastName: "Lee", location: "NYC", industry: "Finance", experience: 4, skills: ["Python","Data Analysis"] },
      { id: 8, firstName: "Henry", lastName: "Garcia", location: "Seattle", industry: "Tech", experience: 7, skills: ["Go","Docker","K8s"] }
    ];
    const originalUsers = [...users];

    let currentPage = 0;
    const pageSize = 5;
    let filteredUsers = [...users];

    const searchResults = document.getElementById("searchResults");
    const resultCount = document.getElementById("resultCount");
    const paginationControls = document.getElementById("paginationControls");
    const pageInfo = document.getElementById("pageInfo");

    function escapeHtml(s){
      return String(s)
        .replaceAll("&","&amp;").replaceAll("<","&lt;")
        .replaceAll(">","&gt;").replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");
    }

    function performSearch(){
      const location = document.getElementById("searchLocation").value.trim();
      const industry = document.getElementById("searchIndustry").value.trim();
      const minExp = document.getElementById("searchMinExp").value;
      const skill = document.getElementById("searchSkill").value.trim();

      filteredUsers = users.filter(u => {
        if(location && u.location.toLowerCase() !== location.toLowerCase()) return false;
        if(industry && u.industry.toLowerCase() !== industry.toLowerCase()) return false;
        if(minExp && u.experience < Number(minExp)) return false;
        if(skill && !u.skills.some(s => s.toLowerCase().includes(skill.toLowerCase()))) return false;
        return true;
      });

      currentPage = 0;
      renderResults();
    }

    function renderResults(){
      const start = currentPage * pageSize;
      const end = start + pageSize;
      const page = filteredUsers.slice(start, end);

      resultCount.textContent = filteredUsers.length;
      
      if(page.length === 0){
        searchResults.innerHTML = '<div class="result-card">No results found</div>';
        paginationControls.style.display = "none";
        return;
      }

      searchResults.innerHTML = page.map(u => `
        <div class="result-card">
          <h4>${escapeHtml(u.firstName)} ${escapeHtml(u.lastName)} <span class="badge">${escapeHtml(u.industry)}</span></h4>
          <div><strong>Location:</strong> ${escapeHtml(u.location)} · <strong>Experience:</strong> ${u.experience} years</div>
          <div><strong>Skills:</strong> ${u.skills.map(s => `<span class="badge">${escapeHtml(s)}</span>`).join(" ")}</div>
        </div>
      `).join("");

      const totalPages = Math.ceil(filteredUsers.length / pageSize);
      if(totalPages > 1){
        paginationControls.style.display = "flex";
        pageInfo.textContent = `Page ${currentPage + 1} of ${totalPages}`;
      } else {
        paginationControls.style.display = "none";
      }
    }

    function changePage(delta){
      const totalPages = Math.ceil(filteredUsers.length / pageSize);
      currentPage = Math.max(0, Math.min(totalPages - 1, currentPage + delta));
      renderResults();
    }

    function clearFilters(){
      document.getElementById("searchLocation").value = "";
      document.getElementById("searchIndustry").value = "";
      document.getElementById("searchMinExp").value = "";
      document.getElementById("searchSkill").value = "";
      filteredUsers = [...users];
      currentPage = 0;
      renderResults();
    }

    function resetData(){
      users = [...originalUsers];
      clearFilters();
    }

    // Code challenge
    const codeFeedback = document.getElementById("codeFeedback");
    function checkCodeChallenge(){
      const ans = (document.getElementById("codeAnswer").value || "").trim();
      const valid = /c\.industry\s*=\s*:industry\s+AND\s+c\.size\s*>\s*:minSize/i.test(ans);
      if(valid){
        codeFeedback.className = "code-challenge-result pass";
        codeFeedback.textContent = "Correct! This JPQL query filters by both industry and size.";
      } else {
        codeFeedback.className = "code-challenge-result fail";
        codeFeedback.textContent = "Not quite. Hint: c.industry = :industry AND c.size > :minSize";
      }
    }
    function showCodeSolution(){
      document.getElementById("codeAnswer").value = "c.industry = :industry AND c.size > :minSize";
      checkCodeChallenge();
    }

    // Quiz
    const quiz = [
      { q:"What does @RequestParam(required = false) do?",
        opts:["Makes parameter optional","Validates input","Encrypts parameter","Caches result"], a:0,
        expl:"required = false makes the query parameter optional in the request." },
      { q:"Which interface enables pagination in Spring Data?",
        opts:["Pageable","Pagination","PageRequest","Sortable"], a:0,
        expl:"Pageable interface is used for pagination in Spring Data JPA." },
      { q:"What does Specification allow?",
        opts:["Static queries only","Dynamic query building","Caching","Authentication"], a:1,
        expl:"Specification enables type-safe, dynamic query building." },
      { q:"What is the purpose of DTOs?",
        opts:["Database tables","Optimized data transfer","Security","Logging"], a:1,
        expl:"DTOs (Data Transfer Objects) optimize data transfer by selecting only needed fields."
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

    // Build Query
    document.getElementById("useLocation").onchange = function(){
      document.getElementById("queryLocation").disabled = !this.checked;
    };
    document.getElementById("useIndustry").onchange = function(){
      document.getElementById("queryIndustry").disabled = !this.checked;
    };
    document.getElementById("useSkill").onchange = function(){
      document.getElementById("querySkill").disabled = !this.checked;
    };

    function buildQuery(){
      const parts = [];
      const params = [];
      
      if(document.getElementById("useLocation").checked){
        const loc = document.getElementById("queryLocation").value.trim();
        if(loc){
          parts.push("u.location = :location");
          params.push(`location="${loc}"`);
        }
      }
      
      if(document.getElementById("useIndustry").checked){
        const ind = document.getElementById("queryIndustry").value;
        parts.push("u.industry = :industry");
        params.push(`industry="${ind}"`);
      }
      
      if(document.getElementById("useSkill").checked){
        const skill = document.getElementById("querySkill").value.trim();
        if(skill){
          parts.push(":skill MEMBER OF u.skills");
          params.push(`skill="${skill}"`);
        }
      }

      if(parts.length === 0){
        document.getElementById("queryOutput").textContent = "SELECT u FROM User u";
        return;
      }

      const where = parts.join(" AND ");
      const query = `SELECT u FROM User u WHERE ${where}`;
      const paramStr = params.join(", ");
      
      document.getElementById("queryOutput").textContent = 
        `${query}\n\nParameters: ${paramStr}\n\n` +
        `Spring Data Specification code:\n` +
        `Specification.where(${parts.map((p,i) => `spec${i+1}()`).join(")\n  .and(")})`;
    }

    function markComplete(){
      document.getElementById("doneBtn").disabled = true;
      document.getElementById("completionMsg").style.display = "block";
    }

    // Init
    renderResults();
    renderQuiz();
  </script>
</body>
</html>