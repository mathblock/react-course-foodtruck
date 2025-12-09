import { useState, type FormEvent } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setSubmitted(true);
    // Reset après 3 secondes
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <h1>Contactez-nous</h1>
        <p>Des questions sur nos plats ? Envie de nous faire un retour ? Ecrivez-nous !</p>
      </section>

      <div className="container">
        <div className="contact-layout">
          <div className="contact-info">
            <h2>Informations</h2>
            <div className="info-item">
              <span className="icon"><FaMapMarkerAlt /></span>
              <div>
                <h3>Adresse</h3>
                <p>123 Rue de la Gastronomie<br />75001 Paris, France</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon"><FaPhone /></span>
              <div>
                <h3>Téléphone</h3>
                <p>+33 1 23 45 67 89</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon"><FaEnvelope /></span>
              <div>
                <h3>Email</h3>
                <p>contact@foodtruck-paradise.fr</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon"><FaClock /></span>
              <div>
                <h3>Horaires</h3>
                <p>Lun - Ven: 11h - 22h<br />Sam - Dim: 12h - 23h</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Envoyez-nous un message</h2>
            {submitted && (
              <div className="alert alert-success">
                ✓ Message envoyé avec succès ! Nous vous répondrons bientôt.
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="commande">Question sur une commande</option>
                  <option value="menu">Question sur le menu</option>
                  <option value="feedback">Feedback / Suggestions</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Votre message..."
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
