import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react'
import ProgramNavigation from '../components/ProgramNavigation'
import './ComputerLabs.css'

function ComputerLabs() {
  const { t } = useTranslation()
  const [openLabs, setOpenLabs] = useState({})
  const [currentImageIndex, setCurrentImageIndex] = useState({})

  const toggleLab = (labId) => {
    setOpenLabs(prev => ({
      ...prev,
      [labId]: !prev[labId]
    }))
    // Reset carousel to first image when opening
    if (!openLabs[labId]) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [labId]: 0
      }))
    }
  }

  const nextImage = (labId, totalImages, e) => {
    e.stopPropagation()
    setCurrentImageIndex(prev => ({
      ...prev,
      [labId]: ((prev[labId] || 0) + 1) % totalImages
    }))
  }

  const prevImage = (labId, totalImages, e) => {
    e.stopPropagation()
    setCurrentImageIndex(prev => ({
      ...prev,
      [labId]: ((prev[labId] || 0) - 1 + totalImages) % totalImages
    }))
  }

  const regions = {
    kandahar: {
      name: 'Kandahar',
      labs: [
        { 
          id: 'k1', 
          name: 'Ashraf Al-Bilad Academy Computer Lab', 
          thumbnail: '/kandahar/ashraf-al-bilad/lab-kandahar-ashraf-al-bilad.webp',
          opening: '9/2/24',
          provided: 'Computers',
          femaleStudents: 'N/A',
          maleStudents: 'N/A',
          fundedPrograms: 'N/A',
          images: [
            '/kandahar/ashraf-al-bilad/lab-kandahar-ashraf-al-bilad.webp',
            '/kandahar/ashraf-al-bilad/img_1742112690090_0-1742112708698-picture.webp',
            '/kandahar/ashraf-al-bilad/img_1742112690090_1-1742112708700-picture.webp',
            '/kandahar/ashraf-al-bilad/img_1742112690090_2-1742112708711-picture.webp',
            '/kandahar/ashraf-al-bilad/img_1742112690090_3-1742112708762-picture.webp',
            '/kandahar/ashraf-al-bilad/img_1742112690090_4-1742112708765-picture.webp',
            '/kandahar/ashraf-al-bilad/img_1742112690090_5-1742112708799-picture.webp',
            '/kandahar/ashraf-al-bilad/img_1742112690091_6-1742112708833-picture.webp',
            '/kandahar/ashraf-al-bilad/img_1742112690091_7-1742112708835-picture.webp',
            '/kandahar/ashraf-al-bilad/img_1742112690091_8-1742112708844-picture.webp',
            '/kandahar/ashraf-al-bilad/img_1742112690091_9-1742112708845-picture.webp',
            '/kandahar/ashraf-al-bilad/img_1742112690091_10-1742112708855-picture.webp',
            '/kandahar/ashraf-al-bilad/img_1742112690091_11-1742112708858-picture.webp',
            '/kandahar/ashraf-al-bilad/img_1742112690091_12-1742112708859-picture.webp',
            '/kandahar/ashraf-al-bilad/img_1742112690091_13-1742112708867-picture.webp',
            '/kandahar/ashraf-al-bilad/img_1742112690091_14-1742112708870-picture.webp',
            '/kandahar/ashraf-al-bilad/img_1742112690091_15-1742112708882-picture.webp',
            '/kandahar/ashraf-al-bilad/img_1742112690092_16-1742112708916-picture.webp',
          ]
        },
        { 
          id: 'k2', 
          name: 'Amir Sher Ali Khan Private High School Computer Lab', 
          thumbnail: '/kandahar/amir-sher-ali/lab-kandahar-amir-sher-ali.webp',
          opening: '2/27/25',
          provided: '18 desktop computers and renovation of the school, including classroom painting and the construction of new doors',
          femaleStudents: 'N/A',
          maleStudents: 'N/A',
          fundedPrograms: 'N/A',
          images: [
            '/kandahar/amir-sher-ali/lab-kandahar-amir-sher-ali.webp',
            '/kandahar/amir-sher-ali/img_1742113616629_0-1742113667069-picture.webp',
            '/kandahar/amir-sher-ali/img_1742113616629_1-1742113667157-picture.webp',
            '/kandahar/amir-sher-ali/img_1742113616629_2-1742113667424-picture.webp',
            '/kandahar/amir-sher-ali/img_1742113616630_3-1742113667570-picture.webp',
            '/kandahar/amir-sher-ali/img_1742113616630_4-1742113667646-picture.webp',
            '/kandahar/amir-sher-ali/img_1742113616630_5-1742113667665-picture.webp',
            '/kandahar/amir-sher-ali/img_1742113616630_6-1742113667675-picture.webp',
            '/kandahar/amir-sher-ali/img_1742113616630_7-1742113667680-picture.webp',
            '/kandahar/amir-sher-ali/img_1742113616630_8-1742113667704-picture.webp',
            '/kandahar/amir-sher-ali/img_1742113616630_9-1742113667731-picture.webp',
            '/kandahar/amir-sher-ali/img_1742113616631_10-1742113667763-picture.webp',
            '/kandahar/amir-sher-ali/img_1742113616631_11-1742113667890-picture.webp',
            '/kandahar/amir-sher-ali/img_1742113616631_12-1742113667973-picture.webp',
            '/kandahar/amir-sher-ali/img_1742113616631_13-1742113667982-picture.webp',
            '/kandahar/amir-sher-ali/img_1742113616631_14-1742113668053-picture.webp',
          ]
        },
        { 
          id: 'k6', 
          name: 'Jame Jam Secondary School Computer Lab', 
          thumbnail: '/kandahar/jame-jam/lab-kandahar-jame-jam.webp',
          opening: '3/15/22',
          provided: '20 computers; free internet (2 years) with routers/networking; basic computer training for teachers; full furniture/equipment incl. plasma screen; 2 kW electricity supply with battery backup and 6-panel solar lighting',
          femaleStudents: '180',
          maleStudents: '145',
          fundedPrograms: 'Basic computer training for 7 female + 6 male teachers (2 months)',
          images: [
            '/kandahar/jame-jam/lab-kandahar-jame-jam.webp',
            '/kandahar/jame-jam/img_1739601739548_0-1739601770752-picture.webp',
            '/kandahar/jame-jam/img_1739601739549_1-1739601770999-picture.webp',
            '/kandahar/jame-jam/img_1739601739549_2-1739601771091-picture.webp',
            '/kandahar/jame-jam/img_1739601739549_3-1739601771261-picture.webp',
            '/kandahar/jame-jam/img_1739601739549_4-1739601771454-picture.webp',
            '/kandahar/jame-jam/img_1739601739549_5-1739601772493-picture.webp',
            '/kandahar/jame-jam/img_1739601739549_6-1739601773144-picture.webp',
            '/kandahar/jame-jam/img_1739601739549_7-1739601773159-picture.webp',
            '/kandahar/jame-jam/img_1739601739549_8-1739601773497-picture.webp',
          ]
        },
        { 
          id: 'k5', 
          name: 'Estianat Private School Computer Lab', 
          thumbnail: '/kandahar/estianat/lab-kandahar-estianat.webp',
          opening: '10/20/20',
          provided: '20 computers',
          femaleStudents: 'N/A',
          maleStudents: '450',
          fundedPrograms: 'N/A',
          images: [
            '/kandahar/estianat/lab-kandahar-estianat.webp',
            '/kandahar/estianat/img_1739602075533_0-1739602081715-picture.webp',
            '/kandahar/estianat/img_1739602075533_1-1739602081718-picture.webp',
            '/kandahar/estianat/img_1739602075533_2-1739602081728-picture.webp',
            '/kandahar/estianat/img_1739602075533_3-1739602081752-picture.webp',
          ]
        },
        { 
          id: 'k4', 
          name: 'Behsat Secondary School Computer Lab', 
          thumbnail: '/kandahar/behsat/lab-kandahar-behsat.webp',
          opening: '3/15/22',
          provided: '20 computers, free internet access (2 years), routers, networking devices, furniture, paint, and basic computer training for 10 female teachers (2 months)',
          femaleStudents: '200',
          maleStudents: '150',
          fundedPrograms: 'Basic computer training for 10 female teachers',
          images: [
            '/kandahar/behsat/lab-kandahar-behsat.webp',
            '/kandahar/behsat/img_1739604308983_0-1739604316474-picture.webp',
            '/kandahar/behsat/img_1739604308983_1-1739604316498-picture.webp',
            '/kandahar/behsat/img_1739604308983_2-1739604316544-picture.webp',
            '/kandahar/behsat/img_1739604308983_3-1739604316750-picture.webp',
            '/kandahar/behsat/img_1739604308983_4-1739604316820-picture.webp',
            '/kandahar/behsat/img_1739604308984_5-1739604316833-picture.webp',
            '/kandahar/behsat/img_1739604308984_6-1739604316859-picture.webp',
            '/kandahar/behsat/img_1739604308984_7-1739604316873-picture.webp',
            '/kandahar/behsat/img_1739604308984_8-1739604316891-picture.webp',
            '/kandahar/behsat/img_1739604308984_9-1739604316915-picture.webp',
            '/kandahar/behsat/img_1739604308984_10-1739604316922-picture.webp',
          ]
        },
        { 
          id: 'k7', 
          name: 'Basharat Secondary School Computer Lab', 
          thumbnail: '/kandahar/basharat/lab-kandahar-basharat.webp',
          opening: '1/1/23',
          provided: '24 computers; internet (2 years) with routers/networking; furniture/equipment and TV',
          femaleStudents: '400',
          maleStudents: '350',
          fundedPrograms: 'Basic computer training for 24 female teachers (2 months)',
          images: [
            '/kandahar/basharat/lab-kandahar-basharat.webp',
            '/kandahar/basharat/img_1739600540508_0-1739600550260-picture.webp',
            '/kandahar/basharat/img_1739600540509_1-1739600550325-picture.webp',
            '/kandahar/basharat/img_1739600540509_2-1739600550357-picture.webp',
            '/kandahar/basharat/img_1739600540509_4-1739600550391-picture.webp',
            '/kandahar/basharat/img_1739600540509_5-1739600550432-picture.webp',
          ]
        },
        { 
          id: 'k8', 
          name: 'Farmoz Primary School Computer Lab', 
          thumbnail: '/kandahar/faramoz/lab-kandahar-faramoz.webp',
          opening: '8/14/23',
          provided: '14 computers; internet and routers',
          femaleStudents: '95',
          maleStudents: '55',
          fundedPrograms: 'N/A',
          images: [
            '/kandahar/faramoz/lab-kandahar-faramoz.webp',
            '/kandahar/faramoz/img_1739599660614_0-1739599675597-picture.webp',
            '/kandahar/faramoz/img_1739599660614_1-1739599675633-picture.webp',
            '/kandahar/faramoz/img_1739599660614_2-1739599675638-picture.webp',
            '/kandahar/faramoz/img_1739599660614_3-1739599675649-picture.webp',
            '/kandahar/faramoz/img_1739599660614_4-1739599675659-picture.webp',
          ]
        },
        { 
          id: 'k3', 
          name: 'Hazrat Ali Madrasa Computer Lab', 
          thumbnail: '/fra-logo.webp',
          opening: '10/1/23',
          provided: '8 computers',
          femaleStudents: '250',
          maleStudents: 'N/A',
          fundedPrograms: 'N/A',
          images: ['/fra-logo.webp']
        },
        { 
          id: 'k9', 
          name: 'Noor Zuhra Madrasa Computer Lab', 
          thumbnail: '/kandahar/noor-ul-zuhra/img_1742110918235_2-1742110923297-picture.webp',
          opening: '2/25/25',
          provided: '10 computers, tables, electricity',
          femaleStudents: 'N/A',
          maleStudents: 'N/A',
          fundedPrograms: 'N/A',
          images: [
            '/kandahar/noor-ul-zuhra/img_1742110918235_2-1742110923297-picture.webp',
            '/kandahar/noor-ul-zuhra/img_1742110918235_0-1742110923286-picture.webp',
            '/kandahar/noor-ul-zuhra/img_1742110918235_1-1742110923293-picture.webp',
            '/kandahar/noor-ul-zuhra/lab-kandahar-noor-ul-zuhra.webp',
            '/kandahar/noor-ul-zuhra/img_1742110918235_4-1742110923441-picture.webp',
            '/kandahar/noor-ul-zuhra/img_1742110918236_5-1742110923463-picture.webp',
            '/kandahar/noor-ul-zuhra/img_1742110918236_6-1742110923531-picture.webp',
          ]
        },
      ]
    },
    helmand: {
      name: 'Helmand',
      labs: [
        { 
          id: 'h1', 
          name: 'Mohammadia Madrasa Computer Lab', 
          thumbnail: '/helmand/mohmmadia/lab-helmand-mohmmadia.webp',
          opening: '5/9/25',
          provided: '16 desktop computers and renovation works for the school, including desks for classrooms and the electrical system.',
          femaleStudents: 'N/A',
          maleStudents: 'N/A',
          fundedPrograms: 'N/A',
          images: [
            '/helmand/mohmmadia/lab-helmand-mohmmadia.webp',
            '/helmand/mohmmadia/img_1747286092237_0-1747286105462-picture.webp',
            '/helmand/mohmmadia/img_1747286092237_1-1747286105520-picture.webp',
            '/helmand/mohmmadia/img_1747286092237_2-1747286105599-picture.webp',
            '/helmand/mohmmadia/img_1747286092237_3-1747286105622-picture.webp',
            '/helmand/mohmmadia/img_1747286092238_4-1747286105623-picture.webp',
            '/helmand/mohmmadia/img_1747286092238_5-1747286105730-picture.webp',
            '/helmand/mohmmadia/img_1747286092238_6-1747286105856-picture.webp',
            '/helmand/mohmmadia/img_1747286092238_7-1747286106181-picture.webp',
            '/helmand/mohmmadia/img_1747286092238_8-1747286106340-picture.webp',
            '/helmand/mohmmadia/img_1747286092238_9-1747286106442-picture.webp',
            '/helmand/mohmmadia/img_1747286092238_10-1747286106486-picture.webp',
            '/helmand/mohmmadia/img_1747286092238_11-1747286106521-picture.webp',
          ]
        },
        { 
          id: 'h2', 
          name: 'Rushd High School Computer Lab', 
          thumbnail: '/helmand/rushid/lab-helmand-rushid.webp',
          opening: '3/15/23',
          provided: '24 computers; free internet (4 months)',
          femaleStudents: '450',
          maleStudents: '600',
          fundedPrograms: 'N/A',
          images: [
            '/helmand/rushid/lab-helmand-rushid.webp',
            '/helmand/rushid/img_1739598779694_0-1739598802534-picture.webp',
            '/helmand/rushid/img_1739598779694_1-1739598802540-picture.webp',
            '/helmand/rushid/img_1739598779694_2-1739598802587-picture.webp',
            '/helmand/rushid/img_1739598779694_3-1739598802589-picture.webp',
            '/helmand/rushid/img_1739598779694_4-1739598802591-picture.webp',
            '/helmand/rushid/img_1739598779694_5-1739598802593-picture.webp',
            '/helmand/rushid/img_1739598779694_6-1739598802594-picture.webp',
            '/helmand/rushid/img_1739598779694_7-1739598802595-picture.webp',
            '/helmand/rushid/img_1739598779695_8-1739598802688-picture.webp',
            '/helmand/rushid/img_1739598779695_9-1739598802690-picture.webp',
          ]
        },
        { 
          id: 'h3', 
          name: 'Mashal Noor High School Computer Lab', 
          thumbnail: '/helmand/mashal-noor/lab-helmand-mashal-noor.webp',
          opening: '8/1/24',
          provided: '24 computers',
          femaleStudents: '355',
          maleStudents: '719',
          fundedPrograms: 'N/A',
          images: [
            '/helmand/mashal-noor/lab-helmand-mashal-noor.webp',
            '/helmand/mashal-noor/img_1739600116618_0-1739600129556-picture.webp',
            '/helmand/mashal-noor/img_1739600116618_1-1739600129841-picture.webp',
            '/helmand/mashal-noor/img_1739600116618_2-1739600129857-picture.webp',
            '/helmand/mashal-noor/img_1739600116618_3-1739600130337-picture.webp',
            '/helmand/mashal-noor/img_1739600116618_4-1739600130674-picture.webp',
            '/helmand/mashal-noor/img_1739600116618_5-1739600130713-picture.webp',
          ]
        },
        { 
          id: 'h4', 
          name: 'Khana Marefat Secondary School Computer Lab', 
          thumbnail: '/helmand/khana-marefat/lab-helmand-khana-marefat.webp',
          opening: '2/18/24',
          provided: '20 computers; internet, routers, and other networking equipment',
          femaleStudents: '300',
          maleStudents: '300',
          fundedPrograms: 'N/A',
          images: [
            '/helmand/khana-marefat/lab-helmand-khana-marefat.webp',
            '/helmand/khana-marefat/img_1739599307411_0-1739599347698-picture.webp',
            '/helmand/khana-marefat/img_1739599307412_1-1739599347806-picture.webp',
            '/helmand/khana-marefat/img_1739599307412_2-1739599347862-picture.webp',
            '/helmand/khana-marefat/img_1739599307412_3-1739599347865-picture.webp',
            '/helmand/khana-marefat/img_1739599307412_4-1739599347889-picture.webp',
            '/helmand/khana-marefat/img_1739599307412_5-1739599347891-picture.webp',
            '/helmand/khana-marefat/img_1739599307412_6-1739599347930-picture.webp',
          ]
        },
      ]
    }
  }

  return (
    <div className="computer-labs-page">
      <section className="page-hero">
        <div className="container">
          <h1>Computer Labs</h1>
          <p>Empowering students with technology and digital literacy across Afghanistan</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="regions-container">
            {Object.entries(regions).map(([regionKey, region]) => (
              <div key={regionKey} className="region-section">
                <h2 className="region-title">{region.name}</h2>
                
                <div className="labs-grid">
                  {region.labs.map((lab) => {
                    const currentIndex = currentImageIndex[lab.id] || 0
                    const currentImage = lab.images[currentIndex]
                    const totalImages = lab.images.length
                    
                    return (
                      <div key={lab.id} className="lab-card">
                        <div 
                          className="lab-header"
                          onClick={() => toggleLab(lab.id)}
                        >
                          <div className="lab-header-content">
                            <img src={lab.thumbnail} alt={lab.name} className="lab-thumbnail" />
                            <h3 className="lab-name">{lab.name}</h3>
                          </div>
                          <button className="toggle-button" aria-label="Toggle details">
                            {openLabs[lab.id] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                          </button>
                        </div>
                        
                        {openLabs[lab.id] && (
                          <div className="lab-details">
                            <div className="carousel-container">
                              <img src={currentImage} alt={`${lab.name} - Image ${currentIndex + 1}`} className="lab-full-image" />
                              
                              {totalImages > 1 && (
                                <>
                                  <button 
                                    className="carousel-button carousel-button-prev"
                                    onClick={(e) => prevImage(lab.id, totalImages, e)}
                                    aria-label="Previous image"
                                  >
                                    <ChevronLeft size={32} />
                                  </button>
                                  <button 
                                    className="carousel-button carousel-button-next"
                                    onClick={(e) => nextImage(lab.id, totalImages, e)}
                                    aria-label="Next image"
                                  >
                                    <ChevronRight size={32} />
                                  </button>
                                  <div className="carousel-indicators">
                                    {lab.images.map((_, index) => (
                                      <span 
                                        key={index}
                                        className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          setCurrentImageIndex(prev => ({ ...prev, [lab.id]: index }))
                                        }}
                                      />
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>
                            <div className="lab-info">
                              <p><strong>Province:</strong> {region.name}</p>
                              {lab.opening && lab.opening !== 'N/A' && <p><strong>Opening:</strong> {lab.opening}</p>}
                              {lab.provided && lab.provided !== 'N/A' && <p><strong>Provided:</strong> {lab.provided}</p>}
                              {lab.femaleStudents && lab.femaleStudents !== 'N/A' && <p><strong>Female Students:</strong> {lab.femaleStudents}</p>}
                              {lab.maleStudents && lab.maleStudents !== 'N/A' && <p><strong>Male Students:</strong> {lab.maleStudents}</p>}
                              {lab.fundedPrograms && lab.fundedPrograms !== 'N/A' && <p><strong>Funded Programs:</strong> {lab.fundedPrograms}</p>}
                              <p><strong>Status:</strong> Active</p>
                              <p><strong>Gallery:</strong> {totalImages} {totalImages === 1 ? 'photo' : 'photos'}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProgramNavigation currentProgram="computer-labs" />
    </div>
  )
}

export default ComputerLabs

