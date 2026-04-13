'use client'

const projects = [
  {
    title: 'OOPSBANNER',
    subtitle: 'Mobile App',
    description: 'A college-assisted mobile application built with object-oriented principles. Explores OOP concepts in a practical, real-world context.',
    tags: ['OOP', 'Mobile', 'College Project'],
    github: 'https://github.com/Nagulavel',
    accent: '#7c6dfa',
    num: '01',
  },
  {
    title: 'HELLO APP',
    subtitle: 'Mobile App',
    description: 'A college-assisted application developed as part of my academic journey, demonstrating core programming skills and app development fundamentals.',
    tags: ['App Dev', 'Programming', 'College Project'],
    github: 'https://github.com/Nagulavel',
    accent: '#fa6d9a',
    num: '02',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{
      minHeight: '100vh',
      padding: 'clamp(80px, 12vw, 160px) 5vw',
      background: 'var(--surface)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Big bg text */}
      <div style={{
        position: 'absolute', top: '50%', right: '-2%',
        transform: 'translateY(-50%)',
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(80px, 18vw, 220px)',
        color: 'rgba(124,109,250,0.03)',
        letterSpacing: '8px',
        userSelect: 'none', pointerEvents: 'none',
        writingMode: 'vertical-rl',
      }}>PROJECTS</div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
        <div className="reveal" style={{
          fontFamily: 'var(--font-head)', fontSize: '12px',
          letterSpacing: '4px', color: 'var(--accent)',
          textTransform: 'uppercase', marginBottom: '16px',
        }}>My Work</div>

        <h2 className="reveal delay-1" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(40px, 6vw, 80px)',
          letterSpacing: '3px',
          color: 'var(--text)',
          marginBottom: '64px',
        }}>PROJECTS</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {projects.map((p, i) => (
            <div key={p.title} className="reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr auto',
                gap: '32px',
                alignItems: 'center',
                padding: '40px',
                background: 'rgba(255,255,255,0.02)',
                border: '0.5px solid rgba(124,109,250,0.1)',
                borderRadius: '4px',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = p.accent + '44'
                e.currentTarget.style.background = 'rgba(124,109,250,0.04)'
                e.currentTarget.style.transform = 'translateX(8px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(124,109,250,0.1)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                e.currentTarget.style.transform = 'translateX(0)'
              }}>
                {/* Left bar accent */}
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0,
                  width: '3px', background: p.accent,
                  borderRadius: '4px 0 0 4px',
                }} />

                {/* Number */}
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '48px',
                  color: 'rgba(124,109,250,0.15)',
                  letterSpacing: '2px',
                  lineHeight: 1,
                }}>{p.num}</div>

                {/* Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(24px, 3vw, 36px)',
                      letterSpacing: '2px',
                      color: 'var(--text)',
                    }}>{p.title}</h3>
                    <span style={{
                      fontFamily: 'var(--font-head)', fontSize: '10px',
                      letterSpacing: '2px', textTransform: 'uppercase',
                      color: p.accent, padding: '3px 10px',
                      border: `0.5px solid ${p.accent}44`,
                      borderRadius: '2px',
                    }}>{p.subtitle}</span>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '15px',
                    color: 'var(--muted)', lineHeight: 1.8,
                    marginBottom: '16px', maxWidth: '500px',
                  }}>{p.description}</p>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{
                        fontFamily: 'var(--font-head)', fontSize: '10px',
                        letterSpacing: '1px', textTransform: 'uppercase',
                        color: 'var(--muted)', padding: '4px 10px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '0.5px solid rgba(255,255,255,0.08)',
                        borderRadius: '2px',
                      }}>{tag}</span>
                    ))}
                  </div>
                </div>

                {/* GitHub link */}
                <a href={p.github} target="_blank" rel="noreferrer" style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                  color: 'var(--muted)', textDecoration: 'none',
                  fontFamily: 'var(--font-head)', fontSize: '10px',
                  letterSpacing: '2px', textTransform: 'uppercase',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = p.accent}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal delay-3" style={{ marginTop: '48px', textAlign: 'center' }}>
          <a href="https://github.com/Nagulavel" target="_blank" rel="noreferrer" style={{
            fontFamily: 'var(--font-head)', fontSize: '13px',
            letterSpacing: '2px', textTransform: 'uppercase',
            color: 'var(--accent)', textDecoration: 'none',
            borderBottom: '1px solid rgba(124,109,250,0.3)',
            paddingBottom: '2px',
            transition: 'borderColor 0.2s',
          }}>View All on GitHub →</a>
        </div>
      </div>


    </section>
  )
}
