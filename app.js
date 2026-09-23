const pages=document.querySelectorAll(".page"),tabs=document.querySelectorAll(".tabs button");
tabs.forEach(b=>b.onclick=()=>{tabs.forEach(x=>x.classList.remove("active"));b.classList.add("active");pages.forEach(p=>p.classList.toggle("active",p.id===b.dataset.page))});
const themeBtn=document.getElementById("themeBtn");
themeBtn.onclick=()=>{document.body.classList.toggle("dark");const dark=document.body.classList.contains("dark");themeBtn.textContent=dark?"☀️ الوضع الفاتح":"🌙 الوضع الداكن";localStorage.setItem("nexa-theme",dark?"dark":"light")};
if(localStorage.getItem("nexa-theme")==="dark"){document.body.classList.add("dark");themeBtn.textContent="☀️ الوضع الفاتح"}
function toast(t){const x=document.getElementById("toast");x.textContent=t;x.style.display="block";setTimeout(()=>x.style.display="none",1800)}
document.querySelectorAll(".like").forEach(b=>b.onclick=()=>{let n=b.querySelector("b");n.textContent=+n.textContent+1;b.firstChild.textContent="♥ إعجاب ";toast("تم تسجيل الإعجاب")});
document.getElementById("publish").onclick=()=>{const i=document.getElementById("postInput");if(!i.value.trim())return;document.getElementById("feed").insertAdjacentHTML("afterbegin",`<article class="post"><div class="postHead"><div class="avatar">N</div><div><b>مستخدم NEXA</b><small>الآن · 🟢 متصل</small></div></div><p>${i.value.replaceAll("<","&lt;")}</p><div class="actions"><button class="like">♡ إعجاب <b>0</b></button><button>💬 0</button></div></article>`);i.value="";toast("تم نشر المنشور")};
function send(){const i=document.getElementById("msgInput");if(!i.value.trim())return;document.getElementById("messages").insertAdjacentHTML("beforeend",`<div class="msg me">${i.value.replaceAll("<","&lt;")}</div>`);i.value="";toast("تم إرسال الرسالة — نموذج تجريبي")}
document.getElementById("send").onclick=send;document.getElementById("msgInput").onkeydown=e=>{if(e.key==="Enter")send()};
let count=128;setInterval(()=>{count+=Math.random()>.55?1:-1;document.getElementById("onlineCount").textContent=count},3500);
