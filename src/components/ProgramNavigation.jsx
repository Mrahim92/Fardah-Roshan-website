import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Monitor, BookOpen, School, GraduationCap, Users, Building } from 'lucide-react'
import './ProgramNavigation.css'

function ProgramNavigation({ currentProgram }) {
  const { t } = useTranslation()
  
  const programs = [
    { 
      id: 'computer-labs', 
      name: t('programs.computerLabs'), 
      path: '/computer-labs',
      icon: Monitor 
    },
    { 
      id: 'libraries', 
      name: t('programs.libraries'), 
      path: '/libraries',
      icon: BookOpen 
    },
    { 
      id: 'microschools', 
      name: t('programs.microschools'), 
      path: '/microschools',
      icon: School 
    },
    { 
      id: 'online-classes', 
      name: t('programs.onlineClasses'), 
      path: '/online-classes',
      icon: GraduationCap 
    },
    { 
      id: 'students', 
      name: t('programs.studentSupport'), 
      path: '/student-support',
      icon: Users 
    },
    { 
      id: 'schools', 
      name: t('programs.schoolDevelopment'), 
      path: '/school-development',
      icon: Building 
    },
  ]

  // Filter out the current program
  const otherPrograms = programs.filter(program => program.id !== currentProgram)

  return (
    <section className="program-navigation">
      <div className="container">
        <h3 className="program-nav-title">Explore Our Other Programs</h3>
        <div className="program-nav-grid">
          {otherPrograms.map((program) => {
            const IconComponent = program.icon
            return (
              <Link 
                key={program.id} 
                to={program.path} 
                className="program-nav-card"
              >
                <IconComponent size={32} className="program-nav-icon" />
                <span className="program-nav-name">{program.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProgramNavigation

