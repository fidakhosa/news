/* ─── DATA ─────────────────────────────────────── */
const CATS=[
  {id:'world',       label:'World',         emoji:'🌍',color:'#3B7EF8'},
  {id:'technology',  label:'Technology',    emoji:'💻',color:'#8B5CF6'},
  {id:'business',    label:'Business',      emoji:'📈',color:'#10B981'},
  {id:'sports',      label:'Sports',        emoji:'⚽',color:'#F59E0B'},
  {id:'entertainment',label:'Entertainment',emoji:'🎬',color:'#EC4899'},
  {id:'health',      label:'Health',        emoji:'🏥',color:'#06B6D4'},
  {id:'politics',    label:'Politics',      emoji:'🏛️',color:'#EF4444'},
];
const TICKERS=[
  '🔴 BREAKING: Global AI Summit opens in Singapore with 140 nations represented',
  '📊 Markets: Sensex crosses 95,000 for first time in history today',
  '⚡ SpaceX Starship 12 launch window opens tonight at 22:00 IST',
  '🌊 Pacific typhoon season worst on record — 23 named storms so far',
  '🏆 Champions League Final: Madrid vs City this weekend at Wembley',
  '💊 FDA approves first mRNA cancer vaccine for advanced melanoma',
  '🚀 Mars colonists celebrate 1,000 days on the Red Planet',
  '🌡️ Scientists confirm hottest June ever recorded in 150 years of data',
];
let ARTICLES=[
  {id:1,cat:'technology',title:'OpenAI Unveils AGI Milestone: Systems Now Match Human Reasoning Across All Domains',excerpt:'The breakthrough marks a watershed moment in AI development, raising questions about the future of work, creativity, and human cognition in the digital age.',author:'Priya Sharma',time:'2 hours ago',img:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',readTime:'6 min',likes:2847,breaking:true,status:'published',views:48203},
  {id:2,cat:'world',title:'UN Emergency Summit Convenes as Climate Tipping Points Reached in Three Regions Simultaneously',excerpt:'World leaders gather in Geneva for emergency talks as scientists confirm irreversible climate shifts in the Amazon, Arctic, and Himalayan ecosystems.',author:'Marcus Webb',time:'4 hours ago',img:'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',readTime:'8 min',likes:1923,breaking:true,status:'published',views:31455},
  {id:3,cat:'business',title:'Global Markets Hit Record Highs as Fed Signals End of Rate Hike Cycle for 2026',excerpt:"The S&P 500 surged past 6,200 points as investors reacted to dovish signals from Federal Reserve Chair Jerome Powell's latest press conference.",author:'Sarah Chen',time:'5 hours ago',img:'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',readTime:'5 min',likes:1456,status:'published',views:22910},
  {id:4,cat:'politics',title:"European Parliament Passes Landmark AI Governance Act with Binding Global Enforcement Powers",excerpt:"The historic legislation creates the world's first international AI regulatory body with authority to impose sanctions on non-compliant nations.",author:'Elena Kovacs',time:'6 hours ago',img:'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80',readTime:'7 min',likes:1289,status:'published',views:19034},
  {id:5,cat:'sports',title:"India Clinches World Cup in Stunning Last-Ball Thriller Against Australia at Lord's",excerpt:"A nail-biting final over saw Rohit Sharma hit the winning six, sending billions of fans across the subcontinent into absolute ecstasy.",author:'Vikram Nair',time:'8 hours ago',img:'https://images.unsplash.com/photo-1540747913346-19212a4b423d?w=800&q=80',readTime:'4 min',likes:8932,status:'published',views:128450},
  {id:6,cat:'health',title:'Breakthrough Gene Therapy Reverses Type 1 Diabetes in 94% of Trial Participants',excerpt:'Stanford researchers announce results of a phase-3 trial showing unprecedented success in restoring insulin production in diabetic patients worldwide.',author:'Dr. Anita Patel',time:'10 hours ago',img:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',readTime:'9 min',likes:4201,status:'published',views:67221},
  {id:7,cat:'entertainment',title:'Streaming Wars End: Netflix, Disney+ and Apple TV Announce Historic $380B Merger',excerpt:'The unprecedented consolidation of streaming giants creates a media behemoth that will reshape how the world consumes entertainment content forever.',author:'Jordan Blake',time:'12 hours ago',img:'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',readTime:'6 min',likes:3567,status:'published',views:54839},
  {id:8,cat:'technology',title:'SpaceX Starship Completes First Commercial Lunar Landing, Delivers NASA Crew to Artemis Base',excerpt:"The milestone mission marks humanity's return to the lunar surface after 54 years, with astronauts beginning construction of the first permanent Moon base.",author:'Alex Rivera',time:'14 hours ago',img:'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=800&q=80',readTime:'11 min',likes:6723,status:'published',views:93015},
  {id:9,cat:'world',title:'BRICS Nations Launch New Reserve Currency, Challenging Dollar Dominance in Global Trade',excerpt:'Ten member nations formally adopt the BRICS Bridge currency for bilateral trade settlements, backed by a basket of commodities and gold reserves.',author:'Carlos Mendez',time:'16 hours ago',img:'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=800&q=80',readTime:'7 min',likes:2134,status:'published',views:38120},
  {id:10,cat:'business',title:'Apple Vision Pro 2 Ships with Neural Interface: Control Apps with Thoughts Alone',excerpt:'The next-generation headset includes a non-invasive BCI chip that reads brainwave patterns to enable hands-free, gaze-free app navigation.',author:'Mei Lin',time:'18 hours ago',img:'https://images.unsplash.com/photo-1716804013408-e6c4bff45f17?w=800&q=80',readTime:'5 min',likes:5891,status:'published',views:81247},
  {id:11,cat:'politics',title:'US-China Trade Pact Signed After 18 Months of Negotiations: Tariffs Cut by 60%',excerpt:'The bilateral agreement removes key barriers on semiconductors, EVs, and agricultural goods, signaling a thaw in the decade-long trade cold war.',author:'Rachel Park',time:'20 hours ago',img:'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=800&q=80',readTime:'6 min',likes:1876,status:'draft',views:29443},
  {id:12,cat:'health',title:'WHO Declares End of 5-Year Antimicrobial Resistance Crisis After New Enzyme Treatment Approved',excerpt:'A novel lysine-peptide compound developed by Oxford scientists dissolves biofilm barriers that made resistant bacteria immune to all known antibiotics.',author:'Dr. Samuel Osei',time:'1 day ago',img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',readTime:'8 min',likes:3342,status:'published',views:52660},
];
const SAMPLE_COMMENTS=[
  {id:1,name:'Rahul Verma',initials:'RV',time:'1 hour ago',text:"This is groundbreaking! The implications for the global economy are enormous. Can't wait to see how it unfolds."},
  {id:2,name:'Sarah Mitchell',initials:'SM',time:'2 hours ago',text:'Excellent reporting as always. The depth of analysis here is what sets PulseWire apart from others.'},
  {id:3,name:'Arjun Patel',initials:'AP',time:'3 hours ago',text:'Mixed feelings. Short-term benefits are clear, but we need to think about the long-term consequences more carefully.'},
];

/* ─── STATE ─────────────────────────────────────── */
let dark=true;
let activeCat='all';
let curView='home';
let visibleCount=12;
const PAGE_SIZE=12;
let curArticle=null;
let curUser=null;
let authMode='login';
let likedSet=new Set();
let savedSet=new Set();
let carIdx=0;
let carTimer=null;
let commentsData=[...SAMPLE_COMMENTS];
let adminTab='articles';
const carArticles=ARTICLES.filter(a=>a.breaking||a.id<=4).slice(0,4);

/* ─── HELPERS ────────────────────────────────────── */
function getCat(id){
  return CATS.find(c=>c.id===id)||{label:id,emoji:'📰',color:'#3B7EF8'}}
function fmtN(n){
  return n>=1000?(n/1000).toFixed(1)+'k':n
  
}
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}

function toast(msg,type='info'){
  const t=document.getElementById('toast');
  const dot=t.querySelector('.t-dot');
  document.getElementById('toastMsg').textContent=msg;
  dot.style.background=type==='err'?'#EF4444':type==='ok'?'#10B981':'var(--primary)';
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer=setTimeout(()=>t.classList.remove('show'),3200);
}

/* ─── THEME ──────────────────────────────────────── */
function applyTheme(){
  document.body.classList.toggle('light',!dark);
  document.getElementById('themeBtn').textContent=dark?'🌙':'☀️';
}

/* ─── TICKER ──────────────────────────────────────── */
function buildTicker(){
  const doubled=[...TICKERS,...TICKERS];
  document.getElementById('tickerTrack').innerHTML=
    `<div class="ticker-live"><span class="ticker-dot"></span>LIVE</div>`+
    doubled.map(t=>`<span>${t}</span>`).join(' &nbsp;&nbsp;·&nbsp;&nbsp; ');
}

/* ─── NAV ────────────────────────────────────────── */
function buildNav(){
  const p=document.getElementById('navPills');
  p.innerHTML=`<button class="nav-pill${activeCat==='all'?' active':''}" data-cat="all">All News</button>`+
    CATS.map(c=>`<button class="nav-pill${activeCat===c.id?' active':''}" data-cat="${c.id}">${c.emoji} ${c.label}</button>`).join('');
  p.querySelectorAll('.nav-pill').forEach(b=>b.addEventListener('click',()=>setCat(b.dataset.cat)));

  const dc=document.getElementById('drawerCats');
  dc.innerHTML=`<div class="drawer-cat${activeCat==='all'?' active':''}" data-cat="all">📰 All News</div>`+
    CATS.map(c=>`<div class="drawer-cat${activeCat===c.id?' active':''}" data-cat="${c.id}">${c.emoji} ${c.label}</div>`).join('');
  dc.querySelectorAll('.drawer-cat').forEach(el=>el.addEventListener('click',()=>{setCat(el.dataset.cat);closeDrawer()}));

  const fs=document.getElementById('fSections');
  if(fs)fs.innerHTML=CATS.map(c=>`<li>${c.label}</li>`).join('');
}

function setCat(cat){
  activeCat=cat;
  if(curView!=='home')showHome();else renderHome();
  buildNav();
}

/* ─── SCROLL EFFECTS ─────────────────────────────── */
window.addEventListener('scroll',()=>{
  document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>10);
  const btt=document.getElementById('bttBtn');
  btt.classList.toggle('visible',window.scrollY>400);
  if(curView==='article'){
    const doc=document.documentElement;
    const pct=(doc.scrollTop/(doc.scrollHeight-doc.clientHeight))*100;
    document.getElementById('readProgress').style.width=Math.min(pct,100)+'%';
  }else{
    document.getElementById('readProgress').style.width='0%';
  }
});

/* ─── DRAWER ─────────────────────────────────────── */
function openDrawer(){document.getElementById('drawer').classList.add('open');document.getElementById('drawerOverlay').classList.add('open')}
function closeDrawer(){document.getElementById('drawer').classList.remove('open');document.getElementById('drawerOverlay').classList.remove('open')}

/* ─── SEARCH ─────────────────────────────────────── */
function buildSearch(){
  const input=document.getElementById('searchInput');
  const sug=document.getElementById('suggestions');
  input.addEventListener('input',()=>{
    const q=input.value.trim().toLowerCase();
    if(!q){sug.classList.add('hidden');return}
    const res=ARTICLES.filter(a=>a.title.toLowerCase().includes(q)||a.author.toLowerCase().includes(q)).slice(0,5);
    sug.innerHTML=res.length
      ?res.map(a=>`<div class="sug-item" data-id="${a.id}"><span class="sug-icon">🔍</span><div><div style="font-size:.85rem;font-weight:600;color:var(--text)">${esc(a.title)}</div><div class="sug-meta">${getCat(a.cat).label} · ${a.time}</div></div></div>`).join('')
      :`<div class="sug-item" style="justify-content:center;color:var(--text3)">No results for "${esc(q)}"</div>`;
    sug.querySelectorAll('[data-id]').forEach(el=>el.addEventListener('click',()=>{
      openArticle(ARTICLES.find(a=>a.id==el.dataset.id));sug.classList.add('hidden');input.value='';
    }));
    sug.classList.remove('hidden');
  });
  document.addEventListener('click',e=>{if(!document.getElementById('searchWrap').contains(e.target))sug.classList.add('hidden')});
  document.getElementById('searchClear').addEventListener('click',()=>{input.value='';sug.classList.add('hidden')});
}

/* ─── SKELETON CARDS ─────────────────────────────── */
function skelCards(n){
  return Array(n).fill(0).map(()=>`
    <div class="skel-card">
      <div class="skel-img"></div>
      <div class="skel-body">
        <div class="skeleton skel-line w100"></div>
        <div class="skeleton skel-line w80"></div>
        <div class="skeleton skel-line w60"></div>
        <div class="skeleton skel-line w40"></div>
      </div>
    </div>`).join('');
}

/* ─── CAROUSEL ───────────────────────────────────── */
function buildCarousel(){
  const wrap=document.getElementById('carousel');
  if(!wrap)return;
  wrap.innerHTML=carArticles.map((a,i)=>`
    <div class="slide${i===0?' active':''}" data-idx="${i}">
      <img src="${a.img}" alt="" loading="lazy"/>
      <div class="slide-overlay"></div>
      <div class="slide-body" data-id="${a.id}">
        ${a.breaking?'<div class="breaking-badge"><span class="ticker-dot"></span>Breaking</div>':''}
        <div class="slide-title">${esc(a.title)}</div>
        <div class="slide-meta"><span>By ${esc(a.author)}</span><span>·</span><span>⏱ ${a.readTime} read</span><span>·</span><span>${a.time}</span></div>
      </div>
    </div>`).join('')+
    `<div class="c-dots">${carArticles.map((_,i)=>`<div class="c-dot${i===0?' active':''}" data-i="${i}"></div>`).join('')}</div>
    <button class="c-arrow prev">&#8249;</button>
    <button class="c-arrow next">&#8250;</button>`;
  function goTo(i){
    carIdx=(i+carArticles.length)%carArticles.length;
    wrap.querySelectorAll('.slide').forEach((s,j)=>s.classList.toggle('active',j===carIdx));
    wrap.querySelectorAll('.c-dot').forEach((d,j)=>d.classList.toggle('active',j===carIdx));
  }
  function resetTimer(){clearInterval(carTimer);carTimer=setInterval(()=>goTo(carIdx+1),5500)}
  resetTimer();
  wrap.querySelectorAll('.c-dot').forEach(d=>d.addEventListener('click',()=>{goTo(+d.dataset.i);resetTimer()}));
  wrap.querySelector('.prev').addEventListener('click',()=>{goTo(carIdx-1);resetTimer()});
  wrap.querySelector('.next').addEventListener('click',()=>{goTo(carIdx+1);resetTimer()});

  // Touch / swipe support
  let touchStartX=0,touchStartY=0,touchDeltaX=0,isSwiping=false;
  wrap.addEventListener('touchstart',e=>{
    touchStartX=e.touches[0].clientX;
    touchStartY=e.touches[0].clientY;
    touchDeltaX=0;
    isSwiping=true;
    clearInterval(carTimer);
  },{passive:true});
  wrap.addEventListener('touchmove',e=>{
    if(!isSwiping)return;
    touchDeltaX=e.touches[0].clientX-touchStartX;
    const deltaY=e.touches[0].clientY-touchStartY;
    // only treat as horizontal swipe if movement is mostly horizontal
    if(Math.abs(touchDeltaX)>Math.abs(deltaY))e.preventDefault();
  },{passive:false});
  wrap.addEventListener('touchend',()=>{
    if(!isSwiping)return;
    isSwiping=false;
    const threshold=40;
    if(touchDeltaX>threshold)goTo(carIdx-1);
    else if(touchDeltaX<-threshold)goTo(carIdx+1);
    resetTimer();
  });
  wrap.querySelectorAll('.slide-body').forEach(sb=>sb.addEventListener('click',()=>{
    const art=ARTICLES.find(a=>a.id==sb.dataset.id);if(art)openArticle(art);
  }));
}

/* ─── RENDER HOME ────────────────────────────────── */
function renderHome(){
  const filtered=activeCat==='all'?ARTICLES:ARTICLES.filter(a=>a.cat===activeCat);
  const catLabel=activeCat==='all'?'Latest News':`${getCat(activeCat).emoji} ${getCat(activeCat).label}`;
  visibleCount=PAGE_SIZE;
  document.getElementById('main').innerHTML=`
    <section class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div class="carousel" id="carousel"></div>
          <aside class="sidebar">
            <div class="s-card">
              <div class="s-head"><span class="s-head-icon">🔥</span>Trending Now</div>
              ${[...ARTICLES].sort((a,b)=>b.views-a.views).slice(0,5).map((a,i)=>`
                <div class="trend-item" data-id="${a.id}">
                  <div class="trend-num">${String(i+1).padStart(2,'0')}</div>
                  <div>
                    <div class="trend-title">${esc(a.title)}</div>
                    <div class="trend-sub">${getCat(a.cat).label} · ${fmtN(a.views)} views</div>
                  </div>
                </div>`).join('')}
            </div>
          </aside>
        </div>
      </div>
    </section>
    <section class="news-section">
      <div class="container">
        <div class="sec-header">
          <h2 class="sec-title">${catLabel}</h2>
          <div class="sec-line"></div>
        </div>
        <div class="news-grid" id="newsGrid">
          ${filtered.slice(0,visibleCount).map(a=>renderCard(a)).join('')}
        </div>
        <div class="load-more" id="loadMoreWrap"><button class="load-btn" id="loadMoreBtn">Show More</button></div>
      </div>
    </section>`;

  buildCarousel();
  bindCardEvents();
  updateLoadMoreBtn(filtered);
  bindSidebarEvents();
  initReveal();
  const loadBtn=document.getElementById('loadMoreBtn');
  if(loadBtn)loadBtn.addEventListener('click',()=>{
    const grid=document.getElementById('newsGrid');
    const prevCount=visibleCount;
    visibleCount+=PAGE_SIZE;
    const nextBatch=filtered.slice(prevCount,visibleCount);
    grid.insertAdjacentHTML('beforeend',nextBatch.map(a=>renderCard(a)).join(''));
    bindCardEvents();
    initReveal();
    updateLoadMoreBtn(filtered);
  });
}

function updateLoadMoreBtn(filtered){
  const wrap=document.getElementById('loadMoreWrap');
  if(!wrap)return;
  wrap.style.display=visibleCount>=filtered.length?'none':'';
}

function renderCard(a){
  const cat=getCat(a.cat);
  const isLiked=likedSet.has(a.id),isSaved=savedSet.has(a.id);
  return `<article class="art-card reveal" data-id="${a.id}">
    <div class="sweep"></div>
    <div class="card-img">
      <img src="${a.img}" alt="" loading="lazy"/>
      <div class="card-cat" style="background:${cat.color}">${cat.emoji} ${cat.label}</div>
      ${a.breaking?'<div class="card-breaking">Breaking</div>':''}
    </div>
    <div class="card-body">
      <div class="card-title">${esc(a.title)}</div>
      <div class="card-excerpt">${esc(a.excerpt)}</div>
      <div class="card-footer">
        <div>
          <div class="card-author">${esc(a.author)}</div>
          <div class="card-time">⏱ ${a.readTime} · ${a.time}</div>
        </div>
        <div class="card-btns">
          <button class="c-btn${isLiked?' liked':''}" data-action="like" data-id="${a.id}">${isLiked?'❤️':'🤍'} ${fmtN(a.likes+(isLiked?1:0))}</button>
          <button class="c-btn${isSaved?' saved':''}" data-action="save" data-id="${a.id}">${isSaved?'🔖':'🔖'}</button>
          <button class="c-btn" data-action="share" data-id="${a.id}">↗</button>
        </div>
      </div>
    </div>
  </article>`;
}

function bindCardEvents(){
  document.querySelectorAll('.art-card').forEach(card=>{
    card.addEventListener('click',e=>{
      if(e.target.closest('[data-action]'))return;
      openArticle(ARTICLES.find(a=>a.id==card.dataset.id));
    });
  });
  document.querySelectorAll('[data-action]').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.stopPropagation();
      const id=+btn.dataset.id,action=btn.dataset.action;
      if(action==='like'){likedSet.has(id)?likedSet.delete(id):likedSet.add(id);refreshCard(id);}
      else if(action==='save'){
        savedSet.has(id)?(savedSet.delete(id),toast('Removed from bookmarks')):(savedSet.add(id),toast('Saved to bookmarks ✓','ok'));
        refreshCard(id);
      }else if(action==='share'){openShare(ARTICLES.find(a=>a.id===id))}
    });
  });
}

function bindSidebarEvents(){
  document.querySelectorAll('.trend-item[data-id]').forEach(el=>el.addEventListener('click',()=>openArticle(ARTICLES.find(a=>a.id==el.dataset.id))));
  document.querySelectorAll('.trend-item[data-cat]').forEach(el=>el.addEventListener('click',()=>setCat(el.dataset.cat)));
}

function refreshCard(id){
  const grid=document.getElementById('newsGrid');if(!grid)return;
  const art=ARTICLES.find(a=>a.id===id);if(!art)return;
  const old=grid.querySelector(`.art-card[data-id="${id}"]`);if(!old)return;
  const tmp=document.createElement('div');tmp.innerHTML=renderCard(art);
  const fresh=tmp.firstElementChild;old.replaceWith(fresh);
  fresh.addEventListener('click',e=>{if(!e.target.closest('[data-action]'))openArticle(art)});
  fresh.querySelectorAll('[data-action]').forEach(btn=>btn.addEventListener('click',e=>{
    e.stopPropagation();const aid=+btn.dataset.id,act=btn.dataset.action;
    if(act==='like'){likedSet.has(aid)?likedSet.delete(aid):likedSet.add(aid);refreshCard(aid);}
    else if(act==='save'){savedSet.has(aid)?(savedSet.delete(aid),toast('Removed from bookmarks')):(savedSet.add(aid),toast('Saved ✓','ok'));refreshCard(aid);}
    else if(act==='share'){openShare(ARTICLES.find(a=>a.id===aid))}
  }));
}

/* ─── ARTICLE PAGE ───────────────────────────────── */
function openArticle(art){
  if(!art)return;
  curArticle=art;curView='article';
  clearInterval(carTimer);window.scrollTo(0,0);
  commentsData=[...SAMPLE_COMMENTS];
  renderArticle(art);
}

function renderArticle(art){
  const cat=getCat(art.cat);
  const isLiked=likedSet.has(art.id),isSaved=savedSet.has(art.id);
  const related=ARTICLES.filter(a=>a.cat===art.cat&&a.id!==art.id).slice(0,3);
  const tags=['Breaking News',cat.label,'2026',art.author.split(' ')[1],'Analysis'].slice(0,5);
  document.getElementById('main').innerHTML=`
    <div class="art-page">
      <div class="back-btn" id="backBtn">‹ Back to news</div>
      <div class="art-cat-pill" style="background:${cat.color}">${cat.emoji} ${cat.label}</div>
      <h1>${esc(art.title)}</h1>
      <div class="art-meta-bar">
        <span>By <span class="author-name">${esc(art.author)}</span></span>
        <span>·</span>
        <span>⏱ ${art.readTime} read</span>
        <span>·</span>
        <span>${art.time}</span>
        <span class="views-count">👁 ${art.views.toLocaleString()} views</span>
      </div>
      <div class="art-hero"><img src="${art.img}" alt=""/></div>
      <div class="art-body">
        <p>${esc(art.excerpt)} This development has sent shockwaves across the industry, with analysts scrambling to assess its full implications for markets, policy, and everyday life around the world.</p>
        <h2>What Does This Mean?</h2>
        <p>Experts across multiple disciplines are weighing in on the significance of this development. Senior analysts note that the convergence of economic, geopolitical, and technological forces has created conditions rarely seen in modern times.</p>
        <blockquote>"The ripple effects will be felt for years to come, touching every sector from finance to health to geopolitics — this is a defining moment for our generation." — Senior Policy Analyst</blockquote>
        <p>The immediate market reaction has been swift, with major indices showing volatility as investors digest the news. Institutional players are reportedly repositioning their portfolios in anticipation of structural changes to come.</p>
        <h2>Background & Global Context</h2>
        <p>This story has been building for months. PulseWire's investigative team has been tracking the indicators that pointed toward this outcome, and our earlier reporting laid the groundwork for understanding why this moment was perhaps inevitable. Looking ahead, the next 90 days will be critical for both policymakers and markets.</p>
        <p>Multiple governments have already signaled emergency legislative sessions in the coming weeks. Civil society organisations are mobilising responses at an unprecedented pace, with grassroots movements in over 60 countries co-ordinating simultaneous actions.</p>
      </div>
      <div class="art-tags">${tags.map(t=>`<span class="art-tag">#${t.replace(/\s+/g,'')}</span>`).join('')}</div>
      <div class="art-actions">
        <button class="art-btn${isLiked?' liked':''}" id="artLikeBtn">
          ${isLiked?'❤️':'🤍'} <span id="artLikeCount">${fmtN(art.likes+(isLiked?1:0))}</span> Likes
        </button>
        <button class="art-btn${isSaved?' saved':''}" id="artSaveBtn">🔖 <span id="artSaveLabel">${isSaved?'Saved':'Save'}</span></button>
        <button class="art-btn" id="artShareBtn">↗ Share</button>
        <button class="art-btn" style="margin-left:auto" id="artPrintBtn">🖨 Print</button>
      </div>
      ${related.length?`
      <div class="related-section">
        <div class="sec-header"><h2 class="sec-title">Related Stories</h2><div class="sec-line"></div></div>
        <div class="related-grid">
          ${related.map(r=>`
            <div class="rel-card" data-id="${r.id}">
              <div class="rel-img"><img src="${r.img}" alt="" loading="lazy"/></div>
              <div class="rel-body">
                <div class="rel-cat">${getCat(r.cat).emoji} ${getCat(r.cat).label}</div>
                <div class="rel-title">${esc(r.title)}</div>
                <div class="rel-time">${r.time}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>`:''}
      <div class="comments">
        <div class="comments-title">Comments (<span id="commentCount">${commentsData.length}</span>)</div>
        <div class="comment-box">
          <div class="avatar" id="commentAvatar">${curUser?curUser.name.slice(0,2).toUpperCase():'?'}</div>
          <div class="comment-inner">
            <textarea class="comment-ta" id="commentInput"
              placeholder="${curUser?'Share your thoughts…':'Sign in to join the conversation…'}"
              ${curUser?'':'disabled'}></textarea>
            <div class="submit-row"><button class="post-btn" id="postBtn">Post Comment</button></div>
          </div>
        </div>
        <div id="commentsList">${renderComments()}</div>
      </div>
    </div>`;

  document.getElementById('backBtn').addEventListener('click',showHome);
  document.getElementById('artLikeBtn').addEventListener('click',()=>{
    const l=!likedSet.has(art.id);l?likedSet.add(art.id):likedSet.delete(art.id);
    const btn=document.getElementById('artLikeBtn');
    btn.classList.toggle('liked',l);
    btn.innerHTML=`${l?'❤️':'🤍'} <span>${fmtN(art.likes+(l?1:0))}</span> Likes`;
  });
  document.getElementById('artSaveBtn').addEventListener('click',()=>{
    const s=!savedSet.has(art.id);s?savedSet.add(art.id):savedSet.delete(art.id);
    const btn=document.getElementById('artSaveBtn');
    btn.classList.toggle('saved',s);btn.innerHTML=`🔖 ${s?'Saved':'Save'}`;
    toast(s?'Saved to bookmarks ✓':'Removed from bookmarks',s?'ok':'info');
  });
  document.getElementById('artShareBtn').addEventListener('click',()=>openShare(art));
  document.getElementById('artPrintBtn').addEventListener('click',()=>window.print());
  document.querySelectorAll('.rel-card[data-id]').forEach(el=>el.addEventListener('click',()=>openArticle(ARTICLES.find(a=>a.id==el.dataset.id))));
  document.getElementById('postBtn').addEventListener('click',()=>{
    if(!curUser){toast('Sign in to comment ✍️','err');return}
    const ta=document.getElementById('commentInput');
    if(!ta.value.trim())return;
    commentsData.unshift({id:Date.now(),name:curUser.name,initials:curUser.name.slice(0,2).toUpperCase(),time:'Just now',text:ta.value.trim()});
    ta.value='';
    document.getElementById('commentsList').innerHTML=renderComments();
    document.getElementById('commentCount').textContent=commentsData.length;
    toast('Comment posted! ✓','ok');
  });
}

function renderComments(){
  return commentsData.map(c=>`
    <div class="c-item">
      <div class="avatar" style="background:hsl(${c.id%360},55%,42%)">${c.initials}</div>
      <div>
        <div class="c-author">${esc(c.name)}</div>
        <div class="c-time">${c.time}</div>
        <div class="c-text">${esc(c.text)}</div>
      </div>
    </div>`).join('');
}

/* ─── BOOKMARKS PAGE ─────────────────────────────── */
function showBookmarks(){
  curView='bookmarks';
  const saved=ARTICLES.filter(a=>savedSet.has(a.id));
  document.getElementById('main').innerHTML=`
    <div class="bookmarks-page">
      <div class="back-btn" id="backBtn">‹ Back to news</div>
      <div class="sec-header"><h2 class="sec-title">🔖 Saved Articles</h2><div class="sec-line"></div><span class="sec-extra">${saved.length} saved</span></div>
      ${saved.length?`<div class="news-grid">${saved.map(a=>renderCard(a)).join('')}</div>`:`
        <div class="bk-empty">
          <div class="bk-empty-icon">🔖</div>
          <h3>No saved articles yet</h3>
          <p>Tap the bookmark icon on any article to save it here for later reading.</p>
        </div>`}
    </div>`;
  document.getElementById('backBtn').addEventListener('click',showHome);
  if(saved.length){bindCardEvents();initReveal();}
}

/* ─── ADMIN DASHBOARD ────────────────────────────── */
function showAdmin(){
  if(!curUser){toast('Please sign in to access Admin Dashboard','err');return}
  curView='admin';clearInterval(carTimer);window.scrollTo(0,0);
  renderAdmin();
}

function renderAdmin(){
  const totalViews=ARTICLES.reduce((s,a)=>s+a.views,0);
  const totalLikes=ARTICLES.reduce((s,a)=>s+a.likes,0);
  const published=ARTICLES.filter(a=>a.status==='published').length;
  document.getElementById('main').innerHTML=`
    <div class="admin-page">
      <div class="admin-header">
        <div>
          <div class="back-btn" id="backBtn" style="margin-bottom:8px">‹ Back to news</div>
          <h1 class="admin-title">Admin Dashboard</h1>
        </div>
        <div class="admin-badge">⚙️ Editor Mode</div>
      </div>
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon">📰</div>
          <div class="stat-val">${ARTICLES.length}</div>
          <div class="stat-label">Total Articles</div>
          <div class="stat-change up">↑ +3 this week</div>
          <div class="mini-bar">${[3,5,4,7,6,8,9].map((v,i)=>`<span style="height:${v*3}px" class="${i===6?'hi':''}"></span>`).join('')}</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">👁</div>
          <div class="stat-val">${fmtN(totalViews)}</div>
          <div class="stat-label">Total Views</div>
          <div class="stat-change up">↑ +12.4% vs last week</div>
          <div class="mini-bar">${[4,6,5,8,9,7,10].map((v,i)=>`<span style="height:${v*3}px;background:var(--accent)" class="${i===6?'hi':''}"></span>`).join('')}</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">❤️</div>
          <div class="stat-val">${fmtN(totalLikes)}</div>
          <div class="stat-label">Total Likes</div>
          <div class="stat-change up">↑ +8.1% engagement</div>
          <div class="mini-bar">${[5,4,7,6,8,9,8].map((v,i)=>`<span style="height:${v*3}px;background:var(--red)" class="${i===6?'hi':''}"></span>`).join('')}</div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">✅</div>
          <div class="stat-val">${published}</div>
          <div class="stat-label">Published Articles</div>
          <div class="stat-change down">▼ ${ARTICLES.length-published} in draft</div>
          <div class="mini-bar">${[8,7,9,8,10,9,11].map((v,i)=>`<span style="height:${v*2.5}px;background:var(--green)" class="${i===6?'hi':''}"></span>`).join('')}</div>
        </div>
      </div>
      <div class="admin-tabs">
        <div class="admin-tab${adminTab==='articles'?' active':''}" data-tab="articles">📰 Articles</div>
        <div class="admin-tab${adminTab==='categories'?' active':''}" data-tab="categories">🏷️ Categories</div>
        <div class="admin-tab${adminTab==='users'?' active':''}" data-tab="users">👥 Users</div>
      </div>
      <div id="adminPanelWrap"></div>
    </div>`;
  document.getElementById('backBtn').addEventListener('click',showHome);
  document.querySelectorAll('.admin-tab').forEach(tab=>tab.addEventListener('click',()=>{
    adminTab=tab.dataset.tab;renderAdmin();
  }));
  renderAdminPanel();
}

function renderAdminPanel(){
  const wrap=document.getElementById('adminPanelWrap');
  if(!wrap)return;
  if(adminTab==='articles'){
    wrap.innerHTML=`
      <div class="admin-table-wrap">
        <div class="admin-table-head">
          <h3>All Articles (${ARTICLES.length})</h3>
          <button class="add-btn" id="addArticleBtn">+ Add New Article</button>
        </div>
        <div style="overflow-x:auto">
          <table>
            <thead><tr><th>#</th><th>Title</th><th>Category</th><th>Author</th><th>Views</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>
              ${ARTICLES.map(a=>`
                <tr>
                  <td style="color:var(--text3)">${a.id}</td>
                  <td style="max-width:240px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(a.title)}</td>
                  <td><span class="tbl-cat-badge" style="background:${getCat(a.cat).color}">${getCat(a.cat).emoji} ${getCat(a.cat).label}</span></td>
                  <td>${esc(a.author)}</td>
                  <td>${a.views.toLocaleString()}</td>
                  <td><span class="status-badge ${a.status}">${a.status}</span></td>
                  <td><div class="tbl-actions">
                    <button class="tbl-btn edit" data-edit="${a.id}">Edit</button>
                    <button class="tbl-btn del" data-del="${a.id}">Delete</button>
                  </div></td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>`;
    document.getElementById('addArticleBtn').addEventListener('click',()=>openAdminForm('article',null));
    wrap.querySelectorAll('[data-edit]').forEach(btn=>btn.addEventListener('click',()=>{
      const art=ARTICLES.find(a=>a.id==btn.dataset.edit);openAdminForm('article',art);
    }));
    wrap.querySelectorAll('[data-del]').forEach(btn=>btn.addEventListener('click',()=>{
      const id=+btn.dataset.del;
      ARTICLES=ARTICLES.filter(a=>a.id!==id);
      toast('Article deleted','ok');renderAdmin();renderAdminPanel();
    }));
  } else if(adminTab==='categories'){
    wrap.innerHTML=`
      <div class="admin-table-wrap">
        <div class="admin-table-head"><h3>Categories (${CATS.length})</h3><button class="add-btn">+ Add Category</button></div>
        <div style="overflow-x:auto">
          <table>
            <thead><tr><th>Icon</th><th>Name</th><th>Articles</th><th>Actions</th></tr></thead>
            <tbody>
              ${CATS.map(c=>`
                <tr>
                  <td style="font-size:1.3rem">${c.emoji}</td>
                  <td style="font-weight:600">${c.label}</td>
                  <td>${ARTICLES.filter(a=>a.cat===c.id).length}</td>
                  <td><div class="tbl-actions">
                    <button class="tbl-btn edit">Edit</button>
                    <button class="tbl-btn del">Delete</button>
                  </div></td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>`;
  } else {
    const fakeUsers=[
      {name:'Priya Sharma',email:'priya@pulsewire.com',role:'Editor',articles:3,joined:'Jan 2026'},
      {name:'Marcus Webb',email:'marcus@pulsewire.com',role:'Reporter',articles:2,joined:'Feb 2026'},
      {name:'Sarah Chen',email:'sarah@pulsewire.com',role:'Reporter',articles:1,joined:'Mar 2026'},
      ...(curUser?[{name:curUser.name,email:curUser.email,role:'Admin',articles:0,joined:'Today'}]:[]),
    ];
    wrap.innerHTML=`
      <div class="admin-table-wrap">
        <div class="admin-table-head"><h3>Users (${fakeUsers.length})</h3><button class="add-btn">+ Invite User</button></div>
        <div style="overflow-x:auto">
          <table>
            <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Articles</th><th>Joined</th><th>Actions</th></tr></thead>
            <tbody>
              ${fakeUsers.map(u=>`
                <tr>
                  <td style="font-weight:600">${esc(u.name)}</td>
                  <td style="color:var(--text3)">${esc(u.email)}</td>
                  <td><span class="status-badge published">${u.role}</span></td>
                  <td>${u.articles}</td>
                  <td style="color:var(--text3)">${u.joined}</td>
                  <td><div class="tbl-actions">
                    <button class="tbl-btn edit">Edit</button>
                    <button class="tbl-btn del">Remove</button>
                  </div></td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>`;
  }
}

/* ─── ADMIN FORM MODAL ───────────────────────────── */
function openAdminForm(type,existing){
  const overlay=document.getElementById('adminFormOverlay');
  const title=document.getElementById('adminFormTitle');
  const content=document.getElementById('adminFormContent');
  title.textContent=existing?'Edit Article':'Add New Article';
  content.innerHTML=`
    <div class="fm-row">
      <div class="fm-field">
        <label class="fm-label">Title *</label>
        <input class="fm-input" id="fm-title" placeholder="Article headline" value="${existing?esc(existing.title):''}"/>
      </div>
      <div class="fm-field">
        <label class="fm-label">Category *</label>
        <select class="fm-select" id="fm-cat">
          ${CATS.map(c=>`<option value="${c.id}"${existing&&existing.cat===c.id?' selected':''}>${c.label}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="fm-field">
      <label class="fm-label">Excerpt / Summary *</label>
      <textarea class="fm-textarea" id="fm-excerpt" placeholder="Brief summary of the article…">${existing?esc(existing.excerpt):''}</textarea>
    </div>
    <div class="fm-row">
      <div class="fm-field">
        <label class="fm-label">Author Name</label>
        <input class="fm-input" id="fm-author" placeholder="John Doe" value="${existing?esc(existing.author):''}"/>
      </div>
      <div class="fm-field">
        <label class="fm-label">Read Time</label>
        <input class="fm-input" id="fm-readtime" placeholder="5 min" value="${existing?existing.readTime:''}"/>
      </div>
    </div>
    <div class="fm-field">
      <label class="fm-label">Image URL</label>
      <input class="fm-input" id="fm-img" placeholder="https://…" value="${existing?existing.img:''}"/>
    </div>
    <div class="fm-row">
      <div class="fm-field">
        <label class="fm-label">Status</label>
        <select class="fm-select" id="fm-status">
          <option value="published"${!existing||existing.status==='published'?' selected':''}>Published</option>
          <option value="draft"${existing&&existing.status==='draft'?' selected':''}>Draft</option>
        </select>
      </div>
      <div class="fm-field" style="display:flex;align-items:flex-end">
        <label style="display:flex;align-items:center;gap:8px;cursor:pointer;padding:10px 0">
          <input type="checkbox" id="fm-breaking" ${existing&&existing.breaking?'checked':''}/>
          <span class="fm-label" style="margin:0">Mark as Breaking News</span>
        </label>
      </div>
    </div>
    <button class="fm-submit" id="fm-submit">${existing?'Save Changes':'Publish Article'}</button>`;

  overlay.classList.add('open');
  document.getElementById('fm-submit').addEventListener('click',()=>{
    const title=document.getElementById('fm-title').value.trim();
    const cat=document.getElementById('fm-cat').value;
    const excerpt=document.getElementById('fm-excerpt').value.trim();
    const author=document.getElementById('fm-author').value.trim()||'PulseWire Staff';
    const readTime=document.getElementById('fm-readtime').value.trim()||'3 min';
    const img=document.getElementById('fm-img').value.trim()||'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80';
    const status=document.getElementById('fm-status').value;
    const breaking=document.getElementById('fm-breaking').checked;
    if(!title||!excerpt){toast('Title and excerpt are required','err');return}
    if(existing){
      const idx=ARTICLES.findIndex(a=>a.id===existing.id);
      if(idx>-1)ARTICLES[idx]={...ARTICLES[idx],title,cat,excerpt,author,readTime,img,status,breaking};
      toast('Article updated ✓','ok');
    }else{
      ARTICLES.unshift({id:Date.now()%10000,cat,title,excerpt,author,time:'Just now',img,readTime,likes:0,status,breaking,views:0});
      toast('Article published ✓','ok');
    }
    overlay.classList.remove('open');renderAdmin();renderAdminPanel();
  });
}

/* ─── SHARE MODAL ────────────────────────────────── */
function openShare(art){
  const overlay=document.getElementById('shareOverlay');
  document.getElementById('shareLinkInput').value=`https://pulsewire.com/article/${art?art.id:0}`;
  overlay.classList.add('open');
}
function shareToSocial(platform){
  const msgs={twitter:'Shared on Twitter/X! 𝕏','facebook':'Shared on Facebook!','whatsapp':'Opening WhatsApp…','linkedin':'Shared on LinkedIn!'};
  toast(msgs[platform]||'Shared!','ok');
  document.getElementById('shareOverlay').classList.remove('open');
}

/* ─── AUTH MODAL ─────────────────────────────────── */
function openAuth(mode){authMode=mode;updateModal();document.getElementById('authOverlay').classList.add('open')}
function closeAuth(){document.getElementById('authOverlay').classList.remove('open')}
function updateModal(){
  const titles={login:'Welcome back',signup:'Create account',forgot:'Reset password'};
  const subs={login:'Sign in to bookmark, comment & personalise',signup:'Join millions of readers on PulseWire',forgot:"We'll send a reset link to your email"};
  document.getElementById('mTitle').textContent=titles[authMode];
  document.getElementById('mSub').textContent=subs[authMode];
  document.getElementById('nameField').classList.toggle('hidden',authMode!=='signup');
  document.getElementById('passField').classList.toggle('hidden',authMode==='forgot');
  document.getElementById('forgotLink').classList.toggle('hidden',authMode!=='login');
  document.getElementById('mSocials').classList.toggle('hidden',authMode==='forgot');
  document.getElementById('mDivider').classList.toggle('hidden',authMode==='forgot');
  const labels={login:'Sign In',signup:'Create Account',forgot:'Send Reset Link'};
  document.getElementById('mSubmit').textContent=labels[authMode];
  const sw={login:"Don't have an account? <a id='mSwitchLink'>Sign up</a>",signup:"Already have an account? <a id='mSwitchLink'>Sign in</a>",forgot:"<a id='mSwitchLink'>Back to Sign In</a>"};
  document.getElementById('mSwitch').innerHTML=sw[authMode];
  document.getElementById('mSwitchLink')?.addEventListener('click',()=>{
    authMode=authMode==='signup'?'login':authMode==='forgot'?'login':'signup';updateModal();
  });
}
function doAuth(name,email){
  curUser={name:name||email.split('@')[0],email};
  closeAuth();
  toast(`Welcome, ${curUser.name}! 👋`,'ok');
  document.getElementById('signInBtn').classList.add('hidden');
  const wrap=document.getElementById('userMenuWrap');
  wrap.classList.remove('hidden');
  document.getElementById('userAvatarBtn').textContent=curUser.name.slice(0,2).toUpperCase();
  document.getElementById('udName').textContent=curUser.name;
  document.getElementById('udEmail').textContent=curUser.email;
  const av=document.getElementById('commentAvatar');
  if(av)av.textContent=curUser.name.slice(0,2).toUpperCase();
  const ta=document.getElementById('commentInput');
  if(ta){ta.disabled=false;ta.placeholder='Share your thoughts…';}
}
function doLogout(){
  curUser=null;
  document.getElementById('signInBtn').classList.remove('hidden');
  document.getElementById('userMenuWrap').classList.add('hidden');
  document.getElementById('userDropdown').classList.remove('open');
  toast('Signed out successfully');
  showHome();
}

/* ─── REVEAL ON SCROLL ───────────────────────────── */
function initReveal(){
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}});
  },{threshold:0.08});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}

/* ─── SHOW HOME ──────────────────────────────────── */
function showHome(){curView='home';curArticle=null;commentsData=[...SAMPLE_COMMENTS];renderHome();buildNav()}

/* ─── INIT ───────────────────────────────────────── */
function init(){
  applyTheme();buildTicker();buildNav();buildSearch();
  // Newsletter
  document.getElementById('nlBtn').addEventListener('click',()=>{
    const v=document.getElementById('nlInput').value.trim();
    if(!v){toast('Please enter a valid email','err');return}
    toast('🎉 Subscribed! Check your inbox.','ok');document.getElementById('nlInput').value='';
  });
  document.getElementById('nlInput').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('nlBtn').click()});
  // Theme
  document.getElementById('themeBtn').addEventListener('click',()=>{dark=!dark;applyTheme()});
  // Logo
  document.getElementById('logoBtn').addEventListener('click',()=>{activeCat='all';showHome()});
  // Hamburger & drawer
  document.getElementById('hamburger').addEventListener('click',openDrawer);
  document.getElementById('drawerOverlay').addEventListener('click',closeDrawer);
  document.getElementById('drawerClose').addEventListener('click',closeDrawer);
  // Scroll navbar
  window.addEventListener('scroll',()=>document.getElementById('navbar').classList.toggle('scrolled',window.scrollY>10));
  // Back to top
  document.getElementById('bttBtn').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  // Auth modal
  document.getElementById('signInBtn').addEventListener('click',()=>openAuth('login'));
  document.getElementById('modalClose').addEventListener('click',closeAuth);
  document.getElementById('authOverlay').addEventListener('click',e=>{if(e.target===e.currentTarget)closeAuth()});
  document.getElementById('forgotLink').addEventListener('click',()=>{authMode='forgot';updateModal()});
  document.getElementById('gBtn').addEventListener('click',()=>doAuth('Google User','google@user.com'));
  document.getElementById('aBtn').addEventListener('click',()=>doAuth('Apple User','apple@user.com'));
  document.getElementById('mSubmit').addEventListener('click',()=>{
    if(authMode==='forgot'){toast('Reset link sent! Check your email.','ok');closeAuth();return}
    const email=document.getElementById('emailInput').value.trim();
    const name=document.getElementById('nameInput')?.value.trim();
    if(!email){toast('Please enter your email','err');return}
    doAuth(name,email);
  });
  // User menu dropdown
  document.getElementById('userAvatarBtn').addEventListener('click',e=>{
    e.stopPropagation();document.getElementById('userDropdown').classList.toggle('open');
  });
  document.addEventListener('click',()=>document.getElementById('userDropdown').classList.remove('open'));
  document.getElementById('udProfile').addEventListener('click',()=>{toast('Profile page coming soon!');document.getElementById('userDropdown').classList.remove('open')});
  document.getElementById('udBookmarks').addEventListener('click',()=>{document.getElementById('userDropdown').classList.remove('open');showBookmarks()});
  document.getElementById('udAdmin').addEventListener('click',()=>{document.getElementById('userDropdown').classList.remove('open');showAdmin()});
  document.getElementById('udLogout').addEventListener('click',doLogout);
  // Bookmark nav button
  document.getElementById('bookmarkNavBtn').addEventListener('click',()=>showBookmarks());
  // Share modal close
  document.getElementById('shareClose').addEventListener('click',()=>document.getElementById('shareOverlay').classList.remove('open'));
  document.getElementById('shareOverlay').addEventListener('click',e=>{if(e.target===e.currentTarget)document.getElementById('shareOverlay').classList.remove('open')});
  document.getElementById('shareCopyBtn').addEventListener('click',()=>{
    const inp=document.getElementById('shareLinkInput');
    inp.select();document.execCommand('copy');toast('Link copied to clipboard! 🔗','ok');
  });
  // Admin form close
  document.getElementById('adminFormClose').addEventListener('click',()=>document.getElementById('adminFormOverlay').classList.remove('open'));
  document.getElementById('adminFormOverlay').addEventListener('click',e=>{if(e.target===e.currentTarget)document.getElementById('adminFormOverlay').classList.remove('open')});

  renderHome();

  // Reveal the page only after everything above is built & painted once,
  // so there's no flash of an empty/unstyled layout (e.g. footer jumping).
  requestAnimationFrame(()=>requestAnimationFrame(()=>document.body.classList.add('ready')));
}

document.addEventListener('DOMContentLoaded',init);
