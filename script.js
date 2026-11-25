
var states={
public:["Anyone on the web can find and view this profile.",0],
link:["Only people with the private link can view it. It won’t appear in search.",0],
school:["Only verified teachers and students of this school can view it.",1],
private:["Only Maria can see this. Share it with a teacher for feedback first.",2]};
var curP="public",lang="en",curI=0;
var statesFil={public:"Makikita at mahahanap ng sinuman sa web ang profile na ito.",link:"Ang mga may pribadong link lang ang makakakita. Hindi ito lalabas sa paghahanap.",school:"Ang mga na-verify na guro at estudyante lang ng paaralang ito ang makakakita.",private:"Si Maria lang ang makakakita nito. Ibahagi muna sa guro para sa feedback."};
function tr(e,f){return lang==="fil"?f:e}
var stEl=document.getElementById("state");
function setP(p){
  curP=p;
  document.querySelectorAll(".seg button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.p===p)});
  stEl.textContent=lang==="fil"?statesFil[p]:states[p][0];
  var lv=states[p][1];
  document.querySelectorAll(".proj").forEach(function(e){e.classList.toggle("locked",lv>=2)});
  document.querySelectorAll(".demo .profile span,.demo .chips").forEach(function(e){e.classList.toggle("locked",lv>=2)});
}
document.querySelectorAll(".seg button").forEach(function(b){b.onclick=function(){setP(b.dataset.p)}});
setP("public");

var probs=[
["Skills beyond grades","Students can’t prove what they can do beyond a report card.",["Project showcases with documents, images, video and code links","Skill tags and badges viewers can filter by","Reflection prompts: what I learned, what I’d change","Teacher and mentor endorsements"],"Employers and schools see evidence, not only a GPA."],
["Getting noticed","Fresh graduates without connections get overlooked.",["Public profile with a shareable link","Search by course, skill, school or location","One-click resume export from portfolio content","Employer view with contact and shortlist","Internship and job board matched to skills"],"Students without connections gain visibility."],
["Scattered work","Files end up on old phones, flash drives and lost accounts.",["Cloud storage organized by semester and project","Auto-backup and version history","Import from Google Drive, GitHub and YouTube","Mobile-friendly upload"],"Years of schoolwork stay safe in one place."],
["Little feedback","Students present work before anyone has reviewed it.",["Comments from teachers, peers and mentors","Private drafts shared for review before going public","Rubric-based reviews","Progress timeline that shows growth"],"Students improve before the world sees their work."],
["Unequal access","Slow internet and language gaps keep students out.",["Low-bandwidth mode and file compression","Generous free tier","English, Filipino and regional languages","Alt-text prompts, screen-reader support, high contrast","Scholarship and competition alerts"],"Rural and low-income students compete on equal footing."],
["Trust in the work","Viewers can’t tell whether work is real.",["Plagiarism check on uploads","Verified school accounts","Teacher-verified badges","Group project contribution tracking"],"Viewers can trust what they see."],
["Safety for minors","A public site must protect young users first.",["Privacy per item: public, link only, school only, private","Hide address, phone and full birthdate","Guardian consent for students under 18","Reporting tools and automatic content scanning"],"Students control who sees what."],
["School tracking","Schools can’t easily see student growth.",["Teacher dashboard for class portfolios","Competency tracking against curriculum standards","Analytics on engagement and skill gaps","Alumni portfolios for future applicants"],"Schools get evidence for accreditation and improvement."]];
var pl=document.getElementById("plist"),pn=document.getElementById("panel");
function showP(i){
  pl.querySelectorAll("button").forEach(function(b,j){b.setAttribute("aria-selected",i===j)});
  curI=i;var p=probs[i];
  pn.innerHTML="<h3>"+(lang==="fil"?ptF[i]:p[0])+"</h3><div>"+p[1]+"</div><ul>"+p[2].map(function(f){return"<li>"+f+"</li>"}).join("")+"</ul><div class=\"why\">"+p[3]+"</div>";
}
var ptF=["Kakayahan lampas sa grado","Mapansin ng employer","Nakakalat na gawa","Kulang sa feedback","Hindi pantay na access","Tiwala sa gawa","Kaligtasan ng menor de edad","Pagsubaybay ng paaralan"];
function tabs(){pl.innerHTML="";probs.forEach(function(p,i){var b=document.createElement("button");b.setAttribute("role","tab");b.textContent=lang==="fil"?ptF[i]:p[0];b.onclick=function(){showP(i)};pl.appendChild(b)});showP(curI)}
tabs();

var works=[
["Rainwater sensor","Maria S.","🌧️",["Coding","Science"],"#cfe9ea",1],
["Barangay recycling posters","Jon R.","🎨",["Design"],"#ffe6a6",1],
["Fishpond water study","Ana L.","🐟",["Science","Research"],"#d7e4fb",1],
["School clinic app","Paolo D.","📱",["Coding","Design"],"#e6dcf7",0],
["Local history video","Bea C.","🎬",["Video","Research"],"#ffd9d0",1],
["Budget tracker in Excel","Rey M.","📊",["Coding","Research"],"#d5f0d9",0]];
var skills=["All","Coding","Design","Science","Research","Video"],cur="All";
var fl=document.getElementById("filters"),gr=document.getElementById("grid");
function draw(){
  fl.querySelectorAll("button").forEach(function(b){b.setAttribute("aria-pressed",b.textContent===cur)});
  gr.innerHTML=works.filter(function(w){return cur==="All"||w[3].indexOf(cur)>-1}).map(function(w){
    return "<div class=\"card\"><div class=\"thumb\" style=\"background:"+w[4]+"\">"+w[2]+"</div><div class=\"b\"><h4>"+w[0]+"</h4><p>"+w[1]+"</p>"+w[3].map(function(s){return"<span class=\"chip\">"+s+"</span> "}).join("")+(w[5]?"<br><span class=\"ver\">Teacher verified</span>":"<br><span class=\"ver\" style=\"color:var(--muted)\">Awaiting review</span>")+"</div></div>"}).join("");
}
skills.forEach(function(s){var b=document.createElement("button");b.textContent=s;b.onclick=function(){cur=s;draw()};fl.appendChild(b)});
draw();
function $(i){return document.getElementById(i)}
function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}
var FIL=[
["h1","Ipakita ang kaya mo, hindi lang ang grado mo."],[".hero p","Ang Portfol-You ay libreng pampublikong e-portfolio para sa mga estudyante. I-upload ang mga proyekto mo, ipa-verify sa guro, at magbahagi ng isang link sa mga paaralan at employer."],
[".hero .btn:not(.ghost)","Tingnan ang mga portfolio"],[".hero .ghost","Tungkol sa Portfol-You"],[".demo h3","Subukan: sino ang makakakita ng profile na ito?"],
["[data-p=public]","Publiko"],["[data-p=link]","Link lang"],["[data-p=school]","Paaralan lang"],["[data-p=private]","Pribado"],
["#problems h2","Walong totoong problema, walong hanay ng features"],["#problems .lead","Pumili ng problema para makita kung paano ito nilulutas ng website."],
["#showcase h2","Gawa ng estudyante, ayon sa kasanayan"],["#showcase .lead","Naghahanap ang mga bisita ayon sa kasanayan, kaya napapansin din ang mga estudyanteng walang kakilala. Mga halimbawang proyekto ito."],
["footer .wrap","Konseptong website ang Portfol-You. Gawa-gawa lang ang mga pangalan at proyekto."]];
FIL.forEach(function(x){var e=document.querySelector(x[0]);if(e)e.dataset.fil=x[1]});
function applyLang(l){
  lang=l;document.documentElement.lang=l==="fil"?"fil":"en";
  document.querySelectorAll("[data-fil]").forEach(function(e){if(e.dataset.en===undefined)e.dataset.en=e.textContent;e.textContent=l==="fil"?e.dataset.fil:e.dataset.en});
  document.querySelectorAll("[data-fph]").forEach(function(e){if(e.dataset.eph===undefined)e.dataset.eph=e.placeholder;e.placeholder=l==="fil"?e.dataset.fph:e.dataset.eph});
  $("lang").textContent=l==="fil"?"English":"Filipino";
  setP(curP);tabs();draw();render();drawC(); if(typeof updateDash === "function" && typeof activeRole !== "undefined") updateDash(); if(typeof drawSkills === "function") drawSkills();
}
$("lang").onclick=function(){applyLang(lang==="fil"?"en":"fil");route()};

/* Sign-up and portfolio builder */
var S={name:"",email:"",year:"",tpl:"clean",priv:"public",skills:[],title:"",desc:"",done:false};
var privL={public:["Public","Publiko"],link:["Link only","Link lang"],school:["School only","Paaralan lang"],private:["Private","Pribado"]};
function minor(){var y=+S.year;return y>1950&&new Date().getFullYear()-y<18}
function okStep1(){return S.name.trim().length>1&&$("f-course").value.trim().length>0&&/^\S+@\S+\.\S+$/.test(S.email)&&+S.year>1950&&+S.year<=new Date().getFullYear()&&Number.isInteger(+S.year)&&(!minor()||$("f-g").checked)}
function go(n){[1,2,3].forEach(function(i){$("sp"+i).hidden=i!==n;$("b"+i).className=i===n?"on":""})}
function mark(){
  document.querySelectorAll(".tpls button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.t===S.tpl)});
  document.querySelectorAll(".prv button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.q===S.priv)});
}
function render(){
  if(!S.done)delete rv.me;
  $("guard").hidden=!minor();
  $("n1").disabled=!okStep1();
  $("pub").disabled=S.title.trim().length<2||S.done;
  var n=S.name.trim()||tr("Your name","Pangalan mo");
  var dom=S.email.indexOf("@")>0?S.email.split("@")[1]:"school.edu.ph";
  var p=privL[S.priv];
  var h="<div class=\"pv t-"+S.tpl+"\"><div class=\"prow\"><div class=\"av\">"+esc(n.charAt(0).toUpperCase())+"</div><div><b>"+esc(n)+"</b><span>School email: "+esc(dom)+"</span></div></div>";
  h+="<div class=\"pchips\"><span class=\"chip\">"+tr(p[0],p[1])+"</span>"+S.skills.map(function(k){return "<span class=\"chip\">"+k+"</span>"}).join("")+"</div>";
  h+="<div class=\"pj\"><b>"+esc(S.title||tr("Your first project","Ang una mong proyekto"))+"</b><p>"+esc(S.desc||tr("Describe what you made and what you learned.","Ilarawan ang ginawa mo at ang natutunan mo."))+"</p><span class=\"ver\">"+(S.done?(rv.me==="ok"?tr("Teacher verified","Na-verify ng guro"):rv.me==="chg"?tr("Teacher asked for changes","Humiling ng pagbabago ang guro")+(rn.me?": "+esc(rn.me):""):tr("Awaiting teacher review","Naghihintay ng review ng guro")):tr("Draft, only you can see it","Draft, ikaw lang ang makakakita"))+"</span></div>";
  h+="<p class=\"note\">"+tr("Address, phone and full birthdate stay hidden.","Nakatago ang address, telepono at buong kaarawan.")+"</p></div>";
  $("pv").innerHTML=h;
  var d=$("done");d.hidden=!S.done;
  if(S.done){var slug=S.name.trim().toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"your-name";
    d.textContent=tr("Saved for educator review. Verified public adult portfolios appear in the Portfolios gallery. Example link (not hosted): ","Na-save bilang draft. Maaaring i-review ito ng guro bago mo gawing publiko. Halimbawang link (hindi naka-host): ")+"portfol-you.example/"+slug}
  $("resume").hidden=!S.done;
  if(S.done)$("rtxt").textContent=[S.name.trim(),S.email.trim(),"",tr("Skills","Kasanayan")+": "+(S.skills.join(", ")||"-"),"",tr("Project","Proyekto")+": "+S.title.trim(),S.desc.trim()].join("\n");
  drawT();
}
$("f-course").oninput=function(){S.done=false;render()};
$("f-name").oninput=function(){S.name=this.value;render()};
$("f-email").oninput=function(){S.email=this.value;render()};
$("f-year").oninput=function(){S.year=this.value;render()};
$("f-g").onchange=render;
$("f-title").oninput=function(){S.title=this.value;S.done=false;render()};
$("f-desc").oninput=function(){S.desc=this.value;S.done=false;render()};
$("n1").onclick=function(){if(minor()&&S.priv==="public"){S.priv="school"}mark();render();go(2)};
$("n2").onclick=function(){go(3)};
$("bk2").onclick=function(){go(1)};
$("bk3").onclick=function(){go(2)};
$("pub").onclick=function(){S.done=true;render()};
document.querySelectorAll(".tpls button").forEach(function(b){b.onclick=function(){S.tpl=b.dataset.t;mark();render()}});
document.querySelectorAll(".prv button").forEach(function(b){b.onclick=function(){S.priv=b.dataset.q;mark();render()}});
["Coding","Design","Science","Research","Video"].forEach(function(k){
  var b=document.createElement("button");b.type="button";b.textContent=k;b.setAttribute("aria-pressed","false");
  b.onclick=function(){var i=S.skills.indexOf(k);if(i>-1)S.skills.splice(i,1);else S.skills.push(k);b.setAttribute("aria-pressed",i<0);render()};
  $("f-skills").appendChild(b)});
mark();go(1);

/* Employer view */
var cands=[["Maria Santos","Rodriguez, Rizal",["Coding","Science"],1],["Jon Reyes","Marikina City",["Design"],1],["Ana Lopez","Batangas City",["Science","Research"],1],["Paolo Dela Cruz","Santa Rosa, Laguna",["Coding","Design"],0],["Bea Cruz","Imus, Cavite",["Video","Research"],1],["Rey Mendoza","Quezon City",["Coding","Research"],0]];
var sv={},sent={},qv="",vo=false;
function drawC(){
  var q=qv.trim().toLowerCase(),out="";
  cands.forEach(function(c,i){
    if(vo&&!c[3])return;
    if((c[0]+" "+c[1]+" "+c[2].join(" ")).toLowerCase().indexOf(q)<0)return;
    out+="<div class=\"cand\"><div><b>"+c[0]+"</b><div class=\"meta\">"+c[1]+"</div><div class=\"pchips\">"+c[2].map(function(k){return "<span class=\"chip\">"+k+"</span>"}).join("")+"</div><span class=\"ver\""+(c[3]?"":" style=\"color:var(--muted)\"")+">"+(c[3]?tr("Teacher verified","Na-verify ng guro"):tr("Awaiting review","Naghihintay ng review"))+"</span>"+(sent[i]?"<div class=\"meta\">"+tr("Demo contact request recorded; no message was sent.","Demo lamang; walang mensaheng ipinadala.")+"</div>":"")+"</div><div class=\"acts\"><button class=\"btn ghost\" type=\"button\" data-a=\"s\" data-i=\""+i+"\" aria-pressed=\""+!!sv[i]+"\">"+(sv[i]?tr("Saved","Naka-save"):tr("Save to shortlist","I-save sa shortlist"))+"</button><button class=\"btn\" type=\"button\" data-a=\"c\" data-i=\""+i+"\">"+(sent[i]?tr("Request recorded","Naitala"):tr("Contact student","Kontakin ang estudyante"))+"</button></div></div>";
  });
  $("cands").innerHTML=out||"<p class=\"meta\">"+tr("No students match. Try another skill or place.","Walang tugma. Subukan ang ibang kasanayan o lugar.")+"</p>";
  var names=cands.filter(function(c,i){return sv[i]}).map(function(c){return "<li>"+c[0]+"</li>"}).join("");
  $("sl").innerHTML=names?"<ul>"+names+"</ul>":"<p class=\"meta\">"+tr("No one saved yet. Save students to compare them later.","Wala pang naka-save. I-save ang mga estudyante para ihambing sa susunod.")+"</p>";
}
$("cands").onclick=function(e){var b=e.target.closest("button");if(!b)return;var i=b.dataset.i;if(b.dataset.a==="s")sv[i]=!sv[i];else sent[i]=1;drawC()};
$("q").oninput=function(){qv=this.value;drawC()};
$("vo").onchange=function(){vo=this.checked;drawC()};
/* Teacher review and resume copy */
var rv={},rn={};
function drawT(){
  var it=[["Paolo Dela Cruz","School clinic app","p0"],["Rey Mendoza","Budget tracker in Excel","p1"]];
  if(S.done&&S.priv!=="private")it.unshift([S.name.trim()||tr("Your name","Pangalan mo"),S.title.trim(),"me"]);
  $("tq").innerHTML=it.map(function(x){
    var k=x[2],r=rv[k];
    var st=r==="ok"?tr("Teacher verified","Na-verify ng guro"):r==="chg"?tr("Changes requested","May hiniling na pagbabago"):tr("Waiting for review","Naghihintay ng review");
    return "<div class=\"cand\"><div><b>"+esc(x[0])+"</b><div class=\"meta\">"+esc(x[1])+"</div><span class=\"ver\""+(r?"":" style=\"color:var(--muted)\"")+">"+st+"</span><label class=\"meta\" style=\"display:block;margin-top:8px\">"+tr("Feedback for the student","Feedback para sa estudyante")+"<input class=\"fb\" data-k=\""+k+"\" value=\""+esc(rn[k]||"")+"\"></label></div><div class=\"acts\"><button class=\"btn\" type=\"button\" data-k=\""+k+"\" data-v=\"ok\">"+tr("Verify","I-verify")+"</button><button class=\"btn ghost\" type=\"button\" data-k=\""+k+"\" data-v=\"chg\">"+tr("Ask for changes","Humiling ng pagbabago")+"</button></div></div>";
  }).join("");
}
$("tq").oninput=function(e){if(e.target.dataset.k)rn[e.target.dataset.k]=e.target.value};
$("tq").onclick=function(e){var b=e.target.closest("button");if(!b)return;rv[b.dataset.k]=b.dataset.v;render()};
$("copyr").onclick=function(){var m=$("cmsg");function f(){m.textContent=tr("Select the text above and copy it.","I-select ang teksto sa itaas at kopyahin.")}try{navigator.clipboard.writeText($("rtxt").textContent).then(function(){m.textContent=tr("Copied.","Nakopya na.")},f)}catch(x){f()}};
applyLang("en");

// Mobile navigation, skill shortcuts, and contact form.
const menu = $("menu"), navigation = $("navigation");
function closeMenu(){navigation.classList.remove("open");menu.setAttribute("aria-expanded","false");}
menu.addEventListener("click",()=>{const open=navigation.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
navigation.addEventListener("click",e=>{if(e.target.closest("a"))closeMenu();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeMenu();});
function drawSkills(){
 const icons=["⌘","✦","⚗","⌕","▶"], descriptions=["Apps, programming and digital tools","Visual communication and creative work","Experiments and practical discoveries","Investigation and evidence-based work","Storytelling and multimedia"], filipino=["Mga app at programming","Malikhaing komunikasyon","Mga eksperimento at tuklas","Pagsisiyasat at ebidensya","Pagkukuwento at multimedia"];
 $("skillcards").replaceChildren();
 skills.slice(1).forEach((skill,i)=>{const b=document.createElement("button");b.type="button";b.className="card skillcard";b.innerHTML=`<span class="symbol">${icons[i]}</span><strong>${skill}</strong><small>${tr(descriptions[i],filipino[i])}</small><p>${works.filter(w=>w[3].includes(skill)).length} ${tr("projects","proyekto")} →</p>`;b.onclick=()=>{cur=skill;draw();location.hash="showcase";};$("skillcards").append(b);});
}
drawSkills();
$("contactform").addEventListener("submit",e=>{e.preventDefault();const f=e.currentTarget;if(!f.elements.namedItem("name").value.trim()||!f.elements.namedItem("message").value.trim()){ $("contactstatus").textContent=tr("Please enter your name and message.","Ilagay ang pangalan at mensahe.");return;}$("contactstatus").textContent=tr("Form validated successfully. Demo only — no message was sent.","Wasto ang form. Demo lamang — walang mensaheng ipinadala.");});
if("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:0.06});document.querySelectorAll("section").forEach(section=>{section.classList.add("reveal");observer.observe(section);});}

// Personalized gateway and connected demo workspaces.
var activeRole='', selectedRole='';
const roleSections={student:'signup',employer:'employers',educator:'teachers'};
const profiles={student:['Student','Turn your skills into opportunities.','Workspace','Opportunities & feedback'],employer:['Employer','Discover talent beyond grades.','Discover talent','Job posts & comparison'],educator:['Educator','Help students turn learning into achievement.','Reviews','Students & reports'],guest:['Guest','Explore public sample projects.','','']};
const details={student:['Create a portfolio and resume','Showcase projects and skills','Receive educator feedback','Explore opportunities'],employer:['Discover student talent','Filter verified portfolios','Shortlist and compare candidates','Post opportunities'],educator:['Review student projects','Verify skills and provide feedback','Assign portfolio activities','Monitor review progress']};
function storeRole(r){try{if(r)localStorage.setItem('py-role',r);else localStorage.removeItem('py-role')}catch(e){}}
function readRole(){try{return localStorage.getItem('py-role')}catch(e){return ''}}
let jobs=[{title:'Programming internship',org:'Sample technology company',skill:'Coding'},{title:'Creative design internship',org:'Sample design studio',skill:'Design'}], assignments=[];
function selectRole(r){selectedRole=r;document.querySelectorAll('[data-role]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.role===r)));$('enterrole').disabled=false;$('enterrole').textContent='Continue as '+profiles[r][0];}
function enter(r){activeRole=r;storeRole($('rememberrole').checked&&r!=='guest'?r:'');location.hash='top';route();}
function updateDash(){if(!activeRole)return;const p=profiles[activeRole];$('roleIndicator').textContent=p[0];$('dashtitle').textContent=p[0]+' workspace';$('dashdesc').textContent=p[1];const nav=[['top','Home'],['problems','About'],['skills','Skills'],['showcase','Projects'],['portfolios','Portfolios']];if(activeRole!=='guest')nav.push([activeRole+'-dashboard','Workspace'],['extraspace','Activities']);$('homeworkspace').hidden=activeRole==='guest';$('homeworkspace').href='#'+activeRole+'-dashboard';$('homeworkspace').textContent=tr('Open '+p[0]+' workspace','Buksan ang workspace: '+p[0]);nav.push(['contact','Contact']);$('navigation').innerHTML=nav.map(x=>`<a href="#${x[0]}">${tr(x[1],({'Home':'Simula','About':'Tungkol','Skills':'Kasanayan','Projects':'Proyekto','Portfolios':'Portfolio','Workspace':'Workspace','Activities':'Aktibidad','Contact':'Makipag-ugnayan'})[x[1]]||x[1])}</a>`).join('');}
function organizeActivities(){const old=$('extracontent').firstElementChild;if(!old)return;const grid=document.createElement('div');grid.className='activity-grid';let card;Array.from(old.children).forEach(el=>{if(el.tagName==='H3'||!card){card=document.createElement('div');card.className='panel activity-card';grid.append(card)}card.append(el)});$('extracontent').replaceChildren(grid)}
function refreshExtras(){if(!roleSections[activeRole])return;let stats=activeRole==='student'?[['Portfolio',S.done?'Submitted':'Draft'],['Skills',S.skills.length],['Review',rv.me==='ok'?'Verified':rv.me==='chg'?'Revise':'Pending']]:activeRole==='employer'?[['Sample candidates',cands.length],['Shortlisted',Object.values(sv).filter(Boolean).length],['Opportunities',jobs.length]]:[['Review queue',2+(S.done?1:0)],['Verified',Object.values(rv).filter(x=>x==='ok').length],['Assignments',assignments.length]];$('overview').innerHTML=stats.map(x=>`<div class="panel stat"><span class="note">${x[0]}</span><strong>${x[1]}</strong></div>`).join('');$('extraheading').textContent=profiles[activeRole][3];let list=jobs.map(j=>`<div class="cand"><div><b>${esc(j.title)}</b><div class="meta">${esc(j.org)} · ${esc(j.skill)}</div></div></div>`).join('');let tasks=assignments.map(a=>`<div class="cand">${esc(a)}</div>`).join('')||'<p class="note">No assignments yet.</p>';
if(activeRole==='student')$('extracontent').innerHTML='<div class="panel"><h3>Educator feedback</h3><p>'+esc(S.done?(rn.me||'No feedback yet.'):'Submit your portfolio to receive feedback.')+'</p><h3>Portfolio assignments</h3>'+tasks+'<h3>Career opportunities (demo)</h3>'+list+'</div>';
if(activeRole==='employer')$('extracontent').innerHTML='<div class="panel"><h3>Post an opportunity</h3><form id="jobform"><label>Job title<input name="title" required></label><label>Organization<input name="org" required></label><label>Required skill<input name="skill" required></label><button class="btn">Post locally</button></form><h3>Current opportunities</h3>'+list+'<h3>Compare shortlisted candidates</h3>'+cands.filter((c,i)=>sv[i]).map(c=>`<div class="cand"><b>${esc(c[0])}</b><span>${c[2].join(', ')} · ${c[3]?'Verified':'Pending'}</span></div>`).join('')+'</div>';
if(activeRole==='educator')$('extracontent').innerHTML='<div class="panel"><h3>Student roster (sample)</h3>'+cands.map(c=>`<div class="cand"><b>${esc(c[0])}</b><span>${c[2].join(', ')}</span></div>`).join('')+'<h3>Assign a portfolio activity</h3><form id="taskform"><label>Activity<input name="task" required></label><button class="btn">Assign locally</button></form>'+tasks+'<h3>Review report</h3><p>Verified: '+Object.values(rv).filter(x=>x==='ok').length+' · Revision requested: '+Object.values(rv).filter(x=>x==='chg').length+'</p></div>';
organizeActivities();
}
$('extracontent').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.target);if(e.target.id==='jobform'&&activeRole==='employer'){const j={title:f.get('title').trim(),org:f.get('org').trim(),skill:f.get('skill').trim()};if(Object.values(j).every(Boolean))jobs.push(j)}else if(e.target.id==='taskform'&&activeRole==='educator'){const a=f.get('task').trim();if(a)assignments.push(a)}refreshExtras()});
// Local demonstration accounts; not a server-side security boundary.
let authMode='login', pendingAction=null, authBusy=false;
const authKey='py-demo-accounts-v1', sessionKey='py-demo-session-v1';
function readAccounts(){try{return JSON.parse(localStorage.getItem(authKey)||'{}')}catch(e){return {}}}
function signedIn(){try{const a=JSON.parse(sessionStorage.getItem(sessionKey)||'null');return a&&a.role===activeRole&&readAccounts()[a.key]?a:null}catch(e){return null}}
function authHeader(){const a=signedIn();$('accountAction').hidden=activeRole==='guest';$('accountAction').textContent=a?'Log out':'Log in';}
function setAuthMode(mode){authMode=mode;const signup=mode==='signup';$('authTitle').textContent=signup?'Create account':'Log in';$('authNameRow').hidden=!signup;$('authConfirmRow').hidden=!signup;const f=$('authForm');f.elements.name.required=signup;f.elements.confirm.required=signup;f.elements.password.autocomplete=signup?'new-password':'current-password';$('authSubmit').textContent=signup?'Sign up':'Log in';$('authStatus').textContent='';}
function requestAuth(action,reason){if(signedIn()){action();return}pendingAction=action;$('authForm').reset();setAuthMode('login');$('authReason').textContent='Continue as '+profiles[activeRole][0]+' to '+reason+'.';if(!$('authDialog').open)$('authDialog').showModal();}
async function passwordDigest(password,salt){const enc=new TextEncoder();const key=await crypto.subtle.importKey('raw',enc.encode(password),'PBKDF2',false,['deriveBits']);const bits=await crypto.subtle.deriveBits({name:'PBKDF2',salt:enc.encode(salt),iterations:150000,hash:'SHA-256'},key,256);return Array.from(new Uint8Array(bits),b=>b.toString(16).padStart(2,'0')).join('');}
$('authLogin').onclick=()=>setAuthMode('login');$('authSignup').onclick=()=>setAuthMode('signup');$('authClose').onclick=()=> $('authDialog').close();$('authDialog').addEventListener('close',()=>{pendingAction=null;$('authForm').reset()});
$('authForm').onsubmit=async e=>{e.preventDefault();if(authBusy)return;const f=e.currentTarget, email=f.elements.email.value.trim().toLowerCase(), password=f.elements.password.value, role=activeRole, mode=authMode, key=role+':'+email;const status=$('authStatus');authBusy=true;$('authSubmit').disabled=true;try{if(!crypto.subtle)throw Error('Use HTTPS or localhost for this demo.');let accounts=readAccounts();if(mode==='signup'){if(accounts[key])throw Error('Account already exists. Please log in.');if(!f.elements.name.value.trim()||password!==f.elements.confirm.value)throw Error('Enter your name and matching passwords.');const salt=Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join('');const hash=await passwordDigest(password,salt);accounts=readAccounts();if(accounts[key])throw Error('Account already exists.');accounts[key]={name:f.elements.name.value.trim(),salt,hash};localStorage.setItem(authKey,JSON.stringify(accounts));}else{const a=accounts[key];if(!a||await passwordDigest(password,a.salt)!==a.hash)throw Error('Incorrect email or password for this role.');}if(!$('authDialog').open||activeRole!==role)return;sessionStorage.setItem(sessionKey,JSON.stringify({key,role}));const next=pendingAction;pendingAction=null;$('authDialog').close();authHeader();if(next)next();}catch(err){status.textContent=err.message||'Account access failed.'}finally{authBusy=false;$('authSubmit').disabled=false}};
$('accountAction').onclick=()=>{if(signedIn()){sessionStorage.removeItem(sessionKey);$('portfolioForm').hidden=true;location.hash='top';route()}else requestAuth(()=>route(),'access your account')};
function route(){
 let h=location.hash.slice(1)||'welcome';
 const publicPages=['top','problems','skills','showcase','portfolios','contact'];
 if(h==='welcome'||!activeRole){activeRole='';h='welcome'}
 else if(!publicPages.includes(h)&&!(roleSections[activeRole]&&(h===activeRole+'-dashboard'||h==='extraspace')))h='top';
 if(roleSections[activeRole]&&(h===activeRole+'-dashboard'||h==='extraspace')&&!signedIn()){const destination=h;h='top';requestAuth(()=>{location.hash=destination;route()},'access this role tool');}
 if(location.hash!=='#'+h)history.replaceState(null,'','#'+h);
 const w=h==='welcome', d=!w&&!publicPages.includes(h), extra=h==='extraspace';
 $('welcome').hidden=!w;$('siteheader').hidden=w;$('sitefooter').hidden=w;
 $('publicview').hidden=w||d;$('dashboard').hidden=!d;
 publicPages.forEach(id=>{$(id).hidden=w||d||id!==h});
 Object.keys(roleSections).forEach(r=>$(roleSections[r]).hidden=!d||extra||r!==activeRole);
 $('extraspace').hidden=!d||!extra;
 $('overview').hidden=!d||extra;document.querySelector('.dashhead').hidden=!d||extra;
 closeMenu();
 if(!w){authHeader();updateDash();updatePortfolioRole();navigation.querySelectorAll('a').forEach(a=>{if(a.hash==='#'+h)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});}
 if(d){if(activeRole==='employer')drawC();refreshExtras();}
 const target=d?(extra?$('extraspace'):$('dashboard')):$(h);
 if(target){target.classList.add('visible');target.querySelectorAll('section:not([hidden])').forEach(el=>el.classList.add('visible'));}
 window.scrollTo({top:0,behavior:'instant'});
}

document.querySelectorAll('[data-role]').forEach(b=>b.onclick=()=>selectRole(b.dataset.role));$('enterrole').onclick=()=>{if(selectedRole)enter(selectedRole)};$('guest').onclick=()=>enter('guest');function switchRole(){sessionStorage.removeItem(sessionKey);$('portfolioForm').hidden=true;storeRole('');activeRole='';location.hash='welcome';route()}$('cta').onclick=e=>{e.preventDefault();switchRole()};window.addEventListener('hashchange',route);
// Refresh connected views after original controls update their state.
const originalRender=render;render=function(){originalRender();if(activeRole==='student'&&!$('dashboard').hidden)refreshExtras()};const originalDrawC=drawC;drawC=function(){originalDrawC();if(activeRole==='employer'&&!$('dashboard').hidden)refreshExtras()};const originalDrawT=drawT;drawT=function(){originalDrawT();if(activeRole==='educator'&&!$('dashboard').hidden)refreshExtras()};
// Only verified, public, adult demo submissions can enter employer search.
const originalDrawCandidates=drawC;drawC=function(){cands.length=6;if(S.done&&rv.me==='ok'&&S.priv==='public'&&!minor())cands.push([esc(S.name),'Demo portfolio',S.skills.slice(),1]);else{delete sv[6];delete sent[6]}originalDrawCandidates()};
// Public portfolio directory; external links, not hosted file uploads.
const examplePortfolios=[{student:'Marvin Villa Ochotorena',course:'Computer Engineering',skills:'HTML, CSS, JavaScript, Programming Logic, Computer Systems',url:'https://sauvage-yo.github.io/',description:'Engineering and creative projects, including a student management system and personal website.',example:true},{student:'Joshua Karl Salinas',course:'Computer Engineering',skills:'Python, HTML, CSS, JavaScript, Computer Hardware',url:'https://courageous-profiterole-87cba7.netlify.app/',description:'Projects include a personal portfolio, student records system and calculator.',example:true}];
examplePortfolios[0].image='https://sauvage-yo.github.io/assets/profile.png';
examplePortfolios[1].image='https://courageous-profiterole-87cba7.netlify.app/profile.jpg';
examplePortfolios[0].skills='Web Development, Programming Logic, Computer Systems, Creative Thinking, HTML, CSS, JavaScript';
examplePortfolios[1].skills='Computer Hardware, Python, HTML & CSS, JavaScript';
const sourceSkills=[['Web Development','Programming Logic','Computer Systems','Creative Thinking'],['Computer Hardware','Python','HTML & CSS','JavaScript']];
const sourceProjects=[
[['Students Management System','A concept for managing academic and student records.',['Coding','Programming Logic']],['Personal Portfolio','Responsive website showcasing skills and interests.',['Coding','Design','Web Development','JavaScript','HTML','CSS']],['P2P Motors Concept','Motorcycle accessories resale and community branding concept.',['Design','Creative Thinking']]],
[['Personal Portfolio','Responsive website presenting education and technical work.',['Coding','Design','HTML & CSS','JavaScript']],['Student Management System','Python program for managing student records.',['Coding','Python']],['Simple Calculator','Interactive interface for basic arithmetic.',['Coding','JavaScript','HTML & CSS']]]];
const portfolioKey='py-portfolio-gallery-v1';
function validPortfolioURL(value){try{const u=new URL(value);return ['https:','http:'].includes(u.protocol)&&!u.username&&!u.password?u.href:null}catch(e){return null}}
let localPortfolios=[];try{const savedList=JSON.parse(localStorage.getItem(portfolioKey)||'[]');if(Array.isArray(savedList))localPortfolios=savedList.filter(x=>x&&['student','course','skills','description','url'].every(k=>typeof x[k]==='string')&&validPortfolioURL(x.url));}catch(e){}
function drawPortfolios(){const built=S.done&&rv.me==='ok'&&S.priv==='public'&&!minor()&&new Date().getFullYear()-Number(S.year)>18?[{student:S.name.trim(),course:$('f-course').value.trim(),skills:S.skills.join(', '),description:S.desc||S.title,built:true,title:S.title}]:[];const all=[...examplePortfolios,...localPortfolios,...built];const select=$('portfolioCourse'), previous=select.value;select.replaceChildren(new Option('All courses',''));[...new Set(all.map(x=>x.course))].sort().forEach(c=>select.add(new Option(c,c)));select.value=previous;if(select.selectedIndex<0)select.selectedIndex=0;const q=$('portfolioSearch').value.trim().toLowerCase();const filtered=all.filter(x=>(!select.value||x.course===select.value)&&[x.student,x.course,x.skills,x.description].join(' ').toLowerCase().includes(q));const grid=$('portfolioGrid');grid.replaceChildren();filtered.forEach(x=>{const card=document.createElement('article');card.className='card portfolio-card';const banner=document.createElement('div');banner.className='portfolio-banner';const image=validPortfolioURL(x.image||''); if(image){const img=document.createElement('img');img.src=image;img.alt='Profile image from '+x.student+' portfolio';img.loading='lazy';img.referrerPolicy='no-referrer';img.onerror=()=>{img.remove();banner.textContent='Profile image unavailable';banner.classList.add('no-image')};banner.append(img)}else{banner.textContent='No profile image supplied';banner.classList.add('no-image')};const content=document.createElement('div');content.className='b';const title=document.createElement('h3');title.textContent=x.student;const course=document.createElement('p');course.textContent=x.course+' · '+(x.built?'Educator verified · Built here':x.example?'Example portfolio':'Student submission');const desc=document.createElement('p');desc.textContent=x.description;const tags=document.createElement('div');tags.className='pchips';x.skills.split(',').forEach(k=>{const tag=document.createElement('span');tag.className='chip';tag.textContent=k.trim();tags.append(tag)});const link=document.createElement('a');link.className='btn';link.href=validPortfolioURL(x.url);link.target='_blank';link.rel='noopener noreferrer';link.textContent='View portfolio ↗';if(x.built){link.removeAttribute('href');link.removeAttribute('target');link.textContent='View portfolio';link.setAttribute('role','button');link.tabIndex=0;const open=()=>{const body=$('portfolioDetailBody');body.replaceChildren();for(const [tag,value] of [['h2',x.student],['p',x.course],['h3',x.title],['p',x.description],['p',x.skills],['p','Educator verified (demo)']]){const el=document.createElement(tag);el.textContent=value;body.append(el)}$('portfolioDetail').showModal()};link.onclick=open;link.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}}}content.append(title,course,desc,tags,link);card.append(banner,content);grid.append(card)});$('portfolioStatus').textContent=filtered.length+' of '+all.length+' portfolios';}
function updatePortfolioRole(){drawPortfolios();$('portfolioCreate').hidden=activeRole!=='student';$('portfolioAdd').hidden=activeRole!=='student';if(activeRole!=='student'||!signedIn())$('portfolioForm').hidden=true;}
$('portfolioSearch').oninput=drawPortfolios;$('portfolioCourse').onchange=drawPortfolios;$('portfolioAdd').onclick=()=>requestAuth(()=>{location.hash='portfolios';$('portfolioForm').hidden=false;$('portfolioForm').elements.student.focus()},'submit a portfolio');$('portfolioCancel').onclick=()=>{$('portfolioForm').hidden=true};$('portfolioForm').onsubmit=e=>{e.preventDefault();if(activeRole!=='student'||!signedIn())return;const f=e.currentTarget, data=Object.fromEntries(new FormData(f));const x={};for(const k of ['student','course','skills','description','url'])x[k]=data[k].trim();x.url=validPortfolioURL(x.url);if(!Object.values(x).every(Boolean)||!data.consent){$('portfolioStatus').textContent='Complete all fields and enter a valid HTTP or HTTPS URL.';return}if([...examplePortfolios,...localPortfolios].some(p=>validPortfolioURL(p.url)===x.url)){$('portfolioStatus').textContent='This portfolio is already listed.';return}x.image=validPortfolioURL(data.image||'')||'';x.projects=(data.projects||'').split('\n').map(v=>v.trim()).filter(Boolean);localPortfolios.push(x);let persisted=true;try{localStorage.setItem(portfolioKey,JSON.stringify(localPortfolios))}catch(e){persisted=false}f.reset();f.hidden=true;$('portfolioSearch').value='';$('portfolioCourse').value='';drawPortfolios();$('portfolioStatus').textContent=persisted?'Portfolio added and saved in this browser.':'Portfolio added for this session; browser storage unavailable.';};drawPortfolios();
const galleryRender=render;render=function(){galleryRender();drawPortfolios()};
const saved=readRole();if(roleSections[saved]){activeRole=saved;$('rememberrole').checked=true;location.hash='top'}route();

// Connected portfolio discovery: source content and locally submitted metadata.
function discoveryEntries(){return [...examplePortfolios,...localPortfolios].map((p,i)=>({...p,listedSkills:i<2?sourceSkills[i]:p.skills.split(',').map(x=>x.trim()).filter(Boolean),listedProjects:i<2?sourceProjects[i]:(Array.isArray(p.projects)?p.projects.filter(x=>typeof x==='string').map(x=>[x,'Student-submitted project',p.skills.split(',').map(v=>v.trim())]):[])}));}
// One catalog powers both discovery pages.
const categoryMap={Coding:'Coding & web',Design:'Design & creativity',Science:'Science & systems',Research:'Research & analysis',Video:'Media', 'Web Development':'Coding & web','Programming Logic':'Coding & web','Computer Systems':'Science & systems','Creative Thinking':'Design & creativity','Computer Hardware':'Science & systems',Python:'Coding & web','HTML & CSS':'Coding & web',HTML:'Coding & web',CSS:'Coding & web',JavaScript:'Coding & web'};
function catalog(){return [...discoveryEntries().flatMap(p=>p.listedProjects.map(j=>({title:j[0],owner:p.student,description:j[1],tags:j[2],url:p.url,source:'portfolio'}))),...works.map(w=>({title:w[0],owner:w[1],description:'Illustrative project for exploring student competencies.',tags:w[3],source:'sample'}))];}
function fillOptions(el,values,first){const old=el.value;el.replaceChildren(new Option(first,''));values.sort().forEach(v=>el.add(new Option(v,v)));el.value=values.includes(old)?old:'';}
function makeNode(tag,content,cls){const el=document.createElement(tag);el.textContent=content;if(cls)el.className=cls;return el;}
function drawUnifiedProjects(){const q=$('projectSearch').value.toLowerCase().trim(), k=$('projectSkill').value, src=$('projectSource').value;const list=catalog().filter(p=>(!k||p.tags.includes(k))&&(!src||p.source===src)&&[p.title,p.owner,p.description,...p.tags].join(' ').toLowerCase().includes(q));gr.replaceChildren();list.forEach(p=>{const el=makeNode('article','','card discovery-card');const top=makeNode('div','','discovery-top');top.append(makeNode('span',p.source==='sample'?'Illustrative sample':'Portfolio project','source-label'),makeNode('span',p.tags[0]||'Project','note'));const tags=makeNode('div','','pchips');p.tags.forEach(t=>tags.append(makeNode('span',t,'chip')));el.append(top,makeNode('h3',p.title),makeNode('p',p.owner,'owner-label'),makeNode('p',p.description,'note'),tags);if(p.url){const a=makeNode('a','View source portfolio ↗','btn ghost');a.href=validPortfolioURL(p.url);a.target='_blank';a.rel='noopener noreferrer';el.append(a)}gr.append(el)});$('projectStatus').textContent=list.length+' projects'+(list.length?'':' — try another filter.');}
function refreshDiscovery(){const entries=discoveryEntries(), projects=catalog();const map=new Map();function add(k,owner){if(!map.has(k))map.set(k,new Set());if(owner)map.get(k).add(owner)}skills.slice(1).forEach(k=>add(k));entries.forEach(p=>p.listedSkills.forEach(k=>add(k,p.student)));projects.forEach(p=>p.tags.forEach(k=>add(k,p.source==='portfolio'?p.owner:null)));fillOptions($('projectSkill'),[...map.keys()],'All skills');fillOptions($('skillCategory'),[...new Set([...map.keys()].map(k=>categoryMap[k]||'Other skills'))],'All categories');const q=$('skillSearch').value.toLowerCase().trim(), cat=$('skillCategory').value;const list=[...map].sort((a,b)=>(categoryMap[a[0]]||'Other skills').localeCompare(categoryMap[b[0]]||'Other skills')||a[0].localeCompare(b[0])).filter(([k,owners])=>(!cat||cat===(categoryMap[k]||'Other skills'))&&[k,...owners].join(' ').toLowerCase().includes(q));const target=$('skillcards');target.replaceChildren();list.forEach(([k,owners])=>{const el=makeNode('article','','card discovery-card');el.append(makeNode('span',categoryMap[k]||'Other skills','source-label'),makeNode('h3',k),makeNode('p',owners.size?[...owners].join(' · '):'Illustrative skill category','note'));const count=projects.filter(p=>p.tags.includes(k)).length;const b=makeNode('button',count+' related projects →','btn ghost');b.type='button';b.onclick=()=>{$('projectSkill').value=k;$('projectSearch').value='';$('projectSource').value='';drawUnifiedProjects();location.hash='showcase'};el.append(b);target.append(el)});$('skillStatus').textContent=list.length+' skills';drawUnifiedProjects();}
$('skillSearch').oninput=refreshDiscovery;$('skillCategory').onchange=refreshDiscovery;['projectSearch','projectSkill','projectSource'].forEach(id=>$(id).addEventListener(id==='projectSearch'?'input':'change',drawUnifiedProjects));
const previousGallery=drawPortfolios;drawPortfolios=function(){previousGallery();refreshDiscovery()};draw=drawUnifiedProjects;drawSkills=refreshDiscovery;$('portfolioSearch').oninput=drawPortfolios;$('portfolioCourse').onchange=drawPortfolios;refreshDiscovery();
