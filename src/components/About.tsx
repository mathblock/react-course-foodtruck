function About() {
  return (
    <section className="max-w-2xl mx-auto p-6 bg-yellow-50 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold text-yellow-900 mb-4">
        À propos de Food Truck Paradise
      </h2>
      <p className="text-yellow-800 mb-3">
        <strong>Food Truck Paradise</strong> est une application dédiée à la
        découverte des meilleurs food trucks de la région. Notre mission est de
        rendre la cuisine nomade accessible à tous, en proposant un menu varié,
        des saveurs authentiques et une expérience conviviale.
      </p>
      <p className="text-yellow-800 mb-3">
        Que vous soyez amateur de tacos, burgers, ou spécialités locales, notre
        équipe sélectionne pour vous les meilleurs produits et recettes,
        préparés avec passion et créativité.
      </p>
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-yellow-900">Notre équipe</h3>
        <ul className="list-disc list-inside text-yellow-800">
          <li>Noah Bello – Développeur React</li>
          <li>Mathblock – Encadrant du projet</li>
          <li>Les food truckers partenaires</li>
        </ul>
      </div>
      <p className="text-yellow-800">
        Merci de soutenir la cuisine de rue et de faire partie de cette aventure
        gourmande !
      </p>
    </section>
  );
}
export default About;
