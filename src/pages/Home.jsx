import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const { t } = useTranslation()

  const baseUrl = import.meta.env.BASE_URL

  const slideshowImages = [
    `${baseUrl}03.50.47_f32497e9.jpg`,
  ]

  const programs = [
    {
      image: `${baseUrl}computer-labs.webp`,
      title: t('programs.computerLabs'),
      link: '/computer-labs'
    },
    {
      image: `${baseUrl}libraries.webp`,
      title: t('programs.libraries'),
      link: '/libraries'
    },
    {
      image: `${baseUrl}microschools.webp`,
      title: t('programs.microschools'),
      link: '/microschools'
    },
    {
      image: `${baseUrl}online-classes.webp`,
      title: t('programs.onlineClasses'),
      link: '/online-classes'
    },
    {
      image: `${baseUrl}students.webp`,
      title: t('programs.studentSupport'),
      link: '/student-support'
    },
    {
      image: `${baseUrl}schools.webp`,
      title: t('programs.schoolDevelopment'),
      link: '/school-development'
    },
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-slideshow">
          {slideshowImages.map((image, index) => (
            <div
              key={index}
              className={`hero-slide ${index === 0 ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">{t('home.welcome')}</h1>
              <p className="hero-subtitle">{t('home.subtitle')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section programs-section">
        <div className="container">
          <h2 className="section-title">{t('home.checkOutOur')}</h2>
          <div className="programs-grid-row">
            {programs.map((program, index) => (
              <Link to={program.link} key={index} className="program-card-with-image">
                <div className="program-image-wrapper">
                  <img src={program.image} alt={program.title} className="program-image" />
                </div>
                <h3 className="program-title">{program.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

