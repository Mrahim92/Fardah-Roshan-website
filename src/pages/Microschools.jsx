import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, BookOpen, Calendar, Users } from 'lucide-react'
import ProgramNavigation from '../components/ProgramNavigation'
import './Microschools.css'

function Microschools() {
  const { t } = useTranslation()
  const [openSemesters, setOpenSemesters] = useState({})
  const [currentImageIndex, setCurrentImageIndex] = useState({})

  const toggleSemester = (semesterId) => {
    setOpenSemesters(prev => ({
      ...prev,
      [semesterId]: !prev[semesterId]
    }))
    // Reset carousel to first image when opening
    if (!openSemesters[semesterId]) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [semesterId]: 0
      }))
    }
  }

  const nextImage = (semesterId, totalImages, e) => {
    e.stopPropagation()
    setCurrentImageIndex(prev => ({
      ...prev,
      [semesterId]: ((prev[semesterId] || 0) + 1) % totalImages
    }))
  }

  const prevImage = (semesterId, totalImages, e) => {
    e.stopPropagation()
    setCurrentImageIndex(prev => ({
      ...prev,
      [semesterId]: ((prev[semesterId] || 0) - 1 + totalImages) % totalImages
    }))
  }

  const semesters = [
    {
      id: 'semester-1',
      name: 'Semester One',
      duration: 'N/A',
      students: 'N/A',
      topics: 'N/A',
      description: 'Details about Semester One curriculum and activities.',
      thumbnail: '/Microschools/Semester 1/img_1739615465363_0-1739615484011-picture.webp',
      images: [
        '/Microschools/Semester 1/img_1739615465363_0-1739615484011-picture.webp',
        '/Microschools/Semester 1/img_1739615465363_1-1739615484060-picture.webp',
        '/Microschools/Semester 1/img_1739615465363_2-1739615484065-picture.webp',
        '/Microschools/Semester 1/img_1739615465363_3-1739615484080-picture.webp',
        '/Microschools/Semester 1/img_1739615465363_4-1739615484081-picture.webp',
      ]
    },
    {
      id: 'semester-2',
      name: 'Semester Two',
      duration: 'N/A',
      students: 'N/A',
      topics: 'N/A',
      description: 'Details about Semester Two curriculum and activities.',
      thumbnail: '/Microschools/Semester 2/img_1739616011004_0-1739616041454-picture.webp',
      images: [
        '/Microschools/Semester 2/img_1739616011004_0-1739616041454-picture.webp',
        '/Microschools/Semester 2/img_1739616011004_1-1739616041462-picture.webp',
        '/Microschools/Semester 2/img_1739616011004_2-1739616041465-picture.webp',
        '/Microschools/Semester 2/img_1739616011004_3-1739616041477-picture.webp',
        '/Microschools/Semester 2/img_1739616011004_4-1739616041478-picture.webp',
        '/Microschools/Semester 2/img_1739616011004_5-1739616041481-picture.webp',
        '/Microschools/Semester 2/img_1739616011004_6-1739616041483-picture.webp',
        '/Microschools/Semester 2/img_1739616011004_7-1739616041490-picture.webp',
      ]
    },
    {
      id: 'semester-3',
      name: 'Semester Three',
      duration: 'N/A',
      students: 'N/A',
      topics: 'N/A',
      description: 'Details about Semester Three curriculum and activities.',
      thumbnail: '/fra-logo.webp',
      images: ['/fra-logo.webp']
    },
    {
      id: 'semester-4',
      name: 'Semester Four',
      duration: 'N/A',
      students: 'N/A',
      topics: 'N/A',
      description: 'Details about Semester Four curriculum and activities.',
      thumbnail: '/Microschools/Semester 4/img_1739616436394_0-1739616443408-picture.webp',
      images: [
        '/Microschools/Semester 4/img_1739616436394_0-1739616443408-picture.webp',
        '/Microschools/Semester 4/img_1739616436395_1-1739616443414-picture.webp',
        '/Microschools/Semester 4/img_1739616436395_2-1739616443415-picture.webp',
        '/Microschools/Semester 4/img_1739616436395_3-1739616443423-picture.webp',
        '/Microschools/Semester 4/img_1739616436395_4-1739616443425-picture.webp',
        '/Microschools/Semester 4/img_1739616436395_5-1739616443429-picture.webp',
        '/Microschools/Semester 4/img_1739616436395_6-1739616443429-picture.webp',
      ]
    },
    {
      id: 'semester-5',
      name: 'Semester Five',
      duration: 'N/A',
      students: 'N/A',
      topics: 'N/A',
      description: 'Details about Semester Five curriculum and activities.',
      thumbnail: '/Microschools/Semester 5/img_1739616725725_0-1739616758680-picture.webp',
      images: [
        '/Microschools/Semester 5/img_1739616725725_0-1739616758680-picture.webp',
        '/Microschools/Semester 5/img_1739616725725_1-1739616758686-picture.webp',
        '/Microschools/Semester 5/img_1739616725725_2-1739616758691-picture.webp',
        '/Microschools/Semester 5/img_1739616725725_3-1739616758692-picture.webp',
        '/Microschools/Semester 5/img_1739616725725_4-1739616758698-picture.webp',
        '/Microschools/Semester 5/img_1739616725725_5-1739616758700-picture.webp',
      ]
    },
    {
      id: 'semester-6',
      name: 'Semester Six',
      duration: 'N/A',
      students: 'N/A',
      topics: 'N/A',
      description: 'Details about Semester Six curriculum and activities.',
      thumbnail: '/Microschools/Semester 6/img_1739623622831_0-1739623627365-picture.webp',
      images: [
        '/Microschools/Semester 6/img_1739623622831_0-1739623627365-picture.webp',
        '/Microschools/Semester 6/img_1739623622831_1-1739623627367-picture.webp',
        '/Microschools/Semester 6/img_1739623622831_2-1739623627373-picture.webp',
        '/Microschools/Semester 6/img_1739623622831_3-1739623627374-picture.webp',
        '/Microschools/Semester 6/img_1739623622831_4-1739623627375-picture.webp',
      ]
    },
    {
      id: 'semester-7',
      name: 'Semester Seven',
      duration: 'N/A',
      students: 'N/A',
      topics: 'N/A',
      description: 'Details about Semester Seven curriculum and activities.',
      thumbnail: '/fra-logo.webp',
      images: ['/fra-logo.webp']
    },
    {
      id: 'semester-8',
      name: 'Semester Eight',
      duration: 'N/A',
      students: 'N/A',
      topics: 'N/A',
      description: 'Details about Semester Eight curriculum and activities.',
      thumbnail: '/Microschools/Semester 8/img_1751697824613_0-1751697832984-picture.webp',
      images: [
        '/Microschools/Semester 8/img_1751697824613_0-1751697832984-picture.webp',
        '/Microschools/Semester 8/img_1751697824613_1-1751697832986-picture.webp',
        '/Microschools/Semester 8/img_1751697824613_2-1751697832989-picture.webp',
        '/Microschools/Semester 8/img_1751697824613_3-1751697832992-picture.webp',
        '/Microschools/Semester 8/img_1751697824613_4-1751697832993-picture.webp',
        '/Microschools/Semester 8/img_1751697824614_5-1751697832994-picture.webp',
        '/Microschools/Semester 8/img_1751697824614_6-1751697832999-picture.webp',
        '/Microschools/Semester 8/img_1751697824614_7-1751697833001-picture.webp',
      ]
    },
    {
      id: 'semester-9',
      name: 'Semester Nine',
      duration: 'N/A',
      students: 'N/A',
      topics: 'N/A',
      description: 'Details about Semester Nine curriculum and activities.',
      thumbnail: '/Microschools/Semester 9/img_1755518678374_0-1755518712533-picture.webp',
      images: [
        '/Microschools/Semester 9/img_1755518678374_0-1755518712533-picture.webp',
        '/Microschools/Semester 9/img_1755518678374_1-1755518712539-picture.webp',
        '/Microschools/Semester 9/img_1755518678374_10-1755518712577-picture.webp',
        '/Microschools/Semester 9/img_1755518678374_2-1755518712541-picture.webp',
        '/Microschools/Semester 9/img_1755518678374_3-1755518712554-picture.webp',
        '/Microschools/Semester 9/img_1755518678374_4-1755518712555-picture.webp',
        '/Microschools/Semester 9/img_1755518678374_5-1755518712557-picture.webp',
        '/Microschools/Semester 9/img_1755518678374_6-1755518712557-picture.webp',
        '/Microschools/Semester 9/img_1755518678374_7-1755518712557-picture.webp',
        '/Microschools/Semester 9/img_1755518678374_8-1755518712564-picture.webp',
        '/Microschools/Semester 9/img_1755518678374_9-1755518712567-picture.webp',
        '/Microschools/Semester 9/img_1755519069222_0-1755519093319-picture.webp',
        '/Microschools/Semester 9/img_1755519129791_0-1755519144266-picture.webp',
      ]
    },
  ]

  return (
    <div className="microschools-page">
      <section className="page-hero">
        <div className="container">
          <h1>Microschools</h1>
          <p>Community-based literacy programs delivering education directly to neighborhoods</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="semesters-grid">
            {semesters.map((semester) => {
              const currentIndex = currentImageIndex[semester.id] || 0
              const currentImage = semester.images[currentIndex]
              const totalImages = semester.images.length

              return (
                <div key={semester.id} className="semester-card">
                  <div
                    className="semester-header"
                    onClick={() => toggleSemester(semester.id)}
                  >
                    <div className="semester-header-content">
                      <img src={semester.thumbnail} alt={semester.name} className="semester-thumbnail" />
                      <h3 className="semester-name">{semester.name}</h3>
                    </div>
                    <button className="toggle-button" aria-label="Toggle details">
                      {openSemesters[semester.id] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </button>
                  </div>

                  {openSemesters[semester.id] && (
                    <div className="semester-details">
                      <div className="carousel-container">
                        <img src={currentImage} alt={`${semester.name} - Image ${currentIndex + 1}`} className="semester-full-image" />

                        {totalImages > 1 && (
                          <>
                            <button
                              className="carousel-button carousel-button-prev"
                              onClick={(e) => prevImage(semester.id, totalImages, e)}
                              aria-label="Previous image"
                            >
                              <ChevronLeft size={32} />
                            </button>
                            <button
                              className="carousel-button carousel-button-next"
                              onClick={(e) => nextImage(semester.id, totalImages, e)}
                              aria-label="Next image"
                            >
                              <ChevronRight size={32} />
                            </button>
                            <div className="carousel-indicators">
                              {semester.images.map((_, index) => (
                                <span
                                  key={index}
                                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setCurrentImageIndex(prev => ({ ...prev, [semester.id]: index }))
                                  }}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      <div className="semester-info">
                        <p className="semester-description">{semester.description}</p>
                        
                        <div className="semester-stats">
                          {semester.duration && semester.duration !== 'N/A' && (
                            <div className="stat-item">
                              <Calendar size={20} />
                              <div>
                                <strong>Duration:</strong>
                                <span>{semester.duration}</span>
                              </div>
                            </div>
                          )}
                          
                          {semester.students && semester.students !== 'N/A' && (
                            <div className="stat-item">
                              <Users size={20} />
                              <div>
                                <strong>Students:</strong>
                                <span>{semester.students}</span>
                              </div>
                            </div>
                          )}
                          
                          {semester.topics && semester.topics !== 'N/A' && (
                            <div className="stat-item">
                              <BookOpen size={20} />
                              <div>
                                <strong>Topics Covered:</strong>
                                <span>{semester.topics}</span>
                              </div>
                            </div>
                          )}

                          <div className="stat-item">
                            <BookOpen size={20} />
                            <div>
                              <strong>Gallery:</strong>
                              <span>{totalImages} {totalImages === 1 ? 'photo' : 'photos'}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ProgramNavigation currentProgram="microschools" />
    </div>
  )
}

export default Microschools

