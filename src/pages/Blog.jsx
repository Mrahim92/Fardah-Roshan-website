import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Calendar } from 'lucide-react'
import './Blog.css'

function Blog() {
  const { t } = useTranslation()
  // Sample blog data - in a real app, this would come from an API or database
  const blogs = [
    {
      id: 1,
      title: 'New Computer Lab Opens in Kabul',
      excerpt: 'We are excited to announce the opening of a new state-of-the-art computer lab...',
      image: '/Blogs/img_1738405255776_0-1738405257720-picture.webp',
      date: '2025-01-15'
    },
    {
      id: 2,
      title: 'Student Success Stories',
      excerpt: 'Read inspiring stories from our students who are making a difference...',
      image: '/Blogs/WhatsApp Image 2024-08-04 at 17-1739600300508-picture.webp',
      date: '2025-01-10'
    },
    {
      id: 3,
      title: 'Community Library Initiative',
      excerpt: 'Our new library initiative is bringing books to remote communities...',
      image: '/Blogs/WhatsApp Image 2024-08-05 at 11-1739597854505-picture.webp',
      date: '2025-01-05'
    },
    {
      id: 4,
      title: 'Teacher Training Program',
      excerpt: 'Over 100 teachers participated in our latest professional development program...',
      image: '/Blogs/img_1739596267513_0-1739596296500-picture.webp',
      date: '2024-12-28'
    },
    {
      id: 5,
      title: 'Online Learning Success',
      excerpt: 'How our online classes are reaching students in remote areas...',
      image: '/Blogs/img_1739597425945_0-1739597443234-picture.webp',
      date: '2024-12-20'
    },
    {
      id: 6,
      title: 'Scholarship Program Announcement',
      excerpt: 'New scholarship opportunities for deserving students...',
      image: '/Blogs/img_1739598779694_0-1739598802534-picture.webp',
      date: '2024-12-15'
    },
  ]

  const [visibleBlogs] = useState(6)

  return (
    <div className="blog-page">
      <section className="page-hero">
        <div className="container">
          <h1>{t('blog.title')}</h1>
          <p>{t('blog.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blogs-grid">
            {blogs.slice(0, visibleBlogs).map((blog) => (
              <article key={blog.id} className="blog-card card">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <div className="blog-content">
                  <div className="blog-date">
                    <Calendar size={16} />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  <a href="#" className="blog-link">{t('blog.readMore')}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog

