function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-yellow-50 text-center py-4 mt-8 shadow-inner">
      <p className="text-yellow-900 text-sm">
        © {year} Food Truck Paradise. Tous droits réservés.
      </p>
    </footer>
  );
}

export default Footer;
