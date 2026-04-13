'use client'
import { useEffect, useRef } from 'react'

export default function About() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)

  // Parallax on image
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !imgRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const progress = -rect.top / window.innerHeight
      imgRef.current.style.transform = `translateY(${progress * 60}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="about" ref={sectionRef} style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden',
    }}>
      {/* Left — image */}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '500px' }}>
        <div ref={imgRef} style={{
          position: 'absolute', inset: '-10%',
          transition: 'transform 0.1s linear',
        }}>
          {/* Replace src with your AI image */}
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
            alt="About background"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.4) saturate(0.8)' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, transparent 60%, var(--bg) 100%)',
          }} />
        </div>
        {/* Big label on image */}
        <div style={{
          position: 'absolute', bottom: '10%', left: '8%',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(60px, 8vw, 100px)',
          letterSpacing: '4px',
          color: 'rgba(255,255,255,0.08)',
          lineHeight: 1,
          userSelect: 'none',
        }}>ABOUT<br />ME</div>
      </div>

      {/* Right — text */}
      <div style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(40px, 8vw, 100px) clamp(30px, 5vw, 80px)',
        background: 'var(--bg)',
      }}>
        <div className="reveal" style={{
          fontFamily: 'var(--font-head)', fontSize: '12px',
          letterSpacing: '4px', color: 'var(--accent)',
          textTransform: 'uppercase', marginBottom: '20px',
        }}>About Me</div>

        <h2 className="reveal delay-1" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 5vw, 64px)',
          letterSpacing: '2px',
          lineHeight: 1,
          color: 'var(--text)',
          marginBottom: '32px',
        }}>
          CRAFTING<br />
          <span style={{ color: 'var(--accent)' }}>DIGITAL</span><br />
          EXPERIENCES
        </h2>

        <p className="reveal delay-2" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          lineHeight: 1.9,
          color: 'var(--muted)',
          marginBottom: '20px',
          maxWidth: '460px',
        }}>
          I'm Nagulavel M, a Computer Science &amp; Engineering student with a passion for turning ideas into reality through code and creativity. Whether it's crafting clean web experiences or telling stories through video, I love the art of building things that people can see and feel.
        </p>

        <p className="reveal delay-3" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          lineHeight: 1.9,
          color: 'var(--muted)',
          marginBottom: '40px',
          maxWidth: '460px',
        }}>
          Currently leveling up my skills in web development and video editing, I'm eager to take on freelance projects and collaborate with people who have bold ideas. I believe great work comes from curiosity, consistency, and a love for the craft.
        </p>

        <div className="reveal delay-4" style={{ display: 'flex', gap: '40px' }}>
          {[
            { num: '2+', label: 'Projects Built' },
            { num: 'CSE', label: 'Engineering Student' },
            { num: '∞', label: 'Ideas To Build' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '36px', color: 'var(--accent)', letterSpacing: '2px' }}>{num}</div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '11px', color: 'var(--muted)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>


    </section>
  )
}
