import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'
import ProgramNavigation from '../components/ProgramNavigation'
import './OnlineClasses.css'

function OnlineClasses() {
  const { t } = useTranslation()
  const [openClasses, setOpenClasses] = useState({})
  const [currentImageIndex, setCurrentImageIndex] = useState({})

  const toggleClass = (classId) => {
    setOpenClasses(prev => ({
      ...prev,
      [classId]: !prev[classId]
    }))
    // Reset carousel to first image when opening
    if (!openClasses[classId]) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [classId]: 0
      }))
    }
  }

  const nextImage = (classId, totalImages, e) => {
    e.stopPropagation()
    setCurrentImageIndex(prev => ({
      ...prev,
      [classId]: ((prev[classId] || 0) + 1) % totalImages
    }))
  }

  const prevImage = (classId, totalImages, e) => {
    e.stopPropagation()
    setCurrentImageIndex(prev => ({
      ...prev,
      [classId]: ((prev[classId] || 0) - 1 + totalImages) % totalImages
    }))
  }

  const classes = [
    {
      id: 'english-classes',
      name: 'English Classes',
      description: 'We offer free online English classes to women across Afghanistan, taught by qualified Afghan women instructors. Our program serves students at all proficiency levels—beginner, intermediate, and advanced—helping them develop essential language skills for education and professional advancement.',
      stats: [
        { month: 'January', classes: '1 class', students: '14 students' },
        { month: 'February', classes: '5 classes', students: '45 students' },
        { month: 'April', classes: '1 class', students: '24 students' },
      ],
      thumbnail: '/Online_Classes/img_1745061597331_0-1745061609972-picture.webp',
      images: [
        '/Online_Classes/img_1745061597331_0-1745061609972-picture.webp',
        '/Online_Classes/img_1745061906649_0-1745061917672-picture.webp',
      ]
    },
  ]

  return (
    <div className="online-classes-page">
      <section className="page-hero">
        <div className="container">
          <h1>Online Classes</h1>
          <p>Expanding educational access through digital learning opportunities</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="classes-grid">
            {classes.map((classItem) => {
              const currentIndex = currentImageIndex[classItem.id] || 0
              const currentImage = classItem.images[currentIndex]
              const totalImages = classItem.images.length

              return (
                <div key={classItem.id} className="class-card">
                  <div
                    className="class-header"
                    onClick={() => toggleClass(classItem.id)}
                  >
                    <div className="class-header-content">
                      <img src={classItem.thumbnail} alt={classItem.name} className="class-thumbnail" />
                      <h3 className="class-name">{classItem.name}</h3>
                    </div>
                    <button className="toggle-button" aria-label="Toggle details">
                      {openClasses[classItem.id] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </button>
                  </div>

                  {openClasses[classItem.id] && (
                    <div className="class-details">
                      <div className="carousel-container">
                        <img src={currentImage} alt={`${classItem.name} - Image ${currentIndex + 1}`} className="class-full-image" />

                        {totalImages > 1 && (
                          <>
                            <button
                              className="carousel-button carousel-button-prev"
                              onClick={(e) => prevImage(classItem.id, totalImages, e)}
                              aria-label="Previous image"
                            >
                              <ChevronLeft size={32} />
                            </button>
                            <button
                              className="carousel-button carousel-button-next"
                              onClick={(e) => nextImage(classItem.id, totalImages, e)}
                              aria-label="Next image"
                            >
                              <ChevronRight size={32} />
                            </button>
                            <div className="carousel-indicators">
                              {classItem.images.map((_, index) => (
                                <span
                                  key={index}
                                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setCurrentImageIndex(prev => ({ ...prev, [classItem.id]: index }))
                                  }}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      <div className="class-info">
                        <p className="class-description">{classItem.description}</p>
                        
                        {classItem.stats && classItem.stats.length > 0 && (
                          <div className="class-stats">
                            <h4 className="stats-title">Program Statistics:</h4>
                            {classItem.stats.map((stat, index) => (
                              <div key={index} className="stat-row">
                                <span className="stat-month">{stat.month}:</span>
                                <span className="stat-details">{stat.classes} • {stat.students}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <p className="gallery-count"><strong>Gallery:</strong> {totalImages} {totalImages === 1 ? 'photo' : 'photos'}</p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ProgramNavigation currentProgram="online-classes" />
    </div>
  )
}

export default OnlineClasses

