import { useTranslation } from 'react-i18next'
import './About.css'

function About() {
  const { t } = useTranslation()
  const baseUrl = import.meta.env.BASE_URL

  const teamMembers = [
    {
      name: 'Zia Akbary',
      role: 'Chief Executive Officer',
      image: `${baseUrl}Team Members/Zia_Akbary_Chief_Executive_Officer.webp`,
      bio: t('about.teamBios.zia')
    },
    {
      name: 'Dr. Zarina Akbary, Ph.D',
      role: 'Cofounder',
      image: `${baseUrl}Team Members/Dr._Zarina_Akbary_Cofounder.webp`,
      bio: t('about.teamBios.zarina')
    },
    {
      name: 'Sajad Ahmad Sarwari',
      role: 'Program Coordinator',
      image: `${baseUrl}Team Members/Sajad_Ahmad_Sarwari_Program_Coordinator.webp`,
      bio: t('about.teamBios.sajad')
    },
    {
      name: 'Zainab Sarwari',
      role: 'Program Administrator',
      image: `${baseUrl}Team Members/Zainab_Sarwari_Program_Administrator.webp`,
      bio: t('about.teamBios.zainab')
    },
    {
      name: 'Basir Ahmad Ahmadi',
      role: 'Library Coordinator',
      image: `${baseUrl}Team Members/Basir_Ahmad_Ahmadi_Library_Coordinator.webp`,
      bio: t('about.teamBios.basir')
    },
    {
      name: 'Nangialay Bawar',
      role: 'Communications Officer',
      image: `${baseUrl}Team Members/Nangialay_Bawar_Communications_Officer.webp`,
      bio: t('about.teamBios.nangialay')
    },
    {
      name: 'Haj Gull Aetekal',
      role: 'Financial Administrator',
      image: `${baseUrl}Team Members/Haj_Gull_Aetekal_Financial_Administrator.webp`,
      bio: t('about.teamBios.hajgull')
    },
  ]

  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <h1>{t('about.mission')}</h1>
          <p>{t('about.missionDescription')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img
                src={`${baseUrl}About Us/WhatsApp Image 2024-08-31 at 15-1738409329116-about_us_section_image.webp`}
                alt={t('about.title')}
              />
            </div>
            <div className="about-text">
              <h2>{t('about.ourStory')}</h2>
              <p>{t('about.storyText1')}</p>
              <p>{t('about.storyText2')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <h2 className="section-title">{t('about.whoWeAre')}</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member card">
                <img src={member.image} alt={member.name} className="member-image" />
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section founder-section">
        <div className="container">
          <h2 className="section-title">{t('about.founderMessage')}</h2>
          <div className="founder-content">
            <img
              src={`${baseUrl}Founder Message/img_1739700078864_0-1739700085440-pictures.webp`}
              alt={t('about.founderMessage')}
              className="founder-image"
            />
            <div className="founder-text">
              <p>"{t('about.founderQuote')}"</p>
              <p className="founder-name">- {t('about.founderName')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

