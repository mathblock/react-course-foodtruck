import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1>À propos de Food Truck Paradise</h1>

        <section className="about-content">
          <div className="about-text">
            <h2>Notre Histoire</h2>
            <p>
              Food Truck Paradise est né d'une passion pour la cuisine de rue et d'un désir
              de partager des saveurs authentiques
            </p>

            <h2>Notre Mission</h2>
            <p>
              Notre mission est simple : apporter de la joie à travers la nourriture.
              Nous croyons que la bonne cuisine peut créer des moments mémorables et
              rapprocher les gens. C'est pourquoi nous nous déplaçons pour vous offrir
              nos délicieux plats où que vous soyez.
            </p>

            <h2>Nos Valeurs</h2>
            <ul>
              <li><strong>Qualité</strong> : Ingrédients frais et préparation soignée</li>
              <li><strong>Service</strong> : Rapidité et amabilité dans le service</li>
              <li><strong>Innovation</strong> : Créativité dans nos recettes et nos présentations</li>
              <li><strong>Communauté</strong> : Engagement envers notre clientèle locale</li>
            </ul>
          </div>

          <div className="about-image">
            <img
              src="/foodtruck-image.jpg"
              alt="Notre Food Truck"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="placeholder-image">
              🌮 Notre Food Truck en action !
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Notre Équipe</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍🍳</div>
              <h3>Chef Marco</h3>
              <p>Chef exécutif passionné par la cuisine mexicaine authentique</p>
            </div>

            <div className="team-member">
              <div className="member-avatar">👩‍🍳</div>
              <h3>Sarah</h3>
              <p>Spécialiste des desserts et pâtisseries maison</p>
            </div>

            <div className="team-member">
              <div className="member-avatar">🚚</div>
              <h3>L'équipe mobile</h3>
              <p>Toujours prêts à vous servir où que vous soyez</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
