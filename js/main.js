/**
 * META IT SCHOOL — MAIN JAVASCRIPT
 * Interaktiv funksiyalar, modallar, filtrlar, test va validatsiya
 */

document.addEventListener('DOMContentLoaded', () => {

  // ================= 1. NAVBAR SCROLL & ACTIVE LINK =================
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll spy for active navbar link
    let currentSection = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });

    // Toggle Back to top button visibility
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  // Mobile Hamburger Menu Toggle
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });

    // Close menu when clicked outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('open');
      }
    });
  }

  // ================= 2. COURSES FILTER =================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const courseCards = document.querySelectorAll('.course-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      courseCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ================= 3. COURSE SYLLABUS & DETAILS DATA =================
  const coursesDatabase = {
    'cyber-pentest': {
      category: "Kiberxavfsizlik",
      title: "Kiberxavfsizlik & Ethical Hacking (Penetration Testing)",
      subtitle: "Tizimlarni professional darajada tekshirish, zaifliklarni topish va xavfsiz himoya devorini qurish.",
      duration: "7 oy",
      schedule: "Haftada 3 kun, 2 soatdan",
      price: "1,490,000 so'm / oy",
      syllabus: [
        {
          title: "1-Modul: Kompyuter tarmoqlari va Linux asoslari",
          desc: "TCP/IP, OSI modellari, Wireshark bilan paketlarni tahlil qilish, Kali Linux buyruqlar satri va Bash skripting."
        },
        {
          title: "2-Modul: Axborot to'plash va Razvedka (Reconnaissance)",
          desc: "OSINT usullari, Nmap, Shodan, Google Dorking va maqsadli infratuzilma xaritasini tuzish."
        },
        {
          title: "3-Modul: Veb-Ilovalar Xavfsizligi (OWASP Top 10)",
          desc: "SQL Injection, XSS, CSRF, Burp Suite vositasida veb-saytlar zaifliklarini audit qilish va himoyalash."
        },
        {
          title: "4-Modul: Penetratsion Testlash va Exploitlar",
          desc: "Metasploit Framework, parollarni buzish (Hashcat, John the Ripper), Privilege Escalation (huquqlarni oshirish)."
        },
        {
          title: "5-Modul: Kiber-Mudofaa va SOC Tahlil",
          desc: "Xavfsizlik devorlari (Firewall, IDS/IPS), SIEM tizimlari, loglarni tahlil qilish va insidentlarga javob berish."
        },
        {
          title: "6-Modul: Yakuniy Amaliyot: CTF va Sertifikatlash",
          desc: "Real poligon laboratoriyalarida Capture The Flag musobaqalari, CEH & CompTIA Security+ imtihonlariga to'liq tayyorgarlik."
        }
      ],
      techStack: ["Kali Linux", "Wireshark", "Burp Suite", "Nmap", "Metasploit", "Bash", "Python", "OWASP", "pfSense", "CTF Lab"]
    },
    'fullstack': {
      category: "IT Dasturlash",
      title: "Full Stack Web Dasturlash (Frontend + Backend)",
      subtitle: "0 dan boshlab zamonaviy va keng ko'lamli veb-saytlar hamda veb-ilovalarni yaratish.",
      duration: "8 oy",
      schedule: "Haftada 3 kun, 2 soatdan",
      price: "1,290,000 so'm / oy",
      syllabus: [
        {
          title: "1-Modul: Veb Asoslari (HTML5, CSS3, Responsive Web)",
          desc: "Semantik teglar, Flexbox, CSS Grid, animatsiyalar va zamonaviy moslashuvchan dizayn yaratish."
        },
        {
          title: "2-Modul: Chuqur JavaScript (ES6+)",
          desc: "O'zgaruvchilar, funksiyalar, DOM manipulyatsiyasi, asinxron dasturlash (Promises, Async/Await), API bilan ishlash."
        },
        {
          title: "3-Modul: React.js va Zamonaviy Frontend",
          desc: "Komponentlar, Hooks (useState, useEffect), Redux Toolkit, React Router, Tailwind CSS va optimizatsiya."
        },
        {
          title: "4-Modul: Backend Asoslari (Node.js & Express)",
          desc: "Server arxitekturasi, RESTful API yaratish, Middleware, JSON Web Token (JWT) orqali xavfsiz autentifikatsiya."
        },
        {
          title: "5-Modul: Ma'lumotlar Bazasi (PostgreSQL & Prisma/MongoDB)",
          desc: "Relyatsion va no-relyatsion ma'lumotlar bazalari, SQL so'rovlar, ma'lumotlar modeli va xavfsizlik."
        },
        {
          title: "6-Modul: Real E-Commerce Loyihasi va Deploy",
          desc: "To'liq funksional internet-do'kon loyihasi, to'lov tizimlari (Payme, Click), Git, Docker va bulutga deploy qilish."
        }
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js", "PostgreSQL", "Git", "Tailwind", "Docker"]
    },
    'robotics-eng': {
      category: "Robototexnika & STEM",
      title: "Robototexnika & IoT Muhandisligi",
      subtitle: "Dasturlash, elektronika va mexanika uyg'unligi: o'z qo'llaringiz bilan haqiqiy robotlar yarating.",
      duration: "6 oy",
      schedule: "Haftada 3 kun, 2 soatdan",
      price: "1,190,000 so'm / oy",
      syllabus: [
        {
          title: "1-Modul: Elektronika va Sxematexnika Asoslari",
          desc: "Tok, kuchlanish, rezistorlar, tranzistorlar, kondensatorlar, mikrosxemalar va xavfsiz payvandlash texnikasi."
        },
        {
          title: "2-Modul: Arduino va C/C++ Dasturlash",
          desc: "Arduino platasi arxitekturasi, mikrokontroller uchun kod yozish, kirish/chiqish signallari, raqamli va analog portlar."
        },
        {
          title: "3-Modul: Datchiklar va Ijro Mexanizmlari",
          desc: "Ultrasonik masofa datchiklari, harorat, yorug'lik, harakat sensori, servomotorlar va qadamli dvigatellar."
        },
        {
          title: "4-Modul: 3D Modellashtirish va Chop Etish (3D Printing)",
          desc: "Tinkercad va Fusion 360 da korpuslar loyihalash, 3D printerda ehtiyot qismlarni bosib chiqarish."
        },
        {
          title: "5-Modul: Internet of Things (IoT) & Smart Home",
          desc: "ESP32 va Wi-Fi modullari, mobil ilovalar orqali masofadan boshqaruv, MQTT protokoli va aqlli uy loyihalari."
        },
        {
          title: "6-Modul: Avtonom Robot Qurilishi va Musobaqa",
          desc: "Chiziq bo'ylab yuruvchi, to'siqlardan qochuvchi va Bluetooth orqali boshqariluvchi yakuniy robot himoyasi."
        }
      ],
      techStack: ["Arduino", "ESP32", "C++", "Fusion 360", "3D Printing", "IoT / MQTT", "Proteus", "Bluetooth", "Sensors"]
    },
    'python-ai': {
      category: "IT Dasturlash",
      title: "Python Dasturlash & Sun'iy Intellekt (AI)",
      subtitle: "Zamonaviy backend, telegram botlar va sun'iy intellekt texnologiyalarini amaliyotda o'rganing.",
      duration: "6 oy",
      schedule: "Haftada 3 kun, 2 soatdan",
      price: "1,250,000 so'm / oy",
      syllabus: [
        {
          title: "1-Modul: Python Asoslari va Algoritmlar",
          desc: "Ma'lumotlar turlari, shart operatorlari, sikllar, funksiyalar va Obyektga Yo'naltirilgan Dasturlash (OOP)."
        },
        {
          title: "2-Modul: Mukammal Telegram Botlar (Aiogram)",
          desc: "Asinxron telegram botlar, tugmalar, inline rejimlar, to'lov tizimlari va ma'lumotlar bazasi integratsiyasi."
        },
        {
          title: "3-Modul: Django Veb Freymvorki",
          desc: "MVT arxitekturasi, Django ORM, foydalanuvchilar autentifikatsiyasi, Django REST Framework orqali API."
        },
        {
          title: "4-Modul: Ma'lumotlar Tahlili (Data Science)",
          desc: "NumPy va Pandas kutubxonalari, ma'lumotlarni tozalash, vizualizatsiya (Matplotlib, Seaborn)."
        },
        {
          title: "5-Modul: Sun'iy Intellekt va Machine Learning",
          desc: "Mashinaviy o'rganish algoritmlari, bashorat modellari, Scikit-learn, OpenAI va LLM modellarini ulash."
        }
      ],
      techStack: ["Python 3", "Django", "DRF", "Aiogram", "PostgreSQL", "Pandas", "NumPy", "Scikit-Learn", "OpenAI API"]
    },
    'network-sec': {
      category: "Kiberxavfsizlik",
      title: "Tarmoq Xavfsizligi & SysAdmin (Cisco CCNA)",
      subtitle: "Katta korporativ tarmoqlar va serverlarni xavfsiz boshqarish bo'yicha professional mutaxassis bo'ling.",
      duration: "5 oy",
      schedule: "Haftada 3 kun, 2 soatdan",
      price: "1,350,000 so'm / oy",
      syllabus: [
        {
          title: "1-Modul: Cisco Tarmoq Asoslari va Protokollar",
          desc: "IPv4/IPv6 manzillash, Subnetting, Router va Switch konfiguratsiyalari, VLAN, STP va Trunking."
        },
        {
          title: "2-Modul: Dinamik Marshrutlash (Routing)",
          desc: "OSPF, EIGRP, BGP protokollari, NAT, PAT, DHCP va DNS serverlarini mustaqil sozlash."
        },
        {
          title: "3-Modul: Linux Server Administratsiyasi",
          desc: "Ubuntu Server, foydalanuvchilar huquqlari, SSH kalitlari, Nginx veb-serveri, xavfsizlik loglari."
        },
        {
          title: "4-Modul: Tarmoq Himoyasi va Xavfsizlik Devorlari",
          desc: "pfSense va Cisco ASA xavfsizlik devorlari, Access Control List (ACL), VPN (OpenVPN, WireGuard), SSL/TLS."
        }
      ],
      techStack: ["Cisco Packet Tracer", "GNS3", "Linux Server", "Bash", "pfSense", "Wireshark", "OpenVPN", "SSH"]
    },
    'kids-stem': {
      category: "Bolalar uchun IT",
      title: "Meta Kids: IT & Robototexnika (8-15 yosh)",
      subtitle: "Bolalarda mantiqiy fikrlash, ijodkorlik va kelajak texnologiyalariga qiziqish uyg'otuvchi maxsus dastur.",
      duration: "4 oy",
      schedule: "Haftada 2 kun, 1.5 soatdan",
      price: "790,000 so'm / oy",
      syllabus: [
        {
          title: "1-Modul: Kompyuter Savodxonligi va Kiber-Xavfsizlik",
          desc: "Kompyuter tuzilishi, internetdan xavfsiz foydalanish, shaxsiy ma'lumotlarni asrash, qulay klaviatura ko'nikmalari."
        },
        {
          title: "2-Modul: Scratch Orqali O'yinlar Yaratish",
          desc: "Vizual blokli dasturlash, animatsiyalar, 2D labirint va kvest o'yinlarini bolalar o'zlari ishlab chiqadi."
        },
        {
          title: "3-Modul: Lego Robototexnika & Sxemalar",
          desc: "Lego konstruksiyalarini yig'ish, motorlar va datchiklarni dasturiy buyruqlar orqali harakatga keltirish."
        },
        {
          title: "4-Modul: 3D Modellashtirish Asoslari",
          desc: "Tinkercad da qahramonlar va robot qismlarini modellashtirish hamda 3D printerda birinchi o'yinchoqni chiqarish."
        }
      ],
      techStack: ["Scratch 3.0", "Lego Mindstorms", "Tinkercad", "Code.org", "Logic Puzzles", "Cyber Safety"]
    },
    'flutter-mobile': {
      category: "IT Dasturlash",
      title: "Mobil Dasturlash (Flutter & Dart)",
      subtitle: "Bitta kod yozib ham Android, ham iOS qurilmalari uchun chiroyli va qulay ilovalar yaratish.",
      duration: "6 oy",
      schedule: "Haftada 3 kun, 2 soatdan",
      price: "1,300,000 so'm / oy",
      syllabus: [
        {
          title: "1-Modul: Dart Dasturlash Tili",
          desc: "Sintaksis, tiplar, to'plamlar, OOP tamoyillari (meroxxo'rlik, polimorfizm), null safety va asinxronlik."
        },
        {
          title: "2-Modul: Flutter UI & Vidjetlar Dunyosi",
          desc: "Stateless va Stateful vidjetlar, moslashuvchan dizayn, animatsiyalar va zamonaviy mobil dizayn."
        },
        {
          title: "3-Modul: Holatni Boshqarish (State Management)",
          desc: "BLoC arxitekturasi, Provider, ma'lumotlar oqimini to'g'ri tashkil qilish va kodni toza saqlash."
        },
        {
          title: "4-Modul: API, Firebase va Lokal Xotira",
          desc: "REST API orqali server bilan bog'lanish, Firebase Auth, Firestore, push-bildirishnomalar, Hive va SQLite."
        },
        {
          title: "5-Modul: Real Loyiha va Do'konlarga Joylash",
          desc: "To'liq mobil ilovani ishlab chiqish, testlash, Play Store va App Store talablari bo'yicha chiqarish."
        }
      ],
      techStack: ["Dart", "Flutter SDK", "BLoC", "Firebase", "REST API", "Android Studio", "Git", "Google Play Console"]
    },
    'stem-master': {
      category: "Robototexnika & STEM",
      title: "STEM Robototexnika & Dronlar",
      subtitle: "Olimpiada darajasidagi murakkab robotlar va kvadrokopterlar yasash laboratoriyasi.",
      duration: "5 oy",
      schedule: "Haftada 3 kun, 2 soatdan",
      price: "950,000 so'm / oy",
      syllabus: [
        {
          title: "1-Modul: Mukammal Sxematexnika va Algoritmlar",
          desc: "Murakkab datchiklar bilan ishlash, PID regulyatorlar, chiziqda yuruvchi eng tezkor robot algoritmlari."
        },
        {
          title: "2-Modul: Mexanik Uzatmalar va Konstruksiya",
          desc: "Reduktorlar, tishli g'ildiraklar, korpus mustahkamligi va muhandislik hisob-kitoblari."
        },
        {
          title: "3-Modul: Dronlar (Kvadrokopterlar) Tuzilishi",
          desc: "Brushless motorlar, parraklar aerodinamikasi, giroskop va akselerometr datchiklari, parvoz nazorati."
        },
        {
          title: "4-Modul: Musobaqalar va Turnirlarga Tayyorgarlik",
          desc: "Respublika va xalqaro robot musobaqalari qoidalari bo'yicha maxsus sinov mashg'ulotlari."
        }
      ],
      techStack: ["Arduino Nano", "PID Controller", "Gyro/Accel", "Brushless Motors", "Flight Controller", "LiPo Tech"]
    }
  };

  // ================= 4. COURSE DETAILS MODAL =================
  const courseDetailModal = document.getElementById('courseDetailModal');
  const viewDetailBtns = document.querySelectorAll('.view-course-detail');
  const modalCourseCategory = document.getElementById('modalCourseCategory');
  const modalCourseTitle = document.getElementById('modalCourseTitle');
  const modalCourseSubtitle = document.getElementById('modalCourseSubtitle');
  const modalDuration = document.getElementById('modalDuration');
  const modalSchedule = document.getElementById('modalSchedule');
  const modalPrice = document.getElementById('modalPrice');
  const modalSyllabusList = document.getElementById('modalSyllabusList');
  const modalTechStack = document.getElementById('modalTechStack');
  const modalEnrollActionBtn = document.getElementById('modalEnrollActionBtn');

  viewDetailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const courseId = btn.getAttribute('data-course-id');
      const courseData = coursesDatabase[courseId];

      if (courseData) {
        modalCourseCategory.textContent = courseData.category;
        modalCourseTitle.textContent = courseData.title;
        modalCourseSubtitle.textContent = courseData.subtitle;
        modalDuration.textContent = courseData.duration;
        modalSchedule.textContent = courseData.schedule;
        modalPrice.textContent = courseData.price;

        // Populate syllabus
        modalSyllabusList.innerHTML = '';
        courseData.syllabus.forEach(mod => {
          const item = document.createElement('div');
          item.className = 'syllabus-item';
          item.innerHTML = `
            <h5>${mod.title}</h5>
            <p>${mod.desc}</p>
          `;
          modalSyllabusList.appendChild(item);
        });

        // Populate tech stack
        modalTechStack.innerHTML = '';
        courseData.techStack.forEach(tech => {
          const pill = document.createElement('span');
          pill.textContent = tech;
          modalTechStack.appendChild(pill);
        });

        // Set action button target
        modalEnrollActionBtn.setAttribute('data-course', courseData.title);

        openModal(courseDetailModal);
      }
    });
  });

  // ================= 5. QUICK ENROLL MODAL & ALL MODAL HANDLERS =================
  const enrollModal = document.getElementById('enrollModal');
  const modalOpenBtns = document.querySelectorAll('.modal-open-btn');
  const modalCloseBtns = document.querySelectorAll('.modal-close-btn, .modal-close-btn-secondary');
  const enrollCourseSelect = document.getElementById('enrollCourse');

  // Open modal handler
  modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetModalId = btn.getAttribute('data-modal');
      const courseToPreselect = btn.getAttribute('data-course');

      // If opening enrollModal from course detail, close detail modal first
      if (courseDetailModal.classList.contains('open') && targetModalId === 'enrollModal') {
        closeModal(courseDetailModal);
      }

      if (targetModalId === 'enrollModal') {
        if (courseToPreselect && enrollCourseSelect) {
          // Check if option exists, otherwise add or match closest
          let matched = false;
          for (let i = 0; i < enrollCourseSelect.options.length; i++) {
            if (enrollCourseSelect.options[i].value.includes(courseToPreselect) || courseToPreselect.includes(enrollCourseSelect.options[i].value)) {
              enrollCourseSelect.selectedIndex = i;
              matched = true;
              break;
            }
          }
          if (!matched) {
            enrollCourseSelect.value = courseToPreselect;
          }
        }
        openModal(enrollModal);
      }
    });
  });

  // Close modals
  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentModal = btn.closest('.modal-backdrop');
      if (parentModal) {
        closeModal(parentModal);
      }
    });
  });

  // Close when clicked on backdrop
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // ESC key to close open modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(modal => {
        closeModal(modal);
      });
    }
  });

  function openModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('open');
    document.body.style.overflow = '';
  }

  // ================= 6. INTERACTIVE QUIZ / COURSE FINDER =================
  const quizContainer = document.getElementById('quizContainer');
  const nextQuizBtns = document.querySelectorAll('.next-quiz-btn');
  const prevQuizBtns = document.querySelectorAll('.prev-quiz-btn');
  const finishQuizBtn = document.getElementById('finishQuizBtn');
  const restartQuizBtn = document.getElementById('restartQuizBtn');
  const quizResult = document.getElementById('quizResult');
  const recommendedTitle = document.getElementById('recommendedTitle');
  const recommendedDesc = document.getElementById('recommendedDesc');
  const quizEnrollBtn = document.getElementById('quizEnrollBtn');
  const openQuizBtn = document.getElementById('openQuizBtn');

  // Trigger from top navbar
  if (openQuizBtn) {
    openQuizBtn.addEventListener('click', () => {
      const quizSection = document.getElementById('quizSection');
      if (quizSection) {
        quizSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Next Step
  nextQuizBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const nextStepNum = btn.getAttribute('data-next');
      document.querySelectorAll('.quiz-step').forEach(step => step.classList.remove('active'));
      const nextStepEl = document.querySelector(`.quiz-step[data-step="${nextStepNum}"]`);
      if (nextStepEl) nextStepEl.classList.add('active');
    });
  });

  // Prev Step
  prevQuizBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const prevStepNum = btn.getAttribute('data-prev');
      document.querySelectorAll('.quiz-step').forEach(step => step.classList.remove('active'));
      const prevStepEl = document.querySelector(`.quiz-step[data-step="${prevStepNum}"]`);
      if (prevStepEl) prevStepEl.classList.add('active');
    });
  });

  // Calculate & Show Result
  if (finishQuizBtn) {
    finishQuizBtn.addEventListener('click', () => {
      const interest = document.querySelector('input[name="interest"]:checked')?.value || 'cyber';
      const level = document.querySelector('input[name="level"]:checked')?.value || 'beginner';
      const goal = document.querySelector('input[name="goal"]:checked')?.value || 'job';

      let recTitle = "Kiberxavfsizlik & Ethical Hacking";
      let recText = "Siz xavfsizlik, tizimlarni himoyalash va xakerlik sirlariga qiziqqaningiz uchun bu soha sizga eng mos keladi. Yuqori maoshli bozor va talab kafolatlangan!";

      if (level === 'school') {
        recTitle = "Meta Kids: IT & Robototexnika";
        recText = "Yosh iqtidorlar uchun mo'ljallangan maxsus o'quv dasturi. Mantiqiy fikrlash, Scratch o'yinlar va birinchi robotlarni yasash orqali IT sari mustahkam qadam qo'yasiz!";
      } else if (interest === 'robotics') {
        recTitle = "Robototexnika & IoT Muhandisligi";
        recText = "Qurilmalar va sensorlar bilan ishlashga qiziqqaningiz uchun Arduino, ESP32 va apparat ta'minoti sizga juda mos keladi. Haqiqiy muhandislik amaliyoti kutmoqda!";
      } else if (interest === 'programming') {
        if (goal === 'freelance') {
          recTitle = "Full Stack Web Dasturlash";
          recText = "Saytlar va veb-platformalar yaratish frilans bozorida eng katta talabga ega yo'nalishdir. React va Node.js orqali xalqaro buyurtmalarni olishingiz mumkin.";
        } else {
          recTitle = "Python Dasturlash & Sun'iy Intellekt (AI)";
          recText = "Sun'iy intellekt va zamonaviy backend algoritmlari kelajakning eng istiqbolli sohasi hisoblanadi. O'rganish tez va imkoniyatlar cheksiz!";
        }
      }

      recommendedTitle.textContent = recTitle;
      recommendedDesc.textContent = recText;
      quizEnrollBtn.setAttribute('data-course', recTitle);

      // Hide steps and show result
      document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
      quizResult.style.display = 'block';
    });
  }

  // Restart Quiz
  if (restartQuizBtn) {
    restartQuizBtn.addEventListener('click', () => {
      quizResult.style.display = 'none';
      const firstStep = document.querySelector('.quiz-step[data-step="1"]');
      if (firstStep) firstStep.classList.add('active');
    });
  }

  // ================= 7. STATS COUNTER ANIMATION =================
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        statNumbers.forEach(num => {
          const target = parseInt(num.getAttribute('data-target'), 10);
          animateCounter(num, target);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  function animateCounter(element, target) {
    let current = 0;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target.toLocaleString('uz-UZ');
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toLocaleString('uz-UZ');
      }
    }, stepTime);
  }

  // ================= 8. FAQ ACCORDION =================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });

  // ================= 9. FORM VALIDATIONS & TOAST NOTIFICATION =================
  const toastNotification = document.getElementById('toastNotification');
  const toastCloseBtn = document.getElementById('toastCloseBtn');
  let toastTimeout;

  function showToast(message, title = "Arizangiz muvaffaqiyatli qabul qilindi!") {
    if (!toastNotification) return;

    const titleEl = toastNotification.querySelector('.toast-title');
    const msgEl = toastNotification.querySelector('.toast-message');

    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.textContent = message;

    toastNotification.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 5000);
  }

  if (toastCloseBtn) {
    toastCloseBtn.addEventListener('click', () => {
      toastNotification.classList.remove('show');
    });
  }

  // Main Lead Form
  const mainLeadForm = document.getElementById('mainLeadForm');
  if (mainLeadForm) {
    mainLeadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const nameInput = document.getElementById('userName');
      const phoneInput = document.getElementById('userPhone');
      const courseSelect = document.getElementById('courseSelect');

      const nameError = document.getElementById('nameError');
      const phoneError = document.getElementById('phoneError');
      const courseError = document.getElementById('courseError');

      // Validate name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
        nameError.textContent = "Iltimos, ismingizni to'liq kiriting (kamida 3 harf).";
        isValid = false;
      } else {
        nameError.textContent = "";
      }

      // Validate phone
      const phoneVal = phoneInput.value.trim().replace(/[^0-9]/g, '');
      if (phoneVal.length < 9) {
        phoneError.textContent = "Iltimos, haqiqiy telefon raqamingizni kiriting.";
        isValid = false;
      } else {
        phoneError.textContent = "";
      }

      // Validate course
      if (!courseSelect.value) {
        courseError.textContent = "Iltimos, sizni qiziqtirgan yo'nalishni tanlang.";
        isValid = false;
      } else {
        courseError.textContent = "";
      }

      if (isValid) {
        const studentName = nameInput.value.trim();
        const selectedCourse = courseSelect.value;

        showToast(
          `Hurmatli ${studentName}, "${selectedCourse}" bo'yicha arizangiz qabul qilindi. Tez orada menejerimiz bog'lanadi!`,
          "Muvaffaqiyatli jo'natildi! 🎉"
        );

        mainLeadForm.reset();
      }
    });
  }

  // Quick Enroll Modal Form
  const quickEnrollForm = document.getElementById('quickEnrollForm');
  if (quickEnrollForm) {
    quickEnrollForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const enrollName = document.getElementById('enrollName');
      const enrollPhone = document.getElementById('enrollPhone');
      const enrollCourse = document.getElementById('enrollCourse');

      const nameError = document.getElementById('enrollNameError');
      const phoneError = document.getElementById('enrollPhoneError');

      if (!enrollName.value.trim() || enrollName.value.trim().length < 3) {
        nameError.textContent = "Iltimos, to'liq ismingizni kiriting.";
        isValid = false;
      } else {
        nameError.textContent = "";
      }

      const phoneVal = enrollPhone.value.trim().replace(/[^0-9]/g, '');
      if (phoneVal.length < 9) {
        phoneError.textContent = "Telefon raqamni to'g'ri kiriting.";
        isValid = false;
      } else {
        phoneError.textContent = "";
      }

      if (isValid) {
        const studentName = enrollName.value.trim();
        const chosenCourse = enrollCourse.value;

        closeModal(enrollModal);
        showToast(
          `Rahmat, ${studentName}! "${chosenCourse}" kursiga yozildingiz. 15 daqiqada siz bilan bog'lanamiz!`,
          "Arizangiz qabul qilindi! 🎉"
        );

        quickEnrollForm.reset();
      }
    });
  }

  // ================= 10. BACK TO TOP BUTTON =================
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Format phone inputs while typing
  const phoneInputs = document.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach(input => {
    input.addEventListener('focus', () => {
      if (!input.value) {
        input.value = '+998 ';
      }
    });
  });

});
