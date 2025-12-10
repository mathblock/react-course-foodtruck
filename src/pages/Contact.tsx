import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contactez-nous</h1>
        <div className="contact-content">
          <section className="contact-info">
            <h2>Informations de contact</h2>
            <div className="contact-details">
              <div className="contact-item">
                <h3>📍 Localisation</h3>
                <p>Nous nous déplaçons dans toute la région !</p>
                <p>Suivez-nous sur nos réseaux sociaux pour connaître notre position actuelle.</p>
              </div>

              <div className="contact-item">
                <h3>📞 Téléphone</h3>
                <p>+33 1 23 45 67 89</p>
                <p>Du lundi au dimanche, 11h - 22h</p>
              </div>

              <div className="contact-item">
                <h3>📧 Email</h3>
                <p>contact@foodtruckparadise.fr</p>
                <p>Réponse sous 24h</p>
              </div>

              <div className="contact-item">
                <h3>📱 Réseaux sociaux</h3>
                <p>@foodtruckparadise</p>
                <p>Instagram • Facebook • Twitter</p>
              </div>
            </div>
          </section>

          <section className="contact-form">
            <h2>Envoyez-nous un message</h2>
            <form className="form">
              <div className="form-group">
                <label htmlFor="name">Nom *</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <select id="subject" name="subject">
                  <option value="">Choisissez un sujet</option>
                  <option value="reservation">Réservation</option>
                  <option value="catering">Traiteur</option>
                  <option value="feedback">Commentaires</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>

              <button type="submit" className="btn-submit">Envoyer</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
