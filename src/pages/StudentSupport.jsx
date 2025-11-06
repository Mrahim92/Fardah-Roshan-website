import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react'
import SEO from '../components/SEO'
import ProgramNavigation from '../components/ProgramNavigation'
import './StudentSupport.css'

function StudentSupport() {
  const { t, i18n } = useTranslation()
  const baseUrl = import.meta.env.BASE_URL
  const [openPrograms, setOpenPrograms] = useState({})
  const [currentImageIndex, setCurrentImageIndex] = useState({})
  
  // Check if current language is RTL
  const isRTL = i18n.language === 'fa' || i18n.language === 'ps'

  const toggleProgram = (programId) => {
    setOpenPrograms(prev => ({
      ...prev,
      [programId]: !prev[programId]
    }))
    // Reset carousel to first image when opening
    if (!openPrograms[programId]) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [programId]: 0
      }))
    }
  }

  const nextImage = (programId, totalImages, e) => {
    e.stopPropagation()
    const direction = isRTL ? -1 : 1
    setCurrentImageIndex(prev => ({
      ...prev,
      [programId]: ((prev[programId] || 0) + direction + totalImages) % totalImages
    }))
  }

  const prevImage = (programId, totalImages, e) => {
    e.stopPropagation()
    const direction = isRTL ? 1 : -1
    setCurrentImageIndex(prev => ({
      ...prev,
      [programId]: ((prev[programId] || 0) + direction + totalImages) % totalImages
    }))
  }

  const programs = [
    {
      id: 'nursing-students',
      name: 'TOEFL Preparation',
      date: 'November 2024',
      description: 'Fardah Roshan Academy provided financial assistance for two female nursing students to enroll in a TOEFL preparation course to further their academic and professional development.',
            thumbnail: `${baseUrl}fra-logo.webp`,
      images: ['/fra-logo.webp']
    },
    {
      id: 'masters-degree',
      name: "Master's Degree",
      date: 'September 2024',
      description: "After completing his Bachelor's degree in Computer Science at Kandahar University in 2018, Nangialay Bawar faced challenges in continuing his education due to work commitments. With the assistance of Fardah Roshan Academy, Nangialay is now enrolled in an online Master's program in International Cooperation and Humanitarian Aid at Kalu Institute, Spain.",
            thumbnail: `${baseUrl}Student_Support/Masters Degree/e5b223c9-1ff2-4ebf-80f4-86fd8c386500-1745058640576-picture.webp`,
      images: [
              `${baseUrl}Student_Support/Masters Degree/e5b223c9-1ff2-4ebf-80f4-86fd8c386500-1745058640576-picture.webp`,
              `${baseUrl}Student_Support/Masters Degree/img_1745058781164_0-1745058789570-picture.webp`,
      ]
    },
    {
      id: 'herat-trip',
      name: 'Herat Field Trip',
      date: 'November 12, 2021',
      description: 'A group of 50 students from the English and Pashto Literature Faculty of Kandahar University embarked on a three-day trip to Herat Province, accompanied by their teachers. This educational excursion aimed to expose students to the rich history and culture of Herat.\n\nDuring the trip, students had the opportunity to visit several historical sites and significant landmarks throughout Herat. The itinerary included explorations of ancient architecture and cultural heritage, fostering a deeper understanding of the region\'s historical context.\n\nThe entire trip was organized and funded by Fardah Roshan Academy, demonstrating their commitment to enhancing educational experiences for students. Mr. Ahmad Sajad Sarwari was responsible for overseeing the trip, ensuring that all logistics were managed effectively.\n\nThe students returned with valuable insights and a greater appreciation for Afghanistan\'s cultural heritage. Overall, the trip was a resounding success, contributing to the students\' academic and personal growth.',
            thumbnail: `${baseUrl}Student_Support/Herat_Trip/img_1745057224507_0-1745057241590-picture.webp`,
      images: [
              `${baseUrl}Student_Support/Herat_Trip/img_1745057224507_0-1745057241590-picture.webp`,
              `${baseUrl}Student_Support/Herat_Trip/img_1745057224507_1-1745057242309-picture.webp`,
              `${baseUrl}Student_Support/Herat_Trip/img_1745057224507_2-1745057242438-picture.webp`,
              `${baseUrl}Student_Support/Herat_Trip/img_1745057224507_3-1745057242627-picture.webp`,
              `${baseUrl}Student_Support/Herat_Trip/img_1745057224508_4-1745057243641-picture.webp`,
      ]
    },
  ]

  return (
    <div className="student-support-page">
      <SEO 
        title="Student Support"
        description="Financial assistance and educational opportunities for Afghan students. TOEFL prep, master's degree support, and field trips."
        keywords="student support Afghanistan, scholarships, TOEFL preparation, master's degree, educational assistance"
        path="/student-support"
      />
      <section className="page-hero">
        <div className="container">
          <h1>Student Support</h1>
          <p>Empowering Afghan students through scholarships, educational resources, and enrichment opportunities</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="programs-grid">
            {programs.map((program) => {
              const currentIndex = currentImageIndex[program.id] || 0
              const currentImage = program.images[currentIndex]
              const totalImages = program.images.length

              return (
                <div key={program.id} className="program-card">
                  <div
                    className="program-header"
                    onClick={() => toggleProgram(program.id)}
                  >
                    <div className="program-header-content">
                      <img src={program.thumbnail} alt={program.name} className="program-thumbnail" />
                      <div className="program-title-container">
                        <h3 className="program-name">{program.name}</h3>
                        <p className="program-date">{program.date}</p>
                      </div>
                    </div>
                    <button className="toggle-button" aria-label="Toggle details">
                      {openPrograms[program.id] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </button>
                  </div>

                  {openPrograms[program.id] && (
                    <div className="program-details">
                      <div className="carousel-container">
                        <img src={currentImage} alt={`${program.name} - Image ${currentIndex + 1}`} className="program-full-image" />

                        {totalImages > 1 && (
                          <>
                            <button
                              className="carousel-button carousel-button-prev"
                              onClick={(e) => prevImage(program.id, totalImages, e)}
                              aria-label="Previous image"
                            >
                              <ChevronLeft size={32} />
                            </button>
                            <button
                              className="carousel-button carousel-button-next"
                              onClick={(e) => nextImage(program.id, totalImages, e)}
                              aria-label="Next image"
                            >
                              <ChevronRight size={32} />
                            </button>
                            <div className="carousel-indicators">
                              {program.images.map((_, index) => (
                                <span
                                  key={index}
                                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setCurrentImageIndex(prev => ({ ...prev, [program.id]: index }))
                                  }}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      <div className="program-info">
                        <p className="program-description">{program.description}</p>
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

      <ProgramNavigation currentProgram="students" />
    </div>
  )
}

export default StudentSupport

