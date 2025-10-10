import { useTranslation } from 'react-i18next'
import { Computer, BookOpen, Users, GraduationCap, Video, HeartHandshake } from 'lucide-react'
import './Programs.css'

function Programs() {
  const { t } = useTranslation()

  const programs = [
    {
      icon: <Computer size={50} />,
      title: t('programs.computerLabs'),
      description: t('programs.computerLabsDesc'),
      details: t('programs.computerLabsDetail')
    },
    {
      icon: <BookOpen size={50} />,
      title: t('programs.libraries'),
      description: t('programs.librariesDesc'),
      details: t('programs.librariesDetail')
    },
    {
      icon: <Users size={50} />,
      title: t('programs.cbeClasses'),
      description: t('programs.cbeClassesDesc'),
      details: t('programs.cbeClassesDetail')
    },
    {
      icon: <Video size={50} />,
      title: t('programs.onlineClasses'),
      description: t('programs.onlineClassesDesc'),
      details: t('programs.onlineClassesDetail')
    },
    {
      icon: <HeartHandshake size={50} />,
      title: t('programs.studentSupport'),
      description: t('programs.studentSupportDesc'),
      details: t('programs.studentSupportDetail')
    },
    {
      icon: <GraduationCap size={50} />,
      title: t('programs.educationalSupport'),
      description: t('programs.educationalSupportDesc'),
      details: t('programs.educationalSupportDetail')
    },
  ]

  return (
    <div className="programs-page">
      <section className="page-hero">
        <div className="container">
          <h1>{t('programs.title')}</h1>
          <p>{t('programs.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="programs-grid">
            {programs.map((program, index) => (
              <div key={index} className="program-item card">
                <div className="program-icon-large">{program.icon}</div>
                <h3 className="card-title">{program.title}</h3>
                <p className="program-description">{program.description}</p>
                <p className="program-details">{program.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section impact-section">
        <div className="container">
          <h2 className="section-title">{t('programs.impact.title')}</h2>
          <div className="impact-stats">
            <div className="stat-card">
              <h3>50+</h3>
              <p>{t('programs.impact.schools')}</p>
            </div>
            <div className="stat-card">
              <h3>10,000+</h3>
              <p>{t('programs.impact.students')}</p>
            </div>
            <div className="stat-card">
              <h3>100+</h3>
              <p>{t('programs.impact.teachers')}</p>
            </div>
            <div className="stat-card">
              <h3>25+</h3>
              <p>{t('programs.impact.communities')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs

