'use client'
import { useEffect, useRef } from 'react'

const services = [
  {
    num: '01',
    title: 'Video Editing',
    emoji: '🎬',
    desc: 'Professional video editing for YouTube, reels, promos, and more. Clean cuts, smooth transitions, color grading, and captions.',
    tags: ['YouTube Videos', 'Reels', 'Promos', 'Color Grading'],
    image: '/video-editing-bg.png',
  },
  {
    num: '02',
    title: 'Web Development',
    emoji: '💻',
    desc: 'Building modern, responsive websites and web apps. From landing pages to full portfolio sites — clean code and great design.',
    tags: ['Landing Pages', 'Portfolio Sites', 'Responsive Design'],
    image: '/web-dev-bg.png',
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !bgRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = -rect.top / window.innerHeight
      bgRef.current.style.transform = 'translateY(' + (progress * 80) + 'px)'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="services" ref={sectionRef} style={{
      position: 'relative',
      minHeight: '100vh',
      padding: 'clamp(80px, 12vw, 160px) 5vw',
      overflow: 'hidden',
    }}>
      <div ref={bgRef} style={{
        position: 'absolute',
        inset: '-15%',
        transition: 'transform 0.1s linear',
        zIndex: 0,
        background: 'linear-gradient(135deg, #060608 0%, #0d0a1a 100%)',
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: 'linear-gradient(to bottom, var(--bg) 0%, transparent 20%, transparent 80%, var(--bg) 100%)',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <div className="reveal" style={{
          fontFamily: 'var(--font-head)',
          fontSize: '12px',
          letterSpacing: '4px',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>What I Offer</div>

        <h2 className="reveal delay-1" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 6vw, 80px)',
          letterSpacing: '3px',
          color: 'var(--text)',
          marginBottom: '64px',
        }}>SERVICES</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {services.map((s, i) => (
            <div key={s.num} className="reveal" style={{ transitionDelay: (i * 0.15) + 's' }}>
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '6px',
                  border: '0.5px solid rgba(124,109,250,0.15)',
                  opacity: s.dim ? 0.5 : 1,
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={e => {
                  if (!s.dim) {
                    e.currentTarget.style.borderColor = 'rgba(124,109,250,0.4)'
                    e.currentTarget.style.transform = 'translateX(6px)'
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(124,109,250,0.15)'
                  e.currentTarget.style.transform = 'none'
                }}
              >
                {s.image && (
                  <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                    <img
                      src={s.image}
                      alt=""
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.15) saturate(0.6)',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to right, rgba(6,6,8,0.95) 50%, rgba(6,6,8,0.6) 100%)',
                    }} />
                  </div>
                )}

                <div style={{
                  position: 'relative',
                  zIndex: 1,
                  padding: '36px 40px',
                  display: 'grid',
                  gridTemplateColumns: '70px 1fr',
                  gap: '24px',
                  alignItems: 'center',
                }}>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '14px',
                      letterSpacing: '2px',
                      color: 'var(--accent)',
                      marginBottom: '8px',
                    }}>{s.num}</div>
                    <div style={{ fontSize: '32px', lineHeight: 1 }}>{s.emoji}</div>
                  </div>

                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(28px, 4vw, 48px)',
                      letterSpacing: '2px',
                      color: 'var(--text)',
                      marginBottom: '10px',
                    }}>{s.title}</h3>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '15px',
                      color: 'var(--muted)',
                      lineHeight: 1.8,
                      marginBottom: '16px',
                      maxWidth: '500px',
                    }}>{s.desc}</p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {s.tags.map(tag => (
                        <span key={tag} style={{
                          fontFamily: 'var(--font-head)',
                          fontSize: '10px',
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          color: 'var(--accent)',
                          padding: '3px 10px',
                          border: '0.5px solid rgba(124,109,250,0.25)',
                          borderRadius: '2px',
                        }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
