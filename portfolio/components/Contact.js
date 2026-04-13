'use client'

export default function Contact() {
  const links = [
    {
      label: 'nagulavel01@gmail.com',
      value: 'nagulavel01@gmail.com',
      href: 'mailto:nagulavel01@gmail.com',
      icon: null,
    },
    {
      label: 'LinkedIn',
      value: 'nagulavel-m',
      href: 'https://www.linkedin.com/in/nagulavel-m-8b732338a/',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      label: 'GitHub',
      value: 'Nagulavel',
      href: 'https://github.com/Nagulavel',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" style={{
      minHeight: '80vh',
      padding: 'clamp(80px, 12vw, 160px) 5vw',
      background: 'var(--surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(124,109,250,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '700px', width: '100%', textAlign: 'center', position: 'relative' }}>
        <div className="reveal" style={{
          fontFamily: 'var(--font-head)', fontSize: '12px',
          letterSpacing: '4px', color: 'var(--accent)',
          textTransform: 'uppercase', marginBottom: '16px',
        }}>Get In Touch</div>

        <h2 className="reveal delay-1" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(48px, 9vw, 110px)',
          letterSpacing: '4px',
          lineHeight: 0.9,
          color: 'var(--text)',
          marginBottom: '24px',
        }}>
          LET'S<br />
          <span style={{ color: 'var(--accent)' }}>WORK</span><br />
          TOGETHER
        </h2>

        <p className="reveal delay-2" style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          color: 'var(--muted)',
          lineHeight: 1.8,
          marginBottom: '56px',
          maxWidth: '460px',
          margin: '0 auto 56px',
        }}>
          Have a project in mind? I'd love to hear about it. Send me a message and let's create something great together.
        </p>

        <a href="mailto:nagulavel01@gmail.com" className="reveal delay-3" style={{
          display: 'inline-block',
          padding: '18px 52px',
          background: 'var(--accent)',
          color: '#fff',
          fontFamily: 'var(--font-head)',
          fontSize: '14px',
          fontWeight: 600,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          textDecoration: 'none',
          borderRadius: '2px',
          marginBottom: '64px',
          transition: 'all 0.3s',
        }}
        onMouseEnter={e => { e.target.style.background = '#9d8ffb'; e.target.style.transform = 'translateY(-3px)'; e.target.style.boxShadow = '0 20px 40px rgba(124,109,250,0.3)' }}
        onMouseLeave={e => { e.target.style.background = 'var(--accent)'; e.target.style.transform = 'none'; e.target.style.boxShadow = 'none' }}
        >Send Me a Message</a>

        {/* Social links */}
        <div className="reveal delay-4" style={{
          display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap',
        }}>
          {links.map(({ label, value, href, icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
              color: 'var(--muted)', textDecoration: 'none',
              transition: 'color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.transform = 'none' }}
            >
              {icon && icon}
              <span style={{
                fontFamily: 'var(--font-head)',
                fontSize: icon ? '10px' : '13px',
                letterSpacing: '1px',
                textTransform: icon ? 'uppercase' : 'none',
              }}>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
