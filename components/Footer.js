export default function Footer() {
  return (
    <footer style={{
      padding: '32px 5vw',
      borderTop: '0.5px solid rgba(124,109,250,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '12px',
    }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '20px',
        letterSpacing: '3px',
        color: 'var(--accent)',
      }}>NM</div>
      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '13px',
        color: 'var(--muted)',
      }}>
        © {new Date().getFullYear()} Nagulavel M — All rights reserved
      </div>
      <div style={{
        fontFamily: 'var(--font-head)',
        fontSize: '11px',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        color: 'var(--muted)',
      }}>Built with Next.js</div>
    </footer>
  )
}
