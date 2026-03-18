/**
 * ============================================================================
 * Leon Wang Portfolio - Core Script
 * Architecture:
 * 1. i18n Configuration (Bilingual Dictionary)
 * 2. Utility Functions (Typewriter, OS Detection)
 * 3. Core Initialization (DOM Content Loaded)
 * - Theme Management
 * - Language Toggle
 * - Scroll & Navigation
 * - Project Filters
 * - Visual Effects (Canvas, Particles, Marquee, Tilt, Cursor)
 * - Intersection Observers (Reveal, Counters, Hacker Text)
 * - Lightbox System
 * ============================================================================
 */

// ==========================================
// 1. 雙語字典 (i18n Configuration)
// ==========================================
const translations = {
  tw: {
    // --- 導覽列與通用 ---
    navCta: "查看我的作品",
    projectBtn: "查看專案詳情 &rarr;",
    devStatus: "專案開發中",

    // --- Hero 區塊 ---
    heroName: "王岦恩",
    heroRole: "15歲工程師 × 直播管理員",
    heroDesc: "「你們負責開心的開直播、看直播，剩下的麻煩事交給我。」<br>目前就讀五專一年級。不只鑽研 C/C++ 與全端開發，我更在乎螢幕另一端的使用者體驗。",
    codeEdu: "\"縝密思維\"",
    codePers: "\"脾氣很好，說到做到\"",

    // --- 專業與角色 ---
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

    // --- 我的性格 ---
    philosophyTitle: "我的性格",
    phil1: "cat about_me.txt",
    philDesc1: "我的MBTI是ISTP，我能夠快速處理 Bug 和黑粉。不論是寫程式還是管理直播，我都致力於打造最高品質的使用者體驗。",

    // --- 專案區塊 ---
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

    // --- 實用工具 ---
    miniTitle: "實用工具與小型專案",
    mini1Title: "直播數據計算機",
    mini1Text: "透過簡單的輸入，快速換算 TikTok 鑽石收益與預估流量。",
    mini2Title: "番茄鐘專注工具",
    mini2Text: "一個簡潔的 PWA 番茄鐘，幫助用戶保持專注。",
    mini3Title: "自定義終端機主題",
    mini3Text: "分享我個人使用的 Mac Terminal / ZSH 高亮配色檔與腳本。",

    // --- 數據與 Footer ---
    proofLabel1: "支援直播帳號",
    proofLabel2: "問題處理執行力",
    proofLabel3: "協助下架侵權帳號",
    collabText: "不論是需要個人網站開發、技術討論，還是直播間需要一個冷靜可靠的管理員，歡迎找我聊聊。",
    footerName: "王岦恩"
  },
  en: {
    // --- Navigation & General ---
    navCta: "View My Work",
    projectBtn: "View Details &rarr;",
    devStatus: "In Development",

    // --- Hero Section ---
    heroName: "Leon Wang",
    heroRole: "15 y/o Developer × Live Ops Manager",
    heroDesc: "\You focus on the joy of streaming; I'll handle the rest.\"<br>Currently a **first-year junior college student** (High School Freshman level). Beyond C/C++ and full-stack development, I prioritize the user experience on the other side of the screen. Solving problems with code, protecting the community vibe with empathy.",
    codeEdu: "\"EE Background\"",
    codePers: "\"Good temper, keeps promises\"",

    // --- Expertise & Roles ---
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

    // --- Philosophy ---
    philosophyTitle: "My Personality",
    phil1: "cat about_me.txt",
    philDesc1: "As an ISTP, I tackle bugs and trolls with precision. Whether I’m coding or managing a stream, I am dedicated to crafting the highest quality user experience.",

    // --- Projects ---
    projectsTitle: "My Projects",
    project1Title: "Lao Wang's Fan Hub",
    project1Text: "A complete interactive portal featuring user login, leaderboards, an AI assistant, and a Q&A database.",
    projectType1: "Dynamic Database Web",
    project2Title: "Deer Fan Portal",
    project2Text: "Personal Q&A info hub and fan ID cards, offering an immersive, app-like experience.",
    projectType2: "Professional Design",
    project3Title: "NPU USR Project",
    project3Text: "Hudong Village USR initiative. A large-scale informational site combining local data, interviews, and visual displays.",
    projectType3: "Info Architecture / Dev",

    // --- Mini Projects ---
    miniTitle: "Utilities & Mini Projects",
    mini1Title: "Stream Data Calculator",
    mini1Text: "Quickly convert TikTok diamonds and estimate traffic with simple inputs.",
    mini2Title: "Pomodoro Focus Clock",
    mini2Text: "A clean PWA Pomodoro timer to help users stay focused.",
    mini3Title: "Custom Terminal Theme",
    mini3Text: "Sharing my personal Mac Terminal / ZSH highlight color schemes and scripts.",

    // --- Metrics & Footer ---
    proofLabel1: "Supported Accounts",
    proofLabel2: "Issue Resolution Rate",
    proofLabel3: "Copyright Takedowns",
    collabText: "Whether you need personal website development, technical discussions, or a calm and reliable moderator for your stream, feel free to reach out.",
    footerName: "Leon Wang"
  }
};

// ==========================================
// 2. 實用工具函式 (Utility Functions)
// ==========================================
let typeTimeout;
let currentLang = "tw"; // 預設語言

/**
 * 打字機特效
 * @param {HTMLElement} el - 目標元素
 * @param {string} text - 要打出的文字
 * @param {number} speed - 打字速度(毫秒)
 */
function typeWriterEffect(el, text, speed = 80) {
  if (!el) return;
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

/**
 * 取得當前 CSS 變數的值 (用於 Canvas 同步主題顏色)
 */
function getCSSVariable(variableName) {
  return getComputedStyle(document.body).getPropertyValue(variableName).trim();
}

// ==========================================
// 3. 核心初始化邏輯
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  
  // --- A. OS 偵測 (針對不同系統優化滾動條) ---
  const ua = navigator.userAgent;
  if (/Mac OS X/.test(ua) && !/iPhone|iPad|iPod/.test(ua)) document.body.classList.add('os-mac');
  else if (/Windows/.test(ua)) document.body.classList.add('os-windows');
  else if (/iPhone|iPad|iPod/.test(ua)) document.body.classList.add('os-ios');
  else if (/Android/.test(ua)) document.body.classList.add('os-android');

  // 初始化載入狀態
  document.body.classList.add('loaded'); 

  // --- B. 主題切換 (Theme Toggle) ---
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = themeToggle?.querySelector("i");
  
  // 檢查本地儲存的主題偏好
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
    themeIcon?.classList.replace("fa-moon", "fa-sun");
  }

  themeToggle?.addEventListener("click", () => {
    // 加入微互動：縮放彈跳感
    themeToggle.style.transform = "scale(0.8)";
    
    setTimeout(() => {
      document.body.classList.toggle("light-theme");
      const isLight = document.body.classList.contains("light-theme");
      
      if (isLight) {
        themeIcon?.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "light");
      } else {
        themeIcon?.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "dark");
      }
      
      // 恢復縮放
      themeToggle.style.transform = ""; 
    }, 100); // 配合 CSS transition
  });

  // --- C. 雙語系統切換 (i18n Toggle) ---
  const langToggle = document.getElementById("langToggle");
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function applyTranslations(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === "tw" ? "zh-Hant" : "en";
    
    // 遍歷所有帶有 data-i18n 屬性的元素並替換文字
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        // Hero 區塊的職業文字保留打字機特效
        if (el.id === 'hero-typewriter') {
          typeWriterEffect(el, translations[lang][key], 50);
        } else {
          el.innerHTML = translations[lang][key]; 
        }
      }
    });
    
    // 切換按鈕文字顯示 (如果現在是TW，按鈕顯示EN)
    if (langToggle) langToggle.textContent = lang === "tw" ? "EN" : "TW";
  }

  langToggle?.addEventListener("click", () => {
    applyTranslations(currentLang === "tw" ? "en" : "tw");
  });
  
  // 初始執行一次翻譯綁定
  applyTranslations(currentLang);

  // --- D. 滾動進度條與 Back To Top ---
  const progressPath = document.querySelector('.progress-circle path');
  if (progressPath) {
    const pathLength = progressPath.getTotalLength();
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    
    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      
      // 右下角圓環進度
      progressPath.style.strokeDashoffset = pathLength - (scroll * pathLength / height);
      // 頂部橫向進度
      const topProgressBar = document.getElementById('top-progress-bar');
      if(topProgressBar) topProgressBar.style.width = (scroll / height * 100) + '%';
      
      // 顯示/隱藏返回頂部按鈕
      const backToTopBtn = document.getElementById('backToTop');
      if (backToTopBtn) {
        if (scroll > 200) backToTopBtn.classList.add('active-progress');
        else backToTopBtn.classList.remove('active-progress');
      }
    }, { passive: true });
  }

  document.getElementById('backToTop')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

    // ==========================================
    // 專案分類過濾器 (進階版：自動隱藏空白區塊)
    // ==========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const allProjects = document.querySelectorAll('.project-row, .mini-project-card');
    const miniSection = document.getElementById('mini-projects');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // 1. 切換按鈕 active 狀態
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');
        
        // 用來記錄「實用工具區塊」是否還有符合條件的項目
        let hasVisibleMini = false;

        // 2. 執行過濾邏輯
        allProjects.forEach(item => {
          const category = item.getAttribute('data-category');
          const isMatch = (filterValue === 'all' || filterValue === category);

          if (isMatch) {
            // 顯示項目
            item.style.display = item.classList.contains('project-row') ? 'flex' : 'block';
            
            // 如果這個項目屬於「小工具」類別，標記為 true
            if (item.classList.contains('mini-project-card')) {
              hasVisibleMini = true;
            }

            // 動態進場效果
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0) scale(1)';
            }, 10);
          } else {
            // 隱藏項目
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px) scale(0.95)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });

        // 3. 核心修改：判斷是否隱藏整個「實用工具與小型專案」區塊
        if (miniSection) {
          if (hasVisibleMini) {
            // 如果有東西，顯示區塊並恢復透明度
            miniSection.style.display = 'block';
            setTimeout(() => {
              miniSection.style.opacity = '1';
              miniSection.style.pointerEvents = 'auto';
            }, 10);
          } else {
            // 如果沒東西，淡出並徹底隱藏
            miniSection.style.opacity = '0';
            miniSection.style.pointerEvents = 'none';
            setTimeout(() => {
              // 只有在真的沒東西時才設為 none，避免動畫過程閃爍
              if (!hasVisibleMini) miniSection.style.display = 'none';
            }, 300);
          }
        }
      });
    });

  // --- F. 視差滾動效果 (Parallax) ---
  const parallaxItems = document.querySelectorAll(".parallax-item, .parallax-bg");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    parallaxItems.forEach(item => {
      const speed = item.getAttribute("data-speed") || 0.05;
      item.style.transform = `translate3d(0, ${-(scrolled * speed)}px, 0)`;
    });
  }, { passive: true });

  // --- G. 跑馬燈平滑動畫 (Velocity Marquee) ---
  const marqueeTrack = document.getElementById("velocity-marquee");
  if (marqueeTrack) {
    let marqueePos = 0, scrollVelocity = 0, lastY = window.scrollY;
    function animateMarquee() {
      const currY = window.scrollY;
      // 計算滾動速度，加上阻尼效果
      scrollVelocity += ((currY - lastY) * 0.002 - scrollVelocity) * 0.1;
      lastY = currY;
      
      let speed = 0.05 + Math.abs(scrollVelocity);
      if (scrollVelocity < -0.02) speed = -speed; // 反向滾動時跑馬燈也反向
      
      marqueePos -= speed;
      // 跑到 1/3 處時無縫重置
      if (marqueePos <= -33.33) marqueePos = 0;
      if (marqueePos > 0) marqueePos = -33.33;
      
      marqueeTrack.style.transform = `translate3d(${marqueePos}%, 0, 0) skewX(${scrollVelocity * 0.5}deg)`;
      requestAnimationFrame(animateMarquee);
    }
    requestAnimationFrame(animateMarquee);
  }

  // --- H. 卡片光暈跟隨效果 (Glow Cards) ---
  const glowCards = document.querySelectorAll('.glow-card');
  glowCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });

  // --- I. Intersection Observers (進入畫面時觸發動畫) ---
  
  // 1. 代碼區塊打字機
  const codeLines = document.querySelectorAll('.code-line-anim');
  const codeObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      codeLines.forEach((line, index) => { 
        setTimeout(() => { line.classList.add('type'); }, index * 250); 
      });
      codeObserver.disconnect(); // 觸發一次後解除監聽
    }
  }, { threshold: 0.5 });
  const codeTerminal = document.getElementById('code-terminal');
  if (codeTerminal) codeObserver.observe(codeTerminal);

  // 2. Hacker Text (亂碼解密文字)
  class HackerText {
    constructor(el) { 
      this.el = el; 
      this.chars = '!<>-_\\/[]{}—=+*^?#________'; 
      this.update = this.update.bind(this); 
    }
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
      cancelAnimationFrame(this.frameRequest); 
      this.frame = 0; 
      this.update(); 
      return promise;
    }
    update() {
      let output = '', complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) { complete++; output += to; }
        else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) { 
            char = this.chars[Math.floor(Math.random() * this.chars.length)]; 
            this.queue[i].char = char; 
          }
          output += char;
        } else { output += from; }
      }
      this.el.innerText = output;
      if (complete === this.queue.length) this.resolve();
      else { this.frameRequest = requestAnimationFrame(this.update); this.frame++; }
    }
  }

  // 3. 通用 Reveal 動畫與 Hacker Text 觸發
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        
        // 如果該元素是 Hacker Text，則啟動解密動畫
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

  // 4. 數據跳動 Counter
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = "true";
        const target = Number(entry.target.dataset.target);
        const duration = 2000;
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          // 使用 easeOutQuart 緩動函數，讓數字跳動更自然
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

  // --- J. 桌面端專屬 3D 物理傾斜與磁吸按鈕 ---
  if (window.matchMedia("(min-width: 768px)").matches) {
    // 3D Tilt Effect
    document.querySelectorAll(".tilt-effect").forEach(card => {
      let ticking = false;
      card.addEventListener("mousemove", (e) => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
            const rotateX = (((e.clientY - rect.top) - rect.height / 2) / (rect.height / 2)) * -5;
            const rotateY = (((e.clientX - rect.left) - rect.width / 2) / (rect.width / 2)) * 5;
            // 保留可能存在的視差 translate3d
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

    // Magnetic Buttons
    document.querySelectorAll(".magnetic").forEach(el => {
      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        // 將游標位置映射到元素中心點偏移量
        el.style.transform = `translate(${((e.clientX - rect.left) - rect.width / 2) * 0.3}px, ${((e.clientY - rect.top) - rect.height / 2) * 0.3}px)`;
      });
      el.addEventListener("mouseleave", () => {
        el.style.transform = "translate(0px, 0px)";
        el.style.transition = "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.1)";
      });
      el.addEventListener("mouseenter", () => { el.style.transition = "none"; });
    });
  }

  // --- K. 自定義物理彈簧游標 (Custom Cursor) ---
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const cursorDot = document.getElementById("cursor-dot");
    const cursorRing = document.getElementById("cursor-ring");
    
    if (cursorDot && cursorRing) {
      let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
      let ringX = mouseX, ringY = mouseY, ringW = 40, ringH = 40;
      let velX = 0, velY = 0, velW = 0, velH = 0;
      let targetX = mouseX, targetY = mouseY, targetW = 40, targetH = 40, targetRadius = "50%";
      let isHoveringBtn = false;
      
      window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX; mouseY = e.clientY;
        cursorDot.style.left = `${mouseX}px`; 
        cursorDot.style.top = `${mouseY}px`; 
      });

      // 偵測可互動元素
      document.querySelectorAll(".interactive-btn, .btn, .nav-link, .social-btn, .mini-project-card, .mockup-img, .filter-btn").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
          isHoveringBtn = true; 
          const rect = btn.getBoundingClientRect();
          targetX = rect.left + rect.width / 2; 
          targetY = rect.top + rect.height / 2; 
          targetW = rect.width + 12; 
          targetH = rect.height + 12;
          targetRadius = window.getComputedStyle(btn).borderRadius; 
          cursorRing.classList.add("active-btn");
        });
        btn.addEventListener("mouseleave", () => { 
          isHoveringBtn = false; 
          targetW = 40; targetH = 40; 
          targetRadius = "50%"; 
          cursorRing.classList.remove("active-btn"); 
        });
      });

      // 物理運算循環
      function renderCursor() {
        if (!isHoveringBtn) { targetX = mouseX; targetY = mouseY; }
        // 彈簧物理公式
        velX += (targetX - ringX) * 0.15; velX *= 0.7; ringX += velX;
        velY += (targetY - ringY) * 0.15; velY *= 0.7; ringY += velY;
        velW += (targetW - ringW) * 0.15; velW *= 0.7; ringW += velW;
        velH += (targetH - ringH) * 0.15; velH *= 0.7; ringH += velH;
        
        cursorRing.style.width = `${ringW}px`; 
        cursorRing.style.height = `${ringH}px`; 
        cursorRing.style.borderRadius = targetRadius; 
        cursorRing.style.left = `${ringX}px`; 
        cursorRing.style.top = `${ringY}px`; 
        
        requestAnimationFrame(renderCursor);
      }
      
      // 滾動時重置狀態避免游標錯位
      window.addEventListener("scroll", () => { 
        if (isHoveringBtn) { 
          isHoveringBtn = false; targetW = 40; targetH = 40; targetRadius = "50%"; 
          cursorRing.classList.remove("active-btn"); 
        } 
      }, { passive: true });
      
      requestAnimationFrame(renderCursor);
    }
  }

  // --- L. Canvas 粒子連線背景 ---
  const canvas = document.getElementById("bg-canvas");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    let width, height, particles = [];
    const pointer = { x: -1000, y: -1000 };
    
    function initCanvas() {
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = width; canvas.height = height;
      // 根據螢幕大小決定粒子數量
      const particleCount = Math.min(50, Math.floor((width * height) / 25000));
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width, 
        y: Math.random() * height, 
        vx: (Math.random() - 0.5) * 0.5, 
        vy: (Math.random() - 0.5) * 0.5, 
        r: Math.random() * 1.5 + 0.5
      }));
    }
    
    function drawCanvas() {
      ctx.clearRect(0, 0, width, height);
      // 動態抓取 CSS 變數，完美適配深淺色模式
      const pColor = getCSSVariable('--particle-color');
      
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        
        // 邊界反彈與循環
        if (p.x < -50) p.x = width + 50; if (p.x > width + 50) p.x = -50;
        if (p.y < -50) p.y = height + 50; if (p.y > height + 50) p.y = -50;
        
        // 游標排斥物理效果
        if (Math.hypot(pointer.x - p.x, pointer.y - p.y) < 150) { 
          p.x -= (pointer.x - p.x) * 0.02; 
          p.y -= (pointer.y - p.y) * 0.02; 
        }
        
        ctx.beginPath(); 
        ctx.fillStyle = pColor; 
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); 
        ctx.fill();
      }
      
      // 粒子連線
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 150) {
            // 動態計算透明度
            const opacity = ((1 - dist / 150) * 0.15).toFixed(2);
            // 替換顏色字串中的透明度值
            const strokeColor = pColor.replace(/0\.\d+\)/, `${opacity})`).replace(/rgba\((.*?),\s*[\d.]+\)/, `rgba($1, ${opacity})`);
            ctx.beginPath(); 
            ctx.strokeStyle = strokeColor;
            ctx.lineWidth = 1; 
            ctx.moveTo(particles[i].x, particles[i].y); 
            ctx.lineTo(particles[j].x, particles[j].y); 
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(drawCanvas);
    }
    
    window.addEventListener("resize", initCanvas);
    window.addEventListener("mousemove", (e) => { pointer.x = e.clientX; pointer.y = e.clientY; });
    window.addEventListener("mouseleave", () => { pointer.x = -1000; pointer.y = -1000; });
    
    initCanvas(); 
    drawCanvas();
  }

  // --- M. 圖片放大鏡系統 (Lightbox) ---
  const lightboxHTML = `
    <div class="lightbox-overlay" id="lightbox">
      <div class="lightbox-content">
        <button class="lightbox-close" id="lightbox-close" aria-label="關閉圖片"><i class="fa-solid fa-xmark"></i></button>
        <img src="" alt="Zoomed Image" class="lightbox-img" id="lightbox-img">
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', lightboxHTML);

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const zoomableImages = document.querySelectorAll('.mockup-img');

  zoomableImages.forEach(img => {
    img.addEventListener('click', (e) => {
      lightboxImg.src = e.target.src; 
      lightbox.classList.add('active'); 
      document.body.style.overflow = 'hidden'; // 鎖定背景滾動
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove('active'); 
    document.body.style.overflow = ''; // 恢復背景滾動
    setTimeout(() => { lightboxImg.src = ''; }, 400); // 動畫結束後清空圖片
  };

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => {
    // 點擊背景空白處關閉
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    // 支援 ESC 鍵關閉
    if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
  });

});