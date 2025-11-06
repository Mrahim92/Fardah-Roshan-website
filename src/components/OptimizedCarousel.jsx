import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import OptimizedImage from './OptimizedImage'
import './OptimizedCarousel.css'

/**
 * OptimizedCarousel Component
 * 
 * Features:
 * - Only loads current and adjacent images (reduces initial load)
 * - Preloads next/previous images for smooth transitions
 * - Lazy loads non-visible images
 * - Supports RTL languages
 * - Touch/swipe support
 * - Keyboard navigation
 */

function OptimizedCarousel({ 
  images = [], 
  alt = '', 
  className = '',
  isRTL = false 
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('next')
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const totalImages = images.length

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  const nextImage = (e) => {
    if (e) e.stopPropagation()
    setDirection(isRTL ? 'prev' : 'next')
    setCurrentIndex((prev) => (prev + 1) % totalImages)
  }

  const prevImage = (e) => {
    if (e) e.stopPropagation()
    setDirection(isRTL ? 'next' : 'prev')
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages)
  }

  const goToImage = (index, e) => {
    if (e) e.stopPropagation()
    setDirection(index > currentIndex ? 'next' : 'prev')
    setCurrentIndex(index)
  }

  // Touch handlers for swipe
  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      isRTL ? prevImage() : nextImage()
    }
    if (isRightSwipe) {
      isRTL ? nextImage() : prevImage()
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        isRTL ? nextImage() : prevImage()
      } else if (e.key === 'ArrowRight') {
        isRTL ? prevImage() : nextImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isRTL])

  // Determine which images to load
  const shouldLoadImage = (index) => {
    // Always load current image
    if (index === currentIndex) return true
    
    // Load adjacent images for smooth transitions
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages
    const nextIndex = (currentIndex + 1) % totalImages
    
    return index === prevIndex || index === nextIndex
  }

  if (totalImages === 0) {
    return <div className="carousel-empty">No images available</div>
  }

  if (totalImages === 1) {
    return (
      <div className={`optimized-carousel single-image ${className}`}>
        <OptimizedImage 
          src={images[0]}
          alt={alt}
          loading="eager"
          priority={true}
          aspectRatio="16/9"
          objectFit="cover"
        />
      </div>
    )
  }

  return (
    <div 
      className={`optimized-carousel ${className}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Images */}
      <div className="carousel-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''} ${
              index === currentIndex ? `slide-${direction}` : ''
            }`}
          >
            {shouldLoadImage(index) ? (
              <OptimizedImage 
                src={image}
                alt={`${alt} - Image ${index + 1}`}
                loading={index === currentIndex ? 'eager' : 'lazy'}
                priority={index === currentIndex}
                aspectRatio="16/9"
                objectFit="cover"
              />
            ) : (
              <div className="carousel-placeholder" />
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="carousel-button carousel-button-prev"
        onClick={prevImage}
        aria-label="Previous image"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        className="carousel-button carousel-button-next"
        onClick={nextImage}
        aria-label="Next image"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={(e) => goToImage(index, e)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default OptimizedCarousel

