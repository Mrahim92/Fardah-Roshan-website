import { useTranslation } from 'react-i18next'
import { Mail, Linkedin } from 'lucide-react'
import './Team.css'

function Team() {
  const { t } = useTranslation()

  const teamMembers = [
    {
      name: 'Team Member 1',
      role: t('team.roles.executiveDirector'),
      image: '/Team Members/WhatsApp Image 2025-02-01 at 16-1738409854380-picture.webp'
    },
    {
      name: 'Team Member 2',
      role: t('team.roles.programDirector'),
      image: '/Team Members/WhatsApp Image 2025-02-01 at 16-1738410286045-picture.webp'
    },
    {
      name: 'Team Member 3',
      role: t('team.roles.educationCoordinator'),
      image: '/Team Members/WhatsApp Image 2025-02-01 at 16-1739194183026-picture.webp'
    },
    {
      name: 'Team Member 4',
      role: t('team.roles.communityOutreach'),
      image: '/Team Members/WhatsApp Image 2025-02-10 at 18-1739194865714-picture.webp'
    },
    {
      name: 'Team Member 5',
      role: t('team.roles.technologyLead'),
      image: '/Team Members/6833591-1739193683166-picture.webp'
    },
    {
      name: 'Team Member 6',
      role: t('team.roles.libraryCoordinator'),
      image: '/Team Members/6997662-1739194237902-picture.webp'
    },
  ]

  return (
    <div className="team-page">
      <section className="page-hero">
        <div className="container">
          <h1>{t('team.title')}</h1>
          <p>{t('team.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member card">
                <img src={member.image} alt={member.name} className="member-image" />
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <div className="member-social">
                    <a href="#" className="social-icon">
                      <Mail size={18} />
                    </a>
                    <a href="#" className="social-icon">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section join-section">
        <div className="container">
          <div className="join-content">
            <h2>{t('team.join.title')}</h2>
            <p>{t('team.join.description')}</p>
            <a href="/contact" className="btn btn-primary">
              {t('team.join.button')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team

