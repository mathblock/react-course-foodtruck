export default function NotFound() {
  return (
    <div
      style={{
        textAlign: 'center',
        margin: '50px',
        background: 'linear-gradient(135deg, #ffe0f7 0%, #c1f7ff 100%)',
        borderRadius: '24px',
        boxShadow: '0 4px 24px rgba(180, 120, 255, 0.15)',
        padding: '40px',
        fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive',
        color: '#a84ac7',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          fontSize: '48px',
          transform: 'rotate(-20deg)',
          opacity: 0.3,
        }}
        aria-hidden="true"
      >
        🦄
      </span>
      <h1 style={{ fontSize: '72px', margin: '0', letterSpacing: '8px' }}>404</h1>
      <h2 style={{ fontSize: '32px', margin: '16px 0 8px 0' }}>
        La page n'a pas été trouvée !
      </h2>
      <p style={{ fontSize: '20px', marginBottom: '32px' }}>
        Oops, petite étoile égarée ✨ <br /> Reviens vite à l'accueil pour des paillettes, un thé chaud et un câlin virtuel 💕
      </p>
      <a
        href="/"
        style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #ffb6e6 0%, #baffc9 100%)',
          color: '#fff',
          fontWeight: 'bold',
          fontSize: '20px',
          padding: '12px 32px',
          borderRadius: '32px',
          textDecoration: 'none',
          boxShadow: '0 2px 8px rgba(168, 74, 199, 0.15)',
          transition: 'transform 0.2s',
        }}
        onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.08)')}
        onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        🏠 Retour à l'accueil
      </a>
      <span
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          fontSize: '48px',
          transform: 'rotate(15deg)',
          opacity: 0.3,
        }}
        aria-hidden="true"
      >
        🐴
      </span>
    </div>
  );
}