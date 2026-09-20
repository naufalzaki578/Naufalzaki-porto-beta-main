export const portfolioData = {
  profile: {
    name: "Naufal Zaki Aulia",
    shortName: "Naufal Zaki",
    title: {
      id: "Web Developer & Data Enthusiast",
      en: "Web Developer & Data Enthusiast"
    },
    tagline: {
      id: "Mahasiswa Teknik Informatika dengan fokus pada Web Development, UI/UX Design, dan Data Analysis.",
      en: "Informatics Engineering student specializing in Web Development, UI/UX Design, and Data Analysis."
    },
    bio: {
      id: "Selamat datang di portofolio saya! Saya berspesialisasi dalam Web Development, UI/UX Design, dan Analisis Data, di mana saya menggabungkan kreativitas, presisi, dan antusiasme untuk merancang pengalaman digital yang unik dan berdampak. Berpengalaman membangun web responsif berbasis Laravel & Node.js, merancang antarmuka intuitif, serta pemodelan Machine Learning.",
      en: "Welcome to my portfolio! I specialize in Web Development, UI/UX Design, and Data Analysis, combining creativity, precision, and passion to craft unique and impactful digital experiences. Experienced in building responsive web applications with Laravel & Node.js, crafting intuitive interfaces, and Machine Learning modeling."
    },
    status: {
      id: "Tersedia untuk Pekerjaan & Peluang Kolaborasi",
      en: "Available for Opportunities & Collaborations"
    },
    availability: "Available Now",
    location: "Tegal, Jawa Tengah, Indonesia",
    avatar: "/profile.jpg",
    yearsExperience: "2+ Tahun",
    completedProjects: "8+ Proyek",
    techFocus: "Web & Data Science",
    socials: {
      github: "https://github.com/naufalzaki578",
      linkedin: "https://www.linkedin.com/in/naufal-zaki-4568b4307/",
      email: "naufalzakiaulia717@gmail.com",
      whatsapp: "https://wa.me/6289658012829",
      instagram: "https://instagram.com/naufalzkia",
      youtube: "https://www.youtube.com/@naufalzaki",
      facebook: "https://www.facebook.com/people/AZ-Naufal/pfbid0Es3U6Cfjxw3FdE4Kkh4HmPb9cEhQnCzR8T12Ai3nZFkKA7y8fHe3XPuTq8fRbMibl/"
    }
  },

  education: [
    {
      id: 1,
      institution: "Universitas Pancasakti Tegal",
      degree: {
        id: "Sarjana Teknik Informatika (2021 – 2026)",
        en: "Bachelor of Informatics Engineering (2021 – 2026)"
      },
      description: {
        id: "Fokus pada rekayasa perangkat lunak, pemrograman web, analisis data, dan kecerdasan buatan menggunakan teknologi modern.",
        en: "Focused on software engineering, web programming, data analysis, and artificial intelligence using modern technologies."
      },
      badge: "Degree",
      logoText: "UPS"
    },
    {
      id: 2,
      institution: "SMA NEGERI 2 SLAWI",
      degree: {
        id: "Peminatan IPS (2017 – 2020)",
        en: "Social Sciences (2017 – 2020)"
      },
      description: {
        id: "Pendidikan Menengah Atas dengan aktifitas pengembangan diri dan kepemimpinan.",
        en: "Senior High School with active self-development and leadership activities."
      },
      badge: "High School",
      logoText: "SMAN2"
    }
  ],

  skillsCategories: [
    {
      name: { id: "Web & Frontend", en: "Web & Frontend" },
      skills: [
        { name: "React", level: "Advanced", icon: "react" },
        { name: "HTML5", level: "Expert", icon: "html" },
        { name: "CSS3", level: "Expert", icon: "css" },
        { name: "JavaScript", level: "Advanced", icon: "js" },
        { name: "Tailwind CSS", level: "Expert", icon: "tailwind" },
        { name: "UI/UX & Figma", level: "Advanced", icon: "figma" }
      ]
    },
    {
      name: { id: "Backend & Database", en: "Backend & Database" },
      skills: [
        { name: "PHP", level: "Advanced", icon: "php" },
        { name: "Laravel", level: "Advanced", icon: "laravel" },
        { name: "Node.js & Express", level: "Advanced", icon: "nodejs" },
        { name: "MySQL", level: "Advanced", icon: "database" }
      ]
    },
    {
      name: { id: "Data Science & AI", en: "Data Science & AI" },
      skills: [
        { name: "Python", level: "Advanced", icon: "python" },
        { name: "Machine Learning / NLP", level: "Intermediate", icon: "brain" },
        { name: "Data Analysis & Pandas", level: "Advanced", icon: "database" },
        { name: "AI Prompting", level: "Advanced", icon: "robot" }
      ]
    },
    {
      name: { id: "Perkakas & Praktik", en: "Tools & Methodologies" },
      skills: [
        { name: "VS Code", level: "Expert", icon: "code" },
        { name: "Git & GitHub", level: "Advanced", icon: "git" },
        { name: "Prisma ORM", level: "Intermediate", icon: "layers" },
        { name: "RESTful API Design", level: "Advanced", icon: "network" }
      ]
    }
  ],

  softSkills: [
    { id: "Manajemen Proyek", en: "Project Management" },
    { id: "Pemecahan Masalah", en: "Problem Solving" },
    { id: "Kemampuan Beradaptasi", en: "Adaptability" },
    { id: "Manajemen Waktu", en: "Time Management" },
    { id: "Kerja Sama Tim", en: "Team Work" },
    { id: "Berpikir Kritis", en: "Critical Thinking" }
  ],

  projects: [
    {
      id: 1,
      title: {
        id: "Parking Management System",
        en: "Parking Management System"
      },
      category: "Full Stack",
      type: { id: "Full Stack Web App", en: "Full Stack Web App" },
      description: {
        id: "Sistem manajemen parkir modern full-stack berbasis web untuk pemantauan ketersediaan slot dan pencatatan transaksi parkir secara real-time dan terstruktur.",
        en: "Modern full-stack web-based parking management system for real-time slot monitoring, parking transaction recording, and operational analytics."
      },
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
      tags: ["Full Stack", "React / Next.js", "Node.js", "Tailwind CSS", "Vercel"],
      liveUrl: "https://parking-management-system-wxkq.vercel.app",
      githubUrl: null,
      featured: true,
      highlights: {
        id: ["Pelacakan slot real-time", "Dashboard analitik parkir", "Desain antarmuka responsif"],
        en: ["Real-time slot tracking", "Parking analytics dashboard", "Responsive UI design"]
      }
    },
    {
      id: 2,
      title: {
        id: "Portal Pendaftaran Magang Diskominfo Kab. Tegal",
        en: "Diskominfo Tegal Internship Registration Portal"
      },
      category: "Web Dev",
      type: { id: "Full-Stack Web App (Laravel 11 + Tailwind CSS)", en: "Full-Stack Web App (Laravel 11 + Tailwind CSS)" },
      description: {
        id: "Aplikasi web resmi pendaftaran magang Diskominfo Kab. Tegal berbasis Laravel 11 & Tailwind CSS. Dilengkapi formulir 4-tahap, pelacakan status mandiri (NIM/Email), panel verifikasi berkas admin, dan arsitektur cloud serverless di Vercel.",
        en: "Official internship registration portal for Diskominfo Kab. Tegal built with Laravel 11 and Tailwind CSS. Features a 4-step digital application form, real-time self-service status tracking, administrative document review, and serverless Vercel cloud deployment."
      },
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      tags: ["Laravel 11", "Tailwind CSS", "PHP", "SQLite / MySQL", "Vercel Serverless", "Blade"],
      liveUrl: "https://diskominfo-tegal-main.vercel.app",
      githubUrl: "https://github.com/naufalzaki578/diskominfo-tegal",
      featured: true,
      highlights: {
        id: [
          "Live di Vercel dengan arsitektur serverless & HTTPS murni",
          "Cek status mandiri real-time (NIM/Email) tanpa login",
          "Panel admin verifikasi berkas & download Surat/CV",
          "100% responsif di smartphone, tablet, dan desktop"
        ],
        en: [
          "Live on Vercel with serverless architecture & strict HTTPS",
          "Real-time self-service status tracking (NIM/Email)",
          "Admin document review & applicant decision workflow",
          "100% responsive across mobile, tablet, and desktop"
        ]
      }
    },
    {
      id: 3,
      title: {
        id: "Redesain UI/UX Web Kominfo",
        en: "UI/UX Redesign for Kominfo Website"
      },
      category: "UI/UX Design",
      type: { id: "Figma Prototype", en: "Figma Prototype" },
      description: {
        id: "Studi kasus dan perancangan prototipe antarmuka pengguna (UI/UX) modern untuk Web Kominfo di Figma dengan menitikberatkan pada kemudahan navigasi informasi publik dan tata letak yang bersih.",
        en: "Comprehensive UI/UX design case study and prototype for Kominfo web portal in Figma, emphasizing accessible navigation and clean informational hierarchy."
      },
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
      tags: ["Figma", "UI/UX", "Wireframing", "High-Fidelity Prototype"],
      liveUrl: "https://www.figma.com/design/m8KK3SdDNePZy38hNmPYGM/WEB-KOMINFO?node-id=0-1&t=OwxVDdcVplIwmkwh-1",
      githubUrl: null,
      featured: true,
      highlights: {
        id: ["Prototipe interaktif fidelitas tinggi", "Tata letak ramah aksesibilitas", "Design system terstandar"],
        en: ["Interactive high-fidelity prototype", "Accessible public layout", "Standardized design tokens"]
      }
    },
    {
      id: 4,
      title: {
        id: "SakuBijak - Finance Management Dashboard",
        en: "SakuBijak - Finance Management Dashboard"
      },
      category: "Backend & Web",
      type: { id: "Web Application", en: "Web Application" },
      description: {
        id: "Platform manajemen dan pencatatan keuangan cerdas yang membantu pengguna merencanakan anggaran, melacak pengeluaran harian, dan memvisualisasikan kondisi cashflow finansial.",
        en: "Smart personal financial manager and budget tracking application helping users forecast savings, categorize expenses, and visualize health of cash flow."
      },
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
      tags: ["Backend", "Node.js", "Express", "Tailwind", "Vercel"],
      liveUrl: "https://saku-bijak-new-main-finance-dashboa.vercel.app/",
      githubUrl: null,
      featured: false,
      highlights: {
        id: ["Visualisasi pengeluaran dinamis", "Pencatatan cashflow terstruktur", "Performa cepat & responsif"],
        en: ["Dynamic expense visualization", "Structured cashflow ledger", "Fast and responsive performance"]
      }
    },
    {
      id: 5,
      title: {
        id: "LuxeMarket E-Commerce Platform",
        en: "LuxeMarket E-Commerce Platform"
      },
      category: "Web Dev",
      type: { id: "Frontend Web", en: "Frontend Web" },
      description: {
        id: "Antarmuka etalase toko e-commerce modern dengan katalog produk yang responsif, pemfilteran kategori produk dinamis, keranjang belanja, dan pengalaman checkout lancar.",
        en: "Modern boutique e-commerce frontend showcasing responsive product catalogs, dynamic category filtering, cart management, and seamless checkout."
      },
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      tags: ["Web Dev", "JavaScript", "HTML5", "CSS3", "Vercel"],
      liveUrl: "https://luxemarket-frontend.vercel.app/",
      githubUrl: null,
      featured: false,
      highlights: {
        id: ["Pencarian produk instan", "UI interaktif modern", "Kompatibel mobile dan desktop"],
        en: ["Instant product filtering", "Sleek interactive UI", "Mobile-first responsive layout"]
      }
    },
    {
      id: 6,
      title: {
        id: "Marginalia - NLP Text Analysis & Processor",
        en: "Marginalia - NLP Text Analysis & Processor"
      },
      category: "Machine Learning",
      type: { id: "NLP & Web Tool", en: "NLP & Web Tool" },
      description: {
        id: "Aplikasi pemrosesan bahasa alami (Natural Language Processing) untuk ekstraksi informasi, analisis teks, tokenisasi, dan klasifikasi sentimen berbasis web.",
        en: "Natural Language Processing (NLP) web tool for text analysis, automated tokenization, entity extraction, and sentiment classification."
      },
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
      tags: ["Machine Learning", "NLP", "Python", "JavaScript", "GitHub Pages"],
      liveUrl: "https://naufalzaki578.github.io/Marginalia-nlp-main/",
      githubUrl: "https://github.com/naufalzaki578/Marginalia-nlp-main",
      featured: false,
      highlights: {
        id: ["Pemrosesan teks waktu nyata", "Analisis sentimen teks", "Ekstraksi kata kunci penting"],
        en: ["Real-time text tokenization", "Sentiment classification", "Automated keyword extraction"]
      }
    },
    {
      id: 7,
      title: {
        id: "TravelBuddy AI Assistant",
        en: "TravelBuddy AI Assistant"
      },
      category: "AI & Web",
      type: { id: "AI Companion Web App", en: "AI Companion Web App" },
      description: {
        id: "Asisten perjalanan cerdas berbasis AI yang membantu wisatawan merencanakan destinasi liburan, menyusun rencana perjalanan (itinerary), dan estimasi anggaran secara otomatis.",
        en: "Intelligent travel planning assistant powered by AI generating tailored destination itineraries, sightseeing suggestions, and budget estimates."
      },
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
      tags: ["AI", "Generative AI", "React", "Tailwind", "Vercel"],
      liveUrl: "https://travel-buddy-f75wqy1iq-naufal17.vercel.app/",
      githubUrl: null,
      featured: false,
      highlights: {
        id: ["Rekomendasi rute pintar", "Kustomisasi durasi liburan", "Antarmuka ramah pengguna"],
        en: ["Smart route recommendations", "Customized trip duration", "User-friendly conversational UI"]
      }
    },
    {
      id: 8,
      title: {
        id: "Machine Learning Loan Credit Scoring Prediction",
        en: "Machine Learning Loan Credit Scoring Prediction"
      },
      category: "Machine Learning",
      type: { id: "Data Science & ML Model", en: "Data Science & ML Model" },
      description: {
        id: "Proyek pemodelan data science dan machine learning untuk memprediksi kelayakan persetujuan kredit nasabah perbankan berdasarkan analisis fitur finansial dan demografis.",
        en: "Data science and predictive machine learning project determining loan creditworthiness based on customer demographic and financial risk profiles in Google Colab."
      },
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
      tags: ["Machine Learning", "Python", "Pandas", "Scikit-Learn", "Google Colab"],
      liveUrl: "https://colab.research.google.com/github/naufalzaki578/loan-credit-prediction-main/blob/main/loan_credit_project.ipynb#scrollTo=B2Uh1Htx6YYo",
      githubUrl: "https://github.com/naufalzaki578/loan-credit-prediction-main",
      featured: false,
      highlights: {
        id: ["Evaluasi metrik akurasi tinggi", "Feature engineering menyeluruh", "Notebook interaktif Google Colab"],
        en: ["High-accuracy predictive model", "Feature engineering pipeline", "Interactive Google Colab notebook"]
      }
    }
  ],

  experiences: [
    {
      id: 1,
      role: {
        id: "Freelance IT Infrastructure Support",
        en: "Freelance IT Infrastructure Support"
      },
      company: "Event Organizer Tournament Kapolres Tegal Cup 2025",
      period: "Mei 2025 - Juli 2025",
      periodEn: "May 2025 - July 2025",
      type: "Freelance",
      description: {
        id: "Bertanggung jawab atas kesiapan, keandalan, dan pemeliharaan seluruh infrastruktur teknologi informasi, sistem jaringan, dan perangkat scoring digital selama gelaran turnamen Kapolres Tegal Cup 2025.",
        en: "Responsible for the readiness, reliability, and maintenance of overall IT infrastructure, networking systems, and digital scoring devices throughout the Kapolres Tegal Cup 2025 tournament."
      },
      achievements: {
        id: [
          "Merancang dan mengonfigurasi infrastruktur jaringan lokal (LAN/WLAN) berlatensi rendah guna menjamin stabilitas koneksi selama turnamen berlangsung",
          "Mengelola dan menyinkronkan sistem scoring digital serta live display pertandingan untuk pembaruan data secara real-time tanpa kendala",
          "Melakukan penanganan cepat (troubleshooting) kendala hardware, routing jaringan, dan mitigasi gangguan teknis di arena pertandingan",
          "Mengamankan transmisi akses internet panitia dan memastikan kesiapan sistem daya cadangan (UPS) untuk operasional perangkat IT tanpa henti"
        ],
        en: [
          "Engineered and configured low-latency local network infrastructure (LAN/WLAN) ensuring stable connectivity throughout the tournament",
          "Managed and synchronized real-time digital scoreboard systems and live match displays for continuous scoring updates",
          "Delivered rapid on-site troubleshooting for hardware, network routing, and technical mitigations across tournament arenas",
          "Secured committee network access and monitored uninterruptible power supply (UPS) backups for continuous IT operations"
        ]
      }
    },
    {
      id: 2,
      role: {
        id: "Web Developer Intern",
        en: "Web Developer Intern"
      },
      company: "Dinas Komunikasi dan Informatika Kab. Tegal",
      period: "Februari 2024 - April 2024",
      periodEn: "February 2024 - April 2024",
      type: "Internship",
      description: {
        id: "Mengembangkan portal web pendaftaran magang resmi Diskominfo Kab. Tegal berbasis Laravel 11 dan Tailwind CSS, menyediakan formulir 4-tahap, pelacakan status mandiri real-time, dashboard admin verifikasi berkas, dan deployment cloud serverless di Vercel.",
        en: "Developed the official internship registration web platform for Diskominfo Kab. Tegal using Laravel 11 and Tailwind CSS, featuring a 4-step digital form, real-time self-service tracking, document review dashboard, and serverless cloud deployment on Vercel."
      },
      achievements: {
        id: [
          "Mendigitalisasi alur pendaftaran magang menjadi portal terpusat yang 100% responsif di semua perangkat",
          "Membangun fitur cek status mandiri (NIM/Email) secara real-time dengan proteksi keamanan HTTPS murni",
          "Mengintegrasikan dashboard verifikasi berkas (Surat Pengantar & CV) serta alur persetujuan admin",
          "Menerapkan arsitektur cloud serverless di Vercel dan basis data SQLite siap pakai"
        ],
        en: [
          "Digitized internship registration into a central, 100% responsive web portal across all devices",
          "Engineered real-time self-service status tracking (NIM/Email) with strict HTTPS security enforcement",
          "Integrated administrative document review (Cover Letter & CV) and decision management workflows",
          "Architected and deployed serverless cloud application on Vercel with ready-to-use SQLite integration"
        ]
      }
    },
    {
      id: 3,
      role: {
        id: "Mitra Pengantaran Logistik",
        en: "Delivery Partner / Logistics"
      },
      company: "PT. Shopee Internasional Indonesia",
      period: "Jun 2023 - Jan 2025",
      periodEn: "Jun 2023 - Jan 2025",
      type: "Work Experience",
      description: {
        id: "Mengantarkan pesanan secara tepat waktu, mencatat transaksi harian secara akurat, menjaga komunikasi profesional dengan pelanggan, serta mempraktikkan manajemen waktu dan navigasi rute optimal.",
        en: "Executed timely deliveries, logged daily transactions accurately, maintained professional client relations, and honed adaptability and time-management skills."
      },
      achievements: {
        id: [
          "Menjaga skor kepuasan dan rating pelanggan di tingkat prima",
          "Melatih disiplin kerja, ketahanan mental, dan orientasi pelayanan"
        ],
        en: [
          "Maintained top-tier customer satisfaction ratings and delivery accuracy",
          "Built strong work ethic, customer service orientation, and time management"
        ]
      }
    }
  ],

  githubStats: {
    publicRepos: 18,
    totalStars: 12,
    contributions: "500+ Kontribusi",
    topLanguages: [
      { name: "JavaScript & Node.js", percentage: 35, color: "#f7df1e" },
      { name: "PHP & Laravel", percentage: 28, color: "#4F5D95" },
      { name: "Python & ML", percentage: 20, color: "#3572A5" },
      { name: "HTML & CSS", percentage: 12, color: "#e34f26" },
      { name: "Others", percentage: 5, color: "#8b5cf6" }
    ]
  }
};
