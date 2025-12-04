import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <p>© {currentYear} Food Truck Paradise. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer
