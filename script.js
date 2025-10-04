// Mobile Menu Functionality
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const navLinks = document.querySelector('.nav-links');
    const navigation = document.querySelector('.navigation');

    if (menuToggle && menuClose && navLinks && navigation) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.add('active');
            navigation.classList.add('menu-open');
        });

        menuClose.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navigation.classList.remove('menu-open');
        });

        // Close menu when clicking on nav links
        const navLinkItems = document.querySelectorAll('.nav-links a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navigation.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navigation.contains(e.target) && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navigation.classList.remove('menu-open');
            }
        });
    }
}

// Script pour le fonctionnement du slider
document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initMobileMenu();
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;
    let slideInterval;

    // Fonction pour afficher un slide spécifique
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    // Fonction pour passer au slide suivant
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Fonction pour passer au slide précédent
    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Démarrage de l'auto-slide
    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 5000); // Change toutes les 5 secondes
    }

    // Arrêt de l'auto-slide
    function stopSlideShow() {
        clearInterval(slideInterval);
    }

    // Événements
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopSlideShow();
        startSlideShow();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopSlideShow();
        startSlideShow();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            showSlide(slideIndex);
            stopSlideShow();
            startSlideShow();
        });
    });

    // Pause au survol
    const slider = document.querySelector('.slider-banner');
    slider.addEventListener('mouseenter', stopSlideShow);
    slider.addEventListener('mouseleave', startSlideShow);

    // Initialisation
    showSlide(0);
    startSlideShow();
});

// ===== Backend API integration =====
document.addEventListener('DOMContentLoaded', function() {
  // Detect base URL with optional override via <meta name="api-base" content="...">
  let API_BASE = '/api';
  try {
    const metaApi = document.querySelector('meta[name="api-base"]');
    if (metaApi && metaApi.content) {
      API_BASE = metaApi.content;
    } else if (location.protocol === 'file:') {
      API_BASE = 'http://localhost:8000/api';
    }
  } catch(e) {}

  async function fetchJSON(path, options = {}) {
    const resp = await fetch(API_BASE + path, Object.assign({
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    }, options));
    if (!resp.ok) {
      let msg = 'Erreur de chargement';
      try { const data = await resp.json(); msg = data.error || msg; } catch(e) {}
      if (resp.status === 401) {
        // Redirect to login when unauthorized
        if (!window.location.pathname.endsWith('login.html')) {
          window.location.href = 'login.html';
          return Promise.reject(new Error('Non authentifié'));
        }
      }
      throw new Error(msg);
    }
    return resp.json();
  }

  function qs(sel) { return document.querySelector(sel); }
  function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }

  // Require authentication on protected pages
  async function requireAuth() {
    try {
      const me = await fetchJSON('/auth/me');
      // Fill username if placeholder exists
      const userNameEl = document.querySelector('.user-name');
      if (userNameEl && me && me.name) {
        userNameEl.textContent = me.name;
      }
      return me;
    } catch (err) {
      // Redirect handled in fetchJSON for 401
      throw err;
    }
  }

  // Logout handler (intercept links to logout.html)
  qsa('a[href="logout.html"]').forEach(a => {
    a.addEventListener('click', async (e) => {
      e.preventDefault();
      try {
        await fetchJSON('/auth/logout', { method: 'POST' });
      } catch (err) { /* ignore */ }
      window.location.href = 'login.html';
    });
  });

  // Detect protected pages (dashboard layout or pages with .dashboard-container)
  const isProtected = document.querySelector('.dashboard-container');
  if (isProtected) {
    requireAuth().catch(() => {});
  }

  // Login handler (if login form exists)
  const loginForm = qs('#loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = loginForm.querySelector('input[name="email"]').value.trim();
      const password = loginForm.querySelector('input[name="password"]').value;
      try {
        await fetchJSON('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
        window.location.href = 'dashboard.html';
      } catch (err) {
        alert(err.message);
      }
    });
  }

  // Register handler (if register form exists)
  const registerForm = qs('#registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = registerForm.querySelector('input[name="name"]').value.trim();
      const email = registerForm.querySelector('input[name="email"]').value.trim();
      const password = registerForm.querySelector('input[name="password"]').value;
      try {
        await fetchJSON('/auth/register', { method: 'POST', body: JSON.stringify({ name, email, password }) });
        window.location.href = 'dashboard.html';
      } catch (err) {
        alert(err.message);
      }
    });
  }

  // My Courses page
  const myCoursesGrid = document.querySelector('.dashboard-content .courses-grid.extended');
  if (myCoursesGrid) {
    (async function loadMyCourses() {
      try {
        const data = await fetchJSON('/my/courses');
        if (!Array.isArray(data.courses)) return;
        myCoursesGrid.innerHTML = data.courses.map(c => `
          <div class="course-card">
            <div class="course-image">
              <img src="img/course-${(c.title || 'generic').split(' ')[0].toLowerCase()}.jpg" alt="${c.title}">
              <div class="course-badge ${c.status === 'completed' ? 'completed' : (c.status === 'in_progress' ? 'in-progress' : 'not-started')}">
                ${c.status === 'completed' ? 'Terminé' : (c.status === 'in_progress' ? 'En cours' : 'Non commencé')}
              </div>
              <div class="progress-bar"><div class="progress" style="width: ${c.progress_percent || 0}%"></div></div>
              <span class="progress-percent">${c.progress_percent || 0}%</span>
            </div>
            <div class="course-info">
              <h3>${c.title}</h3>
              <p>${c.teacher || ''}</p>
              <div class="course-meta">
                <span><i class="fas fa-chart-line"></i> ${c.score_percent || 0}% score</span>
              </div>
              <div class="course-actions">
                <a href="course-details.html" class="btn ${c.status === 'not_started' ? 'btn-primary' : 'btn-outline'}">${c.status === 'not_started' ? 'Commencer' : 'Continuer'}</a>
              </div>
            </div>
          </div>
        `).join('');
      } catch (err) {
        // optional: display error
      }
    })();
  }

  // Mes Examens page
  const examsList = document.querySelector('.dashboard-content .exams-list');
  if (examsList) {
    (async function loadMyExams() {
      try {
        const data = await fetchJSON('/my/exams');
        if (!Array.isArray(data.exams)) return;
        examsList.innerHTML = data.exams.map(e => {
          const start = new Date(e.start_at);
          const day = String(start.getDate()).padStart(2,'0');
          const month = start.toLocaleString('fr-FR', { month: 'short' });
          return `
            <div class="exam-item">
              <div class="exam-date"><span class="day">${day}</span><span class="month">${month}</span></div>
              <div class="exam-info">
                <h3>${e.title}</h3>
                <p>Module: ${e.course_title || ''}</p>
                <div class="exam-meta">
                  <span><i class="far fa-clock"></i> ${new Date(e.start_at).toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})} - ${new Date(e.end_at).toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})}</span>
                  <span><i class="fas fa-book"></i> ${e.num_questions || 0} questions</span>
                </div>
              </div>
              <div class="exam-actions"><a href="#" class="btn btn-outline">Réviser</a></div>
            </div>`;
        }).join('');
      } catch (err) {}
    })();
  }

  // Messages page
  const messagesList = document.querySelector('.messages-list');
  if (messagesList) {
    (async function loadMessages() {
      try {
        const data = await fetchJSON('/my/messages');
        messagesList.innerHTML = data.messages.map(m => `
          <div class="message-item ${m.is_read ? '' : 'unread'}">
            <div class="message-avatar"><i class="fas fa-user"></i></div>
            <div class="message-info">
              <h3>${m.sender_name || 'Utilisateur'}</h3>
              <p>${m.subject}</p>
              <span class="message-time">${new Date(m.created_at).toLocaleString('fr-FR')}</span>
            </div>
          </div>
        `).join('');
      } catch (err) {}
    })();
  }

  // Notifications page
  const notificationsList = document.querySelector('.notifications-list');
  if (notificationsList) {
    (async function loadNotifications() {
      try {
        const data = await fetchJSON('/my/notifications');
        notificationsList.innerHTML = data.notifications.map(n => `
          <div class="notification-item ${n.is_read ? '' : 'unread'}">
            <div class="notification-icon"><i class="fas fa-bell"></i></div>
            <div class="notification-content">
              <p>${n.content}</p>
              <span class="notification-time">${new Date(n.created_at).toLocaleString('fr-FR')}</span>
            </div>
          </div>
        `).join('');
      } catch (err) {}
    })();
  }

  // My Progression page
  const progressionStatsGrid = document.querySelector('.dashboard-content .stats-grid');
  const progressionCoursesGrid = document.querySelector('.dashboard-content .courses-grid');
  if (progressionStatsGrid && progressionCoursesGrid) {
    (async function loadProgression() {
      try {
        const data = await fetchJSON('/my/progression');
        const s = data.stats || { total_courses:0, completed_courses:0, avg_score:0, avg_progress:0 };
        progressionStatsGrid.innerHTML = `
          <div class="stat-card"><div class="stat-icon"><i class="fas fa-book"></i></div><div class="stat-info"><h3>Cours Suivis</h3><span class="stat-number">${s.total_courses || 0}</span></div></div>
          <div class="stat-card"><div class="stat-icon"><i class="fas fa-check-circle"></i></div><div class="stat-info"><h3>Cours Complétés</h3><span class="stat-number">${s.completed_courses || 0}</span></div></div>
          <div class="stat-card"><div class="stat-icon"><i class="fas fa-chart-line"></i></div><div class="stat-info"><h3>Score Moyen</h3><span class="stat-number">${s.avg_score || 0}%</span></div></div>
          <div class="stat-card"><div class="stat-icon"><i class="fas fa-clock"></i></div><div class="stat-info"><h3>Progression Moyenne</h3><span class="stat-number">${s.avg_progress || 0}%</span></div></div>`;

        progressionCoursesGrid.innerHTML = (data.courses || []).map(c => `
          <div class="course-card">
            <div class="course-image">
              <img src="img/course-${(c.title || 'generic').split(' ')[0].toLowerCase()}.jpg" alt="${c.title}">
              <div class="progress-bar"><div class="progress" style="width: ${c.progress_percent || 0}%"></div></div>
              <span class="progress-percent">${c.progress_percent || 0}%</span>
            </div>
            <div class="course-info">
              <h3>${c.title}</h3>
              <p>${c.teacher || ''}</p>
              <div class="course-meta"><span><i class="fas fa-chart-line"></i> ${c.score_percent || 0}% score</span></div>
              <a href="course-details.html" class="btn btn-primary">${(c.status === 'not_started') ? 'Commencer' : 'Continuer'}</a>
            </div>
          </div>
        `).join('');
      } catch (err) {}
    })();
  }

  // Dashboard page widgets (detect via welcome banner)
  const isDashboard = document.querySelector('.welcome-banner');
  if (isDashboard) {
    const dashStatsGrid = document.querySelector('.stats-grid');
    const dashCoursesGrid = document.querySelector('.dashboard-section .courses-grid');
    const dashExamsList = document.querySelector('.dashboard-section .exams-list');
    (async function loadDashboard() {
      try {
        // Stats
        if (dashStatsGrid) {
          const data = await fetchJSON('/my/progression');
          const s = data.stats || { total_courses:0, completed_courses:0, avg_score:0, avg_progress:0 };
          dashStatsGrid.innerHTML = `
            <div class=\"stat-card\"><div class=\"stat-icon\"><i class=\"fas fa-book\"></i></div><div class=\"stat-info\"><h3>Cours Suivis</h3><span class=\"stat-number\">${s.total_courses || 0}</span></div></div>
            <div class=\"stat-card\"><div class=\"stat-icon\"><i class=\"fas fa-check-circle\"></i></div><div class=\"stat-info\"><h3>Cours Complétés</h3><span class=\"stat-number\">${s.completed_courses || 0}</span></div></div>
            <div class=\"stat-card\"><div class=\"stat-icon\"><i class=\"fas fa-chart-bar\"></i></div><div class=\"stat-info\"><h3>Score Moyen</h3><span class=\"stat-number\">${s.avg_score || 0}%</span></div></div>
            <div class=\"stat-card\"><div class=\"stat-icon\"><i class=\"fas fa-clock\"></i></div><div class=\"stat-info\"><h3>Heures Étudiées</h3><span class=\"stat-number\">${s.avg_progress || 0}%</span></div></div>`;
        }

        // Current courses (limit 2)
        if (dashCoursesGrid) {
          const data = await fetchJSON('/my/courses');
          const subset = (data.courses || []).slice(0, 2);
          dashCoursesGrid.innerHTML = subset.map(c => `
            <div class=\"course-card\">
              <div class=\"course-image\">
                <img src=\"img/course-${(c.title || 'generic').split(' ')[0].toLowerCase()}.jpg\" alt=\"${c.title}\"> 
                <div class=\"progress-bar\"><div class=\"progress\" style=\"width: ${c.progress_percent || 0}%\"></div></div>
                <span class=\"progress-percent\">${c.progress_percent || 0}%</span>
              </div>
              <div class=\"course-info\">
                <h3>${c.title}</h3>
                <p>${c.teacher || ''}</p>
                <div class=\"course-meta\"><span><i class=\"far fa-clock\"></i></span><span><i class=\"fas fa-chart-line\"></i> ${c.score_percent || 0}% score</span></div>
                <a href=\"course-details.html\" class=\"btn btn-primary\">${(c.status === 'not_started') ? 'Commencer' : 'Continuer'}</a>
              </div>
            </div>
          `).join('');
        }

        // Upcoming exams (limit 2)
        if (dashExamsList) {
          const data = await fetchJSON('/my/exams');
          const subset = (data.exams || []).slice(0, 2);
          dashExamsList.innerHTML = subset.map(e => {
            const start = new Date(e.start_at);
            const day = String(start.getDate()).padStart(2,'0');
            const month = start.toLocaleString('fr-FR', { month: 'short' });
            return `
              <div class=\"exam-item\">
                <div class=\"exam-date\"><span class=\"day\">${day}</span><span class=\"month\">${month}</span></div>
                <div class=\"exam-info\">
                  <h3>${e.title}</h3>
                  <p>Module: ${e.course_title || ''}</p>
                  <div class=\"exam-meta\">
                    <span><i class=\"far fa-clock\"></i> ${new Date(e.start_at).toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})} - ${new Date(e.end_at).toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})}</span>
                    <span><i class=\"fas fa-book\"></i> ${e.num_questions || 0} questions</span>
                  </div>
                </div>
                <div class=\"exam-actions\"><a href=\"#\" class=\"btn btn-outline\">Réviser</a></div>
              </div>`;
          }).join('');
        }
      } catch (err) {
        // ignore dashboard errors for now
      }
    })();
  }
});

// Back to top button functionality
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
// Slider functionality
document.addEventListener('DOMContentLoaded', function() {
  const slidesContainer = document.querySelector('.slides-container');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const dots = document.querySelectorAll('.dot');
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  
  function updateSlider() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update active dot
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
    
    // Update active slide
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndex);
    });
  }
  
  // Next slide
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  });
  
  // Previous slide
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  });
  
  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
    });
  });
  
  // Auto-slide (optional)
  let slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }, 5000);
  
  // Pause on hover
  slidesContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  slidesContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }, 5000);
  });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    // Toggle menu
    menuToggle.addEventListener('click', function() {
        navLinks.classList.add('active');
        overlay.classList.add('active');
    });

    // Close menu
    menuClose.addEventListener('click', function() {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Close menu when clicking overlay
    overlay.addEventListener('click', function() {
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
});