---
layout: post
title: "Submodule 1"
description: "User Authentication & Profile Management with Spring Boot"
permalink: /cs-portfolio-quest/data-viz/submodule_1/
parent: "Data Visualization"
team: "Applicators"
submodule: 1
categories: [CSP, Submodule, DataVisualization]
tags: [spring-boot, authentication, oauth, jpa]
author: "Applicators Team"
date: 2025-10-21
---

<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Submodule 1: User Authentication & Profile Management</title>
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
    .user-card,
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
    textarea, input[type="text"], input[type="email"], input[type="password"], input[type="number"], select{
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
    .auth-status{
      display: inline-block;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 700;
      border: 1px solid var(--border);
      margin-left: 10px;
    }
    .auth-status.logged-in{ border-color: #3f3; color: #3f3; }
    .auth-status.logged-out{ border-color: #f55; color: #f55; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔐 Submodule 1: User Authentication & Profile Management</h1>
    <p><strong>Interactive Learning Module (45–60 min)</strong><br/>
      Build a secure authentication system with <strong>Spring Boot, Spring Security, OAuth2.0, and JWT</strong>.</p>
    <hr/>

    <h2>🎯 Learning Objectives</h2>
    <ul>
      <li>Implement user registration and login with Spring Security</li>
      <li>Configure OAuth2.0 authentication (Google, GitHub, LinkedIn)</li>
      <li>Generate and validate JWT tokens</li>
      <li>Create user profile entities with JPA</li>
      <li>Build RESTful APIs for profile management (CRUD)</li>
      <li>Implement role-based access control (RBAC)</li>
    </ul>

    <hr/>

    <h2>1. Setup & Dependencies</h2>
    <h3>Dependencies (<code>pom.xml</code>)</h3>
<pre><code>&lt;dependencies&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-oauth2-client&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;io.jsonwebtoken&lt;/groupId&gt;
    &lt;artifactId&gt;jjwt&lt;/artifactId&gt;
    &lt;version&gt;0.9.1&lt;/version&gt;
  &lt;/dependency&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.xerial&lt;/groupId&gt;
    &lt;artifactId&gt;sqlite-jdbc&lt;/artifactId&gt;
  &lt;/dependency&gt;
&lt;/dependencies&gt;</code></pre>

    <h3>Configuration (<code>application.properties</code>)</h3>
<pre><code>spring.datasource.url=jdbc:sqlite:users.db
spring.datasource.driver-class-name=org.sqlite.JDBC
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# JWT Secret
jwt.secret=mySecretKey123
jwt.expiration=86400000

# OAuth2 (Google example)
spring.security.oauth2.client.registration.google.client-id=YOUR_CLIENT_ID
spring.security.oauth2.client.registration.google.client-secret=YOUR_SECRET
spring.security.oauth2.client.registration.google.scope=profile,email</code></pre>

    <hr/>

    <h2>2. User Entity</h2>
<pre><code>package com.example.demo.entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(unique = true, nullable = false)
  private String email;

  @Column(nullable = false)
  private String password;

  private String firstName;
  private String lastName;
  private String phone;
  private String education;
  private String experience;

  @ElementCollection(fetch = FetchType.EAGER)
  @CollectionTable(name = "user_skills", joinColumns = @JoinColumn(name = "user_id"))
  @Column(name = "skill")
  private Set&lt;String&gt; skills = new HashSet&lt;&gt;();

  @ElementCollection(fetch = FetchType.EAGER)
  @CollectionTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"))
  @Column(name = "role")
  private Set&lt;String&gt; roles = new HashSet&lt;&gt;();

  @Column(nullable = false)
  private boolean profilePublic = true;

  public User() {}
  public User(String email, String password, String firstName, String lastName) {
    this.email = email; this.password = password;
    this.firstName = firstName; this.lastName = lastName;
    this.roles.add("ROLE_USER");
  }
  // getters/setters...
}</code></pre>

    <hr/>

    <h2>3. Repository</h2>
<pre><code>package com.example.demo.repository;

import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository&lt;User, Long&gt; {
  Optional&lt;User&gt; findByEmail(String email);
  List&lt;User&gt; findByProfilePublic(boolean isPublic);
  List&lt;User&gt; findBySkillsContaining(String skill);
}</code></pre>

    <hr/>

    <h2>4. JWT Utility</h2>
<pre><code>package com.example.demo.security;

import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import java.util.Date;

@Component
public class JwtUtil {
  @Value("${jwt.secret}")
  private String secret;

  @Value("${jwt.expiration}")
  private Long expiration;

  public String generateToken(String email) {
    return Jwts.builder()
      .setSubject(email)
      .setIssuedAt(new Date())
      .setExpiration(new Date(System.currentTimeMillis() + expiration))
      .signWith(SignatureAlgorithm.HS512, secret)
      .compact();
  }

  public String extractEmail(String token) {
    return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
  }

  public boolean validateToken(String token) {
    try {
      Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
      return true;
    } catch (JwtException e) {
      return false;
    }
  }
}</code></pre>

    <hr/>

    <h2>5. Service Layer</h2>
<pre><code>package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
  @Autowired private UserRepository repository;
  @Autowired private PasswordEncoder passwordEncoder;

  public User registerUser(User user) {
    user.setPassword(passwordEncoder.encode(user.getPassword()));
    return repository.save(user);
  }

  public User getUserById(Long id) {
    return repository.findById(id)
      .orElseThrow(() -&gt; new RuntimeException("User not found: " + id));
  }

  public User getUserByEmail(String email) {
    return repository.findByEmail(email)
      .orElseThrow(() -&gt; new RuntimeException("User not found: " + email));
  }

  public List&lt;User&gt; getAllUsers() {
    return repository.findAll();
  }

  public User updateProfile(Long id, User updates) {
    User user = getUserById(id);
    user.setFirstName(updates.getFirstName());
    user.setLastName(updates.getLastName());
    user.setPhone(updates.getPhone());
    user.setEducation(updates.getEducation());
    user.setExperience(updates.getExperience());
    user.setSkills(updates.getSkills());
    user.setProfilePublic(updates.isProfilePublic());
    return repository.save(user);
  }

  public void deleteUser(Long id) {
    repository.delete(getUserById(id));
  }

  public boolean authenticateUser(String email, String password) {
    User user = getUserByEmail(email);
    return passwordEncoder.matches(password, user.getPassword());
  }
}</code></pre>

    <hr/>

    <h2>6. Controller (REST API)</h2>
<pre><code>package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.security.JwtUtil;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
  @Autowired private UserService service;
  @Autowired private JwtUtil jwtUtil;

  @PostMapping("/register")
  public ResponseEntity&lt;Map&lt;String,Object&gt;&gt; register(@RequestBody User user) {
    User created = service.registerUser(user);
    String token = jwtUtil.generateToken(created.getEmail());
    Map&lt;String,Object&gt; response = new HashMap&lt;&gt;();
    response.put("user", created);
    response.put("token", token);
    return ResponseEntity.status(HttpStatus.CREATED).body(response);
  }

  @PostMapping("/login")
  public ResponseEntity&lt;Map&lt;String,Object&gt;&gt; login(@RequestBody Map&lt;String,String&gt; credentials) {
    String email = credentials.get("email");
    String password = credentials.get("password");
    if (service.authenticateUser(email, password)) {
      String token = jwtUtil.generateToken(email);
      User user = service.getUserByEmail(email);
      Map&lt;String,Object&gt; response = new HashMap&lt;&gt;();
      response.put("user", user);
      response.put("token", token);
      return ResponseEntity.ok(response);
    }
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
  }
}

@RestController
@RequestMapping("/api/users")
public class UserController {
  @Autowired private UserService service;

  @GetMapping("/{id}")
  public ResponseEntity&lt;User&gt; getUser(@PathVariable Long id) {
    return ResponseEntity.ok(service.getUserById(id));
  }

  @GetMapping
  public ResponseEntity&lt;List&lt;User&gt;&gt; getAllUsers() {
    return ResponseEntity.ok(service.getAllUsers());
  }

  @PutMapping("/{id}")
  public ResponseEntity&lt;User&gt; updateProfile(@PathVariable Long id, @RequestBody User user) {
    return ResponseEntity.ok(service.updateProfile(id, user));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity&lt;Void&gt; deleteUser(@PathVariable Long id) {
    service.deleteUser(id);
    return ResponseEntity.noContent().build();
  }
}</code></pre>

    <hr/>

    <h2>7. Security Configuration</h2>
<pre><code>package com.example.demo.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
      .csrf().disable()
      .authorizeRequests()
        .antMatchers("/api/auth/**").permitAll()
        .anyRequest().authenticated()
      .and()
      .oauth2Login();
    return http.build();
  }
}</code></pre>

    <hr/>

    <h2>8. API Endpoints Summary</h2>
    <table>
      <thead>
        <tr><th>Method</th><th>Endpoint</th><th>Description</th><th>Auth</th></tr>
      </thead>
      <tbody>
        <tr><td>POST</td><td>/api/auth/register</td><td>Register new user</td><td>No</td></tr>
        <tr><td>POST</td><td>/api/auth/login</td><td>Login user</td><td>No</td></tr>
        <tr><td>GET</td><td>/api/users/{id}</td><td>Get user by ID</td><td>Yes</td></tr>
        <tr><td>GET</td><td>/api/users</td><td>Get all users</td><td>Yes</td></tr>
        <tr><td>PUT</td><td>/api/users/{id}</td><td>Update profile</td><td>Yes</td></tr>
        <tr><td>DELETE</td><td>/api/users/{id}</td><td>Delete user</td><td>Yes</td></tr>
      </tbody>
    </table>

    <hr/>

    <!-- Interactive Auth Simulator -->
    <div class="interactive-section">
      <h3>🔑 Interactive Exercise 1: Authentication Simulator</h3>
      <p>Test user registration, login, and JWT token generation.</p>
      <div>Current Status: <span id="authStatus" class="auth-status logged-out">Logged Out</span></div>
    </div>

    <div class="api-tester">
      <h4>Register New User</h4>
      <input type="email" id="regEmail" placeholder="Email"/>
      <input type="password" id="regPassword" placeholder="Password"/>
      <input type="text" id="regFirstName" placeholder="First Name"/>
      <input type="text" id="regLastName" placeholder="Last Name"/>
      <button class="success" onclick="registerUser()">Register</button>

      <h4>Login</h4>
      <input type="email" id="loginEmail" placeholder="Email"/>
      <input type="password" id="loginPassword" placeholder="Password"/>
      <button onclick="loginUser()">Login</button>
      <button class="danger" onclick="logoutUser()">Logout</button>

      <div class="control-group">
        <label>Response <span id="authStatusBadge" class="status-badge"></span></label>
        <div class="output-box" id="authResponse">No requests yet...</div>
      </div>
    </div>

    <h3>Registered Users</h3>
    <div id="usersList"></div>

    <hr/>

    <!-- Code Challenge -->
    <div class="interactive-section">
      <h3>💻 Interactive Exercise 2: Code Challenge</h3>
      <p>Write a repository method to find all users with a specific skill.</p>
    </div>

    <div class="exercise-box">
<pre><code>@Repository
public interface UserRepository extends JpaRepository&lt;User, Long&gt; {
  // TODO: Method to find users by skill (use @Query or derived query)
}</code></pre>
      <label for="codeAnswer"><strong>Your Answer (single line)</strong></label>
      <textarea id="codeAnswer" placeholder="List<User> findBySkillsContaining(String skill);"></textarea>
      <button onclick="checkCodeChallenge()">Check Answer</button>
      <button class="warning" onclick="showCodeSolution()">Show Solution</button>
      <div id="codeFeedback" class="code-challenge-result"></div>
    </div>

    <hr/>

    <!-- Quiz -->
    <div class="interactive-section">
      <h3>📝 Interactive Exercise 3: Knowledge Check</h3>
      <p>Test your understanding of authentication and security.</p>
    </div>

    <div class="quiz-container" id="quizContainer"></div>
    <button onclick="submitQuiz()">Submit Quiz</button>
    <div id="quizResults"></div>

    <hr/>

    <!-- Profile Editor -->
    <div class="interactive-section">
      <h3>👤 Interactive Exercise 4: Edit Your Profile</h3>
      <p>Update your user profile (must be logged in).</p>
    </div>

    <div class="api-tester">
      <div id="profileEditor" style="display:none">
        <input type="text" id="editFirstName" placeholder="First Name"/>
        <input type="text" id="editLastName" placeholder="Last Name"/>
        <input type="text" id="editPhone" placeholder="Phone"/>
        <input type="text" id="editEducation" placeholder="Education"/>
        <textarea id="editExperience" placeholder="Experience"></textarea>
        <input type="text" id="editSkills" placeholder="Skills (comma-separated)"/>
        <label>
          <input type="checkbox" id="editPublic"/> Profile is public
        </label>
        <br/>
        <button class="success" onclick="updateProfile()">Update Profile</button>
      </div>
      <div id="profileMessage" class="output-box">Please log in to edit your profile.</div>
    </div>

    <button class="completion-btn" id="doneBtn" onclick="markComplete()">Mark Module Complete</button>
    <div id="completionMsg" class="score-display" style="display:none">Great job! Module complete 🎉</div>
  </div>

  <script>
    // In-memory DB
    let users = [
      { id: 1, email: "john@example.com", password: "hashed123", firstName: "John", lastName: "Doe", 
        phone: "555-0100", education: "BS Computer Science", experience: "5 years Java dev", 
        skills: ["Java","Spring","SQL"], roles: ["ROLE_USER"], profilePublic: true }
    ];
    let nextId = 2;
    let currentUser = null;
    let currentToken = null;

    const authStatus = document.getElementById("authStatus");
    const authStatusBadge = document.getElementById("authStatusBadge");
    const authResponse = document.getElementById("authResponse");
    const usersList = document.getElementById("usersList");
    const profileEditor = document.getElementById("profileEditor");
    const profileMessage = document.getElementById("profileMessage");

    function escapeHtml(s){
      return String(s)
        .replaceAll("&","&amp;").replaceAll("<","&lt;")
        .replaceAll(">","&gt;").replaceAll('"',"&quot;")
        .replaceAll("'","&#039;");
    }

    function simpleHash(pass){
      return "hashed_" + pass;
    }

    function generateToken(email){
      return "jwt_" + btoa(email + Date.now());
    }

    function renderUsers(){
      usersList.innerHTML = users.map(u => `
        <div class="user-card">
          <h4>${escapeHtml(u.firstName)} ${escapeHtml(u.lastName)} <span class="badge">${escapeHtml(u.email)}</span></h4>
          <div><strong>Education:</strong> ${escapeHtml(u.education || "N/A")}</div>
          <div><strong>Experience:</strong> ${escapeHtml(u.experience || "N/A")}</div>
          <div><strong>Skills:</strong> ${(u.skills||[]).map(s => `<span class="badge">${escapeHtml(s)}</span>`).join(" ")}</div>
          <div><strong>Public:</strong> ${u.profilePublic ? "Yes" : "No"}</div>
          <div><em>ID: ${u.id}</em></div>
        </div>
      `).join("");
    }

    function updateAuthStatus(){
      if(currentUser){
        authStatus.textContent = `Logged In (${currentUser.email})`;
        authStatus.className = "auth-status logged-in";
        profileEditor.style.display = "block";
        profileMessage.style.display = "none";
        populateProfileForm();
      } else {
        authStatus.textContent = "Logged Out";
        authStatus.className = "auth-status logged-out";
        profileEditor.style.display = "none";
        profileMessage.style.display = "block";
      }
    }

    function registerUser(){
      const email = document.getElementById("regEmail").value.trim();
      const password = document.getElementById("regPassword").value;
      const firstName = document.getElementById("regFirstName").value.trim();
      const lastName = document.getElementById("regLastName").value.trim();

      if(!email || !password || !firstName || !lastName){
        authStatusBadge.textContent = "400";
        authResponse.textContent = "All fields required";
        return;
      }

      if(users.find(u => u.email === email)){
        authStatusBadge.textContent = "409";
        authResponse.textContent = "Email already exists";
        return;
      }

      const user = {
        id: nextId++,
        email, password: simpleHash(password), firstName, lastName,
        phone: "", education: "", experience: "", skills: [], roles: ["ROLE_USER"], profilePublic: true
      };
      users.push(user);
      const token = generateToken(email);
      currentUser = user;
      currentToken = token;

      authStatusBadge.textContent = "201";
      authResponse.textContent = JSON.stringify({ user, token }, null, 2);
      updateAuthStatus();
      renderUsers();
    }

    function loginUser(){
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;

      const user = users.find(u => u.email === email && u.password === simpleHash(password));
      if(user){
        const token = generateToken(email);
        currentUser = user;
        currentToken = token;
        authStatusBadge.textContent = "200";
        authResponse.textContent = JSON.stringify({ user, token }, null, 2);
        updateAuthStatus();
      } else {
        authStatusBadge.textContent = "401";
        authResponse.textContent = "Invalid credentials";
      }
    }

    function logoutUser(){
      currentUser = null;
      currentToken = null;
      authStatusBadge.textContent = "200";
      authResponse.textContent = "Logged out successfully";
      updateAuthStatus();
    }

    function populateProfileForm(){
      if(!currentUser) return;
      document.getElementById("editFirstName").value = currentUser.firstName || "";
      document.getElementById("editLastName").value = currentUser.lastName || "";
      document.getElementById("editPhone").value = currentUser.phone || "";
      document.getElementById("editEducation").value = currentUser.education || "";
      document.getElementById("editExperience").value = currentUser.experience || "";
      document.getElementById("editSkills").value = (currentUser.skills || []).join(", ");
      document.getElementById("editPublic").checked = currentUser.profilePublic;
    }

    function updateProfile(){
      if(!currentUser){
        profileMessage.textContent = "Please log in first";
        return;
      }

      const firstName = document.getElementById("editFirstName").value.trim();
      const lastName = document.getElementById("editLastName").value.trim();
      const phone = document.getElementById("editPhone").value.trim();
      const education = document.getElementById("editEducation").value.trim();
      const experience = document.getElementById("editExperience").value.trim();
      const skillsRaw = document.getElementById("editSkills").value;
      const skills = skillsRaw.split(",").map(s => s.trim()).filter(Boolean);
      const profilePublic = document.getElementById("editPublic").checked;

      currentUser.firstName = firstName;
      currentUser.lastName = lastName;
      currentUser.phone = phone;
      currentUser.education = education;
      currentUser.experience = experience;
      currentUser.skills = skills;
      currentUser.profilePublic = profilePublic;

      authStatusBadge.textContent = "200";
      authResponse.textContent = "Profile updated:\n" + JSON.stringify(currentUser, null, 2);
      renderUsers();
    }

    // Code challenge
    const codeFeedback = document.getElementById("codeFeedback");
    function checkCodeChallenge(){
      const ans = (document.getElementById("codeAnswer").value || "").trim().replace(/\s+/g," ");
      const valid = /^List<\s*User\s*>\s*findBySkillsContaining\s*\(\s*String\s+\w+\s*\);\s*$/i.test(ans);
      if(valid){
        codeFeedback.className = "code-challenge-result pass";
        codeFeedback.textContent = "Correct! Spring Data JPA will search within collections.";
      } else {
        codeFeedback.className = "code-challenge-result fail";
        codeFeedback.textContent = "Not quite. Hint: List<User> findBySkillsContaining(String skill);";
      }
    }
    function showCodeSolution(){
      document.getElementById("codeAnswer").value = "List<User> findBySkillsContaining(String skill);";
      checkCodeChallenge();
    }

    // Quiz
    const quiz = [
      { q:"What does JWT stand for?",
        opts:["Java Web Token","JSON Web Token","JavaScript Web Token","Just Working Token"], a:1,
        expl:"JWT stands for JSON Web Token, used for stateless authentication." },
      { q:"Which annotation enables Spring Security?",
        opts:["@EnableSecurity","@SecurityConfig","@EnableWebSecurity","@Secure"], a:2,
        expl:"@EnableWebSecurity enables Spring Security in your application." },
      { q:"What does BCryptPasswordEncoder do?",
        opts:["Encrypts JWT tokens","Hashes passwords securely","Validates OAuth tokens","Generates API keys"], a:1,
        expl:"BCryptPasswordEncoder hashes passwords using the BCrypt algorithm." },
      { q:"Which HTTP status code is returned for unauthorized access?",
        opts:["400","401","403","404"], a:1,
        expl:"401 Unauthorized indicates authentication is required."
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

    function markComplete(){
      document.getElementById("doneBtn").disabled = true;
      document.getElementById("completionMsg").style.display = "block";
    }

    // Init
    renderUsers();
    updateAuthStatus();
    renderQuiz();
  </script>
</body>
</html>