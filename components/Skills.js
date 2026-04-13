'use client'
import { useEffect, useRef, useState } from 'react'

const skills = [
  { name: 'Python', level: 70, category: 'Programming' },
  { name: 'C', level: 75, category: 'Programming' },
  { name: 'C++', level: 72, category: 'Programming' },
  { name: 'Java', level: 60, category: 'Programming' },
  { name: 'Video Editing', level: 80, category: 'Creative' },
  { name: 'HTML / CSS', level: 55, category: 'Web' },
  { name: 'Problem Solving', level: 78, category: 'Soft Skill' },
  { name: 'Git & GitHub', level: 60, category: 'Tools' },
]

const categories = ['All', 'Programming', 'Creative', 'Web', 'Tools', 'Soft Skill']

export default function Skills() {
  const [active, setActive] = useState('All')
  const [sectionVisible, setSectionVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setSectionVisible(true)
    }, { threshold: 0.15 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active)

  return (
    <section id="skills" ref={sectionRef} style={{
      minHeight: '100vh',
      padding: 'clamp(80px, 12vw, 160px) 5vw',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background watermark */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(80px, 18vw, 220px)',
        color: 'rgba(124,109,250,0.03)',
        letterSpacing: '8px',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        pointerEvents: 'none',
      }}>SKILLS</div>

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        <div className="reveal" style={{
          fontFamily: 'var(--font-head)',
          fontSize: '12px',
          letterSpacing: '4px',
          color: 'var(--accent)',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>My Skills</div>

        <h2 className="reveal delay-1" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 6vw, 80px)',
          letterSpacing: '3px',
          color: 'var(--text)',
          marginBottom: '48px',
        }}>WHAT I KNOW</h2>

        {/* Filter tabs */}
        <div className="reveal delay-2" style={{
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '56px',
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '8px 20px',
                background: active === cat ? 'var(--accent)' : 'transparent',
                color: active === cat ? '#fff' : 'var(--muted)',
                border: active === cat ? '1px solid var(--accent)' : '1px solid rgba(124,109,250,0.2)',
                borderRadius: '2px',
                fontFamily: 'var(--font-head)',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >{cat}</button>
          ))}
        </div>

        {/* Skill bars — no reveal class here, controlled by sectionVisible */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              style={{
                opacity: sectionVisible ? 1 : 0,
                transform: sectionVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'opacity 0.6s ease ' + (i * 0.07) + 's, transform 0.6s ease ' + (i * 0.07) + 's',
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '8px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{
                    fontFamily: 'var(--font-head)',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--text)',
                  }}>{skill.name}</span>
                  <span style={{
                    fontFamily: 'var(--font-head)',
                    fontSize: '10px',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    padding: '2px 8px',
                    border: '0.5px solid rgba(124,109,250,0.3)',
                    borderRadius: '2px',
                  }}>{skill.category}</span>
                </div>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '18px',
                  color: 'var(--accent)',
                  letterSpacing: '1px',
                }}>{skill.level}%</span>
              </div>

              <div style={{
                height: '3px',
                background: 'rgba(124,109,250,0.1)',
                borderRadius: '2px',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: sectionVisible ? skill.level + '%' : '0%',
                  background: 'linear-gradient(to right, var(--accent), var(--accent2))',
                  borderRadius: '2px',
                  transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1) ' + (i * 0.1) + 's',
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
