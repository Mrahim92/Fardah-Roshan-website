import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { X } from 'lucide-react'
import './PhotoGallery.css'

function PhotoGallery() {
  const { t } = useTranslation()
  const [lightboxImage, setLightboxImage] = useState(null)

  // Sample photo gallery - first 20 images from Photo Gallery folder
  const photos = [
    '/Photo Gallery/WhatsApp Image 2024-08-04 at 17-1738498863522-image.webp',
    '/Photo Gallery/WhatsApp Image 2024-08-04 at 18-1738498863490-image.webp',
    '/Photo Gallery/WhatsApp Image 2024-08-05 at 11-1738498863479-image.webp',
    '/Photo Gallery/WhatsApp Image 2024-08-07 at 19-1739625987054-image.webp',
    '/Photo Gallery/WhatsApp Image 2024-08-11 at 18-1739625987038-image.webp',
    '/Photo Gallery/WhatsApp Image 2024-08-15 at 09-1739625987192-image.webp',
    '/Photo Gallery/WhatsApp Image 2024-08-17 at 14-1739625987002-image.webp',
    '/Photo Gallery/WhatsApp Image 2024-08-31 at 11-1739626116217-image.webp',
    '/Photo Gallery/WhatsApp Image 2024-08-31 at 15-1739626116257-image.webp',
    '/Photo Gallery/WhatsApp Image 2024-09-14 at 17-1739625987182-image.webp',
    '/Photo Gallery/WhatsApp Image 2024-12-05 at 18-1739626116276-image.webp',
    '/Photo Gallery/WhatsApp Image 2025-01-22 at 16-1739625987176-image.webp',
  ]

  const openLightbox = (image) => {
    setLightboxImage(image)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  return (
    <div className="photo-gallery-page">
      <section className="page-hero">
        <div className="container">
          <h1>{t('gallery.photoTitle')}</h1>
          <p>{t('gallery.photoSubtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="photo-grid">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="photo-item"
                onClick={() => openLightbox(photo)}
              >
                <img src={photo} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightboxImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          <img src={lightboxImage} alt="Lightbox" className="lightbox-image" />
        </div>
      )}
    </div>
  )
}

export default PhotoGallery

