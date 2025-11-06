import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react'
import ProgramNavigation from '../components/ProgramNavigation'
import './SchoolDevelopment.css'

function SchoolDevelopment() {
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
      id: 'chair-donation',
      name: 'Chair Donation',
      location: 'Kandahar, Afghanistan',
      date: 'September 9, 2024',
      description: 'On September 9, 2024, the Reshad Kankor Preparation Course in Kandahar reached out to Fardah Roshan Academy with an urgent request. With hundreds of students preparing for the Kankor exam, the academy faced significant challenges due to a lack of seating. The limited number of chairs made it uncomfortable for students to study effectively.\n\nAfter a thorough evaluation and assessment of the situation, Fardah Roshan Academy recognized the importance of providing a conducive learning environment for these aspiring students. In response, the academy generously donated 100 chairs to the Reshad Kankor Preparation Course.\n\nThe administration expressed their heartfelt gratitude: "Thank you, Fardah Roshan Academy, for your support! Your contribution will greatly enhance the learning experience for our students, allowing them to focus on their studies in comfort."\n\nThis initiative not only addresses the immediate need for seating but also demonstrates Fardah Roshan Academy\'s commitment to fostering education and supporting the aspirations of students in Kandahar.',
            thumbnail: `${baseUrl}School_Development/Reshad Kankor Prep Course/img_1745060937503_0-1745060947751-picture.webp`,
      images: [
              `${baseUrl}School_Development/Reshad Kankor Prep Course/img_1745060937503_0-1745060947751-picture.webp`,
              `${baseUrl}School_Development/Reshad Kankor Prep Course/img_1745060937504_1-1745060948118-picture.webp`,
              `${baseUrl}School_Development/Reshad Kankor Prep Course/img_1745060937504_2-1745060948862-picture.webp`,
      ]
    },
    {
      id: 'classroom-construction',
      name: 'Classroom Construction',
      location: 'Daikundi Province, Afghanistan',
      date: 'August 20, 2024',
      description: 'In 2024, Zard Kalan High School in Daikundi Province faced significant challenges due to inadequate facilities for its 800 students. Teacher Abul Aziz Danish highlighted the difficulties:\n\n"Before the construction of classrooms, the school operated with only two classes set up in the same tent. This arrangement created a noisy environment, making it difficult for students to understand their lessons. Additionally, inclement weather posed challenges, as there was no shelter during rain, and the sun made it uncomfortable for students to sit outside."\n\nRecognizing the urgent need for proper learning spaces, Zia Akbari, the founder of Fardah Roshan Academy, made the decision to construct dedicated classrooms for the school. The construction project commenced on March 1, 2024, and the work was completed on August 20, 2024.\n\nWith the new classrooms, Zard Kalan High School now provides separate learning environments for students, significantly enhancing their educational experience. The community expressed immense gratitude to Fardah Roshan Academy for their commitment to improving the school\'s infrastructure and creating a conducive learning environment.\n\nThis initiative not only addresses the immediate needs of the school but also lays the foundation for better educational outcomes for the students. The positive impact of this project will be felt for years to come.',
            thumbnail: `${baseUrl}School_Development/Classroom Construction/img_1745056467249_0-1745056476484-picture.webp`,
      images: [
              `${baseUrl}School_Development/Classroom Construction/img_1745056467249_0-1745056476484-picture.webp`,
              `${baseUrl}School_Development/Classroom Construction/img_1745057455238_0-1745057463812-picture.webp`,
              `${baseUrl}School_Development/Classroom Construction/img_1745057455238_1-1745057463990-picture.webp`,
              `${baseUrl}School_Development/Classroom Construction/img_1745057455238_2-1745057464651-picture.webp`,
              `${baseUrl}School_Development/Classroom Construction/img_1745057455238_3-1745057465009-picture.webp`,
              `${baseUrl}School_Development/Classroom Construction/img_1745057455238_4-1745057465224-picture.webp`,
      ]
    },
    {
      id: 'office-equipment',
      name: 'Office Equipment',
      location: 'Daikundi Province, Afghanistan',
      date: 'March 14, 2024',
      description: 'On March 14, 2024, a critical situation was identified at Korga Boys High School in Daikundi Province, where the school administration was facing significant challenges due to a lack of essential administrative equipment. Teachers were forced to use the land or student chairs for seating, which hindered effective management of the school.\n\nUpon learning of this situation, Zia Akbari, the founder of Fardah Roshan Academy, took immediate action to support the school. The following items were provided to enhance the administrative capabilities of Korga Boys High School:\n\n• 6 Office Tables for administration\n• 12 Office Chairs for administration\n• 1 Water Cooler for staff and student hydration\n• Carpet for the administration area\n• 2 File Cabinets for organizing documents\n\nThese contributions significantly improved the working environment for the principal and teachers, allowing them to manage classes more effectively. The principal and staff expressed their heartfelt gratitude to Zia Akbari and Fardah Roshan Academy for their generous assistance in addressing the administrative needs of the school.\n\nThis support not only facilitates better administration but also contributes to an overall improvement in the educational environment for the students at Korga Boys High School.',
            thumbnail: `${baseUrl}School_Development/Korga boys High School/img_1745055463481_0-1745055480007-picture.webp`,
      images: [
              `${baseUrl}School_Development/Korga boys High School/img_1745055463481_0-1745055480007-picture.webp`,
              `${baseUrl}School_Development/Korga boys High School/img_1745055463481_1-1745055480060-picture.webp`,
              `${baseUrl}School_Development/Korga boys High School/img_1745055463481_2-1745055480098-picture.webp`,
              `${baseUrl}School_Development/Korga boys High School/img_1745055463481_3-1745055480182-picture.webp`,
              `${baseUrl}School_Development/Korga boys High School/img_1745055620933_0-1745055624369-picture.webp`,
      ]
    },
  ]

  return (
    <div className="school-development-page">
      <section className="page-hero">
        <div className="container">
          <h1>School Development</h1>
          <p>Building better futures through infrastructure improvements and essential resources for schools across Afghanistan</p>
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
                        <p className="program-location">{program.location}</p>
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

      <ProgramNavigation currentProgram="schools" />
    </div>
  )
}

export default SchoolDevelopment

