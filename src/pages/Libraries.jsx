import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react'
import ProgramNavigation from '../components/ProgramNavigation'
import './Libraries.css'

function Libraries() {
  const { t } = useTranslation()
  const baseUrl = import.meta.env.BASE_URL
  const [openLibraries, setOpenLibraries] = useState({})
  const [currentImageIndex, setCurrentImageIndex] = useState({})

  const toggleLibrary = (libraryId) => {
    setOpenLibraries(prev => ({
      ...prev,
      [libraryId]: !prev[libraryId]
    }))
    // Reset carousel to first image when opening
    if (!openLibraries[libraryId]) {
      setCurrentImageIndex(prev => ({
        ...prev,
        [libraryId]: 0
      }))
    }
  }

  const nextImage = (libraryId, totalImages, e) => {
    e.stopPropagation()
    setCurrentImageIndex(prev => ({
      ...prev,
      [libraryId]: ((prev[libraryId] || 0) + 1) % totalImages
    }))
  }

  const prevImage = (libraryId, totalImages, e) => {
    e.stopPropagation()
    setCurrentImageIndex(prev => ({
      ...prev,
      [libraryId]: ((prev[libraryId] || 0) - 1 + totalImages) % totalImages
    }))
  }

  const regions = {
    herat: {
      name: 'Herat',
      libraries: [
        {
          id: 'herat1',
          name: 'Herat Jeabrieal Library',
            thumbnail: `${baseUrl}Libraries/herat-libraries/Herat Jeabrieal Library/img_1739608864521_0-1739608888286-picture.webp`,
          opening: 'N/A',
          provided: 'N/A',
          books: 'N/A',
          images: [
              `${baseUrl}Libraries/herat-libraries/Herat Jeabrieal Library/img_1739608864521_0-1739608888286-picture.webp`,
              `${baseUrl}Libraries/herat-libraries/Herat Jeabrieal Library/img_1739608864521_1-1739608888295-picture.webp`,
              `${baseUrl}Libraries/herat-libraries/Herat Jeabrieal Library/img_1739608864521_2-1739608888295-picture.webp`,
              `${baseUrl}Libraries/herat-libraries/Herat Jeabrieal Library/img_1739608864521_3-1739608888303-picture.webp`,
              `${baseUrl}Libraries/herat-libraries/Herat Jeabrieal Library/img_1739608864521_4-1739608888307-picture.webp`,
              `${baseUrl}Libraries/herat-libraries/Herat Jeabrieal Library/img_1739608864522_5-1739608888315-picture.webp`,
          ]
        },
        {
          id: 'herat2',
          name: 'Herat Khatimul Anbia Library',
            thumbnail: `${baseUrl}Libraries/herat-libraries/Herat Khatimul Anbia Library/img_1744795342855_0-1744795359509-picture.webp`,
          opening: 'N/A',
          provided: 'N/A',
          books: 'N/A',
          images: [
              `${baseUrl}Libraries/herat-libraries/Herat Khatimul Anbia Library/124c2505-4e0a-4c35-ba5c-3b8fc3510707-1744795194197-picture.webp`,
              `${baseUrl}Libraries/herat-libraries/Herat Khatimul Anbia Library/img_1744795342855_0-1744795359509-picture.webp`,
              `${baseUrl}Libraries/herat-libraries/Herat Khatimul Anbia Library/img_1744795342856_1-1744795359521-picture.webp`,
              `${baseUrl}Libraries/herat-libraries/Herat Khatimul Anbia Library/img_1744795342856_2-1744795359549-picture.webp`,
              `${baseUrl}Libraries/herat-libraries/Herat Khatimul Anbia Library/img_1744795342857_3-1744795359558-picture.webp`,
              `${baseUrl}Libraries/herat-libraries/Herat Khatimul Anbia Library/img_1744795342857_4-1744795359564-picture.webp`,
              `${baseUrl}Libraries/herat-libraries/Herat Khatimul Anbia Library/img_1744795342857_5-1744795359617-picture.webp`,
          ]
        },
      ]
    },
    kandahar: {
      name: 'Kandahar',
      libraries: [
        {
          id: 'kandahar1',
          name: 'Kandahar District Nine Library',
            thumbnail: `${baseUrl}Libraries/kandahar-libraries/Kandahar District Nine Library/img_1739615136005_0-1739615142764-picture.webp`,
          opening: 'N/A',
          provided: 'N/A',
          books: 'N/A',
          images: [
              `${baseUrl}Libraries/kandahar-libraries/Kandahar District Nine Library/WhatsApp Image 2024-08-11 at 18-1739615022763-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar District Nine Library/img_1739615136005_0-1739615142764-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar District Nine Library/img_1739615136005_1-1739615142787-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar District Nine Library/img_1739615136006_2-1739615142798-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar District Nine Library/img_1739615136006_4-1739615142830-picture.webp`,
          ]
        },
        {
          id: 'kandahar2',
          name: 'Kandahar Khail Library',
            thumbnail: `${baseUrl}Libraries/kandahar-libraries/Kandahar Khail Library/WhatsApp Image 2025-01-22 at 16-1739606823302-picture.webp`,
          opening: 'N/A',
          provided: 'N/A',
          books: 'N/A',
          images: [
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Khail Library/WhatsApp Image 2025-01-22 at 16-1739606823302-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Khail Library/img_1739607218635_0-1739607238476-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Khail Library/img_1739607218635_1-1739607238481-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Khail Library/img_1739607218636_2-1739607238589-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Khail Library/img_1739607218636_4-1739607238689-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Khail Library/img_1739607218636_5-1739607238690-picture.webp`,
          ]
        },
        {
          id: 'kandahar3',
          name: 'Kandahar Mirwais Mina Library',
            thumbnail: `${baseUrl}Libraries/kandahar-libraries/Kandahar Mirwais Mina Library/img_1739605929297_1-1739605941113-picture.webp`,
          opening: 'N/A',
          provided: 'N/A',
          books: 'N/A',
          images: [
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Mirwais Mina Library/WhatsApp Image 2024-09-14 at 17-1739605498251-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Mirwais Mina Library/img_1739605929297_0-1739605941084-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Mirwais Mina Library/img_1739605929297_1-1739605941113-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Mirwais Mina Library/img_1739605929297_2-1739605941131-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Mirwais Mina Library/img_1739605929297_3-1739605941145-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Mirwais Mina Library/img_1739605929297_4-1739605941175-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Mirwais Mina Library/img_1739605929298_5-1739605941189-picture.webp`,
          ]
        },
        {
          id: 'kandahar4',
          name: 'Kandahar Topkhana Library',
            thumbnail: `${baseUrl}Libraries/kandahar-libraries/Kandahar Topkhana Library/WhatsApp Image 2024-08-15 at 09-1739597041986-picture.webp`,
          opening: 'N/A',
          provided: 'N/A',
          books: 'N/A',
          images: [
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Topkhana Library/WhatsApp Image 2024-08-15 at 09-1739597041986-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Topkhana Library/img_1739597425945_0-1739597443234-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Topkhana Library/img_1739597425946_1-1739597443270-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Topkhana Library/img_1739597425946_2-1739597443290-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Kandahar Topkhana Library/img_1739597425946_3-1739597443302-picture.webp`,
          ]
        },
        {
          id: 'kandahar5',
          name: 'Karte Malimin Library',
            thumbnail: `${baseUrl}Libraries/kandahar-libraries/Karte Malimin Library/img_1739609235735_0-1739609256710-picture.webp`,
          opening: 'N/A',
          provided: 'N/A',
          books: 'N/A',
          images: [
              `${baseUrl}Libraries/kandahar-libraries/Karte Malimin Library/WhatsApp Image 2024-08-07 at 18-1739608960418-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Karte Malimin Library/img_1739609235735_0-1739609256710-picture.webp`,
              `${baseUrl}Libraries/kandahar-libraries/Karte Malimin Library/img_1739609235735_1-1739609256728-picture.webp`,
          ]
        },
      ]
    },
    helmand: {
      name: 'Helmand',
      libraries: [
        {
          id: 'helmand1',
          name: 'Helmand Beit One Library',
            thumbnail: `${baseUrl}Libraries/helmand-libraries/Helmand Beit One Library/img_1739607856347_0-1739607865659-picture.webp`,
          opening: 'N/A',
          provided: 'N/A',
          books: 'N/A',
          images: [
              `${baseUrl}Libraries/helmand-libraries/Helmand Beit One Library/img_1739607856347_0-1739607865659-picture.webp`,
              `${baseUrl}Libraries/helmand-libraries/Helmand Beit One Library/img_1739607856347_1-1739607865718-picture.webp`,
              `${baseUrl}Libraries/helmand-libraries/Helmand Beit One Library/img_1739607856347_2-1739607865729-picture.webp`,
              `${baseUrl}Libraries/helmand-libraries/Helmand Beit One Library/img_1739607856347_3-1739607865741-picture.webp`,
              `${baseUrl}Libraries/helmand-libraries/Helmand Beit One Library/img_1739607856347_4-1739607865764-picture.webp`,
          ]
        },
      ]
    },
    bamian: {
      name: 'Bamian',
      libraries: [
        {
          id: 'bamian1',
          name: 'Bamian Library',
            thumbnail: `${baseUrl}Libraries/bamian-libraries/Bamian Library/img_1744795712557_0-1744795717182-picture.webp`,
          opening: 'N/A',
          provided: 'N/A',
          books: 'N/A',
          images: [
              `${baseUrl}Libraries/bamian-libraries/Bamian Library/3b74d31c-2596-4392-8dcb-ef633214b376-1744791003305-picture.webp`,
              `${baseUrl}Libraries/bamian-libraries/Bamian Library/img_1744795712557_0-1744795717182-picture.webp`,
              `${baseUrl}Libraries/bamian-libraries/Bamian Library/img_1744795712557_1-1744795717325-picture.webp`,
              `${baseUrl}Libraries/bamian-libraries/Bamian Library/img_1744795712557_3-1744795717388-picture.webp`,
          ]
        },
      ]
    },
    ghazni: {
      name: 'Ghazni',
      libraries: [
        {
          id: 'ghazni1',
          name: 'Ghazni Jaghori Library',
            thumbnail: `${baseUrl}Libraries/ghazni-libraries/Ghazni Jaghori Library/WhatsApp Image 2024-09-16 at 09-1739606037270-picture.webp`,
          opening: 'N/A',
          provided: 'N/A',
          books: 'N/A',
          images: [
              `${baseUrl}Libraries/ghazni-libraries/Ghazni Jaghori Library/WhatsApp Image 2024-09-16 at 09-1739606037270-picture.webp`,
              `${baseUrl}Libraries/ghazni-libraries/Ghazni Jaghori Library/img_1739606653630_0-1739606663246-picture.webp`,
              `${baseUrl}Libraries/ghazni-libraries/Ghazni Jaghori Library/img_1739606653630_1-1739606663258-picture.webp`,
              `${baseUrl}Libraries/ghazni-libraries/Ghazni Jaghori Library/img_1739606653630_2-1739606663261-picture.webp`,
              `${baseUrl}Libraries/ghazni-libraries/Ghazni Jaghori Library/img_1739606653630_3-1739606663275-picture.webp`,
              `${baseUrl}Libraries/ghazni-libraries/Ghazni Jaghori Library/img_1739606653630_4-1739606663275-picture.webp`,
              `${baseUrl}Libraries/ghazni-libraries/Ghazni Jaghori Library/img_1739606653630_5-1739606663277-picture.webp`,
          ]
        },
      ]
    }
  }

  return (
    <div className="libraries-page">
      <section className="page-hero">
        <div className="container">
          <h1>Libraries</h1>
          <p>Promoting literacy and knowledge through accessible library resources across Afghanistan</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="regions-container">
            {Object.entries(regions).map(([regionKey, region]) => (
              <div key={regionKey} className="region-section">
                <h2 className="region-title">{region.name}</h2>
                
                {region.libraries.length > 0 ? (
                  <div className="libraries-grid">
                    {region.libraries.map((library) => {
                      const currentIndex = currentImageIndex[library.id] || 0
                      const currentImage = library.images[currentIndex]
                      const totalImages = library.images.length
                      
                      return (
                        <div key={library.id} className="library-card">
                          <div 
                            className="library-header"
                            onClick={() => toggleLibrary(library.id)}
                          >
                            <div className="library-header-content">
                              <img src={library.thumbnail} alt={library.name} className="library-thumbnail" />
                              <h3 className="library-name">{library.name}</h3>
                            </div>
                            <button className="toggle-button" aria-label="Toggle details">
                              {openLibraries[library.id] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                            </button>
                          </div>
                          
                          {openLibraries[library.id] && (
                            <div className="library-details">
                              <div className="carousel-container">
                                <img src={currentImage} alt={`${library.name} - Image ${currentIndex + 1}`} className="library-full-image" />
                                
                                {totalImages > 1 && (
                                  <>
                                    <button 
                                      className="carousel-button carousel-button-prev"
                                      onClick={(e) => prevImage(library.id, totalImages, e)}
                                      aria-label="Previous image"
                                    >
                                      <ChevronLeft size={32} />
                                    </button>
                                    <button 
                                      className="carousel-button carousel-button-next"
                                      onClick={(e) => nextImage(library.id, totalImages, e)}
                                      aria-label="Next image"
                                    >
                                      <ChevronRight size={32} />
                                    </button>
                                    <div className="carousel-indicators">
                                      {library.images.map((_, index) => (
                                        <span 
                                          key={index}
                                          className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            setCurrentImageIndex(prev => ({ ...prev, [library.id]: index }))
                                          }}
                                        />
                                      ))}
                                    </div>
                                  </>
                                )}
                              </div>
                              <div className="library-info">
                                <p><strong>Province:</strong> {region.name}</p>
                                {library.opening && library.opening !== 'N/A' && <p><strong>Opening:</strong> {library.opening}</p>}
                                {library.provided && library.provided !== 'N/A' && <p><strong>Provided:</strong> {library.provided}</p>}
                                {library.books && library.books !== 'N/A' && <p><strong>Books:</strong> {library.books}</p>}
                                <p><strong>Status:</strong> Active</p>
                                <p><strong>Gallery:</strong> {totalImages} {totalImages === 1 ? 'photo' : 'photos'}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <p className="no-libraries">No libraries available in this region yet.</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProgramNavigation currentProgram="libraries" />
    </div>
  )
}

export default Libraries

