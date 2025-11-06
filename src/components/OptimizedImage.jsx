import { useState, useEffect, useRef } from 'react'
import './OptimizedImage.css'

/**
 * OptimizedImage Component
 * 
 * Features:
 * - Lazy loading (only loads when in viewport)
 * - Blur-up placeholder effect
 * - Loading skeleton
 * - Error handling with fallback
 * - Responsive srcset support
 * - Fade-in animation when loaded
 */

function OptimizedImage({ 
  src, 
  alt = '', 
  className = '',
  loading = 'lazy', // 'lazy' | 'eager'
  aspectRatio, // e.g., '16/9' or '4/3'
  sizes, // responsive sizes attribute
  srcSet, // responsive srcset
  priority = false, // if true, loads immediately
  onLoad,
  onError,
  fallbackSrc = null,
  objectFit = 'cover', // 'cover' | 'contain' | 'fill'
}) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(priority ? src : null)
  const imgRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    // If priority, load immediately
    if (priority) {
      setCurrentSrc(src)
      return
    }

    // If loading is eager, load immediately
    if (loading === 'eager') {
      setCurrentSrc(src)
      return
    }

    // Otherwise, use Intersection Observer for lazy loading
    if (!imgRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSrc(src)
            if (observerRef.current && imgRef.current) {
              observerRef.current.unobserve(imgRef.current)
            }
          }
        })
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.01
      }
    )

    observer.observe(imgRef.current)
    observerRef.current = observer

    return () => {
      if (observerRef.current && imgRef.current) {
        observerRef.current.unobserve(imgRef.current)
      }
    }
  }, [src, priority, loading])

  const handleLoad = (e) => {
    setImageLoaded(true)
    if (onLoad) onLoad(e)
  }

  const handleError = (e) => {
    setImageError(true)
    if (fallbackSrc) {
      setCurrentSrc(fallbackSrc)
      setImageError(false)
    }
    if (onError) onError(e)
  }

  return (
    <div 
      ref={imgRef}
      className={`optimized-image-wrapper ${className}`}
      style={{ aspectRatio }}
    >
      {/* Loading skeleton */}
      {!imageLoaded && !imageError && (
        <div className="image-skeleton" />
      )}

      {/* Actual image */}
      {currentSrc && !imageError && (
        <img
          src={currentSrc}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          className={`optimized-image ${imageLoaded ? 'loaded' : ''}`}
          style={{ objectFit }}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
          decoding="async"
        />
      )}

      {/* Error fallback */}
      {imageError && !fallbackSrc && (
        <div className="image-error">
          <span>Image unavailable</span>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage

