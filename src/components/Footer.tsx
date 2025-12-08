export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {currentYear} Food Truck Paradise. Tous droits réservés.</p>
        <p>Le meilleur du street-food, où que vous soyez !</p>
      </div>
    </footer>
  );
}

