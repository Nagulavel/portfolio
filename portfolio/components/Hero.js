'use client'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)
  const [typed, setTyped] = useState('')
  const [phase, setPhase] = useState(0) // 0=typing, 1=pause, 2=deleting

  const phrases = ['Video Editor.', 'Web Developer.', 'CSE Student.', 'Creative Freelancer.']
  const phraseIdx = useRef(0)
  const charIdx = useRef(0)

  // Typing effect
  useEffect(() => {
    let timeout
    const current = phrases[phraseIdx.current]
    if (phase === 0) {
      if (charIdx.current < current.length) {
        timeout = setTimeout(() => {
          setTyped(current.slice(0, charIdx.current + 1))
          charIdx.current++
        }, 75)
      } else {
        timeout = setTimeout(() => setPhase(1), 1800)
      }
    } else if (phase === 1) {
      timeout = setTimeout(() => setPhase(2), 400)
    } else {
      if (charIdx.current > 0) {
        timeout = setTimeout(() => {
          charIdx.current--
          setTyped(current.slice(0, charIdx.current))
        }, 40)
      } else {
        phraseIdx.current = (phraseIdx.current + 1) % phrases.length
        setPhase(0)
      }
    }
    return () => clearTimeout(timeout)
  }, [typed, phase])

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight

    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => {
        p.x += p.dx; p.y += p.dy
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(124,109,250,${p.alpha})`
        ctx.fill()
      })
      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(124,109,250,${0.08 * (1 - dist / 100)})`
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <section id="hero" style={{
      position: 'relative', height: '100vh', width: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* AI background image placeholder */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, #060608 0%, #0d0a1a 50%, #060608 100%)',
      }} />
      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '20%', left: '10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,109,250,0.08) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', right: '10%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(250,109,154,0.06) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center', padding: '0 5vw',
        maxWidth: '900px',
      }}>
        <div style={{
          fontFamily: 'var(--font-head)',
          fontSize: 'clamp(11px, 1.5vw, 13px)',
          letterSpacing: '4px',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: '20px',
          animation: 'fadeInDown 1s ease both',
        }}>Welcome to my portfolio</div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(56px, 10vw, 140px)',
          lineHeight: 0.9,
          letterSpacing: '4px',
          color: 'var(--text)',
          marginBottom: '24px',
          animation: 'fadeInUp 1s ease 0.2s both',
        }}>
          NAGULAVEL M
        </h1>

        <div style={{
          fontFamily: 'var(--font-head)',
          fontSize: 'clamp(18px, 3vw, 28px)',
          fontWeight: 500,
          color: 'var(--muted)',
          marginBottom: '40px',
          minHeight: '40px',
          animation: 'fadeInUp 1s ease 0.4s both',
        }}>
          {typed}<span style={{
            display: 'inline-block', width: '2px', height: '1em',
            background: 'var(--accent)', marginLeft: '4px',
            verticalAlign: 'middle',
            animation: 'blink 1s step-end infinite',
          }} />
        </div>

        <div style={{
          display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap',
          animation: 'fadeInUp 1s ease 0.6s both',
        }}>
          <a href="#projects" style={{
            padding: '14px 36px',
            background: 'var(--accent)',
            color: '#fff',
            fontFamily: 'var(--font-head)',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '1px',
            textDecoration: 'none',
            borderRadius: '2px',
            transition: 'all 0.3s',
            textTransform: 'uppercase',
          }}
          onMouseEnter={e => { e.target.style.background = '#9d8ffb'; e.target.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.target.style.background = 'var(--accent)'; e.target.style.transform = 'none' }}
          >View My Work</a>
          <a href="#contact" style={{
            padding: '14px 36px',
            background: 'transparent',
            color: 'var(--text)',
            fontFamily: 'var(--font-head)',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '1px',
            textDecoration: 'none',
            borderRadius: '2px',
            border: '1px solid rgba(232,232,242,0.2)',
            transition: 'all 0.3s',
            textTransform: 'uppercase',
          }}
          onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
          onMouseLeave={e => { e.target.style.borderColor = 'rgba(232,232,242,0.2)'; e.target.style.color = 'var(--text)' }}
          >Get In Touch</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        animation: 'fadeIn 1s ease 1.2s both',
      }}>
        <span style={{ fontFamily: 'var(--font-head)', fontSize: '10px', letterSpacing: '3px', color: 'var(--muted)', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{
          width: '1px', height: '50px',
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
          animation: 'scrollPulse 2s ease infinite',
        }} />
      </div>

      <style>{`
        @keyframes fadeInUp { from { opacity:0; transform:translateY(30px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeInDown { from { opacity:0; transform:translateY(-20px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes blink { 50% { opacity:0 } }
        @keyframes scrollPulse { 0%,100% { opacity:0.3; transform:scaleY(0.8) } 50% { opacity:1; transform:scaleY(1) } }
      `}</style>
    </section>
  )
}
