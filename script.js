// ==========================================
// 1. 雙語字典 (Leon Wang - 跨三頁面完整翻譯)
// ==========================================
const translations = {
  tw: {
    // --- 導覽列與通用 ---
    navCta: "探索個人程式專案",
    backToProjects: "返回作品集",
    projectBtn: "查看專案詳情 &rarr;",
    devStatus: "專案開發中",

    // --- Hero 區塊 (index.html) ---
    heroName: "王岦恩",
    heroRole: "15歲工程師 × 直播管理員",
    heroDesc: "「你們負責開心的開直播、看直播，剩下的麻煩事交給我。」<br>目前就讀五專一年級。不只鑽研 C/C++ 與全端開發，我更在乎螢幕另一端的使用者體驗。用程式碼解決問題，用同理心守護社群溫度。",
    codeEdu: "\"五專一年級\"",
    codeEe: "// 電機科思維",
    codePers: "\"脾氣很好，說到做到\"",
    codeMbti: "// 冷靜的實用主義者",

    // --- 專業與角色 (index.html) ---
    workscopeTitle: "專業與角色",
    barDynamic: "全端網頁與 App 開發",
    aboutCard1Text: "具備從底層邏輯到前端介面的開發能力，涵蓋靜態網站、動態後台以及客製化 App。結合電機科的硬體思維，寫出高穩定性的架構。",
    feat1Title: "RWD響應式適配",
    feat1Text: "完美適配手機、平板與桌機各種螢幕尺寸，提供流暢的跨裝置體驗。",
    feat2Title: "SEO搜尋引擎優化",
    feat2Text: "底層代碼結構優化，提升搜尋引擎友善度，讓網站能夠獲得更高自然曝光。",
    barLive: "直播聊天室管理",
    scope1Text: "「遇到黑粉、機器人、刷留言帳號」第一時間禁言處理，維持聊天室品質。",
    scope5Title: "盜片檢舉與精華紀錄",
    scope5Text: "偵測並處理未經授權的搬運影片。同時協助粉絲記錄直播精華照片，保留美好回憶。",
    dataTitle: "社群應援與陪伴",
    dataText: "「每一份心意都值得被看見。」積極按讚、留言粉絲的創作。",

    // --- 我的性格 (index.html) ---
    philosophyTitle: "我的性格",
    phil1: "cat about_me.txt",
    philDesc1: "我的MBTI是ISTP，我能夠快速處理 Bug 和黑粉，冰冷的代碼背後是真實的人群。不論是寫程式還是管理直播，我都致力於打造使用者的體驗。",

    // --- 專案區塊 (index.html) ---
    projectsTitle: "我的專案",
    project1Title: "老王的粉絲網站",
    project1Text: "完整的互動網頁，包含登入、排行榜、AI 助手與Q&A問答資料庫。",
    projectType1: "動態資料庫網頁",
    project2Title: "鹿🦌的粉絲網站",
    project2Text: "個人Q&A資訊站、粉絲認證卡，整體接近 App 化沉浸體驗。",
    projectType2: "專業設計",
    project3Title: "澎湖科技大學 USR 計畫",
    project3Text: "湖東村 USR 專案，結合在地資訊、訪談內容與視覺展示，持續開發與優化中的大型資訊網站。",
    projectType3: "資訊架構 / 開發",

    // --- 實用工具 (index.html) ---
    miniTitle: "實用工具與小型專案",
    mini1Title: "直播數據計算機",
    mini1Text: "透過簡單的輸入，快速換算 TikTok 鑽石收益與預估流量。",
    mini2Title: "番茄鐘專注工具",
    mini2Text: "一個簡潔的 PWA 番茄鐘，幫助我在寫程式與讀書時保持專注。",
    mini3Title: "自定義終端機主題",
    mini3Text: "分享我個人使用的 Mac Terminal / ZSH 高亮配色檔與腳本。",

    // --- 數據與 Footer (index.html) ---
    proofLabel1: "支援直播帳號",
    proofLabel2: "問題處理執行力",
    proofLabel3: "成功協助下架侵權帳號",
    collabText: "不論是需要個人網站開發、技術討論，還是直播間需要一個冷靜可靠的管理員，歡迎找我聊聊。",
    footerName: "王岦恩",

    // ===============================================
    // --- 老王專屬網站 (project-laowang.html) 專用 ---
    // ===============================================
    lwTitle: "老王專屬網站",
    lwHeroDesc: "這是一個打破傳統框架的粉絲管理系統。透過自研的儀表板與後台客服架構，我們將單純的Q&A資料庫升級為具備成長感、互動感與安全感的全方位數位平台。",
    lwCoreTitle: "核心系統架構",
    lwFeat1Title: "正式粉絲認證系統",
    lwFeat1Text: "透過程式碼渲染，建立屬於老王的粉絲獨有的粉絲認證卡。",
    lwFeat2Title: "EXP 成長機制",
    lwFeat2Text: "遊戲化的等級系統。透過互動累積經驗值，視覺化展示粉絲對於網站的活躍程度。",
    lwFeat3Title: "即時動態公告",
    lwFeat3Text: "集中管理直播資訊、活動預告與重要通知，確保粉絲能第一時間獲取最正確的訊息。",
    lwSupportTitle: "後台工程師支援中心",
    lwSupportText: "我們打造了專業的客服對話介面。當系統出現問題或粉絲遇到困難時，能透過加密的對話管道直接與工程師聯絡。並且支援圖片上傳，讓工程師能夠更快速定位錯誤並修正、發佈更新包。",
    lwLogTitle: "專案成長日誌",
    lwChangelog: "> <strong>2026-03-15（v24.1.7）</strong><br>核心：重構客服系統，斷開連線時自動抹除本地快取，落實資安防護。<br>修復：排行榜不再顯示「尚未登入」，解決渲染同步延遲問題。<br>修復：首頁版面結構錯誤，各分頁內容不再互相干擾重疊。<br>優化：官方客服中心即使被工程師結案，依舊可發送新訊息。<br>新增：顯示 Twitch 訂閱者專屬認證徽章。<br>新增：管理員直播照區塊。<br>新增：顯示 Twitch 直播區。",
    backToProjectsBtn: "回到作品集",
    visitLwSiteBtn: "進入老王基地",

    // ===============================================
    // --- 鹿🦌粉絲資訊站 (project-deer.html) 專用 ---
    // ===============================================
    ldTitle: "鹿🦌的粉絲網站",
    ldHeroDesc: "以「手機優先 (Mobile-First)」為核心設計理念，這是一個為鹿🦌量身打造的沉浸式 PWA 網站。將複雜的直播規則、常見問題與粉絲應援內容進行模組化整合，提供媲美原生 App 的流暢體驗。",
    ldCoreTitle: "核心功能設計",
    ldFeat1Title: "動態 Q&A 檢索系統",
    ldFeat1Text: "設計了直覺的搜尋介面，讓粉絲能透過關鍵字快速查詢與主播相關Q&A資訊，大幅降低管理員的重複回答負擔。",
    ldFeat2Title: "數位粉絲認證卡",
    ldFeat2Text: "透過程式碼渲染出專屬粉絲認證卡片，增強社群成員的歸屬感，並提供易於在社群媒體分享的視覺設計。",
    ldFeat3Title: "App 化沉浸導覽",
    ldFeat3Text: "採用底部導覽列設計，符合行動裝置單手操作習慣。並透過漸進式網頁 (PWA) 技術，讓網頁具備離線瀏覽與快速開啟的能力。",
    ldLog1: "> <strong>穩定性優化：</strong> 針對不同手機螢幕解析度進行全面適配，確保 RWD 零跑位。",
    ldLog2: "> <strong>性能優化：</strong> 圖片採用 WebP 格式壓縮，首屏載入時間控制在 1.5s 以內。",
    ldLog3: "> <strong>功能更新：</strong> 新增「精華紀錄」區塊，讓粉絲能夠快速連結到管理員的帳號，查看精華與直播照。",
    visitLdSiteBtn: "進入鹿🦌資訊站"
  },
  en: {
    // --- Navigation & General ---
    navCta: "Explore My Projects",
    backToProjects: "Back to Portfolio",
    projectBtn: "View Details &rarr;",
    devStatus: "In Development",

    // --- Hero Section (index.html) ---
    heroName: "Leon Wang",
    heroRole: "15 y/o Developer × Live Ops Manager",
    heroDesc: "\"You enjoy the stream, I'll handle the rest.\"<br>Currently a college freshman. Beyond C/C++ and full-stack development, I care deeply about the user experience on the other side of the screen. Solving problems with code, protecting the community vibe with empathy.",
    codeEdu: "\"College Freshman\"",
    codeEe: "// EE Background",
    codePers: "\"Good temper, keeps promises\"",
    codeMbti: "// Calm Pragmatist",

    // --- Expertise & Roles (index.html) ---
    workscopeTitle: "Skills & Roles",
    barDynamic: "Full-Stack Web & App Dev",
    aboutCard1Text: "Capable of full-cycle development from low-level logic to frontend UI, covering static sites, dynamic dashboards, and custom apps. Combining hardware-oriented thinking to build highly stable architectures.",
    feat1Title: "Responsive Web Design",
    feat1Text: "Flawlessly adapts to mobile, tablet, and desktop screens, providing a seamless cross-device experience.",
    feat2Title: "SEO Optimization",
    feat2Text: "Optimizing underlying code structure to improve search engine friendliness and gain higher organic exposure.",
    barLive: "Live Chat Moderation",
    scope1Text: "\"Trolls, bots, and spammers?\" Instantly silenced to maintain the quality and vibe of the live chat.",
    scope5Title: "Takedowns & Highlights",
    scope5Text: "Detecting and reporting unauthorized re-uploads. Helping fans record highlight moments to preserve good memories.",
    dataTitle: "Community Support",
    dataText: "\"Every effort deserves to be seen.\" Actively liking and commenting on fan creations.",

    // --- Philosophy (index.html) ---
    philosophyTitle: "My Personality",
    phil1: "cat about_me.txt",
    philDesc1: "As an ISTP, I handle bugs and trolls with speed and precision. Behind the cold code are real people. Whether coding or managing streams, I am dedicated to crafting the best user experience.",

    // --- Projects (index.html) ---
    projectsTitle: "My Projects",
    project1Title: "Lao Wang's Fan Hub",
    project1Text: "A complete interactive portal featuring user login, leaderboards, an AI assistant, and a Q&A database.",
    projectType1: "Dynamic Database Web",
    project2Title: "Deer🦌 Fan Portal",
    project2Text: "Personal Q&A info hub and fan ID cards, offering an immersive, app-like experience.",
    projectType2: "Professional Design",
    project3Title: "NPU USR Project",
    project3Text: "Hudong Village USR initiative. A large-scale informational site combining local data, interviews, and visual displays, currently under continuous development.",
    projectType3: "Info Architecture / Dev",

    // --- Mini Projects (index.html) ---
    miniTitle: "Utilities & Mini Projects",
    mini1Title: "Stream Data Calculator",
    mini1Text: "Quickly convert TikTok diamonds and estimate traffic with simple inputs.",
    mini2Title: "Pomodoro Focus Clock",
    mini2Text: "A clean PWA Pomodoro timer to help me stay focused while coding and studying.",
    mini3Title: "Custom Terminal Theme",
    mini3Text: "Sharing my personal Mac Terminal / ZSH highlight color schemes and scripts.",

    // --- Metrics & Footer (index.html) ---
    proofLabel1: "Supported Accounts",
    proofLabel2: "Issue Resolution Rate",
    proofLabel3: "Copyright Takedowns",
    collabText: "Whether you need personal website development, technical discussions, or a calm and reliable moderator for your stream, feel free to reach out.",
    footerName: "Leon Wang",

    // ===============================================
    // --- Lao Wang Project (project-laowang.html) ---
    // ===============================================
    lwTitle: "Lao Wang's Fan Hub",
    lwHeroDesc: "This is a fan management system that breaks traditional frameworks. Through a custom dashboard and backend support architecture, we upgraded a simple Q&A database into a comprehensive digital platform with a sense of growth, interaction, and security.",
    lwCoreTitle: "Core System Architecture",
    lwFeat1Title: "Official Fan ID System",
    lwFeat1Text: "Rendering exclusive, customized fan ID cards for Lao Wang's community via code.",
    lwFeat2Title: "EXP Growth Mechanics",
    lwFeat2Text: "A gamified leveling system. Accumulate EXP through interactions, visually showcasing fan engagement on the site.",
    lwFeat3Title: "Real-Time Announcements",
    lwFeat3Text: "Centralized management of stream info, event teasers, and important notices, ensuring fans get accurate news instantly.",
    lwSupportTitle: "Backend Engineer Support Center",
    lwSupportText: "We built a professional customer service chat interface. When issues arise, fans can contact engineers directly via an encrypted channel. Image uploads are supported for faster bug tracking, fixing, and deploying updates.",
    lwLogTitle: "Project Changelog",
    lwChangelog: "> <strong>2026-03-15 (v24.1.7)</strong><br>Core: Refactored support system; auto-clears local cache on disconnect for enhanced security.<br>Fix: Leaderboard no longer shows 'Not Logged In', resolving render sync delays.<br>Fix: Corrected homepage layout structure; tab contents no longer overlap.<br>Opt: Official support center allows new messages even after ticket closure.<br>Add: Display Twitch subscriber exclusive verification badges.<br>Add: Moderator live photo section.<br>Add: Twitch live stream display section.",
    backToProjectsBtn: "Back to Portfolio",
    visitLwSiteBtn: "Enter Lao Wang's Hub",

    // ===============================================
    // --- Deer Project (project-deer.html) ---
    // ===============================================
    ldTitle: "Deer🦌 Fan Portal",
    ldHeroDesc: "Designed with a 'Mobile-First' core philosophy, this is an immersive PWA site tailor-made for Deer🦌. It modularizes complex stream rules, FAQs, and fan support content, delivering a fluid experience rivaling native apps.",
    ldCoreTitle: "Core Feature Design",
    ldFeat1Title: "Dynamic Q&A Search System",
    ldFeat1Text: "Designed an intuitive search interface allowing fans to quickly find streamer-related Q&A via keywords, drastically reducing repetitive answers for moderators.",
    ldFeat2Title: "Digital Fan ID Cards",
    ldFeat2Text: "Rendered exclusive fan ID cards via code, enhancing community belonging and providing highly shareable visual designs for social media.",
    ldFeat3Title: "App-Like Immersive Navigation",
    ldFeat3Text: "Utilizing a bottom navigation bar tailored for one-handed mobile use. Powered by Progressive Web App (PWA) tech, enabling offline browsing and instant loading.",
    ldLog1: "> <strong>Stability Opt:</strong> Fully adapted to various mobile screen resolutions, ensuring zero layout shifts in RWD.",
    ldLog2: "> <strong>Performance Opt:</strong> Compressed images using WebP format, keeping first-paint load time under 1.5s.",
    ldLog3: "> <strong>Feature Update:</strong> Added 'Highlights Record' section, allowing fans to quickly link to moderator accounts to view stream highlights and photos.",
    visitLdSiteBtn: "Enter Deer🦌 Portal"
  }
};

let typeTimeout;
function typeWriterEffect(el, text, speed = 80) {
  el.innerHTML = '';
  let i = 0;
  clearTimeout(typeTimeout);
  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      typeTimeout = setTimeout(type, speed);
    }
  }
  type();
}

let currentLang = "tw";

document.addEventListener("DOMContentLoaded", () => {
  // OS 偵測
  const ua = navigator.userAgent;
  if (/Mac OS X/.test(ua) && !/iPhone|iPad|iPod/.test(ua)) document.body.classList.add('os-mac');
  else if (/Windows/.test(ua)) document.body.classList.add('os-windows');
  else if (/iPhone|iPad|iPod/.test(ua)) document.body.classList.add('os-ios');
  else if (/Android/.test(ua)) document.body.classList.add('os-android');

  // 移除動畫邏輯：直接啟動
  document.body.classList.add('loaded'); 
  const heroRoleEl = document.getElementById('hero-typewriter');
  if (heroRoleEl) {
    typeWriterEffect(heroRoleEl, translations[currentLang]['heroRole'], 80);
  }

  // 主題切換
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle?.querySelector("i");
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
    themeIcon?.classList.replace("fa-moon", "fa-sun");
  }
  // 在 themeToggle 的 click 事件中
themeToggle?.addEventListener("click", () => {
    // 先讓按鈕彈一下
    themeToggle.style.transform = "scale(0.8)";
    
    setTimeout(() => {
        document.body.classList.toggle("light-theme");
        if (document.body.classList.contains("light-theme")) {
            themeIcon?.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "light");
        } else {
            themeIcon?.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "dark");
        }
        themeToggle.style.transform = ""; // 恢復縮放
    }, 100);
});

  // 進度條與翻譯
  const progressPath = document.querySelector('.progress-circle path');
  const pathLength = progressPath.getTotalLength();
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    progressPath.style.strokeDashoffset = pathLength - (scroll * pathLength / height);
    document.getElementById('top-progress-bar').style.width = (scroll / height * 100) + '%';
    if (scroll > 200) document.getElementById('backToTop').classList.add('active-progress');
    else document.getElementById('backToTop').classList.remove('active-progress');
  }, { passive: true });

  const langToggle = document.getElementById("langToggle");
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  function applyTranslations(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "tw" ? "zh-Hant" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        if (el.id === 'hero-typewriter') {
          typeWriterEffect(el, translations[lang][key], 50);
        } else {
          el.innerHTML = translations[lang][key]; 
        }
      }
    });
    if (langToggle) langToggle.textContent = lang === "tw" ? "EN" : "TW";
  }
  langToggle?.addEventListener("click", () => applyTranslations(currentLang === "tw" ? "en" : "tw"));
  applyTranslations(currentLang);

  // 視差
  const parallaxItems = document.querySelectorAll(".parallax-item, .parallax-bg");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    parallaxItems.forEach(item => {
      const speed = item.getAttribute("data-speed") || 0.05;
      item.style.transform = `translate3d(0, ${-(scrolled * speed)}px, 0)`;
    });
  }, { passive: true });

  // 極慢跑馬燈
  const marqueeTrack = document.getElementById("velocity-marquee");
  let marqueePos = 0, scrollVelocity = 0, lastY = window.scrollY;
  function animateMarquee() {
    if (!marqueeTrack) return;
    const currY = window.scrollY;
    scrollVelocity += ((currY - lastY) * 0.002 - scrollVelocity) * 0.1;
    lastY = currY;
    let speed = 0.05 + Math.abs(scrollVelocity);
    if (scrollVelocity < -0.02) speed = -speed;
    marqueePos -= speed;
    if (marqueePos <= -33.33) marqueePos = 0;
    if (marqueePos > 0) marqueePos = -33.33;
    marqueeTrack.style.transform = `translate3d(${marqueePos}%, 0, 0) skewX(${scrollVelocity * 0.5}deg)`;
    requestAnimationFrame(animateMarquee);
  }
  requestAnimationFrame(animateMarquee);

  // 光暈跟隨
  const glowCards = document.querySelectorAll('.glow-card');
  glowCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });

  // 代碼區塊打字機
  const codeLines = document.querySelectorAll('.code-line-anim');
  const codeObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      codeLines.forEach((line, index) => { setTimeout(() => { line.classList.add('type'); }, index * 250); });
      codeObserver.disconnect();
    }
  }, { threshold: 0.5 });
  if (document.getElementById('code-terminal')) codeObserver.observe(document.getElementById('code-terminal'));

  // Hacker Text & Reveal
  class HackerText {
    constructor(el) { this.el = el; this.chars = '!<>-_\\/[]{}—=+*^?#________'; this.update = this.update.bind(this); }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => this.resolve = resolve);
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '', to = newText[i] || '';
        const start = Math.floor(Math.random() * 40), end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest); this.frame = 0; this.update(); return promise;
    }
    update() {
      let output = '', complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) { complete++; output += to; }
        else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) { char = this.chars[Math.floor(Math.random() * this.chars.length)]; this.queue[i].char = char; }
          output += char;
        } else { output += from; }
      }
      this.el.innerText = output;
      if (complete === this.queue.length) this.resolve();
      else { this.frameRequest = requestAnimationFrame(this.update); this.frame++; }
    }
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        if (entry.target.classList.contains('hacker-text') && !entry.target.dataset.scrambled) {
          const fx = new HackerText(entry.target);
          fx.setText(entry.target.getAttribute('data-original') || entry.target.innerText);
          entry.target.dataset.scrambled = "true";
        }
        revealObserver.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.05, rootMargin: "0px 0px -50px 0px" });
  document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right, .scale-in, .mask-reveal-title, .hacker-text").forEach(el => revealObserver.observe(el));

  // Counter
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = "true";
        const target = Number(entry.target.dataset.target);
        const duration = 2000, startTime = performance.now();
        function updateCounter(currentTime) {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          entry.target.textContent = Math.floor(target * (1 - Math.pow(1 - progress, 4)));
          if (progress < 1) requestAnimationFrame(updateCounter);
          else entry.target.textContent = target;
        }
        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll(".counter").forEach(counter => counterObserver.observe(counter));

  // 物理游標與 Tilt
  if (window.matchMedia("(min-width: 768px)").matches) {
    document.querySelectorAll(".tilt-effect").forEach(card => {
      let ticking = false;
      card.addEventListener("mousemove", (e) => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
            const rotateX = (((e.clientY - rect.top) - rect.height / 2) / (rect.height / 2)) * -5;
            const rotateY = (((e.clientX - rect.left) - rect.width / 2) / (rect.width / 2)) * 5;
            const parallaxMatch = card.style.transform.match(/translate3d\([^)]+\)/);
            card.style.transform = `${parallaxMatch ? parallaxMatch[0] : ''} perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            ticking = false;
          });
          ticking = true;
        }
      });
      card.addEventListener("mouseleave", () => {
        const parallaxMatch = card.style.transform.match(/translate3d\([^)]+\)/);
        card.style.transform = `${parallaxMatch ? parallaxMatch[0] : ''} perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
      });
    });

    document.querySelectorAll(".magnetic").forEach(el => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        el.style.transform = `translate(${((e.clientX - rect.left) - rect.width / 2) * 0.3}px, ${((e.clientY - rect.top) - rect.height / 2) * 0.3}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "translate(0px, 0px)";
        el.style.transition = "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.1)";
      });
      el.addEventListener("mouseenter", () => { el.style.transition = "none"; });
    });
  }

  // Cursor System
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const cursorDot = document.getElementById("cursor-dot");
    const cursorRing = document.getElementById("cursor-ring");
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2, ringX = mouseX, ringY = mouseY, ringW = 40, ringH = 40;
    let velX = 0, velY = 0, velW = 0, velH = 0, targetX = mouseX, targetY = mouseY, targetW = 40, targetH = 40, targetRadius = "50%", isHoveringBtn = false;
    
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX; mouseY = e.clientY;
      if (cursorDot) { cursorDot.style.left = `${mouseX}px`; cursorDot.style.top = `${mouseY}px`; }
    });

    document.querySelectorAll(".interactive-btn, .btn, .nav-link, .social-btn, .mini-project-card").forEach(btn => {
      btn.addEventListener("mouseenter", () => {
        isHoveringBtn = true; const rect = btn.getBoundingClientRect();
        targetX = rect.left + rect.width / 2; targetY = rect.top + rect.height / 2; targetW = rect.width + 12; targetH = rect.height + 12;
        targetRadius = window.getComputedStyle(btn).borderRadius; cursorRing.classList.add("active-btn");
      });
      btn.addEventListener("mouseleave", () => { isHoveringBtn = false; targetW = 40; targetH = 40; targetRadius = "50%"; cursorRing.classList.remove("active-btn"); });
    });

    function renderCursor() {
      if (!isHoveringBtn) { targetX = mouseX; targetY = mouseY; }
      velX += (targetX - ringX) * 0.15; velX *= 0.7; ringX += velX;
      velY += (targetY - ringY) * 0.15; velY *= 0.7; ringY += velY;
      velW += (targetW - ringW) * 0.15; velW *= 0.7; ringW += velW;
      velH += (targetH - ringH) * 0.15; velH *= 0.7; ringH += velH;
      if (cursorRing) { cursorRing.style.width = `${ringW}px`; cursorRing.style.height = `${ringH}px`; cursorRing.style.borderRadius = targetRadius; cursorRing.style.left = `${ringX}px`; cursorRing.style.top = `${ringY}px`; }
      requestAnimationFrame(renderCursor);
    }
    window.addEventListener("scroll", () => { if (isHoveringBtn) { isHoveringBtn = false; targetW = 40; targetH = 40; targetRadius = "50%"; cursorRing.classList.remove("active-btn"); } }, { passive: true });
    requestAnimationFrame(renderCursor);
  }

  // Canvas 背景
  const canvas = document.getElementById("bg-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let width, height, particles = [];
    const pointer = { x: -1000, y: -1000 };
    function initCanvas() {
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = width; canvas.height = height;
      particles = Array.from({ length: Math.min(50, Math.floor((width * height) / 25000)) }, () => ({
        x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5, r: Math.random() * 1.5 + 0.5
      }));
    }
    function drawCanvas() {
      ctx.clearRect(0, 0, width, height);
      const pColor = getComputedStyle(document.body).getPropertyValue('--particle-color').trim();
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -50) p.x = width + 50; if (p.x > width + 50) p.x = -50;
        if (p.y < -50) p.y = height + 50; if (p.y > height + 50) p.y = -50;
        if (Math.hypot(pointer.x - p.x, pointer.y - p.y) < 150) { p.x -= (pointer.x - p.x) * 0.02; p.y -= (pointer.y - p.y) * 0.02; }
        ctx.beginPath(); ctx.fillStyle = pColor; ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 150) {
            ctx.beginPath(); ctx.strokeStyle = pColor.replace('0.2', ((1 - dist / 150) * 0.15).toFixed(2)).replace('0.4', ((1 - dist / 150) * 0.15).toFixed(2));
            ctx.lineWidth = 1; ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
          }
        }
      }
      requestAnimationFrame(drawCanvas);
    }
    window.addEventListener("resize", initCanvas);
    window.addEventListener("mousemove", (e) => { pointer.x = e.clientX; pointer.y = e.clientY; });
    window.addEventListener("mouseleave", () => { pointer.x = -1000; pointer.y = -1000; });
    initCanvas(); drawCanvas();
  }
  
  document.getElementById('backToTop')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});