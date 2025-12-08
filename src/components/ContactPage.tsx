function ContactPage() {
  return (
    <section className="max-w-xl mx-auto p-6 bg-yellow-50 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold text-yellow-900 mb-4">
        Contactez-nous
      </h2>
      <p className="text-yellow-800 mb-3">
        Une question, une suggestion ou envie de rejoindre l’aventure Food Truck
        Paradise ? N’hésitez pas à nous contacter !
      </p>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-yellow-900">
          Informations de contact
        </h3>
        <ul className="list-disc list-inside text-yellow-800">
          <li>
            Email :{" "}
            <a
              href="mailto:contact@foodtruckparadise.com"
              className="text-yellow-900 underline"
            >
              contact@foodtruckparadise.com
            </a>
          </li>
          <li>
            Téléphone :{" "}
            <a href="tel:+33123456789" className="text-yellow-900 underline">
              01 23 45 67 89
            </a>
          </li>
          <li>Adresse : 42 rue des Saveurs, 75000 Paris</li>
        </ul>
      </div>
      <p className="text-yellow-800">
        Suivez-nous sur les réseaux sociaux pour ne rien manquer de nos
        nouveautés et événements !
      </p>
    </section>
  );
}
export default ContactPage;
