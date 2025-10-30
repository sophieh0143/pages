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

<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Module 1: User Authentication & Profile Management — Mini</title>
<style>
:root{
  --bg:#000;--text:#fff;--muted:#bbb;--muted-2:#888;--border:#333;
  --panel:#0b0b0b;--panel-2:#111;--accent:#ddd;--accent-2:#aaa;
}
*{box-sizing:border-box} html,body{height:100%}
body{
  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
  background:var(--bg);color:var(--text);max-width:1200px;margin:0 auto;padding:20px;line-height:1.6;
}
.container{padding:32px 0}
h1{color:var(--text);border-bottom:1px solid var(--border);padding-bottom:8px;margin:0 0 20px}
h2,h3{color:var(--text);margin-top:24px}
p,li,label,small{color:var(--muted)}
a{color:var(--accent);text-decoration:none} a:hover{text-decoration:underline}
.card, .panel, .out, .block, .pill{
  background:transparent;border:1px solid var(--border);border-radius:8px;padding:14px;margin:12px 0;color:var(--text)
}
pre{background:var(--panel-2);border:1px solid var(--border);border-radius:8px;padding:12px;overflow:auto;color:#eee}
code{font-family:'Courier New',Consolas,monospace;background:var(--panel);border:1px solid var(--border);border-radius:4px;padding:1px 5px;color:#eee}
input,textarea,select{
  width:100%;padding:10px;border:1px solid var(--border);border-radius:8px;background:var(--panel-2);color:var(--text);
  font-family:ui-monospace,SFMono-Regular,Consolas;font-size:13px;margin:8px 0;
}
textarea{min-height:110px}
button{
  background:#1a1a1a;color:var(--text);border:1px solid var(--border);padding:10px 14px;border-radius:8px;cursor:pointer;font-weight:700;margin:6px 6px 6px 0
}
button:hover{transform:translateY(-1px);border-color:var(--accent-2)}
.grid{display:grid;gap:10px}
.grid-2{grid-template-columns:repeat(2,minmax(0,1fr))}
.nav{display:flex;gap:8px;flex-wrap:wrap;margin:10px 0 14px}
.nav button{background:#101010;border:1px solid var(--border)} .nav button.active{border-color:#aaa}
.hidden{display:none}
.badge{display:inline-block;border:1px solid var(--border);border-radius:999px;padding:2px 8px;color:#aaa;font-size:11px;margin-left:6px}
.pill{display:inline-block;padding:3px 8px;border-radius:999px}
.ok{border-color:#3f3;color:#3f3} .warn{border-color:#ffa500;color:#ffa500} .err{border-color:#f55;color:#f55}
.out{white-space:pre-wrap;font-family:ui-monospace,SFMono-Regular,Consolas}
.kbd{font-family:ui-monospace,SFMono-Regular,Consolas;border:1px solid var(--border);border-radius:6px;padding:2px 6px;background:#111;color:#ddd}
.rule{border:none;border-top:1px solid var(--border);margin:18px 0}
.quiz .opt{border:1px solid var(--border);border-radius:8px;padding:8px;margin:6px 0;cursor:pointer;color:var(--muted)}
.quiz .opt.sel{border-color:#aaa;color:#fff} .quiz .opt.good{border-color:#3f3} .quiz .opt.bad{border-color:#f55}
.str-bar{height:8px;border-radius:6px;background:#1b1b1b;border:1px solid #333;overflow:hidden}
.str-bar>div{height:100%;width:0%;background:#555;transition:width .2s}
table{width:100%;border-collapse:collapse} th,td{border:1px solid var(--border);padding:10px;text-align:left;color:var(--muted)}
th{color:var(--text)}
</style>
</head>
<body>
<div class="container">
  <h1>🔐 Module 1: User Authentication & Profile Management <span class="badge">mini</span></h1>
  <p>Goals: registration/login, JWT, OAuth2 mock, RBAC, profile CRUD. Everything is **interactive**—use the widgets below.</p>

  <div class="nav">
    <button class="active" data-tab="auth">Auth Simulator</button>
    <button data-tab="jwt">JWT Tools</button>
    <button data-tab="rbac">RBAC Guard</button>
    <button data-tab="prof">Profile Editor</button>
    <button data-tab="kata">Code Kata</button>
    <button data-tab="quiz">Quick Quiz</button>
    <button data-tab="snips">Spring Snips</button>
  </div>

  <!-- AUTH SIMULATOR -->
  <section id="auth" class="card">
    <h3>🔑 Auth Simulator</h3>
    <div>Auth Status: <span id="aStat" class="pill err">Logged Out</span></div>
    <div class="grid grid-2">
      <div class="panel">
        <h4>Register</h4>
        <input id="rEmail" type="email" placeholder="Email"/>
        <div>
          <input id="rPass" type="password" placeholder="Password" oninput="pwStrength(this.value)"/>
          <div class="str-bar" title="password strength"><div id="str"></div></div>
          <small id="strLabel"></small>
        </div>
        <input id="rFirst" placeholder="First name"/>
        <input id="rLast" placeholder="Last name"/>
        <button onclick="register()">Register</button>
      </div>
      <div class="panel">
        <h4>Login</h4>
        <input id="lEmail" type="email" placeholder="Email"/>
        <input id="lPass" type="password" placeholder="Password"/>
        <button onclick="login()">Login</button>
        <button onclick="logout()">Logout</button>
        <div style="margin-top:8px">
          <button onclick="oauth('google')">Continue with Google</button>
          <button onclick="oauth('github')">GitHub</button>
        </div>
      </div>
    </div>
    <label>Response</label>
    <pre id="authOut" class="out">No requests yet…</pre>

    <h4>Users</h4>
    <div id="uList"></div>
  </section>

  <!-- JWT TOOLS -->
  <section id="jwt" class="card hidden">
    <h3>🎫 JWT Tools (mock)</h3>
    <div class="grid grid-2">
      <div class="panel">
        <h4>Encode (email → JWT)</h4>
        <input id="jEmail" placeholder="email@example.com"/>
        <button onclick="genJwt()">Generate</button>
        <pre id="jwtTok" class="out"></pre>
      </div>
      <div class="panel">
        <h4>Decode (header.payload.signature)</h4>
        <textarea id="jIn" placeholder="Paste a JWT"></textarea>
        <button onclick="decJwt()">Decode</button>
        <pre id="jwtOut" class="out"></pre>
      </div>
    </div>
    <small>Note: This uses a simplified mock encoder/decoder to visualize structure.</small>
  </section>

  <!-- RBAC GUARD -->
  <section id="rbac" class="card hidden">
    <h3>🛡️ RBAC Route Guard</h3>
    <p>Select a protected route and check access against current user roles.</p>
    <div class="grid grid-2">
      <div class="panel">
        <label>Route</label>
        <select id="route">
          <option value="ROLE_USER">/profile (ROLE_USER)</option>
          <option value="ROLE_ADMIN">/admin (ROLE_ADMIN)</option>
        </select>
        <button onclick="checkRoute()">Check Access</button>
        <pre id="guardOut" class="out"></pre>
      </div>
      <div class="panel">
        <label>Modify Current Roles (comma)</label>
        <input id="roleEdit" placeholder="ROLE_USER, ROLE_ADMIN"/>
        <button onclick="setRoles()">Set Roles</button>
        <pre id="roleOut" class="out"></pre>
      </div>
    </div>
  </section>

  <!-- PROFILE EDITOR -->
  <section id="prof" class="card hidden">
    <h3>👤 Profile Editor</h3>
    <div id="pMsg" class="out">Login to edit your profile.</div>
    <div id="pForm" class="hidden">
      <div class="grid grid-2">
        <div><label>First</label><input id="pFirst"/></div>
        <div><label>Last</label><input id="pLast"/></div>
        <div><label>Phone</label><input id="pPhone"/></div>
        <div><label>Education</label><input id="pEdu"/></div>
      </div>
      <label>Experience</label><textarea id="pExp"></textarea>
      <label>Skills (comma)</label><input id="pSkills" placeholder="Java, Spring, SQL"/>
      <label><input type="checkbox" id="pPublic"/> Public Profile</label>
      <button onclick="saveProfile()">Save</button>
      <pre id="pOut" class="out"></pre>
    </div>
  </section>

  <!-- CODE KATA -->
  <section id="kata" class="card hidden">
    <h3>💻 Code Kata (1-liner)</h3>
    <p>Repository method to fetch a user by email <em>(unique)</em>.</p>
    <input id="kataIn" placeholder="Optional<User> findByEmail(String email);" />
    <button onclick="checkKata()">Check</button>
    <span id="kataMsg" style="margin-left:8px"></span>
    <hr class="rule"/>
    <p>Bonus (show admin users):</p>
    <input id="kataIn2" placeholder='List<User> findByRolesContaining("ROLE_ADMIN");' />
    <button onclick="checkKata2()">Check</button>
    <span id="kataMsg2" style="margin-left:8px"></span>
  </section>

  <!-- QUIZ -->
  <section id="quiz" class="card hidden">
    <h3>📝 Quick Quiz</h3>
    <div id="qBox" class="quiz"></div>
    <button onclick="grade()">Grade</button>
    <div id="qScore" style="margin-top:8px"></div>
  </section>

  <!-- SPRING SNIPS -->
  <section id="snips" class="card hidden">
    <details open>
      <summary>🔗 Repository</summary>
      <pre>public interface UserRepository extends JpaRepository&lt;User, Long&gt; {
  Optional&lt;User&gt; findByEmail(String email);
  List&lt;User&gt; findByProfilePublic(boolean isPublic);
  List&lt;User&gt; findByRolesContaining(String role);
}</pre>
    </details>
    <details>
      <summary>🔐 Security (very small)</summary>
      <pre>@Configuration
class SecurityConfig {
  @Bean PasswordEncoder passwordEncoder(){ return new BCryptPasswordEncoder(); }
  @Bean SecurityFilterChain chain(HttpSecurity http) throws Exception {
    http.csrf().disable()
       .authorizeHttpRequests(a->a.requestMatchers("/api/auth/**").permitAll().anyRequest().authenticated())
       .oauth2Login();
    return http.build();
  }
}</pre>
    </details>
    <details>
      <summary>⚙️ application.properties</summary>
      <pre>spring.datasource.url=jdbc:sqlite:users.db
spring.datasource.driver-class-name=org.sqlite.JDBC
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
jwt.secret=demoSecret
jwt.expiration=86400000</pre>
    </details>
    <small>Keep the focus on the interactive practice above.</small>
  </section>

  <hr class="rule"/>
  <small>Tip: Treat the simulator like Postman; replicate in your real Spring app.</small>
</div>

<script>
// ---------- Tabs ----------
document.querySelectorAll('.nav button').forEach(btn=>{
  btn.onclick=()=>{
    document.querySelectorAll('.nav button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const t=btn.dataset.tab;
    document.querySelectorAll('section').forEach(s=>s.classList.add('hidden'));
    document.getElementById(t).classList.remove('hidden');
  };
});

// ---------- In-memory "backend" ----------
let users=[
  { id:1, email:"john@example.com", passHash:"hashed_secret", first:"John", last:"Doe",
    phone:"555-0100", edu:"BS CS", exp:"3y Java", skills:["Java","Spring","SQL"], roles:["ROLE_USER"], public:true }
];
let nextId=2;
let current=null;         // current user object
let token=null;           // mock token

const $ = (id)=>document.getElementById(id);
const show = (el,flag)=>el.classList.toggle('hidden',!flag);

function escapeHtml(s){return String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#039;");}
function hash(p){return "hashed_"+p}
function mkToken(email){return "jwt_"+btoa(email+"."+Date.now())}
function renderUsers(){
  $('uList').innerHTML = users.map(u=>`
    <div class="panel">
      <strong>${escapeHtml(u.first)} ${escapeHtml(u.last)}</strong> <span class="badge">${escapeHtml(u.email)}</span><br/>
      ${escapeHtml(u.edu||"")} · ${escapeHtml(u.phone||"")}<br/>
      ${(u.skills||[]).map(s=>`<span class="badge">${escapeHtml(s)}</span>`).join(' ')}<br/>
      roles: ${(u.roles||[]).join(', ')} · public: ${u.public}
    </div>
  `).join('');
}
function setAuthUI(){
  const pill = $('aStat');
  if(current){
    pill.textContent=`Logged In (${current.email})`; pill.className="pill ok";
    $('authOut').textContent = JSON.stringify({user:current, token}, null, 2);
    $('pMsg').textContent=""; show($('pForm'), true);
    fillProfile();
  }else{
    pill.textContent="Logged Out"; pill.className="pill err";
    show($('pForm'), false); $('pMsg').textContent="Login to edit your profile.";
  }
}
function result(outEl, code, obj){ outEl.textContent = (code?`HTTP ${code}\n`:"") + (obj?JSON.stringify(obj,null,2):""); }

// ---------- Password strength ----------
function pwStrength(v){
  const meter=$('str'), lbl=$('strLabel');
  let score=0;
  if(v.length>=8)score+=25;
  if(/[A-Z]/.test(v))score+=25;
  if/[0-9]/.test(v)score+=25;
  if(/[^A-Za-z0-9]/.test(v))score+=25;
  meter.style.width=score+"%";
  meter.style.background = score<50?"#f55":score<75?"#ffa500":"#3f3";
  lbl.textContent = score<50?"weak":score<75?"medium":"strong";
}

// ---------- Auth actions ----------
function register(){
  const email=$('rEmail').value.trim(), pass=$('rPass').value,
        first=$('rFirst').value.trim(), last=$('rLast').value.trim();
  if(!email||!pass||!first||!last){ result($('authOut'), 400, {error:"All fields required"}); return; }
  if(users.find(u=>u.email===email)){ result($('authOut'), 409, {error:"Email exists"}); return; }
  const u={ id:nextId++, email, passHash:hash(pass), first,last, phone:"",edu:"",exp:"",skills:[],roles:["ROLE_USER"], public:true };
  users.push(u); current=u; token=mkToken(email);
  result($('authOut'), 201, {user:u, token}); renderUsers(); setAuthUI();
}
function login(){
  const email=$('lEmail').value.trim(), pass=$('lPass').value;
  const u=users.find(x=>x.email===email && x.passHash===hash(pass));
  if(!u){ result($('authOut'), 401, {error:"Invalid credentials"}); return; }
  current=u; token=mkToken(email); result($('authOut'), 200, {user:u, token}); setAuthUI();
}
function logout(){ current=null; token=null; result($('authOut'), 200, {message:"Logged out"}); setAuthUI(); }

// ---------- JWT Tools (mock) ----------
function genJwt(){
  const email=$('jEmail').value.trim(); if(!email){$('jwtTok').textContent="";return;}
  const hdr=btoa(JSON.stringify({alg:"HS256",typ:"JWT"}));
  const pl=btoa(JSON.stringify({sub:email,iat:Date.now()}));
  const sig=btoa("sig"); const tok=[hdr,pl,sig].join('.');
  $('jwtTok').textContent=tok; $('jIn').value=tok;
}
function decJwt(){
  const t=$('jIn').value.trim(); if(!t){$('jwtOut').textContent="";return;}
  const parts=t.split('.'); if(parts.length!==3){$('jwtOut').textContent="Invalid format";return;}
  const [h,p,s]=parts;
  const safe = (x)=>{try{return atob(x)}catch(e){return "(bad base64)"}}
  $('jwtOut').textContent = `Header: ${safe(h)}\nPayload: ${safe(p)}\nSignature: ${s}`;
}

// ---------- RBAC ----------
function checkRoute(){
  const need=$('route').value;
  const ok = !!current && (current.roles||[]).includes(need);
  $('guardOut').textContent = ok ? `✅ Access granted to route requiring ${need}` : `❌ Access denied: missing ${need}`;
}
function setRoles(){
  if(!current){$('roleOut').textContent="Login first";return;}
  const roles=($('roleEdit').value||"").split(',').map(s=>s.trim()).filter(Boolean);
  current.roles=roles.length?roles:["ROLE_USER"];
  $('roleOut').textContent="Roles updated: "+current.roles.join(', ');
}

// ---------- Profile ----------
function fillProfile(){
  if(!current) return;
  $('pFirst').value=current.first||"";
  $('pLast').value=current.last||"";
  $('pPhone').value=current.phone||"";
  $('pEdu').value=current.edu||"";
  $('pExp').value=current.exp||"";
  $('pSkills').value=(current.skills||[]).join(', ');
  $('pPublic').checked=!!current.public;
}
function saveProfile(){
  if(!current){$('pOut').textContent="Login first";return;}
  current.first=$('pFirst').value.trim();
  current.last=$('pLast').value.trim();
  current.phone=$('pPhone').value.trim();
  current.edu=$('pEdu').value.trim();
  current.exp=$('pExp').value.trim();
  current.skills=($('pSkills').value||"").split(',').map(s=>s.trim()).filter(Boolean);
  current.public=$('pPublic').checked;
  $('pOut').textContent="Updated:\n"+JSON.stringify(current,null,2);
  renderUsers(); setAuthUI();
}

// ---------- Code Kata ----------
function checkKata(){
  const v=($('kataIn').value||'').trim().replace(/\s+/g,' ');
  const ok=/^Optional<\s*User\s*>\s*findByEmail\s*\(\s*String\s+\w+\s*\);\s*$/i.test(v);
  $('kataMsg').textContent = ok ? '✅ Correct' : '❌ Try: Optional<User> findByEmail(String email);';
  $('kataMsg').style.color = ok ? '#bfffbf' : '#ffb3b3';
}
function checkKata2(){
  const v=($('kataIn2').value||'').trim().replace(/\s+/g,' ');
  const ok=/^List<\s*User\s*>\s*findByRolesContaining\s*\(\s*String\s+\w+\s*\);\s*$/i.test(v);
  $('kataMsg2').textContent = ok ? '✅ Correct' : '❌ Try: List<User> findByRolesContaining(String role);';
  $('kataMsg2').style.color = ok ? '#bfffbf' : '#ffb3b3';
}

// ---------- Quiz ----------
const quiz=[
  {q:'JWT is typically sent via which header?', opts:['X-Auth','Authorization: Bearer <token>','Cookie: jwt','X-JWT'], a:1},
  {q:'Strongest password choice?', opts:['8 lower','12 mixed','10 digits','password1!'], a:1},
  {q:'403 vs 401?', opts:['403=auth required,401=forbidden','401=auth required,403=forbidden','same','neither'], a:1},
];
const picks={};
function renderQuiz(){
  const box=$('qBox'); box.innerHTML='';
  quiz.forEach((it,i)=>{
    const wrap=document.createElement('div');
    wrap.innerHTML=`<div style="margin:6px 0"><strong>Q${i+1}.</strong> ${it.q}</div>`;
    it.opts.forEach((o,oi)=>{
      const el=document.createElement('div'); el.className='opt'; el.textContent=o; el.dataset.i=i; el.dataset.oi=oi;
      el.onclick=()=>{picks[i]=oi; box.querySelectorAll(`.opt[data-i="${i}"]`).forEach(x=>x.classList.remove('sel')); el.classList.add('sel');};
      wrap.appendChild(el);
    });
    box.appendChild(wrap);
  });
}
function grade(){
  let s=0;
  document.querySelectorAll('.opt').forEach(el=>el.classList.remove('good','bad'));
  quiz.forEach((it,i)=>{ const pick=picks[i]; if(pick===it.a) s++; const opts=[...document.querySelectorAll(`.opt[data-i="${i}"]`)]; opts[it.a].classList.add('good'); if(pick!=null&&pick!==it.a) opts[pick].classList.add('bad');});
  $('qScore').textContent=`Score: ${s}/${quiz.length}`;
}

// ---------- Init ----------
renderUsers(); setAuthUI(); renderQuiz();
</script>
</body>






