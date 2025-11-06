# Update Pattern for All Program Pages with Carousels

This document shows the pattern to apply to all program pages that use carousels.

## Pages to Update:
1. ✅ ComputerLabs.jsx - DONE
2. Libraries.jsx
3. Microschools.jsx
4. OnlineClasses.jsx
5. StudentSupport.jsx
6. SchoolDevelopment.jsx

## Changes to Make:

### 1. Update Imports
**Remove:**
```javascript
import { ChevronLeft, ChevronRight } from 'lucide-react'
```

**Add:**
```javascript
import OptimizedCarousel from '../components/OptimizedCarousel'
```

### 2. Remove Carousel State Management
**Remove:**
```javascript
const [currentImageIndex, setCurrentImageIndex] = useState({})
```

**Remove these functions:**
```javascript
const nextImage = (id, totalImages, e) => { ... }
const prevImage = (id, totalImages, e) => { ... }
```

**Simplify toggleItem function:**
```javascript
// OLD:
const toggleItem = (itemId) => {
  setOpenItems(prev => ({ ...prev, [itemId]: !prev[itemId] }))
  if (!openItems[itemId]) {
    setCurrentImageIndex(prev => ({ ...prev, [itemId]: 0 }))
  }
}

// NEW:
const toggleItem = (itemId) => {
  setOpenItems(prev => ({ ...prev, [itemId]: !prev[itemId] }))
}
```

### 3. Replace Carousel Rendering
**OLD:**
```javascript
const currentIndex = currentImageIndex[item.id] || 0
const currentImage = item.images[currentIndex]
const totalImages = item.images.length

<div className="carousel-container">
  <img src={currentImage} alt={`${item.name} - Image ${currentIndex + 1}`} className="item-full-image" />
  
  {totalImages > 1 && (
    <>
      <button className="carousel-button carousel-button-prev" onClick={(e) => prevImage(item.id, totalImages, e)}>
        <ChevronLeft size={32} />
      </button>
      <button className="carousel-button carousel-button-next" onClick={(e) => nextImage(item.id, totalImages, e)}>
        <ChevronRight size={32} />
      </button>
      <div className="carousel-indicators">
        {item.images.map((_, index) => (
          <span key={index} className={`carousel-dot ${index === currentIndex ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(prev => ({ ...prev, [item.id]: index })) }} />
        ))}
      </div>
    </>
  )}
</div>
```

**NEW:**
```javascript
<OptimizedCarousel 
  images={item.images}
  alt={item.name}
  isRTL={isRTL}
  className="carousel-container"
/>
```

## Benefits:
- ✅ Reduced code by ~50 lines per page
- ✅ Lazy loading of carousel images (only loads current + adjacent)
- ✅ Loading skeletons for better UX
- ✅ Touch/swipe support built-in
- ✅ Keyboard navigation built-in
- ✅ Better performance (fewer images loaded at once)
- ✅ Consistent carousel behavior across all pages
- ✅ RTL support handled automatically

