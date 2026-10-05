import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="navbar__logo">fadhilah.</a>
        <button
          className="navbar__hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
          <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
        </ul>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__text">
          <p className="hero__greeting">Halo, saya</p>
          <h1 className="hero__name">AHMAD FADHILAH, S.Kom.</h1>
          <p className="hero__title">Junior Web Developer</p>
          <p className="hero__bio">
            Fresh graduate S1 Teknik Informatika dari Universitas Gunadarma
            dengan pengalaman mengembangkan aplikasi web menggunakan React.js
            dan PHP, antusias untuk terus belajar dan berkontribusi dalam tim
            pengembang sebagai Junior Web Developer.
          </p>
          <div className="hero__links">
            <a href="https://github.com/ahmadfadhilah99" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/Ahmad-Fadhilah99" target="_blank" rel="noopener noreferrer">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              LinkedIn
            </a>
            <a href="mailto:ahmadfadhilah327@gmail.com">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4l-10 8L2 4" /></svg>
              Email
            </a>
          </div>
        </div>
        <div className="hero__photo">
          <img src="/foto.jpeg" alt="Foto profil" />
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const skillCategories = [
    {
      title: 'Bahasa',
      items: ['PHP', 'JavaScript (ES6)', 'HTML5', 'CSS3', 'SQL']
    },
    {
      title: 'Framework',
      items: ['React.js', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Database',
      items: ['MySQL']
    },
    {
      title: 'Tools',
      items: ['Git', 'GitHub', 'Postman', 'NPM', 'VS Code']
    }
  ]

  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Keahlian Teknis</h2>
        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skills__category">
              <h3>{cat.title}</h3>
              <div className="skills__tags">
                {cat.items.map((item) => (
                  <span key={item} className="skills__tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const projects = [
    {
      title: 'Sistem Informasi Lab Akuntansi Menengah',
      date: 'Jan 2025 – Mar 2025',
      description: [
        'Merancang dan mengimplementasikan fitur CRUD (Create, Read, Update, Delete) menggunakan PHP Native untuk pengelolaan modul pembelajaran akuntansi.',
        'Mengembangkan antarmuka landing page yang responsif dan informatif untuk menampilkan pengumuman, jadwal praktikum, serta informasi penting bagi praktikan.',
        'Mengintegrasikan sistem antarmuka web dengan basis data MySQL untuk penyimpanan data modul dan informasi praktikum terstruktur.'
      ],
      tech: ['PHP Native', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
      link: 'https://www.ak-menengah.com/'
    },
    {
      title: 'Aplikasi Web Tugas Akhir SMK',
      date: 'Feb 2022 – Mei 2022',
      description: [
        'Menerjemahkan wireframe UI/UX menjadi komponen front-end yang interaktif menggunakan React.'
      ],
      tech: ['React.js', 'CSS3', 'JavaScript'],
      link: 'https://spp-layout.vercel.app/'
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">Proyek</h2>
        <div className="projects__list">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div className="project-card__header">
                <h3 className="project-card__title">{project.title}</h3>
                <span className="project-card__date">{project.date}</span>
              </div>
              <div className="project-card__desc">
                <ul>
                  {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
              >
                Lihat Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  const experiences = [
    {
      role: 'Asisten Laboratorium & Programmer',
      company: 'Lab Akuntansi Menengah – Universitas Gunadarma, Depok',
      date: 'Sep 2024 – Sep 2026',
      descriptions: [
        'Mengembangkan dan memelihara aplikasi web informasi praktikum akuntansi.',
        'Membimbing mahasiswa dalam mengoperasikan perangkat lunak praktikum dan mengatasi kendala teknis saat kegiatan laboratorium.'
      ]
    },
    {
      role: 'Front End Developer (Intern)',
      company: 'PT. Ama Salam Indonesia, Bogor',
      date: 'Mar 2021 – Jun 2021',
      descriptions: [
        'Mempelajari Fundamental React.js.',
        'Menerjemahkan desain mockup menjadi halaman web inventory menggunakan React.js dan Bootstrap.'
      ]
    }
  ]

  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Pengalaman</h2>
        <div className="experience__list">
          {experiences.map((exp) => (
            <div key={exp.role + exp.company} className="experience-item">
              <h3 className="experience-item__role">{exp.role}</h3>
              <p className="experience-item__company">{exp.company}</p>
              <p className="experience-item__date">{exp.date}</p>
              <div className="experience-item__desc">
                <ul>
                  {exp.descriptions.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section__title">Pendidikan</h2>
        <div className="education-item">
          <h3 className="education-item__degree">S1 Teknik Informatika</h3>
          <p className="education-item__school">Universitas Gunadarma – Depok, Jawa Barat</p>
          <p className="education-item__date">2022 – 2026 | IPK: 3.80 / 4.00</p>
          <div className="education-item__details">
            <p>
              <strong>Skripsi:</strong> Rancang Bangun Aplikasi Rekomendasi Waktu Optimal
              Pengerasan Air Kolam Budidaya Ikan Lele Berbasis Web
            </p>
            <p style={{ marginTop: '8px' }}>
              <strong>Mata Kuliah Relevan:</strong> Pemrograman Web, Rekayasa Perangkat Lunak,
              Basis Data Terdistribusi, Struktur Data & Algoritma
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">© {year} — Ahmad Fadhilah</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  )
}

export default App
