import { useTranslation } from 'react-i18next'
import './VideoGallery.css'

function VideoGallery() {
  const { t } = useTranslation()
  const videos = [
    { name: 'Amir Shir Ali Khan School', file: 'Amir Shir ali khan school vidio -1742116663804-video.mp4' },
    { name: 'Ashrafulbilad School Computer Lab', file: 'Ashrafulbilad school vidio of computer lab-1744783406022-video.mp4' },
    { name: 'Bamiyan Library', file: 'Bamian Library vidio-1742117033115-video.mp4' },
  ]

  return (
    <div className="video-gallery-page">
      <section className="page-hero">
        <div className="container">
          <h1>{t('gallery.videoTitle')}</h1>
          <p>{t('gallery.videoSubtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="video-grid">
            {videos.map((video, index) => (
              <div key={index} className="video-item card">
                <h3 className="video-title">{video.name}</h3>
                <video controls className="video-player">
                  <source src={`/Video Gallery/${video.file}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default VideoGallery

