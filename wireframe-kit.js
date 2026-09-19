/*! Wireframe Kit runtime v1.1.2 — 表紙・コメント・PNG書き出し */
(function(){
if(window.__wfkit)return;window.__wfkit=true;
var WFK_STYLE="\n#wf-comment-ui{font-family:'Helvetica Neue','Hiragino Kaku Gothic ProN',sans-serif;font-size:13px;}\n#wf-toolbar{position:fixed;top:0;left:0;right:0;z-index:9000;background:#fff;border-bottom:1px solid #e0e0e0;padding:8px 16px;display:flex;align-items:center;gap:10px;box-shadow:0 1px 4px rgba(0,0,0,.08);overflow-x:auto;}\n@media(max-width:900px){.wft-hint{display:none!important;}}\n#wf-toolbar .wft-label{font-size:10px;font-weight:700;letter-spacing:.2em;color:#bbb;}\n.wft-btn{white-space:nowrap;flex-shrink:0;display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border:1px solid #ddd;background:#fff;color:#555;font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;border-radius:4px;transition:all .15s;}\n.wft-btn:hover{border-color:#111;color:#111;}\n.wft-btn.on{background:#111;color:#fff;border-color:#111;}\n.wft-spacer{flex:1;}\n.wft-hint{font-size:11px;color:#bbb;}\n#wf-sidebar{position:fixed;right:0;top:41px;bottom:0;width:260px;background:#fff;border-left:1px solid #e0e0e0;z-index:8900;display:flex;flex-direction:column;transform:translateX(100%);transition:transform .2s;}\n#wf-sidebar.open{transform:translateX(0);}\n.wfs-head{padding:12px 16px;border-bottom:1px solid #e0e0e0;display:flex;align-items:center;justify-content:space-between;}\n.wfs-title{font-size:11px;font-weight:700;letter-spacing:.1em;color:#555;}\n.wfs-close{background:none;border:none;cursor:pointer;font-size:16px;color:#aaa;line-height:1;}\n.wfs-body{flex:1;overflow-y:auto;}\n.wfs-footer{padding:10px 14px;border-top:1px solid #f0f0f0;text-align:right;}\n.wfs-show-resolved{background:none;border:none;font-size:10px;color:#aaa;cursor:pointer;font-family:inherit;padding:0;}\n.wfs-show-resolved:hover{color:#555;}\n.wfs-empty{font-size:12px;color:#bbb;text-align:center;padding:24px 0;}\n.wfs-item{padding:10px 14px;border-bottom:1px solid #f0f0f0;cursor:pointer;display:flex;gap:10px;}\n.wfs-item:hover{background:#fafafa;}\n.wfs-item.active{background:#EBF4FF;}\n.wfs-item.resolved{opacity:.4;}\n.wfs-item.resolved:hover{background:#fafafa;opacity:.6;}\n.wfs-pin{width:22px;height:22px;border-radius:50% 50% 50% 0;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#fff;flex-shrink:0;transform:rotate(-45deg);}\n.wfs-pin span{transform:rotate(45deg);}\n.wfs-info{flex:1;min-width:0;}\n.wfs-author{font-size:11px;font-weight:700;color:#222;}\n.wfs-text{font-size:11px;color:#666;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1px;}\n.wfs-meta{font-size:10px;color:#bbb;margin-top:2px;}\n.wf-pin{position:absolute;width:26px;height:26px;border-radius:50% 50% 50% 0;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#fff;cursor:grab;transform:rotate(-45deg);z-index:8000;transition:opacity .15s;user-select:none;}\n.wf-pin span{transform:rotate(45deg);}\n.wf-pin:hover{opacity:.8;}\n.wf-pin:active{cursor:grabbing;}\n.wf-pin.wf-flash{animation:wfFlash .6s ease 3;}\n@keyframes wfFlash{0%,100%{box-shadow:0 0 0 0 rgba(55,138,221,.7);}50%{box-shadow:0 0 0 12px rgba(55,138,221,0);}}\n.wf-pop{position:absolute;z-index:8500;background:#fff;border:1px solid #ddd;border-radius:6px;width:280px;box-shadow:0 4px 16px rgba(0,0,0,.12);max-height:480px;display:flex;flex-direction:column;}\n.wf-pop-head{padding:8px 12px;border-bottom:1px solid #f0f0f0;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;}\n.wf-pop-author{font-size:11px;font-weight:700;color:#222;}\n.wf-pop-time{font-size:10px;color:#bbb;}\n.wf-pop-close{background:none;border:none;cursor:pointer;color:#aaa;font-size:15px;line-height:1;}\n.wf-pop-threads{overflow-y:auto;flex:1;}\n.wf-pop-body{padding:10px 12px;border-bottom:1px solid #f0f0f0;}\n.wf-pop-text{font-size:12px;color:#333;line-height:1.6;margin-bottom:8px;word-break:break-all;}\n.wf-pop-actions{display:flex;gap:10px;}\n.wf-pop-resolve{font-size:11px;color:#1D9E75;cursor:pointer;font-weight:700;}\n.wf-pop-delete{font-size:11px;color:#bbb;cursor:pointer;}\n.wf-reply-item{padding:8px 12px;border-bottom:1px solid #f8f8f8;display:flex;gap:8px;}\n.wf-reply-avatar{width:20px;height:20px;border-radius:50%;background:#e0e0e0;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:#888;flex-shrink:0;}\n.wf-reply-body{flex:1;min-width:0;}\n.wf-reply-author{font-size:10px;font-weight:700;color:#222;}\n.wf-reply-time{font-size:10px;color:#bbb;margin-left:6px;}\n.wf-reply-text{font-size:11px;color:#444;line-height:1.6;margin-top:2px;word-break:break-all;}\n.wf-reply-input{padding:8px 10px;border-top:1px solid #f0f0f0;display:flex;gap:6px;align-items:flex-end;flex-shrink:0;}\n.wf-reply-input textarea{flex:1;border:1px solid #e0e0e0;border-radius:4px;padding:6px 8px;font-size:11px;font-family:inherit;resize:none;min-height:32px;max-height:80px;outline:none;color:#333;line-height:1.5;}\n.wf-reply-input textarea:focus{border-color:#378ADD;}\n.wf-reply-send{width:28px;height:28px;background:#378ADD;border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;}\n.wf-reply-send:disabled{background:#ddd;cursor:default;}\n.wf-reply-send svg{width:12px;height:12px;fill:#fff;}\n.wf-input-pop{position:absolute;z-index:8500;background:#fff;border:1px solid #ddd;border-radius:6px;width:260px;box-shadow:0 4px 16px rgba(0,0,0,.12);}\n.wf-input-pop textarea{width:100%;border:none;padding:10px 12px;font-size:12px;font-family:inherit;resize:none;min-height:72px;outline:none;color:#333;display:block;border-radius:6px 6px 0 0;}\n.wf-input-foot{padding:6px 10px;border-top:1px solid #f0f0f0;display:flex;align-items:center;gap:6px;}\n.wf-input-foot-r{margin-left:auto;display:flex;gap:6px;}\n.wf-btn-cancel{background:none;border:1px solid #ddd;padding:4px 10px;font-size:11px;cursor:pointer;font-family:inherit;border-radius:4px;color:#666;}\n.wf-btn-post{background:#111;color:#fff;border:none;padding:4px 10px;font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;border-radius:4px;}\n.wf-btn-post:disabled{opacity:.3;cursor:default;}\n.wf-img-btn{background:none;border:none;cursor:pointer;padding:2px 4px;color:#bbb;font-size:15px;line-height:1;border-radius:3px;}\n.wf-img-btn:hover{color:#555;background:#f5f5f5;}\n.wf-img-btn svg{display:block;}\n.wf-img-preview{padding:6px 10px;display:flex;flex-wrap:wrap;gap:6px;}\n.wf-img-thumb{position:relative;width:60px;height:60px;}\n.wf-img-thumb img{width:100%;height:100%;object-fit:cover;border-radius:4px;border:1px solid #e0e0e0;}\n.wf-img-thumb-del{position:absolute;top:-5px;right:-5px;width:16px;height:16px;background:#555;color:#fff;border:none;border-radius:50%;font-size:9px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;}\n.wf-comment-img{margin-top:8px;display:flex;flex-wrap:wrap;gap:6px;}\n.wf-comment-img img{max-width:100%;max-height:160px;object-fit:cover;border-radius:4px;border:1px solid #e8e8e8;cursor:pointer;}\n.wf-comment-img img:hover{opacity:.85;}\n.wf-reply-img{margin-top:4px;display:flex;flex-wrap:wrap;gap:4px;}\n.wf-reply-img img{max-width:120px;max-height:80px;object-fit:cover;border-radius:3px;border:1px solid #e8e8e8;cursor:pointer;}\n.wf-img-lightbox{position:fixed;inset:0;background:rgba(0,0,0,.8);z-index:99999;display:flex;align-items:center;justify-content:center;cursor:zoom-out;}\n.wf-img-lightbox img{max-width:90vw;max-height:90vh;object-fit:contain;border-radius:4px;}\n.wf-reply-input-row{display:flex;gap:6px;align-items:flex-end;}\n.wf-reply-input-row textarea{flex:1;border:1px solid #e0e0e0;border-radius:4px;padding:6px 8px;font-size:11px;font-family:inherit;resize:none;min-height:32px;max-height:80px;outline:none;color:#333;line-height:1.5;}\n.wf-reply-input-row textarea:focus{border-color:#378ADD;}\n.wfs-reply-count{font-size:10px;color:#378ADD;margin-top:2px;}\n.wf-has-img{font-size:10px;color:#bbb;margin-top:2px;}\nbody.comment-mode{cursor:crosshair;}\nbody.comment-mode a,body.comment-mode button{cursor:crosshair!important;}\n";
var WFK_UI="<div id=\"wf-comment-ui\">\n<div id=\"wf-toolbar\">\n  <span class=\"wft-label\">WIREFRAME</span>\n  <button class=\"wft-btn on\" id=\"wft-view\" onclick=\"wfSetMode('view')\">閲覧</button>\n  <button class=\"wft-btn\" id=\"wft-comment\" onclick=\"wfSetMode('comment')\">コメント</button>\n  <div class=\"wft-spacer\"></div>\n  <span class=\"wft-hint\" id=\"wft-hint\">クリックでコメントを追加</span>\n  <button class=\"wft-btn\" onclick=\"wfExportPng()\" id=\"wft-png-btn\">PNG書き出し</button>\n  <button class=\"wft-btn\" onclick=\"wfToggleSidebar()\" id=\"wft-sb-btn\">コメント一覧 (<span id=\"wft-count\">0</span>)</button>\n</div>\n<div id=\"wf-sidebar\">\n  <div class=\"wfs-head\"><span class=\"wfs-title\">コメント</span><button class=\"wfs-close\" onclick=\"wfToggleSidebar()\">×</button></div>\n  <div class=\"wfs-body\" id=\"wfs-body\"><div class=\"wfs-empty\">コメントはまだありません</div></div>\n  <div class=\"wfs-footer\"><button class=\"wfs-show-resolved\" onclick=\"wfToggleResolved()\" id=\"wfs-resolved-btn\">解決済みを表示</button></div>\n</div>\n</div>";
// 表紙：HTML内の <script id="wf-kit-meta"> の情報から、ページ先頭に表紙を差し込む
function wfkCover(){
  var metaEl=document.getElementById('wf-kit-meta');
  var meta={};
  try{meta=JSON.parse(metaEl?metaEl.textContent:'{}')||{};}catch(e){meta={};}
  if(meta.id&&!document.querySelector('meta[name="wf-id"]')){
    var m=document.createElement('meta');m.name='wf-id';m.content=meta.id;document.head.appendChild(m);
  }
  if(document.getElementById('cover'))return;
  if(!meta.client&&!(meta.sitemap||[]).length)return;
  function esc(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  function list(t){
    if(!t)return '<p style="font-size:12px;color:#ccc;margin:0;">—</p>';
    return String(t).split(/\n|／/).map(function(s){return s.trim().replace(/^[・•\-－]\s*/,'');}).filter(Boolean)
      .map(function(s){return '<p style="font-size:13px;color:#333;line-height:1.9;margin:0 0 10px;display:flex;gap:10px;"><span style="color:#bbb;flex-shrink:0;">—</span><span>'+esc(s)+'</span></p>';}).join('');
  }
  var rows=(meta.sitemap||[]).map(function(p){
    var href=document.getElementById(p.id)?'#'+p.id:'#';
    return '<div style="padding:6px 0 6px '+((p.level||0)*14)+'px;border-bottom:1px solid #f0f0f0;"><a href="'+esc(href)+'" style="font-size:13px;font-weight:700;color:#111;text-decoration:none;">'+((p.level||0)>=2?'└ ':'')+esc(p.name)+'</a></div>';
  }).join('');
  var sign=meta.logo?'<img src="'+esc(meta.logo)+'" alt="'+esc(meta.author||'')+'" style="max-height:64px;max-width:260px;">'
    :(meta.author?'<p style="font-size:18px;font-weight:800;letter-spacing:.04em;margin:0;">'+esc(meta.author)+'</p>':'');
  var font="font-family:'Helvetica Neue','Hiragino Kaku Gothic ProN','Yu Gothic',sans-serif;";
  var html='<section id="cover" style="min-height:100vh;display:flex;flex-direction:column;padding:56px 64px;background:#fff;color:#111;'+font+'border-bottom:10px solid #f0f0f0;box-sizing:border-box;">'+
    '<div style="padding:40px 0 56px;"><h1 style="font-size:clamp(24px,3vw,36px);font-weight:800;line-height:1.5;margin:0;">'+esc(meta.client||'')+' 様<br><span style="font-size:.7em;font-weight:700;color:#555;">'+esc(meta.siteType||'')+'　ワイヤーフレーム</span></h1></div>'+
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:60px;">'+
      '<div><p style="font-size:12px;font-weight:700;color:#999;margin:0 0 4px;">サイトの目的</p><p style="font-size:10px;color:#ccc;margin:0 0 16px;">このサイトは何のために作るか</p>'+list(meta.goal)+'</div>'+
      '<div><p style="font-size:12px;font-weight:700;color:#999;margin:0 0 4px;">サイトのゴール</p><p style="font-size:10px;color:#ccc;margin:0 0 16px;">最終的にユーザーにしてほしい行動</p>'+list(meta.cta)+'</div>'+
    '</div>'+
    '<div style="margin-top:auto;padding-top:40px;border-top:1px solid #e0e0e0;display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:end;">'+
      '<div><p style="font-size:10px;font-weight:700;letter-spacing:.25em;color:#bbb;margin:0 0 20px;">SITEMAP</p><div style="display:flex;flex-direction:column;">'+rows+'</div></div>'+
      '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:16px;">'+sign+
        '<p style="font-size:10px;color:#bbb;line-height:2;text-align:right;margin:0;">※ワイヤーフレームは掲載する要素を確認するためのものであり、デザインではございません。</p></div>'+
    '</div></section>';
  document.body.insertAdjacentHTML('afterbegin',html);
}

function wfkBoot(){
try{wfkCover();}catch(e){console.error('wireframe-kit cover',e);}
var st=document.createElement('style');st.textContent=WFK_STYLE;document.head.appendChild(st);
document.body.insertAdjacentHTML('beforeend',WFK_UI);

(function(){
const LS=(()=>{try{localStorage.setItem('__t','1');localStorage.removeItem('__t');return localStorage;}catch(e){const m={};return {getItem:k=>(k in m?m[k]:null),setItem:(k,v)=>{m[k]=String(v);},removeItem:k=>{delete m[k];}};}})();
const WF_ID=document.querySelector('meta[name="wf-id"]')?.content||location.pathname.replace(/[^a-zA-Z0-9\-_]/g,'');
const NAME_KEY='wf_author_name';
let mode='view',comments=[],nextId=1,openPopId=null,inputPop=null,showResolved=false;
const STORE='wfkit_c_'+WF_ID;
// 同じフォルダに wf-comments.php があればサーバー保存（全員で共有）、なければこのブラウザに保存
const SRV_URL='wf-comments.php?id='+encodeURIComponent(WF_ID);
let SRV=null;
function wfLocalLoad(){try{const d=JSON.parse(LS.getItem(STORE)||'[]');return Array.isArray(d)?d:[];}catch(e){return [];}}
function wfApply(d){comments=d;nextId=d.length?Math.max(...d.map(c=>c.id))+1:1;}
function wfSrvBadge(){const t=document.getElementById('wf-toolbar');if(!t||document.getElementById('wf-srv-badge'))return;t.insertAdjacentHTML('beforeend','<span id="wf-srv-badge" style="flex-shrink:0;white-space:nowrap;font-size:11px;font-weight:700;color:#1a7f37;margin-left:8px">● コメント共有中</span>');}
function load(cb){
  const done=()=>{if(cb)cb();};
  if(SRV===false||!/^https?:$/.test(location.protocol)){SRV=false;wfApply(wfLocalLoad());return done();}
  fetch(SRV_URL,{cache:'no-store'}).then(r=>{if(!r.ok)throw 0;return r.json();}).then(d=>{
    if(!Array.isArray(d))throw 0;
    const first=SRV===null;SRV=true;wfSrvBadge();
    if(first&&!d.length){const loc=wfLocalLoad();if(loc.length){wfApply(loc);save();return done();}}
    wfApply(d);done();
  }).catch(()=>{if(SRV===null){SRV=false;wfApply(wfLocalLoad());}done();});
}
function save(){
  if(SRV){fetch(SRV_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(comments)}).then(r=>{if(!r.ok)throw 0;}).catch(()=>alert('コメントをサーバーに保存できませんでした。通信状況を確認して、もう一度お試しください。'));return;}
  try{LS.setItem(STORE,JSON.stringify(comments));}catch(e){alert('ブラウザの保存容量がいっぱいです。画像付きのコメントを減らしてください。');}
}
async function uploadImg(b64){return b64;}
function getName(){return LS.getItem(NAME_KEY)||'';}
function askName(){const n=prompt('コメントに表示するお名前を入力してください');if(n&&n.trim()){LS.setItem(NAME_KEY,n.trim());return n.trim();}return null;}
function wfSetMode(m){
  mode=m;
  document.getElementById('wft-view').classList.toggle('on',m==='view');
  document.getElementById('wft-comment').classList.toggle('on',m==='comment');
  document.getElementById('wft-hint').style.display=m==='comment'?'':'none';
  document.body.classList.toggle('comment-mode',m==='comment');
  closeInput();closePopover();
}
window.wfSetMode=wfSetMode;
function wfToggleSidebar(){document.getElementById('wf-sidebar').classList.toggle('open');}
window.wfToggleSidebar=wfToggleSidebar;
async function wfExportPng(){
  const btn=document.getElementById('wft-png-btn');
  if(!window.html2canvas){
    btn.textContent='準備中…';
    try{
      await new Promise((res,rej)=>{const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';s.onload=res;s.onerror=rej;document.head.appendChild(s);});
    }catch(e){alert('書き出しライブラリの読み込みに失敗しました。通信環境を確認してください。');btn.textContent='PNG書き出し';return;}
  }
  const secs=[...document.querySelectorAll('section[id]')].filter(s=>s.id==='cover'||s.id.indexOf('page-')===0);
  if(!secs.length){alert('ページセクションが見つかりません');btn.textContent='PNG書き出し';return;}
  const base=(document.querySelector('meta[name="wf-id"]')?.content||'wireframe');
  closePopover();closeInput();
  document.querySelectorAll('.wf-pin').forEach(p=>p.style.display='none');
  for(let i=0;i<secs.length;i++){
    btn.textContent=`書き出し中 ${i+1}/${secs.length}`;
    try{
      const canvas=await html2canvas(secs[i],{scale:2,backgroundColor:'#ffffff',useCORS:true,logging:false});
      const a=document.createElement('a');
      a.download=`${base}_${String(i+1).padStart(2,'0')}_${secs[i].id.replace('page-','')}.png`;
      a.href=canvas.toDataURL('image/png');
      a.click();
    }catch(e){console.error('PNG export failed:',secs[i].id,e);}
    await new Promise(r=>setTimeout(r,400));
  }
  document.querySelectorAll('.wf-pin').forEach(p=>p.style.display='');
  btn.textContent='PNG書き出し';
}
window.wfExportPng=wfExportPng;
document.addEventListener('click',function(e){
  if(mode!=='comment')return;
  if(e.target.closest('.wf-pin,.wf-pop,.wf-input-pop,#wf-toolbar,#wf-sidebar'))return;
  closeInput();closePopover();
  const x=e.pageX,y=e.pageY;
  showInput(x,y);
  inputAnchor=wfAnchor(e.target,x,y);
});
let inputAnchor=null;
function wfAnchor(el,px,py){
  if(!el||el===document.body||el===document.documentElement)return null;
  if(el.closest&&el.closest('#wf-comment-ui,.wf-pin,.wf-pop,.wf-input-pop'))return null;
  const path=[];let n=el;
  while(n&&n!==document.body&&!n.id){const par=n.parentElement;if(!par)return null;path.unshift(Array.prototype.indexOf.call(par.children,n));n=par;}
  const r=el.getBoundingClientRect();
  if(!r.width||!r.height)return null;
  return {id:(n&&n!==document.body)?n.id:'',p:path,rx:(px-(r.left+window.scrollX))/r.width,ry:(py-(r.top+window.scrollY))/r.height};
}
function wfFindEl(a){
  let n=a.id?document.getElementById(a.id):document.body;
  for(const i of a.p){if(!n)return null;n=n.children[i];}
  return n||null;
}
function pinPos(c){
  if(c.a){
    const el=wfFindEl(c.a);
    if(el){const r=el.getBoundingClientRect();if(r.width&&r.height)return {x:r.left+window.scrollX+c.a.rx*r.width,y:r.top+window.scrollY+c.a.ry*r.height};}
  }
  return {x:c.x,y:c.y};
}
function showInput(x,y){
  closeInput();pendingImgs=[];
  const pop=document.createElement('div');
  pop.className='wf-input-pop';
  pop.style.cssText=`left:${Math.min(x,window.innerWidth-270)}px;top:${y+10}px;`;
  pop.innerHTML=`<textarea id="wf-new-text" placeholder="コメントを入力…"></textarea><div class="wf-img-preview" id="wf-new-img-prev"></div><div class="wf-input-foot"><button class="wf-img-btn" title="画像を添付" onclick="wfPickImg('wf-new-img-inp')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="15.5" cy="8.5" r="2"/><path d="M3 17l6-6 5 5 3-3 4 4"/></svg></button><input type="file" id="wf-new-img-inp" accept="image/*" style="display:none" onchange="wfImgChange('wf-new-img-inp','wf-new-img-prev')"><div class="wf-input-foot-r"><button class="wf-btn-cancel" onclick="wfCloseInput()">キャンセル</button><button class="wf-btn-post" id="wf-post-btn" disabled onclick="wfPost(${x},${y})">投稿</button></div></div>`;
  document.body.appendChild(pop);
  inputPop=pop;
  const ta=pop.querySelector('textarea');
  ta.focus();
  ta.addEventListener('input',function(){document.getElementById('wf-post-btn').disabled=!this.value.trim()&&!pendingImgs.length;});
  ta.addEventListener('paste',e=>pasteImg(e,addNewImgThumb));
}
function closeInput(){if(inputPop){inputPop.remove();inputPop=null;}}
window.wfCloseInput=closeInput;
function nowStr(){return new Date().toLocaleString('ja-JP',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'});}
function avatarLetter(name){return name?name.charAt(0).toUpperCase():'?';}
function autoLink(text){
  return text.replace(/(https?:\/\/[^\s<>"]+)/g,'<a href="$1" target="_blank" rel="noopener" style="color:#378ADD;word-break:break-all;">$1</a>');
}
function compressImage(file){
  return new Promise(resolve=>{
    const reader=new FileReader();
    reader.onload=e=>{
      const img=new Image();
      img.onload=()=>{
        const MAX=900;
        let w=img.width,h=img.height;
        if(w>MAX){h=Math.round(h*MAX/w);w=MAX;}
        if(h>MAX){w=Math.round(w*MAX/h);h=MAX;}
        const canvas=document.createElement('canvas');
        canvas.width=w;canvas.height=h;
        canvas.getContext('2d').drawImage(img,0,0,w,h);
        resolve(canvas.toDataURL('image/jpeg',0.68));
      };
      img.src=e.target.result;
    };
    reader.readAsDataURL(file);
  });
}
function openLightbox(src){
  const lb=document.createElement('div');lb.className='wf-img-lightbox';
  lb.innerHTML=`<img src="${src}">`;lb.onclick=()=>lb.remove();
  document.body.appendChild(lb);
}
window.openLightbox=openLightbox;
let pendingImgs=[];
function wfPickImg(inputId){
  const inp=document.getElementById(inputId);if(!inp)return;
  inp.click();
}
window.wfPickImg=wfPickImg;
async function wfImgChange(inputId,previewId){
  const inp=document.getElementById(inputId);
  if(!inp||!inp.files.length)return;
  const file=inp.files[0];
  const b64=await compressImage(file);
  const url=await uploadImg(b64);
  if(!url){alert('画像のアップロードに失敗しました');inp.value='';return;}
  pendingImgs.push(url);
  const prev=document.getElementById(previewId);
  if(prev){
    const idx=pendingImgs.length-1;
    const thumb=document.createElement('div');thumb.className='wf-img-thumb';
    thumb.innerHTML=`<img src="${url}" onclick="openLightbox('${url}')"><button class="wf-img-thumb-del" onclick="pendingImgs.splice(${idx},1);this.closest('.wf-img-thumb').remove()">×</button>`;
    prev.appendChild(thumb);
  }
  inp.value='';
}
window.wfImgChange=wfImgChange;
let replyPendingImgs={};
async function wfReplyImgChange(id,inputId){
  const inp=document.getElementById(inputId);
  if(!inp||!inp.files.length)return;
  const file=inp.files[0];
  const b64=await compressImage(file);
  const url=await uploadImg(b64);
  if(!url){alert('画像のアップロードに失敗しました');inp.value='';return;}
  if(!replyPendingImgs[id])replyPendingImgs[id]=[];
  replyPendingImgs[id].push(url);
  const prev=document.getElementById('wf-reply-img-prev-'+id);
  if(prev){
    const imgs=replyPendingImgs[id];const idx=imgs.length-1;
    const thumb=document.createElement('div');thumb.className='wf-img-thumb';
    thumb.innerHTML=`<img src="${url}" onclick="openLightbox('${url}')"><button class="wf-img-thumb-del" onclick="replyPendingImgs[${id}].splice(${idx},1);this.closest('.wf-img-thumb').remove()">×</button>`;
    prev.appendChild(thumb);
  }
  inp.value='';
}
window.wfReplyImgChange=wfReplyImgChange;
function addNewImgThumb(url){
  pendingImgs.push(url);
  const prev=document.getElementById('wf-new-img-prev');
  if(prev){
    const idx=pendingImgs.length-1;
    const thumb=document.createElement('div');thumb.className='wf-img-thumb';
    thumb.innerHTML=`<img src="${url}" onclick="openLightbox('${url}')"><button class="wf-img-thumb-del" onclick="pendingImgs.splice(${idx},1);this.closest('.wf-img-thumb').remove()">×</button>`;
    prev.appendChild(thumb);
  }
  const btn=document.getElementById('wf-post-btn');if(btn)btn.disabled=false;
}
function addReplyImgThumb(id,url){
  if(!replyPendingImgs[id])replyPendingImgs[id]=[];
  replyPendingImgs[id].push(url);
  const prev=document.getElementById('wf-reply-img-prev-'+id);
  if(prev){
    const imgs=replyPendingImgs[id];const idx=imgs.length-1;
    const thumb=document.createElement('div');thumb.className='wf-img-thumb';
    thumb.innerHTML=`<img src="${url}" onclick="openLightbox('${url}')"><button class="wf-img-thumb-del" onclick="replyPendingImgs[${id}].splice(${idx},1);this.closest('.wf-img-thumb').remove()">×</button>`;
    prev.appendChild(thumb);
  }
  const send=document.getElementById('wf-reply-send-'+id);if(send)send.disabled=false;
}
async function pasteImg(e,add){
  const items=e.clipboardData?e.clipboardData.items:null;if(!items)return;
  const files=[];
  for(const it of items){if(it.type&&it.type.indexOf('image/')===0){const f=it.getAsFile();if(f)files.push(f);}}
  if(!files.length)return;
  e.preventDefault();
  for(const f of files){
    const b64=await compressImage(f);
    const url=await uploadImg(b64);
    if(!url){alert('画像のアップロードに失敗しました');return;}
    add(url);
  }
}
function wfPost(x,y){
  const ta=document.getElementById('wf-new-text');
  const text=ta?.value?.trim();
  const imgs=[...pendingImgs];
  if(!text&&!imgs.length)return;
  let name=getName();
  if(!name){name=askName();if(!name){closeInput();return;}}
  comments.push({id:nextId++,x,y,a:inputAnchor,text:text||'',author:name,resolved:false,time:nowStr(),replies:[],images:imgs});
  inputAnchor=null;
  pendingImgs=[];
  save();closeInput();renderPins();renderSidebar();
}
window.wfPost=wfPost;
function wfReply(id){
  const ta=document.getElementById('wf-reply-ta-'+id);
  const text=ta?.value?.trim();
  const imgs=replyPendingImgs[id]||[];
  if(!text&&!imgs.length)return;
  let name=getName();
  if(!name){name=askName();if(!name)return;}
  const c=comments.find(c=>c.id===id);if(!c)return;
  if(!c.replies)c.replies=[];
  c.replies.push({author:name,text:text||'',time:nowStr(),images:[...imgs]});
  replyPendingImgs[id]=[];
  save();renderSidebar();wfTogglePop(id);
}
window.wfReply=wfReply;
function renderPins(){
  document.querySelectorAll('.wf-pin').forEach(p=>p.remove());
  comments.forEach(c=>{
    const pin=document.createElement('div');
    pin.className='wf-pin';
    pin.id='wfpin-'+c.id;
    pin.title='ドラッグでピンの位置を移動';
    const pp=pinPos(c);
    pin.style.cssText='left:'+(pp.x-13)+'px;top:'+(pp.y-26)+'px;background:'+(c.resolved?'#bbb':'#378ADD')+';';
    pin.innerHTML=`<span>${c.id}</span>`;
    makePinDraggable(pin,c);
    document.body.appendChild(pin);
  });
}
function makePinDraggable(pin,c){
  let startX=0,startY=0,moved=false,dragging=false;
  pin.addEventListener('mousedown',e=>{
    e.preventDefault();e.stopPropagation();
    startX=e.clientX;startY=e.clientY;moved=false;dragging=true;
    const cur=pinPos(c);c.x=cur.x;c.y=cur.y;
    pin.style.transition='none';
    document.addEventListener('mousemove',onMove);
    document.addEventListener('mouseup',onUp);
  });
  function onMove(e){
    if(!dragging)return;
    const dx=e.clientX-startX,dy=e.clientY-startY;
    if(Math.abs(dx)>3||Math.abs(dy)>3)moved=true;
    if(moved){
      c.x+=dx;c.y+=dy;
      startX=e.clientX;startY=e.clientY;
      pin.style.left=(c.x-13)+'px';
      pin.style.top=(c.y-26)+'px';
      if(openPopId===c.id)closePopover();
    }
  }
  function onUp(e){
    dragging=false;
    document.removeEventListener('mousemove',onMove);
    document.removeEventListener('mouseup',onUp);
    if(moved){
      pin.style.display='none';
      const el=document.elementFromPoint(c.x-window.scrollX,c.y-window.scrollY);
      pin.style.display='';
      c.a=wfAnchor(el,c.x,c.y);
      save();
    }
    else{wfTogglePop(c.id);}
  }
}
function closePopover(){
  const p=document.getElementById('wf-active-pop');if(p)p.remove();
  openPopId=null;
}
function wfTogglePop(id){
  if(openPopId===id){closePopover();return;}
  closePopover();openPopId=id;
  const c=comments.find(c=>c.id===id);if(!c)return;
  const replies=c.replies||[];
  const imgHtml=imgs=>(imgs&&imgs.length?`<div class="wf-comment-img">${imgs.map(s=>`<img src="${s}" onclick="openLightbox('${s}')">`).join('')}</div>`:'');
  const repliesHtml=replies.map(r=>`<div class="wf-reply-item"><div class="wf-reply-avatar">${avatarLetter(r.author)}</div><div class="wf-reply-body"><span class="wf-reply-author">${r.author}</span><span class="wf-reply-time">${r.time}</span>${r.text?`<div class="wf-reply-text">${autoLink(r.text)}</div>`:''}${imgHtml(r.images)}</div></div>`).join('');
  const pop=document.createElement('div');
  pop.className='wf-pop';pop.id='wf-active-pop';
  const pp=pinPos(c);
  pop.style.cssText='left:'+Math.min(pp.x+4,window.innerWidth-300)+'px;top:'+(pp.y+4)+'px;';
  pop.innerHTML=`
    <div class="wf-pop-head"><div><div class="wf-pop-author">${c.author}</div><div class="wf-pop-time">${c.time}</div></div><button class="wf-pop-close" onclick="wfClosePop()">×</button></div>
    <div class="wf-pop-threads">
      <div class="wf-pop-body">${c.text?`<div class="wf-pop-text">${autoLink(c.text)}</div>`:''}${imgHtml(c.images)}<div class="wf-pop-actions"><span class="wf-pop-resolve" onclick="wfResolve(${id})">${c.resolved?'未解決に戻す':'解決済みにする'}</span><span class="wf-pop-delete" onclick="wfDelete(${id})">削除</span></div></div>
      ${repliesHtml}
    </div>
    <div class="wf-reply-input">
      <div style="flex:1;display:flex;flex-direction:column;gap:4px;">
        <div class="wf-reply-input-row">
          <textarea id="wf-reply-ta-${id}" placeholder="返信を入力…" rows="1" oninput="this.style.height='auto';this.style.height=this.scrollHeight+'px';document.getElementById('wf-reply-send-${id}').disabled=!this.value.trim()&&!(replyPendingImgs[${id}]&&replyPendingImgs[${id}].length);"></textarea>
          <button class="wf-reply-send" id="wf-reply-send-${id}" disabled onclick="wfReply(${id})"><svg viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg></button>
        </div>
        <div style="display:flex;align-items:center;gap:6px;">
          <button class="wf-img-btn" title="画像を添付" onclick="wfPickImg('wf-reply-img-inp-${id}')"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="15.5" cy="8.5" r="2"/><path d="M3 17l6-6 5 5 3-3 4 4"/></svg></button>
          <input type="file" id="wf-reply-img-inp-${id}" accept="image/*" style="display:none" onchange="wfReplyImgChange(${id},'wf-reply-img-inp-${id}')">
          <div class="wf-img-preview" id="wf-reply-img-prev-${id}" style="padding:0;flex-wrap:wrap;display:flex;gap:4px;"></div>
        </div>
      </div>
    </div>`;
  document.body.appendChild(pop);
  const rta=document.getElementById('wf-reply-ta-'+id);
  if(rta)rta.addEventListener('paste',e=>pasteImg(e,url=>addReplyImgThumb(id,url)));
  highlightSidebar(id);
}
window.wfTogglePop=wfTogglePop;
window.wfClosePop=closePopover;
function wfResolve(id){
  const c=comments.find(c=>c.id===id);if(c)c.resolved=!c.resolved;
  save();closePopover();renderPins();renderSidebar();
}
window.wfResolve=wfResolve;
function wfDelete(id){
  if(!confirm('このコメントを削除しますか？'))return;
  comments=comments.filter(c=>c.id!==id);
  save();closePopover();renderPins();renderSidebar();
}
window.wfDelete=wfDelete;
function renderSidebar(){
  const active=comments.filter(c=>!c.resolved);
  const resolved=comments.filter(c=>c.resolved);
  document.getElementById('wft-count').textContent=active.length;
  const body=document.getElementById('wfs-body');
  const visible=showResolved?comments:active;
  if(!visible.length){
    body.innerHTML='<div class="wfs-empty">'+(comments.length?'解決済みのコメントのみあります':'コメントはまだありません')+'</div>';
  }else{
    body.innerHTML=visible.map(c=>{
      const rc=(c.replies||[]).length;
      const lastReply=rc>0?c.replies[rc-1]:null;
      const lastText=lastReply?(lastReply.text||(lastReply.images?.length?'📎 画像':'')):(c.text||(c.images?.length?'📎 画像':''));
      const preview=lastReply?`<div class="wfs-text" style="color:#378ADD;font-size:10px;">↩ ${lastReply.author}：${lastText}</div>`:`<div class="wfs-text">${lastText}</div>`;
      const hasImg=!!(c.images&&c.images.length);
      return `<div class="wfs-item${c.resolved?' resolved':''}" id="wfsi-${c.id}" onclick="wfFocus(${c.id})">
        <div class="wfs-pin" style="background:${c.resolved?'#bbb':'#378ADD'}"><span>${c.id}</span></div>
        <div class="wfs-info">
          <div class="wfs-author">${c.author}${c.resolved?' <span style=\"color:#bbb;font-size:10px;\">✓</span>':''}</div>
          ${rc>0?'<div class="wfs-text">'+c.text+'</div>':''}${preview}
          ${hasImg&&rc===0?'<div class="wf-has-img">📎 画像あり</div>':''}
          ${rc>0?'<div class="wfs-reply-count">返信 '+rc+'件</div>':''}
          <div class="wfs-meta">${c.time}</div>
        </div></div>`;
    }).join('');
  }
  const btn=document.getElementById('wfs-resolved-btn');
  if(btn){
    btn.textContent=showResolved?`解決済みを非表示 (${resolved.length})`:`解決済みを表示 (${resolved.length})`;
    btn.style.display=resolved.length?'inline':'none';
  }
}
function wfToggleResolved(){showResolved=!showResolved;renderSidebar();}
window.wfToggleResolved=wfToggleResolved;
function highlightSidebar(id){
  document.querySelectorAll('.wfs-item').forEach(el=>el.classList.remove('active'));
  const el=document.getElementById('wfsi-'+id);if(el){el.classList.add('active');el.scrollIntoView({block:'nearest'});}
}
function wfFocus(id){
  const c=comments.find(x=>x.id===id);if(!c)return;
  const p=pinPos(c);
  window.scrollTo({top:Math.max(0,p.y-window.innerHeight/2),behavior:'smooth'});
  const pin=document.getElementById('wfpin-'+id);
  if(pin){pin.classList.remove('wf-flash');void pin.offsetWidth;pin.classList.add('wf-flash');}
  closePopover();
  setTimeout(()=>wfTogglePop(id),400);
}
window.wfFocus=wfFocus;
document.body.style.paddingTop='41px';
// ページ内リンクで移動したとき、固定ヘッダーの下にページの先頭がぴったり来るように調整（AIが書いたscroll-marginなどは打ち消す）
function wfAnchorFix(){
  const hd=[...document.querySelectorAll('header, [class*="header"], [class*="hd"]')].find(el=>{const cs=getComputedStyle(el);return (cs.position==='sticky'||cs.position==='fixed')&&el.offsetHeight>0&&el.offsetHeight<240;});
  const h=41+(hd?hd.offsetHeight:0);
  let st=document.getElementById('wf-anchor-style');
  if(!st){st=document.createElement('style');st.id='wf-anchor-style';document.head.appendChild(st);}
  st.textContent='html{scroll-padding-top:'+h+'px!important;}[id]{scroll-margin-top:0!important;}';
}
wfAnchorFix();
window.addEventListener('resize',wfAnchorFix);
// 移動はスクリプトで行う（ブラウザ任せだと、ページのCSSやスムーズスクロールの影響で位置がずれるため）
function wfJump(id,smooth){
  const el=document.getElementById(id);if(!el)return false;
  wfAnchorFix();
  const pad=parseInt(document.getElementById('wf-anchor-style').textContent.match(/[0-9]+/)[0],10);
  const top=el.getBoundingClientRect().top+window.scrollY-pad;
  const html=document.documentElement,prev=html.style.scrollBehavior;
  if(!smooth)html.style.scrollBehavior='auto';
  window.scrollTo({top:top,behavior:smooth?'smooth':'auto'});
  if(!smooth)setTimeout(()=>{html.style.scrollBehavior=prev;},50);
  return true;
}
document.addEventListener('click',e=>{
  const a=e.target.closest&&e.target.closest('a[href^="#"]');
  if(!a||a.closest('#wf-sidebar')||a.closest('#wf-toolbar'))return;
  const id=decodeURIComponent(a.getAttribute('href').slice(1));
  if(id&&wfJump(id,true)){e.preventDefault();history.replaceState(null,'','#'+encodeURIComponent(id));}
});
window.addEventListener('load',()=>{
  if(!location.hash)return;
  const id=decodeURIComponent(location.hash.slice(1));
  wfJump(id,false);setTimeout(()=>wfJump(id,false),300);
});
load(()=>{renderPins();renderSidebar();});
wfSetMode('view');
let wfRz=null;
window.addEventListener('resize',()=>{clearTimeout(wfRz);wfRz=setTimeout(()=>{if(openPopId!==null)closePopover();renderPins();},150);});
window.addEventListener('load',()=>renderPins());
// 30秒ごとに他の人のコメントを取得（ポップオーバー表示中はスキップ）
setInterval(()=>{if(SRV&&openPopId===null&&!inputPop)load(()=>{renderPins();renderSidebar();});},30000);
})();

}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',wfkBoot);else wfkBoot();
})();
